// function validate() {
//   const text = document.getElementById('email').value;
//   const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
//   document.forms[0].onsubmit = function email(e) {
//     if (!(validator.test(text))) {
//       document.getElementById('valTxt').innerHTML = 'Please use lowercase to enter valid email address!';
//       document.getElementById('valTxt').style.visibility = 'visible';
//       document.getElementById('valTxt').style.color = 'white';
//       document.getElementById('valTxt').style.background = 'red';
//       document.getElementById('valTxt').style.textAlign = 'center';
//       e.preventDefault();
//     }
//   };
// }
// const vDl = document.querySelector('#form-btm');
// console.log(vDl);
// vDl.addEventListener('click', (e) => {
//     validate();
// });
function emailValidator() {
    const EMAIL_INVALID = 'Please enter a correct email address format';
    const email = document.getElementById('email').value;
    const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  
    document.forms[0].onsubmit = function (event) {
      if (emailRegx.test(email)) {
        document.getElementById('valTxt').innerHTML = 'Success!';
        document.getElementById('valTxt').style.color = 'green';
      } else {
        document.getElementById('valTxt').innerHTML = EMAIL_INVALID;
        document.getElementById('valTxt').style.color = 'red';
        event.preventDefault();
      }
    };
  }