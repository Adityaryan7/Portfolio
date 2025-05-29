import React, { Component } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Grid,
  Card,
  CardContent,
  Stack,
  Container,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const NetflixStyleBackground = styled(Box)(({ theme }) => ({
  backgroundColor: '#0e0e0e',
  minHeight: '100vh',
  padding: theme.spacing(10, 2),
  color: '#fff',
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
}));

const StyledPaper = styled(motion(Paper))(({ theme }) => ({
  background: '#1c1c1c',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
  marginBottom: theme.spacing(8),
  color: '#fff',
  overflow: 'hidden',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(4),
  color: '#e50914',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  textAlign: 'center',
}));

const skillChipStyles = {
  fontWeight: 600,
  fontSize: '0.95rem',
  borderRadius: 2,
  backgroundColor: '#e50914',
  color: '#fff',
  transition: 'transform 0.2s ease',
  cursor: 'default',
  '&:hover': {
    transform: 'scale(1.1)',
  },
};

const projectCardStyles = {
  height: '100%',
  borderRadius: 3,
  boxShadow: '0 10px 30px rgba(229, 9, 20, 0.7)',
  backgroundColor: '#292929',
  color: '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 20px 60px rgba(229, 9, 20, 0.9)',
  },
};

const scrollFadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
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
    const resumeURL = '/Aditya_Aryan_Resume.pdf';

    const skills = [
      'React.js', 'React Native', 'Redux', 'Material UI', 'Bootstrap',
      'Tailwind CSS', 'Node.js', 'SQL', 'REST API', 'Git',
      'Jira', 'Bitbucket', 'GitHub', 'Python', 'JavaScript',
      'HTML', 'CSS', 'MySQL', 'Firebase', 'CI/CD', 'Azure',
      'Jest', 'Hugo', '11ty'
    ];

    const projects = [
      {
        title: 'Web and Mobile App Development',
        description: 'Built dynamic, responsive apps with React.js and React Native. Reduced UI load time and improved cross-platform consistency.'
      },
      {
        title: 'Frontend Optimization & Accessibility',
        description: 'Refactored UI codebase using reusable components and WCAG-compliant standards, increasing performance and accessibility.'
      },
      {
        title: 'API Integration & Data Handling',
        description: 'Implemented REST/third-party APIs with Axios and Fetch, reducing latency and streamlining data flow.'
      },
      {
        title: 'State Management at Scale',
        description: 'Managed complex app states using Redux and Context API, resulting in cleaner, predictable UI behavior.'
      },
      {
        title: 'CI/CD and Automated Testing',
        description: 'Integrated GitHub Actions for CI/CD and wrote unit/integration tests using Jest, reducing production bugs and accelerating releases.'
      },
      {
        title: 'SEO-Optimized Static Sites',
        description: 'Created static websites using Hugo and deployed via Netlify, leading to faster load times and improved indexing.'
      }
    ];

    const animatedSection = (title, content) => (
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
    );

    return (
      <NetflixStyleBackground>
        <Container maxWidth="md">
          <motion.div initial="hidden" animate="visible" variants={scrollFadeUp}>
            <Box textAlign="center" mb={8}>
              <Avatar src="/28399.jpg" alt="Aditya Kumar Aryan" sx={{ width: 140, height: 140, mx: 'auto', boxShadow: '0 0 20px #e50914' }} />
              <Typography variant="h2" fontWeight={900} mt={3} gutterBottom sx={{ color: '#e50914', letterSpacing: '1.2px' }}>
                Aditya Kumar Aryan
              </Typography>
              <Typography variant="h6" color="rgba(255,255,255,0.85)" gutterBottom sx={{ fontWeight: 600 }}>
                Full Stack Developer at Star Intellisoft Services Pvt. Ltd.<br />React.js | React Native | Node.js
              </Typography>
              <Typography variant="body1" color="rgba(255,255,255,0.75)">
                Hyderabad, India • <a href="mailto:adityakumararyan101@gmail.com" style={{ color: '#e50914' }}>adityakumararyan101@gmail.com</a> • <a href="tel:+917782843264" style={{ color: '#e50914' }}>+91 77828 43264</a><br />
                <a href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138" target="_blank" rel="noopener noreferrer" style={{ color: '#e50914', textDecoration: 'underline' }}>
                  LinkedIn Profile ↗
                </a>
              </Typography>
            </Box>
          </motion.div>

          {animatedSection("About Me", (
            <Typography variant="body1" fontSize={'1.15rem'} lineHeight={1.7}>
              Passionate full-stack developer with 2+ years of experience delivering high-quality digital products. Expertise in React.js, React Native, Node.js, and cloud-native deployment. Dedicated to clean code, scalable systems, and pixel-perfect UIs.
            </Typography>
          ))}

          {animatedSection("Skills", (
            <Box display="flex" flexWrap="wrap" gap={1.5} justifyContent="center">
              {skills.map(skill => (
                <Chip key={skill} label={skill} variant="filled" sx={skillChipStyles} />
              ))}
            </Box>
          ))}

          {animatedSection("Projects", (
            <Grid container spacing={4}>
              {projects.map(project => (
                <Grid item xs={12} sm={6} key={project.title}>
                  <Card sx={projectCardStyles}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} gutterBottom sx={{ color: '#e50914' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ))}

          {animatedSection("Education", (
            <>
              <Typography variant="body1" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
                B.Tech in Computer Science & Engineering
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ mt: 0.8 }}>
                National Institute of Technology, Mizoram — 2022
              </Typography>
            </>
          ))}

          {animatedSection("Contact", (
            <Stack spacing={2} alignItems="center">
              <Typography variant="body1" sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
                I’m ready to join a forward-thinking team and contribute from day one.
              </Typography>
              <Typography variant="body1">
                📧 <a href="mailto:adityakumararyan101@gmail.com" style={{ color: '#e50914', textDecoration: 'underline' }}>adityakumararyan101@gmail.com</a>
              </Typography>
              <Typography variant="body1">
                📞 <a href="tel:+917782843264" style={{ color: '#e50914', textDecoration: 'underline' }}>+91 77828 43264</a>
              </Typography>
              <Typography variant="body1">
                🔗 <a href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138" target="_blank" rel="noopener noreferrer" style={{ color: '#e50914', textDecoration: 'underline' }}>
                  LinkedIn Profile ↗
                </a>
              </Typography>
            </Stack>
          ))}

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={scrollFadeUp}>
            <Box textAlign="center" mt={6}>
              <a
                href={resumeURL}
                download
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#e50914',
                  color: '#fff',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(229, 9, 20, 0.5)'
                }}
              >
                📄 Download Resume
              </a>
            </Box>
          </motion.div>

          <Box
            onClick={this.scrollToTop}
            sx={{
              display: this.state.showScroll ? 'flex' : 'none',
              position: 'fixed',
              bottom: 24,
              right: 24,
              backgroundColor: '#e50914',
              color: '#fff',
              borderRadius: '50%',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(229, 9, 20, 0.6)',
              '&:hover': { backgroundColor: '#b20710' },
            }}
          >
            ↑
          </Box>
        </Container>
      </NetflixStyleBackground>
    );
  }
}

export default Portfolio;
