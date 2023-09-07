const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React Native',
    competency: 5,
    category: ['Mobile Development', 'Android Development', 'iOS Development', 'Javascript'],
  },
  {
    title: 'Flutter',
    competency: 4,
    category: ['Mobile Development', 'Android Development', 'iOS Development', 'Languages'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Vue.js',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/MSSQL',
    competency: 5,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Git/Mercurial',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Firebase',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Mobile Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Mobile Development', 'Android Development'],
  },
  {
    title: 'Kotlin',
    competency: 5,
    category: ['Languages', 'Mobile Development', 'Android Development'],
  },
  {
    title: 'Objective-C',
    competency: 5,
    category: ['Languages', 'Mobile Development', 'iOS Development'],
  },
  {
    title: 'Swift',
    competency: 4,
    category: ['Languages', 'Mobile Development', 'iOS Development'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Mobile Development', 'Databases'],
  },
  {
    title: 'Xcode',
    competency: 5,
    category: ['Mobile Development', 'iOS Development', 'Tools'],
  },
  {
    title: 'Android Studio',
    competency: 5,
    category: ['Mobile Development', 'Android Development', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
