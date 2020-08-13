import React, { Component } from "react";
import "./container.css";
import { Card } from "./visly";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleDarkState() {
    const currentState = this.state.darkMode;
    this.setState({ darkMode: !currentState });
  }

  render() {
    return (
      <div className={this.state.darkMode ? "container-dark" : "container"}>
        <Card
          imageSrc={
            this.state.darkMode
              ? "https://media.giphy.com/media/U50YJbu4RYeKBuucWs/giphy.gif"
              : "https://media.giphy.com/media/gIGbdEtw6ajaDajir7/giphy.gif"
          }
          onClick={() => this.toggleDarkState()}
          title="Let's do this!"
          text="Click the button to unleash the dark side"
          MyButton={<Card.MyButton />}
          darkMode={this.state.darkMode}
        />
      </div>
    );
  }
}

export default Container;
