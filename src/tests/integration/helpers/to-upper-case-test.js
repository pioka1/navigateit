
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('to-upper-case', 'helper:to-upper-case', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{to-upper-case inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

