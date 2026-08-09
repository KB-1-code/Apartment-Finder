# Apartment Finder

## 1. Project Overview

Apartment Finder is a web-based property management and apartment discovery system developed using React.js.

The system is designed to connect property owners with potential tenants. Property owners can create and manage property listings, while tenants can browse available properties, select properties they are interested in, and communicate with property owners.

The application provides separate functionality for two types of users:

- Property Owners
- Tenants

---

## 2. Main Features

### User Authentication

- User registration
- User login
- Password authentication
- Role selection during registration
- Owner and tenant account types
- Session-based login state

### Property Owner Features

- Owner dashboard
- Create property listings
- Add property name, image, rooms, price, and description
- View created properties
- Delete property listings
- View properties selected by tenants
- Communicate with tenants

### Tenant Features

- Tenant dashboard
- View available properties
- View property details
- Select properties
- View selected properties
- Remove selected properties
- View property owners
- Communicate with property owners

### Other Features

- Interactive apartment location map
- About page
- Responsive navigation sidebar
- Owner and tenant navigation menus
- Local storage for application data
- Session storage for current user information

---

## 3. Technologies Used

The project uses the following technologies:

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- React Icons
- React Leaflet
- Leaflet
- Browser Local Storage
- Browser Session Storage
- Git
- GitHub
- Visual Studio Code

---

## 4. Project Structure

```text
card-component-v1/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Messages/
│   │   │   ├── OwnerMessage.js
│   │   │   ├── OwnerMessage.css
│   │   │   ├── TenantMessage.js
│   │   │   └── TenantMessage.css
│   │   │
│   │   ├── SignupAndLogin/
│   │   │   ├── LoginPage.js
│   │   │   └── SignupPage.js
│   │   │
│   │   ├── sidebars/
│   │   │   ├── OwnerSidebarData.js
│   │   │   └── TenantSidebarData.js
│   │   │
│   │   ├── CardMaker.js
│   │   ├── CardMaker.css
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── TenantCard.js
│   │   ├── TenantCard.css
│   │   ├── TenantView.js
│   │   └── TenantView.css
│   │
│   ├── HomeAndAbout/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── TenantHome.js
│   │   ├── TenantHome.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Map.js
│   │   └── Map.css
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
