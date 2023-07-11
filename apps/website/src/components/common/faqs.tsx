import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@packages/ui/components';

export type TFAQs = Record<'id' | 'question' | 'answer', string>[];

interface IFAQs {
  faqs: TFAQs;
}

export default function FAQs({ faqs }: IFAQs) {
  return (
    <Accordion type='single' collapsible>
      {faqs.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger className='text-neutral-500 hover:no-underline'>
            {question}
          </AccordionTrigger>

          <AccordionContent className='text-BodyBASE mt-2'>
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
