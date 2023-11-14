// Source: https://devsting.com/javascript-number-format
export const commaSeparateNumber = (val) => {
  var sign = 1;
  if (val < 0) {
    sign = -1;
    val = -val;
  }

  let num = val.toString().includes('.') ? val.toString().split('.')[0] : val.toString();

  while (/(\d+)(\d{3})/.test(num.toString())) {
    num = num.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }

  if (val.toString().includes('.')) {
    num = num + '.' + val.toString().split('.')[1];
  }

  return sign < 0 ? '-' + num : num;
}