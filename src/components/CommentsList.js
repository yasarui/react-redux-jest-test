import React, {Fragment} from 'react';
import { connect } from 'react-redux';

const CommentsList = ({comments}) => {
    const renderList = () => {
        return(
            comments.map((comment,index)=>{
                return <li className="list-group-item" key={index} > {comment} </li>
            })           
        )
    }
    return (
       <div className="comments-list-wrapper">
            <ul className="list-group">
                  {renderList()}
            </ul> 
       </div>
    )
}

function mapStateToProps(state){
    return {
        comments:state.comments
    }
}

export default connect(mapStateToProps)(CommentsList);