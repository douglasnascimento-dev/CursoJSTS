import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors';

export const HeroSection = styled.section`
  text-align: center;
  margin: 20px 0 40px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 10px auto 0;
  line-height: 1.5;
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 300px));
  gap: 1em;
  padding: 20px;
  margin-bottom: 40px;
  align-self: center;
  justify-self: center;
`;

export const NavCard = styled(Link)`
  background: ${colors.secondGradient};
  color: white;
  padding: 30px;
  border-radius: 10px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px;



  &:hover {
    filter: brightness(0.85);
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StatsContainer = styled.section`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }
`;

export const StatBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .stat-number {
    font-size: 48px;
    font-weight: bold;
    color: ${colors.primaryColor};
  }

  .stat-label {
    font-size: 16px;
    color: #666;
    margin-top: 5px;
  }
`;