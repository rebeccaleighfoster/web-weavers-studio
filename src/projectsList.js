import React from 'react';

export default class ProjectsList extends React.Component {
    render() {
        console.log("projectsList:", this.props)
        return (
            <>
                <p> project List </p>
            </>
        )
    }
}


//map over projects array to display project info in a list filter by selected weaver's id,
//like when a user clicked a folder in noteful to display notes