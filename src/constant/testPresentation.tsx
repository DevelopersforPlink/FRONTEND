// api 연동 전 테스트 요소

interface TestPresentationProps {
    id:number;
    thumbnail:string;
    profile:string;
    title : string;
    link:string;
    company : string;
    summary:string
    is_approve:boolean;
    summary_business_plan:string;
    service_name : string;
    type: "investor" | "founder"; 
    business_type:string;
}

export const testPresentation:TestPresentationProps={
    id:1,
    thumbnail:'/testThumbnail.png',
    profile:'/SmallLogo.svg',
    title : '창업-투자 중개 및 관리 플랫폼',
    link:'https://youtu.be/D88yEibsrgQ?si=uh-7eydSYmtxPSan',
    company : 'plers',
    summary:'플링크 시연입니다. 잘 부탁드립니다.',
    is_approve:true,
    summary_business_plan:'/ptPdf.pdf',
    service_name:'Plink',
    business_type:'SERVICE',
    type:"founder",  
}
