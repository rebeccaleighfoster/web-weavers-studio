import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const WEAVERS = [
  {"id": 1,"firstName":"Ever", "lastName": "Woodward", "email": "ever@wgm.org", "password": "password", "experienceLevel": "Medium", "loomType": "Floor Loom", "State": "Minnesota", "bio": "ever is a bjk jfdksl sdklfsjk"},
  {"id": 2,"firstName":"Karin", "lastName": "Knudsen", "email": "Karin@wgm.org", "password": "password", "experienceLevel": "Medium", "loomType": "Floor Loom", "State": "Minnesota", "bio": " Karin is a bjk jfdksl sdklfsjk"},
  {"id": 3,"firstName":"Betsy", "lastName": "Konop", "email": "Betsy@wgm.org", "password": "password", "experienceLevel": "Medium", "loomType": "Floor Loom", "State": "Minnesota", "bio": " Betsy is a bjk jfdksl sdklfsjk"},
  {"id": 4,"firstName":"Laura", "lastName": "Nelson", "email": "Laura@wgm.org", "password": "password", "experienceLevel": "Medium", "loomType": "Tapestry/Frame", "State": "Minnesota", "bio": "Laura is a bjk jfdksl sdklfsjk"}
]


const PROJECTS = [

]

ReactDOM.render(<App weavers= {WEAVERS}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
