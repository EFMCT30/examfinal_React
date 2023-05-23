import React from 'react';
import Celular from './Celular';
import './Lista.css'


class Lista extends React.Component {
  constructor(props){
    super(props);
  }

  render()  {

  return (
    <div className = "list">
        {
            this.props.productos.map(cel =>
                <Celular
                
                NuevaImagen = {cel.imagen}
                NuevoModelo = {cel.modelo}
                NuevoPrecio = {cel.precio} 
                />
                )
        }

    </div>
  );
}
}

export default Lista;