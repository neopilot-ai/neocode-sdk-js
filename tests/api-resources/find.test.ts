// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Neocode from 'neocode';

const client = new Neocode({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource find', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.find.retrieve({ pattern: 'pattern' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.find.retrieve({ pattern: 'pattern' });
  });

  // Prism tests are disabled
  test.skip('retrieveFile: only required params', async () => {
    const responsePromise = client.find.retrieveFile({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveFile: required and optional params', async () => {
    const response = await client.find.retrieveFile({ query: 'query' });
  });

  // Prism tests are disabled
  test.skip('retrieveSymbol: only required params', async () => {
    const responsePromise = client.find.retrieveSymbol({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSymbol: required and optional params', async () => {
    const response = await client.find.retrieveSymbol({ query: 'query' });
  });
});
