/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/no-unused-state */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import BrushIcon from "@mui/icons-material/Brush";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import ComputerIcon from "@mui/icons-material/Computer";
import LanguageIcon from "@mui/icons-material/Language";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StarIcon from "@mui/icons-material/Star";

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
  Chip,
  Button,
  TextField,
  CardActions,
  Link,
  Alert,
  CircularProgress,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const ACCENT = "#0b79d0";
const ACCENT_DARK = "#095f9e";
const ACCENT_RGBA = "rgba(11,121,208,0.12)";
const MUTED = "rgba(230,238,248,0.75)";
const MUTED_LIGHT = "rgba(230,238,248,0.55)";

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  background: `linear-gradient(180deg, #071021 0%, #061022 100%)`,
  color: MUTED,
  fontFamily: "'Inter', 'Nunito Sans', Helvetica, Arial, sans-serif",
  fontSize: "16px",
  lineHeight: 1.6,
  overflowX: "hidden",
  paddingTop: 88,
  [theme.breakpoints.down("sm")]: {
    paddingTop: 72,
    width: "100vw",
    overflowX: "hidden",
  },
  [theme.breakpoints.down("xs")]: {
    paddingTop: 64,
  },
}));

const GlassNav = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1200,
  background: "linear-gradient(180deg, rgba(6,9,14,0.82), rgba(6,9,14,0.6))",
  borderBottom: "1px solid rgba(255,255,255,0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1, 2),
  boxShadow: "0 6px 18px rgba(2,6,23,0.45)",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1, 4),
  },
  [theme.breakpoints.down("xs")]: {
    padding: theme.spacing(0.8, 1),
  },
}));

const NavLink = styled("button")(({ theme }) => ({
  color: MUTED,
  margin: theme.spacing(0, 1.25),
  fontWeight: 600,
  textDecoration: "none",
  letterSpacing: 0.3,
  fontSize: "0.95rem",
  padding: theme.spacing(0.4, 1.2),
  borderRadius: 6,
  transition: "background 0.14s, color 0.14s, transform 0.12s",
  cursor: "pointer",
  border: "none",
  background: "transparent",
  "&:hover": {
    background: ACCENT_RGBA,
    color: ACCENT,
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, 0.8),
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    margin: theme.spacing(0.6, 0),
    width: "100%",
    textAlign: "center",
    fontSize: "0.95rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
    padding: theme.spacing(0.3, 0.8),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.05rem",
  marginBottom: theme.spacing(2),
  color: ACCENT,
  letterSpacing: "1px",
  textTransform: "uppercase",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: "0.95rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.85rem",
    gap: theme.spacing(0.5),
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
  },
  [theme.breakpoints.down("xs")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(180deg, rgba(8,10,14,0.78), rgba(6,8,12,0.78))",
  backdropFilter: "blur(6px)",
  borderRadius: theme.spacing(2),
  boxShadow: `0 10px 30px rgba(2,6,23,0.45)`,
  color: MUTED,
  overflow: "hidden",
  minHeight: "120px",
  border: `1px solid rgba(255,255,255,0.03)`,
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    minHeight: "auto",
    borderRadius: theme.spacing(1.5),
  },
  [theme.breakpoints.down("xs")]: {
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
  },
}));

const projectCardStyles = {
  height: "100%",
  borderRadius: 12,
  background: "transparent",
  transition: "transform 0.2s, box-shadow 0.2s",
  color: MUTED,
  p: 2,
  boxShadow: "none",
  border: `1px solid rgba(255,255,255,0.04)`,
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: `0 18px 48px ${ACCENT}22`,
    borderColor: ACCENT_RGBA,
  },
};

const education = [
  {
    degree: "Bachelor of Technology – Computer Science and Engineering",
    institution: "National Institute of Technology (NIT), Mizoram",
    year: "Aug 2018 – Aug 2022",
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Vidhya Niketan, Vishakhapatnam",
    year: "2017",
  },
  {
    degree: "Matriculation",
    institution: "B.D. Public School, Patna",
    year: "2015",
  },
];

