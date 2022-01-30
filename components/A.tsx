import * as React from "react";

type PropsType = {
  color?: string;
  children?: React.ReactNode;
};

export const A = React.memo((props: PropsType) => {
  const [messages, setMessages] = React.useState<any>([]);


  return (
   
      <div>
        <h1>Component A</h1>
      </div>

  );
});