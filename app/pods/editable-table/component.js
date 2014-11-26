import Ember from 'ember';

export default Ember.Component.extend({
  number: 0,
  // headings
  // rows
  actions: {
    incrNumber: function() {
      this.incrementProperty('number');
    },
    decrNumber: function() {
      if (this.get('number') > 0) {
        this.decrementProperty('number');
      }
    },
  },
});
