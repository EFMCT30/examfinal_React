import React from 'react';
import './Envio.css'

class Envio extends React.Component{
    constructor(){
        super();
    }
render(){
return(
<div>

<div className ="form" >

<label>Tienda</label>
<select>
    <option></option>
    <option>tienda A</option>

    <option>tienda B</option>

    <option>tienda C</option>

    <option>tienda D</option>
</select>


<label>Código Promocional</label>
<input type = "boton" placeholder ={this.props.nuevocod} />


<button className = "enviar">ENVIAR</button>













</div>
</div>

);
}
}

export default Envio;