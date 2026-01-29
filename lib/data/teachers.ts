/**
 * Mock data for teachers
 */

import { Teacher, TeacherReview, Achievement, CalendarDay, TimeSlot } from '@/lib/types/teacher';

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Yumi Tanaka',
    title: 'Linguistics Specialist & JLPT Expert',
    avatar: '/assets/teacher_1.png',
    isNative: true,
    rating: 4.9,
    reviewCount: 124,
    specialties: ['JLPT N1-N2 Mastery', 'Honorifics (Keigo)', 'Business Etiquette', 'Academic Writing', 'Intensive Speaking'],
    level: 'N1',
    bio: 'Konnichiwa! I am Yumi, a native Japanese instructor with over 8 years of experience teaching internationally. I specialize in helping students navigate the complexities of Japanese grammar and JLPT preparation. My background in linguistics allows me to explain "why" the language works the way it does, making your learning journey logical and intuitive.',
    teachingStyle: 'I believe in a balanced approach: 60% conversation and 40% structured grammar. My lessons are highly interactive, utilizing real-world materials like news articles, manga, and business emails to ensure you\'re learning "living" Japanese. Every session is tailored to your specific goals, whether it\'s passing the N1 or preparing for a job interview in Tokyo.',
    hourlyRate: 45,
    lessonsDone: 1450,
    studentCount: 420,
    responseTime: '~1hr',
    availabilityStatus: 'available',
    videoIntroUrl: 'https://example.com/intro/yumi',
    videoIntroDuration: '1:45',
    achievements: [
      { icon: 'emoji_events', title: 'Top Rated 2023' },
      { icon: 'history_edu', title: 'JLPT Certified Examiner' },
    ],
    reviews: [
      {
        id: 'r1',
        author: 'James D.',
        avatar: 'JD',
        rating: 5,
        date: '2 weeks ago',
        lessonType: 'JLPT N2 Student',
        comment: 'Yumi-sensei is incredible. Her explanation of the passive-causative form finally made it click for me. I feel so much more confident for my upcoming exam.',
      },
      {
        id: 'r2',
        author: 'Miko K.',
        avatar: 'MK',
        rating: 4,
        date: '1 month ago',
        lessonType: 'Business Japanese',
        comment: 'The best Keigo teacher I\'ve found. She corrected my email drafts and gave me the nuance I needed for my presentation.',
      },
    ],
  },
  {
    id: '2',
    name: 'Hiroshi Sato',
    title: 'Business Japanese Specialist',
    avatar: '/assets/teacher_2.png',
   isNative: true,
    rating: 4.8,
    reviewCount: 89,
    specialties: ['Business', 'Conversation'],
    level: 'N2',
    bio: 'Focus on real-world business Japanese. Helping expatriates navigate corporate culture and professional emails.',
    teachingStyle: 'Practical approach with real business scenarios. We\'ll practice emails, presentations, meetings, and networking conversations.',
    hourlyRate: 50,
    lessonsDone: 980,
    studentCount: 315,
    responseTime: '~2hr',
    availabilityStatus: 'away',
    reviews: [],
  },
  {
    id: '3',
    name: 'Sakura Ito',
    title: 'Culture & Conversation Specialist',
    avatar: '/assets/teacher_3.png',
    isNative: true,
    rating: 5.,
    reviewCount: 210,
    specialties: ['Conversation', 'Culture'],
    level: 'N3',
    bio: 'Patient teacher for beginners and intermediate learners. We\'ll focus on natural speaking and slang.',
    teachingStyle: 'Fun and relaxed atmosphere. We\'ll use anime, dramas, and music to learn Japanese the way native speakers actually use it.',
    hourlyRate: 40,
    lessonsDone: 1200,
    studentCount: 380,
    responseTime: '~30min',
    availabilityStatus: 'available',
    reviews: [],
  },
  {
    id: '4',
    name: 'Kenji Watanabe',
    title: 'Academic Japanese Specialist',
    avatar: '/assets/teacher_4.png',
    isNative: true,
    rating: 4.7,
    reviewCount: 56,
    specialties: ['Academic', 'Kanji'],
    level: 'N2',
    bio: 'Ex-university lecturer. Academic precision in grammar and kanji. Perfect for serious JLPT candidates.',
    teachingStyle: 'Structured and systematic. We\'ll break down complex grammar patterns and kanji components step by step.',
    hourlyRate: 55,
    lessonsDone: 890,
    studentCount: 245,
    responseTime: '~1.5hr',
    availabilityStatus: 'available',
    reviews: [],
  },
  {
    id: '5',
    name: 'Aki Mori',
    title: 'Beginners & Kids Specialist',
    avatar: '/assets/teacher_5.png',
    isNative: true,
    rating: 4,
    reviewCount: 42,
    specialties: ['Beginners', 'Kids'],
    level: 'N4',
    bio: 'Making Japanese fun for kids and beginners. Extensive use of visual aids and mnemonics.',
    teachingStyle: 'Visual and interactive. We\'ll use pictures, games, and songs to make learning memorable and enjoyable.',
    hourlyRate: 35,
    lessonsDone: 750,
    studentCount: 180,
    responseTime: '~45min',
    availabilityStatus: 'available',
    reviews: [],
  },
];

export const getTeacherById = (id: string): Teacher | undefined => {
  return teachers.find(teacher => teacher.id === id);
};

export const getTeachersByLevel = (level: string): Teacher[] => {
  if (level === 'All') return teachers;
  return teachers.filter(teacher => teacher.level === level);
};

export const filterTeachers = (
  teachers: Teacher[],
  filters: { searchQuery: string; jlptLevel: string; lessonType: string; availability: string }
): Teacher[] => {
  return teachers.filter(teacher => {
    const matchesSearch =
      !filters.searchQuery ||
      teacher.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      teacher.specialties.some(s => s.toLowerCase().includes(filters.searchQuery.toLowerCase())) ||
      teacher.title.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const matchesLevel = !filters.jlptLevel || filters.jlptLevel === 'All' || teacher.level === filters.jlptLevel;

    const matchesType =
      !filters.lessonType ||
      filters.lessonType === 'All' ||
      teacher.specialties.some(s => s.toLowerCase().includes(filters.lessonType.toLowerCase()));

    const matchesAvailability =
      !filters.availability ||
      filters.availability === 'All' ||
      teacher.availabilityStatus === 'available';

    return matchesSearch && matchesLevel && matchesType && matchesAvailability;
  });
};

export const getCalendarDays = (): CalendarDay[] => {
  const today = new Date().getDate();
  const days: CalendarDay[] = [];

  for (let i = 0; i < 7; i++) {
    const day = today + i;
    days.push({
      day,
      isAvailable: day > today,
      isSelected: day === today + 4,
      isPast: day < today,
    });
  }

  return days;
};

export const getTimeSlots = (): TimeSlot[] => {
  return [
    { time: '09:00 AM', isSelected: false, isAvailable: true },
    { time: '11:30 AM', isSelected: true, isAvailable: true },
    { time: '02:00 PM', isSelected: false, isAvailable: true },
    { time: '04:30 PM', isSelected: false, isAvailable: true },
  ];
};
