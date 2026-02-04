"use client"

import { useRef, useState } from "react"
import { FiImage, FiTrash, FiTrash2, FiUploadCloud } from "react-icons/fi"

type TFileUploadProps = {
    onFileSelect?: (file: File | null) => void;
}

const FileUpload = ({onFileSelect}: TFileUploadProps) => {
 const [file, setFile] = useState<File | null>(null);
 const fileInputRef = useRef<HTMLInputElement | null>(null);

 const handleFileChange = (selectedfile?: File) => {
    if (!selectedfile) return;

    setFile(selectedfile);
    onFileSelect?.(selectedfile)
 }

  const removeFile = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
  }

    return (
        <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
            e.preventDefault();
            handleFileChange(e.dataTransfer.files?.[0])
        }}
         className="bg-[#FF5F3F1A] flex flex-col justify-center item-center w-full py-6 border border-dashed border-[#FF5F3F] mt-5">
            <input type="file" className="hidden" ref={fileInputRef} 
            accept="image/*" 
            onChange={(e) => handleFileChange(e.target.files?.[0])}/>

            {
                !file ? (
                    <div className="text-center my-5">
                <FiUploadCloud className="text-primary mx-auto"/>
                <p className="text-xs">Upload Your Payment Receipt here</p>
            </div>):(
                <div className="text-center">
                    <FiImage className="Text-Primary mx-auto" size={28}/>
                    <p className="text-sm text-[#FF5F3F]">{file.name}</p>
                    <p className="text-sm text-grey-400">
                        {(file.size / 1024).toFixed(1)} KB
                    </p>
                    <button onClick={removeFile} className="flex gep-2 bg-[#FF5F3F]/90 text-white mx-auto rounded mt-4 px-2">
                        <FiTrash2 className="self-center"/> Remove
                    </button>
                </div>
            )
            }
            
            
        </div>
    )

}

export default FileUpload