import styled, { css } from 'styled-components'

export const Box = styled.div<{ center?: boolean }>`
  background: #faf9f9;
  padding: 3rem;
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.7);

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`

export const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListItem = styled.li`
  padding: 2rem;
  background: #fff;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`
