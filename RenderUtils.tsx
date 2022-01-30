import React from 'react';
import { A } from './components/A';
import { B } from './components/B';

const KeysToComponentMap = {
  a: A,
  b: B,
};

function zrender(config) {
  if (typeof KeysToComponentMap[config.component] !== 'undefined') {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        src: config.src,
      },
      config.children &&
        (typeof config.children === 'string'
          ? config.children
          : config.children.map((c) => zrender(c)))
    );
  }
}

export default zrender;
