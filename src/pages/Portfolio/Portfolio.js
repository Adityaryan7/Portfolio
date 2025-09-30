/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
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
  Chip,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  background: 'linear-gradient(135deg, #181818 0%, #232526 100%)',
  backgroundAttachment: 'fixed',
  color: '#fff',
  fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: '16px',
  lineHeight: 1.6,
  overflowX: 'hidden',
  paddingTop: 80,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 64,
  },
}));

const GlassNav = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  zIndex: 1200,
  background: 'rgba(20,20,20,0.85)',
  backdropFilter: 'blur(16px)',
  borderBottom: '1.5px solid rgba(255,255,255,0.07)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 4),
  boxShadow: '0 2px 24px rgba(0,0,0,0.18)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
  },
}));

const NavLink = styled('a')(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(0, 2),
  fontWeight: 700,
  textDecoration: 'none',
  letterSpacing: 1,
  fontSize: '1.08rem',
  borderRadius: 8,
  padding: theme.spacing(0.7, 2),
  transition: 'background 0.2s, color 0.2s',
  '&:hover': {
    background: 'rgba(229,9,20,0.18)',
    color: '#e50914',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    margin: theme.spacing(1, 0),
    width: '100%',
    textAlign: 'center',
    fontSize: '1.2rem',
    padding: theme.spacing(1.2, 0),
    borderRadius: 12,
  },
}));

const NavLinksBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const MobileDrawerNav = styled(Box)(({ theme }) => ({
  width: '100vw',
  maxWidth: 320,
  padding: theme.spacing(4, 2),
  background: 'rgba(20,20,20,0.98)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
    width: '100vw',
    maxWidth: '100vw',
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    minHeight: '40vh',
  },
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(28,28,28,0.82)',
  backdropFilter: 'blur(12px)',
  borderRadius: theme.spacing(4),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
  color: '#fff',
  overflow: 'hidden',
  minHeight: '180px',
  border: '1.5px solid rgba(255,255,255,0.10)',
  padding: theme.spacing(5, 4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1.5),
    minHeight: '120px',
    borderRadius: theme.spacing(2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: 'clamp(1.4rem, 4vw, 2.3rem)',
  marginBottom: theme.spacing(3),
  color: '#e50914',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    whiteSpace: 'normal',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(2),
  },
}));

const ScrollTopButton = styled(ArrowUpwardIcon)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  background: '#e50914',
  color: '#fff',
  borderRadius: '50%',
  padding: theme.spacing(1.2),
  boxShadow: '0 4px 24px rgba(229,9,20,0.4)',
  cursor: 'pointer',
  zIndex: 2000,
  fontSize: '2.5rem',
  opacity: 0.85,
  transition: 'background 0.2s, opacity 0.2s',
  '&:hover': {
    background: '#b20710',
    opacity: 1,
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: '#888',
  fontSize: '1rem',
  padding: theme.spacing(4, 0, 2, 0),
  marginTop: theme.spacing(8),
  borderTop: '1.5px solid rgba(255,255,255,0.09)',
  letterSpacing: 1,
  background: 'rgba(20,20,20,0.85)',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4),
    fontSize: '0.95rem',
    padding: theme.spacing(2, 0, 1, 0),
  },
}));

const scrollFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18, // faster
      ease: 'easeOut',
      staggerChildren: 0.05,
    },
  },
};

const projectCardStyles = {
  height: '100%',
  borderRadius: 18,
  background: 'rgba(28,28,28,0.92)',
  transition: 'transform 0.3s, box-shadow 0.3s, background 0.3s',
  color: '#fff',
  p: 2,
  boxShadow: '0 8px 32px 0 rgba(229,9,20,0.10)',
  border: '1px solid rgba(229,9,20,0.09)',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.04)',
    boxShadow: '0 16px 48px rgba(229,9,20,0.25)',
    background: 'rgba(28,28,28,0.98)',
  },
};

