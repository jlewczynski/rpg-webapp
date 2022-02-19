import React from 'react';
import Api from 'ui/Api';

export default function ApiTest() {
  const [text, setText] = React.useState('Fetching data...');
  const mountRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    Api.character.list().then(chars => {
      if (mountRef.current) {
        setText(JSON.stringify(chars));
      }
    });
  }, []);

  return <div ref={mountRef}>{text}</div>;
}