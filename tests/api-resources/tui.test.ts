// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Neocode from 'neocode';

const client = new Neocode({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tui', () => {
  // Mock server tests are disabled
  test.skip('appendPrompt: only required params', async () => {
    const responsePromise = client.tui.appendPrompt({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('appendPrompt: required and optional params', async () => {
    const response = await client.tui.appendPrompt({ text: 'text' });
  });

  // Mock server tests are disabled
  test.skip('openHelp', async () => {
    const responsePromise = client.tui.openHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
