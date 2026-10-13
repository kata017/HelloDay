# ☀️ HelloDay

> A tiny moment of your day.

HelloDay is a playful, minimal daily widget designed to bring the most important moments of your day together in one simple view.

It combines a personal greeting, the current date and time, and live weather information in a lightweight, responsive interface.

The widget is designed to be easily embedded into a Notion dashboard while also serving as a small standalone portfolio project.

---

## ✨ Features

- 👋 Dynamic greeting based on the time of day
- 📅 Current date
- 🕐 Live clock
- 🌤️ Current weather
- 🌡️ Temperature in Celsius
- 📍 Automatic location detection
- 🏙️ Automatic city detection
- 🌙 Day / night weather icons
- 🎨 Minimal, transparent design
- 📱 Responsive layout
- ✨ Subtle weather animation
- ♿ Reduced-motion support
- ⚠️ Location permission handling

---

## 🎯 Project Goals

HelloDay is intentionally a small project, but it focuses on creating a polished user experience.

The main goals are:

- Create a simple and enjoyable daily interface
- Explore minimal UI/UX design
- Work with live weather data
- Use browser geolocation
- Build a responsive and reusable widget
- Create a component that can be embedded into Notion
- Practice working with external APIs
- Practice deploying and maintaining a small web project
- Create a polished piece for the Kata-App portfolio

---

## 🎨 Design

The visual direction of HelloDay is:

- Minimal
- Playful
- Clean
- Friendly
- Lightweight
- Transparent

The widget is designed to blend naturally into its surrounding environment rather than looking like a separate application.

### Visual hierarchy

The main information hierarchy is:

1. Greeting
2. Current date
3. Current time
4. Weather
5. Location

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Primary | `#2B2730` | Main text |
| Secondary | `#77727D` | Secondary text |
| Muted | `#A8A2AC` | Supporting text |
| Accent | `#C9789A` | Greeting accent |
| Sun | `#F4C95D` | Sunny weather |
| Rain / Cold | `#82A9C9` | Weather accents |

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- Open-Meteo API
- BigDataCloud Reverse Geocoding API
- Browser Geolocation API
- Git
- GitHub
- GitHub Pages

---

## 🌤️ Weather

Weather data is provided by the [Open-Meteo API](https://open-meteo.com/).

HelloDay uses the current weather information provided by Open-Meteo, including:

- Temperature
- Weather condition
- Day / night status

No API key or backend is required.

---

## 📍 Location

HelloDay uses the browser's Geolocation API to determine the user's approximate location.

The coordinates are then used to:

1. Retrieve the city name using the BigDataCloud Reverse Geocoding API
2. Retrieve local weather information from Open-Meteo

Location access is optional. If permission is denied or unavailable, HelloDay displays a friendly fallback state instead of breaking the widget.

---

## 🚀 Deployment

HelloDay is designed to be deployed using **GitHub Pages**.

Once deployed, the widget will be available as a standalone web page and can also be embedded into a Notion dashboard.

---

## 🗺️ Roadmap

### v1.0 — HelloDay

- [x] Create initial UI
- [x] Implement dynamic greeting
- [x] Add live clock
- [x] Add current date
- [x] Integrate weather API
- [x] Add weather icons
- [x] Add automatic location detection
- [x] Add city detection
- [x] Make the widget responsive
- [x] Add subtle animations
- [x] Add location permission handling
- [ ] Deploy to GitHub Pages
- [ ] Embed into Notion

### Future ideas

- [ ] Light / dark theme
- [ ] Customizable name
- [ ] Daily quote / thought
- [ ] More detailed weather information
- [ ] Additional personalization options

---

## 📸 Preview

HelloDay is live and available as a standalone web widget.

🚀 **[Open HelloDay](https://kata017.github.io/HelloDay/)**

The widget can also be embedded into a Notion dashboard.

---

## 💡 Inspiration

HelloDay started as a simple idea for a transparent weather widget in a Notion dashboard.

Instead of creating just another weather widget, the concept evolved into a small daily companion combining **time, weather and a personal welcome**.

The project is also an opportunity to explore how a simple utility can become a more engaging experience through thoughtful UI/UX design, subtle interactions and personalization.

---

## 📁 Project Structure

```text
HelloDay/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   └── icons/
│
└── README.md
```
---

## 👩‍💻 About

HelloDay is a portfolio project created by **Kata-App**.

It explores the intersection of:

**UI/UX · Frontend Development · APIs · Interaction Design**

The project is designed and developed as part of the Kata-App portfolio, with a focus on creating small, polished digital experiences.

---

## 📄 License

This project is created for portfolio and learning purposes.

