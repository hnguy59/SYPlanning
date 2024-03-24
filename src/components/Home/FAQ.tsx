import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'

export default function FAQ() {
  return (
    <section id="home-faq" className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-neutral-900">
          Frequently asked questions
        </h2>
        <div className="flex flex-col text-left md:gap-16">
          <Accordion allowToggle allowMultiple>
            <AccordionItem>
              <h3 className="flex items-center text-lg font-medium text-neutral-900">
                <AccordionButton className="flex justify-between items-center">
                  How long does it take to obtain a Development Approval from Council?
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel>
                <p className="text-neutral-500">
                  The time required to obtain approval from initial consultation to development
                  approval will usually take months or more than a year (if it is a complex and
                  sizable project). However, given the current shortage of development professionals
                  within the private sector, and the lack of Council planners, many projects are
                  anticipated to require 6 months to design and obtain approval for your proposed
                  development.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h3 className="flex items-center text-lg font-medium text-neutral-900">
                <AccordionButton className="flex justify-between items-center">
                  Can you guarantee Development Approval?
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel>
                <p className="text-neutral-500">
                  While I have achieved 100% approval rate thus far. I cannot guarantee that all
                  projects will be approved by Council. However, I will endeavour identify and
                  inform you of all “red flags” prior to engaging project specialists to save costs.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h3 className="flex items-center text-lg font-medium text-neutral-900">
                <AccordionButton className="flex justify-between items-center">
                  Which Council Local Government Areas do you service?
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel>
                <p className="text-neutral-500">
                  Given the nature of the NSW Planning System, I can provide town planning services
                  for any property within the New South Wales. Specifically, I have completed
                  development assessments over a large number of Council areas including the Moree
                  Plains Shire Council, Lismore City Council, Liverpool City Council, Ballina Shire
                  Council, Tweed Shire Council, Northern Beaches Council, Inner West Council and
                  many more.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h3 className="flex items-center text-lg font-medium text-neutral-900">
                <AccordionButton className="flex justify-between items-center">
                  How can I meet you?
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel>
                <p className="text-neutral-500">
                  As I operate the business from my home in Queensland, the best way to meet would
                  be via a Teams or Zoom meeting. The best way to be in touch would be to call me on
                  0432 823 351, or complete the “contact” form below.
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
