module.exports = function check(str, bracketsConfig) {
  let confArr = bracketsConfig.map(el => el.join(""));
  let checkStr = (s) => {
    for (let k of confArr) {
      if (s.includes(k)) s = s.replace(k, "");
    }
    str = s;
    for (let k of confArr) {
      if (str.includes(k)) checkStr(str);
    }
  }
  checkStr(str);
  return str.length === 0;
}
