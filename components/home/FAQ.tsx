"use client";
import { FAQS } from "@/config/faqs";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";

const FAQ = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">FAQs</h2>
        <p className="text-large text-default-500">
          Here are some of the most frequently asked questions.
        </p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3"
        itemClasses={{
          base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
          title: "font-medium",
          trigger: "py-6",
          content: "pt-0 pb-6 text-base text-default-500",
        }}
        items={FAQS}
        selectionMode="multiple"
        variant="splitted"
      >
        {FAQS.map((item) => (
          <AccordionItem
            key={item.title}
            indicator={<PlusIcon />}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;