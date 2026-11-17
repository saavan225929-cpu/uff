# AURELIA — Fine Art Gallery & Museum

A modern, responsive, museum-grade **Online Art Gallery Website** built with **React.js**, **Vite**, **HTML5**, **CSS3**, and **JavaScript**.

Inspired by world-renowned institutions like The Louvre, The Met, and the Uffizi Gallery, Aurelia showcases centuries of human artistic achievement with a cream, parchment, and burnished-gold aesthetic.

---

## 🌟 Project Features

### 1. Complete 10-Page Architecture
- **Page 1 – Login Page (`/login`)**:
  - Email and password input fields with clean floating validation.
  - Show/Hide password toggle.
  - Interactive "Instant Demo Sign In" button for rapid evaluation.
  - Direct links to SignUp and Home.
  - Atmospheric dark Renaissance backdrop with subtle blur.
- **Page 2 – SignUp Page (`/signup`)**:
  - Full Name, Email, Password, and Confirm Password fields.
  - Show/Hide password toggles for both fields.
  - Real-time client-side validation (format, length matching).
  - Public heritage visitor agreement checkbox.
  - Direct link back to Login.
- **Page 3 – Gallery Home Page (`/`)**:
  - Grand Hero Section with deep atmospheric Van Gogh backdrop and gold typography.
  - Museum quick statistics bar (Movements, Public Domain, Ultra-HD, 24/7 Access).
  - **Hall of Masterpieces**: Direct portal cards to the 5 iconic masterworks.
  - **Curator’s Selection**: Featured artwork cards with hover animations.
  - **Popular Art Categories**: Renaissance, Post-Impressionism, Surrealism, and Baroque deep-dive cards.
  - **The Digital Museum Experience**: Audio guides, historical connections, and open heritage principles.
  - Philosophical quotes from Leonardo da Vinci and Vincent van Gogh.
  - Call to Action for patron membership.
- **Page 4 – Art Display Page (`/gallery`)**:
  - Collection grid featuring **12 masterworks** (exceeding the 10 artwork requirement).
  - Real-time Search input (filters by artwork title, artist, movement, or year).
  - **Category Pills**: Quick filter by *All*, *Renaissance*, *Post-Impressionism*, *Surrealism*, *Expressionism*, *Baroque*, *Impressionism*, *Art Nouveau*, *Romanticism*, and *Japanese Ukiyo-e*.
  - **Sort Dropdown**: Curator's Highlights, Chronological Oldest First, Chronological Newest First, Title A–Z.
  - **Curated Favorites Mode**: Toggle between all collection items and saved personal favorites.
  - Clean empty-state handling with one-click filter reset.
- **Pages 5–9 – Five Dedicated Individual Artwork Pages**:
  1. **Mona Lisa – Leonardo da Vinci** (`/artwork/mona-lisa` or `/mona-lisa`)
  2. **The Starry Night – Vincent van Gogh** (`/artwork/starry-night` or `/starry-night`)
  3. **The Persistence of Memory – Salvador Dalí** (`/artwork/persistence-of-memory` or `/persistence-of-memory`)
  4. **The Scream – Edvard Munch** (`/artwork/the-scream` or `/the-scream`)
  5. **Girl with a Pearl Earring – Johannes Vermeer** (`/artwork/girl-with-pearl-earring` or `/girl-with-pearl-earring`)
  - *Each Individual Page contains:*
    - High-resolution artwork picture with full-screen zoom / lightbox modal.
    - Artwork title, artist name, and active years.
    - Year of creation and movement badge.
    - Detailed overview and historical genesis.
    - Compositional and technical analysis (sfumato, impasto, chiaroscuro).
    - Physical specifications table: Medium, Dimensions, Movement, Permanent Collection Location.
    - Interactive Curatorial Audio Guide simulator.
    - Add to Curations / Favorite button and URL share button.
    - **2–3 Similar Artworks** from the same category with direct links.
    - Quick navigation link back to the gallery.
