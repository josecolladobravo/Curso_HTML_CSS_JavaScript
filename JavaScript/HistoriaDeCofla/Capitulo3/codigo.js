// class animal {
//   constructor(nombre,especie, edad, color) {
//     this.especie = especie;
//     this.nombre=nombre;
//     this.edad = edad;
//     this.color = color;
//     this.info = `Tengo ${this.edad} años, soy de color ${this.color} y me llamo ${this.nombre} y digo GUAU GUAU `
//   }

//   verInfo(){
//     document.write(this.info + "<br>");
//   }

//   ladrar(){
//     if(this.especie=="perro" || this.especie=="perra"){
//       document.write("¡GUAU, GUAU! <br>")
//     }else{
//       document.write(`No puede ladrar porque es un ${this.especie} <br>`)
//     }
//   }

// }

// class perro extends animal{
//   constructor(nombre,especie,edad,color,raza){
//     super(nombre,especie,edad,color);
//     this.raza=raza;
//   }
// }

// let perro = new animal("Jade","perra",6.2,"manchas");
// let gato = new animal("Cereza","gato",1.3,"amarillo");
// let pajaro = new animal("Piolín","pájaro",3.1,"negro");

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

class Movil {
  constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
    this.color = color;
    this.peso = peso;
    this.resolucionPantalla = resolucionPantalla;
    this.resolucionCamara = resolucionCamara;
    this.memoriaRam = memoriaRam;
    this.estado = false;
  }

  mostrarInformacion() {
    document.write(
      `
      Color: <b>${this.color}</b><br>
      Peso: <b>${this.peso}</b><br>
      Resolución de pantalla: <b>${this.resolucionPantalla}</b><br>
      Resolución de cámara: <b>${this.resolucionCamara}</b><br>
      Memoria RAM: <b>${this.memoriaRam}</b><br><br>
      `
    );
  }

  encender() {
    if (this.estado == false) {
      alert("Móvil encendiéndose");
      this.estado = true;
    } else {
      alert("El móvil ya está encendido, no se puede volver a encender");
    }
  }

  reiniciar() {
    if (this.estado == false) {
      alert("No se puede reiniciar un móvil que está apagado");
    } else {
      alert("Móvil reiniándose");
    }
  }

  apagar() {
    if (this.estado == false) {
      alert("No puedes apagar un móvil que está apagado");
    } else {
      alert("Apagando móvil");
      this.estado = false;
    }
  }

  tomarFoto() {
    if (this.estado == false) {
      alert("No puedes echar fotos porque el móvil está apagado");
    } else {
      alert("Tomando foto");
    }
  }

  grabar() {
    if (this.estado == false) {
      alert("No puedes grabar videos porque el móvil está apagado");
    } else {
      alert("Grabando video");
    }
  }
}

movilUno = new Movil("Rojo", "210", "1080", "64", "8");
movilDos = new Movil("Verde", "190", "Full HD", "48", "4");
movilTres = new Movil("Azul", "200", "1444", "108", "6");

// movilUno.mostrarInformacion();
// movilDos.mostrarInformacion();
// movilTres.mostrarInformacion();
// movilUno.encender();
// movilUno.grabar();

class MovilAltaGama extends Movil{
  constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, camaraExtra){
    super(color,peso,resolucionPantalla,resolucionCamara,memoriaRam);
      this.camaraExtra=camaraExtra;
      this.estado=false;
  }

    grabarCamaraLenta(){
      if(this.estado==false){
        alert("El móvil está apagado y no puede grabar a cámara lenta");
      }else{
        alert("Grabando a cámara lenta");
      }
    }

    reconocimientoFacial(){
      if(this.estado==false){
        alert("El móvil está apagado y no puede usar el reconocimiento facial");
      }else{
        alert("Usando el reconocimiento facial");
      }
    }


  }


movil1 = new MovilAltaGama("rojo","150","1444", "12","8","6");
movil2= new MovilAltaGama("amarillo","160","720", "64","4","12");

movil1.encender();
movil1.grabarCamaraLenta();