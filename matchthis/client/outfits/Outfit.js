Template.Outfit.onCreated(function() {
    this.editMode = new ReactiveVar(false);
});

Template.Outfit.helpers({
    updateOutfitId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

Template.Outfit.events({
    'click .fa-trash': function(){
        Meteor.call('deleteOutfit', this._id);
    },
    'click .fa-pencil': function(event, template){
        template.editMode.set(!template.editMode.get());
    }
});
