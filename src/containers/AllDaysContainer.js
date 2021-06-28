import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchDays } from "../actions/dayActions";
import Days from '../components/Days'



class AllDaysContainer extends Component {

  componentDidMount() {
    this.props.fetchDays()
  }

  render() {
    return (
      <div>
        <h1>All Days</h1>
        <Days days={this.props.days} />
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