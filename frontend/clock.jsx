import React from 'react';
import Tabs from './tabs';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.tabs = [
      {title: "one", content: "Tab One"},
      { title: "two", content: "Tab Two" },
      { title: "three", content: "Tab Three" }
    ];
    this.state = {
      date: new Date()
    };
  }

  tick(){
    this.setState({
      date: new Date(),
    });
  }

  dateString() {
    const hours = this.state.date.getHours();
    const minutes = this.state.date.getMinutes();
    const seconds = this.state.date.getSeconds();
    return `${hours}:${minutes}:${seconds} PDT`;
  }



  componentDidMount(){
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="clock-container"><h1>Clock</h1></div>

        <div className="flex-container">
          <div className="time-row" id="time-row-one">Time: <p>{this.dateString()}</p></div>
          <div className="time-row">Date: <p>{this.state.date.toDateString()}</p></div>        
        </div>
        <div className="tabs-auto-container">
          <Tabs tabArray={this.tabs} />
          <div className="extra"></div>
        </div>
      </div>
    );
  }
}

export default Clock;