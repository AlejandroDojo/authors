import { useState } from 'react';
import AuthorForm from '../components/AuthorForm/AuthorForm';

const NewAuthor = ({newAuthor}) => {


    
    return (
        <> 
            <AuthorForm  edit="false" title={"Add new Author"} newAuthor={newAuthor}/>
        </>
        );
};

export default NewAuthor;