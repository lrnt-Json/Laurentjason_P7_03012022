import TextareaAutosize from '@mui/material/TextField';
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

var validator = require('validator');

function Main() {

    let token = decodeURIComponent(document.cookie)
    let PostId = document.location.href.split('?')[1]

    const navigate = useNavigate()

    const [content, setContent] = React.useState("");
    const [error, setError] = React.useState("");


    const submit = () => {
        if (validator.isEmpty(content) === true){
            setError("Le post est vide")
            }
        else{
            axios({
                method : 'post',
                url : 'http://localhost:4000/api/post/addfeedback',
                data: {
                    PostID: PostId,
                    Content: content
                },
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            .then (function(response){
                console.log('lue')
                setError("")
                navigate('/home/post?'+ PostId)
            })
        }
    }


    return (
        <div className='Home-Post'>
            <Button value="return" sx={{marginTop: '20px'}} onClick={() => {navigate('/home/post?'+PostId)}} >Retour au post</Button>
            <Paper sx={{ margin: '30px' }} elevation={3} className='Form-Paper'>
                <h2 className='Home-Form-Title'>Nouveau commentaire</h2>

                <TextareaAutosize multiline aria-label="minimum height" rows={3} placeholder="Minimum 3 rows" style={{ width: 290}}
                onChange={(e) => setContent(e.target.value)} />

                <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="confirm" onClick={submit}>Confirmer</Button>
                <p className='error'>{error}</p>
            </Paper>
        </div>
    )
}

export default Main;