import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListSpan } from './ContactList.styled';
import { deleteContact } from 'redux/ContactForm/formSlice';

export default function ContactList () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  console.log("contacts", contacts);

  const deleteButton = (id) => {
    dispatch(deleteContact(id))
  };

  
  
  return (
  <List>
  {contacts.map(({ name, number, id }) => (
    <ListItem key={id}>
      {name}
      <ListSpan>:</ListSpan>
      {number}
      <button onClick={() => deleteButton(id)}>Delete</button>
    </ListItem>
  ))}
  </List>
)} 


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
