import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import RocketList from '../components/HomeRocket/HomeRocketList';

describe('List oof Rocket test ', () => {
  it('Should renders the Rocket page succefully', () => {
    const app = renderer.create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
