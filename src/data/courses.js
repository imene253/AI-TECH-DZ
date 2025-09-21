export const courses = [
  {
    id: "c1",
    category: "programming",
    title: "تطبيق باستخدام فلاتر",
    subtitle: "ابنِ تطبيقك الأول",
    image: "/images/course-img-1.png",
    duration: "08 hr 12 mins",
    author: "بالحاج",
    teacherPhoto: "/images/teacherphoto1.png",
    price: "$17.84",
    description:
      "سوف تتعلم في هذه الدورة أساسيات فلاتر وبناء تطبيقك الأول خطوة بخطوة مع أمثلة عملية.",
    
  },
  {
    id: "c2",
    category: "Design",
    title: "Figma تصميم واجهات",
    subtitle: "احصول على وظيفة في تصميم واجهة المستخدم",
    image: "/images/course-img-2.png",
    duration: "08 hr 12 mins",
    author: "شيروف",
    teacherPhoto: "/images/teacherphoto2.png",
    price: "$17.84",
    description:
      "تعلم المبادئ الأساسية لتصميم واجهات المستخدم باستخدام Figma وبناء نماذج أولية احترافية.",
    
  },
  {
    id: "c3",
    category: "programming",
    title: "موقعك الأول باستخدام React",
    subtitle: "ابدأ ببناء موقعك اليوم",
    image: "/images/course-img-3.png",
    duration: "08 hr 12 mins",
    author: "بوخميس",
    teacherPhoto: "/images/teacherphoto3.png",
    price: "$29.0",
    tag: "Free",
    description:
      "ستتعلم إنشاء تطبيقات واجهة أمامية باستخدام React مع التركيز على المكونات والحالة والتوجيه.",
   
  },
  {
    id: "c4",
    category: "devoir",
    title: "الاحماض والاسس",
    subtitle: "فرض في الكيمياء",
    image: "/images/course-img-1.png",
    duration: "29:09 mins",
    author: "أستاذ الكيمياء",
    teacherPhoto: "/images/teacherphoto1.png",
    price: "Free",
    type: "devoir",
    description:
      "فرض في مادة الكيمياء حول الاحماض والاسس مع أسئلة متنوعة.",
    progress: 93,
    score: "15/20",
    lessons: [
      {
        id: "l1",
        title: "الاحماض والاسس",
        type: "lesson",
        mark: "5/5",
        time: "10:00",
        image: "/images/devoir-question-image.png"
      },
      {
        id: "l2", 
        title: "الموضوع الأول",
        type: "lesson",
        mark: "4/5",
        time: "8:30",
        image: "/images/course-img-1.png"
      },
      {
        id: "l3",
        title: "الموضوع الثاني", 
        type: "lesson",
        mark: "3/5",
        time: "7:15",
        image: "/images/course-img-2.png"
      },
      {
        id: "l4",
        title: "سلسلة الامتحانات 1",
        type: "exam",
        mark: "2/5",
        time: "15:00",
        image: "/images/course-img-3.png"
      },
      {
        id: "l5",
        title: "سلسلة الامتحانات 2",
        type: "exam", 
        mark: "1/5",
        time: "12:30",
        image: "/images/course-img-1.png"
      },
      {
        id: "l6",
        title: "سلسلة الامتحانات 3",
        type: "exam",
        mark: "0/5",
        time: "18:45",
        image: "/images/course-img-2.png"
      },
      {
        id: "l7",
        title: "سلسلة الامتحانات 4",
        type: "exam",
        mark: "0/5", 
        time: "20:00",
        image: "/images/course-img-3.png"
      }
    ]
  },
];

export const getCourseById = (id) => courses.find((c) => c.id === id);