const experience = [
  {
    company: "Star Intellisoft Services Private Limited",
    location: "",
    title: "Software Engineer",
    period: "March 2023 – Current",
    details: [
      <span key="title">
        <b>
          Web and Mobile App Development | Al Habtoor Motors, Oman Trading
          Establishment and Towell Auto Center
        </b>
      </span>,
      "Developed responsive web apps with React.js and JavaScript, and cross-platform mobile apps with React Native for Android.",
      "Designed UIs using HTML, CSS, Flexbox, and Grid, ensuring accessibility and modern design standards.",
      "Integrated REST APIs with Axios and managed state with Redux for efficient data flow.",
      "Optimized performance through lazy loading, code splitting, and tools like Chrome DevTools.",
      "Implemented CI/CD with GitHub Actions, deploying apps via Azure and Codemagic.",
      "Ensured quality with unit/integration tests using Jest and React Testing Library.",
      "Collaborated in agile teams using Jira, delivering features on time.",
      <span key="tech">
        <b>Tech Stack:</b> React Native, React.js, JavaScript, HTML, CSS
      </span>,
    ],
  },
  {
    company: "Tool Room and Training Center, Guwahati",
    location: "",
    title: "Software Development - Intern",
    period: "Dec 2020 – Apr 2021",
    details: [
      <span key="java">
        <b>Java Developer Trainee:</b> Improved my skills as a Java Developer by
        working on different Java APIs in projects. This job gave me useful
        experience and helped me better understand how to develop Java
        applications and solve problems.
        <br />
        <b>Tech Stack:</b> Core Java, SQL
      </span>,
      <span key="web">
        <b>Graphics and Web Designer Trainee:</b> Improved my proficiency in
        HTML and CSS, contributing to web design projects. This role enhanced my
        ability to design user-friendly websites and implement visually
        appealing, responsive layouts.
        <br />
        <b>Tech Stack:</b> HTML, CSS, JavaScript
      </span>,
    ],
  },
];

const projects = [
  {
    title: "Personal Portfolio",
    year: "2025",
    description:
      "Responsive portfolio website built with React.js and Material UI. Features smooth animations, dark mode toggle, lazy loading, and optimized performance. Implemented mobile-first responsive design with SEO basics.",
    stack: [
      "React.js",
      "Material UI",
      "JavaScript",
      "CSS3",
      "Responsive Design",
    ],
    demo: "https://Adityaryan7.github.io/Portfolio",
    repo: "https://github.com/Adityaryan7/Portfolio",
  },
  {
    title: "E-Commerce Dashboard",
    year: "2024",
    description:
      "Full-featured e-commerce dashboard with product filtering, search, and cart management. Integrated REST APIs with error handling, Redux state management, and Material UI components. Features real-time product updates and user authentication.",
    stack: ["React.js", "Redux", "REST API", "Material UI", "JavaScript"],
    demo: "https://product-dashboard-ecom.netlify.app/",
    repo: "https://github.com/Adityaryan7/product",
  },
  {
    title: "COVID-19 Query Classification Chatbot",
    year: "Jan 2022 – Jun 2022",
    description:
      "NLP-based chatbot for COVID-19 information. Classifies Q&A pairs from web-scraped dataset using Python ML models. Evaluates performance using F1-score metrics.",
    stack: ["Python", "NLP", "Machine Learning", "scikit-learn"],
  },
];

const scrollFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const NavLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(0.8),
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.down("xs")]: {
    padding: theme.spacing(0.5),
  },
}));

const MobileDrawerNav = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [theme.breakpoints.down("xs")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: "center",
  color: "rgba(255,255,255,0.65)",
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.85rem",
  },
}));

const ScrollTopButton = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  background: ACCENT,
  color: "#fff",
  borderRadius: "50%",
  padding: theme.spacing(1.05),
  boxShadow: `0 6px 30px ${ACCENT}33`,
  cursor: "pointer",
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 56,
  height: 56,
  opacity: 0.95,
  transition: "background 0.18s, transform 0.12s",
  "&:hover": {
    background: ACCENT_DARK,
    transform: "translateY(-4px)",
  },
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    width: 48,
    height: 48,
  },
  [theme.breakpoints.down("xs")]: {
    width: 44,
    height: 44,
    bottom: theme.spacing(1.5),
    right: theme.spacing(1.5),
  },
}));

// TimelineItem Component
const TimelineItem = ({ title, subtitle, period, bullets = [] }) => (
  <Box sx={{ mb: 3 }}>
    <Typography
      variant="h6"
      sx={{
        color: ACCENT,
        fontWeight: 700,
        fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
      }}
    >
      {title}{" "}
      <Typography
        component="span"
        sx={{
          color: MUTED_LIGHT,
          fontWeight: 600,
          fontSize: "0.9em",
        }}
      >
        — {subtitle}
      </Typography>
    </Typography>
    <Typography
      variant="caption"
      sx={{ color: MUTED_LIGHT, display: "block", mb: 1, fontSize: "0.8rem" }}
    >
      {period}
    </Typography>
    <ul
      style={{
        margin: 0,
        paddingLeft: 18,
      }}
    >
      {bullets.map((b, i) => (
        <li
          key={i}
          style={{
            color: "#eee",
            marginBottom: 6,
            fontSize: "0.9rem",
            lineHeight: "1.5",
          }}
        >
          {b}
        </li>
      ))}
    </ul>
  </Box>
);

