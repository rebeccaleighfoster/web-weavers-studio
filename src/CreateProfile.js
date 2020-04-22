import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Nav from "./Nav"
import "./CreateProfile.css"


const CreateProfileForm = () => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        experienceLevel: "",
        loomType: "",
        State: "",
        bio: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        fetch(`http://localhost:4000/weavers/`, {
          method: 'POST',
          header: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(response => response.json())
          .then(data => { console.log(data) })
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 500);
        console.log(values);
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
          handleBlur,
          handleSubmit,
          handleReset
        } = props;

        return (
          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                required
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
                type="text"
                name="firstName"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="password"
                name="password"
              />
            </div>
            <label htmlFor="experience">Experience Level:</label>
            <select
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              name="experience"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">intermediate</option>
              <option value="expert">Expert</option>
              <option value="master">Master</option>
            </select>
            <label htmlFor="loomType">Loom Type:</label>
            <select
              value={values.loomType}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              name="loomType"
            >
              <option value="Rigid heddle">Rigid Heddle</option>
              <option value="Tapestry"> Tapestry/Frame </option>
              <option value="Table Loom "> Table Loom </option>
              <option value="Floor Loom"> Floor Loom </option>
            </select>
            <label htmlFor="location">Where are you located?</label>
            <select
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              name="location"
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
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

function CreateProfile() {
  console.log('create profile ran')
  return (
    <>
      <Nav />
      <CreateProfileForm />
    </>
  )
}

export default CreateProfile
//this data will be used to populate the weavers table