
import React , { Component }from 'react';
import './App.css';
import { Searchbox } from './searchbox/Searchbox';
import { Cards } from './cards/Cards'

//  Get the library fom the git hub and install into ur project folder

const name=require('@rstacruz/startup-name-generator');

class App extends Component{
  constructor(){
    super();
    this.state={
      startupNames:[],
    }
  }
  handleSearch= (svalue)=>{
    this.setState(
      {
        startupNames:name(svalue),
      }
    )
  }
  
  render(){
    return(
      <div className="App">
          <h1>Start-Up Name Generator</h1>
            <Searchbox 
            placeholerNAme="search the domain"
            handleSearch={this.handleSearch}
            />
            
           <div className="startup-names-container">
            {
              this.state.startupNames.map(namedhere=>{
                return <Cards
                  namedhere={namedhere}
                  key={namedhere}
                
                />
              })
            }


             </div>


      </div>
    )
  }
}

export default App;
