export type SubCourse = {
  title: string;
  category: string;
  emoji: string;
  color: string;
  tagline: string;
  rating: number;
  overview: {
    duration: string;
    classesPerWeek: string;
    level: string;
    medium: string;
  };
  pricing: {
    monthlyFee: string;
    registrationFee: string;
    whatsIncluded: string[];
  };
  schedule: {
    day: string;
    morningBatch: string;
    eveningBatch: string;
  }[];
  teacher: {
    name: string;
    qualification: string;
    bio: string;
    avatar: string;
  };
  syllabus: {
    module: string;
    topics: string[];
  }[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const courseData: Record<string, Record<string, SubCourse>> = {
  quran: {
    nazra: {
      title: "Nazra Quran",
      category: "Quran Education",
      emoji: "📖",
      color: "#1a2e6e",
      tagline: "Read the Quran with proper pronunciation and confidence",
      rating: 5.0,
      overview: {
        duration: "30 min/class",
        classesPerWeek: "3 classes",
        level: "Beginner",
        medium: "Urdu / English",
      },
      pricing: {
        monthlyFee: "PKR 2,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live one-to-one classes",
          "Recorded session access",
          "PDF lesson notes",
          "Weekly progress tests",
          "Completion certificate",
        ],
      },
      schedule: [
        { day: "Monday", morningBatch: "9:00 AM - 9:30 AM", eveningBatch: "6:00 PM - 6:30 PM" },
        { day: "Wednesday", morningBatch: "9:00 AM - 9:30 AM", eveningBatch: "6:00 PM - 6:30 PM" },
        { day: "Friday", morningBatch: "9:00 AM - 9:30 AM", eveningBatch: "6:00 PM - 6:30 PM" },
      ],
      teacher: {
        name: "Qari Abdul Rahman",
        qualification: "Hafiz-ul-Quran, Ijazah in Tajweed",
        bio: "Certified Quran teacher with over 10 years of experience teaching Nazra to students of all ages. Specializes in building strong foundational reading skills.",
        avatar: "🎙️",
      },
      syllabus: [
        {
          module: "Module 1: Arabic Alphabet & Pronunciation",
          topics: [
            "Introduction to Arabic letters (Huroof-e-Tahaji)",
            "Correct Makharij (points of articulation)",
            "Joining letters to form words",
            "Practice with short surahs",
          ],
        },
        {
          module: "Module 2: Basic Reading Skills",
          topics: [
            "Harakat (Fatha, Kasra, Damma)",
            "Sakin and Tanween rules",
            "Madd (elongation) basics",
            "Reading simple verses fluently",
          ],
        },
        {
          module: "Module 3: Fluency Building",
          topics: [
            "Connecting verses smoothly",
            "Stopping rules (Waqf)",
            "Reading longer passages",
            "Speed and accuracy drills",
          ],
        },
        {
          module: "Module 4: Independent Reading",
          topics: [
            "Reading Juz Amma independently",
            "Self-correction techniques",
            "Regular reading routine",
            "Assessment & certification",
          ],
        },
      ],
      reviews: [
        { name: "Fatima A.", rating: 5, comment: "My daughter has improved so much in just 3 months. The teacher is very patient and knows exactly how to work with beginners." },
        { name: "Ahmed K.", rating: 5, comment: "Excellent Nazra program. The step-by-step approach helped me learn from scratch. Highly recommended!" },
        { name: "Sara M.", rating: 5, comment: "The flexible timing option is perfect for our family. Teachers are punctual and well-qualified." },
      ],
      faq: [
        { question: "What age is suitable for Nazra classes?", answer: "Nazra classes are suitable for children aged 5 and above, as well as adults who want to learn Quran reading from the beginning." },
        { question: "How long does it take to complete Nazra?", answer: "With consistent 3 classes per week, most students complete Nazra within 6-8 months, depending on their pace and practice." },
        { question: "Do I need any prior knowledge?", answer: "No prior knowledge is required. Our Nazra program starts from the very basics of Arabic alphabet recognition." },
        { question: "Can parents observe the classes?", answer: "Yes, we encourage parents to sit in during classes, especially for younger children. All classes are also recorded for review." },
      ],
    },
    tajweed: {
      title: "Tajweed",
      category: "Quran Education",
      emoji: "📖",
      color: "#1a2e6e",
      tagline: "Master the rules of Quranic recitation with expert guidance",
      rating: 5.0,
      overview: {
        duration: "45 min/class",
        classesPerWeek: "3 classes",
        level: "Intermediate",
        medium: "Urdu / English",
      },
      pricing: {
        monthlyFee: "PKR 3,000/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live one-to-one classes",
          "Recorded session access",
          "Tajweed rule charts",
          "Weekly practice assignments",
          "Completion certificate",
        ],
      },
      schedule: [
        { day: "Tuesday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "7:00 PM - 7:45 PM" },
        { day: "Thursday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "7:00 PM - 7:45 PM" },
        { day: "Saturday", morningBatch: "9:30 AM - 10:15 AM", eveningBatch: "5:00 PM - 5:45 PM" },
      ],
      teacher: {
        name: "Qari Muhammad Usman",
        qualification: "Hafiz-ul-Quran, Sanad in Tajweed, MA Islamic Studies",
        bio: "Specialist in Tajweed with 12+ years of teaching experience. Holds multiple Ijazaat in different Qira'at and has taught students across 15+ countries.",
        avatar: "🎙️",
      },
      syllabus: [
        {
          module: "Module 1: Introduction to Tajweed",
          topics: [
            "Importance and benefits of Tajweed",
            "Makharij-ul-Huroof (articulation points)",
            "Sifaat-ul-Huroof (letter characteristics)",
            "Common mistakes in recitation",
          ],
        },
        {
          module: "Module 2: Noon Sakin & Tanween Rules",
          topics: [
            "Izhar (clear pronunciation)",
            "Idgham (merging)",
            "Iqlaab (conversion)",
            "Ikhfa (hiding)",
          ],
        },
        {
          module: "Module 3: Meem Sakin & Madd Rules",
          topics: [
            "Ikhfa-e-Shafawi",
            "Idgham-e-Shafawi",
            "Izhar-e-Shafawi",
            "Types of Madd and their durations",
          ],
        },
        {
          module: "Module 4: Advanced Application",
          topics: [
            "Waqf (stopping) rules in depth",
            "Hamzat-ul-Wasl",
            "Recitation of Juz Amma with full Tajweed",
            "Final assessment and Ijazah preparation",
          ],
        },
      ],
      reviews: [
        { name: "Hassan R.", rating: 5, comment: "I never understood Tajweed until I joined this class. The teacher explains each rule with clear examples from the Quran." },
        { name: "Aisha T.", rating: 5, comment: "The structured syllabus made learning Tajweed so easy. I can now recite with confidence and proper pronunciation." },
        { name: "Omar S.", rating: 5, comment: "Outstanding teaching methodology. The focus on Makharij completely transformed my recitation. Highly recommended!" },
      ],
      faq: [
        { question: "What is the prerequisite for Tajweed classes?", answer: "Students should be able to read the Quran (Nazra level). Basic familiarity with Arabic letters is required." },
        { question: "How long does the complete Tajweed course take?", answer: "The full Tajweed course typically takes 8-10 months with 3 classes per week. Progress depends on practice and consistency." },
        { question: "Do you teach different Qira'at?", answer: "Yes, our advanced Tajweed program covers Hafs 'an Asim as the primary Qira'ah, with options to study other authentic Qira'at." },
        { question: "Is there a certificate upon completion?", answer: "Yes, students who pass the final assessment receive a certificate of completion recognized by our institution." },
      ],
    },
    tafseer: {
      title: "Tafseer-ul-Quran",
      category: "Quran Education",
      emoji: "📖",
      color: "#1a2e6e",
      tagline: "Understand the deeper meaning and message of the Quran",
      rating: 4.9,
      overview: {
        duration: "60 min/class",
        classesPerWeek: "2 classes",
        level: "Advanced",
        medium: "Urdu / English",
      },
      pricing: {
        monthlyFee: "PKR 3,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live interactive classes",
          "Tafseer reference notes",
          "Weekly discussion forum",
          "Q&A sessions",
          "Course completion certificate",
        ],
      },
      schedule: [
        { day: "Monday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "7:00 PM - 8:00 PM" },
        { day: "Thursday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "7:00 PM - 8:00 PM" },
      ],
      teacher: {
        name: "Dr. Hafiz Suleman Khan",
        qualification: "PhD in Islamic Studies, Hafiz-ul-Quran",
        bio: "Islamic scholar with 15+ years of experience in Tafseer and Islamic studies. Has taught at prestigious institutions and authored several books on Quranic interpretation.",
        avatar: "👨‍🏫",
      },
      syllabus: [
        {
          module: "Module 1: Introduction to Tafseer",
          topics: [
            "History and development of Tafseer",
            "Principles of Quranic interpretation",
            "Types of Tafseer (Tafsir bil-Ma'thur, Tafsir bir-Ra'y)",
            "Famous Mufassireen and their methodologies",
          ],
        },
        {
          module: "Module 2: Juz Amma (Part 30)",
          topics: [
            "In-depth study of Surahs from Juz Amma",
            "Context of revelation (Asbab-un-Nuzul)",
            "Linguistic analysis and word meanings",
            "Contemporary relevance and application",
          ],
        },
        {
          module: "Module 3: Selected Surahs",
          topics: [
            "Surah Al-Fatiha — The Essence of the Quran",
            "Surah Yaseen — The Heart of the Quran",
            "Surah Al-Kahf — Stories and Lessons",
            "Surah Al-Mulk — Reflection on Creation",
          ],
        },
        {
          module: "Module 4: Applying Quranic Teachings",
          topics: [
            "Quranic worldview and belief system",
            "Moral and ethical teachings",
            "Social and family guidance",
            "Personal development through the Quran",
          ],
        },
      ],
      reviews: [
        { name: "Khadija B.", rating: 5, comment: "Dr. Suleman's Tafseer classes have completely changed my relationship with the Quran. I now understand what Allah is saying to me." },
        { name: "Ibrahim N.", rating: 5, comment: "The depth of knowledge shared in these classes is incredible. The context of revelation makes every verse come alive." },
        { name: "Zainab W.", rating: 4, comment: "Very insightful course. I appreciate the balanced approach and the focus on contemporary application of Quranic teachings." },
      ],
      faq: [
        { question: "Do I need to know Arabic to take Tafseer classes?", answer: "No, the classes are conducted in Urdu and English. References to Arabic words are explained thoroughly." },
        { question: "What Tafseer books do you reference?", answer: "We primarily reference Tafseer Ibn Kathir, Tafseer al-Qurtubi, and Tafseer Maariful Quran, among others." },
        { question: "Is this course suitable for beginners?", answer: "This is an advanced-level course. Basic knowledge of Quran reading and Islamic studies is recommended." },
        { question: "Are classes recorded if I miss one?", answer: "Yes, all classes are recorded and shared with students. You can review them anytime." },
      ],
    },
  },
  english: {
    grammar: {
      title: "English Grammar",
      category: "Languages",
      emoji: "🗣️",
      color: "#00b894",
      tagline: "Build a strong foundation in English grammar and sentence structure",
      rating: 4.9,
      overview: {
        duration: "45 min/class",
        classesPerWeek: "3 classes",
        level: "All levels",
        medium: "English",
      },
      pricing: {
        monthlyFee: "PKR 3,000/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live interactive classes",
          "Practice worksheets",
          "Grammar reference book",
          "Weekly quizzes",
          "Progress report",
        ],
      },
      schedule: [
        { day: "Monday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "6:00 PM - 6:45 PM" },
        { day: "Wednesday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "6:00 PM - 6:45 PM" },
        { day: "Friday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "6:00 PM - 6:45 PM" },
      ],
      teacher: {
        name: "Miss Sarah Ali",
        qualification: "MA English Linguistics, Certified TESOL",
        bio: "Experienced English language teacher with 8+ years of experience. Specializes in making grammar accessible and fun for students of all ages.",
        avatar: "👩‍🏫",
      },
      syllabus: [
        {
          module: "Module 1: Parts of Speech",
          topics: [
            "Nouns, pronouns, and their types",
            "Verbs and tenses overview",
            "Adjectives, adverbs, and proper usage",
            "Prepositions, conjunctions, interjections",
          ],
        },
        {
          module: "Module 2: Tenses & Sentence Structure",
          topics: [
            "Present, past, and future tenses in depth",
            "Simple, continuous, perfect, and perfect continuous",
            "Active and passive voice",
            "Sentence types: simple, compound, complex",
          ],
        },
        {
          module: "Module 3: Advanced Grammar",
          topics: [
            "Conditional sentences",
            "Reported speech",
            "Relative clauses",
            "Modal verbs and their uses",
          ],
        },
        {
          module: "Module 4: Writing Mechanics",
          topics: [
            "Punctuation mastery",
            "Common grammatical errors",
            "Paragraph structure",
            "Editing and proofreading skills",
          ],
        },
      ],
      reviews: [
        { name: "Usman P.", rating: 5, comment: "Miss Sarah explains grammar concepts so clearly. My writing has improved tremendously after joining these classes." },
        { name: "Mariam D.", rating: 5, comment: "The best English grammar course I've ever taken. The worksheets and quizzes really reinforce the learning." },
        { name: "Ali R.", rating: 5, comment: "I used to struggle with tenses, but now I use them correctly without thinking. Highly recommended!" },
      ],
      faq: [
        { question: "What level of English do I need to start?", answer: "Basic understanding of English is helpful but not required. We assess your level in the first class and tailor accordingly." },
        { question: "How long does it take to complete the grammar course?", answer: "The full course is designed for 4-5 months with consistent attendance. Each module builds on the previous one." },
        { question: "Do you offer exam preparation for English grammar?", answer: "Yes, we provide targeted preparation for school exams, IELTS, and other English proficiency tests." },
        { question: "Are there homework assignments?", answer: "Yes, weekly practice worksheets and online quizzes are provided to reinforce classroom learning." },
      ],
    },
    speaking: {
      title: "English Speaking",
      category: "Languages",
      emoji: "🗣️",
      color: "#00b894",
      tagline: "Speak English fluently and confidently in real-life situations",
      rating: 4.9,
      overview: {
        duration: "45 min/class",
        classesPerWeek: "3 classes",
        level: "All levels",
        medium: "English",
      },
      pricing: {
        monthlyFee: "PKR 3,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live conversation practice",
          "Speaking drills & exercises",
          "Vocabulary building materials",
          "Pronunciation feedback",
          "Fluency assessment report",
        ],
      },
      schedule: [
        { day: "Tuesday", morningBatch: "11:00 AM - 11:45 AM", eveningBatch: "7:00 PM - 7:45 PM" },
        { day: "Thursday", morningBatch: "11:00 AM - 11:45 AM", eveningBatch: "7:00 PM - 7:45 PM" },
        { day: "Saturday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "5:00 PM - 5:45 PM" },
      ],
      teacher: {
        name: "Mr. David Thompson",
        qualification: "CELTA Certified, BA English Literature",
        bio: "Native-level English speaking coach with 10+ years of experience helping non-native speakers gain confidence in spoken English.",
        avatar: "👨‍🏫",
      },
      syllabus: [
        {
          module: "Module 1: Foundations of Speaking",
          topics: [
            "Building confidence to speak",
            "Common everyday expressions",
            "Introductions and small talk",
            "Asking and answering questions",
          ],
        },
        {
          module: "Module 2: Vocabulary & Pronunciation",
          topics: [
            "Expanding daily vocabulary",
            "Correct pronunciation and intonation",
            "Word stress and sentence rhythm",
            "Reducing mother tongue influence",
          ],
        },
        {
          module: "Module 3: Real-Life Conversations",
          topics: [
            "At the store, restaurant, and bank",
            "Workplace communication",
            "Travel and directions",
            "Making phone calls",
          ],
        },
        {
          module: "Module 4: Advanced Fluency",
          topics: [
            "Group discussions and debates",
            "Presentations and public speaking",
            "Idioms and phrasal verbs",
            "Fluency final assessment",
          ],
        },
      ],
      reviews: [
        { name: "Bilal K.", rating: 5, comment: "I was terrified of speaking English before. Now I can confidently talk to anyone. This course changed my life!" },
        { name: "Hira S.", rating: 5, comment: "The conversation practice sessions are amazing. The teacher creates a very supportive environment to practice speaking." },
        { name: "Kamran J.", rating: 4, comment: "Great focus on practical, real-life English. I use what I learn immediately in my daily life and at work." },
      ],
      faq: [
        { question: "How quickly will I see improvement in my speaking?", answer: "Most students notice significant improvement within 4-6 weeks of regular classes and practice." },
        { question: "Do you focus on accent reduction?", answer: "Yes, we work on clear pronunciation and reducing mother tongue influence, while respecting your natural accent." },
        { question: "Can I get extra speaking practice outside class?", answer: "Yes, we offer optional conversation clubs and speaking circles for additional practice at no extra cost." },
        { question: "Are the classes one-to-one or group?", answer: "We offer both options. One-to-one classes provide personalized attention, while group classes offer more conversation partners." },
      ],
    },
    reading: {
      title: "English Reading",
      category: "Languages",
      emoji: "🗣️",
      color: "#00b894",
      tagline: "Develop strong reading comprehension and analytical skills",
      rating: 4.8,
      overview: {
        duration: "45 min/class",
        classesPerWeek: "2 classes",
        level: "Intermediate",
        medium: "English",
      },
      pricing: {
        monthlyFee: "PKR 2,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Guided reading sessions",
          "Reading comprehension exercises",
          "Vocabulary lists and flashcards",
          "Book club discussions",
          "Progress tracking",
        ],
      },
      schedule: [
        { day: "Monday", morningBatch: "11:00 AM - 11:45 AM", eveningBatch: "6:30 PM - 7:15 PM" },
        { day: "Wednesday", morningBatch: "11:00 AM - 11:45 AM", eveningBatch: "6:30 PM - 7:15 PM" },
      ],
      teacher: {
        name: "Ms. Emily Clarke",
        qualification: "MA Education, Reading Specialist",
        bio: "Dedicated reading instructor with 9+ years of experience helping students develop a love for reading and strong comprehension abilities.",
        avatar: "👩‍🏫",
      },
      syllabus: [
        {
          module: "Module 1: Reading Fundamentals",
          topics: [
            "Phonics and decoding skills",
            "Sight words and vocabulary building",
            "Reading fluency and speed",
            "Understanding sentence structure",
          ],
        },
        {
          module: "Module 2: Comprehension Skills",
          topics: [
            "Main idea and supporting details",
            "Making inferences and predictions",
            "Cause and effect relationships",
            "Compare and contrast",
          ],
        },
        {
          module: "Module 3: Critical Reading",
          topics: [
            "Analyzing author's purpose and tone",
            "Identifying bias and perspective",
            "Fact vs. opinion",
            "Summarizing and paraphrasing",
          ],
        },
        {
          module: "Module 4: Advanced Reading",
          topics: [
            "Reading academic texts",
            "Analyzing literature and poetry",
            "Research and reference skills",
            "Book report and review writing",
          ],
        },
      ],
      reviews: [
        { name: "Saima N.", rating: 5, comment: "My son used to hate reading, but now he loves it! Ms. Emily makes reading fun and engaging." },
        { name: "Tariq M.", rating: 5, comment: "Excellent reading program. My comprehension and vocabulary have improved significantly." },
        { name: "Nadia F.", rating: 4, comment: "Great curriculum with diverse reading materials. The book club discussions are a highlight." },
      ],
      faq: [
        { question: "What materials do you use for reading practice?", answer: "We use a variety of materials including graded readers, news articles, short stories, and age-appropriate literature." },
        { question: "Can this course help with exam reading sections?", answer: "Absolutely. We include practice with exam-style reading passages and questions for IELTS, GCSE, and other tests." },
        { question: "How is reading progress measured?", answer: "We use leveled reading assessments, comprehension quizzes, and regular progress reports to track improvement." },
        { question: "Do you provide reading materials or do I need to buy books?", answer: "All reading materials are provided digitally as part of the course. No additional purchases needed." },
      ],
    },
    writing: {
      title: "English Writing",
      category: "Languages",
      emoji: "🗣️",
      color: "#00b894",
      tagline: "Express yourself clearly and effectively through writing",
      rating: 4.8,
      overview: {
        duration: "45 min/class",
        classesPerWeek: "2 classes",
        level: "Intermediate",
        medium: "English",
      },
      pricing: {
        monthlyFee: "PKR 3,000/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live writing workshops",
          "Personalized feedback on essays",
          "Writing templates and guides",
          "Grammar and style support",
          "Portfolio of your work",
        ],
      },
      schedule: [
        { day: "Tuesday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "7:00 PM - 7:45 PM" },
        { day: "Thursday", morningBatch: "10:00 AM - 10:45 AM", eveningBatch: "7:00 PM - 7:45 PM" },
      ],
      teacher: {
        name: "Ms. Rachel Green",
        qualification: "MA Creative Writing, BA Journalism",
        bio: "Published writer and experienced writing coach. Has helped hundreds of students improve their academic and creative writing skills.",
        avatar: "👩‍🏫",
      },
      syllabus: [
        {
          module: "Module 1: Writing Basics",
          topics: [
            "Sentence variety and structure",
            "Paragraph organization",
            "Topic sentences and transitions",
            "Building coherent paragraphs",
          ],
        },
        {
          module: "Module 2: Essay Writing",
          topics: [
            "Types of essays (narrative, descriptive, persuasive)",
            "Thesis statement development",
            "Introduction, body, conclusion structure",
            "Using evidence and examples",
          ],
        },
        {
          module: "Module 3: Formal & Academic Writing",
          topics: [
            "Formal letter and email writing",
            "Report writing structure",
            "Academic essay conventions",
            "Citations and referencing basics",
          ],
        },
        {
          module: "Module 4: Creative & Expressive Writing",
          topics: [
            "Story writing techniques",
            "Descriptive and figurative language",
            "Writing with voice and style",
            "Final writing portfolio project",
          ],
        },
      ],
      reviews: [
        { name: "Danish A.", rating: 5, comment: "My essay writing has transformed completely. The step-by-step guidance and personalized feedback are invaluable." },
        { name: "Rabia K.", rating: 5, comment: "I needed help with academic writing for university. This course gave me exactly the skills I needed. Highly recommend!" },
        { name: "Faizan L.", rating: 4, comment: "Very well-structured course. Ms. Rachel provides detailed feedback that helps you improve with every assignment." },
      ],
      faq: [
        { question: "How much writing practice is involved?", answer: "You'll write at least one piece per week, with detailed feedback from your teacher on every submission." },
        { question: "Can this course help with academic essay writing?", answer: "Yes, the course includes dedicated modules on academic essay writing, research papers, and formal writing." },
        { question: "Do you cover creative writing as well?", answer: "Absolutely! Module 4 focuses entirely on creative writing including stories, descriptive pieces, and finding your unique voice." },
        { question: "How is feedback provided?", answer: "Feedback is provided through written comments on your submissions, as well as live discussion during class time." },
      ],
    },
  },
  science: {
    physics: {
      title: "Physics",
      category: "Academic",
      emoji: "🔬",
      color: "#6c5ce7",
      tagline: "Understand the fundamental laws that govern the universe",
      rating: 4.8,
      overview: {
        duration: "60 min/class",
        classesPerWeek: "3 classes",
        level: "Grade 6 - A Level",
        medium: "English / Urdu",
      },
      pricing: {
        monthlyFee: "PKR 3,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live online classes",
          "Numerical problem-solving sessions",
          "Lab demonstration videos",
          "Practice worksheets",
          "Exam preparation support",
        ],
      },
      schedule: [
        { day: "Monday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "6:00 PM - 7:00 PM" },
        { day: "Wednesday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "6:00 PM - 7:00 PM" },
        { day: "Friday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "6:00 PM - 7:00 PM" },
      ],
      teacher: {
        name: "Mr. Hassan Iqbal",
        qualification: "MSc Physics, BEd",
        bio: "Passionate physics educator with 10+ years of teaching experience at O Level, A Level, and secondary school levels. Expert in making complex concepts simple.",
        avatar: "👨‍🔬",
      },
      syllabus: [
        {
          module: "Module 1: Mechanics",
          topics: [
            "Forces and motion",
            "Newton's laws of motion",
            "Work, energy, and power",
            "Circular motion and gravitation",
          ],
        },
        {
          module: "Module 2: Waves & Optics",
          topics: [
            "Properties of waves",
            "Sound waves and ultrasound",
            "Light reflection and refraction",
            "Lenses and optical instruments",
          ],
        },
        {
          module: "Module 3: Electricity & Magnetism",
          topics: [
            "Electric circuits and components",
            "Current, voltage, and resistance",
            "Magnetic fields and electromagnetism",
            "Electromagnetic induction",
          ],
        },
        {
          module: "Module 4: Modern Physics",
          topics: [
            "Atomic structure and radioactivity",
            "Nuclear physics",
            "Quantum physics basics",
            "Astrophysics and cosmology",
          ],
        },
      ],
      reviews: [
        { name: "Abdullah S.", rating: 5, comment: "Mr. Hassan makes physics easy and interesting. I went from failing to getting an A in my exams!" },
        { name: "Mahnoor Z.", rating: 5, comment: "The numerical practice sessions are extremely helpful. The step-by-step approach builds confidence." },
        { name: "Rayan K.", rating: 4, comment: "Great teacher who really cares about student understanding. The lab demonstration videos are a big plus." },
      ],
      faq: [
        { question: "What curriculum do you follow?", answer: "We cover all major curricula including Cambridge O Level, A Level, Edexcel, and national board curricula." },
        { question: "Do you provide past paper practice?", answer: "Yes, exam-style questions and past papers are an integral part of our teaching approach." },
        { question: "How are practical experiments handled online?", answer: "We use high-quality lab demonstration videos and virtual simulation tools for practical understanding." },
        { question: "Can I get extra help with difficult topics?", answer: "Yes, additional remedial sessions can be arranged for topics you find challenging." },
      ],
    },
    chemistry: {
      title: "Chemistry",
      category: "Academic",
      emoji: "🔬",
      color: "#6c5ce7",
      tagline: "Discover the building blocks of matter and chemical reactions",
      rating: 4.8,
      overview: {
        duration: "60 min/class",
        classesPerWeek: "3 classes",
        level: "Grade 6 - A Level",
        medium: "English / Urdu",
      },
      pricing: {
        monthlyFee: "PKR 3,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live online classes",
          "Chemical equation practice",
          "Lab experiment demonstrations",
          "Revision notes and summaries",
          "Mock test preparation",
        ],
      },
      schedule: [
        { day: "Tuesday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "6:00 PM - 7:00 PM" },
        { day: "Thursday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "6:00 PM - 7:00 PM" },
        { day: "Saturday", morningBatch: "10:00 AM - 11:00 AM", eveningBatch: "4:00 PM - 5:00 PM" },
      ],
      teacher: {
        name: "Ms. Ayesha Kamal",
        qualification: "MSc Chemistry, MEd",
        bio: "Experienced chemistry teacher with 8+ years in O Level and A Level instruction. Known for making chemistry engaging through real-world examples and experiments.",
        avatar: "👩‍🔬",
      },
      syllabus: [
        {
          module: "Module 1: Atomic Structure & Bonding",
          topics: [
            "Atomic structure and periodic table",
            "Ionic, covalent, and metallic bonding",
            "Chemical formulas and equations",
            "Moles and stoichiometry",
          ],
        },
        {
          module: "Module 2: Chemical Reactions",
          topics: [
            "Types of chemical reactions",
            "Rates of reaction and factors",
            "Energy changes in reactions",
            "Reversible reactions and equilibrium",
          ],
        },
        {
          module: "Module 3: Organic Chemistry",
          topics: [
            "Hydrocarbons and alkanes",
            "Alkenes, alcohols, and carboxylic acids",
            "Polymers and polymerization",
            "Organic reaction mechanisms",
          ],
        },
        {
          module: "Module 4: Analytical Chemistry",
          topics: [
            "Acids, bases, and salts",
            "pH scale and indicators",
            "Qualitative analysis",
            "Quantitative analysis and titrations",
          ],
        },
      ],
      reviews: [
        { name: "Zara H.", rating: 5, comment: "Ms. Ayesha is an amazing teacher! She explains complex reactions so simply. I love her practical approach." },
        { name: "Hamza R.", rating: 5, comment: "The experiment demonstrations make chemistry come alive. My grades have improved dramatically." },
        { name: "Lubna F.", rating: 4, comment: "Very thorough coverage of the syllabus. The revision notes are excellent for exam preparation." },
      ],
      faq: [
        { question: "Do you cover both organic and inorganic chemistry?", answer: "Yes, we cover all branches of chemistry including organic, inorganic, physical, and analytical chemistry." },
        { question: "Are lab practicals included?", answer: "Lab experiment demonstrations and virtual simulations are included to give you practical understanding." },
        { question: "What exam boards do you prepare for?", answer: "We prepare students for Cambridge, Edexcel, and all major national and international exam boards." },
        { question: "How are chemical equations taught?", answer: "We use systematic methods with plenty of practice exercises to master balancing and writing equations." },
      ],
    },
    biology: {
      title: "Biology",
      category: "Academic",
      emoji: "🔬",
      color: "#6c5ce7",
      tagline: "Explore the science of life from cells to ecosystems",
      rating: 4.9,
      overview: {
        duration: "60 min/class",
        classesPerWeek: "3 classes",
        level: "Grade 6 - A Level",
        medium: "English / Urdu",
      },
      pricing: {
        monthlyFee: "PKR 3,500/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live interactive classes",
          "Diagram and labeling practice",
          "Lab experiment videos",
          "Revision mind maps",
          "Exam-focused preparation",
        ],
      },
      schedule: [
        { day: "Monday", morningBatch: "11:00 AM - 12:00 PM", eveningBatch: "7:00 PM - 8:00 PM" },
        { day: "Wednesday", morningBatch: "11:00 AM - 12:00 PM", eveningBatch: "7:00 PM - 8:00 PM" },
        { day: "Friday", morningBatch: "11:00 AM - 12:00 PM", eveningBatch: "7:00 PM - 8:00 PM" },
      ],
      teacher: {
        name: "Dr. Samina Tariq",
        qualification: "PhD Biology, MSc Zoology",
        bio: "University biology professor with 12+ years of teaching experience. Specializes in making complex biological processes easy to understand.",
        avatar: "👩‍🔬",
      },
      syllabus: [
        {
          module: "Module 1: Cell Biology",
          topics: [
            "Cell structure and function",
            "Cell division (mitosis and meiosis)",
            "Enzymes and biological molecules",
            "Transport across cell membranes",
          ],
        },
        {
          module: "Module 2: Human Biology",
          topics: [
            "Digestive and respiratory systems",
            "Circulatory and excretory systems",
            "Nervous and endocrine systems",
            "Reproduction and development",
          ],
        },
        {
          module: "Module 3: Genetics & Evolution",
          topics: [
            "DNA structure and replication",
            "Protein synthesis",
            "Inheritance and genetic variation",
            "Natural selection and evolution",
          ],
        },
        {
          module: "Module 4: Ecology & Environment",
          topics: [
            "Ecosystems and food chains",
            "Nutrient cycles",
            "Biodiversity and conservation",
            "Human impact on the environment",
          ],
        },
      ],
      reviews: [
        { name: "Fatima E.", rating: 5, comment: "Dr. Samina explains biology so well. Her diagrams and visual aids make learning easy and enjoyable." },
        { name: "Obaid R.", rating: 5, comment: "The best biology teacher I've ever had. My understanding of complex topics has improved tremendously." },
        { name: "Sana W.", rating: 5, comment: "Excellent preparation for my A Level exams. The revision mind maps are incredibly helpful." },
      ],
      faq: [
        { question: "How do you teach practical biology online?", answer: "We use detailed diagrams, animations, and lab demonstration videos to cover all practical aspects effectively." },
        { question: "Do you cover all exam board specifications?", answer: "Yes, we tailor the content to your specific exam board including Cambridge, Edexcel, and national curricula." },
        { question: "How are diagrams and labeling taught?", answer: "We provide step-by-step diagram drawing guidance with proper labeling practice in every relevant topic." },
        { question: "Is there support for coursework or practical assessments?", answer: "Yes, we provide full support for internal assessments, coursework, and practical exam preparation." },
      ],
    },
    mathematics: {
      title: "Mathematics",
      category: "Academic",
      emoji: "🔬",
      color: "#6c5ce7",
      tagline: "Build problem-solving skills and mathematical confidence",
      rating: 4.8,
      overview: {
        duration: "60 min/class",
        classesPerWeek: "3 classes",
        level: "Grade 1 - A Level",
        medium: "English / Urdu",
      },
      pricing: {
        monthlyFee: "PKR 3,000/month",
        registrationFee: "PKR 500",
        whatsIncluded: [
          "Live interactive classes",
          "Step-by-step problem solving",
          "Practice worksheets",
          "Weekly mental math drills",
          "Exam preparation",
        ],
      },
      schedule: [
        { day: "Tuesday", morningBatch: "11:00 AM - 12:00 PM", eveningBatch: "6:00 PM - 7:00 PM" },
        { day: "Thursday", morningBatch: "11:00 AM - 12:00 PM", eveningBatch: "6:00 PM - 7:00 PM" },
        { day: "Saturday", morningBatch: "11:00 AM - 12:00 PM", eveningBatch: "4:00 PM - 5:00 PM" },
      ],
      teacher: {
        name: "Mr. Imran Ali",
        qualification: "MSc Mathematics, BEd",
        bio: "Mathematics expert with 10+ years of teaching from primary to A Level. Known for making math fun and building student confidence.",
        avatar: "👨‍🏫",
      },
      syllabus: [
        {
          module: "Module 1: Number & Algebra",
          topics: [
            "Number systems and operations",
            "Algebraic expressions and equations",
            "Linear and quadratic equations",
            "Inequalities and number patterns",
          ],
        },
        {
          module: "Module 2: Geometry & Trigonometry",
          topics: [
            "Angles, shapes, and properties",
            "Coordinate geometry",
            "Trigonometric ratios and identities",
            "Sine, cosine, and tangent rules",
          ],
        },
        {
          module: "Module 3: Statistics & Probability",
          topics: [
            "Data collection and representation",
            "Measures of central tendency",
            "Probability basics and rules",
            "Statistical diagrams and interpretation",
          ],
        },
        {
          module: "Module 4: Calculus & Advanced Topics",
          topics: [
            "Differentiation basics",
            "Integration fundamentals",
            "Applications of calculus",
            "Vectors and matrices introduction",
          ],
        },
      ],
      reviews: [
        { name: "Bilal A.", rating: 5, comment: "Mr. Imran is a fantastic math teacher. He helped me overcome my fear of math and now I actually enjoy solving problems." },
        { name: "Amina K.", rating: 5, comment: "The step-by-step approach to problem-solving is brilliant. My exam scores have gone up significantly." },
        { name: "Rayyan S.", rating: 4, comment: "Very patient teacher who explains until you truly understand. The mental math drills are great for building speed." },
      ],
      faq: [
        { question: "What levels of mathematics do you teach?", answer: "We teach all levels from Grade 1 through A Level mathematics, including additional mathematics and further pure." },
        { question: "Do you prepare students for math competitions?", answer: "Yes, we offer specialized preparation for math competitions and Olympiads for interested students." },
        { question: "How do you help students struggling with math?", answer: "We identify gaps through diagnostic assessment and create personalized learning plans to address weak areas." },
        { question: "Are calculators allowed in class?", answer: "We teach both with and without calculators to ensure students are prepared for all exam conditions." },
      ],
    },
  },
};
