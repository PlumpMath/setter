import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  editable: true,
  isEditing: false,
  focusOut: function() {
    this.editing(false);
  },
  keyDown: function(evt) {
    // 13 === enter
    if (evt.keyCode === 13) {
      this.editing(false);
    }
  },
  // focusInput: function() {
  //   if (this.get('isEditing')) {
  //     this.$().find('input').focus();
  //   }
  // }.on('didInsertElement'),
  editing: function(toggle) {
    if (this.get('editable') && toggle) {
      this.set('isEditing', toggle);
    } else {
      this.set('isEditing', false);
    }
  },
  actions: {
    toggleEdit: function() {
      this.editing(true);
    },
  },
});
