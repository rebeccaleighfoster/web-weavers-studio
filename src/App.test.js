import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import renderer from 'react-test-renderer';
// import OneWeaver from './components/weavers/OneWeaver'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders the UI as expected', () => {
//   const tree = renderer
//     .create(<OneWeaver first_name="Sarah"/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();  
//   });