const SectionContent = ({ children, className = "" }) => (
  <div
    className={`max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 ${className}`}
  >
    {children}
  </div>
);

export default SectionContent;
