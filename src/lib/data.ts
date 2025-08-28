import { BookOpen, HeartHandshake, HelpingHand } from 'lucide-react';

export const missionData = {
  title: 'Our Mission: Bringing Light to Learning',
  statement:
    'Lumi Education is dedicated to providing quality education to underprivileged children in Malawi. We believe every child deserves the chance to learn, grow, and build a brighter future.',
  values: [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'We provide access to quality learning environments, materials, and teachers.',
    },
    {
      icon: HeartHandshake,
      title: 'Inclusivity',
      description: 'Our programs are designed to support all children, including those with disabilities.',
    },
    {
      icon: HelpingHand,
      title: 'Poverty Relief',
      description: 'By educating children, we empower families and communities to break the cycle of poverty.',
    },
  ],
  goals:
    'Our current project focuses on building and supporting a school and nursery in a rural Malawian community, providing a safe and nurturing space for over 200 children.',
};

export const financialsData = {
  income: [
    { name: 'Donations', value: 45000, fill: 'hsl(var(--chart-1))' },
    { name: 'Grants', value: 30000, fill: 'hsl(var(--chart-2))' },
    { name: 'Fundraising', value: 25000, fill: 'hsl(var(--chart-3))' },
  ],
  expenditure: [
    { name: 'School Construction', value: 50000, fill: 'hsl(var(--chart-4))' },
    { name: 'Educational Materials', value: 15000, fill: 'hsl(var(--chart-5))' },
    { name: 'Teacher Salaries', value: 20000, fill: 'hsl(var(--chart-1))' },
    { name: 'Admin Costs', value: 5000, fill: 'hsl(var(--chart-2))' },
  ],
};

export const impactStats = [
  {
    figure: '200+',
    label: 'Children Enrolled',
    description: 'in our school and nursery project.',
  },
  {
    figure: '10',
    label: 'Local Teachers Employed',
    description: 'providing stable jobs in the community.',
  },
  {
    figure: '5,000+',
    label: 'Meals Provided',
    description: 'annually to ensure students are well-nourished.',
  },
  {
    figure: '95%',
    label: 'Student Attendance Rate',
    description: 'showing a high level of engagement and commitment.',
  },
];

export const events = [
  {
    date: '2024-09-15',
    time: '6:00 PM',
    title: 'Annual Charity Gala',
    location: 'The Grand Ballroom, Norwich',
    description: 'Join us for an evening of fine dining, auctions, and entertainment to support our cause.',
    image: {
      src: '/2.jpg',
      hint: 'charity event',
    },
  },
  {
    date: '2024-10-22',
    time: '9:00 AM',
    title: 'Lumi Fun Run 5K',
    location: 'City Park, Reepham',
    description: 'Run, walk, or jog to raise funds for school supplies. A family-friendly event for all ages.',
    image: {
      src: '/3.jpg',
      hint: 'people running',
    },
  },
  {
    date: '2024-11-10',
    time: '1:00 PM - 4:00 PM',
    title: 'Community Bake Sale',
    location: 'Reepham Market Square',
    description: 'Enjoy delicious homemade treats. All proceeds go directly to our projects in Malawi.',
    image: {
      src: '/5.jpg',
      hint: 'baked goods',
    },
  },
];

export const aboutData = {
  background:
    'Founded in 2020 by a group of passionate educators and philanthropists, Lumi Education was born from a shared desire to make a tangible difference in the lives of children affected by poverty. Witnessing the lack of educational resources in rural Malawi, our founders were motivated to create an organization that could build infrastructure and provide sustainable support for local communities.',
  motivations:
    'Our motivation is simple: the belief that education is a fundamental human right and the most powerful tool for change. We are driven by the smiles of the children we help, the gratitude of the communities we serve, and the potential that is unlocked through learning. Every book we provide, every classroom we build, is a step towards a more equitable world.',
  futurePlans:
    'Looking ahead, Lumi Education aims to expand our reach. Our immediate goal is to add two new classrooms and a library to our existing school. In the next five years, we plan to replicate our model in a neighboring district, doubling our impact. We are also exploring vocational training programs for older students to equip them with practical skills for their future.',
  whatWeDo:
    'We believe education transforms lives. Lumi Education provides training, supports children and young people with disabilities, and works to break the cycle of poverty through opportunities to learn.',
  whoWeHelp:
    'Our focus is on children and young people in Malawi. Many face barriers such as disability, lack of facilities, or poverty. We work so every child has the chance to grow through learning.',
  howWeHelp:
    'We build and improve schools, libraries, and safe learning spaces. We provide resources, training, and support for both students and teachers. We also advise families and communities, raising awareness of the value of education.',
  whereWeWork:
    'Our projects are based in Malawi, Africa. We partner closely with local communities to ensure every project meets genuine needs and has a lasting impact.',
};

export const trustees = [
  { name: 'Teele Dunkley', role: 'Trustee' },
  { name: 'Radek Vik', role: 'Trustee' },
  { name: 'Clanford Chirwa', role: 'Trustee' },
  { name: 'Michaela Pavlovicova', role: 'Trustee' },
];

export const contactInfo = {
  address: '24 Cawston Road, Reepham, Norwich, NR10 4LU',
  phone: '07731181664',
  email: 'hello@lumieducation.org',
  website: 'www.lumieducation.org',
};
