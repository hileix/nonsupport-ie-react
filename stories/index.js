import React from 'react';
import { storiesOf } from '@storybook/react';
import NonsupportIE from '../src/NonsupportIE';
import ReactMarkdown from 'react-markdown';

storiesOf('NonsupportIE', module)
  .add('Docs', () => (
    <ReactMarkdown source={require('../docs/NonsupportIE.md')} />
  ))
  .add('Demo:not IE', () => (
    <NonsupportIE>
      <div>App content.</div>
    </NonsupportIE>
  ))
  .add('Demo:IE', () => (
    <NonsupportIE
      devMode
      reminder={
        <h1>本应用不支持 IE 浏览器，请使用 Chrome 或 firefox 浏览器。</h1>
      }
    >
      <div>App content.</div>
    </NonsupportIE>
  ));
