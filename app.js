
let context = new AudioContext()

function jsNota(frecuencia) {
    //definir la fuente en este caso un oscilador nativo de js
    let o = context.createOscillator()
    //definir la duracion del sonido
    let g = context.createGain()
    //conectar las dos variables
    o.connect(g)
    //el oscilador nos permite elegir entre 4 formas de ondas
    //type = 'sine'|'square'|'triangle'|'sawtooth', tambien se pueden crear formas de ondas personalizadas
    //En este caso elegire la forma sinoidal
    o.type= "sine"
    //definir la frecuencia
    o.frequency.value = frecuencia
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5)

}
