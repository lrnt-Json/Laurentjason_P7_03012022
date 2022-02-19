import Paper from '@mui/material/Paper';

import * as React from 'react';

const axios = require('axios').default;

let token = decodeURIComponent(document.cookie)
function Post(){

axios({
   methode : 'get',
   url : 'http://localhost:4000/api/post',
   headers: {
      'Authorization': `Basic ${token}`
    }})
      .then (function(response){
   console.log(response.data[0]['Content'])
})

return (
   <div className='Home-Form'>
      <Paper sx={{margin:'20px'}} elevation={3} className='Home-Paper'>
         <h2 className='Home-Form-Title'>username</h2>
         <p></p>
      </Paper>
   </div> )
}
export default Post;