class InputKeys {
    keys = {};
  
    constructor() {
      window.addEventListener('keydown', this.onKeyDown.bind(this), false);
      window.addEventListener('keyup', this.onKeyUp.bind(this), false);
    }
  
    onKeyDown(event) {
      this.keys[event.code] = true;
    }
  
    onKeyUp(event) {
      this.keys[event.code] = false;
    }
  }
  
  export default new InputKeys();