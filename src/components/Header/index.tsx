import React, { useState } from "react";

type HProps = {
  level: string;
  text: string;
  color: string;
};

type H = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

class Header extends React.Component<HProps, any> {
  state = {
    level: "h1",
    text: "Заголовок",
    color: "red",
  };

  constructor(props: HProps) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render(): React.ReactNode {
    const Level = `${this.state.level}` as H;
    return (
      <header id="h1">
        <Level style={{ color: this.state.color }}>{this.state.text}</Level>
      </header>
    );
  }
}

export default Header;
