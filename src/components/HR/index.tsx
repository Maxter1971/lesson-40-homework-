import React, { useState } from "react";

type HrProps = {
  border: string;
  background_color: string;
  color: string;
  height: string;
};

class HR extends React.Component<any, any> {
  state = {
    border: "none",
    background_color: "red",
    color: "red",
    height: "2px",
  };

  constructor(props: HrProps) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render(): React.ReactNode {
    return (
      <hr
        style={{
          color: this.state.color,
          height: this.state.height,
          border: this.state.border,
          backgroundColor: this.state.background_color,
        }}
      ></hr>
    );
  }
}

export default HR;
