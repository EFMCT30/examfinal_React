import React from 'react';
import './App.css';
import Lista from './Lista';
import Contacto from './Contacto';

class App extends React.Component {
  constructor(){
    super();

      this.state ={


        celulares : [
        {id:0, modelo:"iphone", precio:"150$", imagen: "iphone 13.jpg" },
        {id:1, modelo:"iphone", precio: "130$", imagen:"descarga.jpg"},
        {id:2, modelo:"iphone", precio: "110$", imagen:"iphone 11.jpg"},
        ],


        nacionalidad : [
          {id:0, dato : "Peruana"}
        ],


        codigopro : [
          {id: 0, cod: "TQ5678"}
        ]

      };


  }
  render()  {
  return (
    <div>

<Lista telefono ={this.state.celulares} />

<Contacto 
nac = {this.state.nacionalidad}

codigoprom = {this.state.codigopro}
/>
    </div>
  );
}
}

export default App;
