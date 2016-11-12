OutfitsToItems = new Mongo.Collection('outfitstoitems');

OutfitsToItems.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

OutfitsToItemsSchema = new SimpleSchema({
    outfit_id: {
        type: String,
        label: "outfit id"
    },
    item_id: {
        type: String,
        label: "item id"
    }
});

OutfitsToItems.attachSchema(OutfitsToItemsSchema);

Meteor.methods({
addItemToOutfit: function(outfit_id, item_id){
    console.log(outfit_id);
    console.log(item_id);
    
    OutfitsToItems.insert({outfit_id: outfit_id, item_id: item_id});
},
});
