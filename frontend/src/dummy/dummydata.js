// data.js

export const userData = {
  id: "u001",
  name: "Vidhi Agre",
  email: "vidhi.agre@example.com",
  level: 2,
  xp: 1350,
  streak: 4,
  progress: {
    overall: 45,
    modulesCompleted: 1,
    currentModule: "Numbers",
  },
  achievements: [
    { id: "a1", title: "Alphabet Ace", description: "Completed the Alphabet module", icon: "🏅" },
    { id: "a2", title: "Consistent Learner", description: "4-day learning streak", icon: "🔥" },
  ],
};

// Learning modules (Alphabets, Numbers, Basic Gestures)
export const modulesData = [
  {
    id: "m1",
    title: "Alphabets (A–Z)",
    description: "Learn ISL alphabet signs for each letter.",
    category: "Alphabets",
    progress: 100,
    lessons: [
      {
        id: "a",
        name: "A",
        image: "/images/signs/alphabet-A.png",
        video: "/videos/alphabet-A.mp4",
        description: "Raise your right hand into a closed fist with the thumb resting beside the index finger.",
      },
      {
        id: "b",
        name: "B",
        image: "/images/signs/alphabet-B.png",
        video: "/videos/alphabet-B.mp4",
        description: "Extend your fingers upward, keeping them together, and tuck your thumb across the palm.",
      },
      {
        id: "c",
        name: "C",
        image: "/images/signs/alphabet-C.png",
        video: "/videos/alphabet-C.mp4",
        description: "Curve your hand into the shape of the letter 'C', fingers together and thumb opposite.",
      },
    ],
  },

  {
    id: "m2",
    title: "Numbers (1–10)",
    description: "Master number signs using simple hand gestures.",
    category: "Numbers",
    progress: 40,
    lessons: [
      {
        id: "n1",
        name: "1",
        image: "/images/signs/number-1.png",
        video: "/videos/number-1.mp4",
        description: "Extend your index finger while keeping all other fingers curled into the palm.",
      },
      {
        id: "n2",
        name: "2",
        image: "/images/signs/number-2.png",
        video: "/videos/number-2.mp4",
        description: "Extend your index and middle fingers together, palm facing forward.",
      },
      {
        id: "n3",
        name: "3",
        image: "/images/signs/number-3.png",
        video: "/videos/number-3.mp4",
        description: "Extend your thumb, index, and middle finger — like showing 3 on your hand.",
      },
    ],
  },

  {
    id: "m3",
    title: "Basic Gestures & Common Phrases",
    description: "Learn daily-use signs for greetings and common words.",
    category: "Phrases",
    progress: 10,
    lessons: [
      {
        id: "p1",
        name: "Hello",
        image: "/images/signs/hello.png",
        video: "/videos/hello.mp4",
        description: "Place your hand near your forehead and move it outward like a wave.",
      },
      {
        id: "p2",
        name: "Thank You",
        image: "/images/signs/thankyou.png",
        video: "/videos/thankyou.mp4",
        description: "Touch your fingertips to your chin and move your hand outward.",
      },
      {
        id: "p3",
        name: "Sorry",
        image: "/images/signs/sorry.png",
        video: "/videos/sorry.mp4",
        description: "Make a fist and rotate it in a circular motion over your chest.",
      },
    ],
  },
];

// Quiz data (optional sample for one module)
export const quizData = {
  module: "Alphabets",
  questions: [
    {
      id: "q1",
      question: "What does this sign represent?",
      image: "/images/signs/alphabet-A.png",
      options: ["A", "B", "C", "D"],
      correctAnswer: "A",
    },
    {
      id: "q2",
      question: "Select the correct sign for letter B.",
      options: [
        { label: "A", image: "/images/signs/alphabet-A.png" },
        { label: "B", image: "/images/signs/alphabet-B.png" },
        { label: "C", image: "/images/signs/alphabet-C.png" },
        { label: "D", image: "/images/signs/alphabet-D.png" },
      ],
      correctAnswer: "B",
    },
  ],
};
