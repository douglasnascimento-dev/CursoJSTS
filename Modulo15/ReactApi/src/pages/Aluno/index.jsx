import get from 'lodash';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Container, Title, Form } from '../../styles/GlobalStyles';

const Aluno = ({ match }) => {
  const id = get(match, 'params.id', 0);
  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>{id ? 'Editar' : 'Adicionar'} Aluno </Title>
      <Form>
        <label htmlFor='name'>
          Nome:
          <input
            aria-label='Nome'
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='sobrenome'>
          Sobrenome:
          <input
            aria-label='Sobrenome'
            id='sobrenome'
            type='text'
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            aria-label='Email'
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='idade'>
          Idade:
          <input
            aria-label='Idade'
            id='idade'
            type='number'
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>
        <label htmlFor='peso'>
          Peso:
          <input
            aria-label='Peso'
            id='peso'
            type='number'
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <label htmlFor='altura'>
          Altura:
          <input
            aria-label='Altura'
            id='altura'
            type='number'
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <button type='submit' onSubmit={handleSubmit} />
      </Form>
    </Container>
  );
};

export default Aluno;

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
