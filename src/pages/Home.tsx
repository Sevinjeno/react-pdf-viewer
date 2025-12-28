import { useState } from "react";
import PdfUpload from "../components/PdfUpload";
import PdfViewer from "../components/PdfViewer";
import Loader from "../components/Loader";
import { signPdf } from "../services/pdfService";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [signedPdfUrl, setSignedPdfUrl] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    setLoading(true);
    try {
      const signedBlob = await signPdf(file);
      console.log(signedBlob)
      const url = URL.createObjectURL(signedBlob);
      setSignedPdfUrl(url);
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
      <div className="container">
        {!signedPdfUrl && !loading && (
            <PdfUpload onUpload={handleUpload} disabled={loading} />
        )}
        {loading && <Loader />}
        {signedPdfUrl && <PdfViewer fileUrl={signedPdfUrl} />}
      </div>
  );
};

export default Home;
