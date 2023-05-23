import React from 'react';
import Datos from './Datos';
import Envio from './Envio';


class Contacto extends React.Component {
  constructor(props){
    super(props);
  }
  render()  {
  return (
    <div >
        <div>
            {this.props.nac.map(peruana =>
        <Datos 
        
        nuevanac = {peruana.dato}
        />)
            }
        </div>
        <div>
            {this.props.codigo.map(promocion =>
                
                
        <Envio
        
        nuevocod ={promocion.codigo}
        
        />
        
        
        )}
        </div>
    </div>
  );
}
}

export default Contacto;