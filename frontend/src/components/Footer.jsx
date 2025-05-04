import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} PneumoAI. All rights reserved.</p>
      </footer>
    );
  }
  