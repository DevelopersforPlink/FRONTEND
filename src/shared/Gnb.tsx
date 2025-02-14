"use client";

import React, {useState,useEffect} from "react";
import { useRouter,usePathname } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

import styled from "@emotion/styled";
import { Button2 } from "@/app/typography";

import DropDown from "./Dropdown";
import Alert from "./Modal/Alert";

const Gnb = () => {
    const router = useRouter();
    const pathname = usePathname();

    const { state, type, gotoLogout } = useAuthStore();
    const [activeModal, setActiveModal] =  useState<'bell'|'user'|null>(null);

    // zustand 테스트용 로컬스토리지 저장 -> GNB에서 관리.
    const testStore = ()=>{
        if(localStorage.getItem('accessToken')=='login'){
            localStorage.setItem('zustand_state',state);
        }
    }

    const handleIconClick=(modalType:'bell'|'user')=>{
        setActiveModal(prev=>(prev === modalType ? null : modalType))
    };

    useEffect(()=>{
        testStore()
        if(type === 'investor' && pathname.startsWith('/founder')){
            alert('투자자는 창업자 페이지에 접근할 수 없습니다.');
            // router.push('/investor');
        } else if ( type === 'founder' && pathname.startsWith('/investor')){
            alert('창업자는 투자자 페이지에 접근할 수 없습니다.');
            // router.push('/founder');
        }
    },[])

    return(
        <Container>
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
                {/* <Button><img src="/icons/Chat.svg" alt="채팅"/></Button> */}

                {/* 알림 버튼과 클릭시 모달창 */}
                <Button onClick={()=>handleIconClick('bell')}>
                    <img src="/icons/Bell.svg" alt="알림"/>
                </Button>
                {activeModal === 'bell' && <Alert />}

                {/* 마이 페이지 버튼과 클릭시 모달창 */}
                <Button onClick={()=>handleIconClick('user')}>
                    <img src="/icons/User.svg" alt="마이페이지"/>
                </Button>
                {activeModal === 'user' && <DropDown state={state} onClick={gotoLogout}/>}
            </IconArea>
        </Container>
    )
};

export default Gnb;

const Container = styled.div`
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
    gap: 2rem;
`;