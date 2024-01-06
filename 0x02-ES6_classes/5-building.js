export default class Building {
  construictor(sqft) {
    if (this.cnstructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Classes extending Building must implement evacuationWarningMessage method.');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
