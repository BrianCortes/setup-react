import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <h1>
        hello world
      </h1>
    )
  }
}

export default Square
