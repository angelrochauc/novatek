const fecha = document.getElementById("fecha"),
servicio = document.getElementById("servicio")

function getCurrentDate () {
  const currentDate = new Date(),
  options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  fecha.innerHTML = currentDate.toLocaleDateString('es', options)
  console.log(fecha)
}

function getCurrentTime () {
  const currentDate = new Date(),
  hours = currentDate.getHours(),
  minutes = formatTime(currentDate.getMinutes()),
  seconds = formatTime(currentDate.getSeconds()),
  formatHours = formatTime(((hours + 11) % 12 + 1)),
  format = (hours < 12) || (hours == 24)  ? 'AM' : 'PM'
  servicio.innerHTML = `${formatHours}:${minutes}:${seconds} <small>${format}</small>`
  
}

function formatTime (value)  {
  return value < 10 ? `0${value}` : value
}

setInterval(getCurrentTime, 1000)

getCurrentDate()
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "573164835660";

  const empresa = encodeURIComponent(document.querySelector("#empresa").value);
  const direccion =encodeURIComponent(document.querySelector("#direccion").value);
  const contacto = document.querySelector("#contacto").value;
  const modelo = encodeURIComponent(document.querySelector("#modelo").value);
  const falla = document.querySelector("#falla").value;
  const solicitante = document.querySelector("#solicitante").value;
  const cargo = document.querySelector("#cargo").value;
  const contacto2 = document.querySelector("#contacto2").value;
  const contacto3 = document.querySelector("#contacto2").value;
  const fecha = document.querySelector("#fecha").innerHTML;

  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");


  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*Reporte*%0A
    *Conjunto o Empresa:*  
		${empresa}%0A
    *Dirección:* 
		${direccion}%0A
    *Contacto:* 
		${contacto}%0A
    *Persona a contactar:* 
		${modelo}%0A
    *Tipo de visita:* 
		${falla}%0A
    *Descripción de la visita:* 
		${solicitante}%0A
    *Nombre del solicitante:* 
		${cargo}%0A
    *Empresa solicitante:* 
		${contacto2}%0A
    *Contacto del solicitante:* 
		${contacto3}%0A
    *Fecha:* 
		${fecha}%0A
		`;

  if (empresa === "" || direccion === ""|| contacto === "" || modelo === ""|| falla === "" || solicitante === "" || cargo === ""|| contacto2 === ""|| contacto3 === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado`;



  window.open(url);
});
