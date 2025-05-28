export const siteData = {
  meta: {
    title:
      "Maha Behavioral Health - Expert Autism & Behavioral Health Services",
    description:
      "Specialized autism therapy, ABA services, and behavioral health treatment. Expert care for children, adolescents, and families with autism spectrum disorders.",
    keywords:
      "autism therapy, ABA therapy, behavioral health, autism spectrum disorder, developmental therapy, speech therapy, occupational therapy",
    url: "https://www.mahabehavioralhealth.com",
    image: "https://mahabehavioralhealth.com/images/mahalogo_v1_small.jpg",
  },

  contact: {
    phone: "(708)-571-9806",
    email: "info@mahabehavioralhealth.com",
    address: {
      street: "7199 Kingery Hwy",
      city: "Willowbrook",
      state: "IL",
      zip: "60527",
    },

    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 3:00 PM",
      sunday: "Sunday: Closed",
    },
  },

  hero: {
    title: "Empowering Lives Through Autism Care",
    subtitle:
      "Comprehensive behavioral health services for autism spectrum disorders",
    description:
      "We provide evidence-based autism therapy and behavioral interventions designed to help individuals reach their full potential in a supportive, caring environment.",
    cta: {
      primary: "Schedule Consultation",
      secondary: "Learn More",
    },
  },
  insurance: [
    "Aetna",
    "Blue Cross Blue Shield",
    "Cigna",
    "Humana",
    "Kaiser Permanente",
    "UnitedHealthcare",
  ],
  insuranceLogos: [
    {
      name: "Blue Cross Blue Shield",
      logo: "https://www.bcbs.com/dA/cec184ec-9008-4a98-bd75-b5d2304fb861/100q",
    },
    {
      name: "Aetna",
      logo: "	https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg",
    },
    { name: "Cigna", logo: "https://brandlogos.net/wp-content/uploads/2023/08/cigna_healthcare-logo_brandlogos.net_lblbp-512x512.png" },
    {
      name: "UnitedHealthcare",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/UnitedHealthcare_%28logo%29.svg/564px-UnitedHealthcare_%28logo%29.svg.png?20231113000934",
    },
    {
      name: "Medicare",
      logo: "https://1000logos.net/wp-content/uploads/2022/03/Medicare-Logo-500x281.jpg",
    },
    {
      name: "Medicaid",
      logo: "https://i0.wp.com/clearhealthcosts.com/wp-content/uploads/2023/02/medicaid-logo-5.jpg?w=1600&ssl=1",
    },
    { name: "Humana", logo: "https://1000logos.net/wp-content/uploads/2020/08/Humana-logo-500x225.jpg" },
    {
      name: "Kaiser Permanente",
      logo: "https://banner2.cleanpng.com/20181128/krb/kisspng-kaiser-permanente-rancho-san-diego-medical-offices-1713917184118.webp",
    },
    { name: "Anthem", logo: "https://www.logo.wine/a/logo/Anthem_(company)/Anthem_(company)-Logo.wine.svg" },
    {
      name: "Tricare",
      logo: "https://www.kindpng.com/picc/m/185-1853551_tricare-logo-hd-png-download.png",
    },
  ],
  services : [
  {
    id: "aba-therapy",
    title: "Applied Behavior Analysis (ABA)",
    description:
      "Evidence-based therapy focusing on improving specific behaviors and teaching new skills through positive reinforcement.",
    icon: "Brain",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",  // full gradient classes here
    dotColor: "bg-purple-500", // solid dot color for visibility
    features: [
      "One-on-one intensive therapy",
      "Behavior modification programs",
      "Social skills development",
      "Communication enhancement",
      "Daily living skills training",
    ],
    image:
      "https://cdn.prod.website-files.com/66390c6e162a2070bfe399de/6647e824ed3fdfd584cf35e1_649a7e113efc0f53fb94d8f4_-aba%2520therapy.jpeg",
  },
  {
    id: "speech-therapy",
    title: "Speech & Language Therapy",
    description:
      "Comprehensive communication therapy to develop verbal and non-verbal communication skills for individuals with autism.",
    icon: "MessageCircle",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    dotColor: "bg-blue-500",
    features: [
      "Articulation therapy",
      "Language development",
      "Alternative communication methods",
      "Social communication skills",
      "Augmentative communication devices",
    ],
    image:
      "https://www.indiaautismcenter.org/wp-content/uploads/woman-doing-speech-therapy-with-little-blonde-boy-1-1024x683.jpg",
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    description:
      "Helping individuals develop fine motor skills, sensory processing, and daily living skills for greater independence.",
    icon: "Hand",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    dotColor: "bg-green-500",
    features: [
      "Sensory integration therapy",
      "Fine motor skill development",
      "Self-care skills training",
      "Adaptive equipment training",
      "Environmental modifications",
    ],
    image:
      "https://pebblestherapycentre.in/wp-content/uploads/2024/07/Best-Pediatric-Occupational-Therapy-Centres-in-Chennai-1024x684.webp",
  },
  {
    id: "behavioral-consultation",
    title: "Behavioral Consultation",
    description:
      "Expert consultation services for families, schools, and caregivers to implement effective behavioral strategies.",
    icon: "Users",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    dotColor: "bg-orange-500",
    features: [
      "Behavior assessment",
      "Intervention planning",
      "Caregiver training",
      "School collaboration",
      "Crisis intervention",
    ],
    image:
      "https://wildsunbehavioralservices.com/otheeboo/2021/05/Consultation-768x316.jpg",
  },
  {
    id: "social-skills-groups",
    title: "Social Skills Groups",
    description:
      "Structured group sessions designed to help individuals with autism develop social interaction and communication skills.",
    icon: "Heart",
    color: "bg-gradient-to-r from-teal-500 to-blue-500",
    dotColor: "bg-teal-500",
    features: [
      "Peer interaction practice",
      "Social story development",
      "Role-playing activities",
      "Friendship building",
      "Community integration",
    ],
    image:
      "https://360behavioralhealth.com/wp-content/uploads/2018/11/skills.jpg.webp",
  },
  {
    id: "family-support",
    title: "Family Support Services",
    description:
      "Comprehensive support for families navigating autism, including parent training and sibling support programs.",
    icon: "Home",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    dotColor: "bg-indigo-500",
    features: [
      "Parent training workshops",
      "Sibling support groups",
      "Family therapy sessions",
      "Resource coordination",
      "Advocacy support",
    ],
    image:
      "https://www.sieda.org/wp-content/uploads/2013/09/iStock_000017960915Medium_crop.jpg",
  },
]
,

  howToStart: {
    title: "How to Get Started",
    subtitle: "Your journey to better care begins with these simple steps",
    steps: [
      {
        number: "01",
        title: "Initial Consultation",
        description:
          "Schedule a comprehensive consultation to discuss your needs and goals. We'll assess your situation and recommend the best treatment approach.",
        icon: "Calendar",
        color: "from-blue-500 to-purple-500",
        duration: "60-90 minutes",
      },
      {
        number: "02",
        title: "Comprehensive Assessment",
        description:
          "Our team conducts thorough evaluations including behavioral, developmental, and functional assessments to create a personalized treatment plan.",
        icon: "ClipboardList",
        color: "from-green-500 to-blue-500",
        duration: "2-3 sessions",
      },
      {
        number: "03",
        title: "Treatment Planning",
        description:
          "Based on assessment results, we develop individualized treatment goals and strategies tailored to your specific needs and preferences.",
        icon: "Target",
        color: "from-purple-500 to-pink-500",
        duration: "1-2 weeks",
      },
      {
        number: "04",
        title: "Begin Therapy",
        description:
          "Start your personalized therapy program with our experienced team. We provide ongoing support and adjust treatment as needed.",
        icon: "Play",
        color: "from-orange-500 to-red-500",
        duration: "Ongoing",
      },
      {
        number: "05",
        title: "Progress Monitoring",
        description:
          "Regular progress reviews ensure treatment effectiveness. We celebrate achievements and modify approaches to maximize outcomes.",
        icon: "TrendingUp",
        color: "from-teal-500 to-green-500",
        duration: "Monthly reviews",
      },
    ],
  },

  autismInfo: {
    title: "Understanding Autism Spectrum Disorder",
    description:
      "Autism is a developmental condition that affects communication, behavior, and social interaction. Every individual with autism is unique, with their own strengths and challenges.",
    facts: [
      {
        title: "1 in 36",
        description: "Children are diagnosed with autism spectrum disorder",
        icon: "Users",
      },
      {
        title: "Early Intervention",
        description: "Can significantly improve outcomes and quality of life",
        icon: "Clock",
      },
      {
        title: "Lifelong Support",
        description:
          "Individuals with autism can lead fulfilling, independent lives",
        icon: "Heart",
      },
    ],
    characteristics: [
      "Challenges with social communication",
      "Repetitive behaviors or interests",
      "Sensory sensitivities",
      "Need for routine and predictability",
      "Unique strengths and abilities",
    ],
  },

  testimonials: [
    {
      name: "Sarah M.",
      text: "The ABA therapy program has transformed my son's life. He's now communicating more effectively and showing incredible progress in social situations.",
      rating: 5,
      service: "ABA Therapy",
      relationship: "Parent",
    },
    {
      name: "Michael K.",
      text: "The speech therapy team helped my daughter find her voice. Their patience and expertise made all the difference in her development.",
      rating: 5,
      service: "Speech Therapy",
      relationship: "Parent",
    },
    {
      name: "Lisa R.",
      text: "The family support services provided us with the tools and confidence we needed to support our child's growth at home.",
      rating: 5,
      service: "Family Support",
      relationship: "Parent",
    },
  ],

  about: {
    mission:
      "To provide compassionate, evidence-based autism and behavioral health services that empower individuals and families to achieve their highest potential and live fulfilling lives.",
    vision:
      "A world where every individual with autism has access to quality care, understanding, and opportunities to thrive in their community.",
    values: [
      {
        title: "Individualized Care",
        description:
          "Every person is unique, and our treatments are tailored to meet individual needs, strengths, and goals.",
        icon: "User",
        color: "from-blue-500 to-purple-500",
      },
      {
        title: "Evidence-Based Practice",
        description:
          "We use scientifically proven methods and continuously update our approaches based on the latest research.",
        icon: "BookOpen",
        color: "from-green-500 to-blue-500",
      },
      {
        title: "Family-Centered",
        description:
          "We believe families are essential partners in the therapeutic process and provide comprehensive support.",
        icon: "Home",
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Compassionate Care",
        description:
          "We approach every interaction with empathy, respect, and understanding of each person's unique journey.",
        icon: "Heart",
        color: "from-orange-500 to-red-500",
      },
    ],
  },

  faqs: [
    {
      question: "What is ABA therapy and how does it help with autism?",
      answer:
        "Applied Behavior Analysis (ABA) is an evidence-based therapy that focuses on improving specific behaviors and teaching new skills. It uses positive reinforcement to encourage desired behaviors and has been shown to be highly effective for individuals with autism.",
    },
    {
      question: "At what age should my child start therapy?",
      answer:
        "Early intervention is key. We recommend starting therapy as soon as autism is suspected or diagnosed. However, it's never too late to begin - individuals of all ages can benefit from our services.",
    },
    {
      question: "How long does therapy typically last?",
      answer:
        "The duration varies based on individual needs and goals. Some may need intensive therapy for several years, while others may require shorter-term intervention. We regularly assess progress and adjust treatment plans accordingly.",
    },
    {
      question: "Do you provide services in the home or school?",
      answer:
        "Yes, we offer services in various settings including our clinic, your home, school, and community locations to ensure skills generalize across environments.",
    },
  ],
};

export type SiteData = typeof siteData;
