import React from 'react';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <h1>New Weaver</h1>
                <form id="newWeaver">
                    <div>
                        <label for="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label for="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                    <div>
                        <label for="username">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <label for="experience">Experience Level:</label>
                    <select id="experience">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">intermediate</option>
                        <option value="expert">Expert</option>
                        <option value="master">Master</option>
                    </select>
                    <label for="loom type">Loom Type:</label>
                    <select id="loom type">
                        <option value="Rigid heddle">Rigid Heddle</option>
                        <option value="Tapestry"> Tapestry/Frame </option>
                        <option value="Table Loom "> Table Loom </option>
                        <option value="Floor Loom"> Floor Loom </option>
                    </select>
                    <label for="state">Where are you located?</label>
                    <select id="state">
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
                    <div class="form-section">
                        <label for="project description">Bio</label>
                        <textarea name="bio" input placeholder='What do you want other weavers to know about you?' rows="15" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </>
        )
    }
}

//this data will be used to populate the weavers table