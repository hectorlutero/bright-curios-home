import React from 'react';
import { AlertCircle, Clock, Brain, Lock } from 'lucide-react';
import './Problems.css';

const Problems: React.FC = () => {
  const problems = [
    {
      title: 'The Talent Gap',
      description: 'Hiring elite AI engineers is slow and expensive. We provide the expertise of the top 1% without the $300k/year overhead.',
      icon: <AlertCircle size={24} />
    },
    {
      title: 'The Speed Tax',
      description: 'In the AI era, a 12-month cycle is a death sentence. By the time you ship, the tech is obsolete. We ship in 30 days.',
      icon: <Clock size={24} />
    },
    {
      title: 'The Logic Gap',
      description: "A ChatGPT subscription isn't a solution. You need custom logic trained on your specific business data and margins.",
      icon: <Brain size={24} />
    },
    {
      title: 'The Privacy Breach',
      description: 'Public AI models leak your trade secrets. We build private, secure environments where your data remains 100% yours.',
      icon: <Lock size={24} />
    }
  ];

  return (
    <section className="problems section-padding">
      <div className="container">
        <div className="section-title">
          <h2>The $100k In-house Trap</h2>
          <p>Why most companies fail to implement AI effectively on their own.</p>
        </div>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
