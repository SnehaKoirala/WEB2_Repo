// vitest.setup.js

import { beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';

beforeAll(() => {
  // Manually setting up jsdom environment
  const { window } = new JSDOM('<!DOCTYPE html>');
  global.document = window.document;
  global.window = window;
  global.HTMLElement = window.HTMLElement;
  global.navigator = window.navigator;
});
