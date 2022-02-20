import TextareaAutosize from '@mui/material/TextField';
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

var validator = require('validator');

function Main() {

    const navigate = useNavigate()

    let token = decodeURIComponent(document.cookie)

    const [content, setContent] = React.useState("");
    const [error, setError] = React.useState("");

    const submit = () => {
        if (validator.isEmpty(content) === true){
        setError("Le post est vide")
        }else{
            axios({
                method : 'post',
                url : 'http://localhost:4000/api/post',
                data: {
                    Content: content
                },
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            .then (function(response){
                navigate('/home')
            })
            .catch(function (error) {
                console.error(error)
                setError("Une erreur est survenue en envoyant votre message")
            })
        }
    }


    return (
        <div className='Home-Post'>
            <Button sx={{marginTop: '20px'}} value="return" href='/home'>tout les posts</Button>
            <Paper elevation={3} className='Form-Paper'>
                <h2 className='Home-Form-Title'>Nouveau post</h2>

                <TextareaAutosize multiline aria-label="minimum height" rows={3} placeholder="Ecrire ici" style={{ width: 290}}
                onChange={(e) => setContent(e.target.value)} />

                <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="confirm" onClick={submit}>Confirm</Button>
                <p className='error'>{error}</p>
            </Paper>
        </div>
    )
}

export default Main;