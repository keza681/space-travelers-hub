import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Nav from '../components/Header/Nav';

describe('Header containing the Navbar Component', () => {
  it('Should redenders NavBar Component succefully', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Nav />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
