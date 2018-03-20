import Controller from '@ember/controller';

export default Controller.extend({

dropdownOpen: false,

actions: {
    toggleDropdown() {
        this.toggleProperty('dropdownOpen');
    }
}
});