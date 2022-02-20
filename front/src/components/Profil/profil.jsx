import Paper from '@mui/material/Paper';

import * as React from 'react';

const axios = require('axios').default;



let token = decodeURIComponent(document.cookie)




function Profile(){
const [user, setUser] = React.useState("");
const [mail, setMail] = React.useState("");
axios({
   methode : 'get',
   url : 'http://localhost:4000/api/profil',
   headers: {
      'Authorization': `Basic ${token}`
      }})
      .then (function(response){
   setUser(response.data['username'])
   setMail(response.data['mail'])})

   return (
      <div className='Home-Form'>
         <Paper sx={{margin:'20px'}} elevation={3} className='Home-Paper'>
            <h2 className='Home-Form-Title'>Profil</h2>
            <p>Nom d'utilisateur : {user}</p>
            <p>Email : {mail}</p>
         </Paper>
   </div>
)}

export default Profile;