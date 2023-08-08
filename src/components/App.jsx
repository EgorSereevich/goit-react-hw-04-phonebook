import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContacts } from './AddContacts/AddContacts';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { Container, Header, SecondHeader } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onSubmitForm = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    console.log(normalizedName);
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    let add = true;
    this.state.contacts.forEach(el => {
      if (normalizedName === el.name.toLowerCase()) {
        alert(`${el.name}is already in contacts`);
        add = false;
      }
    });
    if (add) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };
  handleInputFilter = evt => {
    evt.preventDefault();
    this.setState({ filter: evt.target.value });
  };
  delContact = contId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contId),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    this.setState({ contacts: parsedContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <Header>Phonebook</Header>
        <AddContacts onSubmit={this.onSubmitForm} />
        <SecondHeader>Contacts</SecondHeader>
        <Filter handleInputFilter={this.handleInputFilter} />
        <Contacts
          visibleContacts={visibleContacts}
          delContact={this.delContact}
        />
      </Container>
    );
  }
}
export { App };
