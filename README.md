# NoCache Chrome Extension

**NoCache** is a lightweight Chrome extension designed for developers and testers. It adds a unique query parameter (default: `nocache`) with a random hash to the current page's URL, forcing the browser to load a fresh version of the page and bypass the cache.

## Features

- **Instant Cache Busting**: Click the toolbar icon to immediately reload the page with a unique query parameter.
- **Customizable Parameter**: Change the query parameter name (e.g., `timestamp`, `v`) via the Options page.
- **Keyboard Shortcut**: Use `Ctrl+Shift+N` (`Command+Shift+N` on Mac) to trigger the extension without lifting your hands from the keyboard.
- **Context Menu**: Right-click on web pages to access "Open in Private Window" option.
- **Private Window Shortcut**: Use `Ctrl+Shift+X` (`Command+Shift+X` on Mac) to open the current page in a private window.
- **Visual Feedback**: A brief "OK" badge appears on the icon to confirm the action.

## Installation

1.  Clone or download this repository.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **Developer mode** in the top right corner.
4.  Click **Load unpacked**.
5.  Select the directory containing this extension.

## Usage

### Toolbar Icon
Click the **NoCache** icon in the Chrome toolbar. The current tab will reload with `?nocache=<random_hash>` appended to the URL.

### Keyboard Shortcut
Press `Ctrl+Shift+N` (`Command+Shift+N` on Mac) to trigger the extension. You can customize this shortcut in `chrome://extensions/shortcuts`.

### Context Menu
Right-click anywhere on a webpage (http/https) and select **Open in Private Window**. This will open the current page's URL in a new private (incognito) window.
> **Note**: This option is hidden on the New Tab page and other system pages (`chrome://`).

### Private Window Shortcut
Press `Ctrl+Shift+X` (`Command+Shift+X` on Mac) to open the current page in a private window. You can customize this shortcut in `chrome://extensions/shortcuts`.

## Configuration

1.  Right-click the extension icon and select **Options**.
2.  Enter your preferred query parameter name (e.g., `bust`).
3.  Click **Save**. The options page will automatically close upon success.

## License

MIT
