'use client'
import { Facebook, Github, Linkedin, Mail, PhoneCall, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '../components/Nav'
import { Card } from '../components/Card'

const socials = [
  {
    icon: <Facebook size={20} />,
    href: '',
    label: 'Facebook',
    handle: '',
  },
  {
    icon: <Linkedin size={20} />,
    href: '',
    label: 'LinkedIn',
    handle: '',
  },
  {
    icon: <PhoneCall size={20} />,
    href: '',
    label: 'Phone',
    handle: '',
  },
  {
    icon: <Mail size={20} />,
    href: '',
    label: 'Email',
    handle: '',
  },
]

export default function Contact() {
  return (
    <div className="bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black from-white via-zinc-600/20 to-white">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-4 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-8">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full bg-zinc-200 group-hover:bg-zinc-300 border-zinc-500 group-hover:border-zinc-900 drop-shadow-orange dark:group-hover:border-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-700">
                  {s.icon}
                </span>{' '}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl opacity-50 group-hover:opacity-100 font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 opacity-50 group-hover:opacity-100">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
