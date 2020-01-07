// import { configure } from '@storybook/react';

// configure(require.context('../src', true, /\.stories\.js$/), module);

import { configure } from '@storybook/react';

function loadStories() {
  require('../story/index.js'); // 指定 story 的位置
  // 可以是任意目录，根据自己需要写路径
}

configure(loadStories, module);