import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav'

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

                //input form from repl 
                //this data will be used to populate projects table
