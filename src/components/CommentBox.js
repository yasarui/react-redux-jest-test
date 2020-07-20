import React, {useState, Fragment} from 'react';
import {connect} from 'react-redux';
import { addComment,fetchComment } from '../actions';


const CommentBox = (props) => {

    const [comment,setComment] = useState("");
    function handleSubmit(e){
       console.log("handle submit function is running");
       e.preventDefault();
       props.addComment(comment);
       setComment("");
    }
    return(
       <Fragment>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div className="form-group">
                    <label> Comment Box </label>
                    <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary"> Submit </button> &nbsp;&nbsp;
                <button type="button" onClick={()=>props.fetchComment()} className="btn btn-info fetch-comment"> Fetch Comment </button>
            </form> 
       </Fragment>
    )
}

export default connect(null,{addComment,fetchComment})(CommentBox)
