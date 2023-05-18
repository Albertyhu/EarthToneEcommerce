const FooterContainer = styled.div`
    width: 100%; 
    background-color: #000000;
    position: absolute; 
    bottom: 0px;
    left: 0px; 
    right: 0px; 
`
const FooterWrapper = styled.div`
    margin: 0 auto;
    width: 100%; 
    background-color: #000000;
    height: auto;
    //bottom: 0;
    //left: 0;
    //right: 0;
    position: inherit;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: grid;
    grid-template-columns:  17% 17% 17% 22% 27%;

@media screen and (max-width: 866px) {
        position: relative;
        width: 58%;
        display: grid;
        grid-template: "info customer" 1fr
                        "contact social" 1fr
                        "news news";
     }

@media screen and (max-width: 540px) {
    display: inline-block; 
    width: 100%;
    
}

`

const Section = styled.div`
display: inline-block

@media screen and (max-width: 866px) {
    &#Information{
    grid-area: info; 
    } 
    &#Customer{
    grid-area: customer;
    }
    &#Contact{
    grid-area: contact; 
    }
    &#Social{
    grid-area: social; 
    }
    &#Newsletter{
       grid-area: news; 
        margin: auto;
    }
}
@media screen and (max-width: 540px) {
    &#Space{
    display: none;
}
}
`

export {
    FooterContainer,
    FooterWrapper, 
    Section
}