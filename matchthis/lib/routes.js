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

FlowRouter.route('/outfits', {
    name: 'outfits',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Outfits'});
  }
});
