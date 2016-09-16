import { Template } from 'meteor/templating';

import { Items } from '../api/items.js';

import './body.html';

Template.body.helpers({
    items() {
    return Items.find({});
  },
});
