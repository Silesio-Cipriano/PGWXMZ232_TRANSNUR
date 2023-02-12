let modal = document.getElementById('modal');

function closeModal() {
  modal.style.visibility = 'hidden';
  let goUp = document.getElementById('goUp');
  let goDown = document.getElementById('goDown');
  goUp.style.zIndex = 1;
  goDown.style.zIndex = 1;
}

function openModal() {
  modal.style.visibility = 'visible';
  let goUp = document.getElementById('goUp');
  let goDown = document.getElementById('goDown');
  goUp.style.zIndex = 0;
  goDown.style.zIndex = 0;
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
    'mailto:iqbal@transnur.co.mz.com?subject=' +
    subject +
    '&body=' +
    corpoEmail;

  closeModal();
  console.log('Envie: ', corpoEmail);
}
