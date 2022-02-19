import TextareaAutosize from '@mui/material/TextField';
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { height } from '@mui/system';

const axios = require('axios').default;
let token = decodeURIComponent(document.cookie)
console.log(token)
function Main() {
    const [content, setContent] = React.useState("");

    const submit = () => {
        console.log(content)
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
            console.log(response.data)
            setContent(response.data['content'])})}


    return (
        <div className='Home-Post'>
            <Button value="return" href='/home'>post</Button>
            <Paper sx={{ margin: '30px' }} elevation={3} className='Home-Paper'>
                <h2 className='Home-Form-Title'>Nouveau post</h2>

                <TextareaAutosize aria-label="minimum height" rows={3} placeholder="Minimum 3 rows" style={{ width: 400}}
                onChange={(e) => setContent(e.target.value)} />

                <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="confirm" onClick={submit}>Confirm</Button>
            </Paper>
        </div>
    )
}

export default Main;