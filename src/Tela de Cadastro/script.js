document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('password-confirmation').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const user = {
      username,
      email,
      password,
      date,
      gender
    };


    if (password !== passwordConfirmation) {
      alert('As senhas devem ser iguais.');
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));

    alert('Cadastro realizado com sucesso!');
    window.location.href="../page de login/index.html"


  });
});
  /*checkInputs();*/


  /*function checkInputs() {
    const usernameValue = username.value;
    const password = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
  
    if (usernameValue === "") {
      setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(username);
    }
  
    if (email === "") {
      setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(email)) {
      setErrorFor(email, "Por favor, insira um email válido.");
    } else {
      setSuccessFor(email);
    }
  
    if (password === "") {
      setErrorFor(password, "A senha é obrigatória.");
    } else if (password.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
      setSuccessFor(password);
    }
  
    if (passwordConfirmationValue === "") {
      setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
      setSuccessFor(passwordConfirmation);
    }
  
    const formControls = form.querySelectorAll(".form-control");
  
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }
  
    function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  } */

