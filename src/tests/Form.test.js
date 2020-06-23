import React from "react";
import ProjectForm from "../components/projects/ProjectForm";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { Formik, Form, Field } from 'formik';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ProjectForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('Very important form', () => {
  it('submits values and fires', async () => {
    const mock = jest.fn();
    const { getByText, getByTestId } = render(
      <Formik initialValues={{ name: '' }} onSubmit={mock}>
        <Form>
          <Field name="name" data-testid="Input" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
    const input = await waitForElement(() => getByTestId('Input'));
    const button = await waitForElement(() => getByText('Submit'));
    fireEvent.change(input, {
      target: {
        value: 'Charles',
      },
    });
    fireEvent.click(button);
    wait(() => {
      expect(mock).toBeCalled();
      expect(mock.mock.calls[0][0].name).toBe('Charles');
    });
  });
});
