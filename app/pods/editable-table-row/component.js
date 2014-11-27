import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  layoutName: function() {
    return 'component/editable-table-row/test';
    // return 'component/editable-table-row';
  }.property(),
  columns: function() {
    var self = this;
    return this.get('rowAttrs').map(function(attr) {
      var editable = attr !== 'wall';
      return {display: self.get('item.'+attr), editable: editable};
    });
  }.property('item', 'rowAttributes'),
});
