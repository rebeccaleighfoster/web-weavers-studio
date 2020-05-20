import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Nav from "../Nav";
import { URL } from "../../config";
 
const CreateProfileForm = () => (
  <div>
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        experience_level: "",
        loom_type: "",
        state: "",
        bio: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, "from createprofile")
        fetch(`${URL}/weavers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            setSubmitting(false);
            window.location.href = '/weaverslist'
          });
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
            <div className="biggerFont">Create a Profile</div>
            <div className="smallerFont">
              <label htmlFor="firstName">First name: </label>
              <input
                required
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
                type="text"
                name="first_name"
              />
              <ErrorMessage name="first_name" />
            </div>
            <div className="smallerFont">
              <label htmlFor="lastName">Last name: </label>
              <input
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>

            <div className="smallerFont">
              <label htmlFor="email">Email: </label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="text"
                name="email"
              />
            </div>
            <div className="smallerFont">
              <label htmlFor="experience">Experience Level:</label>
              <select
                value={values.experience_level}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                name="experience_level"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
                <option value="master">Master</option>
              </select>
            </div>
            <div className="smallerFont">            <label htmlFor="loomType">Loom Type:</label>
              <select
                value={values.loom_type}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                name="loom_type"
              >
                <option value="Rigid heddle">Rigid Heddle</option>
                <option value="Tapestry"> Tapestry/Frame </option>
                <option value="Table Loom "> Table Loom </option>
                <option value="Floor Loom"> Floor Loom </option>
              </select>
            </div>
            <div className="smallerFont">            <label htmlFor="location">Where are you located?</label>
              <select
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                name="state"
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
            </div>
            <div className="smallerFont">
              <label htmlFor="bio">Bio </label>
              <input
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="textarea"
                name="bio"
                placeholder="A short bio telling other users a little about yourself"
              />
            </div>
            <br></br>
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <br></br>
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
  return (
    <>
      <Nav />
      <CreateProfileForm />
    </>
  )
}
export default CreateProfile