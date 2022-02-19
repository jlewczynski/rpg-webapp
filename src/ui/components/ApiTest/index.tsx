import React from 'react';

async function test(): Promise<string> {
  try {
    const result = await fetch('/api/v1/test');
    return await result.text();
  } catch (e) {
    console.log(e);
    return 'Error';
  }
}

export default function ApiTest() {
  const [text, setText] = React.useState('Fetching data...');
  const mountRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    test().then(value => {
      if (mountRef.current) {
        setText(value);
      }
    });
  }, []);

  return <div ref={mountRef}>{text}</div>;
}