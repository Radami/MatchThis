Template.Item.onCreated(function() {
    this.editMode = new ReactiveVar(false);
});

Template.Item.helpers({
    updateItemId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

Template.Item.events({
    'click .fa-trash': function(){
        Meteor.call('deleteItem', this._id);
    },
    'click .fa-pencil': function(event, template){
        template.editMode.set(!template.editMode.get());
    }
});
