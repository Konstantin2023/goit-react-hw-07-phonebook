import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactsList.styled';
import { selectfilteredContacts } from 'redux/selectors';

function ContactsList() {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <ContactItem id={id} name={name} phone={phone} />
          </Item>
        ))}
      </List>
    </>
  );
}

export default ContactsList;
