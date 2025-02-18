import React, { useState, useEffect } from "react";
import CheckboxComponent from "@/shared/CheckboxComponent";
import CustomColumn from "@/shared/CustomColumn";

interface CheckboxGroupProps {
  topLabel: string; // 최상단 label을 외부에서 받도록 수정
  items: { label: string; checked: boolean }[];
  onChange: (checkedItems: { label: string; checked: boolean }[]) => void;
  allChecked: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ topLabel, items, onChange }) => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [checkboxItems, setCheckboxItems] = useState(items);

  useEffect(() => {
    // 모든 항목이 선택되었을 경우 최상단 체크박스 선택 상태를 변경
    setIsAllSelected(checkboxItems.every(item => item.checked));
  }, [checkboxItems]);

  const handleAllCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsAllSelected(isChecked);
    // 모든 항목 선택/해제
    setCheckboxItems(prevItems =>
      prevItems.map(item => ({ ...item, checked: isChecked }))
    );
    const updatedItems = checkboxItems.map(item => ({ ...item, checked: isChecked }));
    setCheckboxItems(updatedItems);
    onChange(updatedItems);
  };

  const handleItemCheckChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItems = [...checkboxItems];
    updatedItems[index].checked = e.target.checked;
    setCheckboxItems(updatedItems);

    // 하위 항목들이 모두 선택되었는지 확인
    const isAllChecked = updatedItems.every(item => item.checked);
    if (isAllChecked) {
      setIsAllSelected(true);
    } else {
      setIsAllSelected(false);
    }

    // 변경된 상태를 부모에게 전달
    onChange(updatedItems);
  };

  return (
    <CustomColumn $width="414px" $gap="12px" $alignitems="flex-start" $justifycontent="center">
      <CheckboxComponent
        label={topLabel} // topLabel을 사용
        checked={isAllSelected}
        onChange={handleAllCheckChange}
      />
      {checkboxItems.map((item, index) => (
        <div key={index}>
          <CheckboxComponent
            label={item.label}
            checked={item.checked}
            onChange={handleItemCheckChange(index)}
          />
        </div>
      ))}
    </CustomColumn>
  );
};

export default CheckboxGroup;
