function emailValidator() {
  const email = document.getElementById('email').value;
  const emailLowcase = email.toLowerCase();
  const EMAIL_INVALID = `Please enter a correct format of " ${email} " your address in lowercase format like this: <b>${emailLowcase}</b> Thank you`;
  const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (event) {
    if (emailRegx.test(email)) {
      document.getElementById('valTxt').innerHTML = 'Success!';
      document.getElementById('valTxt').style.color = 'green';
    }
  };
}
emailValidator();