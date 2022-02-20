import TextareaAutosize from '@mui/material/TextField';
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { height } from '@mui/system';

const axios = require('axios').default;

let token = decodeURIComponent(document.cookie)
let PostId = document.location.href.split('?')[1]

function Main() {
    const [content, setContent] = React.useState("");

    const submit = () => {
        axios({
            method : 'post',
            url : 'http://localhost:4000/api/post/addcomment',
            data: {
                PostID: PostId,
                Content: content
              },
            headers: {
               'Authorization': `Basic ${token}`
               }})
               .then (function(response){
            setContent(response.data['content'])})}


    return (
        <div className='Home-Post'>
            <Button value="return" sx={{marginTop: '20px'}} href={'/home/post?'+PostId}>Retour au post</Button>
            <Paper sx={{ margin: '30px' }} elevation={3} className='Form-Paper'>
                <h2 className='Home-Form-Title'>Nouveau commentaire</h2>

                <TextareaAutosize multiline aria-label="minimum height" rows={3} placeholder="Minimum 3 rows" style={{ width: 290}}
                onChange={(e) => setContent(e.target.value)} />

                <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="confirm" href={'/home/post?'+PostId} onClick={submit}>Confirmer</Button>
            </Paper>
        </div>
    )
}

export default Main;