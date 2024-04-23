import * as Accordion from '@radix-ui/react-accordion';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function AccordionComponent() {
  const accordionExampleData = [
    {
      trigger: 'Accordion first Item',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil atque pariatur! Perferendis molestiae repellendus rem aspernatur praesentium, maiores asperiores nisi culpa beatae aperiam deleniti tempora?',
    },
    {
      trigger: 'Accordion second Item',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil atque pariatur! Perferendis molestiae repellendus rem aspernatur praesentium, maiores asperiores nisi culpa beatae aperiam deleniti tempora?',
    },

    {
      trigger: 'Accordion third Item',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nihil atque pariatur! Perferendis molestiae repellendus rem aspernatur praesentium, maiores asperiores nisi culpa beatae aperiam deleniti tempora?',
    },
  ];
  return (
    <Accordion.Root
      type="single"
      className="rounded-md shadow-md m-2"
      defaultValue="0"
      collapsible
    >
      {accordionExampleData.map(({ trigger, content }, i) => (
        <Accordion.Item value={`${i}`} key={i}>
          <Accordion.Header>
            <Accordion.Trigger className="px-4 py-3 group flex flex-row items-center justify-between w-full overflow-hidden first:mt-0 first:rounded-t last:rounded-b">
              <span>{trigger}</span>
              <MinusIcon className="h-5 w-5 group-data-[state=closed]:hidden" />
              <PlusIcon className="h-5 w-5 group-data-[state=open]:hidden" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 py-3 border-t-2 border-slate-100">
            {content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
