import { React, Component } from 'react';
import { Formik } from 'formik';
import { FormEl, Label, SpanLabel, Button } from './AddContacts.styled';
export class AddContacts extends Component {
  state = {
    name: '',
    number: '',
  };
  handlInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  handlSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
      <Formik>
        <FormEl action="" onSubmit={this.handlSubmit}>
          <Label htmlFor="">
            <SpanLabel>Name</SpanLabel>

            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handlInputChange}
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
              value={number}
              onChange={this.handlInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormEl>
      </Formik>
    );
  }
}
