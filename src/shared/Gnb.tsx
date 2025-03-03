"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter,usePathname } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

import styled from "@emotion/styled";
import { Button2 } from "@/app/typography";

import DropDown from "./Dropdown";
import Alert from "./Modal/Alert";

const Gnb = () => {
    const router = useRouter();
    const pathname = usePathname();
    const gnbRef = useRef<HTMLDivElement | null>(null);

    const { state, type, gotoLogout } = useAuthStore();
    const [ activeModal, setActiveModal ] =  useState<'bell'|'user'|null>(null);

    // zustand 테스트용 로컬스토리지 저장 -> GNB에서 관리.
    // const testStore = ()=>{
    //     if(localStorage.getItem('accessToken')=='login'){
    //         localStorage.setItem('zustand_state',state);
    //     }
    // }

    const handleIconClick=(modalType:'bell'|'user')=>{
        setActiveModal(prev=>(prev === modalType ? null : modalType))
    };

    useEffect(()=>{
        // testStore()
        // if(type === 'investor' && pathname.startsWith('/founder')){
        //     alert('투자자는 창업자 페이지에 접근할 수 없습니다.');
        //     // router.push('/investor');
        // } else if ( type === 'founder' && pathname.startsWith('/investor')){
        //     alert('창업자는 투자자 페이지에 접근할 수 없습니다.');
        //     // router.push('/founder');
        // }

        // 외부 클릭 감지 로직
        const handleClickOutside = (event:MouseEvent)=>{
            if (gnbRef.current && !gnbRef.current.contains(event.target as Node)){
                setActiveModal(null); // Gnb 밖을 클릭하면 모달 닫힘
            }
        };

        document.addEventListener('mousedown',handleClickOutside);
        return()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[])

    // 라우터 주소가 변경되면 모달창 닫기
    useEffect(()=>{
        setActiveModal(null)
    },[pathname])

    return(
        // Gnb 요소 감지
        <Container ref={gnbRef}>
            <NavigationArea>
                <img src="/Logo.svg" onClick={()=>router.push('/')}/>

                {/* 2차 mvp 구현시 라우터와 문자열 수정 */}
                {/* <ButtonArea>
                    <Button onClick={()=>router.push('/')}>
                        <NavigationText>결제 PT</NavigationText>
                    </Button>
                    <Button onClick={()=>router.push('/')}>
                        <NavigationText>생성 써밋</NavigationText>
                    </Button>
                </ButtonArea> */}
            </NavigationArea>
            <IconArea>
                {/* 2차 mvp 채팅 주석 해제 */}
                {/* <Button>
                    <Icon src="/icons/Chat.svg" />
                </Button> */}

                {/* 알림 버튼과 클릭시 모달창 */}
                <Button onClick={()=>handleIconClick('bell')}>
                    <Icon src="/icons/Bell.svg" />
                </Button>
                {activeModal === 'bell' && <Alert />}

                {/* 마이 페이지 버튼과 클릭시 모달창 */}
                <Button onClick={()=>handleIconClick('user')}>
                    <Icon src="/icons/User.svg" />
                </Button>
                {activeModal === 'user' && <DropDown state={state} onClick={gotoLogout}/>}
            </IconArea>
        </Container>
    )
};

export default Gnb;

const Container = styled.div`
    z-index: 10;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 5rem;
    width: 100%;
`;

const NavigationArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img{
        width: 5.25rem;
        height: 2.5rem;
        aspect-ratio: 21/10;
    }

    gap: 2.5rem;
`;

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;

    background-color: transparent;
`;

const NavigationText = styled(Button2)`
    color: var(--gray-scale-100);
`;

const IconArea=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

const Icon = styled.div<{src:string;}>`
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--gray-scale-70);

    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image:url(${({ src }) => src});

    :hover{
        background-color: var(--gray-scale-80);
        transition: all 0.3s;
    }
    
    :active{
        background-color: var(--gray-scale-80);
        transition: all 0.3s;
    }
`;