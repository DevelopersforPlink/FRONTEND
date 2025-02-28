"use client";

import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>

        <Favicon src="/symbol.ico" alt="Favicon" />
        <FooterCopyright>© 2025 Plink | plers. 모든 권리 보유.</FooterCopyright>
        
        <FooterLinks>
          <Link href="/">
          서비스 이용약관</Link>
          <Link href="/">
          개인정보 처리방침</Link>
          <Link href="/">서비스 소개</Link>
          <Link href="/">연락 및 문의</Link>
        </FooterLinks>

        <From>대한민국</From>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;


const FooterWrapper = styled.footer`
  width: 100vw;
  height: 4rem;
  padding: 2.05rem 5rem;
  bottom: 0;
  font-size: 0.8rem;
  color: #6e7781;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d0d7de;
  background-color: var(--gray-scale-10);
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Favicon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const FooterCopyright = styled.span`
  margin-right: 5vw;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 40px;
  margin: 0 5vw 0 0.4vw;
`;

const Link = styled.a`
  color: var(--primary-color-60);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const From = styled(FooterCopyright)`
    margin-left: 5vw;
    margin-right: 0;
`