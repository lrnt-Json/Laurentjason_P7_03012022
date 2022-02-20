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
            url : 'http://localhost:4000/api/post',
            data: {
                Content: content
              },
            headers: {
               'Authorization': `Basic ${token}`
               }})
               .then (function(response){
            setContent(response.data['content'])})}


    return (
        <div className='Home-Post'>
            <Button sx={{marginTop: '20px'}} value="return" href='/home'>tout les posts</Button>
            <Paper elevation={3} className='Form-Paper'>
                <h2 className='Home-Form-Title'>Nouveau post</h2>

                <TextareaAutosize multiline aria-label="minimum height" rows={3} placeholder="Ecrire ici" style={{ width: 290}}
                onChange={(e) => setContent(e.target.value)} />

                <Button sx={{ margin: '10px 0 20px 0' }} href={"/home"} value="Confirm" id="confirm" onClick={submit}>Confirm</Button>
            </Paper>
        </div>
    )
}

export default Main;