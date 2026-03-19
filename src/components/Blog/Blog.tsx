import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Blog.css';

const posts = [
  {
    category: "AI Strategy",
    title: "Why 90% of Internal AI Projects Fail and How to Be the 10%",
    excerpt: "Most companies treat AI as a tech upgrade rather than an operational overhaul. Here's our blueprint for successful deployment.",
    date: "Mar 12, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Operations",
    title: "The ROI of Automation: Analyzing High-Velocity Workflows",
    excerpt: "Measuring the real impact of AI agents on your bottom line requires more than just counting hours saved.",
    date: "Mar 08, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Tech Trends",
    title: "Private LLMs: Securing Your Corporate Intelligence",
    excerpt: "How to leverage state-of-the-art models without exposing your proprietary data to the public web.",
    date: "Mar 02, 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header center">
          <span className="tag cyan">Insights</span>
          <h2 className="section-title">Latest from <br />Bright Curios</h2>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="blog-card"
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="read-more">Read Entry <ArrowRight size={16} /></span>
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
