import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    /* Reminder:
    On traditional forms, this would have been done calling " false " on the onSubmit attribute.
    */
    // Prevent the default behavior, the page to be refreshed
    e.preventDefault(); 
    // Clear the input after the form submission
    setName(""); 
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            {/* Connect the label to the input field using the id.
                Reminder: Traditionally for is used but in react "for" is a reserved keyword. */}
            <label htmlFor="name">Name: </label>
            <input 
              id="name"
              type="text" 
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          {/* Disable the button if no name provided */}
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
