import { postDataToAnalyze } from './formHandler';

test('postDataToAnalyze calls fetch', () => {
    const mockSuccessResponse = { success : "true" };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    return postDataToAnalyze().then(data => {
        expect(data).toStrictEqual({ success : "true" });
    });
});