/**
  Clase Vista que muestra el juego.
**/

import {Puntuacion} from 'js/puntuacion.js'

class Vista{
  constructor(){
    this.div = null   //Div donde se desarrolla el juego
    this.puntuacion = new Puntuacion
  }
  /**
    Dibuja el área de juego.
    @param palabra {String} La nueva palabra.
  */
  dibujar(palabra){
    // <div class=palabra>Meca</div>
    let div = document.createElement('div')
    this.div.appendChild(div)
    let span = document.createElement('span')
    div.appendChild(span)
    div.appendChild(document.createTextNode(palabra))
    div.classList.add('palabra')
    div.style.top = '0px'
    div.style.left = Math.floor(Math.random() * 85) + '%'
  }
  /**
    Mueve las palabras del Juego
  **/
  moverPalabras(){
    //Busco todas las palabras del div
    let palabras = this.div.querySelectorAll('.palabra')

    //Para cada palabra, aumento su atributo top.
    for(let palabra of palabras){
      let top = parseInt(palabra.style.top)
      top += 5
      palabra.style.top = `${top}px`
      //Si ha llegado al final
      if (top >= 760)
        palabra.remove()
    }
  }
}
