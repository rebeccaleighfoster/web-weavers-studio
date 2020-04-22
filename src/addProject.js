import React from 'react';
import { Formik } from 'formik';
import Nav from './Nav';
import * as Yup from 'yup';
import "./addProjects.css"

const AddProjectForm = () => (
    <div>
        <Formik
            initialValues={{ project_title: "" }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required("Required")
            })}
        >
            {props => {
                const {
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                console.log(values)
                return (
                    <form onSubmit={handleSubmit} className="form">
                        <div>
                            <label htmlFor="Project_Title">Project Title</label>
                            <input
                                id="Project_Title"
                                name="Project_Title"
                                type="text"
                                required
                                onBlur={handleBlur}
                                placeholder="Place Mats"
                                onChange={handleChange}
                                value={values.project_title}
                            />
                        </div>
                        <div>
                            <label htmlFor="Project_Description">Project Description</label>
                            <input
                                id="Project_Description"
                                name="Project_Description"
                                type="text"
                                required
                                onBlur={handleBlur}
                                placeholder="Four placemats and a table runner as a gift for my aunt"
                                onChange={handleChange}
                                value={values.project_title}
                            />
                        </div>
                        <div>
                            <label htmlFor="Weave_Structure">Weave Structure</label>
                            <input
                                id="Weave_Structure"
                                name="Weave_Structure"
                                type="text"
                                required
                                placeholder="Monks Belt"
                                onChange={handleChange}
                                value={values.weave_structure}
                            />
                        </div>
                        <div>
                            <label htmlFor="Warp Material">Warp Material</label>
                            <input
                                id="Warp Material"
                                name="Warp Material"
                                type="text"
                                placeholder="Cottolin"
                                onChange={handleChange}
                                value={values.Warp_Material}
                            />
                        </div>
                        <div>
                            <label htmlFor="weft Material">Weft Material</label>
                            <input
                                id="Weft Material"
                                name="Weft Material"
                                type="text"
                                placeholder="Cotton"
                                onChange={handleChange}
                                value={values.Weft_Material}
                            />
                        </div>
                        <div>
                            <label htmlFor="Warp Size">Warp Size</label>
                            <input
                                id="Warp Size"
                                name="Warp Size"
                                placeholder="3/2"
                                type="text"
                                onChange={handleChange}
                                value={values.Warp_Size}
                            />
                        </div>
                        <div>
                            <label htmlFor="WeftSize">Weft Size</label>
                            <input
                                id="Weft Size"
                                name="Weft Size"
                                type="text"
                                placeholder="5/2"
                                onChange={handleChange}
                                value={values.Weft_Size}
                            />
                        </div>
                        <div>
                            <label htmlFor="Sett">Sett</label>
                            <input
                                id="Sett"
                                name="Sett"
                                type="integer"
                                placeholder="12"
                                onChange={handleChange}
                                value={values.Sett}
                            />
                        </div>
                        <div>
                            <label htmlFor="Sett">Picks Per Inch</label>
                            <input
                                id="PPI"
                                name="PPI"
                                type="integer"
                                placeholder="12"
                                onChange={handleChange}
                                value={values.PPI}
                            />
                        </div>
                        <div>
                            <label htmlFor="size_on_loom">Size On Loom</label>
                            <input
                                id="size_on_loom"
                                name="size_on_loom"
                                type="text"
                                placeholder="12in x 14in"
                                onChange={handleChange}
                                value={values.size_on_loom}
                            />
                        </div>
                        <div>
                            <label htmlFor="size_off_loom">Size Off Loom</label>
                            <input
                                id="size_off_loom"
                                name="size_off_loom"
                                type="text"
                                placeholder="12in x 13in"
                                onChange={handleChange}
                                value={values.size_off_loom}
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
            </button>
                    </form>
                );
            }}
        </Formik>
    </div>
);



function AddProject() {
    console.log('add project ran' )
    return (
        <>
            <Nav />
            <AddProjectForm />
        </>
    )
}

export default AddProject;


                //input form from repl 
                //this data will be used to populate projects table


/*
export default class addProject extends React.Component {
render() {
return (
<>
< Nav />
<h1>New Project</h1>
<form>
    <label>
        Project Title <input type="text" name="title" placeholder="towels" />
    </label>
    <label>
        Project Description <input type="text" name="description" rows="15" placeholder="description of project" />
    </label>
    <label>
        Weave Structure <input type="text" name="Weave Structure" placeholder="Monks Belt" />
    </label>
    <label>
        Warp Material <input type="text" name="Warp Material" placeholder="Cottolin" />
    </label>
    <label>
        Warp Size <input type="text" name="Warp Size" placeholder="8/4" />
    </label>
    <label>
        Weft Material <input type="text" name="Weft Material" placeholder="Wool" />
    </label>
    <label>
        Weft Size <input type="text" name="Weft Size" placeholder="3/2" />
    </label>
    <label>
        Sett <input type="number" name="sett" placeholder="12" />
    </label>
    <label>
        Picks Per Inch <input type="number" name="ppi" placeholder="12" />
    </label>
    <label>
        Project Width and Length on Loom <input type="text" name="size on loom" placeholder="12in x 22in" />
    </label>
    <label>
        Project Width and Length off Loom <input type="text" name="size off loom" placeholder="10in x 20in" />
    </label>
</form>
<Link to="projectsList">
    <button type="submit">Submit</button>
</Link>
</>
)
}
}
*/