// ProjectCard Component
const ProjectCard = ({ project }) => (
  <Card
    component={motion.div}
    whileHover={{ scale: 1.03 }}
    sx={{
      ...projectCardStyles,
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <CardContent sx={{ flex: 1 }}>
      <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
        <CodeIcon sx={{ color: ACCENT, fontSize: { xs: 18, sm: 24 } }} />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: ACCENT,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              wordBreak: "break-word",
            }}
          >
            {project.title}
          </Typography>
          <Typography variant="caption" sx={{ color: MUTED_LIGHT }}>
            {project.year}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "#eee",
          mb: 2,
          lineHeight: 1.6,
          fontSize: { xs: "0.85rem", sm: "0.9rem" },
        }}
      >
        {project.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
        {project.stack.map((t) => (
          <Chip
            key={t}
            label={t}
            size="small"
            sx={{
              border: `1px solid ${ACCENT}33`,
              color: ACCENT,
              background: `${ACCENT}08`,
              fontWeight: 600,
              fontSize: { xs: "0.65rem", sm: "0.75rem" },
              height: "auto",
              padding: "4px 6px",
            }}
          />
        ))}
      </Box>
    </CardContent>
    {(project.demo || project.repo) && (
      <CardActions sx={{ pt: 0, pb: 2, px: 2, gap: 1, flexWrap: "wrap" }}>
        {project.demo && project.demo !== "#" && (
          <Button
            size="small"
            variant="contained"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: ACCENT,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              padding: { xs: "4px 8px", sm: "6px 12px" },
              "&:hover": { background: ACCENT_DARK },
            }}
          >
            Live Demo
          </Button>
        )}
        {project.repo && project.repo !== "#" && (
          <Button
            size="small"
            variant="outlined"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: ACCENT,
              color: ACCENT,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              padding: { xs: "4px 8px", sm: "6px 12px" },
              "&:hover": {
                borderColor: ACCENT_DARK,
                color: ACCENT_DARK,
              },
            }}
          >
            GitHub
          </Button>
        )}
      </CardActions>
    )}
  </Card>
);

// TestimonialCard Component
const TestimonialCard = ({ quote, author, role }) => (
  <Paper
    sx={{
      p: { xs: 2, sm: 3 },
      background: "rgba(255,255,255,0.02)",
      borderRadius: 2,
      border: `1px solid ${ACCENT}22`,
    }}
  >
    <Box display="flex" gap={0.5} mb={1}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          sx={{ color: ACCENT, fontSize: { xs: 14, sm: 16 } }}
        />
      ))}
    </Box>
    <Typography
      variant="body2"
      sx={{
        color: MUTED_LIGHT,
        mb: 1,
        fontStyle: "italic",
        fontSize: { xs: "0.85rem", sm: "0.9rem" },
      }}
    >{`"${quote}"`}</Typography>
    <Typography
      variant="subtitle2"
      sx={{
        color: ACCENT,
        fontWeight: 700,
        fontSize: { xs: "0.8rem", sm: "0.9rem" },
      }}
    >
      {author}
    </Typography>
    <Typography
      variant="caption"
      sx={{ color: MUTED_LIGHT, fontSize: "0.75rem" }}
    >
      {role}
    </Typography>
  </Paper>
);

const testimonials = [
  {
    quote:
      "Delivered polished UI and solid performance optimization. Always on time with high-quality code.",
    author: "Product Manager",
    role: "Star Intellisoft Services",
  },
  {
    quote:
      "Great at translating Figma designs to production-ready components with attention to detail.",
    author: "Design Lead",
    role: "Previous Project",
  },
];

