import { Building2, Code2, IndianRupee, GraduationCap, TrendingUp, ShieldCheck, Target, BookOpen } from 'lucide-react'

export const brand = {
  name: 'DKODER',
  motto: 'LEARN • BUILD • GROW',
  tagline: ['Real Skills.', 'Real Projects.', 'A Brighter Future.'],
}

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Practice Lab', href: '#lab' },
  { label: 'Exam Prep', href: '#exams' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const stats = [
  { value: 12500, suffix: '+', label: 'Placement questions' },
  { value: 500, suffix: '+', label: 'Companies covered' },
  { value: 2, suffix: '', label: 'Exam tracks: NQT & InfyTQ' },
  { value: 4, suffix: ' yrs', label: 'Access per student' },
]

export const features = [
  { icon: Building2, title: 'Company-tagged questions', text: 'Practice the exact questions companies have asked, filtered by company.' },
  { icon: Code2, title: 'Live coding lab', text: 'Write, run and test code in the browser. No setup needed.' },
  { icon: IndianRupee, title: 'Salary filters', text: 'Focus on companies by package and aim for the offers you want.' },
  { icon: GraduationCap, title: 'Entrance exam prep', text: 'Focused practice for TCS NQT, InfyTQ and similar tests.' },
  { icon: TrendingUp, title: 'Always growing', text: 'New real placement questions are added all the time.' },
  { icon: ShieldCheck, title: 'Built for colleges', text: 'One simple plan for the whole institution, made for engineering colleges across India.' },
]

export const heroCompanies = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant']

export const marqueeNames = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini', 'HCLTech', 'Tech Mahindra', 'Zoho', 'IBM']

export const companies = ['All', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant']

export const questions = [
  { id: 1, title: 'Reverse a string without extra space', company: 'TCS', lpa: 3.6, level: 'Easy' },
  { id: 2, title: 'Find the missing number in an array', company: 'Infosys', lpa: 3.6, level: 'Easy' },
  { id: 3, title: 'Check if two strings are anagrams', company: 'Wipro', lpa: 3.5, level: 'Easy' },
  { id: 4, title: 'Longest substring without repeats', company: 'Accenture', lpa: 4.5, level: 'Medium' },
  { id: 5, title: 'Merge two sorted linked lists', company: 'Cognizant', lpa: 4.0, level: 'Medium' },
  { id: 6, title: 'Detect a cycle in a graph', company: 'TCS', lpa: 7.0, level: 'Hard' },
  { id: 7, title: 'Rotate a matrix by 90 degrees', company: 'Infosys', lpa: 5.0, level: 'Medium' },
  { id: 8, title: 'Minimum coins for a target amount', company: 'Accenture', lpa: 6.5, level: 'Hard' },
]

export const exams = [
  { name: 'TCS NQT', icon: Target, topics: ['Numerical Ability', 'Verbal Ability', 'Reasoning', 'Coding'] },
  { name: 'InfyTQ', icon: BookOpen, topics: ['Aptitude', 'Programming Logic', 'DBMS', 'Coding'] },
]

export const faqs = [
  { q: 'Who is Dkoder for?', a: 'Dkoder is a placement LMS built for engineering colleges and their students across India.' },
  { q: 'What kind of questions are inside?', a: 'Real placement questions, tagged by company, and the list keeps growing.' },
  { q: 'Can students code inside the platform?', a: 'Yes. The live coding lab lets students write and run code in the browser.' },
  { q: 'Which entrance exams are covered?', a: 'TCS NQT and InfyTQ preparation is included.' },
  { q: 'How does pricing work?', a: 'Pricing is per student for the full four years. Contact us for a college plan.' },
]
