import Project from '../components/UI/Project';

export default function PortfolioPage() {
  return (
    <Project projects={[
      {
        Key: 1,
        Title: 'Note Taker',
        Image: '../src/assets/images/note-taker.png',
        Link: 'https://github.com/Antoniomj10/Note-Taker'
      },
      {
        Key: 2,
        Title: 'Passwrod Generator',
        Image: './src/assets/images/passwrod-generator.png',
        Link: 'https://github.com/Antoniomj10/Module3_GnereatingPass'
      },
      {
        Key: 3,
        Title: 'Svg Generator',
        Image: '../src/assets/images/svg.png',
        Link: 'https://github.com/Antoniomj10/svg-logo'
      },
      {
        Key: 4,
        Title: 'Weather Website',
        Image: '../src/assets/images/weather.png',
        Link: 'https://github.com/Antoniomj10/Weather-website'
      }
  ]} />
  );
}