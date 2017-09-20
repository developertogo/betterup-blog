import Ember from 'ember';

const { Component, computed, String: { htmlSafe } } = Ember;

export default Component.extend({
  defaultSize: '20px',
  defaultColor: '#00C853', // $green-A700

  computedSizeAndColor: computed('size', 'color', function() {
    let {
      defaultSize, defaultColor, size, color
    } = this.getProperties('defaultSize', 'defaultColor', 'size', 'color');

    return htmlSafe(`font-size: ${size || defaultSize}; color: ${color || defaultColor}`);
  })
});
