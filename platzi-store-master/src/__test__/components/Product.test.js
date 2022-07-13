import React from 'react';

/**
 * enzyme: allows us to work easier with tests in REACT
 * mount: allows me to mount the component and work over the whole DOM to check elements or items from the component
 */
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
  test('should render', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );

    expect(product.length).toEqual(1);
  });

  test('should buy on click button', () => {
    // jest.fn(): allows us to use this generic function to test other things in which the function doesn't matter
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );

    // this simulates a click on a "button" element in the "Product" component
    wrapper.find('button').simulate('click');

    // toHaveBeenCalledTimes: allows us to check how many times a function have been called
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
