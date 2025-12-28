interface Props{
    onUpload:(file:File)=>void;
    disabled:boolean;
}


const PdfUpload = ({onUpload,disabled}:Props) => {
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
            if (!file) return;

            if (file.type !== "application/pdf") {
            alert("Please upload a PDF file only");
            return;
            }

            if (file.size > 10 * 1024 * 1024) {
            alert("File size should be under 10MB");
            return;
            }

            onUpload(file);
  };

  return (
    <div className="upload-container">
        <label className="upload-label">
          Upload PDF
           <input 
             type="file"
             accept="application/pdf"
             onChange={handleChange}
             disabled={disabled}
             hidden
             />

        </label>
    </div>
  )
}

export default PdfUpload