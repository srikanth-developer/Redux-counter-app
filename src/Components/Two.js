import React from 'react'
import { connect } from 'react-redux'

const Two = (props) => {
    return (
        <div>
            <h3>In Component two---={props.count}</h3>
        </div>
    )
}
function mapStateToProps(state){
    console.log();
    return {
        count:state.count
    }
}
export default connect(mapStateToProps)(Two)
