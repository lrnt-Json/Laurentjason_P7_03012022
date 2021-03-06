import TextareaAutosize from '@mui/material/TextField';
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

var validator = require('validator');

function Main() {

    const navigate = useNavigate()
    const formData = new FormData();

    let token = decodeURIComponent(document.cookie)

    const [content, setContent] = useState("");
    const [error, setError] = React.useState("");
    const [file, setFile] = useState(null);

    const submit = () => {
        if (validator.isEmpty(content) === true){
        setError("Le post est vide")
        }else{
            formData.append('file', file);
            formData.append('content', content);
            console.log(formData)
            axios({
                method : 'post',
                url : 'http://localhost:4000/api/post',
                data: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
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

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        document.getElementById('fileName').innerHTML=e.target.files[0].name;//
        console.log(e.target.files[0].name)
      };


    return (
        <div className='Home-Post'>
            <Button sx={{marginTop: '20px'}} value="return" onClick={() => {navigate('/home')}}>tout les posts</Button>
            <Paper elevation={3} className='Form-Paper'>
                <h2 className='Home-Form-Title'>Nouveau post</h2>

                <div className='upload'>
                    <label for="file" className="upload-input-trigger">Ajouter une image</label>
                    <input type="file" className='upload-input'
                        id="file" name="file"
                        accept="image/png, image/jpeg" onChange={onFileChange}/>
                    {file !== null && <span><CheckCircleOutlineIcon sx={{color: 'green'}}/></span>}
                </div><p id='fileName'></p>
                <TextareaAutosize multiline aria-label="minimum height" rows={3} placeholder="Ecrire ici" style={{ width: 290}}
                onChange={(e) => setContent(e.target.value)} />

                <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="confirm" onClick={submit}>Confirmer</Button>
                <p className='error'>{error}</p>
            </Paper>
        </div>
    )
}

export default Main;