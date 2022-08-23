let enviar = document.querySelector('#enviar');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let nome = document.querySelector('#name');

let alert = document.querySelector('.alert');


enviar.addEventListener('click',(e) => {
    e.preventDefault();

    const nomeValue = nome.value;
    const emailValue = email.value;
    const messageValue = message.value;

    if(nomeValue === '' || emailValue === '' || messageValue === ''){
        alert.textContent = "Por favor preencha todos os campos!"
        alert.classList = 'error';

       
    }else{
        alert.textContent = "Mensagem Enviada!"
        alert.classList = "success";
    }
    nome.value = "";
    email.value = "";
    message.value = "";

    setTimeout(() => {
        alert.textContent = "";
       alert.classList = ""; 
    }, 3000)
    return;


})