import Paper from '@mui/material/Paper';
import Button from '@mui/material/ToggleButton';

import * as React from 'react';
let update = 0
let updateBody = false
const axios = require('axios').default;
let token = decodeURIComponent(document.cookie)
function Post(){
const [Content, setContent] = React.useState("");
const [bodyContent, setBody] = React.useState("Aucun Post");

axios({
   method : 'get',
   url : 'http://localhost:4000/api/post',
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
      if (update !== 2){
         update = update +1
         setContent(response.data)
      }
      if (Content !== "" & updateBody === false){
         updateBody = true
         body()
      }
})

function body() {
   let persons = []
   for (let i = 0; i<Content.length; i++){
      persons.push(
         <a href={'/home/post?'+ Content[i].id} ><Paper elevation={3} className='Home-Paper'>
         <h2 className='Home-Form-Title'>{Content[i].Username}</h2>
         <p>{Content[i].Content}</p>
         </Paper></a>
      )
   }
   setBody(persons)}

return (
   <div className='Home-Post'>
      <Button sx={{marginTop: '20px'}} value="addPost" href='/home/addpost'>add post</Button>
      <div className='AllPost'>{bodyContent}</div>
   </div>)
}
export default Post;