import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };

    // addToCart returns an object so it can be compared with "toEqual"
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart', () => {
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };

    // addToCart returns an object so it can be compared with "toEqual"
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
