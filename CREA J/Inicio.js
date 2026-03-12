let cuenta = []

function guardar () {

    let acc_name = document.getElementById("acc_name").value;
    let acc_pass = document.getElementById("acc_pass").value;

      if (acc_name === "" || acc_pass === "") {
                alert("Todos los campos son obligatorios");
            } else {
                let cuenta = {
                   acc_name: acc_name,
                   acc_pass: acc_pass, 
                };
            cuenta.push(cuenta);
            limpiar();
            mostrar();
            }
}
