import React from 'react';
import './Datos.css'

class Datos extends React.Component{
    constructor(){
        super();
    }
render(){
return(
<div>

<div >Formulario de Contacto</div>
<div className ="form">


<label>Nombres</label>
<input type = ''/>


<label>Nacionalidad</label>
<input type ="" placeholder = {this.props.nuevanac}/>


<label>Celular</label>
<input type = 'number'/>




</div>
</div>

);
}
}


export default Datos;