import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../stylesheets/myStyles.css'

function AddProject(values) {
    fetch(`/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("from addproject", data);
        });
}

const EditProject = (values) => {
    console.log("hi")
    fetch(`/projects/edit/${values.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("from edit project", data);
        });
}


const AddProjectForm = (props) => (
    <div>
        <Formik
            enableReinitialize
            initialValues={props.project || {}}
            onSubmit={(values, { setSubmitting }) => {
                console.log("on submit", values)
                if (values.id) {
                    EditProject(values)
                }
                else {
                    AddProject(values)
                }

            }}
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
                return (
                    <form onSubmit={handleSubmit} className="form">
                        <p id="formHeader" className="biggerFont">Add a New Project</p>
                        <div className="smallerFont">
                            <label htmlFor="project_title">Project Title:</label>
                            <input
                                id="project_title"
                                name="project_title"
                                type="text"
                                required
                                placeholder="Table Runners"
                                onChange={handleChange}
                                value={values.project_title}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="project_description">Project Description:</label>
                            <input
                                id="project_description"
                                name="project_description"
                                type="text"
                                required
                                placeholder="Table Runner and placemats for my aunt!"
                                onChange={handleChange}
                                value={values.project_description}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="weave_structure">Weave Structure:</label>
                            <input
                                id="weave_structure"
                                name="weave_structure"
                                type="text"
                                required
                                placeholder="Monks Belt"
                                onChange={handleChange}
                                value={values.weave_structure}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="warp_material">Warp Material:</label>
                            <input
                                id="warp_material"
                                name="warp_material"
                                type="text"
                                placeholder="Cottolin"
                                onChange={handleChange}
                                value={values.warp_material}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="warp_size">Warp Size:</label>
                            <input
                                id="warp_size"
                                name="warp_size"
                                placeholder="3/2"
                                type="text"
                                onChange={handleChange}
                                value={values.warp_size}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="weft_size">Weft Size:</label>
                            <input
                                id="weft_size"
                                name="weft_size"
                                type="text"
                                placeholder="5/2"
                                onChange={handleChange}
                                value={values.weft_size}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="sett">Sett:</label>
                            <input
                                id="sett"
                                name="sett"
                                type="number"
                                placeholder="12"
                                onChange={handleChange}
                                value={values.sett}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="ppi">Picks Per Inch:</label>
                            <input
                                id="ppi"
                                name="ppi"
                                type="number"
                                placeholder="12"
                                onChange={handleChange}
                                value={values.ppi}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="size_on_loom">Size On Loom:</label>
                            <input
                                id="size_on_loom"
                                name="size_on_loom"
                                type="text"
                                placeholder="12in x 14in"
                                onChange={handleChange}
                                value={values.size_on_loom}
                            />
                        </div>
                        <div className="smallerFont">
                            <label htmlFor="size_off_loom">Size Off Loom:</label>
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
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                         </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                          </button>
                    </form>
                );
            }}
        </Formik>
    </div>
);

export default AddProjectForm