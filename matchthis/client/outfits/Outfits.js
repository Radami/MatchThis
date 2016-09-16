Template.Outfits.onCreated(function(){
    var self = this;
    self.autorun(function() {
        self.subscribe('outfits');
    });
});

Template.Outfits.helpers({
    outfits: ()=> {
        return Outfits.find({});
    }
});

Template.Outfits.events({
    'click .new-recipe' : () => {
        Session.set('newOutfit', true);
    }
});
