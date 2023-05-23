import React from 'react';
import './Celular.css'

class Celular extends React.Component {
  constructor(){
    super();
  }

  render()  {

  return (
    <div className="items">
<div className="img"><img src = {'img/'+this.props.Nuevaimagen}/> </div>

<div>{this.props.NuevoModelo}</div>

<div>{this.props.NuevoPrecio}</div>

    </div>
    
  );
}
}

export default Celular;