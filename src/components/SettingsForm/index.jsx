// SettingsForm.js
import React, { useState } from 'react';
import { useUserSettings } from '../UserSettingsContext';


export const SettingsForm = () => {
  const { settings, updateSettings } = useUserSettings();
  const [theme, setTheme] = useState(settings.theme);
  const [language, setLanguage] = useState(settings.language);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings({ theme, language });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Theme:
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Language:
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

