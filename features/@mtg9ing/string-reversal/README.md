# 🔁 String Reversal Utility (TypeScript)

A simple TypeScript utility to reverse any given string. Fully typed and dependency-free.

---

## 📌 Overview

This utility takes a string as input and returns its reversed version. It's a helpful and lightweight function written in TypeScript for general-purpose use.

---

## ✨ Features

- ✅ Written in TypeScript with strong types
- 🔁 Reverses any string
- ⚠️ Handles invalid (non-string) input with clear error messages
- 🪶 No external libraries needed

---

## 💻 Usage

### 1. Copy the Code

Create a file called `stringReversal.ts` and add the following code:

```ts
export const reverseString = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str.split("").reverse().join("");
};
```
