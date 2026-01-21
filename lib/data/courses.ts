import { Course, CourseDetails } from '@/lib/types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Survival Japanese: Essential Phrases for Travel',
    level: 'N5',
    description: 'Master essential Japanese phrases for travel, dining, shopping, and everyday conversations.',
    instructor: {
      name: 'Kenji Sato',
    },
    lessons: '12 Lessons',
    price: 29.00,
    imageUrl: '/assets/course_N5.png',
    badgeColor: 'primary',
  },
  {
    id: '2',
    title: 'Mastering N3 Kanji: The Core 600',
    level: 'N3',
    description: 'Learn the 600 most essential kanji characters for JLPT N3 level.',
    instructor: {
      name: 'Aiko Tanaka',
    },
    lessons: '45 Lessons',
    price: 59.00,
    imageUrl: '/assets/course_N3.png',
    badgeColor: 'indigo',
  },
  {
    id: '3',
    title: 'Keigo Mastery: Professional Japanese for Business',
    level: 'N2',
    description: 'Master honorific language and business etiquette for professional settings.',
    instructor: {
      name: 'Hiroshi Yamamoto',
    },
    lessons: '24 Lessons',
    price: 79.00,
    imageUrl: '/assets/course_N2.png',
    badgeColor: 'red',
  },
  {
    id: '4',
    title: 'Japanese through Manga: Everyday Slang',
    level: 'N4',
    description: 'Learn casual Japanese and slang through popular manga and anime.',
    instructor: {
      name: 'Mika Chen',
    },
    lessons: '18 Lessons',
    price: 35.00,
    imageUrl: '/assets/course_N4.png',
    badgeColor: 'primary',
  },
  {
    id: '5',
    title: 'Literary Japanese: Reading Classic Novels',
    level: 'N1',
    description: 'Deepen your understanding of Japanese literature and classical writing.',
    instructor: {
      name: 'Dr. Takashi Mori',
    },
    lessons: '30 Lessons',
    price: 99.00,
    imageUrl: '/assets/course_N1.png',
    badgeColor: 'black',
  },
  {
    id: '6',
    title: 'Daily Listening Practice: Authentic Dialogues',
    level: 'All Levels',
    description: 'Improve your listening comprehension with real-world Japanese conversations.',
    instructor: {
      name: 'Yuki Suzuki',
    },
    lessons: '100+ Audio Clips',
    price: 19.00,
    imageUrl: '/assets/course_ALL.png',
    badgeColor: 'primary',
  },
];

// Detailed course data for course details page
export const courseDetails: CourseDetails[] = [
  {
    id: '1',
    slug: 'n5-beginner-japanese',
    title: 'N5 Beginner Japanese',
    level: 'N5',
    description: 'Master the fundamentals of Hiragana, Katakana, and basic grammar to start your Japanese journey with confidence.',
    longDescription: 'Master the fundamentals of Hiragana, Katakana, and basic grammar to start your Japanese journey with confidence.',
    instructor: {
      name: 'Tanaka Sensei',
      title: 'Certified Japanese Instructor • 10+ years experience',
      bio: 'Specializing in JLPT preparation and conversational fluency. Tanaka has helped over 5,000 students pass the N5 exam with a 98% success rate.',
      credentials: ['JLPT Specialist', 'Native Speaker', 'Tokyo University Alum'],
    },
    lessons: '48 Lessons',
    price: 49.99,
    originalPrice: 89.99,
    discountPercent: 45,
    discountDeadline: '2 days',
    imageUrl: '/assets/course_N5.png',
    heroImage: '/assets/course_N5.png',
    previewVideo: '/assets/course_N5.png',
    badgeColor: 'primary',
    learningOutcomes: [
      'Read and write all Hiragana and Katakana characters perfectly.',
      'Master over 100 essential Kanji used in daily life.',
      'Form basic sentences using "desu" and "masu" forms.',
      'Introduce yourself and hold simple daily conversations.',
    ],
    modules: [
      {
        id: '1',
        number: 1,
        title: 'The Writing System: Hiragana',
        lessonsCount: 4,
        duration: '45 mins',
        lessons: [
          { id: '1-1', title: 'Introduction to the Japanese Alphabet', type: 'video', duration: '10:24' },
          { id: '1-2', title: 'Hiragana Writing Practice Sheet', type: 'pdf', duration: '' },
          { id: '1-3', title: 'Hiragana Characters: A-Ko', type: 'video', duration: '15:30' },
          { id: '1-4', title: 'Hiragana Characters: Sa-N', type: 'video', duration: '18:45' },
        ],
      },
      {
        id: '2',
        number: 2,
        title: 'Basic Greetings & Introductions',
        lessonsCount: 6,
        duration: '1h 20m',
        lessons: [
          { id: '2-1', title: 'Morning and Evening Greetings', type: 'video', duration: '12:15' },
          { id: '2-2', title: 'Introducing Yourself', type: 'video', duration: '14:30' },
          { id: '2-3', title: 'Asking "How are you?"', type: 'video', duration: '10:45' },
          { id: '2-4', title: 'Basic Phrases Practice', type: 'video', duration: '16:20' },
          { id: '2-5', title: 'Greeting Vocabulary List', type: 'pdf', duration: '' },
          { id: '2-6', title: 'Cultural Notes on Greetings', type: 'video', duration: '8:30' },
        ],
      },
      {
        id: '3',
        number: 3,
        title: 'Verb Conjugation Basics',
        lessonsCount: 8,
        duration: '2h 15m',
        lessons: [
          { id: '3-1', title: 'Understanding Verb Groups', type: 'video', duration: '18:00' },
          { id: '3-2', title: 'Masu Form Conjugation', type: 'video', duration: '20:15' },
          { id: '3-3', title: 'Present Tense Verbs', type: 'video', duration: '16:45' },
          { id: '3-4', title: 'Past Tense Verbs', type: 'video', duration: '19:30' },
          { id: '3-5', title: 'Negative Forms', type: 'video', duration: '17:00' },
          { id: '3-6', title: 'Verb Conjugation Chart', type: 'pdf', duration: '' },
          { id: '3-7', title: 'Practice Exercises', type: 'video', duration: '22:00' },
          { id: '3-8', title: 'Common Verb Mistakes', type: 'video', duration: '14:30' },
        ],
      },
    ],
    reviews: [
      {
        id: 'r1',
        author: 'John Doe',
        avatar: 'JD',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Tanaka Sensei explains everything so clearly. I was afraid of Kanji, but the mnemonic methods used in this course made it so much fun!',
      },
      {
        id: 'r2',
        author: 'Maria S.',
        avatar: 'MS',
        rating: 5,
        date: '1 month ago',
        comment: 'The curriculum is very well-paced. The exercises at the end of each module really help reinforce the grammar.',
      },
    ],
    stats: {
      lessons: 48,
      duration: '15h total',
      modules: 12,
      students: 5000,
      rating: 4.8,
      reviewCount: 1240,
    },
    includes: {
      videoHours: '15 hours',
      resources: 24,
      lifetimeAccess: true,
      mobileAccess: true,
      certificate: true,
    },
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCourseBySlug = (slug: string): CourseDetails | undefined => {
  return courseDetails.find(course => course.slug === slug);
};

export const getCoursesByLevel = (level: string): Course[] => {
  if (level === 'All Levels') return courses;
  return courses.filter(course => course.level === level);
};
