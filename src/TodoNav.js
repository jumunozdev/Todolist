function TodoNav() {
    return (
        <nav className="bg-gray-900 flex items-center justify-center h-40">
            <svg className="h-10 w-10 mr-4 text-blue-500  "  fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
  <path    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
</svg>

            <h1 className="text-indigo-500 font-black text-5xl "> TO DO LIST </h1>
        </nav>       
    );
  }
  
  export { TodoNav };