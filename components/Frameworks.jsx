const FrameWorks = ({ frameworks }) => (
  <div className="flex">
    {frameworks.map((item) => (
      <div
        key={item.name}
        className={`py-1 px-2 mt-4 mr-2 text-xs rounded-full flex ${item.color}`}
      >
        {item.name}
      </div>
    ))}
  </div>
);

export default FrameWorks;