const education = [
  {
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    institution: 'National Institute of Technology (NIT), Mizoram',
    year: 'Aug 2018 – May 2022',
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

const experience = [
  {
    company: 'Star Intellisoft Services Private Limited',
    location: '',
    title: 'Software Engineer',
    period: 'March 2023 – Current',
    details: [
      <span>
        <b>
          Web and Mobile App Development | Al Habtoor Motors, Oman Trading Establishment and Towell
          Auto Center
        </b>
      </span>,
      'Developed responsive web apps with React.js and JavaScript, and cross-platform mobile apps with React Native for Android.',
      'Designed UIs using HTML, CSS, Flexbox, and Grid, ensuring accessibility and modern design standards.',
      'Integrated REST APIs with Axios and managed state with Redux for efficient data flow.',
      'Optimized performance through lazy loading, code splitting, and tools like Chrome DevTools.',
      'Implemented CI/CD with GitHub Actions, deploying apps via Azure and Codemagic.',
      'Ensured quality with unit/integration tests using Jest and React Testing Library.',
      'Collaborated in agile teams using Jira, delivering features on time.',
      <span>
        <b>Tech Stack:</b> React Native, React.js, JavaScript, HTML, CSS
      </span>,
    ],
    tech: ['React Native', 'React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    company: 'Tool Room and Training Center, Guwahati',
    location: '',
    title: 'Software Development - Intern',
    period: 'Dec 2020 – Apr 2021',
    details: [
      <span>
        <b>Java Developer Trainee:</b> Improved my skills as a Java Developer by working on
        different Java APIs in projects. This job gave me useful experience and helped me better
        understand how to develop Java applications and solve problems.
        <br />
        <b>Tech Stack:</b> Core Java, SQL
      </span>,
      <span>
        <b>Graphics and Web Designer Trainee:</b> Improved my proficiency in HTML and CSS,
        contributing to web design projects. This role enhanced my ability to design user-friendly
        websites and implement visually appealing, responsive layouts.
        <br />
        <b>Tech Stack:</b> HTML, CSS, JavaScript
      </span>,
    ],
    tech: ['Core Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
];

const skills = {
  'Programming Languages': ['JavaScript', 'Python', 'SQL', 'Core Java', 'HTML5', 'CSS3'],
  Development: ['ReactJS', 'React Native', 'Redux', 'Material UI', 'Bootstrap'],
  'Developer Tools': [
    'VS Code',
    'Postman',
    'MySQL Workbench',
    'PostgreSQL Workbench',
    'Git',
    'Bitbucket',
    'GitHub',
    'Codemagic',
    'Postman',
  ],
  'Cloud & Deployment': ['Microsoft Azure'],
};

const projects = [
  {
    title: 'Personal Portfolio',
    year: '2025',
    description:
      'Developed a responsive portfolio website using React.js and Material UI, incorporating smooth animations, a modern design, and mobile-friendly navigation. The project highlights my ability to create visually appealing and user-friendly interfaces, with a focus on performance and interactivity. The site offers a seamless experience across devices, ensuring a smooth browsing experience for users.',
    stack: ['React.js', 'Material UI', 'JavaScript', 'CSS3'],
  },
  {
    title: 'COVID-19 Query Classification Chatbot',
    year: 'Jan 2022 – Jun 2022',
    description:
      "I developed an NLP-based chatbot to provide accurate COVID-19 information and promote health behaviors. It classifies question-answer pairs from a dataset scraped from reputable sources, using Python for efficient implementation. The system's performance was evaluated with the F1-score to ensure effective user interaction and information delivery.",
    stack: ['Python', 'NLP', 'Machine Learning'],
  },
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScroll: false,
      typewriterText: '',
      mobileNavOpen: false,
    };
    // Update your typewriter phrases for accuracy
    this.typewriterPhrases = ['Software Engineer', 'React.js | React Native | Redux'];
    this.typewriterInterval = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.startTypewriter();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.typewriterInterval);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    this.setState({ showScroll: scrollTop > 200 });
  };

  scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'auto' });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  startTypewriter = () => {
    let phraseIdx = 0;
    let charIdx = 0;
    let forward = true;
    const type = () => {
      const phrase = this.typewriterPhrases[phraseIdx];
      if (forward) {
        if (charIdx < phrase.length) {
          this.setState({ typewriterText: phrase.slice(0, charIdx + 1) });
          charIdx += 1;
          this.typewriterInterval = setTimeout(type, 80);
        } else {
          forward = false;
          this.typewriterInterval = setTimeout(type, 900);
        }
      } else if (charIdx > 0) {
        this.setState({ typewriterText: phrase.slice(0, charIdx - 1) });
        charIdx -= 1;
        this.typewriterInterval = setTimeout(type, 40);
      } else {
        forward = true;
        phraseIdx = (phraseIdx + 1) % this.typewriterPhrases.length;
        this.typewriterInterval = setTimeout(type, 400);
      }
    };
    type();
  };

  handleMobileNavOpen = () => {
    this.setState({ mobileNavOpen: true });
  };

  handleMobileNavClose = () => {
    this.setState({ mobileNavOpen: false });
  };

  handleMobileNavClick = (id) => {
    this.scrollToSection(id);
    this.handleMobileNavClose();
  };

  render() {
    const resumeURL = `${process.env.PUBLIC_URL}/Aadi_Resume.pdf`;

    const animatedSection = (id, title, content, isLast = false) => (
      <Box
        id={id}
        sx={{
          mb: isLast ? 0 : { xs: 2, sm: 3 },
          px: { xs: 1, sm: 0 },
          transition: 'margin-bottom 0.2s',
        }}
      >
        <motion.div
          variants={scrollFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <GlassCard>
            <SectionTitle>{title}</SectionTitle>
            {content}
          </GlassCard>
        </motion.div>
      </Box>
    );

    return (
      <GradientBackground>
        <GlassNav>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            sx={{
              width: 'auto',
              justifyContent: 'flex-start',
            }}
          >
            <Avatar
              src={`${process.env.PUBLIC_URL}/28399.jpg`}
              alt="Aditya Kumar Aryan"
              loading="lazy"
              sx={{
                width: 44,
                height: 44,
                boxShadow: '0 0 16px #e50914',
                border: '2px solid #fff',
              }}
            />
            <Typography
              variant="h6"
              fontWeight={900}
              sx={{
                color: '#e50914',
                letterSpacing: 2,
                ml: 1,
                fontSize: { xs: '1.1rem', sm: '1.3rem' },
              }}
            >
              Aryan Portfolio
            </Typography>
          </Box>
          <NavLinksBox>
            <NavLink
              href="#about"
              aria-label="About section"
              onClick={() => this.scrollToSection('about')}
            >
              About
            </NavLink>
            <NavLink
              href="#experience"
              aria-label="Experience section"
              onClick={() => this.scrollToSection('experience')}
            >
              Experience
            </NavLink>
            <NavLink
              href="#skills"
              aria-label="Skills section"
              onClick={() => this.scrollToSection('skills')}
            >
              Skills
            </NavLink>
            <NavLink
              href="#projects"
              aria-label="Projects section"
              onClick={() => this.scrollToSection('projects')}
            >
              Projects
            </NavLink>
            <NavLink
              href="#education"
              aria-label="Education section"
              onClick={() => this.scrollToSection('education')}
            >
              Education
            </NavLink>
            <NavLink
              href="#contact"
              aria-label="Contact section"
              onClick={() => this.scrollToSection('contact')}
            >
              Contact
            </NavLink>
          </NavLinksBox>
          <MobileMenuButton
            edge="end"
            aria-label="menu"
            onClick={this.handleMobileNavOpen}
            sx={{ ml: 2 }}
          >
            <MenuIcon fontSize="large" />
          </MobileMenuButton>
          <Drawer
            anchor="top"
            open={this.state.mobileNavOpen}
            onClose={this.handleMobileNavClose}
            PaperProps={{
              sx: {
                background: 'rgba(20,20,20,0.98)',
                borderRadius: 0,
                width: '100vw',
                maxWidth: '100vw',
              },
            }}
          >
            <MobileDrawerNav>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography
                  variant="h6"
                  fontWeight={900}
                  sx={{ color: '#e50914', letterSpacing: 2 }}
                >
                  Menu
                </Typography>
                <IconButton onClick={this.handleMobileNavClose} sx={{ color: '#fff' }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <NavLink href="#about" onClick={() => this.handleMobileNavClick('about')}>
                About
              </NavLink>
              <NavLink href="#experience" onClick={() => this.handleMobileNavClick('experience')}>
                Experience
              </NavLink>
              <NavLink href="#skills" onClick={() => this.handleMobileNavClick('skills')}>
                Skills
              </NavLink>
              <NavLink href="#projects" onClick={() => this.handleMobileNavClick('projects')}>
                Projects
              </NavLink>
              <NavLink href="#education" onClick={() => this.handleMobileNavClick('education')}>
                Education
              </NavLink>
              <NavLink href="#contact" onClick={() => this.handleMobileNavClick('contact')}>
                Contact
              </NavLink>
            </MobileDrawerNav>
          </Drawer>
        </GlassNav>

        {/* Hero Section */}
        <HeroSection>
          <Box
            component={motion.div}
            variants={scrollFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Avatar
              src={`${process.env.PUBLIC_URL}/28399.jpg`}
              alt="Aditya Kumar Aryan"
              sx={{
                width: { xs: 110, sm: 150, md: 180 },
                height: { xs: 110, sm: 150, md: 180 },
                mx: 'auto',
                boxShadow: '0 0 64px #e50914, 0 0 0 6px #fff',
                border: '5px solid #fff',
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                color: '#fff',
                fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.8rem' },
                letterSpacing: 2,
                mb: 1,
                textShadow: '0 2px 12px #e5091440',
              }}
            >
              Aditya Kumar Aryan
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#e50914',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.7rem' },
                minHeight: 36,
                mb: 2,
                letterSpacing: 1,
                fontFamily: 'monospace',
              }}
            >
              {this.state.typewriterText}
              <span style={{ color: '#fff', opacity: 0.7 }}>|</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
                fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
                maxWidth: 600,
                mx: 'auto',
                mb: 2,
              }}
            >
              Frontend Developer at Star Intellisoft Services Pvt. Ltd.
              <br />
              Passionate about building beautiful, performant, and accessible web & mobile apps.
            </Typography>
            <a
              href={resumeURL}
              download="Aadi_Resume.pdf"
              style={{
                background: 'linear-gradient(90deg,#e50914 60%,#b20710 100%)',
                padding: '14px 32px',
                borderRadius: '10px',
                color: '#fff',
                fontWeight: 700,
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                letterSpacing: 1,
                boxShadow: '0 4px 24px rgba(229,9,20,0.18)',
                transition: 'background-color 0.3s, transform 0.2s',
                display: 'inline-block',
                marginTop: 16,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b20710';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(90deg,#e50914 60%,#b20710 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Download Resume
            </a>
          </Box>
        </HeroSection>

        <Container
          maxWidth="md"
          sx={{
            pt: 2,
            pb: 6,
            px: { xs: 0.5, sm: 2 },
          }}
        >
          {animatedSection(
            'about',
            'About Me',
            <Typography variant="body1" fontSize="1.18rem">
              Software Engineer with 2+ years of experience in React.js, React Native, JavaScript,
              HTML5, CSS3, and Redux. Skilled in building responsive, scalable web and mobile apps,
              integrating APIs, and optimizing UI performance. Hands-on with Azure, CI/CD pipelines,
              and testing, passionate about creating modern, user-friendly interfaces.
            </Typography>
          )}

          {animatedSection(
            'experience',
            'Experience',
            <Stack spacing={3}>
              {experience.map((exp) => (
                <Box key={exp.company}>
                  <Typography variant="h6" sx={{ color: '#e50914', mb: 0.5 }}>
                    {exp.title} @ {exp.company}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
                    {exp.period} &mdash; {exp.location}
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {exp.details.map((d, i) => (
                      <li key={i} style={{ marginBottom: 4, fontSize: '1rem', color: '#eee' }}>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                    {exp.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          background: 'rgba(229,9,20,0.13)',
                          color: '#e50914',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </Stack>
          )}

          {animatedSection(
            'skills',
            'Skills',
            <Stack spacing={3}>
              {Object.entries(skills).map(([category, items]) => (
                <Box key={category}>
                  <Typography variant="h6" sx={{ color: '#e50914', mb: 1 }}>
                    {category}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      overflowX: { xs: 'auto', sm: 'visible' },
                    }}
                  >
                    {items.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        color="default"
                        variant="outlined"
                        sx={{
                          borderColor: '#e50914',
                          color: '#fff',
                          fontWeight: 500,
                          background: 'rgba(229,9,20,0.07)',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                        }}
                      />
                    ))}
                  </Box>
                  <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                </Box>
              ))}
            </Stack>
          )}

          {animatedSection(
            'projects',
            'Projects',
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} key={project.title}>
                  <Card
                    component={motion.div}
                    whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(229,9,20,0.25)' }}
                    sx={projectCardStyles}
                  >
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1} mb={1}>
                        <CodeIcon sx={{ color: '#e50914' }} />
                        <Typography variant="h6" fontWeight={700} sx={{ color: '#e50914' }}>
                          {project.title}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
                      <Typography variant="body2" sx={{ color: '#eee', mb: 1 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.stack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(229,9,20,0.13)',
                              color: '#e50914',
                              fontWeight: 600,
                              fontSize: '0.95rem',
                              borderRadius: 1,
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {animatedSection(
            'education',
            'Education',
            <Stack spacing={3}>
              {education.map(({ degree, institution, year }) => (
                <Box key={degree} display="flex" alignItems="center" gap={2}>
                  <SchoolIcon sx={{ color: '#e50914', fontSize: 32 }} />
                  <Box>
                    <Typography variant="body1" fontWeight={700} fontSize="1.13rem">
                      {degree}
                    </Typography>
                    <Typography variant="body2" color="rgba(245, 245, 245, 0.7)" sx={{ mt: 0.5 }}>
                      {institution} — {year}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}

          {animatedSection(
            'contact',
            'Contact',
            <Stack spacing={2}>
              <Typography variant="body1">
                I am actively seeking new opportunities to contribute my skills and grow as a
                Software Developer. If you have a suitable role or would like to discuss potential
                collaborations, please feel free to get in touch.
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon sx={{ color: '#e50914' }} />
                <a
                  href="mailto:adityakumararyan101@gmail.com"
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#e50914';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.color = '#e50914';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  adityakumararyan101@gmail.com
                </a>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon sx={{ color: '#e50914' }} />
                <a
                  href="tel:+917782843264"
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#e50914';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.color = '#e50914';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  +91 77828 43264
                </a>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LinkedInIcon sx={{ color: '#e50914' }} />
                <a
                  href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#e50914';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.color = '#e50914';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  LinkedIn Profile
                </a>
              </Box>
            </Stack>
          )}
        </Container>

        {this.state.showScroll && <ScrollTopButton onClick={this.scrollToTop} />}

        <Footer>
          &copy; {new Date().getFullYear()} Aditya Kumar Aryan &mdash; Crafted with React & MUI
        </Footer>
      </GradientBackground>
    );
  }
}

export default Portfolio;
