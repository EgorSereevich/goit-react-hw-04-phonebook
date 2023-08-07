import { React } from 'react';
import { Formik } from 'formik';
import { Form, Label, TextSpan } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ handleInputFilter }) => {
  return (
    <Formik>
      <Form action="">
        <Label htmlFor="">
          <TextSpan>Find contacts by name</TextSpan>

          <input type="text" name="filter" onChange={handleInputFilter} />
        </Label>
      </Form>
    </Formik>
  );
};
Filter.propTypes = {
  handleInputFilter: PropTypes.func.isRequired,
};
