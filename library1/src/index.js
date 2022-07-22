import _ from 'lodash';

export function sayHello() {
  console.log('[LIBRARY1] In the library - saying hello!')
  const el = document.createElement('h1');
  const words = "hello, world";
  const text = document.createTextNode(_.startCase(words));
  el.appendChild(text);

  document.body.appendChild(el);
}

export { Hello } from './Hello.jsx'
