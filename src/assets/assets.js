// ===== LOGO & BRANDING =====
import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import sketch from './sktech.svg'

// ===== UNIVERSITY LOGOS =====
import annaba from './annaba.png'
import ustbh from './ustbh.png'
import algeria from './algeria.png'
import unv2 from './unv2.png'
import blida from './blida.png'

// ===== UI ICONS =====
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'

// ===== RATING ICONS =====
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'

// ===== TIME ICONS =====
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'

// ===== PROFILE IMAGES =====
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

// ===== COURSE THUMBNAILS =====
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'

// ===== SOCIAL MEDIA ICONS =====
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'

// ===== EXPORT ASSETS =====
export const assets = {
    // Logo & Branding
    logo,
    logo_dark,
    sketch,

    // University Logos
    annaba,
    ustbh,
    algeria,
    unv2,
    blida,

    // UI Icons
    search_icon,
    cross_icon,
    arrow_icon,
    down_arrow_icon,
    play_icon,
    blue_tick_icon,

    // Rating Icons
    star,
    star_blank,

    // Time Icons
    time_left_clock_icon,
    time_clock_icon,

    // Profile Images
    profile_img,
    profile_img2,
    profile_img3,
    profile_img_1,
    profile_img_2,
    profile_img_3,

    // Course Thumbnails
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,

    // Social Media
    facebook_icon,
    instagram_icon,
    twitter_icon,
}

// ===== EDUCATORS DATA =====
export const dummyEducators = [
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "name": "ALI",
        "email": "user.example@gmail.com",
        "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
        "profileImage": profile_img
    },
    {
        "_id": "teacher_ahmed_benali",
        "name": "Ahmed Benali",
        "email": "ahmed.benali@example.com",
        "imageUrl": "https://img.clerk.com/example1",
        "profileImage": profile_img2
    },
    {
        "_id": "teacher_fatima_ouali",
        "name": "Fatima Ouali",
        "email": "fatima.ouali@example.com",
        "imageUrl": "https://img.clerk.com/example2",
        "profileImage": profile_img3
    }
]

// ===== COURSES DATA =====
export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {
            "_id": "675ac1512100b91a6d9b8b24",
            "name": "ALI",
            "profileImage": profile_img
        },
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Advanced Python Programming",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Classes and Objects",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Inheritance and Polymorphism",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {
            "_id": "675ac1512100b91a6d9b8b24",
            "name": "ALI",
            "profileImage": profile_img
        },
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6776369244daad0f313d81a9"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg"
    },
    {
        "_id": "new_teacher_1_course_1",
        "courseTitle": "React.js Complete Guide",
        "courseDescription": "<h2>Master React.js from Zero to Hero</h2><p>Learn React.js step by step with hands-on projects. This comprehensive course covers everything from basic concepts to advanced patterns.</p><ul><li>Components and JSX</li><li>State and Props</li><li>Hooks and Context</li><li>Routing and API Integration</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "react_chapter1",
                "chapterOrder": 1,
                "chapterTitle": "React Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "react_lecture1",
                        "lectureTitle": "What is React?",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "react_lecture2",
                        "lectureTitle": "Creating Your First Component",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {
            "_id": "teacher_ahmed_benali",
            "name": "Ahmed Benali",
            "profileImage": profile_img2
        },
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2024-12-20T10:00:00.000Z",
        "updatedAt": "2024-12-20T10:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
        "_id": "new_teacher_1_course_2",
        "courseTitle": "Node.js Backend Development",
        "courseDescription": "<h2>Build Powerful Backend Applications</h2><p>Learn Node.js and Express.js to create robust server-side applications. Perfect for full-stack developers.</p><ul><li>Node.js Basics</li><li>Express.js Framework</li><li>Database Integration</li><li>Authentication & Security</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "node_chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Node.js Introduction",
                "chapterContent": [
                    {
                        "lectureId": "node_lecture1",
                        "lectureTitle": "Installing Node.js",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "node_lecture2",
                        "lectureTitle": "Your First Server",
                        "lectureDuration": 35,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {
            "_id": "teacher_ahmed_benali",
            "name": "Ahmed Benali",
            "profileImage": profile_img2
        },
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2024-12-20T11:00:00.000Z",
        "updatedAt": "2024-12-20T11:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
        "_id": "new_teacher_2_course_1",
        "courseTitle": "UI/UX Design Masterclass",
        "courseDescription": "<h2>Design Beautiful User Interfaces</h2><p>Learn modern UI/UX design principles and create stunning user experiences. From wireframes to prototypes.</p><ul><li>Design Principles</li><li>Figma Mastery</li><li>User Research</li><li>Prototyping</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "design_chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Design Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "design_lecture1",
                        "lectureTitle": "Color Theory",
                        "lectureDuration": 28,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "design_lecture2",
                        "lectureTitle": "Typography Basics",
                        "lectureDuration": 22,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {
            "_id": "teacher_fatima_ouali",
            "name": "Fatima Ouali",
            "profileImage": profile_img3
        },
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2024-12-20T12:00:00.000Z",
        "updatedAt": "2024-12-20T12:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
        "_id": "new_teacher_2_course_2",
        "courseTitle": "Mobile App Design with Flutter",
        "courseDescription": "<h2>Create Cross-Platform Mobile Apps</h2><p>Build beautiful mobile applications for iOS and Android using Flutter. One codebase, two platforms.</p><ul><li>Flutter Basics</li><li>Widget Development</li><li>State Management</li><li>App Publishing</li></ul>",
        "coursePrice": 109.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "flutter_chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Flutter Introduction",
                "chapterContent": [
                    {
                        "lectureId": "flutter_lecture1",
                        "lectureTitle": "Setting up Flutter",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "flutter_lecture2",
                        "lectureTitle": "Your First App",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/dQw4w9WgXcQ",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {
            "_id": "teacher_fatima_ouali",
            "name": "Fatima Ouali",
            "profileImage": profile_img3
        },
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2024-12-20T13:00:00.000Z",
        "updatedAt": "2024-12-20T13:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
]