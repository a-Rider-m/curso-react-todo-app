//Si queremos usar archivos css simplemente debemos importarlo
import './TodoCounter.css';

//Así como las funciones reciben parametros, los componentes reciben props, estos son un objeto
//Podemos declara directamente dentro de parentesis los nombres o definirlos dentro del elemento

//React no traduce como atributos los props

function TodoCounter({total, complete}) {
    return (
      //Para escribir css desde react debemos tener algunas cosas en cuenta
        //1. Debe agregarse dentro de llaves dobles para poder agregar de una vez los estilos sin necesidad de crear variables
        //2. La escritura cambia un poco ya que no usamos guiones sino calmelCase
        //3. Los valores si son solo numeros se pueden pasar sin comillas, pero si tenemos letras debemos poner comillas, por ejemplo como con medidas relativas
        //4. No ponemos ; al finalizar un estilo, debemos poner ,
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: 0,
        padding: 48,
      }}>
        Has completado {complete} de {total} TODOS
      </h1>
    )
}

export { TodoCounter };