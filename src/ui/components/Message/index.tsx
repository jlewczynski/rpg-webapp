import React from 'react';

interface Props {
  text: string;
}

export default function Message({ text }: Props) {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return <div onClick={() => setVisible(false)}>{text}</div>
  } else {
    return null;
  }
}