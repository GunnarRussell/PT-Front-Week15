import React, { useEffect, useState } from 'react'

import CommentForm from '../comment-form/comment-form.js';
import Comment from '../comment/comment.js';
import { commentsAPI } from '../../rest/commentsAPI.js';

export default function CommentList() {

    //STATE HOOK
    //state is an array of comments fetched from API
    //setComments method can be used to change state
    //default state is empty array
    const [comments, setComments] = useState([]);
    
    //EFFECT HOOK
    //updates every render (since the dependency array listed afterwards is empty)
    //functions like componentDidMount() in a class component
    useEffect(() => 
    {
        //every render, call fetchComments method
        fetchComments();
    }, []);

    //fetchComments fetches comments from API and sets the comment state to the fetched comments
    //must be an async function in order to use await keyword
    async function fetchComments()
    {
        //use GET request to fetch comments from API
        const commentsData = await commentsAPI.get();

        //set state (comments) to array of fetched comments
        setComments(commentsData);

        console.log(comments);
    };

    //updateComment passes specific comment to the commentsAPI PUT method in order to update it, and then sets the comment state to the newly updated and fetched comments
    async function updateComment(updatedComment)
    {
        //passes specific comment to the commentsAPI PUT method in order to update it
        await commentsAPI.put(updatedComment);

        //call fetchComments method in order to set state (comments) to array of newly updated and fetched comments
        fetchComments();
    };

    //createComment
    async function createComment(newComment)
    {
      //passes new comment to the commentsAPI POST method in order to create it
      await commentsAPI.post(newComment)

      //call fetchComments method in order to set state (comments) to array of newly created and fetched comments
      fetchComments();
    }

    //deleteComment
    async function deleteComment(comment)
    {
      //passes specific comment to the commentsAPI DELETE method in order to delete it
      await commentsAPI.delete(comment)

      //call fetchComments method in order to set state (comments) to array of newly deleted and fetched comments
      fetchComments();
    }

  return (
    <div>

        <h3>Discuss this article in the comments!</h3>

        {/* for each 'comment' in the 'comments' array (from the state), perform a function that returns a rendered Comment component, and pass a few props to it */}
        {comments.map(function(comment)
          {
            return(
              <Comment
              comment = {comment}
              updateComment = {updateComment}
              deleteComment = {deleteComment}

              // assign a key to each comment. the key is the comment ID for that comment, pulled from the API
              key = {comment.id}
              />
            )
          }
        )}
        
        <br/>

        <CommentForm 
          totalComments = {comments}
          createComment = {createComment}
        />

    </div>
  )
}
