import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
