import { React } from 'react';
import PropTypes from 'prop-types';
import { Ul, Li, SpanName, SpanNumber, Button } from './Contacts.styled';
export const Contacts = ({ visibleContacts, delContact }) => {
  return (
    <Ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            <SpanName>{name}:</SpanName>
            <SpanNumber>{number}</SpanNumber>
            <Button type="button" onClick={() => delContact(id)}>
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

Contacts.propTypes = {
  delContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
