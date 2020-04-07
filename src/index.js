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
  {"id": 1, "ProjectTitle":"towels", "ProjectDescription":"hjfkdla", "Weave Structure": "twill", "Warp Material": "cotton", "Warp Size": "3/2", "Weft Material": "wool" ,"Weft Size": "3/2","Sett": 12, "PPI": 22, "Size on Loom": "1x2" , "Size off loom":"5x6" , "Weaver Id":1 },
  {"id": 2, "Project Title":"scaves","Project Description":"jfld;a", "Weave Structure": "overshot", "Warp Material": "cottolin", "Warp Size":"5/2" , "Weft Material":"linen" ,"Weft Size": "5/2" ,"Sett": 22, "PPI":32 , "Size on Loom": "2x3" , "Size off loom": "6x7", "Weaver Id":2 },
  {"id": 3, "Project Title":"blanket","Project Description":"jkfld;a", "Weave Structure": "monks belt", "Warp Material": "pearl cotton", "Warp Size": "8/4" , "Weft Material": "jute" ,"Weft Size":"8/4" ,"Sett":14 , "PPI": 13, "Size on Loom":"3x4" , "Size off loom": "6x9", "Weaver Id":3 },
  {"id": 4, "Project Title":"wall hanging","Project Description":"jfdls;a", "Weave Structure": "tapestry", "Warp Material": "wool", "Warp Size": "3/2", "Weft Material": "rayon" , "Weft Size": "10/2","Sett": 15, "PPI": 24, "Size on Loom": "4x5", "Size off loom": "9x3", "Weaver Id": 4},

]

ReactDOM.render(<App weavers= {WEAVERS} projects= {PROJECTS}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
