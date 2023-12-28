
function TodoList({children}) {
  return (

    <nav className="bg-zinc-700 flex items-center justify-center flex-grow">
      <ul>
      {children}
    </ul>
    </nav>    
    
  );
}

export { TodoList };

