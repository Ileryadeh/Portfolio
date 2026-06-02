import comfee1 from '../app/assets/projects/comfee1.jpg';
import comfee2 from '../app/assets/projects/comfee2.jpg';
import comfee3 from '../app/assets/projects/comfee3.jpg';
import comfee4 from '../app/assets/projects/comfee4.jpg';
import comfee5 from '../app/assets/projects/comfee5.jpg';
import tara1 from '../app/assets/projects/tara1.png';
import tara2 from '../app/assets/projects/tara2.png';
import tara3 from '../app/assets/projects/tara3.png';
import tara4 from '../app/assets/projects/tara4.png';
import tara5 from '../app/assets/projects/tara5.png';
import agap1 from '../app/assets/projects/agap1.png';
import agap2 from '../app/assets/projects/agap2.png';
import agap3 from '../app/assets/projects/agap3.png';
import agap4 from '../app/assets/projects/agap4.png';
import agap5 from '../app/assets/projects/agap5.png';
import agap6 from '../app/assets/projects/agap6.png';
import agap7 from '../app/assets/projects/agap7.png';
import bj1 from '../app/assets/projects/bj1.png';
import bj2 from '../app/assets/projects/bj2.png';
import bj3 from '../app/assets/projects/bj3.png';
import lutaw1 from '../app/assets/projects/lutaw1.jpg';
import lutaw2 from '../app/assets/projects/lutaw2.png';



export const DISPLAY = "'Playfair Display', Georgia, serif";
export const BODY = "'Lato', sans-serif";
export const MONO = "'DM Mono', monospace";

export const navLinks = [
  { id: 'quote', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const projects = [
  {
    name: 'Comfee',
    desc: 'A social coffee app for sharing tastes, discovering hidden gems, and connecting with coffee lovers.',
    tech: ['React Native', 'Android', 'Supabase'],
    github: 'https://github.com/YxaBlue/Comfee',
    apk: 'https://drive.google.com/file/d/1rowXyPLT-y7YoKIP0400VOK9PsQrGnPt/view?usp=sharing',
    flowerColor: '#d4758a',
    petalColor: '#f0c0d4',
    centerColor: '#7a3248',
    stemColor: '#4a6741',
  },
  {
    name: 'TARA',
    desc: 'Tech Access Reskilling with AI — An AI-powered platform for accessible tech learning and personalized reskilling opportunities.',
    tech: ['Python', 'Flet', 'AI'],
    github: 'https://github.com/Ileryadeh/TARA_App',
    flowerColor: '#d4a830',
    petalColor: '#f5d878',
    centerColor: '#6b4800',
    stemColor: '#4a6741',
  },
  {
    name: 'BlackJack Mafia',
    desc: 'A mafia-themed Blackjack game developed with the Godot Engine featuring bonus moves, strategic twists, and crime-inspired gameplay mechanics.',
    tech: ['Godot Engine', 'GDScript', 'Game'],
    github: 'https://github.com/Ileryadeh/BlackJackMafia',
    flowerColor: '#52a04a',
    petalColor: '#90c48c',
    centerColor: '#2a5c24',
    stemColor: '#3a5232',
  },
  {
    name: 'Agap',
    desc: 'An e-referral and emergency response platform that uses Medical NLP, real-time mapping, and hospital system integration to optimize EMT dispatch, patient routing, and healthcare coordination.',
    tech: ['Frontend', 'UI Design'],
    figma: 'https://www.figma.com/proto/TqeKo4UvIzfsad8tAZj47i/Prototype?node-id=65-112&starting-point-node-id=65%3A112&t=dxYXmqYDbmmdKOCq-1',
    flowerColor: '#5a88c8',
    petalColor: '#9ab8e8',
    centerColor: '#1e4888',
    stemColor: '#4a6741',
  },
  {
    name: 'Lutaw',
    desc: 'Arduino-based disaster assistance life jacket with GPS and GSM integration using C++ for real-time tracking and emergency alerts.\n DOST TAPI CLUSTERICE Finalist 2024',
    tech: ['C++', 'Arduino', 'GPS & SMS'],
    flowerColor: '#c87840',
    petalColor: '#e8b07a',
    centerColor: '#6a3410',
    stemColor: '#4a6741',
  },
];

export const skillRow1 = ['JavaScript', 'TypeScript', 'C/C++', 'C#', 'Python', 'HTML', 'CSS'];
export const skillRow2 = ['React.js', 'React Native', 'Flutter', '.NET', 'Git', 'GitHub'];

export const COMFEE_SCREENS = [comfee1, comfee2, comfee3, comfee4, comfee5];

export const AGAP_SCREENS = [agap1, agap2, agap3, agap4, agap5, agap6, agap7];

export const LUTAW_SCREENS = [  lutaw1, lutaw2];

export const TARA_SCREENS = [tara1, tara2, tara3, tara4, tara5];

export const BLACKJACK_MAFIA_SCREENS = [bj1, bj2, bj3, '/videos/bj_mafia.mp4'];

export const FLOWER_COLORS: Record<string, { petal: string; center: string }> = {
  'JavaScript':   { petal: '#f7df4a', center: '#c4a010' },
  'TypeScript':   { petal: '#78b0f8', center: '#2858c8' },
  'C/C++':        { petal: '#90c8f8', center: '#3880c0' },
  'Python':       { petal: '#f8d470', center: '#d0a010' },
  'HTML':         { petal: '#f89858', center: '#c05820' },
  'CSS':          { petal: '#5898e8', center: '#1858b8' },
  'React.js':     { petal: '#70e8f8', center: '#10b0d0' },
  'React Native': { petal: '#a0d8f8', center: '#2888c0' },
  'Flutter':      { petal: '#70d0f8', center: '#1888c0' },
  'Git':          { petal: '#f87860', center: '#c03818' },
  'GitHub':       { petal: '#c0a0e8', center: '#6838c0' },
  // 'Figma' removed from skill colors
};

export const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];

export const VINE_H = 260;
export const VINE_SECTION_Y = [10, 72, 134, 196, 258];
export const VINE_PATH_LEN = 290;
export const VINE_PATH = `M22 10 Q19 38 22 72 Q25 100 22 134 Q19 162 22 196 Q25 224 22 258`;

export const BUTTERFLIES = [
  { id: 0, startX: 12,  startY: 22,  color1: '#f5a0c8', color2: '#e060a0', scale: 0.85, duration: 18, delay: 0,    driftX: 14,  driftY: -12 },
  { id: 1, startX: 78,  startY: 35,  color1: '#f5d878', color2: '#d4a830', scale: 0.7,  duration: 22, delay: 3,    driftX: -10, driftY: 18  },
  { id: 2, startX: 55,  startY: 15,  color1: '#9ab8e8', color2: '#5a88c8', scale: 0.9,  duration: 26, delay: 6,    driftX: 18,  driftY: 10  },
  { id: 3, startX: 88,  startY: 72,  color1: '#b0e8a8', color2: '#5a9c55', scale: 0.75, duration: 20, delay: 9,    driftX: -16, driftY: -8  },
  { id: 4, startX: 30,  startY: 80,  color1: '#f0b07a', color2: '#c87840', scale: 0.8,  duration: 24, delay: 12,   driftX: 12,  driftY: -16 },
  { id: 5, startX: 65,  startY: 55,  color1: '#d4a0f0', color2: '#9040c8', scale: 0.65, duration: 19, delay: 4,    driftX: -8,  driftY: 14  },
];
