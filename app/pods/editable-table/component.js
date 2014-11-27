import Ember from 'ember';

export default Ember.Component.extend({
  number: 0,
  tagName: 'table',
  headings: [
    {attribute: "wall", label: "Wall"},
    {attribute: "vb", label: "vb"},
    {attribute: "v0", label: "v0"},
    {attribute: "v1", label: "v1"},
    {attribute: "v2", label: "v2"},
    {attribute: "v3", label: "v3"},
  ],
  rowAttributes: function() {
    return this.get('headings').map(function(heading) {
      return heading.attribute;
    });
  }.property('headings'),
  rows: [
    {wall: "front", vb: 10, v0: 4, v1: 2, v2: 4, v3: 8},
    {wall: "back", vb: 10, v0: 4, v1: 2, v2: 4, v3: 8},
  ],
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
