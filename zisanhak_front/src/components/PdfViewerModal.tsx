import { X, Download, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface PdfViewerModalProps {
  pdfFile: File | null;
  onClose: () => void;
}

export default function PdfViewerModal({ pdfFile, onClose }: PdfViewerModalProps) {
  const [zoom, setZoom] = useState(100);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleDownload = () => {
    if (pdfFile) {
      const url = URL.createObjectURL(pdfFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = pdfFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[15px] w-full max-w-[95vw] max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between rounded-t-[15px]">
          <div className="flex items-center gap-4">
            <div className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[18px] text-gray-900">
              PDF 원본 보기
            </div>
            {pdfFile && (
              <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-500">
                {pdfFile.name}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="flex items-center gap-2 border border-[#e5e7eb] rounded-[8px] px-2 py-1">
              <button
                onClick={handleZoomOut}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                title="축소"
              >
                <ZoomOut size={18} className="text-gray-600" />
              </button>
              <div className="font-['Inter:Regular',sans-serif] text-[13px] text-gray-700 min-w-[45px] text-center">
                {zoom}%
              </div>
              <button
                onClick={handleZoomIn}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                title="확대"
              >
                <ZoomIn size={18} className="text-gray-600" />
              </button>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#e4811c] hover:bg-[#d1710f] text-white px-4 py-2 rounded-[8px] transition-colors"
              title="다운로드"
            >
              <Download size={18} />
              <span className="font-['Inter:Bold_Italic','Noto_Sans_KR:Bold',sans-serif] font-bold italic text-[13px]">
                다운로드
              </span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto bg-gray-100 p-6 rounded-b-[15px]">
          {pdfFile ? (
            <div className="flex justify-center">
              <div 
                className="bg-white shadow-2xl"
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease'
                }}
              >
                <iframe
                  src={URL.createObjectURL(pdfFile)}
                  className="w-[800px] h-[1000px] border-0"
                  title="PDF Viewer"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-gray-400 mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[16px] text-gray-500">
                PDF 파일이 업로드되지 않았습니다.
              </div>
              <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-gray-400 mt-2">
                먼저 성적표를 업로드해주세요.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
