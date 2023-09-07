/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Glance Creative',
    position: 'Mobile Developer',
    url: 'https://thisisglance.com',
    startDate: '2020-11-09',
    summary: `Glance is The UK’s Most Trusted App Development Agency. As a mobile developer,
    I developed 2 Android apps from start and maintained 3 Android/iOS appliations.`,
    highlights: [
      'Pixel-Perfect UI implementation',
      'MVVM design pattern',
      'Work with Agile/SCRUM based delivery models',
      'Understand project requirements and convert functional specifications into technical designs',
      'Create wireframes and mockups of mobile applications',
    ],
  },
  {
    name: 'Alphacogs',
    position: 'Mobile Developer',
    url: 'http://alphacogs.com',
    startDate: '2021-03-01',
    endDate: '2022-12-20',
    summary: `Alphacogs is the UK software development agency. As a mobile developer, I developed and maintained several mobile applications.`,
    highlights: [
      'FlightView for iOS and Android',
      'CheckMeNow for iOS and Android',
      'Wcashless app for iOS and Android',
    ],
  },
  {
    name: 'Cooper Oil & Gas, Inc',
    position: 'Senior iOS Developer(Freelancer)',
    url: '',
    startDate: '2017-10-01',
    endDate: '2019-11-01',
    summary: `I built an enterprise iPhone app(PULSE) for this company employees.`,
    highlights: [
      'Pulse app using Objective-C',
      'The backend using Laravel, MSSQL',
    ],
  },
  {
    name: 'Upwork',
    position: 'Full Stack Developer',
    url: 'https://www.upwork.com',
    startDate: '2015-10-01',
    endDate: '2018-01-01',
    summary: `As a full-time freelancer, I worked with many clients on Upwork.`,
    highlights: [
      'Mobile application development using Objective-C, Swift, Java, Kotlin, React Native.',
      'Front-end development using Vue.js and React.js',
      'Backend development using Node.js and Laravel',
    ],
  },
  {
    name: 'Amkor Technology, Inc.',
    position: 'Software Engineer',
    url: 'https://amkor.com',
    startDate: '2010-09-01',
    endDate: '2015-04-01',
    summary: ``,
  }
];

export default work;
