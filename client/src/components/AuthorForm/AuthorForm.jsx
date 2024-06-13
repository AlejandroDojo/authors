import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const URL = "http://localhost:8000/api";

const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    marginTop: '12px'
}
const buttonStyles = {
    ...formStyles,
    flexDirection: "row",
    gap: "12px",
}

const AuthorForm = ({title, authorByID, newAuthor, _id, editAuthor}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const newSubmitHandler = (e) => {
        e.preventDefault();
        
        const apiNew = async () => {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            };
            await axios.post(URL+"/author/new",  {name: name}, config)
                .then((author) => {
                    newAuthor(author.data);
                    setError("");
                    setName("");
                    navigate('/');
                })
                .catch(err => {
                    console.log(err)
                    setError(err.response.data.errors.name.message);
                })
        }
        apiNew();
    }

    const modifyHandler = (e) => {
        
        e.preventDefault();

        const apiCall = async () => {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            };
            const updateAuthor = {
                name: name,
                _id: _id
            }
            if (updateAuthor.name === "") {updateAuthor.name = authorByID.name};
            await axios.put(`${URL}/author/update/${_id}`, {name: updateAuthor.name}, config)
                .then((author) => {
                    editAuthor(updateAuthor);
                    setError("");
                    setName("");
                    navigate('/');
                })
                .catch(err => {
                    console.log(err)
                })
        }
        apiCall();
    }
    const cancelHandler = () => {
        setName('');
        setError('');
        navigate('/');
    }
    return (
        <>
            {(title) ? <h2>{title}</h2> : ""}
            {(!authorByID)
            ? 
                <form style={formStyles} onSubmit={newSubmitHandler}>
                {(!error) 
                    ?<TextField
                    helperText="Enter the name of the author"
                    id="t1Name"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    : <TextField
                    error
                    helperText={error}
                    id="t1Name"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    />
                }
                
                        <div style={buttonStyles}>
                            <Button variant="contained" color='warning' onClick={cancelHandler}>Cancel</Button>
                            <Button variant="contained" color='success' type="submit">Submit</Button>
                        </div>
            </form>
            : 
                <form style={formStyles} onSubmit={modifyHandler}>
                    {(!error) 
                        ?<TextField
                        id="outlined-multiline-static"
                        label="Name to Modify"
                        multiline
                        rows={4}
                        defaultValue={authorByID.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                        : <TextField
                        error
                        helperText={error}
                        id="t1Name"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                        />
                    }
                    
                            <div style={buttonStyles}>
                                <Button variant="contained" color='warning' onClick={cancelHandler}>Cancel</Button>
                                <Button variant="contained" color='success' type="submit">Submit</Button>
                            </div>
                </form>
            }
            
        </>
        );
};

export default AuthorForm;