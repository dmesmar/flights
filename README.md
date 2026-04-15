# Flights Search

A local, browser-based frontend for searching and browsing flight results returned by a Python backend. Just an HTML file.

## Features

- Search flights by date range, day of week, origin/destination airports, and max stops
- Multi-airport origin/destination selection with smart filtering (routes that actually exist)
- Save and name individual flights or full searches for later
- Import/export results as JSON
- Return flight search support
- Live log viewer connected to the Python backend (dev mode)
- Dark / light theme, persisted across sessions

## Project structure

```
├── index.html        # Entry point: open this in your browser
├── style.css         # All styles + light/dark theme tokens
├── app.js            # Main logic: search, tabs, log viewer, theme/dev toggle
├── airports.js       # Airport data (IATA codes, cities, countries)
├── iata_routes.js    # Available routes data (derived from iata_routes.json)
├── iata_routes.json  # Raw routes JSON
├── filters.js        # Filtering, sorting, and route tab logic
├── render.js         # Flight card and result rendering utilities
├── saved.js          # Saved flights and saved searches management
└── return.js         # Return flight search logic
```

## Usage

1. Open `index.html` in your browser (double-click or use *Open with…*).
2. Pick dates, airports, and filters, then click **Buscar vuelos**.

> If you open the page without the backend running, the search will fail with a connection error. All other UI features (saved flights, theme, import) work offline.

### Dev mode

Click the 🔧 **Dev** button in the header to reveal the **Logs** tab, which polls the backend every 2 seconds and displays real-time log output with level filtering (Error / Info / Verbose / Debug).

### Import results

If you have a previously exported JSON result file, click **Importar resultados** to load it directly into the UI without running a new search.

## Local development

No bundler or package manager is required. Edit the `.js` / `.css` files and refresh the browser. All scripts are loaded as plain `<script>` tags in `index.html`.

The design was done by Claude as I wasn't feeling like coding that part, that's why it looks so generic.