import Paper from '@mui/material/Paper';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const axios = require('axios').default;

let token = decodeURIComponent(document.cookie)
let PostId = document.location.href.split('?')[1]

function Post(){
const [admin, setAdmin] = React.useState(false);
const [Username, setUser] = React.useState("");
const [Content, setContent] = React.useState([]);
const [imgUrl, setUrl ] = React.useState("");
const [Feedback, setFeedback] = React.useState([]);
const navigate = useNavigate()
React.useEffect (()=>{
axios({
   method : 'get',
   url : 'http://localhost:4000/api/profil/admin',
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
         setAdmin(response.data)
      })

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
         setFeedback(response.data)})

axios({
   method: 'post',
   url: 'http://localhost:4000/api/post/feedback',
   data: {
      PostID: PostId
   },
   headers: {
      'Authorization': `Basic ${token}`
   }
   }).then(function (response) {
      const Post = response.data
      console.log(Post)
      setUser(Post.Username)
      setContent(Post.Content)
      setUrl(Post.imgUrl)
   })
},[])

function deletePost(){
   axios({
      method : 'delete',
      url : 'http://localhost:4000/api/post',
      data:{
         id: PostId
      },
      headers: {
         'Authorization': `Basic ${token}`
      }
      })

}

function deleteFeedback(id){
   console.log(id)
   axios({
      method : 'delete',
      url : 'http://localhost:4000/api/post/feedback',
      data:{
         id: id
      },
      headers: {
         'Authorization': `Basic ${token}`
      }
   })
}

return (
   <div className='Home-Post'>
      <ButtonGroup sx={{marginTop: '20px'}} exclusive>
         <Button value="post" onClick={() => navigate('/home')}>Tout les posts</Button>
         <Button value="addFeedback" onClick={() => {navigate('/home/post/feedback?'+PostId)}}>Ajouter un commentaire</Button>
      </ButtonGroup>
      <Paper elevation={3} className='One-Post'>
         <div className='Home-Form-Title'>
            <h2>{Username}</h2>
            {admin && <Button sx={{margin: '10px' ,color: 'red' }} value="DeletePost" href="/home" onClick={() => deletePost()}>Supprimer</Button>}
         </div>
         {imgUrl !== null && <div><img src={imgUrl} crossOrigin="anonymous" alt='postimg'></img></div>}
         <p className='text'>{Content}</p>
      </Paper>
      <div className='AllPost'>
         {Feedback.map((comment) => (
            <Paper elevation={3} sx={{backgroundColor: 'rgb(209, 209, 209)'}} className='Home-Paper' key={comment.id}>
               <div className='Home-Form-Title'>
                  <h2>{comment.Username}</h2>
                  {admin && <Button sx={{margin: '10px' ,color: 'red' }} value="DelFeedback" href={document.location.href} onClick={() => deleteFeedback(comment.id)}>Supprimer</Button>}
               </div>
               <p className='text'>{comment.Content}</p>
            </Paper>
         ))}
         </div>
   </div>
)}
export default Post;