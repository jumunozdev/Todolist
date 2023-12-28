function TodoForm() {
  return (
    <form>
      <div className="flex justify-center items-center px-6 relative z-10 flex-grow">
        <input
          className=" w-96 border bg-gray-500 border-gray-400 mr-2 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-700 text-white placeholder-gray-300"
          placeholder="Escribe la tarea"
        />
        <button className="w-24 bg-blue-500 hover:bg-blue-300 font-inter text-white font-regular py-2 px-4 rounded inline-flex items-center justify-center">
          <span className="mr-2">Crear</span>
          <svg
            className="h-6 w-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
