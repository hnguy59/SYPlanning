'use client'

import { Accordion, Span } from '@chakra-ui/react'

const ACCORDION_ITEMS = [
  {
    value: 'how-long',
    title: 'How long does it take to obtain a Development Approval from Council?',
    content:
      'The time required to obtain approval from initial consultation to development approval will usually take months or more than a year (if it is a complex and sizable project). However, given the current shortage of development professionals within the private sector, and the lack of Council planners, many projects are anticipated to require 6 months to design and obtain approval for your proposed development.',
  },
  {
    value: 'guarantee',
    title: 'Can you guarantee Development Approval?',
    content:
      'While I have achieved 100% approval rate thus far. I cannot guarantee that all projects will be approved by Council. However, I will endeavour identify and inform you of all “red flags” prior to engaging project specialists to save costs.',
  },
  {
    value: 'areas',
    title: 'Which Council Local Government Areas do you service?',
    content:
      'Given the nature of the NSW Planning System, I can provide town planning services for any property within the New South Wales. Specifically, I have completed development assessments over a large number of Council areas including the Moree Plains Shire Council, Lismore City Council, Liverpool City Council, Ballina Shire Council, Tweed Shire Council, Northern Beaches Council, Inner West Council and many more.',
  },
  {
    value: 'meet',
    title: 'How can I meet you?',
    content:
      'As I operate the business from my home in Queensland, the best way to meet would be via a Teams or Zoom meeting.',
  },
]

export default function FAQ() {
  return (
    <section id="home-faq" className="bg-white border-t">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-neutral-900">
          Frequently asked questions
        </h2>
        <div className="flex flex-col text-left md:gap-16">
          <Accordion.Root className="flex flex-col gap-2" multiple>
            {ACCORDION_ITEMS.map((item, index) => (
              <Accordion.Item key={index} value={item.value}>
                <Accordion.ItemTrigger className="hover:underline">
                  <Span flex="1" className="items-center text-lg font-medium text-neutral-900">
                    {item.title}
                  </Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody className="text-neutral-500 text-justify">
                    {item.content}
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
