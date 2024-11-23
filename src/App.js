import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


//Este es un array de objetos, nuestros objetos tienen 2 llaves
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de react', completed: false},
  {text: 'Terminar campaña hoi4', completed: false},
  {text: 'Grindear sl', completed: false},
  {text: 'Esperar al 20 para el evento de invierno', completed: false},
]

function App() {
  return (
    
    //Nuestro return debe retornar por lo menos una etiqueta, pero si no queremos hacerlo usamos React.Fragment o simplemene las llaves <>
    //Pero antes debemos importar React desde react
    <React.Fragment>

      {/*Aqui al igual que las funciones es donde enviamos los props a nuestro componente*/}
      <TodoCounter complete = {12} total = {25}/>
      <TodoSearch />

      {/*react nos pide una key para poder indentificar al elemento, en este caso estamos usando el texto ya que es diferente para cada elemento*/}
      <TodoList>
        {/*con map estamos creando un array de arrays*/}
        {defaultTodos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            complete = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

//Export default me permite exportar sin importar el nombre
//Pero puede ser un problema ya que podemos importar componentes con nombres erroneos
export default App;
