import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Anis', age: 43 },
      { id: '2', name: 'Linda', age: 41 },
      { id: '3', name: 'Cyrine', age: 9 }
    ],
    username: 'Super A',
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); // create new array for old one not just a reference
    //or use the spread array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 43 },
        { name: 'Linda Bouzid Shili', age: 41 },
        { name: 'Cyrine Shili', age: 9 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  usernameChangeHandler = (event, id) => {
    const personIndex = this.state.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: '#FFDAB9',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id} //index is not the perfect choice as it may changes as the list changes
                click={() => this.deletePersonHandler(index)}
                changed={event => this.usernameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>I am a React App</h1>
        <p className={classes.join(' ')}> Anis Shili</p>
        {/* use arrow arrow function to add a parameter to the method or bind() . bind() is better */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
        {/* 
        
              Ternery COnditional
        
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.fixMeHandler.bind(this, 'Anis Shili')}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>
              , I like watching
            </Person>
          </div>
        ) : null} */}

        <UserInput
          usernamechange={this.usernameChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username='Linda' />
        <UserOutput username='Cyrine' />
      </div>
    );
  }
}
export default App;
