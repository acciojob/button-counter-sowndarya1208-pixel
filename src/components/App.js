
import React from "react";
import './../styles/App.css';


        {/* Do not remove the main div */}
    function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <div>
        <h1>Button clicked {count} times</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          onClick me
        </button>
      
      </div>
     
    </>
  )
}

export default App
    </div>
  )
}

export default App
