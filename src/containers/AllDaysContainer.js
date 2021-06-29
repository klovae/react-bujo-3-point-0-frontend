import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchDays } from "../actions/dayActions";
import Days from '../components/Days'
import DayTasksContainer from "./DayTasksContainer";



class AllDaysContainer extends Component {
  
  componentDidMount() {
    this.props.fetchDays()
  }

  render() {
    return (
      <div>
        <Route path={`${this.props.match.url}/:id`} 
        render={routerProps => {     
          if (this.props.days.length < 2) {
              return <h3>Loading day...</h3>
          } else {
          return (
            <DayTasksContainer 
              day={this.props.days.find(
                (day) => day.id === +routerProps.match.params.id)}
              />)
              }
            } 
        }/>
        <Days days={this.props.days} />
      </div>
    )
  }
}

AllDaysContainer.defaultProps = {
  days: [{ id: null, date: "No days (yet)" }]
}


const mapStateToProps = state => {
  return {
    days: state.days.days,
    loading: state.days.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDays: () => dispatch(fetchDays()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDaysContainer);