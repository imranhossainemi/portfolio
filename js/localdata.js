const contactmeForm = document.querySelector('form');
const EmailValue = document.getElementById('email');
const NameValue = document.getElementById('name');
const MessageValue = document.getElementById('msg');

contactmeForm.addEventListener('input', () => {
  const Data = {
    name: NameValue.value,
    email: EmailValue.value,
    message: MessageValue.value,
  };
  localStorage.setItem('userData', JSON.stringify(Data));
});
