function TodoItem(props) {
  return (
    <li>
      <span>✔️</span>
      <label>
        <input
          type="radio"
          className="border border-blue-500 accent-blue-600 hover:bg-blue-100 focus:outline-none focus:border-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  text-emerald-400"
        />
        <svg
          className="h-6 w-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      </label>
      <p>{props.text}</p>
      <span>❌</span>
    </li>
  );
}

export { TodoItem };
