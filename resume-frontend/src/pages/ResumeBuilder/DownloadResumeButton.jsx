import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import { CircleDashed } from "lucide-react";

const DownloadResumeButton = ({setIsDownloadingPdf}) => {
  const { user } = useContext(UserContext);
  const [onDownloadButtonTip, setOnDownloadButtonTip] = useState(false);  
  const [isGenerating, setIsGenerating] = useState(false);

  //  BACKEND PDF DOWNLOAD BUTTON
  const onHandleBtn = async () => {
    if (!user?.token) {
      console.error("User not authenticated");
      return;
    }

    const previewEl = document.getElementById("resume-preview");

    if (!previewEl) {
      console.error("Resume preview not found");
      return;
    }

    try {
      setIsGenerating(true);
       setIsDownloadingPdf(true)
       
      const html = previewEl.innerHTML;

      const URL = import.meta.env.VITE_API_URL 
      const URLS = "https://resume-builder-43dd.onrender.com/resume/pdf"

      const response = await fetch(`${URL}/resume/pdf`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ html }),
      });

      if (!response.ok) {
        setIsGenerating(false)
        const errorText = await response.text();
        console.error("Server Error:", errorText);
        throw new Error("Failed to generate resume");
     
      }

      if(response.ok) {
        setIsGenerating(false);
        setIsDownloadingPdf(false)
      }

      // ************************** 
            // ✅ HANDLE PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
      // *************************************************

      console.log("Resume request sent successfully");
    } catch (error) {
      console.error(error);
      setIsDownloadingPdf(false)
    }


  };



  return (
    <div className="w-full">
    {isGenerating && <p className="text-sm text-gray-700 mb-1">Please wait your Resume Pdf is generating...</p>} 
    <button
      onClick={onHandleBtn}
      disabled={!user}
      onMouseEnter={() => setOnDownloadButtonTip(true)}
      onMouseLeave={() => setOnDownloadButtonTip(false)}
      className="h-12 max-w-56 md:w-full px-4 text-sm md:text-base bg-green-800 disabled:opacity-50 rounded-xl cursor-pointer
       hover:bg-green-900 transition duration-300 text-white">
 
      {isGenerating ?
       <span className="flex justify-center items-center"><CircleDashed className="animate-spin h-5 w-5 mr-2" />Downloading...</span> 
       : "Download Resume"}

    </button> 
    {onDownloadButtonTip && (
      <div className="absolute -top-8 left-0 bg-black px-4 py-1 rounded-lg">
        <p className="text-[10px] text-white">Backend (puppeteer) Side button</p>
      </div>
    )}
    </div>
  );
};

export default DownloadResumeButton;
