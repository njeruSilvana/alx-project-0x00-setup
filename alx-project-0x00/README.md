# ALX Project 0x00 - Next.js Setup

A Next.js application demonstrating component-based architecture, TypeScript integration, and Tailwind CSS styling. This project showcases reusable components including Cards, Pills, and Buttons with various size and shape configurations.

##  Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Learning Objectives](#learning-objectives)
- [Author](#author)

##  Project Overview

This project is part of the ALX Software Engineering program, focusing on modern web development practices using Next.js, TypeScript, and Tailwind CSS. It demonstrates the creation and usage of reusable React components with proper TypeScript typing and responsive design.

##  Features

- **Reusable Components**: Modular Button, Card, and Pill components
- **TypeScript Integration**: Fully typed components with interfaces
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Multiple Button Variants**: 9 different button configurations (3 sizes × 3 shapes)
- **Page Routing**: Multiple pages using Next.js Pages Router
- **Clean Architecture**: Organized folder structure for scalability

##  Tech Stack

- **Framework**: Next.js 13+ (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Project Structure


alx-project-0x00/
├── components/
│   ├── Button.tsx       # Reusable button component
│   ├── Card.tsx         # Property card component
│   └── Pill.tsx         # Tag/label pill component
├── interfaces/
│   └── index.tsx        # TypeScript interfaces and types
├── pages/
│   ├── _app.tsx         # Custom App component
│   ├── _document.tsx    # Custom Document
│   ├── index.tsx        # Home page
│   ├── landing.tsx      # Landing page with components
│   └── about.tsx        # About page
├── public/
│   └── assets/
│       └── images/      # Static images
├── styles/
│   └── globals.css      # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md


##  Installation

### Prerequisites

- Node.js (v14 or higher)
- npm 

### Setup Instructions

1. **Clone the repository**
   
   git clone https://github.com/YOUR_USERNAME/alx-project-0x00-setup.git
   cd alx-project-0x00-setup/alx-project-0x00
  

2. **Install dependencies**
  
   npm install
   

3. **Run the development server**
  
   npm run dev -- -p 3000
  

4. **Open your browser**
 
   http://localhost:3000
  

##  Usage

### Running the Application


# Development mode
npm run dev -- -p 3000

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint


### Accessing Different Pages

- **Home Page**: `http://localhost:3000`
- **Landing Page**: `http://localhost:3000/landing`
- **About Page**: `http://localhost:3000/about`

Made by Silvana Njeru🦾