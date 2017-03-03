function validateForm(){
  var filters = [/[A-Z][a-z]+/g,//Para name-->Sólo letras, mayúsculas o minúsculas, acepta espacios en blanco
                 /[A-Z][a-z]+/g,//Para lastName-->Sólo letras, mayúsculas o minúsculas, acepta espacios en blanco
                 /([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/,
                 /([^password|PASSWORD|123456|098754]){6,}/g,
                 /^[^0]/
                ];
  var data = {
                name : document.getElementById('name').value,
                lastName : document.getElementById('lastname').value,
                input_email : document.getElementById('input-email').value,
                input_password : document.getElementById('input-password').value,
                bicycle : document.getElementById('bikes').value
              };
//VALIDACIONES
  alert(filters[0].test(data.name) + " " +
        filters[1].test(data.lastName) + " " +
        filters[2].test(data.input_email) + " " +
        filters[3].test(data.input_password) + " " +
        filters[4].test(data.bicycle)
      );
}
