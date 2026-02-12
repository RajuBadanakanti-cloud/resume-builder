export const pageTemplate = (html, css) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    ${css}

    @page {
      size: A4;
      margin: 15mm;
    }

    body {
      width: 210mm;
      font-family: Inter, Arial, sans-serif;
      background:white;
    }

      h1{
        font-weight:bold;
        color:#162456;
        font-size:32px;
      }

      h2 {
        font-weight:bold;
        font-size:24px;
        color:#162456;
      }

      h3 {
        font-weight:bold;
        font-size:16px;
        color:black;
      }

      p{
        font-weight:400;
        font-size:15px;
        color:black;
      }
      span{
        font-size:20px;
        font-weight:600;
        color:#162456;
        }

        a {
        text-decoration:none;
        }
       
        li{
        margin-left:24px;
        }

    /* Page break helpers */
    .page-break {
      page-break-before: always;
    }

    .no-break {
      page-break-inside: avoid;
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>
`;
