import { checkUrl } from './urlChecker';

test('text without http returns false', () => {
    expect(checkUrl("test")).toBe(false);
});

test('text with https returns true', () => {
    expect(checkUrl("https://webpack.js.org/")).toBe(true);
});