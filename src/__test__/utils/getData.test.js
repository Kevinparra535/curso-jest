import getData from '../../utils/getData';

describe('Fetch Api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar Api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'data' }));

    getData('https://google.com').then((response) => {
      expect(response.data).toEqual('data');
    });

    // Garantizamos que se llame la api
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
