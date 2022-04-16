import React, { useState, useEffect } from 'react';
import './pdf.less';
// @ts-ignore
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import { parseUrl } from 'query-string';

const Pdf = () => {
  const { search } = useLocation();
  const { url } = parseUrl(search).query;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [inputValue, setInputValue] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    try {
      if (e.keyCode === 13) {
        if (Number(inputValue) > 0 && !!numPages && Number(inputValue) <= numPages) {
          setPageNumber(Number(inputValue));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInputValue(pageNumber);
  }, [pageNumber]);

  // @ts-ignore
  return (
    <div className="pdfContainer">
      <div className="toolbar">
        <div className="container">
          <button disabled={pageNumber === numPages} onClick={() => setPageNumber(pageNumber + 1)}>
            بعدی
          </button>

          <div className="page-contain">
            <input type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(e) => handleInputChange(e)} />
            <span>از {numPages}</span>
          </div>

          <button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>
            قبلی
          </button>
        </div>
      </div>
      <Document loading="در حال بارگذاری..." file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default Pdf;
