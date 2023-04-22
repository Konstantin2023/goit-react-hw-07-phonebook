import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>{name}: </span>
      <span>{phone}</span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
