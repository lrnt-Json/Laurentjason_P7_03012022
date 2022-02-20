import Paper from '@mui/material/Paper';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import * as React from 'react';

const axios = require('axios').default;

let token = decodeURIComponent(document.cookie)
let PostId = document.location.href.split('?')[1]

let update = 0
let updatePermission = 0
let updateBody = false

function Post(){
const [DelPost, setDelPost] = React.useState("");
const [DelFeedback, setDelFeedback] = React.useState("");
const [Username, setUser] = React.useState("");
const [Content, setContent] = React.useState("");
const [Feedback, setFeedback] = React.useState("");
const [bodyFeedback, setBody] = React.useState("Aucun commentaire");

axios({
   method : 'get',
   url : 'http://localhost:4000/api/profil/admin',
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
      if (updatePermission !== 2){
         updatePermission = updatePermission +1
         if (response.data === true){
         console.log(response.data)
         setDelPost(<Button sx={{margin: '10px' ,color: 'red' }} value="DeletePost" href="/home" onClick={deletePost}>Supprimer</Button>)
         setDelFeedback(<Button sx={{margin: '10px' ,color: 'red' }} value="DelFeedback" onClick={deleteFeedback}>Supprimer</Button>)}
      }
})

const deletePost = () => {
   axios({
      method : 'delete',
      url : 'http://localhost:4000/api/post',
      data:{
         PostId: PostId
      },
      headers: {
         'Authorization': `Basic ${token}`
      }
      })
}

const deleteFeedback = () => {
   axios({
      method : 'delete',
      url : 'http://localhost:4000/api/post/feedback',
      data:{
         id: PostId
      },
      headers: {
         'Authorization': `Basic ${token}`
      }
      })
}

axios({
   method : 'post',
   url : 'http://localhost:4000/api/post/allfeedback',
   data : {
      PostID : PostId
   },
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
      if (update !== 3){
         update = update +1
         setFeedback(response.data)
      }
      if (Feedback !== "" & updateBody === false){
         updateBody = true
         body()
      }
})

function body() {
   let persons = []
   for (let i = 0; i<Feedback.length; i++){
      persons.push(
         <Paper elevation={3} sx={{backgroundColor: 'rgb(209, 209, 209)'}} className='Home-Paper'>
         <div className='Home-Form-Title'>
            <h2>{Feedback[i].Username}</h2>
            {DelFeedback}
         </div>
         <p className='text'>{Feedback[i].Content}</p>
         </Paper>
      )
   }
   setBody(persons)}


axios({
   method: 'post',
   url: 'http://localhost:4000/api/post/feedback',
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
         <Button value="addFeedback" href={'/home/post/feedback?'+PostId}>Ajouter un commentaire</Button>
      </ButtonGroup>
      <Paper elevation={3} className='One-Post'>
         <div className='Home-Form-Title'>
            <h2>{Username}</h2>
            {DelPost}
         </div>
         <p className='text'>{Content}</p>
      </Paper>
      <div className='AllPost'>{bodyFeedback}</div>
   </div>
)}
export default Post;