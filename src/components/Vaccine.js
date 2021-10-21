import React from 'react';
import './Vaccine.css';
import VacImage from './VacImage';

class Vaccine extends React.Component {
    constructor(props){
      super(props);
      this.state={
        short : '1000000',
        have: true,
        count: 5,
      }
    }
    handleClick(){
      this.setState({count: this.state.count+1})
    }
  render() {
    if (!this.state.have){
      return <div>Not found</div>;
      
    }
   

    return (
      <div className="vaccine__list">
        <VacImage path="/img/1.jpg" />
        <div className="vaccine__item">{this.props.nameCompony}</div>
        <div className="vaccine__item">{this.props.nameInter}</div>
        <div className="vaccine__item">{this.props.produce}</div>
        <div className="vaccine__item">{this.props.technology}</div>
        <div>{this.state.short}</div>
        <div>{`${this.state.have}`}</div>
        <button onClick={this.handleClick.bind(this)}>Increment count</button>
        <h1>count: {this.state.count}</h1>
      </div>
    );
  }
}

// export const Vac = Vaccine;
export default Vaccine;
