import React, { useState, useEffect, createRef,  } from 'react'; 
import { BsStar, BsStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import {
    EmptyStarStyle,
    StarContainer,
    FilledStarStyle,
    RatingsInputContainer,
} from './ratingStyle.js';  

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
        <RatingsInputContainer>
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
        </RatingsInputContainer>
        )
}

export default RenderRatingInput; 

//not the solution
const RenderStar = props => {
    const [filled, setFilled] = useState(false);
    const { tempStar, setTempStar, setPickedStar, passedRef, id, pickedNumber } = props;
    const ContID = `StarCont-${id}`

    const IsHover = e => {
        if (passedRef.current && passedRef.current.contains(e.target)) {
            //send parent info that the mouse is overing over the star
             setTempStar(id)
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
