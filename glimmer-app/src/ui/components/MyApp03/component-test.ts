import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: MyApp03', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<MyApp03 />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
