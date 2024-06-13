import { useState } from 'react';
import AuthorForm from '../components/AuthorForm/AuthorForm';
import { useParams } from 'react-router-dom';

const EditAuthor = ({authors, editAuthor}) => {

    const params = useParams();
    const authorByID = authors.find((auth) => auth._id === params._id);

    return (
        <> 
            <AuthorForm authorByID={authorByID} _id={params._id} editAuthor={editAuthor} title="Edit this Author"/>
        </>
        );
};

export default EditAuthor;