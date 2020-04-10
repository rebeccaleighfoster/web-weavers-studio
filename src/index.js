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
  {"id": 1, "ProjectTitle":"towels", "ProjectDescription":"hjfkdla", "WeaveStructure": "twill", "WarpMaterial": "cotton", "WarpSize": "3/2", "WeftMaterial": "wool" ,"WeftSize": "3/2","Sett": 12, "PPI": 22, "SizeonLoom": "1x2" , "Sizeoffloom":"5x6" , "WeaverId":1 },
  {"id": 2, "ProjectTitle":"scaves","ProjectDescription":"jfld;a", "WeaveStructure": "overshot", "WarpMaterial": "cottolin", "WarpSize":"5/2" , "WeftMaterial":"linen" ,"WeftSize": "5/2" ,"Sett": 22, "PPI":32 , "SizeonLoom": "2x3" , "Sizeoffloom": "6x7", "WeaverId":1 },
  {"id": 3, "ProjectTitle":"blanket","ProjectDescription":"jkfld;a", "WeaveStructure": "monks belt", "WarpMaterial": "pearl cotton", "WarpSize": "8/4" , "WeftMaterial": "jute" ,"WeftSize":"8/4" ,"Sett":14 , "PPI": 13, "SizeonLoom":"3x4" , "Sizeoffloom": "6x9", "WeaverId":1 },
  {"id": 4, "ProjectTitle":"wall hanging","ProjectDescription":"jfdls;a", "WeaveStructure": "tapestry", "WarpMaterial": "wool", "WarpSize": "3/2", "WeftMaterial": "rayon" , "WeftSize": "10/2","Sett": 15, "PPI": 24, "SizeonLoom": "4x5", "Sizeoffloom": "9x3", "WeaverId": 1},

]

ReactDOM.render(<App weavers= {WEAVERS} projects= {PROJECTS}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
