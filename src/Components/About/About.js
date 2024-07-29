import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio';
import './About.css';
import AnimatedText from '../AnimatedText/AnimatedText';

const About = () => {
  const { name, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1 className='about__title'>
           <span className='about__name'>{name}</span>
        </h1>
      )}

     
        <AnimatedText />
      

      <div className='about__contact center'>
        

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default About;
