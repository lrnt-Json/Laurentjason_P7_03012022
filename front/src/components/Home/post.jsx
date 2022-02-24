import Paper from '@mui/material/Paper';
import Button from '@mui/material/ToggleButton';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const axios = require('axios').default;
let token = decodeURIComponent(document.cookie)
function Post(){
const [Content, setContent] = React.useState([]);
const navigate = useNavigate()
React.useEffect (()=>{
axios({
   method : 'get',
   url : 'http://localhost:4000/api/post',
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
         setContent(response.data)
      }
)},[])

return (
   <div className='Home-Post'>
      <Button sx={{marginTop: '20px'}} value="addPost" onClick={() => {navigate('/home/addpost')}}>Ajouter un post</Button>
      <div className='AllPost'>
         {Content.map((content) => (
         <a href={'/home/post?'+ content.id} key={content.id}>
            <Paper elevation={3} className='Home-Paper'>
               <h2 className='Home-Form-Title'>{content.Username}</h2>
               {content.imgUrl !== null && <div><img src={content.imgUrl} crossOrigin="anonymous" alt={'postimage' + content.id}></img></div>}
               <p className='text'>{content.Content}</p>
            </Paper>
         </a>
         ))}
      </div>
   </div>)
}
export default Post;