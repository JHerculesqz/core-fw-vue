export default {
  set: function (strKey, strVal) {
    localStorage.setItem(strKey, strVal);
  },
  get: function (strKey) {
    return localStorage.getItem(strKey);
  }
}
