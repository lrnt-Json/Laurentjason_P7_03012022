import Paper from '@mui/material/Paper';

import * as React from 'react';

const axios = require('axios').default;

function post(){

   axios({
      method: 'get',
      url: 'http://localhost:4000/api/post/:id'
      })
   .then(function (response) {
      const Post = response.data
      console.log(Post)})



return (
   <div className='Home-Form'>
      <Paper sx={{margin:'20px'}} elevation={3} className='Home-Paper'>
         <h2 className='Home-Form-Title'>username</h2>
         <p>Post text</p>
      </Paper>
   </div>
)}
export default post;