function validateForm(){
  var filters = [/[A-Z][a-z]+/g,//Para name-->Sólo letras, mayúsculas o minúsculas, acepta espacios en blanco
                 /[A-Z][a-z]+/g,//Para lastName-->Sólo letras, mayúsculas o minúsculas, acepta espacios en blanco
                 /([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/,
                 /([\w-_.@]){6,}/g,//Para input_password-->De 6 a más digitos
                 /^[^0]///Para bicycle-->Que la opcion elegida no sea el valor por defecto
                ];
  var data = {
                name : document.getElementById('name').value,
                lastName : document.getElementById('lastname').value,
                input_email : document.getElementById('input-email').value,
                input_password : document.getElementById('input-password').value,
                bicycle : document.getElementById('bikes').value,
                validations : function (){
                  var incorrectData = 0;
                  if (filters[0].test(this.name) == false) {
                    incorrectData += 1;
                  }
                  if (filters[1].test(this.lastName) == false) {
                    incorrectData += 1;
                  }
                  if (filters[2].test(this.input_email) == false) {
                    incorrectData += 1;
                  }
                  if (filters[3].test(this.input_password) == false) {
                    incorrectData += 1;
                  }else if (this.input_password == "password" || this.input_password == "123456" || this.input_password == "098754") {
                    incorrectData += 1;
                  }
                  if (filters[4].test(this.bicycle) == false) {
                    incorrectData += 1;
                  }
                  if (incorrectData > 0) {
                    alert("No ha ingresado "+ incorrectData + " dato(s) solicitado(s)");
                  }else {
                    document.getElementById("dataSheet").reset();
                  }
                }
              };
//VALIDACIONES
  data.validations();
}
