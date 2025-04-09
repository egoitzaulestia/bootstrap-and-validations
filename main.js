// 1. Guarda la información recogida de cada uno de los usuarios en localStorage.
// 2. Implementa validación que obligue a rellenar todos los campos.
// 3. Implementa una validación para el correo.
// 4. Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
//FIXME: 5. Implementa una validación de contraseña. FIXME: añadir mayúsculas
// 6. Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.
// 7. Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
// 8. Muestra los mensajes utilizando los alerts de Bootstrap.

const urlUsers = "./users.html";

const form = document.getElementById("formData");

const userDataBase = [];

// // Load exiting data on page load
// document.addEventListener('DOMContentLoaded', () => {

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.querySelector("#inputName").value;
  const userEmail = document.querySelector("#inputEmail").value;
  const userPassword = document.querySelector("#inputPassword").value;
  const userVerifyPassword = document.querySelector(
    "#inputVerifyPassword"
  ).value;
  const message = document.querySelector("#message");

  if (
    userName === "" ||
    userEmail === "" ||
    userPassword === "" ||
    userVerifyPassword === ""
  ) {
    // If any field is empty, we show an launch (alert-danger) to the user in the page

    message.className = "alert alert-danger col-md-3";
    message.innerHTML = "Please fill all the fields";

    setTimeout(function () {
      message.className = "";
      message.innerHTML = "";
    }, 3000);
  } else if (!validateEmail(userEmail)) {
    // If email doesn't have  correct format, we launch an error (alert-danger)
    message.className = "alert alert-danger col-md-3";
    message.innerHTML = "Please introduce a correct email";

    setTimeout(function () {
      message.className = "";
      message.innerHTML = "";
    }, 3000);

    // If invalid password, we launch an error (alert-danger)
  } else if (!validatePassword(userPassword)) {
    // If passwords doesn't match, we launch an error (alert-danger)
  } else if (!passwordMatch(userPassword, userVerifyPassword)) {
  } else {
    message.className = "alert alert-success col-md-3";
    message.innerHTML = "User created successfully";
    form.innerHTML = "";

    setTimeout(function () {
      message.className = "";
      message.innerHTML = "";
      changeURL(urlUsers);
    }, 3000);

    let userData = JSON.parse(localStorage.getItem("users")) || [];

    userData.push({ userName, userEmail, userPassword });

    localStorage.setItem("users", JSON.stringify(userData));
  }
});

// URL - successChangeURL function: change the URL
const changeURL = (url) => {
  // return window.location.href = url;
  return window.location.replace(url);
};

// EMAIL - validateEmail function
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const passwordMatch = (password1, password2) => {
  // If the passwords doesn't mathc, we launch an error (alert-danger) to the user in the page
  if (password1 !== password2) {
    message.className = "alert alert-danger col-md-3";
    message.innerHTML = "The passwords do not match";

    setTimeout(function () {
      message.className = "";
      message.innerHTML = "";
    }, 3000);

    return false;
  } else {
    return true;
  }
};

const validatePassword = (password) => {
  let errors = [];

  if (password.length < 8) {
    errors.push("Your password must be at least 8 characters");

    message.className = "alert alert-danger col-md-3";
    message.innerHTML = "Your password must be at least 8 characters";

    setTimeout(function () {
      message.className = "";
      message.innerHTML = "";
    }, 3000);

    return false;
  }

  if (password.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");

    message.className = "alert alert-danger col-md-3";
    message.innerHTML = "Your password must contain at least one letter.";

    setTimeout(function () {
      message.className = "";
      message.innerHTML = "";
    }, 3000);

    return false;
  }

  if (password.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }

  if (errors.length > 0) {
    return false;
  }

  return true;
};
