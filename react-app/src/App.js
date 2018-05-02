import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  //When a select changes, updates dropdown.
  handleChange(id, event) {
    this.setState({value: event.target.value});

    var indexToRemove = 0;
        var currentSelectId = id;
        for (let i = 0; i < allOptions.length; i++) {
            if (event.target.value == allOptions[i].id)
      {
        indexToRemove = i;
      }    
        }

        switch (currentSelectId) {
            case 0: 
        selectOptions0 = allOptions.splice(indexToRemove, 1);
                break;
            case 1: 
        selectOptions1 = allOptions.splice(indexToRemove, 1);
                break;
            case 2: 
        selectOptions2 = allOptions.splice(indexToRemove, 1);
                break;
            case 3: 
        selectOptions3 = allOptions.splice(indexToRemove, 1);
                break;
            default:
        console.log("Switch didn't work");
        }
  }
  
  //Resets the dropdowns to their original state when the Reset button is clicked.
  handleClick() {
    allOptions = optionList.slice();
    selectOptions0 = allOptions;
    selectOptions1 = allOptions;
    selectOptions2 = allOptions;
    selectOptions3 = allOptions;
    this.setState({value: ''});
  }
  
  render() {
    //Creates options for each select element.
     var optionItems0 = selectOptions0.map((option) =>
      <option key={option.id} 
        value={option.id}>{option.text}</option>
    );
    var optionItems1 = selectOptions1.map((option) =>
    <option key={option.id} 
      value={option.id}>{option.text}</option>
    );
    var optionItems2 = selectOptions2.map((option) =>
      <option key={option.id} 
        value={option.id}>{option.text}</option>
    );
    var optionItems3 = selectOptions3.map((option) =>
      <option key={option.id} 
        value={option.id}>{option.text}</option>
    );
    
    return (
      <div className="App">
        <p>React Survey Form</p>
        <p>Survey Form</p>
        <form>
          <fieldset>
            <p>
              <label>Email: 
                <input type="text" className="InputSpacing" name="cust_email" id="cust_email" />
              </label>
            </p>
            <p>Please rate the following times from best (1) to worst (4)</p>
            <p>
              <select className="InputSpacing" id="0" value={this.state.value} 
                onChange={this.handleChange.bind(this,0)}>
                {optionItems0}
                );
              </select>
              Monday/Wednesday 10:10am-Noon
            </p>
            <p>
              <select className="InputSpacing" id="1" value={this.state.value} 
                onChange={this.handleChange.bind(this,1)}>
                {optionItems1}
              </select>
              Tuesday 6:00pm-9:00pm
            </p>
            <p>
              <select className="InputSpacing" id="2" value={this.state.value} 
                onChange={this.handleChange.bind(this,2)}>
                {optionItems2}
              </select>
              Wednesday 6:00pm-9:00pm
            </p>
            <p>
              <select className="InputSpacing" id="3" value={this.state.value} 
                onChange={this.handleChange.bind(this,3)}>
                {optionItems3}
              </select>
              Tuesday/Thursday 10:10am-Noon
            </p>
            <p>
        <input className="InputSpacing" type="submit" name="button" id="button" value="Submit" />
        <input className="InputSpacing" type="reset" name="button2" id="button2" 
          value="Reset" onClick={this.handleClick} />
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

//Array of options.
var optionList = [
  {id: 1, text: '1. Best time'}, 
  {id: 2, text: '2. Next Best time'}, 
  {id: 3, text: '3. Not as good'}, 
  {id: 4, text: '4. Worst time'}
];
//Reference to optionList.
var allOptions = optionList.slice();
var selectOptions0 = allOptions;
var selectOptions1 = allOptions;
var selectOptions2 = allOptions;
var selectOptions3 = allOptions;

export default App;
