import React, { Component } from 'react';
import '../Style/Calendar.css'

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      month: '',
      day: '',
    }
    this.currentDate = this.currentDate.bind(this);
  }

  componentDidMount() {
    this.currentDate()
  }

  currentDate() {
    let today = new Date();

    let dd = today.getDate();
    if(dd<10) dd='0'+dd;
    this.setState(() => ({day: dd}))

    let mm = today.getMonth()+1;

    if(mm<10) mm='0'+mm;

    if(mm === '01') this.setState(() => ({month: 'January'}));
    if(mm === '02') this.setState(() => ({month: 'February'}));
    if(mm === '03') this.setState(() => ({month: 'March'}));
    if(mm === '04') this.setState(() => ({month: 'April'}));
    if(mm === '05') this.setState(() => ({month: 'May'}));
    if(mm === '06') this.setState(() => ({month: 'June'}));
    if(mm === '07') this.setState(() => ({month: 'July'}));
    if(mm === '08') this.setState(() => ({month: 'August'}));
    if(mm === '09') this.setState(() => ({month: 'September'}));
    if(mm === '10') this.setState(() => ({month: 'October'}));
    if(mm === '11') this.setState(() => ({month: 'November'}));
    if(mm === '12') this.setState(() => ({month: 'December'}));
  };


  render() {
    const { day, month } = this.state;
    return(
      <div className="circlesContainer">
        <div className="containerAvaiable"></div>
          <div className="avaiable">Avaiable to Work</div>
        <div className="date"></div>
          <span className="month">{month}</span>
          <span className="day">{day}</span>
      </div>
    )
  }
}

export default Calendar;

