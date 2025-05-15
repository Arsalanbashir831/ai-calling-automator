
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What happens when I reach my monthly call limit?",
    answer:
      "When you reach your monthly call limit, you have two options: upgrade to a higher tier plan or wait until your plan resets in the next billing cycle. We'll notify you when you're approaching your limit so you can plan accordingly.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade your plan at any time and the changes will take effect immediately. If you downgrade, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "How do AI voice customizations work?",
    answer:
      "With our Pro and Business plans, you get access to advanced AI voice options. You can select from our premium voice library or customize parameters like tone, pace, and regional accents to match your brand identity.",
  },
  {
    question: "What kind of support can I expect?",
    answer:
      "Free tier users receive community support and limited email assistance. Pro users get priority email and chat support with faster response times. Business customers enjoy dedicated support channels including phone support and a dedicated account manager.",
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer:
      "Our monthly plans are paid month-to-month with no long-term commitment required. Annual plans are billed once per year. Business plans may have custom terms based on your organization's needs.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Our Pro plan includes a 14-day free trial with full access to all Pro features. No credit card is required to start. At the end of the trial, you can choose to subscribe or you'll be automatically downgraded to the Free tier.",
  },
];

const PricingFaq = () => {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
            <AccordionTrigger className="text-lg hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PricingFaq;
