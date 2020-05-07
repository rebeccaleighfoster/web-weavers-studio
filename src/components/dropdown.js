// import React, { Component } from 'react';


// class Dropdown extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             weavers: []
//         };
//     }
//     getName = () => {
//         fetch(`/weavers`)
//             .then((weaversResponse) => {
//                 if (!weaversResponse.ok)
//                     return weaversResponse.json().then(e => Promise.reject(e));
//                 return weaversResponse.json();
//             })
//             .then((weavers) => {
//                 this.setState({
//                     weavers
//                 });
//             })
//             .catch(error => {
//                 console.error({ error });
//             });
//     }


//     componentDidMount() {
//         this.getName();
//     }




//     render() {
//         const weaverslist = this.state.weavers
//         const names = weaverslist.map((data) =>
//             <option
//                 key={data.id}
//                 value={data.id}
//             >
//                 {data.first_name}
//             </option>
//         );

//         return (
//             <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
//                 <option>Select Name</option>
//                 {names}
//             </select>
//         )
//     }
// }



// export default Dropdown;