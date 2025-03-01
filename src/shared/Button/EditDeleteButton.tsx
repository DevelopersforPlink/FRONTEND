"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import styled from '@emotion/styled';
import { Button2 } from '@/app/typography';
import Modal from '../Modal/Modal';

interface EditDeleteButtonProps {
    type: 'edit' | 'delete';
}

export default function EditDeleteButton({ type }: EditDeleteButtonProps) {
    const [iconUrl, setIconUrl] = useState<string | null>(null); // 초기값을 null로 설정
    const [caption, setCaption] = useState('');
    const [isModal, setIsModal] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (type === 'edit') {
            setIconUrl('/icons/Pencil.svg');
            setCaption('수정');
        } else if (type === 'delete') {
            setIconUrl('/icons/Trash.svg');
            setCaption('삭제');
        }
    }, [type]); // type이 변경될 때만 실행되도록 설정

    const handleButton = () =>{
        if(type === 'edit'){
            router.push('/founder/edit')
        } else if (type === 'delete'){
            // setIsModal(true);

            // 임시 : 자식 컴포넌트에서 클릭 이벤트로 상태 변경되는거 부모 페이지 에서 어떻게 모달창 띄울지 아직 잘 모르겠어서 임시로 설정
            alert('진짜 삭제하실?')
            setIsModal(true)
        }
    }

    const handleTestButton01 = () =>{
        alert('삭제함.')
       
        router.push('/founder');
    }
    const handleTestButton02 = () =>{
        // router.push('/founder');
        setIsModal(false);
    }

    return (
        <>
            <Container onClick={handleButton}>
                {iconUrl && <Icon src={iconUrl} />} {/* iconUrl이 null이면 렌더링하지 않음 */}
                <Text>{caption}</Text>
            </Container>
            {isModal && 
                <Modal 
                    modalText='정말 삭제하시겠어요?'
                    closeModal={handleTestButton01}
                    modalType='secession'
                    onConfirm={handleTestButton02}
                    caption={'삭제 버튼 선택 시,\n프레젠테이션은 삭제되며 복구되지 않습니다.'}
                />
            }
        </>
    );
}

const Container = styled.div`
    display: flex;
    width: 5.8125rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 0.75rem;

    border-radius: 0.625rem;
    background: var(--gray-scale-90, #2E3338);

    :hover{
        background: var(--gray-scale-50);
        transition: all 0.3s;
    }

    :active{
        background: var(--gray-scale-10);
        transition: all 0.3s;
    }
`;

const Icon = styled.div<{ src: string }>`
    width: 1rem;
    height: 1rem;
    background-color: var(--common-white);

    mask-image: url(${({ src }) => src});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image: url(${({ src }) => src});
`;

const Text = styled(Button2)`
    color: var(--common-white);
    text-align: center;
`;
