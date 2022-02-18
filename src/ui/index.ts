import Message from "ui/components/Message";
import { blabber } from 'shared/utils';
import { ApiTest } from "./components/ApiTest";

function typescriptTest(text: string) {
  console.log(text);
}

typescriptTest('Hello, TypeScript!');
const container = document.getElementById('container');
if (container) {
  Message(container, 'Some text');
  Message(container, blabber(10));
  ApiTest(container);
}