import { ReactNode } from 'react'

export enum Sections {
  ABOUT = 'about',
  SERVICES = 'services',
  VALUES = 'values',
  FAQS = 'faqs',
  CONTACT = 'contact',
  REVIEWS = 'reviews',
}

export interface INavLinks {
  title: string
  section: Sections
  icon?: ReactNode
}

export const navLinks: INavLinks[] = [
  { title: 'About', section: Sections.ABOUT },
  {
    title: 'Services',
    section: Sections.SERVICES,
  },
  {
    title: 'Values',
    section: Sections.VALUES,
  },
  {
    title: 'FAQs',
    section: Sections.FAQS,
  },
  {
    title: 'Contact',
    section: Sections.CONTACT,
  },
  {
    title: 'Reviews',
    section: Sections.REVIEWS,
  },
]
