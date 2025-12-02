import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';

class SourceText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event.target.value);
  }

  render() {
    return (
      <InputGroup>
        <Input           
          value={this.props.value}
          placeholder={this.props.defaultText}
          onChange={this.handleChange} >
          </Input>
      </InputGroup>
    );
  }
}

export default SourceText;