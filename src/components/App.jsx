import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import { AddContacts } from './AddContacts/AddContacts';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { Container, Header, SecondHeader } from './App.styled';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const onSubmitForm = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    console.log(normalizedName);
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    let add = true;
    contacts.forEach(el => {
      if (normalizedName === el.name.toLowerCase()) {
        alert(`${el.name}is already in contacts`);
        add = false;
      }
    });
    if (add) {
      setContacts(prevState => [...prevState, contact]);
    }
  };
  const handleInputFilter = evt => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };
  const delContact = contId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contId)
    );
  };
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts) || [];

    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <Container>
      <Header>Phonebook</Header>
      <AddContacts onSubmit={onSubmitForm} />
      <SecondHeader>Contacts</SecondHeader>
      <Filter handleInputFilter={handleInputFilter} />
      <Contacts visibleContacts={visibleContacts} delContact={delContact} />
    </Container>
  );
};

export { App };
