
function validacaoEmail(field) {
    usuario = field.value.substring(0,field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if((usuario.length >=1)&&
       (dominio.length >=3)&&
       (usuario.search("@")==-1)&&
       (dominio.search("@")==-1) &&
       (usuario.search(" ")==-1) &&
       (dominio.search(" ")==-1) &&
       (dominio.search(".")!=-1) &&
       (dominio.indexOf(".") >=1)&&
       (dominio.lastIndexOf(".") < dominio.length - 1)){

        document.getElementById("msgemail").innerHTML="<font color = 'green'>E-mail válido</font>";
       } else{
        document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido</font>";
        }
}

let botaoEntrar = document.getElementById("entrar")

botaoEntrar.addEventListener("click", entrar())

/*window.onload*/ //=
function entrar(){

    let usuario = document.getElementById("email")
    let usuarioLabel = document.getElementById("emailLabel")

    let senha = document.getElementById("password")
    let senhaLabel = document.getElementById("pswrdLabel")

    let listaUser = []

    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('user'))

    console.log(listaUser)
    

    listaUser.forEach((item) => {
        if(usuario.value == item.email && senha.value == item.password){

            userValid = {
                nome: item.usuario,
                //email: item.email,
                senha: item.senha
            }
        }
    }) 
}