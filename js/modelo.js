/**
  Modelo de datos del juego.
**/


class Modelo{
  constructor(){
      this.palabras[0]= ['ju','fr', 'fv', 'jm', 'fu', 'jr', 'fv', 'jm']
      /**,
      ['fre', 'jui', 'fui', 'vie', 'mi', 'mery', 'huy'],
      ['juan', 'remo', 'foca', 'dedo', 'cate']
      **/
      this.puntos = 0
      this.nivel = 0
  }
  /**
    Devuelve una nueva palabra.
    Devuelve aleatoriamente unn elemento del array de palabras.
    @return {String} Palabra generada
  **/
  crearPalabra(){
    return this.palabras[0][Math.floor(Math.random() * this.palabras.length)]
  }
  /*sumarPunto(){
    this.puntos = this.puntos + //contar letras palabra
  }*/
}
