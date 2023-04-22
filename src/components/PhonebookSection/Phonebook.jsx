import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import {
  Section,
  Title,
  Subtitle,
  Container,
  LoaderContainer,
} from './PhonebookSection.styled';
import { RotatingLines } from 'react-loader-spinner';

function PhonebookSection({ mainTitle, title }) {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Title>{mainTitle}</Title>
      <Section>
        <ContactForm />
        <Container>
          <Subtitle>{title}</Subtitle>
          <Filter />
          {isLoading && !error && (
            <LoaderContainer>
              <RotatingLines height="45" width="45" strokeColor="grey" />
              <p>Loading</p>
            </LoaderContainer>
          )}
          <ContactsList />
        </Container>
      </Section>
    </>
  );
}

PhonebookSection.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PhonebookSection;
