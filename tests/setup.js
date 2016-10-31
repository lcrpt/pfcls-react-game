import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };
