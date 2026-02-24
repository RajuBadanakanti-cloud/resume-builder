import { generateMultipagePDF} from "../services/pdfService.js";

/* 
export const generateResumePDF = async (req, res) => {
  const { html } = req.body;

  if (!html) {
    return res.status(400).json({ message: "HTML required" });
  }
  const pdf = await generateMultiPagePDF(html);

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=resume.pdf",
  });

  res.send(pdf);
};
*/ 

export const generateResumePDF = async (req, res, next) => {
  try {
  const {html} = req.body 
  if(!html)return res.status(400).json({message:"HTML requested!"}) 

  const pdf = await generateMultipagePDF(html)

  res.set({
    "Content-Type":"application/pdf",
    "Content-Disposition":"attachment; filename=resume.pdf"
  })

  res.send(pdf)

  }catch(err){
    next(err)
  }

} 



