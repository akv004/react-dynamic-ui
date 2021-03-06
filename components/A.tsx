import * as React from 'react';
import styled from 'styled-components';

type PropsType = {
  color?: string;
  children?: React.ReactNode;
};

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const A = React.memo((props: PropsType) => {
  const [messages, setMessages] = React.useState<any>([]);

  return (
    <Wrapper>
      <div>
        <h1>Component A</h1>
      </div>
    </Wrapper>
  );
});
