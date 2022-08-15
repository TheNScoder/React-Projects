 import React, { useState } from "react";

 const App = () => {
    const [result, setResult] = useState("Hii");
    return(
        <>
        <div className="container">
            <form>
                <input type="text" value={result} />
            </form>
            
        </div>
        
        </>
    );
 }
 export default App;
 