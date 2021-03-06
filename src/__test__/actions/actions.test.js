import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;

    const expectedAction = {
      type: 'ADD_TO_CART',
      payload,
    };

    expect(actions.addToCart(payload)).toEqual(expectedAction);
  });
});
