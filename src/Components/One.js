import React from 'react'
import { connect } from 'react-redux'

const One = (props) => {
        
    const Increment=()=>{
          props.dispatch({type:'Increment'})
    }
    const Decrement=()=>{
          props.dispatch({type:'Decrement'})
    }
    const Reset=()=>{
          props.dispatch({type:'Reset'})
    }
    return (
        <div>
      <h3>In Component One----={props.count}</h3>
      <button onClick={()=>{Increment()}}>Increase</button>
      <button onClick={()=>{Decrement()}}>Decrease</button>
      <button onClick={()=>{Reset()}}>Reset</button>
            
        </div>
    )
}
function mapStateToProps(state){
    
    return {
        count:state.count
    }
}
export default connect (mapStateToProps)(One)
