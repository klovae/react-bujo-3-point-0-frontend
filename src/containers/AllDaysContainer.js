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
    debugger
    return (
      <div>
        <Route exact path={`${this.props.match.url}/:id`} render={() => <DayTasksContainer day={this.props.days.find(day => day.id === this.props.match.params.id)} />}/>
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