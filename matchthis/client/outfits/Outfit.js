Template.Outfit.onCreated(function() {
    this.editMode = new ReactiveVar(false);

    var self = this;
    self.autorun(function() {
        self.subscribe('outfitstoitems');
        self.subscribe('items');
    });



});

Template.Outfit.helpers({
    updateOutfitId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    },
    outfitstoitems: function() {
        console.log(this._id);
        mapping =  OutfitsToItems.find({outfit_id: this._id}).fetch();
        items = Items.find({}).fetch();
        var obj = [];
        items.forEach(function(val) {
            obj[val._id] = val.name;
            });
        console.log(mapping);
        console.log(items);
        console.log(obj);
        var lst = [];
        mapping.forEach(function(val) {
            lst.push({"id": val.item_id, "name": obj[val.item_id]});
        });
        return lst;
    },
});

Template.Outfit.events({
    'click .fa-trash': function(){
        Meteor.call('deleteOutfit', this._id);
    },
    'click .fa-pencil': function(event, template){
        template.editMode.set(!template.editMode.get());
    }
});
