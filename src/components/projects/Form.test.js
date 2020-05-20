import React from 'react';
import AddProjectForm from './Form.js';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
          <AddProjectForm />
      </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("submits correct values", async () => {
    const { container } = ReactDOM.render(<AddProjectForm />)
    const name = container.querySelector('input[name="first_name"]')


  
    await wait(() => {
      fireEvent.change(name, {
        target: {
          value: "mockname"
        }
      })
    })
    
    expect(results.innerHTML).toBe(
      '{"first_name":"mockname"}'
    )
  })