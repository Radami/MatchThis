Meteor.publish('items', function() {
    return Items.find();
});

Meteor.publish('outfits', function() {
    return Outfits.find({author: this.userId});
});

Meteor.publish('outfitstoitems', function() {
    return OutfitsToItems.find({});
});


Meteor.publish('singleItem', function(id) {
    check(id, String);
    return Items.find({_id: id});
});
