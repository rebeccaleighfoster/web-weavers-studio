import React from 'react';
import { Formik } from 'formik';
import Nav from '../Nav';
import * as Yup from 'yup';



const AddProjectForm = () => (
    <div>
        <Formik
            initialValues={{ project_title: "" }}
            onSubmit={(values, { setSubmitting }) => {
                fetch(`/projects`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                    });
                console.log(values)
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
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                    handleReset
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
                                placeholder="Table Runners"
                                onChange={handleChange}
                                value={values.project_title}
                            />
                        </div>
                        <div>
                            <label htmlFor="Project_description">Project Description</label>
                            <input
                                id="Project_Decription"
                                name="Project_Decription"
                                type="text"
                                required
                                placeholder="Table Runner and placemats for my aunt!"
                                onChange={handleChange}
                                value={values.Project_description}
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
                        <button
                            type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
            </button>
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
    console.log('add project ran')
    return (
        <>
            <Nav />
            <AddProjectForm />
        </>
    )
}

export default AddProject;

