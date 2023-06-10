
import { useState } from "react";
import Progress from "./Progress";
function App() {
  const [password,setPassword] = useState("")
  return (
    <div className="App">
      <h3 className="text-center my-3">پسووردتو بزن</h3>
      <div className="form-group w-50 mx-auto mt-5 ">
        <input onChange={(e) => setPassword(e.target.value)} type="text"  className="form-control" placeholder="پسوورد شما"/>
      <Progress password={password}/>
      </div>
    </div>

  );
}

export default App;
