import React from 'react';

export default class WeaversList extends React.Component {

    render() {
        console.log("WeaversList:", this.props)
        return (
            <>
                <label for="Filter">Filter By:</label>
                <select id="Filter">
                    <option value="State">State</option>
                    <option value="Loom"> Loom Type </option>
                    <option value="Experience ">Experience Level </option>
                </select>
       
            </>
//map over weavers array to display their info in a list, like notes in noteful
        )
    }
}