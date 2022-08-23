let enviar = document.querySelector('#enviar');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let nome = document.querySelector('#name');
let alert = document.querySelector('.alert');
let form = document.querySelector('.main-form');

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


form.addEventListener('keydown', (e) =>{
    let text = document.querySelector('.text');
    if(email.value.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Seu email é válido";
        text.style.color = "#62C370"
        text.style.marginLeft = "50px"
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Por favor, insira um e-mail válido";
        text.style.color = "red"
        text.style.marginLeft = "50px"
    }
    return
});


enviar.addEventListener('click', (e) => {
    e.preventDefault();

    const nomeValue = nome.value;
    const emailValue = email.value;
    const messageValue = message.value;

    if (nomeValue === '' || emailValue === '' || messageValue === '') {
        alert.textContent = "Por favor preencha todos os campos!"
        alert.classList = 'error';


    } else {
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