function TodoList(props) {
    return(
        <ul>
            {/*COMUNICACION ENTRE COMPONENTES MEDIANTE PROPS
                El prop children es especial porque react convierte todo lo que esté dentro de la etiqueta en la propiedad children*/}
            {props.children}
        </ul>
    );
};

export {TodoList};