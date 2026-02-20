// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Neocode from 'neocode';

const client = new Neocode({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource message', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.session.message.create('id', {
      modelID: 'modelID',
      parts: [{ text: 'text', type: 'text' }],
      providerID: 'providerID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.session.message.create('id', {
      modelID: 'modelID',
      parts: [
        {
          text: 'text',
          type: 'text',
          id: 'id',
          synthetic: true,
          time: { start: 0, end: 0 },
        },
      ],
      providerID: 'providerID',
      messageID: 'msg',
      mode: 'mode',
      system: 'system',
      tools: { foo: true },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.session.message.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
