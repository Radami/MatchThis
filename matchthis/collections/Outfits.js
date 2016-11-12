Outfits = new Mongo.Collection('outfits');

Outfits.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

OutfitSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    items: {
        type: [ String ],
        label: "Item ids",
        autoValue: function() {
            return new Array();
        },
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Outfits.attachSchema(OutfitSchema);

Meteor.methods({
    deleteOutfit: function(id) {
        Outfits.remove(id);
    },
});
