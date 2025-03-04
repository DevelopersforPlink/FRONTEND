import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
    state:'login'|'logout';
    type:'investor'|'founder';
    gotoLogin:()=>void;
    gotoLogout:()=>void;
}

/* 임시 : localStorage에서 login 확인 후 초기 상태 설정 */
const initialState:'login'|'logout' = localStorage.getItem('login')?'login':'logout';
/* 임시 : localStorage에서 type 확인 후 초기 상태 설정 - investor로 설정 */
const initialType:'investor'|'founder' = localStorage.getItem('type')?'founder':'investor';

const useAuthStore=create<AuthState>()(
    persist(
        (set)=>({
            state:initialState,
            type:initialType,
            gotoLogin:()=>{
                set({state:'login'});
                localStorage.setItem('login_state','login'); // 로그인 상태 : 로그인으로 변경
            },
            gotoLogout:()=>{
                set({state:'logout'})
                localStorage.removeItem('accessToken'); // 토큰 삭제
                localStorage.removeItem('AuthState');
            },
        }),
        {
            name:'AuthState',
            storage:createJSONStorage(()=>localStorage),
        }
    )
)

export default useAuthStore;