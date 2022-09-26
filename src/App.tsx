import React, { useState } from "react";
import Header from "./components/Header";
import P from "./components/P";
import HR from "./components/HR";
import Img from "./components/Img";
import Accordion from "./components/Accordion";
import "./style.css";
import img1 from "./Images/1.png";

class App extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      header: {
        level: "h2",
        text: "ddd",
        color: "blue",
      },
      p: {
        text: "Абзац про то, как я делаю первый проект на React",
        color: "red",
      },
      hr: {
        border: "none",
        background_color: "blue",
        color: "red",
        height: "2px",
      },
      img: {
        width: "100px",
        height: "100px",
        src: img1,
      },
    };
  }

  render() {
    return (
      <div>
        {/* Change code below this line */}

        <Header {...this.state.header}></Header>
        <P {...this.state.p} />
        <HR {...this.state.hr} />
        <Img {...this.state.img} />
        <Accordion text="Пример аккордиона"></Accordion>
        {/* Change code above this line */}
      </div>
    );
  }
}
export default App;
