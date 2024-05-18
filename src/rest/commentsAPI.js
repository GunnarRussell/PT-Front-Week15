// Logic for network calls to API
const COMMENTS_ENDPOINT = "https://6627030ab625bf088c07201b.mockapi.io/comments";

class CommentsAPI
{

    async post(comment) // CREATE / POST function
    {
        try
        {
            //get data from API (wait for the data)
            //grabs specific comment by ID and sends a UPDATE / PUT request for it
            const response = await fetch(`${COMMENTS_ENDPOINT}`,
            {
                method: 'POST', //POST method is for pushing data to API
                headers: {'Content-Type': 'application/json'}, //header says the data is in JSON format
                body: JSON.stringify(comment) //body includes data inside the request. the data is converted into JSON format
            });
        }
        catch(error) //handle error
        {
            console.log(`ERROR, could not create comment: ${error}`);
        }
    }

    async get() // READ / GET function
    {
        try
        {
            //get data from API (wait for the data)
            const response = await fetch(COMMENTS_ENDPOINT);

            //convert data into JSON (also need to wait for the data)
            const data = await response.json();

            return data;
        }
        catch(error) //handle error
        {
            console.log(`ERROR, could not fetch comment: ${error}`);
        }
    }

    async put(comment) // UPDATE / PUT function
    {
        try
        {
            //get data from API (wait for the data)
            //grabs specific comment by ID and sends a UPDATE / PUT request for it
            const response = await fetch(`${COMMENTS_ENDPOINT}/${comment.id}`,
            {
                method: 'PUT', //PUT method is for updating API
                headers: {'Content-Type': 'application/json'}, //header says the data is in JSON format
                body: JSON.stringify(comment) //body includes data inside the request. the data is converted into JSON format
            });

            //convert data into JSON (also need to wait for the data)
            const data = await response.json();

            return data;
        }
        catch(error) //handle error
        {
            console.log(`ERROR, could not update comment: ${error}`);
        }
    }

    async delete(comment) // DELETE function
    {
        try
        {
            //get data from API (wait for the data)
            //grabs specific comment by ID and sends a UPDATE / PUT request for it
            const response = await fetch(`${COMMENTS_ENDPOINT}/${comment.id}`,
            {
                method: 'DELETE', //DELETE method is for deleting data from API
                headers: {'Content-Type': 'application/json'}, //header says the data is in JSON format
            });
        }
        catch(error) //handle error
        {
            console.log(`ERROR, could not delete comment: ${error}`);
        }
    }
}

export const commentsAPI = new CommentsAPI();