import React from 'react'
import {connect} from 'react-redux'
const mapState = (state) => ({
  count: state.count,
});
const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

function test(props) {
  return (
    <div>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.incrementAsync}>incrementAsync</button>
    </div>
  )
}

export default connect(mapState, mapDispatch)(test);