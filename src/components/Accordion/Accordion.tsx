import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './Accordion.css';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion-item glass-panel ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" onClick={onClick}>
        <span>{title}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-content"
          >
            <div className="accordion-content-inner">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "The Talent Gap",
      content: "Hiring elite AI engineers is slow and expensive. We provide the expertise of the top 1% without the $300k/year overhead."
    },
    {
      title: "The Speed Tax",
      content: "In the AI era, a 12-month development cycle is a death sentence. We ship functional MVPs in less than 30 days."
    },
    {
      title: "The Privacy Breach",
      content: "Public AI models leak your trade secrets. We build private, secure environments where your data remains 100% yours."
    }
  ];

  return (
    <section className="accordion-section container">
      <h2 className="section-title">The $100k In-house Trap</h2>
      <div className="accordion-container">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Accordion;
