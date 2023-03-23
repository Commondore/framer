import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: #f2f2f2;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px -3px rgba(0, 0, 0, 0.7);
`
export const Main = styled.div`
  max-width: ${({ theme }) => theme.containers.lg};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.paddings.container};
`
