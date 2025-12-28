import { pdfjs } from "react-pdf";
import Home from "./pages/Home";
import "./styles/app.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
function App() {
  
  return (
    <>
      <Home />
    </>
  )
}

export default App
