import React from 'react';

export default class WeaversList extends React.Component {

    render() {
        const displayWeaversList = this.props.weavers.map(function (weavers) {
            return (
                <ul>
                <li>{weavers.firstName} {weavers.lastName}</li>
                <li>{weavers.email}</li>
                <li>{weavers.experienceLevel}</li>
                <li>{weavers.loomType}</li>
                <li>{weavers.State}</li>
                <li>{weavers.bio}</li>
                </ul>
            );
        });

        return (
            <>
                {displayWeaversList}
            </>
        )
    }
}
