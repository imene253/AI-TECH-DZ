import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getCourseById } from '../data/courses';
import { useAppContext } from '../context/AppContext';

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addCourse } = useAppContext();
  const course = getCourseById(id);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const fileInputRef = useRef(null);
  const snackbarTimerRef = useRef(null);

  // handler snackbar 
  const handleSnackbar = (message, { error = false } = {}) => {
    setSnackbarMessage(message);
    setIsError(error);
    setShowSnackbar(true);

    // Timer
    if (snackbarTimerRef.current) {
      clearTimeout(snackbarTimerRef.current);
    }
    snackbarTimerRef.current = setTimeout(() => {
      setShowSnackbar(false);
      snackbarTimerRef.current = null;
    }, 4000);
  };

  // cleanup 
  useEffect(() => {
    return () => {
      if (snackbarTimerRef.current) clearTimeout(snackbarTimerRef.current);
    };
  }, []);

  const handleFileSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
      handleSnackbar("تم إرفاق إثبات الدفع بنجاح ", { error: false });
    }
  };

  const handleConfirm = () => {
    if (!uploadedFile) {
      handleSnackbar("الرجاء إرفاق إثبات الدفع أولاً.", { error: true });
      return;
    }
   
    handleSnackbar("تم استلام طلب الدفع، سيتم تفعيل الدورة في قسم دروسي بعد التحقق.", { error: false });
    // Add to My Courses immediately 
    addCourse(course);

   
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-6 py-24 text-center">
          <div>
            <h1 className="text-2xl font-bold text-[#0E2A46] mb-4">الدورة غير موجودة</h1>
            <Link className="text-[#54C5F8] font-semibold" to="/courses">العودة إلى جميع الدورات</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Header  */}
      <div className="w-full bg-[#20B486]">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 py-4">
          <h1 className="text-white text-xl md:text-2xl font-bold text-right"> الدفع </h1>
        </div>
      </div>

      {/* card */}
      <main className="flex-1 w-full">
        <div className="max-w-[1280px] mx-auto w-[92%] md:w-[82%] py-8 md:py-12">
          <div className="bg-white rounded-[20px] shadow-[0_18.83px_47.08px_rgba(47,50,125,0.10)] border border-[#CBD0DC]/60">

            {/* Upload section */}
            <div className="relative border-4 border-dashed border-[#CBD0DC] rounded-[40px] m-6 md:m-10 p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#292D32] text-4xl">☁️</span>
              </div>
              <p className="text-[#292D32] text-xl md:text-2xl font-medium mb-2"> وسيلة الدفع</p>
              <p className="text-[#A9ACB4] text-base md:text-lg"> أرفق إثبات الدفع </p>

              {/* file input */}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*,.pdf"
                onChange={handleFileSelect}
              />

              {/* file picker */}
              <button 
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                className="mt-8 px-10 py-4 rounded-2xl border border-[#CBD0DC] text-[#54575C] font-medium hover:bg-gray-50"
              >
                متابعة
              </button>

              {uploadedFile && (
                <p className="mt-4 text-sm text-green-600">
                 {uploadedFile.name} تم رفع الملف
                </p>
              )}
            </div>

            {/* Selected course card */}
            <div className="px-6 md:px-10 pb-10">
              <div className="rounded-lg shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)] overflow-hidden border border-gray-100">
                <div className="h-48 md:h-60 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} />
                <div className="p-5 flex flex-col gap-3 text-right">
                  <div className="flex items-center justify-between">
                    <span className="text-[#1A906B] text-sm font-semibold">{course.category}</span>
                    <span className="text-[#101828] text-lg font-bold">{course.price}</span>
                  </div>
                  <h2 className="text-[#101828] text-xl font-bold">{course.title}</h2>
                  {course.subtitle && (
                    <p className="text-[#667085] text-sm">{course.subtitle}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Confirm button */}
            <div className="flex justify-center pb-10">
              <button 
                onClick={handleConfirm} 
                className="px-12 py-4 bg-[#20B486] text-white rounded-2xl font-semibold hover:bg-[#1A906B] transition"
              >
                تأكيد الدفع
              </button>
            </div>

          </div>
        </div>
      </main>

      {/* Snackbar*/}
      {showSnackbar && (
        <div className="fixed inset-x-0 bottom-6 sm:bottom-20 flex justify-center z-50 pointer-events-none">
          <div className="max-w-[1280px] w-[92%] md:w-[82%] px-4">
            <div
              className={`mx-auto pointer-events-auto rounded-lg shadow-lg py-3 px-6 text-sm md:text-base text-white ${
                isError ? 'bg-red-600' : 'bg-[#20B486]'
              }`}
            >
              {snackbarMessage}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Payment;
