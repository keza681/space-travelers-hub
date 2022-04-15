import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import MissionList from '../components/HomeRocket/HomeRocketList';

describe('Mission component', () => {
  it('Should returns a row', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <MissionList />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
