import React, { Component } from 'react';
import { Button, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

class CaseResult extends Component {
  constructor(props) {
    super(props);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy(event){
    this.copyToCLipboard(this.props.result);
  }

  copyToCLipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      /* clipboard successfully set */
    }, function() {
      /* clipboard write failed */
      console.log("Copy to Clipboard Failed!");
    });
  }

  render() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        <Button color="primary" onClick={this.handleCopy}
         title="Copy text to clipboard" >
            Copy
          </Button>
          <InputGroupText className="text-light bg-dark">
            {this.props.case}
          </InputGroupText>
        </InputGroupAddon>          
        <Input value={this.props.result} readOnly></Input>        
      </InputGroup>
    );
  }
}

export default CaseResult;