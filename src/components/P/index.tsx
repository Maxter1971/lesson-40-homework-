import React, { useState } from "react";

type PProps = {
  text: string;
  color: string;
};

class P extends React.Component<PProps, any> {
  state = {
    text: "Заголовок",
    color: "red",
  };

  constructor(props: PProps) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render(): React.ReactNode {
    return <p style={{ color: this.state.color }}>{this.state.text}</p>;
  }
}

export default P;
