import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchDays } from "../actions/dayActions";
import Days from '../components/Days'
import DayTasksContainer from "./DayTasksContainer";



class AllDaysContainer extends Component {
  constructor(props) {
    super()
    props.fetchDays()
  }

  render() {
    return (
      <div>
        <h1>All Days</h1>
        <Days days={this.props.days} />
        <Route path={`${this.props.match.url}/:dayId`} component={DayTasksContainer}/>
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