import React, { useState } from "react";
import CustomColumn from "@/shared/CustomColumn";
import FileUploadButton from "@/shared/Combination/FileUploadButton";

interface FileUploadFieldProps {
  buttonState: "default" | "pressed" | "disabled" | "hover";
  onFileSelect: (fileSelected: boolean, fileName: string | null, field: string) => void;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  buttonState,
  onFileSelect,
}) => {
  const [fileState, setFileState] = useState({
    summary_business_plan: { selected: false, fileName: null as string | null },
    business_plan: { selected: false, fileName: null as string | null },
    pitch_deck: { selected: false, fileName: null as string | null },
    traction_data: { selected: false, fileName: null as string | null },
  });

  const handleFileSelect = (fileSelected: boolean, fileName: string | null, field: string) => {
    setFileState(prevState => ({
      ...prevState,
      [field]: { selected: fileSelected, fileName: fileName },
    }));

    onFileSelect(fileSelected, fileName, field);
  };

  return (
    <div>
      <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
        <FileUploadButton 
          label="원페이퍼 사업기획서" 
          buttonState={buttonState}
          onFileSelect={(fileSelected, fileName) => handleFileSelect(fileSelected, fileName, 'summary_business_plan')} />
        
        <FileUploadButton 
          label="사업 기획서" 
          buttonState={buttonState}
          onFileSelect={(fileSelected, fileName) => handleFileSelect(fileSelected, fileName, 'business_plan')} />
        
        <FileUploadButton 
          label="피치덱" 
          buttonState={buttonState}
          onFileSelect={(fileSelected, fileName) => handleFileSelect(fileSelected, fileName, 'pitch_deck')} />
        
        <FileUploadButton 
          label="트렉션 데이터" 
          buttonState={buttonState}
          onFileSelect={(fileSelected, fileName) => handleFileSelect(fileSelected, fileName, 'traction_data')} />
      </CustomColumn>
    </div>
  );
};

export default FileUploadField;
