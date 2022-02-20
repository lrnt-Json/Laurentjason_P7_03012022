import Paper from '@mui/material/Paper';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import * as React from 'react';

const axios = require('axios').default;

let token = decodeURIComponent(document.cookie)
let PostId = document.location.href.split('?')[1]

let update = 0
let updateBody = false

function Post(){

const [Username, setUser] = React.useState("");
const [Content, setContent] = React.useState("");
const [Comment, setComment] = React.useState("");
const [bodyComment, setBody] = React.useState("Aucun commentaire");


axios({
   method : 'post',
   url : 'http://localhost:4000/api/post/allcomment',
   data : {
      PostID : PostId
   },
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
      if (update !== 3){
         update = update +1
         setComment(response.data)
      }
      if (Comment !== "" & updateBody === false){
         updateBody = true
         body()
      }
})

function body() {
   let persons = []
   for (let i = 0; i<Comment.length; i++){
      persons.push(
         <Paper elevation={3} sx={{backgroundColor: 'rgb(209, 209, 209)'}} className='Home-Paper'>
         <h2 className='Home-Form-Title'>{Comment[i].Username}</h2>
         <p>{Comment[i].Content}</p>
         </Paper>
      )
   }
   setBody(persons)}


axios({
   method: 'post',
   url: 'http://localhost:4000/api/post/comment',
   data: {
      PostID: PostId
   },
      headers: {
      'Authorization': `Basic ${token}`
      }
   })
   .then(function (response) {
      const Post = response.data
      setUser(Post.Username)
      setContent(Post.Content)
      })


return (
   <div className='Home-Post'>
      <ButtonGroup sx={{marginTop: '20px'}} exclusive>
         <Button value="post" href={'/home'}>Tout les posts</Button>
         <Button value="addComment" href={'/home/post/comment?'+PostId}>Ajouter un commentaire</Button>
      </ButtonGroup>
      <Paper elevation={3} className='One-Post'>
         <h2 className='Home-Form-Title'>{Username}</h2>
         <p>{Content}</p>
      </Paper>
      <div className='AllPost'>{bodyComment}</div>
   </div>
)}
export default Post;