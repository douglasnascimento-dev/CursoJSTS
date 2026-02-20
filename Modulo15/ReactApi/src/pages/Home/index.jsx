import { get } from 'lodash';
import { useState, useEffect } from 'react';
import { LuUsers, LuPlus } from 'react-icons/lu';

import axios from '../../services/axios';
import { Container, Title } from '../../styles/GlobalStyles';

import {
  HeroSection,
  Subtitle,
  NavigationGrid,
  NavCard,
  StatsContainer,
  StatBox,
} from './styled';

const Home = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [avarageAge, setAvarageAge] = useState(0);
  const [averageWeight, setAverageWeight] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

  useEffect(() => {
    async function getStats() {
      try {
        const { data } = await axios.get('');
        setTotalStudents(get(data, 'totalStudents', 0));
        setTotalPhotos(get(data, 'totalPhotos', 0));
        setAvarageAge(get(data, 'averageAge', 0));
        setAverageWeight(get(data, 'averageWeight', 0));
        setAverageHeight(get(data, 'averageHeight', 0));
      } catch (e) {
        console.error('Erro ao buscar estatísticas:', e);
      }
    }
    getStats();
  }, []);

  return (
    <Container>
      <HeroSection>
        <Title>Bem-vindo ao Sistema de Gestão Escolar</Title>
        <Subtitle>
          Este é um projeto de portfólio para demonstrar habilidades em React,
          Styled-Components e integração com API RESTful.
        </Subtitle>
      </HeroSection>

      <NavigationGrid>
        <NavCard to='/alunos'>
          <LuUsers size={40} />
          <span>Gerenciar Alunos</span>
        </NavCard>
        <NavCard to='/aluno/new'>
          <LuPlus size={40} />
          <span>Cadastrar Novo Aluno</span>
        </NavCard>
      </NavigationGrid>

      <StatsContainer>
        <Title>Estatísticas</Title>
        <StatBox>
          <span className='stat-number'>{totalStudents}</span>
          <span className='stat-label'>Alunos Cadastrados</span>
        </StatBox>
        <StatBox>
          <span className='stat-number'>{totalPhotos}</span>
          <span className='stat-label'>Fotos Cadastradas</span>
        </StatBox>
        <StatBox>
          <span className='stat-number'>{avarageAge}</span>
          <span className='stat-label'>Idade Média</span>
        </StatBox>
        <StatBox>
          <span className='stat-number'>{averageWeight}</span>
          <span className='stat-label'>Peso Médio (kg)</span>
        </StatBox>
        <StatBox>
          <span className='stat-number'>{averageHeight}</span>
          <span className='stat-label'>Altura Média (metros)</span>
        </StatBox>
      </StatsContainer>
    </Container>
  );
};

export default Home;
