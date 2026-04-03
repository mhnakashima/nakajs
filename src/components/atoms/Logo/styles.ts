import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  line-height: 1.3;
`;

export const Name = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #0a0a0a;
`;

export const Role = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  color: #999;
  margin-top: 1px;
`;
