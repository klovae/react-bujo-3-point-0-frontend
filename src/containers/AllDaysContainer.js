import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchDays } from "../actions/dayActions";



class AllDaysContainer extends Component {

  componentDidMount() {
    this.props.fetchDays()
  }

  render() {
    return (
      <div>
        <h1>All Days</h1>
        <ul>
          {this.props.days.map(day => <li key={day.id}>{day.date}</li>)}
        </ul>
      </div>
    )
  }
}

AllDaysContainer.defaultProps = {
  days: [ "Days are loading" ]
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