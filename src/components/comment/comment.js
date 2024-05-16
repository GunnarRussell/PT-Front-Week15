import React from 'react'

import Card from 'react-bootstrap/Card';
import './comment.css';

export default function Comment(props) {
    const {comment, updateComment, deleteComment} = props;

    //sends this comment's data to the DELETE request method
    function deleteButton()
    {
        deleteComment(comment);
    }

    //simple alert function, did not code ability to reply to comments
    function alertFunction()
    {
        alert("Replies are not functional at this time. :)");
    }

  return (
    <div>

        [{comment.id} <b>{comment.name}</b> @ {comment.date}]: {comment.text} {comment.color} <button onClick={deleteButton}>DELETE</button>

        {/* <div className="card card-${comment.color} shadow-sm comment">
        <h5 class="card-header card-header-${comment.color} comment-stuff">
        <div style="float: left">${comment.name}</div>
        <div style="float: right"><h6>${comment.date}</h6></div>
        <div style="clear: both;"></div>
        </h5>

        <div class="card-body comment-stuff">
                <p>${comment.text}</p>
                <button class="btn btn-outline-primary" onclick="alertFunction()">Reply</button>

                <button class="btn btn-outline-danger" onClick={deleteButton}>Delete</button>
            </div>
        </div> */}

    </div>
  )
}
