import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Link to='/'> Nav Bar</Link>
            </nav>
        );
    }
}