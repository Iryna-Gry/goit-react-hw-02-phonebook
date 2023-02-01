import { Component } from 'react';
import './ContactList.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className="Contact__list">
        {this.props.contactData.map(({ name, number, id }) => {
          return (
            <li key={id} name={name} number={number} className="Contact__item">
              <p>{name}</p>
              <p>{number}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
