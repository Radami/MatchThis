Items = new Mongo.Collection('items');

Items.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

ItemSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    }
});

Items.attachSchema(ItemSchema);

Meteor.methods({
    deleteItem: function(id) {
        Items.remove(id);
        OutfitsToItems.remove({item_id: id});
    },
});
