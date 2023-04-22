import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { UserForm } from './ContactForm.styled';
import { object, string } from 'yup';
import { addContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/selectors';

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const createContact = (newName, newNumber) => {
    return {
      id: nanoid(4),
      name: newName,
      phone: newNumber,
    };
  };

  const formSubmitHendler = (newName, newNumber) => {
    for (let contact of contacts) {
      if (contact.phone === newNumber) {
        toast.error(
          `
    Oops!!! this phone number ${newNumber} is already saved in your contact list under the name "${contact.name}".`
        );
        return;
      }
    }

    dispatch(addContact(createContact(newName, newNumber)));
  };

  const handleSubmit = (e, { resetForm }) => {
    formSubmitHendler(e.name, e.phone);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <UserForm>
        <label>
          <span>Name</span>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" />
        </label>
        <label>
          <span>Number</span>
          <Field type="tel" name="phone" required />
          <ErrorMessage name="phone" />
        </label>
        <button type="submit">Add contact</button>
      </UserForm>
    </Formik>
  );
}
