import React, { useState, useEffect, createRef,  } from 'react'; 
import { BsStar, BsStarFill } from 'react-icons/bs';
import styled from 'styled-components';


const RenderRatingInput = props => {
    const {pickedStar, setPickedStar} = props;  
    const [tempStar, setTempStar] = useState(pickedStar); 
    var refOne = createRef(); 
    var refTwo = createRef()
    var refThree = createRef()
    var refFour = createRef()
    var refFive = createRef()


    function setStar(ID) {
        setPickedStar(ID)
    }

    return (
        <RatingsContainer>
                <RenderStar
                passedRef={refOne}
                id={1}
                pickedNumber={pickedStar}
                setPickedStar={setStar}
                tempStar={tempStar}
                setTempStar={setTempStar}
            />
            <RenderStar
                passedRef={refTwo}
                id={2}
                pickedNumber={pickedStar}
                setPickedStar={setStar}
                tempStar={tempStar}
                setTempStar={setTempStar}
            />
            <RenderStar
                passedRef={refThree}
                id={3}
                pickedNumber={pickedStar}
                setPickedStar={setStar}
                tempStar={tempStar}
                setTempStar={setTempStar}
            />
            <RenderStar
                passedRef={refFour}
                id={4}
                pickedNumber={pickedStar}
                setPickedStar={setStar}
                tempStar={tempStar}
                setTempStar={setTempStar}
            />
            <RenderStar
                passedRef={refFive}
                id={5}
                pickedNumber={pickedStar}
                setPickedStar={setStar}
                tempStar={tempStar}
                setTempStar={setTempStar}
            />
        </RatingsContainer>
        )
}

export default RenderRatingInput; 

//not the solution
const RenderStar = props => {
    const [filled, setFilled] = useState(false);
    const { tempStar, setTempStar, setPickedStar, passedRef, id, pickedNumber } = props;
    const ContID = `StarCont-${id}`

    //console.log(passedRef)
    const IsHover = e => {
        if (passedRef.current && passedRef.current.contains(e.target)) {
            //send parent info that the mouse is overing over the star
             setTempStar(id)
            //console.log("mouse in")
        }
    }


    const MouseOut = e => {
        if (passedRef.current && passedRef.current.contains(e.target)) {
            setTempStar(pickedNumber)
           // console.log("moved out")
        }
    }


    document.addEventListener("mouseover", IsHover);
    document.addEventListener("mouseout", MouseOut);
    
    useEffect(() => {
        return () => {
            document.removeEventListener("mouseover", IsHover);
            document.removeEventListener("mouseout", MouseOut);

        }
    }, [])


    useEffect(() => {
        if (id <= tempStar) {
            setFilled(true)
        }
        else {
            setFilled(false)
        }
    }, [tempStar])


    return (
        <StarContainer ref={passedRef} onClick={() => {
            setPickedStar(id)
            setTempStar(id)
        }} id={ContID}>
            {filled ?
                <BsStarFill style={FilledStarStyle}/>
                :
                <BsStar style={EmptyStarStyle} />
            }
        </StarContainer>
        )
}

const EmptyStarStyle = {
    color: "#8B8B8B", 
    width: "25px",
    height: "25px",
    cursor: "pointer",
}

const FilledStarStyle = {
    color: "#DECB17",
    width: "25px",
    height: "25px",
    cursor: "pointer",
}

const StarContainer = styled.div`
   display: inline-block;
   width: auto;
   height: auto;
`

const RatingsContainer = styled.div`
    margin-left: auto;
    margin-right: auto;

`