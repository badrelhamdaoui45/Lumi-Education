import { BookOpen, HeartHandshake, HelpingHand } from 'lucide-react';

export const missionData = {
  title: 'Our Mission: Empowering Girls in Malawi',
  statement:
    'Lumi Education strives for the advancement of education for girls and young women in Malawi. We are building a boarding secondary school with a nursery to offer a formal education to young girls and women, including teenage mothers, to help to relieve the pregnancy-related drop out from education.',
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
    'Our Pilot project is to help Jimbe Primary School in Neno, Malawi to build classroom blocks for Year 7 and 8. The kids now have to finish their education with year 6, or they have to walk long distances to the nearest school.',
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
    'Lumi Education is run by UK based trustees along with an amazing team of Malawian volunteers who are passionate about making their country a better place and about educating and safeguarding children. Our trustee team is excited to make a positive impact in Malawi and using their varied skills to raise funds and plan an exciting school project, along with our team in Malawi.',
  motivations:
    'For many young women, school is the only safe place. We want to empower them to be able to learn and help raise a new generation of educated women and their children. We are driven by the potential that is unlocked through learning. Every book we provide, every classroom we build, is a step towards a more equitable world.',
  futurePlans: [
    'Fundraise and plan an environmentally friendly secondary school and nursery school with solar energy and sustainable water and waste management solutions in Neno District in Malawi.',
    'Run a school farm that provides sustainable healthy meals for all school staff and students.',
    'Organise busses for school transport.',
    'Offer great quality free secondary school for teenage girls from families who cannot afford payed secondary education for their children.',
    'Offer school spaces for teenage girls who are pregnant or have young babies or toddlers so they can continue with their education.',
    'Provide good quality teacher accommodation at school so that the rural location of the school would not be a barrier for best teachers.',
    'Link up the school with resources and teachers from all over the world through online learning resources and video lessons.',
    'Work closely with the local community so the benefits of this project reach outside of the schools walls and make a lasting change in the area.',
  ],
  contributionHelp:
    'The money we raise goes to different stages of creating Lumi school. At this point, we are fundraising to buy the land, register the school project with the Malawi government and start preparing the school farm, once the land is bought. Our next stage of fundraising will go towards the building of the school. As you can tell it is an exciting and big project so every donation will get us closer to making this a reality for teenage girls and babies in Malawi.',
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
