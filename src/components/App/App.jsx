import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from 'redux/operations';
import GlobalStyle from '../GlobalStyle';
import PhonebookSection from '../PhonebookSection';
import { Wrapper } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PhonebookSection mainTitle="Phonebook" title="Contacts" />
      <GlobalStyle />
    </Wrapper>
  );
}
