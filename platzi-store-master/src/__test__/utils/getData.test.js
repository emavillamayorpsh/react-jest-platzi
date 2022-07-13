/* eslint-disable arrow-parens */
import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('call API  and return data', () => {
    // mock method that simulates a call to an API
    /**
     * What it does is that intervenes the "fetch" behavior so that if it's called in any function it will always
     * return the value passed in the params.
     * In this example the function getData uses the "fetch" method inside, but it is intervened with this mock so
     * it will return the value passed in the param
     */
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com').then(resp => {
      expect(resp.data).toEqual('12345');
    });

    // check that the value passed as params are the correct ones
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');

    console.log('fetch.mock-calls', fetch.mock.calls);
  });
});
