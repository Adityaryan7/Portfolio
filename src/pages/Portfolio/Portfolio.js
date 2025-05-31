import React, { Component } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  Stack,
  Container,
  Paper,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

document.documentElement.style.scrollBehavior = 'smooth';

const NetflixStyleBackground = styled(Box)(({ theme }) => ({
  backgroundColor: '#0e0e0e',
  minHeight: '100vh',
  padding: theme.spacing(10, 2),
  color: '#fff',
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: '16px',
  lineHeight: 1.6,
}));

const StyledPaper = styled(motion(Paper))(({ theme }) => ({
  background: '#1c1c1c',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
  color: '#fff',
  overflow: 'hidden',
  minHeight: '200px', // consistent minimum height to avoid jumps
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  marginBottom: theme.spacing(3),
  color: '#e50914',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    whiteSpace: 'normal', // wrap on small screens
  },
}));

const scrollFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const projectCardStyles = {
  height: '100%',
  borderRadius: 3,
  backgroundColor: '#1c1c1c',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  color: '#fff',
  p: 2,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(229, 9, 20, 0.5)',
  },
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { showScroll: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    this.setState({ showScroll: scrollTop > 100 });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const resumeURL = '/Aryan-Resume.pdf';
    const education = [
      {
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'National Institute of Technology, Mizoram',
        year: '2022',
      },
      {
        degree: 'Intermediate',
        institution: 'Sri Chaitanya Vidhya Niketan, Vishakhapatnam',
        year: '2017',
      },
      {
        degree: 'Matriculation',
        institution: 'B.D. Public School, Patna',
        year: '2015',
      },
    ];

    const skills = {
      Frontend: [
        'React.js', 'React Native', 'JavaScript', 'TypeScript',
        'Redux', 'HTML5', 'CSS3', 'Tailwind CSS',
        'Material UI', 'Bootstrap',
      ],
      'Backend & Database': ['Node.js', 'REST API', 'MySQL'],
      'DevOps & Cloud': ['Microsoft Azure', 'Firebase', 'GitHub Actions', 'CI/CD'],
      Testing: ['Jest', 'React Testing Library'],
      'Version Control & Tools': ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Trello'],
      'Static Site Generators': ['Hugo', '11ty'],
    };

    const projects = [
  {
    title: 'Web & Mobile Application Development',
    description:
      'Built responsive and cross-platform applications using React.js and React Native. Demonstrated strong knowledge of JavaScript, component-based architecture, and efficient UI composition.',
  },
  {
    title: 'Scalable State Management',
    description:
      'Implemented Redux and Context API for managing global application state in large-scale React projects. Ensured clean, maintainable, and predictable data flow across components.',
  },
  {
    title: 'CI/CD and Deployment',
    description:
      'Automated build and deployment workflows using GitHub Actions, Firebase, and Expo. Improved deployment efficiency and release consistency in development cycles.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Utilized Chrome DevTools and Lighthouse to diagnose and optimize rendering bottlenecks. Applied lazy loading and modular JavaScript to enhance load performance.',
  },
  {
    title: 'Testing and QA',
    description:
      'Established robust testing using Jest and React Testing Library. Focused on component-level unit and integration tests to ensure application reliability and maintainability.',
  },
    ];


    const animatedSection = (title, content) => (
      <Box sx={{ mb: { xs: 4, sm: 6 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollFadeUp}
        >
          <StyledPaper>
            <SectionTitle>{title}</SectionTitle>
            {content}
          </StyledPaper>
        </motion.div>
      </Box>
    );

    return (
      <NetflixStyleBackground>
        <Container maxWidth="md">
          <motion.div initial="hidden" animate="visible" variants={scrollFadeUp}>
            <Box textAlign="center" mb={6}>
              <Avatar
                src={process.env.PUBLIC_URL + '/28399.jpg'}
                alt="Aditya Kumar Aryan"
                sx={{
                  width: { xs: 100, sm: 140 },
                  height: { xs: 100, sm: 140 },
                  mx: 'auto',
                  boxShadow: '0 0 20px #e50914',
                }}
              />
              <Typography
                variant="h3"
                fontWeight={900}
                mt={3}
                gutterBottom
                sx={{
                  color: '#e50914',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  '@media (max-width:600px)': { whiteSpace: 'normal' },
                }}
              >
                Aditya Kumar Aryan
              </Typography>
              <Typography
                variant="h6"
                color="rgba(255,255,255,0.85)"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                  '@media (max-width:600px)': { whiteSpace: 'normal' },
                }}
              >
                Frontend Developer at Star Intellisoft Services Pvt. Ltd.
                <br /> React.js | React Native | Redux
              </Typography>
              <Typography variant="body1" color="rgba(255,255,255,0.75)" mt={1}>
                Hyderabad, India •{' '}
                <a href="mailto:adityakumararyan101@gmail.com" style={{ color: '#e50914' }}>
                  adityakumararyan101@gmail.com
                </a>{' '}
                •{' '}
                <a href="tel:+917782843264" style={{ color: '#e50914' }}>
                  +91 77828 43264
                </a>
              </Typography>
              <Typography variant="body1" mt={1}>
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#e50914', textDecoration: 'underline' }}
                >
                  LinkedIn Profile ↗
                </a>
              </Typography>
            </Box>
          </motion.div>

          {animatedSection(
            'About Me',
            <Typography variant="body1" fontSize={'1.15rem'}>
              Creative and detail-oriented Frontend Developer with 2+ years of experience building modern web and mobile
              interfaces. I specialize in React.js, React Native, and crafting highly interactive, accessible UIs with
              performance and scalability in mind.
            </Typography>
          )}

          {animatedSection(
            'Skills',
            <Stack spacing={3}>
              {Object.entries(skills).map(([category, items]) => (
                <Box key={category}>
                  <Typography variant="h6" sx={{ color: '#e50914', mb: 1 }}>
                    {category}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc' }}>
                    {items.join(', ')}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                </Box>
              ))}
            </Stack>
          )}

          {animatedSection(
            'Projects',
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} key={project.title}>
                  <Card sx={projectCardStyles}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} sx={{ color: '#e50914' }}>
                        {project.title}
                      </Typography>
                      <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
                      <Typography variant="body2">{project.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {animatedSection(
            'Education',
            <Stack spacing={3}>
              {education.map(({ degree, institution, year }) => (
                <Box key={degree}>
                  <Typography variant="body1" fontWeight={700} fontSize="1.1rem">
                    {degree}
                  </Typography>
                  <Typography variant="body2" color="rgba(245, 245, 245, 0.7)" sx={{ mt: 0.5 }}>
                    {institution} — {year}
                  </Typography>
                  <Divider sx={{ mt: 2, borderColor: 'rgba(255,255,255,0.15)' }} />
                </Box>
              ))}
            </Stack>
          )}

          {animatedSection(
            'Contact',
            <Stack spacing={2}>
              <Typography variant="body1">
                Feel free to reach out for collaboration or job opportunities!
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon sx={{ color: '#e50914' }} />
                <a href="mailto:adityakumararyan101@gmail.com" style={{ color: '#fff' }}>
                  adityakumararyan101@gmail.com
                </a>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon sx={{ color: '#e50914' }} />
                <a href="tel:+917782843264" style={{ color: '#fff' }}>
                  +91 77828 43264
                </a>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LinkedInIcon sx={{ color: '#e50914' }} />
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff' }}
                >
                  LinkedIn Profile
                </a>
              </Box>
            </Stack>
          )}

          <Box textAlign="center" mt={6}>
            <a
              href={resumeURL}
              download="Aryan-Resume.pdf"
              style={{
                backgroundColor: '#e50914',
                padding: '12px 24px',
                borderRadius: '6px',
                color: '#fff',
                fontWeight: 700,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b20710')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e50914')}
            >
              Download Resume
            </a>
          </Box>
        </Container>
      </NetflixStyleBackground>
    );
  }
}

export default Portfolio;
