async function test(): Promise<string> {
  try {
    const result = await fetch('http://localhost:8888/api/v1/test');
    return await result.text();
  } catch (e) {
    console.log(e);
    return 'Error';
  }
}

export function ApiTest(node: HTMLElement) {
  const s = document.createElement('span');
  s.innerText = 'Fetching data...';
  node.appendChild(s);
  test().then(r => {
    s.innerText = r;
  });
}