"use client";

import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { Button2 } from "@/app/typography";
import { MouseEventHandler } from "react";

interface DropDownProps {
    state:'login'|'logout';
    onClick:MouseEventHandler<HTMLButtonElement>;
}

const DropDown:React.FC<DropDownProps> = ({state,onClick}) => {
    const router = useRouter()

    return(
        <Container>
            <Button onClick={()=>router.push('/mypage')}><Typo>내 정보</Typo></Button>
            
            {state === 'login' ?(
                <Button 
                    onClick={(e) => {
                        onClick(e), // gotoLogout 핸들러 실행
                        router.push('/') // 로그인 페이지로 이동
                    }}><Typo>로그아웃</Typo></Button>
            ):(
                <Button onClick={()=>router.push('/auth/login')}>
                    <Typo>로그인</Typo>
                </Button>
            )}
        </Container>
    )
};

export default DropDown;

const Container = styled.div`
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: absolute;
    top: 4rem;
    right:5rem;


    width: 10.6875rem;
    gap: 0.5rem;
    padding: 0.25rem;
    
    border-radius: 0.625rem;
    border: 1px solid var(--gray-scale-80, #4E575F);
    background: var(--common-white, #FFF);
`;

const Button = styled.button`
    cursor: pointer;

    display: flex;
    width: 10.1875rem;
    padding: 0.625rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    border-radius: 0.625rem;
    border: none;
    background: var(--common-white, #FFF);

    :hover{
        background: var(--gray-scale-10);
    }
    :active{
        background: var(--gray-scale-20);
    }

`;

const Typo = styled(Button2)`
    color: var(--gray-scale-100);

    :hover{
        color: var(--gray-scale-90);
    }
    :active{
        color: var(--gray-scale-80);
    }
`;