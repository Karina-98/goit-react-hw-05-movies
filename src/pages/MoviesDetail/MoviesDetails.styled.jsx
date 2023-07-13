import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GoBackButton = styled.button`
padding: 10px
margin-bottom: 15px;
display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-color: red;
  border-radius: 7px;
  cursor: pointer;`

export const GoBackLink = styled(Link)`
link-style: none;
padding: 12px;
color:red;

`

export const DetailsDiv = styled.div`
flex-direction: row;
justify-content: center;
align-items: start;
position: relative;`

export const DetailsInfo = styled.div`
max-width: 600px;
    position: absolute;
    top: 0;
    right: 0; `