import styled from 'styled-components'

export const Container = styled.div`
color: #fff;
margin-left: auto;
margin-right: auto; 
width: 87%;
text-align: left;
margin-bottom: 10px;
@media screen and (max-width: 540px){
width: 51%;

}
`

export const TextBlock = styled.div`
text-align: left;
color: #fff;
`

export const UnorderedList = styled.div`

`

export const ListItem = styled.div`
cursor: pointer;
&:hover{
    text-decoration: underline; 
    font-weight: bold;
}
&:active{
    text-decoration: none; 
    font-weight: normal;
}
`

export const Header3 = styled.h3`
@media screen and (max-width: 540px){
    margin-bottom: 2px;
}
`