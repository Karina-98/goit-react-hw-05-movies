import styled from 'styled-components'

export const SearchForm = styled.form`
display: flex;
text-align: center;
align-items: center;
`

export const ButtonSearch = styled.button`
color: orange;
    border: none;
    border-radius: 74px;
    outline: none;
    padding: 10px 20px;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
    transition: background-color .3s;
    display: inline-block;
    position: relative;
}
`

export const SearchInput = styled.input`
border: 1px solid ;
    color: inherit;
    font-size: 14px;
    line-height: 1.14;
    font-weight: var(--font-weight-medium);
    background-color: rgba(0,0,0,0);
    border-radius: 8px;
    outline: none;
    padding-left: 20px;
    transition: all .2s cubic-bezier(.4,0,.2,1);
    margin-right: 20px;
    padding: 10px;
}`