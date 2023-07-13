import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListUl = styled.ul`
list-style: none
`

export const ListLi = styled.li`

&:not(:last-child) {
    margin-bottom: 12px;
  }

`

export const ListLink = styled(Link)`
font-size: 20px;
  color: blue;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: orange;
    border-bottom: 2px solid #1c85ff;
  }
`