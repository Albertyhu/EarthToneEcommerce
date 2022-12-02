import styled from 'styled-components';

export const EmptyStarStyle = {
    color: "#8B8B8B",
    width: "25px",
    height: "25px",
    cursor: "pointer",
}

export const StarStyle = {
    color: "#DECB17",
    width: "25px",
    height: "25px",
}

export const StarContainer = styled.div`
   display: inline-block;
   width: auto;
   height: auto;
`
//The RatingsContainer is given a min-height and the resize is set to none because the ratings keep rerendering every time a button is clicked 
//The rerending causes a bug that makes the product panels on the product page twitch 
//Giving it a fixed height puts a bandaid over the problem. 
export const RatingsContainer = styled.div`
    margin-left: auto;
    margin-right: auto; 
    min-height: 35px; 
    resize: none;
`
export const FilledStarStyle = {
    color: "#DECB17",
    width: "25px",
    height: "25px",
    cursor: "pointer",
}

export const RatingsInputContainer = styled.div`
    margin-left: auto;
    margin-right: auto;

`