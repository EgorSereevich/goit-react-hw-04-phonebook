import { React, useState } from 'react';
import { Formik } from 'formik';
import { FormEl, Label, SpanLabel, Button } from './AddContacts.styled';
export const AddContacts = ({ onSubmit }) => {
  const [data, setData] = useState({ name: '', number: '' });

  const handlInputChange = evt => {
    const { name, value } = evt.currentTarget;
    setData(prevData => ({ ...prevData, [name]: value }));
  };
  const handlSubmit = e => {
    e.preventDefault();
    onSubmit(data);
    reset();
  };
  const reset = () => {
    setData({ name: '', number: '' });
  };
  return (
    <Formik>
      <FormEl action="" onSubmit={handlSubmit}>
        <Label htmlFor="">
          <SpanLabel>Name</SpanLabel>

          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handlInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="">
          <SpanLabel>Number </SpanLabel>

          <input
            type="tel"
            name="number"
            value={data.number}
            onChange={handlInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    </Formik>
  );
};
