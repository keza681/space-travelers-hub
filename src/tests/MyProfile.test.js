import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Myprofile from '../components/HomeRocket/MyProfile';

describe('Profile Component ', () => {
  it('Should renders the profile page succefully', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Myprofile />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
