// USED IN <TEXTINPUT> EXAMPLE
// onChangeText={(newValue) => {
//   setNewPhone(maskedPhone(newValue));
// }}

export const maskedPhone = (value) => {
  var x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

  return value;
};

export const maskedDate = (value) => {
  if (value.match(/^\d{2}$/) !== null) {
    value = value + '/';
  } else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
    value = value + '/';
  }

  if (value.length >= 10) {
    return value.substr(0, 10);
  } else {
    return value;
  }
};

export const maskedPhone = (value) => {
  let newVal = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  value = !newVal[2]
    ? newVal[1]
    : '(' + newVal[1] + ') ' + newVal[2] + (newVal[3] ? '-' + newVal[3] : '');

  return value;
};

export const maskedSSN = (value) => {
  var r = value.replace(/\D/g, '');
  if (r.length > 9) {
    r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, '$1-$2-$3');
    return r;
  } else if (r.length > 4) {
    r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, '$1-$2-$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d\d)(\d{0,3})/, '$1-$2');
  } else {
    r = r.replace(/^(\d*)/, '$1');
  }
  return r;
};
