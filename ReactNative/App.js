import React from 'react';
import logo from './WarframeLogo.png';
import './App.css';
import consultarWarframe from './library/library.js';

class App extends React.Component{

  constructor(props){
    super(props)
    }
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Herramienta para verificar reliquias en Warframe en tiempo real</h1>
          <p>Aca se pueden ver las reliquias activas que se pueden farmear</p>
          <button className="button" onClick={this.handlerClick}>Reliquias activas</button>
          
        </header>
        
      </div>
    );
  }

    handlerClick(){
      function funcionCallback(datos){
        var i = 0;
        while(datos.fissures[i] != null){
          var reliquias = datos.fissures[i];
          var Mensaje = "Reliquias activas: \nPlaneta: " + (reliquias.node) + "\nMision: " + (reliquias.missionType) + "\nEnemigos: " + (reliquias.enemy) + "\nTipo: " + (reliquias.tier) + "\nTiempo restante: " + (reliquias.eta);
          alert(Mensaje);
          i++;
        }
        
    }
    consultarWarframe(funcionCallback);
    }
    
  }
  
export default App;
