const THEME_KEY = "themePreference";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

// Get saved theme from localStorage or default to light theme
const getSavedTheme = () => {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem(THEME_KEY);
        return savedTheme || LIGHT_THEME;
    }
    return LIGHT_THEME; // Default, or if window is not defined
}

// Toggle theme between light and dark
const toggleTheme = () => {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

    setTheme(newTheme);
};

// Helper function to set theme
const setTheme = (newTheme) => {
    const container = document.getElementById("container");
    const currentTheme = document.getElementById("current-theme");
    const label = document.getElementById("theme-toggle-label");

    // Apply the new theme
    container.classList.remove(LIGHT_THEME, DARK_THEME);
    container.classList.add(newTheme);

    // Update the theme labels
    currentTheme.textContent = newTheme;
    label.textContent = newTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

    // Save the new theme to localStorage
    localStorage.setItem(THEME_KEY, newTheme);
};

// Bind the toggle theme button
document.getElementById("theme-toggle-button").addEventListener("click", toggleTheme);

// Apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);
});
