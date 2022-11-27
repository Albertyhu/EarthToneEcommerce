import styled from 'styled-components'


export const SlidingPanel = styled.div`
    width: ${props => props.Width};
    height: 100vh;
    top: 0px;
    right: 0px;
    position: fixed;
    overflow: auto;
    z-index: 11;
    transform: translateX(${props => props.isOpen}); 
    transition: transform 1s; 
@media screen and (max-width: 720px){}
@media screen and (max-width: 360px){}
`

export const PanelContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`