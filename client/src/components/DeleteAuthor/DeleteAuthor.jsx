import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const DeleteAuthor = ({id, deteleAuthor}) => {
    const URL = "http://localhost:8000/api";
    
    const deleteHandler = () => {
        axios.delete(`${URL}/author/delete/${id}`);
        deteleAuthor(id);
    }

    return (
        <> 
            <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button>
        </>
        );
};

export default DeleteAuthor;