- **Page 10 – About Us Page (`/about`)**:
  - Museum history and digital sanctuary mission since 1892.
  - 3-pillar philosophical purpose: Democratization, Open Heritage, and Deep Art Literacy.
  - Curatorial board showcase with curator bios and specialties.
  - Physical location and visiting hours in Paris.
  - Interactive curatorial inquiry contact form with instant submission confirmation.

---

## 🎨 Design System

- **Color Palette**:
  - Backgrounds: Warm Museum Cream (`#FAF7F2`), Pure Canvas White (`#FFFFFF`), Parchment (`#F2EBE1`), Dark Salon (`#14110F`).
  - Text: Rich Charcoal Umber (`#1F1916`), Warm Muted Grey (`#5C524C`, `#8A7F78`).
  - Accents: Burnished Gold (`#C5A059`, `#DFC488`, `#9A7736`).
- **Typography**:
  - Headlines: *Cormorant Garamond* (Google Fonts serif).
  - Body & UI: *Plus Jakarta Sans* (Google Fonts sans-serif).
- **Responsive Layout**:
  - Fully responsive across Desktop, Tablet, and Mobile devices.
  - Mobile slide-out drawer menu with direct links to all exhibition halls.

---

## 💻 How to Run in VS Code

### Step 1: Open Folder in VS Code
1. Launch **Visual Studio Code**.
2. Select **File** → **Open Folder...** (or press `Ctrl+K Ctrl+O`).
3. Select this project directory (`uff`).

### Step 2: Open Terminal in VS Code
1. Press `Ctrl + ~` (or select **Terminal** → **New Terminal** from the top menu).

### Step 3: Run the Development Server
You can run it directly from the root directory:
```bash
npm run dev
```
*(Or navigate into `frontend` and run:)*
```bash
cd frontend
npm run dev
```

### Step 4: Open in Your Browser
Click on the local URL shown in your terminal (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 📁 Suggested Folder Structure

```
uff/
├── package.json                 # Root script runner
├── README.md                    # Documentation
└── frontend/
    ├── index.html               # Main HTML entry with Google Fonts
    ├── vite.config.js           # Vite configuration
    ├── package.json             # Dependencies (React, React Router, Lucide Icons)
    └── src/
        ├── components/
        │   ├── Navbar.jsx       # Header navigation with mobile drawer & patron menu
        │   ├── Footer.jsx       # Museum footer with newsletter & contact info
        │   ├── ArtworkCard.jsx  # Reusable artwork card with hover effects & favorites
        │   ├── ArtworkDetailView.jsx # Reusable masterpiece detail layout
        │   └── Toast.jsx        # Notification alert pill
        ├── pages/
        │   ├── Home.jsx         # Page 3: Gallery Home Page
        │   ├── Gallery.jsx      # Page 4: Art Display Collection Page
        │   ├── MonaLisa.jsx     # Page 5: Mona Lisa
        │   ├── StarryNight.jsx  # Page 6: The Starry Night
        │   ├── PersistenceOfMemory.jsx # Page 7: The Persistence of Memory
        │   ├── TheScream.jsx    # Page 8: The Scream
        │   ├── GirlWithPearlEarring.jsx # Page 9: Girl with a Pearl Earring
        │   ├── ArtworkDetail.jsx# Generic artwork detail route for other collection items
        │   ├── About.jsx        # Page 10: About Us Page
        │   ├── Login.jsx        # Page 1: Login Page
        │   └── Signup.jsx       # Page 2: SignUp Page
        ├── context/
        │   └── AuthContext.jsx  # Authentication, User State & Saved Favorites in localStorage
        ├── data/
        │   └── artworks.js      # 12 museum masterworks data & categories
        ├── App.jsx              # Main routing hub
        ├── main.jsx             # React DOM entry point
        └── index.css            # Grand Museum CSS Design System
```

---

## 🛠️ Tech Stack
- **React 18**
- **Vite 5**
- **React Router DOM 6**
- **Lucide React** (icons)
- **HTML5 & CSS3** (Vanilla CSS Design System, zero third-party UI framework bloat)
- **Local Storage API** (persistent user authentication session & favorites)
