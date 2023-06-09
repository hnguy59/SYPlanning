import { Facebook } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'SY Planning',
    template: 'SY Planning',
  },
  description:
    'Urban Planner that aspires to create better places for people to live, work and play.',
  openGraph: {
    title: 'SY Planning',
    description:
      'Urban Planner that aspires to create better places for people to live, work and play.',
    url: 'https://SYPlanning.com.au',
    siteName: 'SYPlanning.com.au',
    images: [
      {
        url: 'https://chronark.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'SY Planning',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
}

export const siteData = {
  facebook: 'https://www.facebook.com/profile.php?id=100092514035846',
  linkedin: 'https://www.linkedin.com/in/shaun-yong/',
  phone: '+61 432 823 351',
  email: 'shaun.yong@syplanning.com.au',
}

export const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]
