import React from 'react';
/**
 * shallow: allows us to get elements and test them as a unit, i only need something particular of a component
 * an not all of the elements from the DOM
 */
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('render of the component ', () => {
    const header = shallow(
      // ProviderMock will allow Header to work as expected since it needs a lot of information from REDUX
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });
  test('render of the title ', () => {
    const header = mount(
      // ProviderMock will allow Header to work as expected since it needs a lot of information from REDUX
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('snapshot', () => {
  test('check the snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});
