import React, { useState } from 'react'

import './comment-form.css';

export default function CommentForm(props) {
    //state hooks for name and comment input fields
    const [inputName, setInputName] = useState("");
    const [inputText, setInputText] = useState("");

    //deconstruct props
    const {createComment, totalComments} = props;

    //Button to create new comment
    function createButton()
    {
        //set values of comment object
        const newComment =
        {
            id: (totalComments.length + 1),
            name: inputName,
            date: setDateTime(),
            text: inputText,
            color: randomColor()
        }

        //push comment to API
        createComment(newComment);

        //empty input fields
        setInputName("");
        setInputText("");
    }

    //grabs name data from input field
    function handleNameChange(event)
    {
        setInputName(event.target.value);
    }

    //grabs comment data from comment field
    function handleTextChange(event)
    {
        setInputText(event.target.value);
    }

    //grabs data and time from built-in JS library, reformats it
    function setDateTime()
    {
        let date = new Date();
        let day = date.toLocaleDateString();
        var options =
        {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
        let time = date.toLocaleTimeString("en-US", options);
        return `${day} ${time}`;
    }

    //random color for the comment box
    function randomColor() 
    {
        let randomNum = Math.floor(Math.random() * 7);

        if(randomNum == 1)
        {
            return "red";
        }
        else if(randomNum == 2)
        {
            return "orange";
        }
        else if(randomNum == 3)
        {
            return "yellow";
        }
        else if(randomNum == 4)
        {
            return "green";
        }
        else if(randomNum == 5)
        {
            return "grey";
        }
        else if(randomNum == 6)
        {
            return "blue";
        }
        else if(randomNum == 7)
        {
            return "purple";
        }
    }

  return (
    <div>
        {/* New Comment Form */}
        <div className="jumbotron card shadow-sm new-comment-box">
            {/* Input Name, uses onChange event to read input */}
            <input type="text" onChange={handleNameChange} value={inputName} className="form-control w-50 new-comment-box-stuff" placeholder="Your Name"/>

            {/* Input Comment, uses onChange event to read input */}
            <textarea onChange={handleTextChange} value={inputText} className="form-control new-comment-box-stuff" rows="3" placeholder="Comment..."/>
            
            {/* Submit Button */}
            <button onClick={createButton} className="btn btn-primary form-control">Post Comment</button>
        </div>
        
    </div>
  )
}