// Complete Skills Data
const skillsData = [
  {
    category: "Languages",
    icon: <LanguageIcon />,
    skills: ["JavaScript", "Python", "SQL", "Core Java"],
  },
  {
    category: "Frontend",
    icon: <BrushIcon />,
    skills: [
      "React.js",
      "React Native",
      "Redux",
      "Context API",
      "Hooks",
      "HTML5",
      "CSS3",
      "SCSS",
      "Material UI",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    category: "Developer Tools",
    icon: <BuildIcon />,
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "MySQL Workbench",
      "PostgreSQL Workbench",
      "Chrome DevTools",
      "Jest",
    ],
  },
  {
    category: "Cloud & Deployment",
    icon: <CloudIcon />,
    skills: ["Microsoft Azure", "Codemagic", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Databases",
    icon: <StorageIcon />,
    skills: ["SQL", "REST APIs"],
  },
  {
    category: "Other",
    icon: <ComputerIcon />,
    skills: [
      "JSON",
      "API Integration",
      "State Management",
      "Performance Optimization",
      "UI/UX Implementation",
      "Agile Methodology",
    ],
  },
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScroll: false,
      typewriterText: "",
      mobileNavOpen: false,
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formStatus: {
        loading: false,
        success: false,
        error: false,
        message: "",
      },
      showSnackbar: false,
    };

    this.typewriterPhrases = [
      "Frontend Developer",
      "React.js & React Native Specialist",
      "Building Scalable Web & Mobile Apps",
    ];
    this.typewriterInterval = null;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.startTypewriter();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.typewriterInterval);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    this.setState({ showScroll: scrollTop > 200 });
  };

  scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { formData } = this.state;

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      this.setState({
        formStatus: {
          loading: false,
          success: false,
          error: true,
          message: "Please fill in all fields",
        },
        showSnackbar: true,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      this.setState({
        formStatus: {
          loading: false,
          success: false,
          error: true,
          message: "Please enter a valid email address",
        },
        showSnackbar: true,
      });
      return;
    }

    this.setState({
      formStatus: {
        loading: true,
        success: false,
        error: false,
        message: "",
      },
    });

    try {
      // Formspree form ID: xeezpdkg
      const response = await fetch("https://formspree.io/f/xeezpdkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        this.setState({
          formData: {
            name: "",
            email: "",
            message: "",
          },
          formStatus: {
            loading: false,
            success: true,
            error: false,
            message: "Message sent successfully! I'll get back to you soon.",
          },
          showSnackbar: true,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      this.setState({
        formStatus: {
          loading: false,
          success: false,
          error: true,
          message:
            "Failed to send message. Please try again or email me directly.",
        },
        showSnackbar: true,
      });
    }
  };

  handleSnackbarClose = () => {
    this.setState({ showSnackbar: false });
  };

  render() {
    const resumeURL = `${process.env.PUBLIC_URL}/Aadi_Resume.pdf`;
    const { formData, formStatus, showSnackbar } = this.state;
    const animatedSection = (id, title, content, isLast = false) => (
      <Box
        id={id}
        sx={{
          mb: isLast ? 0 : { xs: 2, sm: 3 },
          px: { xs: 1, sm: 1.5, md: 0 },
          transition: "margin-bottom 0.2s",
          position: "relative",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", position: "relative" }}>
          <motion.div
            variants={scrollFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            style={{ width: "100%" }}
          >
            <GlassCard>
              {title && <SectionTitle>{title}</SectionTitle>}
              {content}
            </GlassCard>
          </motion.div>
        </Box>
      </Box>
    );

    return (
      <GradientBackground>
        <GlassNav>
          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: 1, sm: 1.5, md: 2 }}
            sx={{
              width: "auto",
              justifyContent: "flex-start",
              flex: 1,
            }}
          >
            <Avatar
              src={`${process.env.PUBLIC_URL}/28399.jpg`}
              alt="Aditya Kumar Aryan"
              loading="lazy"
              sx={{
                width: { xs: 36, sm: 40, md: 44 },
                height: { xs: 36, sm: 40, md: 44 },
                boxShadow: `0 0 16px ${ACCENT}`,
                border: `2px solid #071021`,
                flexShrink: 0,
              }}
            />
            <Typography
              variant="h6"
              fontWeight={900}
              sx={{
                color: ACCENT,
                letterSpacing: { xs: 1, sm: 1.5, md: 2 },
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Aryan Portfolio
            </Typography>
          </Box>
          <NavLinksBox>
            <NavLink
              aria-label="About section"
              onClick={() => this.scrollToSection("about")}
            >
              About
            </NavLink>
            <NavLink
              aria-label="Experience section"
              onClick={() => this.scrollToSection("experience")}
            >
              Experience
            </NavLink>
            <NavLink
              aria-label="Skills section"
              onClick={() => this.scrollToSection("skills")}
            >
              Skills
            </NavLink>
            <NavLink
              aria-label="Projects section"
              onClick={() => this.scrollToSection("projects")}
            >
              Projects
            </NavLink>
            <NavLink
              aria-label="Education section"
              onClick={() => this.scrollToSection("education")}
            >
              Education
            </NavLink>
            <NavLink
              aria-label="Contact section"
              onClick={() => this.scrollToSection("contact")}
            >
              Contact
            </NavLink>
          </NavLinksBox>
          <MobileMenuButton
            edge="end"
            aria-label="menu"
            onClick={this.handleMobileNavOpen}
            sx={{ ml: 1 }}
          >
            <MenuIcon fontSize="large" />
          </MobileMenuButton>
          <Drawer
            anchor="top"
            open={this.state.mobileNavOpen}
            onClose={this.handleMobileNavClose}
            PaperProps={{
              sx: {
                background: "rgba(20,20,20,0.98)",
                borderRadius: 0,
                width: "100%",
                maxWidth: "100%",
              },
            }}
          >
            <MobileDrawerNav>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <Typography
                  variant="h6"
                  fontWeight={900}
                  sx={{
                    color: ACCENT,
                    letterSpacing: 2,
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  }}
                >
                  Menu
                </Typography>
                <IconButton
                  onClick={this.handleMobileNavClose}
                  sx={{ color: "#fff" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <NavLink onClick={() => this.handleMobileNavClick("about")}>
                About
              </NavLink>
              <NavLink onClick={() => this.handleMobileNavClick("experience")}>
                Experience
              </NavLink>
              <NavLink onClick={() => this.handleMobileNavClick("skills")}>
                Skills
              </NavLink>
              <NavLink onClick={() => this.handleMobileNavClick("projects")}>
                Projects
              </NavLink>
              <NavLink onClick={() => this.handleMobileNavClick("education")}>
                Education
              </NavLink>
              <NavLink onClick={() => this.handleMobileNavClick("contact")}>
                Contact
              </NavLink>
            </MobileDrawerNav>
          </Drawer>
        </GlassNav>

        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="lg">
            <Box
              component={motion.div}
              variants={scrollFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              sx={{ width: "100%" }}
            >
              <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems="center"
              >
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "1.6rem", sm: "2rem", md: "2.8rem" },
                      letterSpacing: 0.6,
                      mb: 1,
                      lineHeight: 1.04,
                    }}
                  >
                    Aditya Kumar Aryan
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: ACCENT,
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "1.6rem" },
                      mb: 1,
                      letterSpacing: 0.5,
                    }}
                  >
                    Frontend Developer
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: MUTED_LIGHT,
                      fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                      maxWidth: 720,
                      mb: 3,
                      lineHeight: 1.8,
                    }}
                  >
                    3+ years of hands-on experience building responsive,
                    accessible, and performance-optimized web applications. I
                    specialize in React.js, React Native, JavaScript (ES6+), and
                    modern UI development. I focus on clean component
                    architecture, code reusability, and delivering
                    production-ready solutions.
                  </Typography>

                  <Box
                    display="flex"
                    gap={{ xs: 1, sm: 2 }}
                    flexWrap="wrap"
                    mb={3}
                  >
                    <Button
                      variant="contained"
                      href={resumeURL}
                      download="Aadi_Resume.pdf"
                      startIcon={<DownloadIcon />}
                      sx={{
                        background: `linear-gradient(90deg, ${ACCENT} 50%, ${ACCENT_DARK} 100%)`,
                        padding: {
                          xs: "8px 16px",
                          sm: "10px 20px",
                          md: "12px 28px",
                        },
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        fontWeight: 700,
                        textTransform: "none",
                        borderRadius: 1,
                        whiteSpace: "nowrap",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 8px 30px ${ACCENT}33`,
                        },
                      }}
                    >
                      Download CV
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => this.scrollToSection("projects")}
                      startIcon={<AssignmentIcon />}
                      sx={{
                        borderColor: ACCENT,
                        color: ACCENT,
                        padding: {
                          xs: "8px 16px",
                          sm: "10px 20px",
                          md: "12px 28px",
                        },
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: 1,
                        whiteSpace: "nowrap",
                        "&:hover": {
                          borderColor: ACCENT_DARK,
                          color: ACCENT_DARK,
                          background: `${ACCENT}08`,
                        },
                      }}
                    >
                      View Projects
                    </Button>
                  </Box>

                  <Box
                    display="flex"
                    gap={1}
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Typography
                      sx={{
                        color: MUTED_LIGHT,
                        fontWeight: 600,
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      Specialized in:
                    </Typography>
                    {[
                      "JavaScript ES6+",
                      "React.js",
                      "REST APIs",
                      "Responsive Design",
                    ].map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          border: `1.5px solid ${ACCENT}`,
                          color: ACCENT,
                          background: `${ACCENT}08`,
                          fontWeight: 600,
                          fontSize: {
                            xs: "0.65rem",
                            sm: "0.75rem",
                            md: "0.8rem",
                          },
                          height: "auto",
                          padding: "3px 6px",
                        }}
                      />
                    ))}
                  </Box>
                </Grid>

                {/* Right Side: Avatar */}
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                      px: { xs: 2, sm: 0 },
                    }}
                  >
                    <Paper
                      elevation={4}
                      sx={{
                        borderRadius: 2,
                        overflow: "hidden",
                        p: { xs: 1.5, sm: 2 },
                        background:
                          "linear-gradient(180deg, rgba(6,9,12,0.9), rgba(6,9,12,0.95))",
                        border: `1px solid ${ACCENT}33`,
                        width: { xs: 220, sm: 240, md: 280 },
                        textAlign: "center",
                      }}
                    >
                      <Avatar
                        src={`${process.env.PUBLIC_URL}/28399.jpg`}
                        alt="Aditya Kumar Aryan"
                        sx={{
                          width: { xs: 100, sm: 120, md: 140 },
                          height: { xs: 100, sm: 120, md: 140 },
                          mx: "auto",
                          boxShadow: `0 10px 30px ${ACCENT}22`,
                          mb: 2,
                          border: `2px solid ${ACCENT}`,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          fontWeight: 700,
                          mb: 0.5,
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        }}
                      >
                        Frontend Developer
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: MUTED_LIGHT,
                          mb: 2,
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.85rem",
                            md: "0.9rem",
                          },
                        }}
                      >
                        React • Javascript • REST APIs • Responsive Design
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="center"
                        gap={{ xs: 1, sm: 1.5 }}
                      >
                        <Link
                          href="https://github.com/Adityaryan7"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: ACCENT,
                            fontSize: { xs: "1.2rem", sm: "1.4rem" },
                            transition: "transform 0.2s",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        >
                          <GitHubIcon />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: ACCENT,
                            fontSize: { xs: "1.2rem", sm: "1.4rem" },
                            transition: "transform 0.2s",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        >
                          <LinkedInIcon />
                        </Link>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </HeroSection>

        <Container
          maxWidth="md"
          sx={{
            pt: { xs: 2, sm: 3, md: 4 },
            pb: 6,
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {/* About Section */}
          {animatedSection(
            "about",
            <Box display="flex" alignItems="center" gap={1}>
              <ComputerIcon
                sx={{ color: ACCENT, fontSize: { xs: 20, sm: 24 } }}
              />
              <span>About Me</span>
            </Box>,
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                color: MUTED,
              }}
            >
              I am a frontend developer with 3+ years of hands-on experience
              building real-world web applications. I specialize in{" "}
              <strong>JavaScript and React</strong>, focusing on clean
              architecture, reusable components, and performance-optimized UI. I
              have worked closely with designers, backend teams, and clients to
              deliver production-ready solutions that scale.
              <br />
              <br />
              <strong>My approach:</strong> Write clean, maintainable code •
              Build accessible UIs • Optimize performance • Collaborate
              effectively with teams.
            </Typography>,
          )}

          {/* Experience Section */}
          {animatedSection(
            "experience",
            <Box display="flex" alignItems="center" gap={1}>
              <WorkIcon sx={{ color: ACCENT, fontSize: { xs: 20, sm: 24 } }} />
              <span>Experience</span>
            </Box>,
            <Stack spacing={2}>
              {experience.map((exp) => (
                <TimelineItem
                  key={exp.company}
                  title={`${exp.title} @ ${exp.company}`}
                  subtitle={exp.location || "Remote / Onsite"}
                  period={exp.period}
                  bullets={exp.details.map((d) =>
                    typeof d === "string" ? d : d,
                  )}
                />
              ))}
            </Stack>,
          )}

          {/* Skills Section */}
          {animatedSection(
            "skills",
            <Box display="flex" alignItems="center" gap={1}>
              <BuildIcon sx={{ color: ACCENT, fontSize: { xs: 20, sm: 24 } }} />
              <span>Technical Skills</span>
            </Box>,
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {skillsData.map((skillGroup, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Box
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      background: "rgba(255,255,255,0.02)",
                      borderRadius: 2,
                      border: `1px solid ${ACCENT}22`,
                      height: "100%",
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                      <Box
                        sx={{
                          color: ACCENT,
                          display: "flex",
                          alignItems: "center",
                          fontSize: { xs: "1.2rem", sm: "1.3rem" },
                        }}
                      >
                        {skillGroup.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: ACCENT,
                          fontWeight: 700,
                          fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        }}
                      >
                        {skillGroup.category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skillGroup.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: `${ACCENT}12`,
                            color: ACCENT,
                            fontWeight: 600,
                            border: `1px solid ${ACCENT}33`,
                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                            height: "auto",
                            padding: "4px 6px",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>,
          )}

          {/* Projects Section */}
          {animatedSection(
            "projects",
            <Box display="flex" alignItems="center" gap={1}>
              <CodeIcon sx={{ color: ACCENT, fontSize: { xs: 20, sm: 24 } }} />
              <span>Projects</span>
            </Box>,
            <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
              {projects.map((project) => (
                <Grid item xs={12} sm={6} key={project.title}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>,
          )}

          {/* Education Section */}
          {animatedSection(
            "education",
            <Box display="flex" alignItems="center" gap={1}>
              <SchoolIcon
                sx={{ color: ACCENT, fontSize: { xs: 20, sm: 24 } }}
              />
              <span>Education</span>
            </Box>,
            <Stack spacing={2}>
              {education.map((ed, i) => (
                <Box key={i} display="flex" alignItems="flex-start" gap={2}>
                  <SchoolIcon
                    sx={{
                      color: ACCENT,
                      mt: "6px",
                      fontSize: { xs: 20, sm: 24, md: 28 },
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: MUTED,
                        fontWeight: 700,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      }}
                    >
                      {ed.degree}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: MUTED_LIGHT,
                        fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                      }}
                    >
                      {ed.institution} — {ed.year}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>,
          )}

          {/* Contact Section */}
          {animatedSection(
            "contact",
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon sx={{ color: ACCENT, fontSize: { xs: 20, sm: 24 } }} />
              <span>Get In Touch</span>
            </Box>,
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  sx={{
                    color: MUTED_LIGHT,
                    mb: 2,
                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                  }}
                >
                  I am open to opportunities in frontend development, UI-focused
                  features, and collaborative projects. Let&apos;s build
                  something great together.
                </Typography>

                {formStatus.error && (
                  <Alert
                    severity="error"
                    sx={{
                      mb: 2,
                      background: "rgba(211, 47, 47, 0.1)",
                      color: "#ff5252",
                      border: "1px solid #ff5252",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    }}
                    icon={<ErrorIcon />}
                  >
                    {formStatus.message}
                  </Alert>
                )}

                {formStatus.success && (
                  <Alert
                    severity="success"
                    sx={{
                      mb: 2,
                      background: "rgba(76, 175, 80, 0.1)",
                      color: "#66bb6a",
                      border: "1px solid #66bb6a",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    }}
                    icon={<CheckCircleIcon />}
                  >
                    {formStatus.message}
                  </Alert>
                )}

                <Stack
                  spacing={2}
                  component="form"
                  onSubmit={this.handleFormSubmit}
                >
                  <TextField
                    label="Your name"
                    name="name"
                    size="small"
                    fullWidth
                    variant="outlined"
                    value={formData.name}
                    onChange={this.handleFormChange}
                    disabled={formStatus.loading}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: MUTED_LIGHT,
                      },

                      "& .MuiOutlinedInput-root": {
                        color: MUTED,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        backgroundColor: "transparent", // ✅ remove blue bg

                        "& input": {
                          backgroundColor: "transparent", // ✅ important
                        },

                        "& fieldset": {
                          borderColor: "rgba(255,255,255,0.1)",
                        },

                        "&:hover fieldset": {
                          borderColor: ACCENT,
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: ACCENT,
                        },
                      },

                      "& input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px transparent inset",
                        WebkitTextFillColor: MUTED,
                        transition: "background-color 9999s ease-in-out 0s",
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    size="small"
                    fullWidth
                    variant="outlined"
                    value={formData.email}
                    onChange={this.handleFormChange}
                    disabled={formStatus.loading}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: MUTED_LIGHT,
                      },

                      "& .MuiOutlinedInput-root": {
                        color: MUTED,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        backgroundColor: "transparent", // ✅ remove blue bg

                        "& input": {
                          backgroundColor: "transparent", // ✅ important
                        },

                        "& fieldset": {
                          borderColor: "rgba(255,255,255,0.1)",
                        },

                        "&:hover fieldset": {
                          borderColor: ACCENT,
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: ACCENT,
                        },
                      },

                      "& input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px transparent inset",
                        WebkitTextFillColor: MUTED,
                        transition: "background-color 9999s ease-in-out 0s",
                      },
                    }}
                  />
                  <TextField
                    label="Message"
                    name="message"
                    size="small"
                    fullWidth
                    multiline
                    minRows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={this.handleFormChange}
                    disabled={formStatus.loading}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: MUTED_LIGHT,
                      },

                      "& .MuiOutlinedInput-root": {
                        color: MUTED,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        backgroundColor: "transparent", // ✅ remove blue bg

                        "& input": {
                          backgroundColor: "transparent", // ✅ important
                        },

                        "& fieldset": {
                          borderColor: "rgba(255,255,255,0.1)",
                        },

                        "&:hover fieldset": {
                          borderColor: ACCENT,
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: ACCENT,
                        },
                      },

                      "& input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 1000px transparent inset",
                        WebkitTextFillColor: MUTED,
                        transition: "background-color 9999s ease-in-out 0s",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={formStatus.loading}
                    startIcon={
                      formStatus.loading ? (
                        <CircularProgress size={20} sx={{ color: "#fff" }} />
                      ) : (
                        <SendIcon />
                      )
                    }
                    sx={{
                      background: ACCENT,
                      width: { xs: "100%", sm: "auto" },
                      padding: { xs: "10px 20px", sm: "10px 24px" },
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: 1,
                      whiteSpace: "nowrap",
                      "&:hover": {
                        background: ACCENT_DARK,
                        transform: "translateY(-2px)",
                      },
                      "&:disabled": { opacity: 0.6 },
                    }}
                  >
                    {formStatus.loading ? "Sending..." : "Send Message"}
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <EmailIcon
                      sx={{
                        color: ACCENT,
                        fontSize: { xs: 24, sm: 28 },
                        flexShrink: 0,
                      }}
                    />
                    <Link
                      href="mailto:adityakumararyan101@gmail.com"
                      sx={{
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        wordBreak: "break-word",
                        "&:hover": { color: ACCENT },
                      }}
                    >
                      adityakumararyan101@gmail.com
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <PhoneIcon
                      sx={{
                        color: ACCENT,
                        fontSize: { xs: 24, sm: 28 },
                        flexShrink: 0,
                      }}
                    />
                    <Link
                      href="tel:+917782843264"
                      sx={{
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        "&:hover": { color: ACCENT },
                      }}
                    >
                      +91 77828 43264
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <LinkedInIcon
                      sx={{
                        color: ACCENT,
                        fontSize: { xs: 24, sm: 28 },
                        flexShrink: 0,
                      }}
                    />
                    <Link
                      href="https://www.linkedin.com/in/aditya-kumar-aryan-a3654a138"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        "&:hover": { color: ACCENT },
                      }}
                    >
                      LinkedIn Profile
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <GitHubIcon
                      sx={{
                        color: ACCENT,
                        fontSize: { xs: 24, sm: 28 },
                        flexShrink: 0,
                      }}
                    />
                    <Link
                      href="https://github.com/Adityaryan7"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: MUTED,
                        textDecoration: "none",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        "&:hover": { color: ACCENT },
                      }}
                    >
                      GitHub Profile
                    </Link>
                  </Box>
                </Stack>
              </Grid>
            </Grid>,
            true,
          )}
        </Container>

        {this.state.showScroll && (
          <ScrollTopButton onClick={this.scrollToTop}>
            <ArrowUpwardIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
          </ScrollTopButton>
        )}

        <Footer>
          <Typography
            variant="body2"
            sx={{
              color: MUTED_LIGHT,
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
            }}
          >
            &copy; {new Date().getFullYear()} Aditya Kumar Aryan — Frontend
            Developer
          </Typography>
        </Footer>

        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={formStatus.error ? "error" : "success"}
            sx={{
              background: formStatus.error
                ? "rgba(211, 47, 47, 0.9)"
                : "rgba(76, 175, 80, 0.9)",
              color: "#fff",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
            }}
            onClose={this.handleSnackbarClose}
          >
            {formStatus.message}
          </Alert>
        </Snackbar>
      </GradientBackground>
    );
  }
}

export default Portfolio;
