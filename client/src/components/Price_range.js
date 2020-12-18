import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

class Price_range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 10 },
    };
  }

  render() {
    return (
      <InputRange
        maxValue={20}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  }
}

ReactDOM.render(
  <Price_range />,
  document.getElementById('app')
);