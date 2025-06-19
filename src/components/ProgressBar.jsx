const ProgressBar = ({ percentage }) => (
    <div className="w-full bg-gray-300 h-2 rounded-xl mt-10 mb-7">
      <div
        className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] h-2 rounded-xl transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
  
  export default ProgressBar;