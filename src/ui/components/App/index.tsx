import React from 'react';
import { blabber } from 'shared/utils';
import ApiTest from '../ApiTest';
import Message from '../Message';

export default function App() {
  return <div>
    <Message text='Some text' />
    <Message text={blabber(10)} />
    <ApiTest />
  </div>
}