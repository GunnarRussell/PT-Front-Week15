import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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

    //determine comment colors
    const cardColor = `comment shadow-sm card-${comment.color}`;
    const headerColor= `card-header-${comment.color}`;
    const bodyColor = `card-${comment.color}`;

  return (
    <div>  
        <Card className={cardColor}>
            <Card.Header className={headerColor}>
                <h5>
                    <div style={{float: "left"}}>
                        {comment.name}
                    </div>
                    <div style={{float: "right"}}>
                        <h6>{comment.date}</h6>
                    </div>
                    {/* <div style={{clear: "both"}}></div> */}
                </h5>
            </Card.Header>
            <Card.Body className={bodyColor}>
                <p>{comment.text}</p>
                <Button onClick={alertFunction} className="button" variant="outline-primary">Reply</Button>
                <Button onClick={deleteButton} className="button" variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>

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
