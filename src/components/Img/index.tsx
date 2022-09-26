import React, { useState } from "react";

type ImgProps = {
  width: string;
  height: string;
  src: string;
};

class Img extends React.Component<any, any> {
  state = {
    width: "100px",
    height: "100px",
    src: "",
  };

  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render(): React.ReactNode {
    return (
      <img
        src={this.state.src}
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

export default Img;
