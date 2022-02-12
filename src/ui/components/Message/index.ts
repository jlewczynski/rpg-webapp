export default function Message(node: HTMLElement, text: string) {
  const div = document.createElement('div');
  div.innerText = text;
  div.onclick = () => {
    node.removeChild(div);
  }
  node.appendChild(div);
}