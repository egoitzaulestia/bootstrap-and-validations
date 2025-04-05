// 1. Guarda la información recogida de cada uno de los usuarios en localStorage.
// 2. Implementa validación que obligue a rellenar todos los campos.
// 3. Implementa una validación para el correo.
//TODO: 4. Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
//TODO: 5. Implementa una validación de contraseña.
//TODO: 6. Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.
//TODO: 7. Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
//TODO: 8. Muestra los mensajes utilizando los alerts de Bootstrap.

// 1. Guarda la información recogida de cada uno de los usuarios en localStorage.

const urlUsers = './users.html';

const form = document.getElementById("formData");

// // Load exiting data on page load
// document.addEventListener('DOMContentLoaded', () => {

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.querySelector("#inputName").value;
  const userEmail = document.querySelector("#inputEmail").value;
  const userPassword = document.querySelector("#inputPassword").value;
  const userVerifyPassword = document.querySelector("#inputVerifyPassword").value;
  const message = document.querySelector('#message')

  if (userName === "" || userEmail === "" || userPassword === "" || userVerifyPassword === ""
  ) {
    message.className = 'alert alert-danger col-md-3'
    message.innerHTML = 'Please fill all the fields';
    setTimeout(function() {
      message.className = '';
      message.innerHTML = "";
    }, 3000);
  } else if (!validateEmail(userEmail)) {
    message.className = 'alert alert-danger col-md-3'
    message.innerHTML = 'Please introduce a correct email';
    setTimeout(function() {
      message.className = '';
      message.innerHTML = "";
    }, 3000);
  } else {
    message.className = 'alert alert-success col-md-3'
    message.innerHTML = 'Success';
    form.reset();
    setTimeout(function() {
      message.className = '';
      message.innerHTML = "";
      successChangeURL(urlUsers);
    }, 1500);
  }

  
  // else {
  //   message.className = 'alert alert-success col-md-3'
  //   message.innerHTML = 'Please introduce a strong password';
  //   setTimeout(function() {
  //     message.className = '';
  //     message.innerHTML = "";
  //   }, 3000);
  // }


  // console.log(userName);
  // console.log(userEmail);
  // console.log(userPassword);
  // console.log(userVerifyPassword);

  localStorage.setItem(
    "user",
    JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
    })
  );

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);
  
});

const successChangeURL = (url) => {
  // return window.location.href = url;
  return window.location.replace(url);
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

const validatePassword = (password) => {
  
}
