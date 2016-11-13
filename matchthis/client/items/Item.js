Template.Item.onCreated(function() {
    this.editMode = new ReactiveVar(false);

    var self = this;
    self.autorun(function() {
        self.subscribe('outfits');
    });
});

Template.Item.helpers({
    updateItemId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    },
    outfits: ()=> {
        return Outfits.find({});
    },
    register_session: function(item_id, value) {
        Session.set(item_id, value);
    }
});

Template.Item.events({
    'click .fa-trash': function(){
        Meteor.call('deleteItem', this._id);
    },
    'click .fa-pencil': function(event, template){
        template.editMode.set(!template.editMode.get());
    },

    'change select': function(e,t){
        if (e.target.value == "Choose an outfit")
        {
            console.log("invalid selection");
            // Set the id of the item to null
            Session.set(e.target.id, null);
            return;
        }
        // Set the id of the item to the id of the selected outfit
        Session.set(e.target.id,e.target.value);
        //console.log(e.target.id);
        //console.log(e.target.value);

    },
    'click .add-to-outfit': function(event){

        //console.log(event.target.id);
        //console.log(Session.get(event.target.id));

        Meteor.call('addItemToOutfit', Session.get(event.target.id), event.target.id);

    }

});
