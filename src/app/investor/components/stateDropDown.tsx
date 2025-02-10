"use client";

import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import ArrowIcon from '/icons/ArrowBottom.svg';
import { Button2 } from '@/app/typography';

interface StateDropDownProps {
    click : boolean;
    state : string;
}

const TestList:Array<string>=['테스트-1','테스트-2','테스트-3'];

const StateDropDown:React.FC<StateDropDownProps> = ({click,state}) => {
    const [isClick,setIsClick] = useState(false);

    useEffect(()=>{
        alert(`클릭됨 : ${isClick}`)
    },[isClick])

    return(
        <>
            <Container>
                <Button2>사업 진행도</Button2>
                <ArrowButton onClick={()=>{setIsClick((prev)=>!prev)}}>
                    <img src='/icons/ArrowBottom.svg' />
                </ArrowButton>
            </Container>
            <DropDownContainer>
                {TestList.map((item)=>(
                    <DropDownButton key={item}><Button2>{item}</Button2></DropDownButton>
                ))}
            </DropDownContainer>
            {/* {click &&
                <DropDownContainer>
                    <DropDownButton>{state} 01</DropDownButton>
                    {state}02
                </DropDownContainer>
            } */}
        </>
    )
}

export default StateDropDown;

const Container=styled.div`
    margin-top: 1rem;

    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    padding: 0.62rem 1.25rem;
    width: 10.6875rem;

    border-radius: 0.63rem;
    /* background-color: var(--gray-scale-10); */
    border: 1px solid var(--gray-scale-10);
`;

const ArrowButton=styled.button`
    cursor: pointer;

    border: none;
    background-color: transparent;
`;

const DropDownContainer = styled.div`
    display: flex;
    width: 10.6875rem;
    padding: 0.25rem;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 0.3rem;
    gap: 0.5rem;

    border-radius: 0.625rem;
    /* border: 1px solid var(--gray-scale-80); */
    color: var(--gray-scale-100);
    /* background-color: var(--gray-scale-10); */
    border: 1px solid var(--gray-scale-10);
`;

const DropDownButton = styled.button`
    cursor: pointer;

    display: flex;
    /* width: 10.1875rem; */
    width: 100%;
    padding: 0.625rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    border: none;
    border-radius: 0.625rem;
    background-color: transparent;
    color: var(--gray-scale-80);
    :hover{
        color: var(--gray-scale-100);
        /* background-color: var(--gray-scale-10); */
        transition: all 0.3s;
    }

    :active{
        font-weight: 600;
        color: var(--gray-scale-100);
        background-color: var(--gray-scale-10);

        transition: all 0.2s;
    }
`;