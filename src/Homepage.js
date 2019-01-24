import React, { Component } from "react";
import styled from "styled-components/macro";

// palette colors
const Colors = [
  { color: "#FFFFFF", fontFamily: "Times New Roman" },
  { color: "#f7d9e3", fontFamily: "Lucida Console" },
  { color: "#DB7093", fontFamily: "fantasy" }
];
// Style component

const Section = styled.section`
  background-color: ${props => props.color};
  transition: all 0.7s ease-in-out;
  height: 100vh;
  text-align: center;
  padding-top: 2em;
  > div {
    margin: 2em 0 2em 0;
  }
  a {
    font-family: ${props => props.font};
  }
`;

const Span = styled.span`
  font-family: ${props => props.font};
  margin: 0 1em 0 1em;
  cursor: pointer;
`;

const Div = styled.div`
  height: 35px;
  width: 35px;
  margin: 0 1em 0 1em;
  border-radius: 50%;
  background-color: ${props => props.backcolor};
  display: inline-block;
  cursor: pointer;
  border: solid 1px #000000;
`;

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "", fontFamily: "" };
    this.onColor = this.onColor.bind(this);
    this.onChangeFont = this.onChangeFont.bind(this);
  }

  // Change color
  onColor(e) {
    e.preventDefault();
    this.setState({ color: e.target.dataset.color });
  }

  onChangeFont(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({ fontFamily: e.target.dataset.font });
  }

  render() {
    return (
      <Section color={this.state.color} font={this.state.fontFamily}>
        <h2>Choose your homepage color</h2>
        <div>
          {Colors.map(({ color }, k) => (
            <Div
              key={k}
              onClick={this.onColor}
              backcolor={color}
              data-color={color}
            />
          ))}
        </div>

        <h2>Choose your Link Font-Family</h2>
        <div>
          {Colors.map(({ fontFamily }, k) => (
            <Span
              key={k}
              onClick={this.onChangeFont}
              font={fontFamily}
              data-font={fontFamily}
            >
              abc..
            </Span>
          ))}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/WebWalterWrite/simple-react-styled-components"
        >
          https://github.com/WebWalterWrite/simple-react-styled-components
        </a>
      </Section>
    );
  }
}

export default Homepage;
