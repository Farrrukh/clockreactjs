import React, { Component } from 'react';
import DigitalClock1 from './digitalclock1';
import Analogclock from './Analogclock';
class Digitalclock extends Component {

    constructor(props){
        super(props)

        this.state={
            currentTime:new Date().toLocaleString()
        }
        this.updateTime();
    }
    updateTime(){
      //const{currentTime}=this.state;
      setInterval(()=>{
        this.setState({currentTime:new Date().toLocaleString()})
      },1000)
    }
  render() {
    return (
      <div className="Digitalclock">
       <h1>{/*this.state.currentTime*/}</h1>
       <DigitalClock1 time={this.state.currentTime}/>
       <Analogclock time={this.state.currentTime}/>
      </div>
    );
  }
}

export default Digitalclock;