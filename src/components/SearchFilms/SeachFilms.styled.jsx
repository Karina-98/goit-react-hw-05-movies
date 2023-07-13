import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchUl = styled.ul`
list-style: none;

  padding-left: 20px; 

  margin: 0; 
  color: #333; 
  font-size: 16px; 
  margin-bottom: 5px; 
`

export const SearchLi = styled.li`

&:not(:last-child) {
    margin-bottom: 12px;
  }

`

export const SearchLink = styled(Link)`
font-size: 20px;
  color: blue;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: orange;
    border-bottom: 2px solid #1c85ff;
  }
`