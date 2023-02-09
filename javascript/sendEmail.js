let modal = document.getElementById('modal');

function closeModal() {
  modal.style.visibility = 'hidden';
}

function openModal() {
  modal.style.visibility = 'visible';
}

function enviarEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var corpoEmail =
    'Nome: ' +
    name +
    '%0D%0A' +
    'E-mail: ' +
    email +
    '%0D%0A' +
    'Assunto: ' +
    subject +
    '%0D%0A' +
    'Mensagem:%0D%0A' +
    message;
  window.location.href =
    'mailto:silesioleuderio@gmail.com?subject=' +
    subject +
    '&body=' +
    corpoEmail;

  closeModal();
  console.log('Envie: ', corpoEmail);
}
