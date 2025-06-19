const LessonItem = ({ lesson, completed, onComplete }) => (
  <div className="flex items-center justify-between py-3 border-b">
    <span className={`text-sm font-medium mr-1 ${completed ? "line-through text-gray-500" : ""}`}>{lesson.title}</span>
    <button
      onClick={onComplete}
      className={`text-xs py-2 cursor-pointer rounded text-nowrap ${completed ? "bg-green-500 px-4" : "bg-gray-300 px-2"}`}
    >
      {completed ? "Done" : "Mark Complete"}
    </button>
  </div>
);

export default LessonItem;