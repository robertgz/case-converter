import React, { Component } from 'react';
import CaseResult from './CaseResult';
import SourceText from './SourceText';

class CaseConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };

    this.handleConvert = this.handleConvert.bind(this);
  }

  handleConvert(text) {    
    this.setState({inputText: text});
  }  
  
  render() {
    return (
      <React.Fragment>
        <h3>Case Converter</h3>
        <br />
        <SourceText 
          value={this.state.inputText}          
          onHandleChange={this.handleConvert}
          defaultText={"Text to be converted "} />
        <br />
        <CaseResult
          case="UPPER CASE" 
          result={this.state.inputText.toUpperCase()} />
        <br />
        <CaseResult 
          case="lower case" 
          result={this.state.inputText.toLowerCase()} />
        <br />
        <CaseResult 
          case="Start Case" 
          result={initialCapsCase(this.state.inputText)} />
        <br />
        <CaseResult 
          case="Sentence case" 
          result={sentenceCase(this.state.inputText)} />
      </React.Fragment>
    );
  }
}

function sentenceCase(text) {
  let sentences = text.split(/([.?!])+/);
  let newSentences = '';
  sentences.forEach(element => {
    let loc = element.length - element.trimStart().length;
     newSentences += element.slice(0, loc) + element.slice(loc, loc+1).toUpperCase() + element.slice(loc+1).toLowerCase();
  });
  return newSentences;
}

function initialCapsCase(text) {
  let words = text.split(/([" "])+/);
  let newWords = '';
  words.forEach(element => {
    newWords += element.slice(0, 1).toUpperCase() + element.slice(1).toLowerCase();
  });
  return newWords;
}

export default CaseConverter;