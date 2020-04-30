import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import Nav from '../Nav';
import * as Yup from 'yup';
import AddProjectForm from "./form"


function AddProject() {
    console.log('add project ran')
    return (
        <>
            <Nav />
            <AddProjectForm />
        </>
    )
}

export default AddProject


