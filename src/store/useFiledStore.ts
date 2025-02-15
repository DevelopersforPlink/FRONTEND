import { create } from 'zustand';

// interface FiledStore {
//     selectedFiled : number |null;
//     setSelectedFiled : (index:number | null) =>void;
// }

// export const useFiledStore = create<FiledStore>((set)=>({
//     selectedFiled:null,
//     setSelectedFiled:(index)=>{set({selectedFiled : index}),console.log('선택된 filed : ',index)}
// }))

interface FiledStore {
    selectedBussinessType : string|null;
    setSelectedBusinessType : (businessType : string | null)=>void;
}

export const useFiledStore = create<FiledStore>(
    (set)=>({
        selectedBussinessType:null,
        setSelectedBusinessType:(businessType)=>{
            set({selectedBussinessType: businessType});
            console.log('선택된 filed : ',businessType);
        }
    })
)