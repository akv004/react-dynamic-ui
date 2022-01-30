import * as React from 'react';
import styled from 'styled-components';

type PropsType = {
  color?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.section`
  padding: 4em;
  background: green;
`;

export const B = React.memo((props: PropsType) => {
  const [messages, setMessages] = React.useState<any>([]);

  return (
    <Wrapper>
      <div>
        <h1>Component B</h1>
      </div>
    </Wrapper>
  );
});
