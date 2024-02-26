// IMPORT DEP
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";

// Import com
import ComponentWithTimeTracking from "./components/ComponentWithTimeTracking";
import { SettingsForm } from "./components/SettingsForm";
import { useUserSettings } from "./components/UserSettingsContext";
import { Tooltip } from "react-tooltip";
import { Routes, Route } from 'react-router-dom';
import { About } from "./Pages/AboutUS";



function App() {
  const { settings } = useUserSettings();

  return (
    <>
      <div className={`App ${settings.theme}`}>
        <h1>User Settings</h1>
        <p>Theme: {settings.theme}</p>
        <p>Language: {settings.language}</p>
        <SettingsForm />
        {/* Time Tracker */}
        <ComponentWithTimeTracking />
        {/* Tooltip */}
        <a className="my-anchor-element">🤔</a>
        <a className="my-anchor-element">🤔</a>
        <a className="my-anchor-element">🤔</a>
        <Tooltip anchorSelect=".my-anchor-element" place="top">
          Hello world!
        </Tooltip>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
