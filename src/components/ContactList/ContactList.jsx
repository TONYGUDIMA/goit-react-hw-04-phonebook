import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) =>
  contacts && (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
