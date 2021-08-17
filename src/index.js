import React from 'react';
import ReactDOM from 'react-dom';
import Vaccine from './components/Vaccine';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      item : [
        {
          nameCompony:"Astrazeneca",
          nameInter:"AZD1222",
          produce:"England",
          technology:"ไวรัส Adonovirus พาหะ",
        },
        {
          nameCompony:"Phizer",
        nameInter:"BNT162",
        produce:"USA",
        technology:"mRNA",
        }

      ]
      
    }
  };
 render(){
   const itemsRendered = this.state.item.map((item)=>{
    return(
      <Vaccine
            nameCompony={item.nameCompony}
            nameInter={item.nameInter}
            produce={item.produce}
            technology={item.technology}
          />
    );
   });

return <div className="vaccine">
  {itemsRendered}
</div>;

   }
 }



ReactDOM.render(<App />, document.querySelector('#root'));
