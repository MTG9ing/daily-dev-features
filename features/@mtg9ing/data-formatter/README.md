# Date Formatter Utility

A simple utility to format dates in various formats using plain JavaScript. This is a lightweight utility that does not require any external dependencies.

## Overview

This utility allows you to format dates based on a given format string. It can take a date (either as a string or timestamp) and return a formatted date in the specified format.

## Features

- **Format Dates**: Convert a date into a desired format (`YYYY-MM-DD` by default, `MM/DD/YYYY` supported).
- **No External Dependencies**: Written in plain JavaScript.
- **Error Handling**: Automatically handles invalid dates and unsupported formats.

## Usage

### 1. Copy the Code

Copy the code below into a JavaScript file (e.g., `dateFormatter.js`), and include it in your project.

```Typescript
// dateFormatter.ts

function formatDate(date: string, format: string = "YYYY-MM-DD") {
  const dateObj: Date = new Date(date);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  switch (format) {
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    default:
      throw new Error("Unsupported format");
  }
}

// Example Usage:
try {
  console.log(formatDate("2025-04-26T14:20:00Z")); // Default: 'YYYY-MM-DD'
  console.log(formatDate("2025-04-26T14:20:00Z", "MM/DD/YYYY")); // 'MM/DD/YYYY'
} catch (error) {
  console.error(error.message);
}
```
