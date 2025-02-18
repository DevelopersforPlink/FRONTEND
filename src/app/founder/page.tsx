// p.7, 7.2.1

"use client";
import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/navigation';
import UploadList from './components/UploadList';
import { Headline1,Title2 } from '../typography';
import OutlinedButtonComponent from '@/shared/Button/OutlinedButtonComponent';
// import { styleText } from 'util';
import styled from '@emotion/styled';
import { boxList } from '@/constant/testVideos';
// import { Pagination } from '@/shared/Pagination';
import { data } from '../../constant/testApiPagination';
import Modal from '@/shared/Modal/Modal';


const FounderMain=()=>{
  const router = useRouter();
  const [page, setPage] = useState<number>(1); // api 통신을 통해 오는 " 현재  페이지의 수

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);  // 모달 상태 관리
  const [modalText, setModalText] = useState<string>('');
  

  const handlePageClick = (page:number) => {
    setPage(page); // 클릭한 Pagination 의 숫자로 설정.
  }

  // 임시 : 마운트 될 때마다 localStorage에 accessToken 설정
  useEffect(()=>{
    localStorage.setItem('accessToken','login');
  },[])

   const openModal = (text: string) => {
    setModalText(text);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
  <Container>
    <Title>등록한 프레젠테이션</Title>
    <UploadButton 
      scale='xs'
      state='default'
      children='등록하기'
      iconSrc='/icons/Pluscircle.svg'
      onClick={()=>{router.push('/founder/upload')}}
      // onClick={() => { openModal('회원 정보등록 심사 후 이용 가능합니다'); }}
    />
    <UploadList data={boxList}/>
    {/* <UploadList data={null}/> */}
    {/* <Pagination 
        onClick={handlePageClick} 
        currentPage={data.page}
        totalPage={data.total_pages}
        pagePerGroup={data.page_size}
        totalItem={data.total_items}
        /> */}
        {isModalVisible && (
        <Modal 
          modalText={modalText} 
          closeModal={closeModal}
          modalType="request"  // 모달 타입 설정 (request 또는 pay)
          onConfirm={closeModal}  // 확인 클릭 시 라우터 이동
        />
      )}

  </Container>
  )
};

export default FounderMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 0 5rem;
`;

const Title = styled(Headline1)`
  margin: 2.5rem auto auto 0;
`;

const UploadButton = styled(OutlinedButtonComponent)`
  margin: 1.38rem 0 1.38rem auto;
`;