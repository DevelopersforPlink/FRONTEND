export interface Presentation {
    id:string;
    thumbnail:string;
    profile:string;
    title:string;
    service_name:string;
    business_type:string;
    business_type_display: string;
    created_at: string;
}

export interface Pagination {
    page:number;
    total_page:number;
}

export interface InvestorMainResponse {
    category:string;

    // paginatin type 정의
    page:number;
    total_page:number;

    page_size:number;
    total_items:number;
    presentations:Presentation[];
}
