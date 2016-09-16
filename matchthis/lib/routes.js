FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('outfits');
        }
        BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/items', {
    name: 'items',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Items'});
  }
});
