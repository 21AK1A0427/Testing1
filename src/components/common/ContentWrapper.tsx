// src/components/common/ContentWrapper.tsx
import './ContentWrapper.css';

const ContentWrapper = ({ children }) => {
  return (
    <main className="content-wrapper">
      {children}
    </main>
  );
};

export default ContentWrapper;