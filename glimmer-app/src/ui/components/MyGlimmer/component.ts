import Component, { tracked } from '@glimmer/component';

export default class extends Component {
  @tracked private count = 0;

  private increment() {
      this.count++;
  }
}
