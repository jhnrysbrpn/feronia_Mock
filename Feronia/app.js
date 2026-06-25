// Feronia Wildlife Facility Management System - Vanilla JS App Engine

// INITIAL DATA SETTINGS (MOCK DATA)
const DEFAULT_STATE = {
  users: [
    { id: "USR-001", name: "Juan Dela Cruz", email: "juan.delacruz@feronia.org", role: "Admin", status: "Active", facility: "Main Facility", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" },
    { id: "USR-002", name: "Pedro Santos", email: "pedro.santos@feronia.org", role: "Keeper", status: "Active", facility: "Main Facility", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" },
    { id: "USR-003", name: "Dr. Maria Reyes", email: "maria.vet@feronia.org", role: "Veterinarian", status: "Active", facility: "Main Facility", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" }
  ],
  
  animals: [
    {
      id: "A01",
      name: "Slyther",
      species: "Ball Python",
      scientificName: "Python regius",
      morph: "Pastel Mojave",
      sex: "Male",
      age: "5 years old",
      class: "Adult",
      hatchDate: "2021-05-10",
      facility: "Main Facility",
      enclosure: "Reptile House - B1",
      status: "Under Treatment",
      weight: "1.2",
      length: "120",
      heartRate: "52",
      respRate: "18",
      temp: "28.5",
      acquiredDate: "2022-01-15",
      source: "Local Breeder",
      microchipId: "987 654 321 012 345",
      notes: "Started on antibiotic therapy. Monitor appetite and breathing.",
      type: "Individual",
      nextCheckup: "May 25, 2025 | 09:00 AM",
      healthHistory: [
        { date: "May 20, 2025", type: "Diagnosis", summary: "Respiratory Infection", notes: "Mild wheezing and nasal discharge. Prescribed Enrofloxacin.", performedBy: "Dr. Maria Reyes" },
        { date: "Jan 15, 2025", type: "Health Check", summary: "Annual Physical", notes: "No issues found. Good weight gain.", performedBy: "Dr. Maria Reyes" }
      ],
      feedingHistory: [
        { date: "2025-05-20", foodType: "Rat (Medium)", amount: "1 pc", performedBy: "Pedro Santos", status: "Fed" },
        { date: "2025-05-10", foodType: "Rat (Medium)", amount: "1 pc", performedBy: "Pedro Santos", status: "Fed" }
      ],
      cleaningHistory: [
        { date: "2025-05-22", type: "Spot Clean", performedBy: "Pedro Santos" }
      ],
      parentLineage: { male: "BP-M-001", female: "BP-F-002" },
      documents: [{ name: "Slyther_Acquisition_Permit.pdf", type: "Permit", date: "2022-01-15" }]
    },
    {
      id: "B02",
      name: "Ember",
      species: "Bearded Dragon",
      scientificName: "Pogona vitticeps",
      morph: "Leatherback",
      sex: "Female",
      age: "2 years old",
      class: "Adult",
      hatchDate: "2023-04-12",
      facility: "Main Facility",
      enclosure: "Rack A-01",
      status: "Under Treatment",
      weight: "0.45",
      length: "45",
      heartRate: "72",
      respRate: "24",
      temp: "31.2",
      acquiredDate: "2023-06-12",
      source: "Local Breeder",
      microchipId: "N/A",
      notes: "Diagnosed with metabolic bone disease. Supplementing daily calcium.",
      type: "Individual",
      nextCheckup: "May 28, 2025 | 10:30 AM",
      healthHistory: [
        { date: "May 22, 2025", type: "Treatment", summary: "Metabolic Bone Disease", notes: "Injectable calcium gluconate given.", performedBy: "Dr. Maria Reyes" }
      ],
      feedingHistory: [],
      cleaningHistory: []
    },
    {
      id: "C05",
      name: "Shadow",
      species: "Leopard Gecko",
      scientificName: "Eublepharis macularius",
      morph: "Mack Snow",
      sex: "Male",
      age: "1 year old",
      class: "Subadult",
      hatchDate: "2024-05-15",
      facility: "Main Facility",
      enclosure: "Rack C-01",
      status: "Monitoring",
      weight: "0.06",
      length: "22",
      heartRate: "88",
      respRate: "32",
      temp: "29.0",
      acquiredDate: "2024-07-10",
      source: "Self Bred",
      microchipId: "N/A",
      notes: "Shedding issues on toes. Keep moist hide damp.",
      type: "Individual",
      nextCheckup: "Jun 03, 2025 | 01:00 PM",
      healthHistory: [
        { date: "May 22, 2025", type: "Observation", summary: "Skin Shedding Issue", notes: "Assisted in removal of stuck shed on toes.", performedBy: "Pedro Santos" }
      ],
      feedingHistory: [],
      cleaningHistory: []
    },
    {
      id: "B05",
      name: "Viper",
      species: "Corn Snake",
      scientificName: "Pantherophis guttatus",
      morph: "Amelanistic",
      sex: "Male",
      age: "3 years old",
      class: "Adult",
      hatchDate: "2022-10-15",
      facility: "Main Facility",
      enclosure: "Rack B-01",
      status: "Recovered",
      weight: "0.32",
      length: "85",
      heartRate: "60",
      respRate: "20",
      temp: "27.5",
      acquiredDate: "2022-12-05",
      source: "Self Bred",
      microchipId: "N/A",
      notes: "Fully recovered from mild dehydration. Feeding normal.",
      type: "Individual",
      nextCheckup: "Jun 06, 2025 | 03:00 PM",
      healthHistory: [
        { date: "May 20, 2025", type: "Diagnosis", summary: "Mild Dehydration", notes: "Electrolyte soak done. Hydration returned.", performedBy: "Dr. Maria Reyes" }
      ],
      feedingHistory: [],
      cleaningHistory: []
    },
    {
      id: "T03",
      name: "Atlas",
      species: "African Spurred Tortoise",
      scientificName: "Centrochelys sulcata",
      morph: "Sulcata",
      sex: "Unknown",
      age: "6 months",
      class: "Hatchling",
      hatchDate: "2024-11-20",
      facility: "Main Facility",
      enclosure: "Terrarium 1",
      status: "Monitoring",
      weight: "0.25",
      length: "12",
      heartRate: "45",
      respRate: "12",
      temp: "29.8",
      acquiredDate: "2025-01-15",
      source: "Self Bred",
      microchipId: "N/A",
      notes: "Small hatchling. Activity level is good.",
      type: "Individual",
      nextCheckup: "May 23, 2025 | 09:00 AM",
      healthHistory: []
    },
    {
      id: "I07",
      name: "Ziggy",
      species: "Green Iguana",
      scientificName: "Iguana iguana",
      morph: "Red Iguana",
      sex: "Male",
      age: "4 years old",
      class: "Adult",
      hatchDate: "2021-03-05",
      facility: "Main Facility",
      enclosure: "Large Cage 3",
      status: "Under Treatment",
      weight: "2.8",
      length: "145",
      heartRate: "48",
      respRate: "16",
      temp: "32.0",
      acquiredDate: "2022-05-15",
      source: "Local Breeder",
      microchipId: "987 654 321 012 888",
      notes: "Healing well from skin scrape on left side.",
      type: "Individual",
      nextCheckup: "May 23, 2025 | 11:30 AM",
      healthHistory: []
    }
  ],

  enclosures: [
    { id: "ENC-BD-01", name: "Rack A-01", facility: "Main Facility", room: "Reptile Room 1", type: "Thermostat Rack", dimensions: "60 x 45 x 30 cm", temp: "32.5°C", humidity: "40%", occupants: ["B02"], capacity: 1, cleaningLog: [{ date: "2025-05-24", type: "Spot Clean", by: "Pedro Santos" }] },
    { id: "ENC-BP-02", name: "Rack A-02", facility: "Main Facility", room: "Reptile Room 1", type: "Thermostat Rack", dimensions: "100 x 50 x 40 cm", temp: "31.0°C", humidity: "55%", occupants: [], capacity: 1, cleaningLog: [] },
    { id: "ENC-BP-03", name: "Reptile House - B1", facility: "Main Facility", room: "Reptile Room 1", type: "Thermostat Rack", dimensions: "100 x 50 x 40 cm", temp: "28.5°C", humidity: "52%", occupants: ["A01"], capacity: 1, cleaningLog: [{ date: "2025-05-22", type: "Spot Clean", by: "Pedro Santos" }] },
    { id: "ENC-CS-01", name: "Rack B-01", facility: "Main Facility", room: "Reptile Room 1", type: "Standard Tub", dimensions: "60 x 40 x 20 cm", temp: "28.5°C", humidity: "50%", occupants: ["B05"], capacity: 1, cleaningLog: [] }
  ],

  breedingPairs: [
    {
      pairId: "LG-PAIR-002",
      species: "Leopard Gecko",
      maleId: "C05",
      femaleId: "C01",
      daysTogether: 6,
      stage: "Pre-Lay Signs",
      pairDate: "2025-05-24",
      notes: "Female showing active signs of carrying eggs.",
      introducedBy: "Juan Dela Cruz",
      location: "Rack C-01",
      timeline: [
        { step: 1, label: "Pairing", status: "Completed", completedDate: "2025-05-24", notes: "Pair introduced. Mating observed." },
        { step: 2, label: "Pre-Lay Signs", status: "Completed", completedDate: "2025-05-29", notes: "Female shows digging behavior." },
        { step: 3, label: "Egg Laying", status: "In Progress" },
        { step: 4, label: "Eggs in Incubation", status: "Upcoming" },
        { step: 5, label: "Hatching / Offspring", status: "Upcoming" },
        { step: 6, label: "Completed", status: "Upcoming" }
      ],
      forecast: { estEggLaying: "May 28 - Jun 1, 2025", estClutchSize: "2 - 4 eggs", estHatchWindow: "Jun 18 - Jul 02, 2025", successRate: "High (80 - 90%)" },
      clutches: []
    }
  ],

  inventory: [
    { id: "SUP-0001", name: "Calcium Powder", category: "Supplements", facility: "Main Facility", stock: 12, unit: "bottle", status: "In Stock", expiry: "2025-12-15", shelfLife: "200 days left", reorderLevel: 5, storageRequirement: "Dry Room Temperature", location: "Cabinet A", description: "Calcium powder with D3.", movements: [] },
    { id: "LIV-0002", name: "Live Mealworms", category: "Live Food", facility: "Insect Room", stock: 250, unit: "count", status: "In Stock", expiry: "2025-05-30", shelfLife: "21 days left", reorderLevel: 100, storageRequirement: "Refrigerated (4-8°C)", location: "Fridge 1", description: "Feeder insects.", movements: [] },
    { id: "VED-0004", name: "Collard Greens", category: "Vegetables", facility: "Main Cooler", stock: 6, unit: "bunch", status: "Low Stock", expiry: "2025-05-26", shelfLife: "17 days left", reorderLevel: 10, storageRequirement: "Refrigerated (2-5°C)", location: "Main Cooler", description: "Fresh greens.", movements: [], usageLast30Days: 14, dailyAverage: 0.47, reorderRecommendation: "10 bunch" }
  ],

  checkups: [
    { date: "2025-05-22", time: "09:00 AM", animalId: "A01", type: "Health Check", vet: "Dr. Maria Reyes", status: "Confirmed" },
    { date: "2025-05-22", time: "10:30 AM", animalId: "B02", type: "Treatment", vet: "Dr. Maria Reyes", status: "Confirmed" },
    { date: "2025-05-22", time: "01:00 PM", animalId: "C05", type: "Follow-up", vet: "Dr. Maria Reyes", status: "Pending" },
    { date: "2025-05-22", time: "03:00 PM", animalId: "B05", type: "Lab Review", vet: "Dr. Maria Reyes", status: "Pending" },
    
    // Future appointments
    { date: "2025-05-23", time: "09:00 AM", animalId: "T03", type: "Health Check", vet: "Dr. Maria Reyes", status: "Scheduled" },
    { date: "2025-05-23", time: "11:30 AM", animalId: "I07", type: "Follow-up", vet: "Dr. Maria Reyes", status: "Scheduled" },
    { date: "2025-05-24", time: "02:00 PM", animalId: "T03", type: "Treatment", vet: "Dr. Maria Reyes", status: "Scheduled" }
  ],

  careActivities: [
    { animalId: "A01", species: "Ball Python", activity: "Feeding", details: "Rat (Medium)", by: "Pedro Santos", date: "May 20, 2025" },
    { animalId: "B02", species: "Bearded Dragon", activity: "Treatment", details: "Calcium Gluconate", by: "Dr. Maria Reyes", date: "May 22, 2025" }
  ],

  priorityCases: [
    { targetId: "A01", type: "Animal", species: "Ball Python", issue: "Weight Loss", details: "Monitor weight and appetite", priority: "High", vet: "Dr. Maria Reyes Santos", date: "May 30, 2025" },
    { targetId: "B02", type: "Animal", species: "Bearded Dragon", issue: "Treatment Ongoing", details: "Antibiotic - Day 3 of 7", priority: "Medium", vet: "Dr. Maria Reyes Santos", date: "May 29, 2025" },
    { targetId: "Rack A-03", type: "Enclosure", species: "Enclosure", issue: "Humidity Too Low", details: "Increase humidity level", priority: "Low", vet: "Pedro Santos", date: "May 28, 2025" }
  ],

  treatments: [
    { id: "TRT-001", animalId: "A01", animalName: "Ball Python - Slyther (A01)", species: "Ball Python", diagnosis: "Respiratory Infection", plan: "Antibiotic + Supportive Care", startDate: "May 20, 2025", priority: "High", status: "Under Treatment" },
    { id: "TRT-002", animalId: "B02", animalName: "Bearded Dragon - Ember (B02)", species: "Bearded Dragon", diagnosis: "Metabolic Bone Disease", plan: "Calcium + UVB Therapy", startDate: "May 18, 2025", priority: "High", status: "Under Treatment" },
    { id: "TRT-003", animalId: "C05", animalName: "Leopard Gecko - Shadow (C05)", species: "Leopard Gecko", diagnosis: "Skin Shedding Issue", plan: "Topical Treatment", startDate: "May 19, 2025", priority: "Medium", status: "Monitoring" },
    { id: "TRT-004", animalId: "B05", animalName: "Corn Snake - Viper (B05)", species: "Corn Snake", diagnosis: "Mild Dehydration", plan: "Hydration Therapy", startDate: "May 21, 2025", priority: "High", status: "Under Treatment" },
    { id: "TRT-005", animalId: "I07", animalName: "Green Iguana - Ziggy (I07)", species: "Green Iguana", diagnosis: "Parasite Infection", plan: "Antiparasitic Treatment", startDate: "May 17, 2025", priority: "Medium", status: "Under Treatment" },
    { id: "TRT-006", animalId: "T03", animalName: "Sulcata Tortoise - Atlas (T03)", species: "Sulcata Tortoise", diagnosis: "Shell Damage", plan: "Wound Care", startDate: "May 16, 2025", priority: "Low", status: "Monitoring" }
  ]
};

// Application State Variables
let appState = {};
let currentTab = 'dashboard';
let currentRole = 'Keeper'; // Default role, overridden by page pathname
let selectedPatientId = 'A01';
let patientRecordTab = 'overview';
let calendarSelectedDate = '2025-05-22';
let checkupCalendarView = 'calendar'; // 'calendar' | 'list'
let keeperDashboardTaskFilter = 'all'; // 'all' | 'pending' | 'completed'
let treatmentsSearchQuery = '';
let treatmentsStatusFilter = 'All Status';
let treatmentsSpeciesFilter = 'All Species';
let treatmentsActiveFilter = 'Active';
let treatmentsActiveTab = 'active'; // 'active' | 'completed' | 'all'

// LocalStorage helpers
const STORAGE_KEY = "feronia_zero_framework_data";

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
  } else {
    try {
      appState = JSON.parse(stored);
      // Ensure daily tasks exist in state (for Keeper dashboard checklists)
      if (!appState.dailyTasks) {
        appState.dailyTasks = [
          { id: "task-001", name: "Feed Ball Python", details: "Rat (Medium)", enclosure: "Slyther (A01) - Rack A-03", type: "Feeding", time: "09:00 AM", status: "Pending" },
          { id: "task-002", name: "Clean Rack A-03", details: "Remove waste & sanitize", enclosure: "Rack A-03 (Reptile Room 1)", type: "Cleaning", time: "10:00 AM", status: "Pending" },
          { id: "task-003", name: "Water Change", details: "Rack B-02", enclosure: "Rack B-02 (Reptile Room 1)", type: "Water Change", time: "11:00 AM", status: "Pending" },
          { id: "task-004", name: "Daily Observation", details: "Leopard Gecko", enclosure: "Shadow (C05) - Rack B-01", type: "Observation", time: "09:30 AM", status: "Completed" },
          { id: "task-005", name: "Feed Corn Snake", details: "Mouse (Small)", enclosure: "Viper (B05) - Rack B-01", type: "Feeding", time: "08:00 AM", status: "Completed" },
          { id: "task-006", name: "Water Change", details: "Rack A-03", enclosure: "Rack A-03 (Reptile Room 1)", type: "Water Change", time: "08:30 AM", status: "Completed" },
          { id: "task-007", name: "Daily Observation", details: "Corn Snake", enclosure: "Viper (B05) - Rack B-01", type: "Observation", time: "08:15 AM", status: "Completed" },
          { id: "task-008", name: "Feed Bearded Dragon", details: "Crickets", enclosure: "Ember (B02) - Rack A-04", type: "Feeding", time: "10:30 AM", status: "Pending" },
          { id: "task-009", name: "Clean Rack B-01", details: "Sanitize tub and hide", enclosure: "Rack B-01 (Reptile Room 1)", type: "Cleaning", time: "11:30 AM", status: "Pending" },
          { id: "task-010", name: "Spot Clean Rack B-02", details: "Remove waste", enclosure: "Rack B-02 (Reptile Room 1)", type: "Cleaning", time: "01:00 PM", status: "Completed" },
          { id: "task-011", name: "Daily Observation", details: "Bearded Dragon", enclosure: "Ember (B02) - Rack A-04", type: "Observation", time: "02:00 PM", status: "Pending" },
          { id: "task-012", name: "Check Temp/Humidity", details: "All Incubators", enclosure: "Breeding Room", type: "Observation", time: "03:00 PM", status: "Completed" }
        ];
        saveState();
      }
      if (!appState.treatments) {
        appState.treatments = JSON.parse(JSON.stringify(DEFAULT_STATE.treatments));
        saveState();
      }
    } catch (e) {
      console.error("Failed to parse data, resetting", e);
      appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
      saveState();
    }
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

// Automatically detect page role and active tab hash
function detectRoleAndTab() {
  const path = window.location.pathname;
  if (path.includes('admin.html')) {
    currentRole = 'Admin';
  } else if (path.includes('keeper.html')) {
    currentRole = 'Keeper';
  } else if (path.includes('veterinarian.html')) {
    currentRole = 'Veterinarian';
  } else {
    currentRole = 'Keeper'; // Default fallback
  }

  // Set the body class
  document.body.className = `theme-${currentRole.toLowerCase()}`;

  const hash = window.location.hash;
  if (hash) {
    currentTab = hash.substring(1);
  } else {
    currentTab = 'dashboard';
  }
}

// APP INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  detectRoleAndTab();
  
  // Set window hash change listener for sub-tab routing
  window.addEventListener('hashchange', () => {
    detectRoleAndTab();
    renderAll();
  });

  renderAll();
});

function handleRoleChange(role) {
  // Overridden in multi-page: redirects to other pages
  if (role === 'Admin') location.href = 'admin.html';
  else if (role === 'Keeper') location.href = 'keeper.html';
  else if (role === 'Veterinarian') location.href = 'veterinarian.html';
}

// CORE RENDER METHOD
function renderAll() {
  renderSidebar();
  renderHeader();
  renderActivePage();
  lucide.createIcons(); // Instantly create Lucide SVG graphics!
}

// 1. SIDEBAR NAV RENDERING
function renderSidebar() {
  const sidebarNode = document.getElementById('sidebar-node');
  if (!sidebarNode) return;
  const currentUser = getCurrentUser();

  const getMenuItems = () => {
    switch (currentRole) {
      case 'Keeper':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
          { id: 'tasks', label: 'Tasks', icon: 'clipboard-list' },
          { id: 'enclosures', label: 'Enclosures', icon: 'box' },
          { id: 'care-logs', label: 'Care Logs', icon: 'file-text' },
          { id: 'reports', label: 'Reports', icon: 'file-text' },
          { id: 'settings', label: 'Settings', icon: 'settings' }
        ];
      case 'Veterinarian':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
          { id: 'medical-records', label: 'Medical Records', icon: 'folder-heart' },
          { id: 'checkups', label: 'Checkups', icon: 'calendar' },
          { id: 'treatments', label: 'Treatments', icon: 'activity' },
          { id: 'reports', label: 'Reports', icon: 'file-text' },
          { id: 'settings', label: 'Settings', icon: 'settings' }
        ];
      case 'Admin':
      default:
        return [
          { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
          { id: 'animals', label: 'Animal Management', icon: 'folder-heart' },
          { id: 'animal-care', label: 'Animal Care', icon: 'heart-handshake' },
          { id: 'breeding', label: 'Breeding', icon: 'git-merge' },
          { id: 'inventory', label: 'Inventory & Forecasting', icon: 'clipboard-list' },
          { id: 'reports', label: 'Reports', icon: 'file-text' },
          { id: 'users', label: 'User Management', icon: 'users' },
          { id: 'settings', label: 'Settings', icon: 'settings' }
        ];
    }
  };

  const menuItems = getMenuItems();
  
  let menuHtml = menuItems.map(item => `
    <li class="sidebar-menu-item">
      <a href="#${item.id}" class="sidebar-link ${currentTab === item.id ? 'active' : ''}">
        <i data-lucide="${item.icon}" style="width: 18px; height: 18px;"></i>
        <span>${item.label}</span>
      </a>
    </li>
  `).join('');

  const lizardSvg = `
    <svg viewBox="0 0 200 150" width="100%" height="100%" class="sidebar-lizard">
      <!-- Leaves background -->
      <path d="M40 90 C10 110, 20 140, 60 130 C90 120, 80 90, 40 90 Z" fill="#045a30" opacity="0.8" />
      <path d="M120 80 C90 90, 100 130, 140 120 C180 110, 160 80, 120 80 Z" fill="#034825" opacity="0.9" />
      <path d="M80 60 C50 60, 60 110, 100 100 C130 90, 120 60, 80 60 Z" fill="#05723e" />
      
      <!-- Lizard body -->
      <!-- Tail -->
      <path d="M120 100 Q 150 115, 145 130 Q 130 140, 115 125 Q 120 115, 120 100 Z" fill="#f59e0b" />
      <path d="M85 85 Q 110 100, 120 100 Q 118 103, 108 108 Q 95 100, 85 85 Z" fill="#ea580c" />
      <!-- Spine/Body -->
      <path d="M55 55 Q 75 70, 85 85 Q 90 95, 80 100 Q 70 85, 50 65 Q 48 55, 55 55 Z" fill="#f59e0b" />
      <!-- Head -->
      <path d="M35 35 C42 30, 52 40, 55 55 C48 60, 38 52, 35 35 Z" fill="#ea580c" />
      <!-- Eyes -->
      <circle cx="42" cy="40" r="3" fill="#ffffff" />
      <circle cx="42" cy="40" r="1.5" fill="#000000" />
      <circle cx="50" cy="48" r="3" fill="#ffffff" />
      <circle cx="50" cy="48" r="1.5" fill="#000000" />
      
      <!-- Spots/Patterns -->
      <ellipse cx="60" cy="62" rx="3" ry="5" fill="#d97706" transform="rotate(-30, 60, 62)" />
      <ellipse cx="70" cy="74" rx="4" ry="6" fill="#ea580c" transform="rotate(-35, 70, 74)" />
      <ellipse cx="80" cy="85" rx="3" ry="5" fill="#d97706" transform="rotate(-35, 80, 85)" />
      
      <!-- Feet / Legs -->
      <!-- Front Left -->
      <path d="M45 48 Q 28 42, 24 48" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" fill="none" />
      <!-- Front Right -->
      <path d="M56 58 Q 62 48, 70 44" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" fill="none" />
      <!-- Back Left -->
      <path d="M72 80 Q 64 88, 62 98" stroke="#ea580c" stroke-width="4" stroke-linecap="round" fill="none" />
      <!-- Back Right -->
      <path d="M84 94 Q 96 100, 102 96" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" fill="none" />
    </svg>
  `;

  sidebarNode.className = `sidebar theme-${currentRole.toLowerCase()}`;
  sidebarNode.innerHTML = `
    <div class="sidebar-logo">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7V12C3 17.5 7.2 21.3 12 22C16.8 21.3 21 17.5 21 12V7L12 2Z" fill="currentColor" stroke="#F59E0B" stroke-width="1.5"/>
        <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="sidebar-logo-text">
        <h1>FERONIA</h1>
        <span>Wildlife Facility System</span>
      </div>
    </div>

    <!-- Top User Profile Widget -->
    <div class="user-profile-widget">
      <img src="${currentUser.photo}" alt="${currentUser.name}" onerror="this.outerHTML='<div class=&quot;user-initial-avatar&quot;>JU</div>'">
      <div class="user-profile-details">
        <span class="user-profile-name">${currentUser.name}</span>
        <span class="user-profile-role">${currentRole === 'Admin' ? 'Administrator' : currentRole}</span>
        <div class="online-dot-container">
          <span class="online-dot"></span>
          <span class="online-text">Online</span>
        </div>
      </div>
    </div>

    <ul class="sidebar-menu">
      ${menuHtml}
    </ul>

    <!-- Bottom Lizard Illustration & Copyright -->
    <div class="sidebar-lizard-container">
      ${lizardSvg}
    </div>
    <div class="sidebar-footer" style="padding: 10px 16px; border-top: none; background: transparent;">
      <p class="copyright-text" style="margin: 0; text-align: left;">© 2025 FERONIA<br>All rights reserved.</p>
    </div>
  `;
}

function switchTab(tabId, e) {
  if (e) e.preventDefault();
  window.location.hash = tabId;
}

function getCurrentUser() {
  switch (currentRole) {
    case 'Keeper': return appState.users.find(u => u.role === 'Keeper') || appState.users[1];
    case 'Veterinarian': return appState.users.find(u => u.role === 'Veterinarian') || appState.users[2];
    case 'Admin':
    default:
      return appState.users.find(u => u.role === 'Admin') || appState.users[0];
  }
}

// 2. HEADER DETAILS RENDERING
function renderHeader() {
  const titleNode = document.getElementById('header-title-node');
  const descNode = document.getElementById('header-desc-node');
  const controlsNode = document.getElementById('header-controls-node');
  if (!titleNode || !descNode) return;
  
  const currentUser = getCurrentUser();
  const unreadCount = currentRole === 'Admin' ? '3' : currentRole === 'Keeper' ? '2' : '3';
  const currentDateLabel = currentRole === 'Keeper' ? 'May 30, 2025 (Fri)' : 'May 30, 2025';

  const getHeaderDetails = () => {
    switch (currentTab) {
      case 'dashboard':
        return {
          title: currentRole === 'Admin' ? 'Admin Dashboard' : currentRole === 'Keeper' ? 'Good morning, Juan! 👋' : 'Dashboard',
          desc: currentRole === 'Admin' 
            ? 'Overview of your facility operations' 
            : currentRole === 'Keeper' 
            ? "Here's what's happening in your tasks and animal care today." 
            : 'Monitor animal health and provide the best veterinary care'
        };
      case 'medical-records':
        return { title: 'Medical Records', desc: 'View and manage complete medical history of animals' };
      case 'animals':
        return { title: 'Animal Management', desc: 'Monitor details, health records, parent lineage, and documents.' };
      case 'enclosures':
        return { title: 'Enclosures & Facilities', desc: 'Monitor capacity, temperature, humidity levels, and print QR enclosure codes.' };
      case 'animal-care':
        return { title: 'Species Care Engine', desc: 'Automate feeding and cleaning schedules based on individual species requirements.' };
      case 'breeding':
        return { title: 'Breeding Lifecycle Management', desc: 'Track pairings, egg production, fertility rates, and hatch forecasts.' };
      case 'inventory':
        return { title: 'Inventory & Forecasting', desc: 'Manage inventory items, stock levels, and usage.' };
      case 'reports':
        return { title: 'Reports', desc: 'View and export a summary of all tasks and activities.' };
      case 'checkups':
        return { title: 'Checkups', desc: 'Manage appointments and animal checkup schedules' };
      case 'treatments':
        return { title: 'Priority Cases', desc: 'List of animals and enclosures that require immediate attention' };
      case 'users':
        return { title: 'User Management', desc: 'Manage roles, permission overrides, and facility assignments.' };
      case 'settings':
        return { title: 'System Settings', desc: 'Configure species specifications, data synchronization, and global rules.' };
      default:
        return { title: 'Feronia System', desc: 'Wildlife Facility Management System' };
    }
  };

  const details = getHeaderDetails();
  titleNode.textContent = details.title;
  descNode.textContent = details.desc;

  if (controlsNode) {
    const leftControlHtml = `
      <div class="header-datepicker-dropdown" onclick="alert('Select Date Range...')">
        <i data-lucide="calendar" style="width: 16px; height: 16px;"></i>
        <span>${currentDateLabel}</span>
        <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
      </div>
    `;

    controlsNode.innerHTML = `
      <div class="header-controls-inner">
        ${leftControlHtml}

        <button class="qr-scanner-trigger" onclick="openScannerModal()" style="border: 1px solid var(--border-color); background: #ffffff; color: var(--text-main); font-weight: 600; padding: 8px 16px; border-radius: var(--border-radius); box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 8px; font-size: 0.85rem; height: 40px;">
          <i data-lucide="qr-code" style="width: 16px; height: 16px; color: var(--primary-dark);"></i>
          <span>QR Scan</span>
        </button>

        <button class="header-btn" onclick="alert('Viewing notifications...')" style="height: 40px; width: 40px;">
          <i data-lucide="bell" style="width: 18px; height: 18px;"></i>
          <span class="badge-count">${unreadCount}</span>
        </button>

        <div class="header-user-chip" id="header-user-chip-trigger" onclick="toggleUserDropdown(event)">
          <img src="${currentUser.photo}" alt="${currentUser.name}" onerror="this.outerHTML='<div class=&quot;user-initial-avatar-sm&quot;>JU</div>'">
          <div class="header-user-info">
            <span class="header-user-name">${currentUser.name}</span>
            <span class="header-user-role">${currentRole === 'Admin' ? 'Administrator' : currentRole}</span>
          </div>
          <i data-lucide="chevron-down" style="width: 12px; height: 12px; color: var(--text-muted); margin-left: 2px;"></i>
          
          <!-- Dropdown menu popup -->
          <div id="user-dropdown-menu" class="user-dropdown-menu">
            <div class="user-dropdown-item" onclick="location.href='index.html'">
              <i data-lucide="log-out" style="width: 14px; height: 14px;"></i>
              <span>Role Portal</span>
            </div>
            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 4px 0;">
            <div class="user-dropdown-item" onclick="location.href='admin.html'">
              <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
              <span>Admin Portal</span>
            </div>
            <div class="user-dropdown-item" onclick="location.href='keeper.html'">
              <i data-lucide="clipboard-list" style="width: 14px; height: 14px;"></i>
              <span>Keeper Portal</span>
            </div>
            <div class="user-dropdown-item" onclick="location.href='veterinarian.html'">
              <i data-lucide="folder-heart" style="width: 14px; height: 14px;"></i>
              <span>Veterinary Portal</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// User Profile dropdown controls
function toggleUserDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById('user-dropdown-menu');
  if (menu) {
    menu.classList.toggle('show');
  }
}

// Close user dropdown when clicking outside
window.addEventListener('click', () => {
  const menu = document.getElementById('user-dropdown-menu');
  if (menu && menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});

// 3. MAIN TAB PAGE ROUTER
function renderActivePage() {
  const container = document.getElementById('page-render-node');
  
  switch (currentTab) {
    case 'dashboard':
      container.innerHTML = getDashboardHtml();
      break;
    case 'medical-records':
      container.innerHTML = getMedicalRecordsHtml();
      break;
    case 'checkups':
      container.innerHTML = getCheckupsHtml();
      break;
    case 'treatments':
      container.innerHTML = getTreatmentsHtml();
      break;
    case 'animals':
      container.innerHTML = getAnimalsHtml();
      break;
    case 'enclosures':
      container.innerHTML = getEnclosuresHtml();
      break;
    case 'animal-care':
      container.innerHTML = getAnimalCareHtml();
      break;
    case 'breeding':
      container.innerHTML = getBreedingHtml();
      break;
    case 'inventory':
      container.innerHTML = getInventoryHtml();
      break;
    case 'reports':
      container.innerHTML = getReportsHtml();
      break;
    case 'users':
      container.innerHTML = getUsersHtml();
      break;
    case 'settings':
      container.innerHTML = getSettingsHtml();
      break;
    default:
      container.innerHTML = `<div>Page not found</div>`;
  }
}

// ==================== PAGES TEMPLATES GENERATORS ====================

// A. DASHBOARD TEMPLATES (DYNAMIC BASED ON ACTIVE ROLE)
function getDashboardHtml() {
  if (currentRole === 'Admin') {
    // ADMIN DASHBOARD
    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Metric Grid -->
        <div class="metrics-grid" style="grid-template-columns: repeat(5, 1fr);">
          <div class="metric-card" style="padding: 14px 18px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(16, 185, 129, 0.1); color: #10b981; width: 40px; height: 40px;"><i data-lucide="users" style="width: 20px; height: 20px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Total Animals</span>
              <span class="metric-value" style="font-size: 1.4rem;">423</span>
              <span class="metric-subtext" style="color: #10b981; font-weight: 700; font-size: 0.68rem; display: flex; align-items: center; gap: 2px;"><i data-lucide="trending-up" style="width: 10px; height: 10px;"></i> 12 this month</span>
            </div>
          </div>
          
          <div class="metric-card" style="padding: 14px 18px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(59, 130, 246, 0.1); color: #3b82f6; width: 40px; height: 40px;"><i data-lucide="home" style="width: 20px; height: 20px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Enclosures</span>
              <span class="metric-value" style="font-size: 1.4rem;">67</span>
              <span class="metric-subtext" style="color: #10b981; font-weight: 700; font-size: 0.68rem; display: flex; align-items: center; gap: 2px;"><i data-lucide="trending-up" style="width: 10px; height: 10px;"></i> 3 this month</span>
            </div>
          </div>

          <div class="metric-card" style="padding: 14px 18px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(245, 158, 11, 0.1); color: #f59e0b; width: 40px; height: 40px;"><i data-lucide="calendar" style="width: 20px; height: 20px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Today's Tasks</span>
              <span class="metric-value" style="font-size: 1.4rem;">28</span>
              <span class="metric-subtext" style="font-size: 0.68rem; color: var(--text-muted);">12 Completed</span>
            </div>
          </div>

          <div class="metric-card" style="padding: 14px 18px; gap: 12px; cursor: pointer;" onclick="location.hash='#treatments'">
            <div class="metric-icon-wrapper" style="background-color: rgba(244, 63, 94, 0.1); color: #f43f5e; width: 40px; height: 40px;"><i data-lucide="heart" style="width: 20px; height: 20px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">In Treatment</span>
              <span class="metric-value" style="font-size: 1.4rem;">8</span>
              <span class="metric-subtext" style="color: #3b82f6; font-weight: 600; font-size: 0.68rem;">View details</span>
            </div>
          </div>

          <div class="metric-card" style="padding: 14px 18px; gap: 12px; cursor: pointer;" onclick="location.hash='#inventory'">
            <div class="metric-icon-wrapper" style="background-color: rgba(234, 88, 12, 0.1); color: #ea580c; width: 40px; height: 40px;"><i data-lucide="shopping-bag" style="width: 20px; height: 20px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Low Stock</span>
              <span class="metric-value" style="font-size: 1.4rem;">3</span>
              <span class="metric-subtext" style="color: #3b82f6; font-weight: 600; font-size: 0.68rem;">View details</span>
            </div>
          </div>
        </div>

        <!-- Middle Card Section -->
        <div class="dashboard-layout" style="grid-template-columns: 1fr 1fr 1.1fr; gap: 20px;">
          
          <!-- Today's Operations -->
          <div class="dashboard-panel" style="padding: 20px;">
            <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 16px;">Today's Operations</h3>
            <div class="admin-operations-list">
              <div class="operation-item">
                <div class="operation-label-area">
                  <div class="operation-icon-box green"><i data-lucide="paw-print" style="width: 16px; height: 16px;"></i></div>
                  <span class="operation-label">Feedings</span>
                </div>
                <span class="operation-numbers"><span class="success">15 Completed</span> &bull; <span class="warning">3 Pending</span></span>
              </div>
              <div class="operation-item">
                <div class="operation-label-area">
                  <div class="operation-icon-box orange"><i data-lucide="brush" style="width: 16px; height: 16px;"></i></div>
                  <span class="operation-label">Cleaning</span>
                </div>
                <span class="operation-numbers"><span class="success">6 Completed</span> &bull; <span class="warning">2 Pending</span></span>
              </div>
              <div class="operation-item">
                <div class="operation-label-area">
                  <div class="operation-icon-box blue"><i data-lucide="droplet" style="width: 16px; height: 16px;"></i></div>
                  <span class="operation-label">Water Checks</span>
                </div>
                <span class="operation-numbers"><span class="success">6 Completed</span> &bull; <span class="success">0 Pending</span></span>
              </div>
              <div class="operation-item">
                <div class="operation-label-area">
                  <div class="operation-icon-box purple"><i data-lucide="eye" style="width: 16px; height: 16px;"></i></div>
                  <span class="operation-label">Observations</span>
                </div>
                <span class="operation-numbers"><span class="success">4 New</span></span>
              </div>
            </div>
            <a href="#animal-care" class="view-all-link" style="display: block; margin-top: 24px; text-decoration: none; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">View all operations &rarr;</a>
          </div>

          <!-- Animal Status Overview -->
          <div class="dashboard-panel" style="padding: 20px; text-align: center;">
            <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 16px; text-align: left;">Animal Status Overview</h3>
            <div class="chart-doughnut-container" style="margin-top: 14px;">
              <svg width="120" height="120" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f1f5f9" stroke-width="4.5"></circle>
                <!-- Healthy: 90.3% (length 90.3, offset 25) -->
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#10b981" stroke-width="4.5" stroke-dasharray="90.3 9.7" stroke-dashoffset="25"></circle>
                <!-- Monitoring: 5.9% -->
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f59e0b" stroke-width="4.5" stroke-dasharray="5.9 94.1" stroke-dashoffset="-65.3"></circle>
                <!-- Treatment: 2.8% -->
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#ef4444" stroke-width="4.5" stroke-dasharray="2.8 97.2" stroke-dashoffset="-71.2"></circle>
                <!-- Quarantine: 0.9% -->
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#a855f7" stroke-width="4.5" stroke-dasharray="0.9 99.1" stroke-dashoffset="-74.0"></circle>
              </svg>
              <div class="chart-doughnut-middle">
                <span class="chart-doughnut-number" style="font-size: 1.4rem;">423</span>
                <span class="chart-doughnut-label" style="font-size: 0.6rem;">Total</span>
              </div>
            </div>
            <div class="chart-legend" style="grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 20px; text-align: left;">
              <div class="legend-item"><span class="legend-dot" style="background-color: #10b981;"></span><span>Healthy: 382 (90.3%)</span></div>
              <div class="legend-item"><span class="legend-dot" style="background-color: #f59e0b;"></span><span>Monitoring: 25 (5.9%)</span></div>
              <div class="legend-item"><span class="legend-dot" style="background-color: #ef4444;"></span><span>Treatment: 12 (2.8%)</span></div>
              <div class="legend-item"><span class="legend-dot" style="background-color: #a855f7;"></span><span>Quarantine: 4 (0.9%)</span></div>
            </div>
            <a href="#animals" class="view-all-link" style="display: block; margin-top: 16px; text-decoration: none; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark); text-align: left;">View full report &rarr;</a>
          </div>

          <!-- Recent Alerts -->
          <div class="dashboard-panel" style="padding: 20px;">
            <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 16px;">Recent Alerts (3)</h3>
            <div style="display: flex; flex-direction: column;">
              <div class="alert-row-item">
                <div class="alert-row-icon warning"><i data-lucide="alert-triangle" style="width: 16px; height: 16px;"></i></div>
                <div class="alert-row-details">
                  <span class="alert-row-title">Low Stock Alert</span>
                  <p class="alert-row-desc">Live Rats will run out in 8 days.</p>
                </div>
                <span class="alert-row-time">10:30 AM</span>
              </div>
              <div class="alert-row-item">
                <div class="alert-row-icon danger"><i data-lucide="heart-pulse" style="width: 16px; height: 16px;"></i></div>
                <div class="alert-row-details">
                  <span class="alert-row-title">Medical Alert</span>
                  <p class="alert-row-desc">2 animals need follow-up.</p>
                </div>
                <span class="alert-row-time">09:15 AM</span>
              </div>
              <div class="alert-row-item">
                <div class="alert-row-icon info"><i data-lucide="user-check" style="width: 16px; height: 16px;"></i></div>
                <div class="alert-row-details">
                  <span class="alert-row-title">User Approval</span>
                  <p class="alert-row-desc">1 new keeper account.</p>
                </div>
                <span class="alert-row-time">Yesterday</span>
              </div>
            </div>
            <a href="#treatments" class="view-all-link" style="display: block; margin-top: 16px; text-decoration: none; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">View all alerts &rarr;</a>
          </div>

        </div>

        <!-- Bottom Card Section -->
        <div class="dashboard-layout" style="grid-template-columns: 1fr 1.2fr; gap: 20px;">
          
          <!-- Inventory Forecast Table -->
          <div class="dashboard-panel">
            <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 16px;">Inventory Forecast (Top 4 Items)</h3>
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Current Stock</th>
                    <th>Remaining</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600;">Live Rats</td>
                    <td>120</td>
                    <td>12 days</td>
                    <td><span class="badge-inv-status low">Low</span></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600;">Frozen Mice</td>
                    <td>80</td>
                    <td>8 days</td>
                    <td><span class="badge-inv-status critical">Critical</span></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600;">Calcium Powder</td>
                    <td>15</td>
                    <td>5 days</td>
                    <td><span class="badge-inv-status low">Low</span></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600;">Multivitamins</td>
                    <td>30</td>
                    <td>20 days</td>
                    <td><span class="badge-inv-status good">Good</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="#inventory" class="view-all-link" style="display: block; margin-top: 14px; text-decoration: none; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">View full inventory &rarr;</a>
          </div>

          <!-- Recent Activities -->
          <div class="dashboard-panel">
            <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 16px;">Recent Activities</h3>
            <div class="table-container">
              <table class="data-table">
                <tbody>
                  <tr>
                    <td style="font-weight: 600; color: var(--text-muted); font-size: 0.8rem;">10:15 AM</td>
                    <td style="font-size: 0.82rem;">Feeding completed for Ball Python - Slyther (A01)</td>
                    <td style="font-weight: 600; font-size: 0.82rem; text-align: right; color: var(--primary-dark);">Keeper Juan</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: var(--text-muted); font-size: 0.8rem;">09:45 AM</td>
                    <td style="font-size: 0.82rem;">Medical record added for Bearded Dragon - Ember (B02)</td>
                    <td style="font-weight: 600; font-size: 0.82rem; text-align: right; color: var(--primary-dark);">Veterinarian Maria</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: var(--text-muted); font-size: 0.8rem;">09:30 AM</td>
                    <td style="font-size: 0.82rem;">Water change completed in Rack A03</td>
                    <td style="font-weight: 600; font-size: 0.82rem; text-align: right; color: var(--primary-dark);">Keeper Pedro</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: var(--text-muted); font-size: 0.8rem;">08:50 AM</td>
                    <td style="font-size: 0.82rem;">Treatment added for Leopard Gecko - Shadow (C05)</td>
                    <td style="font-weight: 600; font-size: 0.82rem; text-align: right; color: var(--primary-dark);">Veterinarian Maria</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: var(--text-muted); font-size: 0.8rem;">08:30 AM</td>
                    <td style="font-size: 0.82rem;">Stock received: Live Rats (100)</td>
                    <td style="font-weight: 600; font-size: 0.82rem; text-align: right; color: var(--primary-dark);">Admin</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="#care-logs" class="view-all-link" style="display: block; margin-top: 14px; text-decoration: none; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">View all activities &rarr;</a>
          </div>

        </div>

      </div>
    `;
  } else if (currentRole === 'Keeper') {
    // KEEPER DASHBOARD
    const allTasks = appState.dailyTasks || [];
    const completedTasks = allTasks.filter(t => t.status === 'Completed');
    const pendingTasks = allTasks.filter(t => t.status === 'Pending');

    const totalCount = allTasks.length;
    const completedCount = completedTasks.length;
    const pendingCount = pendingTasks.length;

    // Filter tasks based on today's view selection
    let filteredTasks = allTasks;
    if (keeperDashboardTaskFilter === 'pending') {
      filteredTasks = pendingTasks;
    } else if (keeperDashboardTaskFilter === 'completed') {
      filteredTasks = completedTasks;
    }

    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Metrics Grid -->
        <div class="metrics-grid" style="grid-template-columns: repeat(5, 1fr);">
          <div class="metric-card" style="padding: 14px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(16, 185, 129, 0.1); color: #15803d; width: 36px; height: 36px;"><i data-lucide="check-square" style="width: 18px; height: 18px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Tasks Today</span>
              <span class="metric-value" style="font-size: 1.3rem;">12</span>
              <span class="metric-subtext" style="font-size: 0.68rem; color: var(--text-muted);">${completedCount} completed, ${pendingCount} pending</span>
            </div>
          </div>
          
          <div class="metric-card" style="padding: 14px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(245, 158, 11, 0.1); color: #ea580c; width: 36px; height: 36px;"><i data-lucide="soup" style="width: 18px; height: 18px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Feedings Today</span>
              <span class="metric-value" style="font-size: 1.3rem;">15</span>
              <span class="metric-subtext" style="font-size: 0.68rem; color: var(--text-muted);">10 completed, 5 pending</span>
            </div>
          </div>

          <div class="metric-card" style="padding: 14px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(59, 130, 246, 0.1); color: #2563eb; width: 36px; height: 36px;"><i data-lucide="droplet" style="width: 18px; height: 18px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Water Changes Today</span>
              <span class="metric-value" style="font-size: 1.3rem;">6</span>
              <span class="metric-subtext" style="font-size: 0.68rem; color: var(--text-muted);">6 completed</span>
            </div>
          </div>

          <div class="metric-card" style="padding: 14px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(168, 85, 247, 0.1); color: #7c3aed; width: 36px; height: 36px;"><i data-lucide="brush" style="width: 18px; height: 18px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Cleanings Today</span>
              <span class="metric-value" style="font-size: 1.3rem;">4</span>
              <span class="metric-subtext" style="font-size: 0.68rem; color: var(--text-muted);">2 completed, 2 pending</span>
            </div>
          </div>

          <div class="metric-card" style="padding: 14px; gap: 12px;">
            <div class="metric-icon-wrapper" style="background-color: rgba(244, 63, 94, 0.1); color: #e11d48; width: 36px; height: 36px;"><i data-lucide="alert-triangle" style="width: 18px; height: 18px;"></i></div>
            <div class="metric-details">
              <span class="metric-label" style="font-size: 0.65rem;">Alerts</span>
              <span class="metric-value" style="font-size: 1.3rem; color: #e11d48;">3</span>
              <span class="metric-subtext" style="font-size: 0.68rem; color: var(--text-muted);">Require attention</span>
            </div>
          </div>
        </div>

        <!-- Middle Row Grid (Today's Tasks and Assigned Animals) -->
        <div class="dashboard-layout" style="grid-template-columns: 1.4fr 1fr; gap: 20px;">
          
          <!-- Today's Tasks Checklist -->
          <div class="dashboard-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 0;">Today's Tasks</h3>
              <button class="btn btn-secondary btn-sm" onclick="location.hash='#tasks'" style="font-size: 0.75rem; padding: 6px 12px;">
                <i data-lucide="calendar" style="width: 14px; height: 14px;"></i>
                <span>View Calendar</span>
              </button>
            </div>

            <!-- Task Category Selector Tabs -->
            <div class="reports-tabs-bar" style="margin-bottom: 12px; border-bottom-width: 1px;">
              <button class="reports-tab-btn ${keeperDashboardTaskFilter === 'all' ? 'active' : ''}" onclick="setKeeperTaskFilter('all')" style="font-size: 0.8rem; padding: 8px 12px;">All (${totalCount})</button>
              <button class="reports-tab-btn ${keeperDashboardTaskFilter === 'pending' ? 'active' : ''}" onclick="setKeeperTaskFilter('pending')" style="font-size: 0.8rem; padding: 8px 12px;">Pending (${pendingCount})</button>
              <button class="reports-tab-btn ${keeperDashboardTaskFilter === 'completed' ? 'active' : ''}" onclick="setKeeperTaskFilter('completed')" style="font-size: 0.8rem; padding: 8px 12px;">Completed (${completedCount})</button>
            </div>

            <!-- Tasks List Table -->
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Animal / Enclosure</th>
                    <th>Type</th>
                    <th>Due Time</th>
                    <th>Status</th>
                    <th style="text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${filteredTasks.slice(0, 5).map(task => `
                    <tr>
                      <td style="font-weight: 700; font-size: 0.85rem;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                          <input type="checkbox" ${task.status === 'Completed' ? 'checked' : ''} onchange="toggleKeeperTask('${task.id}')" style="width: 16px; height: 16px; cursor: pointer; accent-color: var(--primary);">
                          <div>
                            <span style="${task.status === 'Completed' ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">${task.name}</span>
                            <p style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal; margin-top: 1px;">${task.details}</p>
                          </div>
                        </div>
                      </td>
                      <td style="font-size: 0.82rem; color: var(--text-main); font-weight: 500;">${task.enclosure}</td>
                      <td>
                        <span class="badge-type ${task.type.toLowerCase().replace(' ', '')}">
                          <i data-lucide="${task.type === 'Feeding' ? 'soup' : task.type === 'Cleaning' ? 'brush' : task.type === 'Water Change' ? 'droplet' : 'eye'}" style="width: 10px; height: 10px;"></i>
                          ${task.type}
                        </span>
                      </td>
                      <td style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted);">${task.time}</td>
                      <td>
                        <span class="badge-status ${task.status.toLowerCase()}">${task.status}</span>
                      </td>
                      <td style="text-align: right;">
                        <button class="btn ${task.status === 'Completed' ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="toggleKeeperTask('${task.id}')" style="padding: 4px 10px; font-size: 0.72rem;">Done</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            <a href="#tasks" class="view-all-link" style="display: block; margin-top: 14px; text-decoration: none; font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">View all tasks &rarr;</a>
          </div>

          <!-- My Assigned Animals -->
          <div class="dashboard-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 0;">My Assigned Animals</h3>
              <button class="btn btn-secondary btn-sm" onclick="location.hash='#animals'" style="font-size: 0.75rem; padding: 6px 12px;">View All</button>
            </div>
            
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Animal</th>
                    <th>Enclosure / Place</th>
                    <th>Last Fed</th>
                    <th style="text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600; font-size: 0.82rem;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="paw-print" style="width: 14px; height: 14px; color: var(--primary-dark);"></i>
                        <div>
                          <span>Slyther</span>
                          <p style="font-size: 0.7rem; color: var(--text-muted); font-weight: normal;">Ball Python (A01)</p>
                        </div>
                      </div>
                    </td>
                    <td style="font-size: 0.8rem;">Rack A-03<br><span style="color: var(--text-muted); font-size: 0.7rem;">Reptile Room 1</span></td>
                    <td style="font-size: 0.8rem; color: var(--text-muted);">May 29, 2025</td>
                    <td style="text-align: right;"><button class="btn btn-secondary btn-sm" onclick="openItemDrawer('animal', 'A01')" style="padding: 4px 8px; font-size: 0.7rem;">View</button></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; font-size: 0.82rem;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="paw-print" style="width: 14px; height: 14px; color: var(--primary-dark);"></i>
                        <div>
                          <span>Shadow</span>
                          <p style="font-size: 0.7rem; color: var(--text-muted); font-weight: normal;">Leopard Gecko (C05)</p>
                        </div>
                      </div>
                    </td>
                    <td style="font-size: 0.8rem;">Rack B-01<br><span style="color: var(--text-muted); font-size: 0.7rem;">Reptile Room 1</span></td>
                    <td style="font-size: 0.8rem; color: var(--text-muted);">May 29, 2025</td>
                    <td style="text-align: right;"><button class="btn btn-secondary btn-sm" onclick="openItemDrawer('animal', 'C05')" style="padding: 4px 8px; font-size: 0.7rem;">View</button></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; font-size: 0.82rem;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="paw-print" style="width: 14px; height: 14px; color: var(--primary-dark);"></i>
                        <div>
                          <span>Viper</span>
                          <p style="font-size: 0.7rem; color: var(--text-muted); font-weight: normal;">Corn Snake (B05)</p>
                        </div>
                      </div>
                    </td>
                    <td style="font-size: 0.8rem;">Rack B-01<br><span style="color: var(--text-muted); font-size: 0.7rem;">Reptile Room 1</span></td>
                    <td style="font-size: 0.8rem; color: var(--text-muted);">May 28, 2025</td>
                    <td style="text-align: right;"><button class="btn btn-secondary btn-sm" onclick="openItemDrawer('animal', 'B05')" style="padding: 4px 8px; font-size: 0.7rem;">View</button></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; font-size: 0.82rem;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="paw-print" style="width: 14px; height: 14px; color: var(--primary-dark);"></i>
                        <div>
                          <span>Ember</span>
                          <p style="font-size: 0.7rem; color: var(--text-muted); font-weight: normal;">Bearded Dragon (B02)</p>
                        </div>
                      </div>
                    </td>
                    <td style="font-size: 0.8rem;">Rack A-04<br><span style="color: var(--text-muted); font-size: 0.7rem;">Reptile Room 1</span></td>
                    <td style="font-size: 0.8rem; color: var(--text-muted);">May 28, 2025</td>
                    <td style="text-align: right;"><button class="btn btn-secondary btn-sm" onclick="openItemDrawer('animal', 'B02')" style="padding: 4px 8px; font-size: 0.7rem;">View</button></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; font-size: 0.82rem;">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <i data-lucide="box" style="width: 14px; height: 14px; color: var(--primary-dark);"></i>
                        <div>
                          <span>Rack C-01</span>
                          <p style="font-size: 0.7rem; color: var(--text-muted); font-weight: normal;">Reptile Room 2</p>
                        </div>
                      </div>
                    </td>
                    <td style="font-size: 0.8rem;">Rack C-01<br><span style="color: var(--text-muted); font-size: 0.7rem;">Reptile Room 2</span></td>
                    <td style="font-size: 0.8rem; color: var(--text-muted);">May 29, 2025</td>
                    <td style="text-align: right;"><button class="btn btn-secondary btn-sm" onclick="openItemDrawer('enclosure', 'ENC-CS-01')" style="padding: 4px 8px; font-size: 0.7rem;">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Quick Action Assignment Boxes -->
            <div class="dash-actions-row">
              <div class="dash-action-box">
                <div class="dash-action-header"><i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i><span>Assign Animal</span></div>
                <p>Assign animals to your care.</p>
                <button class="btn btn-primary btn-sm" onclick="alert('Opening animal assignment list...')">Assign Animals</button>
              </div>
              <div class="dash-action-box">
                <div class="dash-action-header"><i data-lucide="plus-circle" style="width: 14px; height: 14px;"></i><span>Assign Enclosure</span></div>
                <p>Assign enclosures or places.</p>
                <button class="btn btn-primary btn-sm" onclick="alert('Opening enclosure assignment list...')">Assign Enclosure</button>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Row (3 Columns: Inventory alerts, activities, alerts) -->
        <div class="dashboard-layout" style="grid-template-columns: 1fr 1fr 1.2fr; gap: 20px;">
          
          <!-- Inventory Alerts -->
          <div class="dashboard-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 0;">Inventory Alerts</h3>
              <button class="btn btn-secondary btn-sm" onclick="location.hash='#inventory'" style="font-size: 0.72rem; padding: 4px 8px;">View All</button>
            </div>
            <div class="inv-alerts-list">
              <div class="inv-alert-card danger" onclick="location.hash='#inventory'">
                <div class="inv-alert-icon"><i data-lucide="alert-circle" style="width: 16px; height: 16px;"></i></div>
                <div class="inv-alert-info">
                  <span class="inv-alert-title">Low Stock</span>
                  <div class="inv-alert-name">Mealworms</div>
                  <div class="inv-alert-details">120 left</div>
                </div>
                <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: var(--text-muted);"></i>
              </div>
              <div class="inv-alert-card warning" onclick="location.hash='#inventory'">
                <div class="inv-alert-icon"><i data-lucide="alert-triangle" style="width: 16px; height: 16px;"></i></div>
                <div class="inv-alert-info">
                  <span class="inv-alert-title">Low Stock</span>
                  <div class="inv-alert-name">Calcium Powder</div>
                  <div class="inv-alert-details">2 left</div>
                </div>
                <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: var(--text-muted);"></i>
              </div>
              <div class="inv-alert-card info" onclick="location.hash='#inventory'">
                <div class="inv-alert-icon"><i data-lucide="clock" style="width: 16px; height: 16px;"></i></div>
                <div class="inv-alert-info">
                  <span class="inv-alert-title">Restock Soon</span>
                  <div class="inv-alert-name">Reptile Vitamins</div>
                  <div class="inv-alert-details">Expires in 5 days</div>
                </div>
                <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: var(--text-muted);"></i>
              </div>
            </div>
          </div>

          <!-- Recent Activities -->
          <div class="dashboard-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 0;">Recent Activities</h3>
              <button class="btn btn-secondary btn-sm" onclick="location.hash='#care-logs'" style="font-size: 0.72rem; padding: 4px 8px;">View All</button>
            </div>
            
            <div class="table-container">
              <table class="data-table">
                <tbody>
                  <tr>
                    <td><div class="operation-icon-box green" style="width: 24px; height: 24px;"><i data-lucide="check" style="width: 12px; height: 12px;"></i></div></td>
                    <td style="font-size: 0.8rem;">
                      <b>Fed Ball Python (BP-M-021)</b>
                      <p style="font-size: 0.7rem; color: var(--text-muted);">Rat (Medium) - 1 piece</p>
                    </td>
                    <td style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-align: right; white-space: nowrap;">May 30, 2025<br>08:45 AM</td>
                  </tr>
                  <tr>
                    <td><div class="operation-icon-box purple" style="width: 24px; height: 24px;"><i data-lucide="eye" style="width: 12px; height: 12px;"></i></div></td>
                    <td style="font-size: 0.8rem;">
                      <b>Observation recorded</b>
                      <p style="font-size: 0.7rem; color: var(--text-muted);">Active, good appetite, normal behavior</p>
                    </td>
                    <td style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-align: right; white-space: nowrap;">May 30, 2025<br>08:20 AM</td>
                  </tr>
                  <tr>
                    <td><div class="operation-icon-box blue" style="width: 24px; height: 24px;"><i data-lucide="droplet" style="width: 12px; height: 12px;"></i></div></td>
                    <td style="font-size: 0.8rem;">
                      <b>Water changed</b>
                      <p style="font-size: 0.7rem; color: var(--text-muted);">Drinking water replaced</p>
                    </td>
                    <td style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-align: right; white-space: nowrap;">May 30, 2025<br>07:50 AM</td>
                  </tr>
                  <tr>
                    <td><div class="operation-icon-box orange" style="width: 24px; height: 24px;"><i data-lucide="brush" style="width: 12px; height: 12px;"></i></div></td>
                    <td style="font-size: 0.8rem;">
                      <b>Cleaned enclosure Rack A-02</b>
                      <p style="font-size: 0.7rem; color: var(--text-muted);">Waste removed and sanitized</p>
                    </td>
                    <td style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-align: right; white-space: nowrap;">May 29, 2025<br>04:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Alerts & Reminders -->
          <div class="dashboard-panel" style="display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <h3 class="panel-title" style="font-size: 1rem; margin-bottom: 0;">Alerts & Reminders</h3>
              <button class="btn btn-secondary btn-sm" onclick="alert('Viewing reminders log...')" style="font-size: 0.72rem; padding: 4px 8px;">View All</button>
            </div>
            
            <div style="flex: 1; display: flex; flex-direction: column;">
              <div class="alert-row-item">
                <div class="alert-row-icon danger" style="width: 28px; height: 28px;"><i data-lucide="alert-triangle" style="width: 14px; height: 14px;"></i></div>
                <div class="alert-row-details">
                  <span class="alert-row-title" style="font-size: 0.8rem;">Follow-up: Treatment</span>
                  <p class="alert-row-desc" style="font-size: 0.7rem;">Leopard Gecko (LG-F-004) - Antifungal medication. Due: May 31, 2025</p>
                </div>
                <span class="alert-row-time" style="font-size: 0.7rem; color: #f43f5e; font-weight: 700; cursor: pointer;">Today &rarr;</span>
              </div>
              <div class="alert-row-item">
                <div class="alert-row-icon warning" style="width: 28px; height: 28px;"><i data-lucide="clock" style="width: 14px; height: 14px;"></i></div>
                <div class="alert-row-details">
                  <span class="alert-row-title" style="font-size: 0.8rem;">Check humidity levels</span>
                  <p class="alert-row-desc" style="font-size: 0.7rem;">Monitor racks A-03 and B-02</p>
                </div>
                <span class="alert-row-time" style="font-size: 0.7rem; color: #d97706; font-weight: 700; cursor: pointer;">Today &rarr;</span>
              </div>
              <div class="alert-row-item">
                <div class="alert-row-icon info" style="width: 28px; height: 28px;"><i data-lucide="info" style="width: 14px; height: 14px;"></i></div>
                <div class="alert-row-details">
                  <span class="alert-row-title" style="font-size: 0.8rem;">Inventory check</span>
                  <p class="alert-row-desc" style="font-size: 0.7rem;">Check mealworms and calcium powder stocks</p>
                </div>
                <span class="alert-row-time" style="font-size: 0.7rem; color: #2563eb; font-weight: 700; cursor: pointer;">Tomorrow &rarr;</span>
              </div>
            </div>
            
            <button class="btn btn-secondary btn-sm" onclick="alert('Adding a new note/reminder...')" style="margin-top: 14px; font-size: 0.78rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <i data-lucide="sticky-note" style="width: 14px; height: 14px;"></i>
              <span>Add Note</span>
            </button>
          </div>

        </div>

      </div>
    `;
  } else {
    // VETERINARIAN DASHBOARD
    const treatmentsCount = appState.animals.filter(a => a.status === 'Under Treatment').length;
    const checkupsToday = appState.checkups.filter(c => c.date === '2025-05-22').length;
    
    // Today's Schedule dynamic items
    const filteredAppointments = appState.checkups.filter(c => c.date === '2025-05-22');
    const scheduleHtml = filteredAppointments.map((appt, idx) => {
      const animal = appState.animals.find(a => a.id === appt.animalId);
      const animalNameDisplay = animal ? `${animal.species} - ${animal.name} (${animal.id})` : `Animal - ${appt.animalId}`;
      
      // Choose icon based on checkup type
      let iconName = 'activity';
      let iconColor = '#10b981';
      let iconBg = '#d1fae5';
      if (appt.type === 'Health Check') {
        iconName = 'activity';
        iconColor = '#10b981';
        iconBg = '#d1fae5';
      } else if (appt.type === 'Treatment') {
        iconName = 'flask';
        iconColor = '#2563eb';
        iconBg = '#dbeafe';
      } else if (appt.type === 'Follow-up' || appt.type === 'Follow-up Check') {
        iconName = 'clock';
        iconColor = '#ea580c';
        iconBg = '#ffedd5';
      } else if (appt.type === 'Lab Review' || appt.type === 'Lab Result Review') {
        iconName = 'file-text';
        iconColor = '#10b981';
        iconBg = '#d1fae5';
      }
      
      const isLast = idx === filteredAppointments.length - 1;
      const borderStyle = isLast ? '' : 'border-bottom: 1px solid var(--border-color);';
      
      return `
        <div style="display: flex; align-items: center; padding: 16px 12px; ${borderStyle}">
          <span style="font-weight: 700; color: var(--text-muted); font-size: 0.85rem; width: 90px; flex-shrink: 0;">${appt.time}</span>
          <div style="width: 36px; height: 36px; border-radius: 50%; background-color: ${iconBg}; color: ${iconColor}; display: flex; align-items: center; justify-content: center; margin-right: 14px; flex-shrink: 0;">
            <i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i>
          </div>
          <div style="flex: 1;">
            <h5 style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);">${appt.type}</h5>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${animalNameDisplay}</p>
          </div>
        </div>
      `;
    }).join('');

    // Recent Medical Cases dynamic items
    const recentCasesHtml = appState.animals.slice(0, 4).map((animal, idx) => {
      const diagnosis = animal.healthHistory?.[0]?.summary || animal.notes || 'Ongoing checks';
      const isLast = idx === 3;
      const borderStyle = isLast ? '' : 'border-bottom: 1px solid var(--border-color);';
      
      return `
        <div class="clickable" onclick="selectPatient('${animal.id}')" style="display: flex; align-items: center; justify-content: space-between; padding: 16px 12px; ${borderStyle}">
          <div>
            <h5 style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);">${animal.species} - ${animal.name} (${animal.id})</h5>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${diagnosis}</p>
          </div>
          <span class="badge ${animal.status === 'Recovered' || animal.status === 'Healthy' ? 'badge-healthy' : animal.status === 'Monitoring' ? 'badge-monitoring' : 'badge-treatment'}">${animal.status}</span>
        </div>
      `;
    }).join('');

    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Metrics Row -->
        <div class="metrics-grid" style="grid-template-columns: repeat(4, 1fr); gap: 20px;">
          <div class="metric-card">
            <div class="metric-icon-wrapper" style="background-color: #d1fae5; color: #047857; width: 44px; height: 44px;"><i data-lucide="wrench"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem; font-weight: 800; line-height: 1;">12</span>
              <span class="metric-label" style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; margin-top: 4px;">Treatments Today</span>
              <span class="metric-subtext" style="font-size: 0.75rem; color: var(--primary-dark); font-weight: 700; margin-top: 2px;">Active</span>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon-wrapper" style="background-color: #e0f2fe; color: #0369a1; width: 44px; height: 44px;"><i data-lucide="calendar"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem; font-weight: 800; line-height: 1;">5</span>
              <span class="metric-label" style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; margin-top: 4px;">Checkups Today</span>
              <span class="metric-subtext" style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500; margin-top: 2px;">Scheduled</span>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon-wrapper" style="background-color: #ffedd5; color: #ea580c; width: 44px; height: 44px;"><i data-lucide="home"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem; font-weight: 800; line-height: 1;">7</span>
              <span class="metric-label" style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; margin-top: 4px;">In Quarantine</span>
              <span class="metric-subtext" style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500; margin-top: 2px;">Animals</span>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-icon-wrapper" style="background-color: #ffe4e6; color: #e11d48; width: 44px; height: 44px;"><i data-lucide="heart"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem; font-weight: 800; line-height: 1;">2</span>
              <span class="metric-label" style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; margin-top: 4px;">Critical Cases</span>
              <span class="metric-subtext" style="font-size: 0.75rem; color: #e11d48; font-weight: 700; margin-top: 2px;">Needs attention</span>
            </div>
          </div>
        </div>

        <!-- Today's Schedule and Recent Medical Cases side-by-side -->
        <div class="dashboard-layout" style="grid-template-columns: 1fr 1fr; gap: 24px;">
          
          <!-- Today's Schedule Panel -->
          <div class="dashboard-panel">
            <div class="panel-header" style="margin-bottom: 12px;">
              <h3 class="panel-title">Today's Schedule</h3>
              <span class="panel-header-action" onclick="switchTab('checkups')">View all</span>
            </div>
            <div style="display: flex; flex-direction: column;">
              ${scheduleHtml}
            </div>
          </div>

          <!-- Recent Medical Cases Panel -->
          <div class="dashboard-panel">
            <div class="panel-header" style="margin-bottom: 12px;">
              <h3 class="panel-title">Recent Medical Cases</h3>
              <span class="panel-header-action" onclick="switchTab('medical-records')">View all</span>
            </div>
            <div style="display: flex; flex-direction: column;">
              ${recentCasesHtml}
            </div>
          </div>

        </div>

        <!-- Full-Width Health Alerts Row -->
        <div class="dashboard-panel" style="padding: 20px;">
          <h3 class="panel-title" style="margin-bottom: 16px;">Health Alerts</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
            <div style="background-color: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--border-radius); padding: 18px 16px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; cursor: pointer; transition: all 0.2s;" onclick="switchTab('treatments')" class="inv-alert-card">
              <div style="color: #e11d48; background-color: #ffe4e6; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="heart" style="width: 18px; height: 18px;"></i></div>
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">2 animals</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">need immediate attention</span>
            </div>
            <div style="background-color: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--border-radius); padding: 18px 16px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; cursor: pointer; transition: all 0.2s;" onclick="switchTab('medical-records')" class="inv-alert-card">
              <div style="color: #2563eb; background-color: #dbeafe; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="file-text" style="width: 18px; height: 18px;"></i></div>
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">3 lab results</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">are ready for review</span>
            </div>
            <div style="background-color: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--border-radius); padding: 18px 16px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; cursor: pointer; transition: all 0.2s;" onclick="switchTab('checkups')" class="inv-alert-card">
              <div style="color: #d97706; background-color: #fef3c7; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="clock" style="width: 18px; height: 18px;"></i></div>
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">3 animals</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">need follow-up check</span>
            </div>
            <div style="background-color: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--border-radius); padding: 18px 16px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; cursor: pointer; transition: all 0.2s;" onclick="switchTab('medical-records')" class="inv-alert-card">
              <div style="color: #10b981; background-color: #d1fae5; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="leaf" style="width: 18px; height: 18px;"></i></div>
              <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">5 medications</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">are due today</span>
            </div>
          </div>
        </div>

        <!-- Full-Width Treatment Overview Panel -->
        <div class="dashboard-panel" style="padding: 20px;">
          <h3 class="panel-title" style="margin-bottom: 16px;">Treatment Overview (This Month)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
            <div style="display: flex; align-items: center; gap: 14px; padding: 10px;">
              <div style="color: #10b981; background-color: #d1fae5; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="activity" style="width: 20px; height: 20px;"></i></div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-weight: 800; font-size: 1.4rem; color: var(--text-main); line-height: 1.1;">12</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Active Treatments</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 10px;">
              <div style="color: #10b981; background-color: #d1fae5; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="shield-check" style="width: 20px; height: 20px;"></i></div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-weight: 800; font-size: 1.4rem; color: var(--text-main); line-height: 1.1;">3</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Completed Treatments</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 10px;">
              <div style="color: #2563eb; background-color: #dbeafe; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="eye" style="width: 20px; height: 20px;"></i></div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-weight: 800; font-size: 1.4rem; color: var(--text-main); line-height: 1.1;">14</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Medications Given This Month</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px; padding: 10px;">
              <div style="color: #ea580c; background-color: #ffedd5; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i data-lucide="trending-up" style="width: 20px; height: 20px;"></i></div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-weight: 800; font-size: 1.4rem; color: var(--text-main); line-height: 1.1;">85%</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Recovery Rate This Month</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;
  }
}

// B. MEDICAL RECORDS VIEW (IMAGES 3 & 4 DYNAMIC PANELS)
function getMedicalRecordsHtml() {
  const patient = appState.animals.find(a => a.id === selectedPatientId) || appState.animals[0];

  // Render left patient items list
  const patientListHtml = appState.animals.map(animal => {
    let iconName = 'snake';
    if (animal.species === 'Bearded Dragon' || animal.species === 'Leopard Gecko' || animal.species === 'Green Iguana') {
      iconName = 'lizard';
    } else if (animal.species === 'African Spurred Tortoise') {
      iconName = 'turtle';
    }
    
    // Choose icon graphic based on mock species name
    const speciesEmoji = animal.species.includes('Python') || animal.species.includes('Snake') ? '🐍' : animal.species.includes('Gecko') || animal.species.includes('Dragon') || animal.species.includes('Iguana') ? '🦎' : '🐢';

    return `
      <div class="patient-list-card ${animal.id === selectedPatientId ? 'active' : ''}" onclick="selectPatient('${animal.id}')">
        <div class="patient-avatar">${speciesEmoji}</div>
        <div class="patient-card-details">
          <span class="patient-card-title">${animal.species} - ${animal.name} (${animal.id})</span>
          <span class="patient-card-desc">${animal.scientificName}</span>
        </div>
        <span class="badge ${animal.status === 'Recovered' ? 'badge-healthy' : animal.status === 'Monitoring' ? 'badge-monitoring' : 'badge-treatment'}" style="font-size: 0.65rem; padding: 2px 8px;">
          ${animal.status}
        </span>
      </div>
    `;
  }).join('');

  // Right Side Panel Tab Renderers
  const getTabContent = () => {
    switch (patientRecordTab) {
      case 'history':
        return `
          <div>
            <h4 style="font-size: 0.9rem; margin-bottom: 12px; font-weight: 700;">Clinical History Log</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${patient.healthHistory && patient.healthHistory.length > 0 ? patient.healthHistory.map(log => `
                <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: 8px; font-size: 0.85rem;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-weight: 700; color: var(--text-muted);">${log.date}</span>
                    <span class="badge badge-treatment" style="font-size: 0.65rem;">${log.type}</span>
                  </div>
                  <p style="font-weight: 700; margin-bottom: 2px;">${log.summary}</p>
                  <p style="color: var(--text-muted); font-size: 0.8rem;">${log.notes}</p>
                  <p style="font-size: 0.7rem; color: var(--text-muted); margin-top: 6px; text-align: right;">Clinician: ${log.performedBy}</p>
                </div>
              `).join('') : '<p style="color: var(--text-muted); font-size: 0.85rem;">No clinical checkups recorded.</p>'}
            </div>
          </div>
        `;
      case 'labs':
        return `
          <div>
            <h4 style="font-size: 0.9rem; margin-bottom: 12px; font-weight: 700;">Hematology & Biochemistry Panels</h4>
            <table class="data-table" style="font-size: 0.8rem;">
              <thead>
                <tr>
                  <th>Parameter Tested</th>
                  <th>Observed Value</th>
                  <th>Reference Range</th>
                  <th>Flag Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight:600;">PCV (Packed Cell Volume)</td>
                  <td>32%</td>
                  <td>28 - 42%</td>
                  <td><span class="badge badge-healthy">Normal</span></td>
                </tr>
                <tr>
                  <td style="font-weight:600;">WBC Count</td>
                  <td style="color:#ef4444; font-weight:700;">14.2 x10^3/µL</td>
                  <td>5.0 - 12.0 x10^3/µL</td>
                  <td><span class="badge badge-treatment">Elevated</span></td>
                </tr>
                <tr>
                  <td style="font-weight:600;">Uric Acid</td>
                  <td>3.2 mg/dL</td>
                  <td>1.5 - 4.5 mg/dL</td>
                  <td><span class="badge badge-healthy">Normal</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      case 'prescriptions':
        return `
          <div>
            <h4 style="font-size: 0.9rem; margin-bottom: 12px; font-weight: 700;">Active Medication Orders</h4>
            <table class="data-table" style="font-size: 0.8rem;">
              <thead>
                <tr>
                  <th>Medication</th>
                  <th>Dosage / Route</th>
                  <th>Frequency</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight:600;">Enrofloxacin 10%</td>
                  <td>10 mg/kg (Oral)</td>
                  <td>Once Daily</td>
                  <td><span class="badge badge-healthy">Active</span></td>
                </tr>
                <tr>
                  <td style="font-weight:600;">Calcium Gluconate</td>
                  <td>100 mg/kg (IM Injection)</td>
                  <td>Every 48 hours</td>
                  <td><span class="badge badge-treatment">Awaiting Dispense</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      case 'docs':
        return `
          <div>
            <h4 style="font-size: 0.9rem; margin-bottom: 12px; font-weight: 700;">Uploaded Radiographs & Permits</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${patient.documents && patient.documents.length > 0 ? patient.documents.map(doc => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; border: 1px solid var(--border-color); border-radius: 6px; font-size: 0.8rem;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="file-text" style="color: var(--primary);"></i>
                    <span style="font-weight:600;">${doc.name}</span>
                  </div>
                  <span style="color: var(--text-muted);">${doc.date}</span>
                </div>
              `).join('') : '<p style="color: var(--text-muted); font-size: 0.85rem;">No files uploaded.</p>'}
            </div>
          </div>
        `;
      case 'overview':
      default:
        return `
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Basic Information & Conditions -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">Basic Information</h4>
                <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Animal ID</span><span style="font-weight:700;">${patient.id}</span></div>
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Enclosure</span><span style="font-weight:700;">${patient.enclosure}</span></div>
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Weight</span><span style="font-weight:700;">${patient.weight} kg</span></div>
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Assigned On</span><span style="font-weight:700;">${patient.acquiredDate}</span></div>
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Last Checkup</span><span style="font-weight:700;">${patient.healthHistory?.[0]?.date || 'N/A'}</span></div>
                </div>
              </div>

              <div>
                <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">Current Condition</h4>
                <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Temperature</span><span style="font-weight:700;">${patient.temp || '30.0'} °C</span></div>
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Heart Rate</span><span style="font-weight:700;">${patient.heartRate || '60'} bpm</span></div>
                  <div style="display:flex; justify-content:space-between;"><span style="color:var(--text-muted);">Respiratory Rate</span><span style="font-weight:700;">${patient.respRate || '15'} rpm</span></div>
                  <span style="color: var(--primary-dark); font-weight:700; cursor:pointer; font-size:0.75rem; text-transform:uppercase; margin-top: 4px;">View More</span>
                </div>
              </div>
            </div>

            <!-- Diagnosis and Next Checkup grids -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div style="border:1px solid var(--border-color); border-radius:8px; padding:14px; background-color:#f8fafc;">
                <span style="font-size:0.65rem; text-transform:uppercase; font-weight:700; color:var(--text-muted);">Diagnosis</span>
                <p style="font-size:0.95rem; font-weight:700; margin-top:4px;">${patient.healthHistory?.[0]?.summary || 'Healthy / No symptoms'}</p>
                <span style="font-size:0.7rem; color:var(--text-muted); display:block; margin-top:2px;">Diagnosed on ${patient.healthHistory?.[0]?.date || 'N/A'}</span>
              </div>
              <div style="border:1px solid var(--primary-light); border-radius:8px; padding:14px; background-color:#f0fdf4; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <span style="font-size:0.65rem; text-transform:uppercase; font-weight:700; color:var(--primary-dark);">Next Checkup</span>
                  <p style="font-size:0.95rem; font-weight:700; color:var(--primary-dark); margin-top:4px;">${patient.nextCheckup ? patient.nextCheckup.split('|')[0] : 'TBD'}</p>
                </div>
                <span style="font-weight:800; font-size:1.1rem; color:var(--primary-dark);">${patient.nextCheckup ? patient.nextCheckup.split('|')[1] || '' : ''}</span>
              </div>
            </div>

            <!-- Notes -->
            <div style="border-top:1px solid var(--border-color); padding-top:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="font-size:0.8rem; font-weight:700;">Recent Notes</span>
                <span style="font-size:0.75rem; color:var(--primary-dark); font-weight:600; cursor:pointer;">View all notes</span>
              </div>
              <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4; margin-bottom: 10px;">
                ${patient.notes || 'No recent notes.'}
              </p>
              
              <!-- Quick Add Note Form -->
              <div style="display: flex; gap: 8px; margin-top: 10px; margin-bottom: 12px;">
                <input id="quick-add-note-input" class="form-input" style="padding: 6px 10px; font-size: 0.8rem;" type="text" placeholder="Add clinical note to record...">
                <button class="btn btn-primary btn-sm" onclick="addMedicalRecordNote('${patient.id}')" style="white-space: nowrap;">Add Note</button>
              </div>
            </div>

            <!-- Edit Button -->
            <div style="display:flex; justify-content:flex-end; margin-top:10px;">
              <button class="btn btn-primary" onclick="openEditRecordModal()"><i data-lucide="edit-3"></i><span>Edit Record</span></button>
            </div>
          </div>
        `;
    }
  };

  return `
    <div class="split-layout-grid">
      <!-- Left sidebar patients -->
      <div class="split-sidebar-panel">
        <div style="position:relative;">
          <i data-lucide="search" style="position:absolute; left:10px; top:50%; transform:translateY(-50%); width:16px; height:16px; color:var(--text-muted);"></i>
          <input class="form-input" style="padding-left:32px;" type="text" placeholder="Search by name, ID, species...">
        </div>
        
        <div style="display:flex; gap:6px;">
          <select class="form-select" style="font-size:0.75rem; padding:6px 10px;"><option>All Species</option></select>
          <select class="form-select" style="font-size:0.75rem; padding:6px 10px;"><option>All Status</option></select>
        </div>

        <div class="scrollable-list">
          ${patientListHtml}
        </div>

        <div class="pagination-container">
          <button class="pagination-btn"><</button>
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn">3</button>
          <span style="font-size:0.75rem; color:var(--text-muted); align-self:center; margin:0 4px;">...</span>
          <button class="pagination-btn">10</button>
          <button class="pagination-btn">></button>
        </div>
      </div>

      <!-- Right main detailed records panel -->
      <div class="split-main-panel">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div style="display:flex; align-items:center; gap:16px;">
            <div style="font-size:2rem; background-color:#f0fdf4; border-radius:10px; width:64px; height:64px; display:flex; align-items:center; justify-content:center; border:1px solid var(--primary-light);">
              ${patient.species.includes('Python') || patient.species.includes('Snake') ? '🐍' : '🦎'}
            </div>
            <div>
              <h3 style="font-size:1.35rem; font-weight:800; font-family:var(--font-family-title);">${patient.species} - ${patient.name} (${patient.id})</h3>
              <p style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">${patient.scientificName}</p>
              <div style="display:flex; gap:6px; margin-top:6px; flex-wrap:wrap;">
                <span class="badge badge-monitoring" style="font-size:0.65rem; padding:2px 8px;">${patient.sex}</span>
                <span class="badge badge-pairing" style="font-size:0.65rem; padding:2px 8px;">${patient.class}</span>
                <span class="badge badge-pairing" style="font-size:0.65rem; padding:2px 8px;">${patient.age}</span>
                <span class="badge badge-treatment" style="font-size:0.65rem; padding:2px 8px;">${patient.status}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Detail tabs row -->
        <div class="drawer-tabs" style="border-bottom: 2px solid var(--border-color);">
          <button class="drawer-tab ${patientRecordTab === 'overview' ? 'active' : ''}" onclick="switchPatientTab('overview')">Overview</button>
          <button class="drawer-tab ${patientRecordTab === 'history' ? 'active' : ''}" onclick="switchPatientTab('history')">Medical History</button>
          <button class="drawer-tab ${patientRecordTab === 'labs' ? 'active' : ''}" onclick="switchPatientTab('labs')">Lab Results</button>
          <button class="drawer-tab ${patientRecordTab === 'prescriptions' ? 'active' : ''}" onclick="switchPatientTab('prescriptions')">Prescriptions</button>
          <button class="drawer-tab ${patientRecordTab === 'docs' ? 'active' : ''}" onclick="switchPatientTab('docs')">Documents</button>
        </div>

        <div style="flex:1;">
          ${getTabContent()}
        </div>
      </div>
    </div>
  `;
}

function selectPatient(id) {
  selectedPatientId = id;
  patientRecordTab = 'overview';
  renderAll();
}

function switchPatientTab(tabId) {
  patientRecordTab = tabId;
  renderAll();
}

// C. CHECKUPS CALENDAR & LIST VIEW (IMAGE 1 COMPLIANT)
function getCheckupsHtml() {
  const filteredAppointments = appState.checkups.filter(c => c.date === calendarSelectedDate);

  // Generate calendar days for May 2025
  const calendarDays = [];
  
  // Padding days for May 2025 (Starts on Thursday, so 4 empty slots: Sun, Mon, Tue, Wed)
  // Let's draw days 27th April to 30th April
  for (let d = 27; d <= 30; d++) {
    calendarDays.push({ dayNum: d, isCurrentMonth: false, dateStr: `2025-04-${d}`, dots: [] });
  }

  // Days in May (31 days)
  for (let d = 1; d <= 31; d++) {
    const formattedDay = d < 10 ? `0${d}` : d;
    const dateStr = `2025-05-${formattedDay}`;
    
    // Check what types of appointments exist on this day to draw dots
    const dayApps = appState.checkups.filter(c => c.date === dateStr);
    const dots = [];
    dayApps.forEach(app => {
      if (app.type === 'Health Check' && !dots.includes('blue')) dots.push('blue');
      if (app.type === 'Follow-up' && !dots.includes('orange')) dots.push('orange');
      if (app.type === 'Treatment' && !dots.includes('green')) dots.push('green');
      if (app.type === 'Lab Review' && !dots.includes('teal')) dots.push('teal');
    });

    calendarDays.push({ dayNum: d, isCurrentMonth: true, dateStr, dots });
  }

  // Padding end (June days to fit grid rows: 35 days total)
  for (let d = 1; d <= 7; d++) {
    calendarDays.push({ dayNum: d, isCurrentMonth: false, dateStr: `2025-06-0${d}`, dots: [] });
  }

  const calendarGridHtml = calendarDays.slice(0, 35).map(day => {
    const dotsHtml = day.dots.map(dot => `<span class="calendar-dot ${dot}"></span>`).join('');
    const isActive = day.dateStr === calendarSelectedDate;
    const opacityStyle = day.isCurrentMonth ? '' : 'opacity: 0.3;';

    return `
      <div class="calendar-day ${isActive ? 'active' : ''}" style="${opacityStyle}" onclick="selectCalendarDay('${day.dateStr}')">
        <span>${day.dayNum}</span>
        <div class="calendar-dots-row">${dotsHtml}</div>
      </div>
    `;
  }).join('');

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      
      <!-- Calendar selector row -->
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; gap: 8px;">
          <button class="btn ${checkupCalendarView === 'calendar' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="setCheckupView('calendar')"><i data-lucide="calendar"></i><span>Calendar</span></button>
          <button class="btn ${checkupCalendarView === 'list' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="setCheckupView('list')"><span>List View</span></button>
        </div>
        
        <div style="display: flex; align-items: center; gap: 14px;">
          <button class="btn btn-secondary btn-sm" onclick="selectCalendarDay('2025-05-22')">Today</button>
          <div style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="chevron-left" style="cursor: pointer; width: 16px; height: 16px;"></i>
            <span style="font-weight: 700; font-size: 0.95rem;">May 2025</span>
            <i data-lucide="chevron-right" style="cursor: pointer; width: 16px; height: 16px;"></i>
          </div>
        </div>

        <button class="btn btn-primary" onclick="openAddCheckupModal()">
          <i data-lucide="plus"></i>
          <span>New Checkup</span>
        </button>
      </div>

      <!-- Split Calendar / Checkups cards -->
      <div class="calendar-panel-grid">
        
        <!-- Left Side Calendar Sheet -->
        <div class="calendar-container">
          <div class="calendar-days-grid">
            <div class="calendar-day-header">Sun</div>
            <div class="calendar-day-header">Mon</div>
            <div class="calendar-day-header">Tue</div>
            <div class="calendar-day-header">Wed</div>
            <div class="calendar-day-header">Thu</div>
            <div class="calendar-day-header">Fri</div>
            <div class="calendar-day-header">Sat</div>
            ${calendarGridHtml}
          </div>

          <div class="calendar-legend">
            <div class="legend-dot-label"><span class="calendar-dot blue"></span><span>Checkup</span></div>
            <div class="legend-dot-label"><span class="calendar-dot orange"></span><span>Follow-up</span></div>
            <div class="legend-dot-label"><span class="calendar-dot green"></span><span>Treatment</span></div>
            <div class="legend-dot-label"><span class="calendar-dot teal"></span><span>Lab Review</span></div>
            <div class="legend-dot-label"><span class="calendar-dot red"></span><span>Overdue</span></div>
          </div>
        </div>

        <!-- Right Side: Today's Checkups list -->
        <div class="checkups-today-card">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 6px;">Today's Checkups (${calendarSelectedDate})</h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${filteredAppointments.length > 0 ? filteredAppointments.map((app, idx) => {
              const animal = appState.animals.find(a => a.id === app.animalId);
              const descText = animal ? `${animal.species} - ${animal.name} (${animal.id})` : app.animalId;
              const inputId = `chk-note-input-${idx}`;
              return `
                <div class="checkup-today-item" style="flex-direction: column; align-items: flex-start; gap: 8px; padding: 12px 14px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span class="checkup-today-time" style="font-size: 0.8rem; font-weight: 700; color: var(--primary-dark);">${app.time}</span>
                    <span class="badge ${app.status === 'Completed' || app.status === 'Confirmed' ? 'badge-healthy' : 'badge-low-stock'}" style="font-size: 0.65rem; padding: 2px 6px;">${app.status}</span>
                  </div>
                  <div class="checkup-today-info" style="margin-left: 0;">
                    <span class="checkup-today-title" style="font-weight: 700; font-size: 0.85rem;">${app.type}</span>
                    <span class="checkup-today-desc" style="font-size: 0.75rem; color: var(--text-muted);">${descText}</span>
                  </div>
                  ${app.notes ? `
                    <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic; background-color: #f8fafc; border: 1px solid var(--border-color); border-radius: 6px; padding: 6px 10px; width: 100%;">
                      <strong>Note:</strong> ${app.notes}
                    </div>
                  ` : ''}
                  <div style="display: flex; gap: 6px; width: 100%; margin-top: 4px;">
                    <input id="${inputId}" class="form-input" style="padding: 4px 8px; font-size: 0.72rem; flex: 1;" type="text" placeholder="Add clinical checkup notes...">
                    <button class="btn btn-primary btn-sm" onclick="addCheckupNote('${app.date}', '${app.time}', '${app.animalId}', '${inputId}')" style="padding: 4px 8px; font-size: 0.7rem; white-space: nowrap; height: auto;">Save Note</button>
                  </div>
                </div>
              `;
            }).join('') : '<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 20px;">No appointments scheduled for this date.</p>'}
          </div>
        </div>

      </div>

      <!-- Bottom Card: Upcoming Checkups List -->
      <div class="dashboard-panel">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 12px;">Upcoming Checkups</h4>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Animal Name & ID</th>
                <th>Checkup Type</th>
                <th>Clinician</th>
                <th>Status</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${appState.checkups.slice(4).map((row, idx) => {
                const animal = appState.animals.find(a => a.id === row.animalId);
                const animalDisplay = animal ? `${animal.species} - ${animal.name} (${animal.id})` : row.animalId;
                return `
                  <tr>
                    <td style="font-weight: 600;">${row.date} | ${row.time}</td>
                    <td>${animalDisplay}</td>
                    <td style="font-weight: 600;">${row.type}</td>
                    <td>${row.vet}</td>
                    <td><span class="badge badge-monitoring">${row.status}</span></td>
                    <td style="text-align: right;"><i data-lucide="edit-3" style="width: 14px; height: 14px; cursor: pointer; color: var(--text-muted);"></i></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function selectCalendarDay(dateStr) {
  calendarSelectedDate = dateStr;
  renderAll();
}

function setCheckupView(view) {
  checkupCalendarView = view;
  renderAll();
}

// D. TREATMENTS / PRIORITY CASES VIEW
function getTreatmentsHtml() {
  const treatmentsList = appState.treatments || [];
  
  // Calculate dynamic stats
  const activeCount = treatmentsList.filter(t => t.status !== 'Completed').length;
  const completedCount = treatmentsList.filter(t => t.status === 'Completed').length;
  const monitoringCount = treatmentsList.filter(t => t.status === 'Monitoring').length;
  const totalCount = treatmentsList.length;

  // Filter list based on filters
  let filtered = treatmentsList;

  // 1. Tab filter
  if (treatmentsActiveTab === 'active') {
    filtered = filtered.filter(t => t.status !== 'Completed');
  } else if (treatmentsActiveTab === 'completed') {
    filtered = filtered.filter(t => t.status === 'Completed');
  }

  // 2. Search query filter
  if (treatmentsSearchQuery.trim() !== '') {
    const q = treatmentsSearchQuery.toLowerCase();
    filtered = filtered.filter(t => 
      t.animalName.toLowerCase().includes(q) || 
      t.diagnosis.toLowerCase().includes(q) || 
      t.plan.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q)
    );
  }

  // 3. Status Filter
  if (treatmentsStatusFilter !== 'All Status') {
    filtered = filtered.filter(t => t.status === treatmentsStatusFilter);
  }

  // 4. Species Filter
  if (treatmentsSpeciesFilter !== 'All Species') {
    filtered = filtered.filter(t => t.species === treatmentsSpeciesFilter);
  }

  // 5. Active Dropdown Filter
  if (treatmentsActiveFilter === 'Active') {
    filtered = filtered.filter(t => t.status !== 'Completed');
  } else if (treatmentsActiveFilter === 'Completed') {
    filtered = filtered.filter(t => t.status === 'Completed');
  }

  // Extract unique species list for filter dropdown
  const speciesList = [...new Set(treatmentsList.map(t => t.species))];

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      
      <!-- Top Action & Search Bar -->
      <div class="dashboard-panel" style="padding: 16px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          
          <!-- Filters on Left -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap; flex: 1; align-items: center;">
            <div class="form-group" style="margin-bottom: 0; min-width: 260px;">
              <input type="text" class="form-input" style="padding: 8px 14px; font-size: 0.85rem;" placeholder="Search by name, ID, species..." value="${treatmentsSearchQuery}" oninput="handleTreatmentsSearch(this.value)">
            </div>
            
            <div class="form-group" style="margin-bottom: 0; width: 140px;">
              <select class="form-select" style="padding: 8px 12px; font-size: 0.82rem;" onchange="handleTreatmentsStatusFilter(this.value)">
                <option ${treatmentsStatusFilter === 'All Status' ? 'selected' : ''}>All Status</option>
                <option ${treatmentsStatusFilter === 'Under Treatment' ? 'selected' : ''}>Under Treatment</option>
                <option ${treatmentsStatusFilter === 'Monitoring' ? 'selected' : ''}>Monitoring</option>
                <option ${treatmentsStatusFilter === 'Completed' ? 'selected' : ''}>Completed</option>
              </select>
            </div>
            
            <div class="form-group" style="margin-bottom: 0; width: 140px;">
              <select class="form-select" style="padding: 8px 12px; font-size: 0.82rem;" onchange="handleTreatmentsSpeciesFilter(this.value)">
                <option ${treatmentsSpeciesFilter === 'All Species' ? 'selected' : ''}>All Species</option>
                ${speciesList.map(sp => `<option ${treatmentsSpeciesFilter === sp ? 'selected' : ''}>${sp}</option>`).join('')}
              </select>
            </div>
            
            <div class="form-group" style="margin-bottom: 0; width: 110px;">
              <select class="form-select" style="padding: 8px 12px; font-size: 0.82rem;" onchange="handleTreatmentsActiveFilter(this.value)">
                <option ${treatmentsActiveFilter === 'Active' ? 'selected' : ''}>Active</option>
                <option ${treatmentsActiveFilter === 'All' ? 'selected' : ''}>All</option>
                <option ${treatmentsActiveFilter === 'Completed' ? 'selected' : ''}>Completed</option>
              </select>
            </div>
          </div>

          <!-- Add Treatment Button -->
          <button class="btn btn-primary" onclick="openAddTreatmentModal()" style="display: flex; align-items: center; gap: 8px; font-weight: 600; padding: 10px 18px;">
            <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
            <span>Add Treatment</span>
          </button>
        </div>
      </div>

      <!-- Treatments Main Section Card -->
      <div class="dashboard-panel" style="padding: 24px;">
        
        <!-- Tabs Selector -->
        <div class="reports-tabs-bar" style="margin-bottom: 20px;">
          <button class="reports-tab-btn ${treatmentsActiveTab === 'active' ? 'active' : ''}" onclick="setTreatmentsActiveTab('active')">
            <span>Active Treatments (${activeCount})</span>
          </button>
          <button class="reports-tab-btn ${treatmentsActiveTab === 'completed' ? 'active' : ''}" onclick="setTreatmentsActiveTab('completed')">
            <span>Completed (${completedCount})</span>
          </button>
          <button class="reports-tab-btn ${treatmentsActiveTab === 'all' ? 'active' : ''}" onclick="setTreatmentsActiveTab('all')">
            <span>All Treatments (${totalCount})</span>
          </button>
        </div>

        <!-- Table Grid -->
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Animal</th>
                <th>Condition / Diagnosis</th>
                <th>Treatment Plan</th>
                <th>Start Date</th>
                <th>Priority Level</th>
                <th>Status</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px 0;">No matching treatments found.</td>
                </tr>
              ` : filtered.map(row => {
                let animalIcon = 'paw-print';
                if (row.species === 'Ball Python' || row.species === 'Corn Snake') animalIcon = 'snake';
                else if (row.species === 'Bearded Dragon' || row.species === 'Leopard Gecko' || row.species === 'Green Iguana') animalIcon = 'lizard';
                else if (row.species === 'Sulcata Tortoise') animalIcon = 'turtle';

                return `
                  <tr class="clickable" onclick="openItemDrawer('animal', '${row.animalId}')">
                    <td style="font-weight: 700;">
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <div class="metric-icon-wrapper" style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--primary-light); color: var(--primary-dark);">
                          <i data-lucide="${animalIcon}" style="width: 15px; height: 15px;"></i>
                        </div>
                        <span>${row.animalName}</span>
                      </div>
                    </td>
                    <td style="font-size: 0.85rem; font-weight: 500;">${row.diagnosis}</td>
                    <td style="font-size: 0.85rem; color: var(--text-muted);">${row.plan}</td>
                    <td style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">${row.startDate}</td>
                    <td>
                      <span class="badge ${row.priority === 'High' ? 'badge-treatment' : row.priority === 'Medium' ? 'badge-monitoring' : 'badge-healthy'}" style="padding: 4px 10px; font-weight: 700; border-radius: 6px; font-size: 0.72rem; text-transform: uppercase;">
                        ${row.priority}
                      </span>
                    </td>
                    <td>
                      <span class="badge-status ${row.status === 'Completed' ? 'completed' : row.status === 'Monitoring' ? 'pending' : 'pending'}" style="background-color: ${row.status === 'Completed' ? '#d1fae5' : row.status === 'Monitoring' ? '#dbeafe' : '#ffedd5'}; color: ${row.status === 'Completed' ? '#047857' : row.status === 'Monitoring' ? '#1e40af' : '#c2410c'};">
                        ${row.status}
                      </span>
                    </td>
                    <td style="text-align: right;" onclick="event.stopPropagation()">
                      <div style="display: flex; justify-content: flex-end; align-items: center; gap: 8px;">
                        <i data-lucide="edit-2" onclick="alert('Editing treatment plan ${row.id} details...')" style="width: 15px; height: 15px; cursor: pointer; color: var(--text-muted);"></i>
                        <i data-lucide="more-vertical" onclick="alert('Actions menu for ${row.id}...')" style="width: 15px; height: 15px; cursor: pointer; color: var(--text-muted);"></i>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

      </div>

      <!-- Treatment Summary Cards -->
      <div style="margin-top: 10px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 14px; color: var(--text-main);">Treatment Summary</h4>
        <div class="metrics-grid" style="grid-template-columns: repeat(4, 1fr);">
          <div class="metric-card" style="padding: 16px 20px;">
            <div class="metric-icon-wrapper" style="background-color: var(--primary-light); color: var(--primary-dark);"><i data-lucide="stethoscope"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem;">${activeCount}</span>
              <span class="metric-subtext" style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">Active Treatments</span>
            </div>
          </div>
          <div class="metric-card" style="padding: 16px 20px;">
            <div class="metric-icon-wrapper" style="background-color: #d1fae5; color: #047857;"><i data-lucide="check-circle-2"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem;">${completedCount}</span>
              <span class="metric-subtext" style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">Completed</span>
            </div>
          </div>
          <div class="metric-card" style="padding: 16px 20px;">
            <div class="metric-icon-wrapper" style="background-color: #dbeafe; color: #1e40af;"><i data-lucide="clipboard-edit"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem;">${monitoringCount}</span>
              <span class="metric-subtext" style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">Monitoring</span>
            </div>
          </div>
          <div class="metric-card" style="padding: 16px 20px;">
            <div class="metric-icon-wrapper" style="background-color: #fef3c7; color: #d97706;"><i data-lucide="trending-up"></i></div>
            <div class="metric-details">
              <span class="metric-value" style="font-size: 1.5rem;">85%</span>
              <span class="metric-subtext" style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted);">Recovery Rate This Month</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

// E. REPORT LISTINGS VIEW (IMAGE 2 DYNAMIC CARDS COMPLIANT)
function getReportsHtml() {
  let tabsHtml = '';
  let filtersHtml = '';
  let metricsCardHtml = '';
  let tableHeadersHtml = '';
  let tableRowsHtml = '';
  let alertText = '';

  if (currentRole === 'Keeper') {
    // KEEPER REPORTS (MATCHES THE SCREENSHOT EXACTLY)
    tabsHtml = `
      <button class="reports-tab-btn active">
        <i data-lucide="book-open" style="width: 16px; height: 16px;"></i>
        <span>My Report</span>
      </button>
    `;

    filtersHtml = `
      <div class="form-group" style="margin-bottom: 0; width: 180px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>May 19 - May 25, 2025</option>
          <option>May 12 - May 18, 2025</option>
        </select>
      </div>
      <div class="form-group" style="margin-bottom: 0; width: 160px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>All Task Types</option>
          <option>Feeding</option>
          <option>Cleaning</option>
          <option>Water Change</option>
          <option>Observation</option>
        </select>
      </div>
      <div class="form-group" style="margin-bottom: 0; width: 160px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>All Enclosures</option>
          <option>Rack A-02</option>
          <option>Rack B-01</option>
          <option>Rack C-01</option>
        </select>
      </div>
    `;

    metricsCardHtml = `
      <div class="reports-card-info">
        <div class="reports-card-icon" style="background-color: #dcfce7; color: #15803d; border-radius: 8px; width: 44px; height: 44px;">
          <i data-lucide="file-spreadsheet" style="width: 22px; height: 22px;"></i>
        </div>
        <div class="reports-card-info-text">
          <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 2px;">My Activity Report</h3>
          <p style="font-size: 0.78rem; color: var(--text-muted);">Summary of all tasks and activities you have completed.</p>
        </div>
      </div>
      <div class="reports-stats-grid">
        <div class="reports-stat-item">
          <span class="reports-stat-label">Total Tasks</span>
          <span class="reports-stat-value">28</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Completed</span>
          <span class="reports-stat-value green">25</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Pending</span>
          <span class="reports-stat-value orange">3</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Completion Rate</span>
          <span class="reports-stat-value green">89%</span>
        </div>
      </div>
    `;

    tableHeadersHtml = `
      <th>Date & Time</th>
      <th>Task / Activity</th>
      <th>Enclosure / Animal</th>
      <th>Task Type</th>
      <th>Status</th>
      <th>Notes</th>
    `;

    tableRowsHtml = `
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>08:00 AM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Fed Ball Python</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Rack A-02<br><span style="color: var(--text-muted); font-size: 0.72rem; font-weight: normal;">(Ball Python)</span></td>
        <td><span class="badge-type feeding"><i data-lucide="soup" style="width: 10px; height: 10px;"></i> Feeding</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Ate well. 1 small rat.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>09:15 AM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Cleaned Rack A-02</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Rack A-02</td>
        <td><span class="badge-type cleaning"><i data-lucide="brush" style="width: 10px; height: 10px;"></i> Cleaning</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Spot cleaned. Replaced paper towel.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>10:30 AM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Water Change</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Rack B-01</td>
        <td><span class="badge-type water"><i data-lucide="droplet" style="width: 10px; height: 10px;"></i> Water Change</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Changed water bowl.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>11:00 AM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Daily Observation</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Bearded Dragon<br><span style="color: var(--text-muted); font-size: 0.72rem; font-weight: normal;">(Rock C-01)</span></td>
        <td><span class="badge-type observation"><i data-lucide="eye" style="width: 10px; height: 10px;"></i> Observation</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Active and alert.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>01:30 PM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Fed Bearded Dragon</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Rack C-01<br><span style="color: var(--text-muted); font-size: 0.72rem; font-weight: normal;">(Bearded Dragon)</span></td>
        <td><span class="badge-type feeding"><i data-lucide="soup" style="width: 10px; height: 10px;"></i> Feeding</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Ate well. 5 crickets.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>03:00 PM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Checked Incubation</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Incubator 1</td>
        <td><span class="badge-type incubation"><i data-lucide="egg" style="width: 10px; height: 10px;"></i> Incubation</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Temp: 31.2°C, Humidity: 78%</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>04:45 PM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Fed Leopard Gecko</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Rack B-02<br><span style="color: var(--text-muted); font-size: 0.72rem; font-weight: normal;">(Leopard Gecko)</span></td>
        <td><span class="badge-type feeding"><i data-lucide="soup" style="width: 10px; height: 10px;"></i> Feeding</span></td>
        <td><span class="badge-status pending">Pending</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Scheduled at 04:45 PM</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>05:15 PM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Cleaned Rack B-02</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Rack B-02</td>
        <td><span class="badge-type cleaning"><i data-lucide="brush" style="width: 10px; height: 10px;"></i> Cleaning</span></td>
        <td><span class="badge-status pending">Pending</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Scheduled at 05:15 PM</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025<br>06:00 PM</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Daily Observation</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Leopard Gecko<br><span style="color: var(--text-muted); font-size: 0.72rem; font-weight: normal;">(Rack B-02)</span></td>
        <td><span class="badge-type observation"><i data-lucide="eye" style="width: 10px; height: 10px;"></i> Observation</span></td>
        <td><span class="badge-status pending">Pending</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Scheduled at 06:00 PM</td>
      </tr>
    `;

    alertText = "This report includes all tasks and activities you have completed or that are still pending within the selected date range.";

  } else if (currentRole === 'Admin') {
    // ADMIN REPORTS
    tabsHtml = `
      <button class="reports-tab-btn active">
        <i data-lucide="shield-alert" style="width: 16px; height: 16px;"></i>
        <span>Facility Compliance & Permits</span>
      </button>
      <button class="reports-tab-btn">
        <i data-lucide="bar-chart-3" style="width: 16px; height: 16px;"></i>
        <span>Inventory Runout Logs</span>
      </button>
    `;

    filtersHtml = `
      <div class="form-group" style="margin-bottom: 0; width: 180px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>May 19 - May 25, 2025</option>
        </select>
      </div>
      <div class="form-group" style="margin-bottom: 0; width: 160px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>All Document Types</option>
          <option>DENR Permitting</option>
          <option>Sales Ledger</option>
          <option>Audits</option>
        </select>
      </div>
    `;

    metricsCardHtml = `
      <div class="reports-card-info">
        <div class="reports-card-icon" style="background-color: #d1fae5; color: #10b981; border-radius: 8px; width: 44px; height: 44px;">
          <i data-lucide="award" style="width: 22px; height: 22px;"></i>
        </div>
        <div class="reports-card-info-text">
          <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 2px;">Compliance & Permitting Audit</h3>
          <p style="font-size: 0.78rem; color: var(--text-muted);">Summary of BMB/DENR wildlife permitting ledger and sales registries.</p>
        </div>
      </div>
      <div class="reports-stats-grid">
        <div class="reports-stat-item">
          <span class="reports-stat-label">Total Wildlife</span>
          <span class="reports-stat-value">423</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Approved Permits</span>
          <span class="reports-stat-value green">8</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Egg Clutches</span>
          <span class="reports-stat-value orange">12</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Compliance Index</span>
          <span class="reports-stat-value green">100%</span>
        </div>
      </div>
    `;

    tableHeadersHtml = `
      <th>Date Logged</th>
      <th>Operational Audit</th>
      <th>Facility Assignment</th>
      <th>Document Category</th>
      <th>Registry Status</th>
      <th>Registrar Notes</th>
    `;

    tableRowsHtml = `
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">DENR Import Permit Status</td>
        <td style="font-size: 0.82rem; font-weight: 500;">main-facility</td>
        <td><span class="badge-type permitting"><i data-lucide="file-check" style="width: 10px; height: 10px;"></i> Permitting</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Approved and active.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Dubia Roach Stock Update</td>
        <td style="font-size: 0.82rem; font-weight: 500;">inventory-feed</td>
        <td><span class="badge-type inventory"><i data-lucide="shopping-bag" style="width: 10px; height: 10px;"></i> Inventory</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Added 1000 large dubia.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Ball Python Sale (BP-084)</td>
        <td style="font-size: 0.82rem; font-weight: 500;">sales-records</td>
        <td><span class="badge-type permitting"><i data-lucide="dollar-sign" style="width: 10px; height: 10px;"></i> Sales</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Sold to J. Ramos. Permit issued.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">ASF Rats Feed Order</td>
        <td style="font-size: 0.82rem; font-weight: 500;">inventory-feed</td>
        <td><span class="badge-type inventory"><i data-lucide="shopping-bag" style="width: 10px; height: 10px;"></i> Inventory</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Received 200 frozen rats.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Annual Facility Inspection</td>
        <td style="font-size: 0.82rem; font-weight: 500;">compliance</td>
        <td><span class="badge-type permitting"><i data-lucide="shield" style="width: 10px; height: 10px;"></i> Audit</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Passed with zero violations.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Export Permit Renewal</td>
        <td style="font-size: 0.82rem; font-weight: 500;">compliance</td>
        <td><span class="badge-type permitting"><i data-lucide="file-text" style="width: 10px; height: 10px;"></i> Permitting</span></td>
        <td><span class="badge-status pending">Pending</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Under review by BMB.</td>
      </tr>
    `;

    alertText = "This report includes all regulatory registrations and commercial sales records filed in the current quarter.";

  } else {
    // VETERINARIAN REPORTS
    tabsHtml = `
      <button class="reports-tab-btn active">
        <i data-lucide="activity" style="width: 16px; height: 16px;"></i>
        <span>Clinical Diagnoses Ledger</span>
      </button>
      <button class="reports-tab-btn">
        <i data-lucide="beaker" style="width: 16px; height: 16px;"></i>
        <span>Lab Reports List</span>
      </button>
    `;

    filtersHtml = `
      <div class="form-group" style="margin-bottom: 0; width: 180px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>May 19 - May 25, 2025</option>
        </select>
      </div>
      <div class="form-group" style="margin-bottom: 0; width: 160px;">
        <select class="form-select" style="padding: 8px 12px; font-size: 0.8rem; font-weight: 500;">
          <option>All Clinical Types</option>
          <option>Checkup</option>
          <option>Treatment</option>
          <option>Lab Swab</option>
        </select>
      </div>
    `;

    metricsCardHtml = `
      <div class="reports-card-info">
        <div class="reports-card-icon" style="background-color: var(--primary-light); color: var(--primary-dark); border-radius: 8px; width: 44px; height: 44px;">
          <i data-lucide="stethoscope" style="width: 22px; height: 22px;"></i>
        </div>
        <div class="reports-card-info-text">
          <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 2px;">Clinical Care Report</h3>
          <p style="font-size: 0.78rem; color: var(--text-muted);">Summary of animal therapeutic procedures, diagnostics, and recovery timelines.</p>
        </div>
      </div>
      <div class="reports-stats-grid">
        <div class="reports-stat-item">
          <span class="reports-stat-label">Total Cases</span>
          <span class="reports-stat-value">31</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Critical</span>
          <span class="reports-stat-value orange" style="color: #ef4444;">2</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Lab Tests</span>
          <span class="reports-stat-value" style="color: #10b981;">18</span>
        </div>
        <div class="reports-stat-item">
          <span class="reports-stat-label">Recovery Rate</span>
          <span class="reports-stat-value green">85%</span>
        </div>
      </div>
    `;

    tableHeadersHtml = `
      <th>Date Scheduled</th>
      <th>Clinical Checkup</th>
      <th>Patient Enclosure</th>
      <th>Checkup Type</th>
      <th>Medical Status</th>
      <th>Clinical Notes Summary</th>
    `;

    tableRowsHtml = `
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Iguana Health Checkup</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Enclosure B-08</td>
        <td><span class="badge-type clinical"><i data-lucide="stethoscope" style="width: 10px; height: 10px;"></i> Clinical Check</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Clear eyes, alert. Good muscle tone.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Reticulated Python De-worming</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Enclosure C-12</td>
        <td><span class="badge-type treatment"><i data-lucide="pill" style="width: 10px; height: 10px;"></i> Treatment</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Administered 1ml Fenbendazole.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Chameleon Eye Swab Culture</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Lab-Room 1</td>
        <td><span class="badge-type lab"><i data-lucide="beaker" style="width: 10px; height: 10px;"></i> Lab Test</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Bacterial swab sent. Negative for infection.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Leopard Gecko Calcium Boost</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Enclosure B-02</td>
        <td><span class="badge-type treatment"><i data-lucide="pill" style="width: 10px; height: 10px;"></i> Treatment</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Liquid calcium oral dose. Monitor bone density.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Incubator 1 Fungal Scraping</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Breeding Lab</td>
        <td><span class="badge-type lab"><i data-lucide="beaker" style="width: 10px; height: 10px;"></i> Lab Test</span></td>
        <td><span class="badge-status completed">Completed</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Zero fungal spores detected. Safely humid.</td>
      </tr>
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600; line-height: 1.3;">May 25, 2025</td>
        <td style="font-weight: 700; font-size: 0.82rem;">Bearded Dragon Lethargy Check</td>
        <td style="font-size: 0.82rem; font-weight: 500;">Enclosure C-01</td>
        <td><span class="badge-type clinical"><i data-lucide="stethoscope" style="width: 10px; height: 10px;"></i> Clinical Check</span></td>
        <td><span class="badge-status pending">Pending</span></td>
        <td style="font-size: 0.82rem; color: var(--text-muted);">Scheduled check for afternoon observation.</td>
      </tr>
    `;

    alertText = "This report includes all clinical protocols, laboratory scrapings, and treatment confirmations registered within the date range.";
  }

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      
      <!-- Reports Inner Tabs Bar -->
      <div class="reports-tabs-bar">
        ${tabsHtml}
      </div>

      <!-- Filters & Export Bar -->
      <div class="dashboard-panel" style="padding: 16px 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div style="display: flex; gap: 14px; flex-wrap: wrap; flex: 1; align-items: center;">
            ${filtersHtml}
          </div>
          <button class="btn btn-primary" onclick="window.print()" style="background-color: var(--primary); border-color: var(--primary); display: flex; align-items: center; gap: 8px; font-weight: 600; color: #ffffff; padding: 10px 18px;">
            <i data-lucide="download" style="width: 16px; height: 16px;"></i>
            <span>Export / Print</span>
          </button>
        </div>
      </div>

      <!-- Metrics Card Summary -->
      <div class="reports-metrics-card">
        ${metricsCardHtml}
      </div>

      <!-- Data Log Table -->
      <div class="dashboard-panel">
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                ${tableHeadersHtml}
              </tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Bottom Alert Disclaimer Box -->
      <div class="reports-disclaimer">
        <i data-lucide="info" style="width: 18px; height: 18px;"></i>
        <span>${alertText}</span>
      </div>

    </div>
  `;
}

// F. ADMIN ANIMALS MANAGEMENT LIST
function getAnimalsHtml() {
  return `
    <div class="dashboard-panel">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <h3 class="panel-title">Wildlife Profiles Registry</h3>
        <button class="btn btn-primary" onclick="alert('Opening Admin Add Animal wizard. Please switch role to test Veterinarian checkups!')">
          <i data-lucide="plus"></i><span>Add Animal Profile</span>
        </button>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Species</th>
              <th>Morph</th>
              <th>Location Enclosure</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${appState.animals.map(a => `
              <tr class="clickable" onclick="openItemDrawer('animal', '${a.id}')">
                <td style="font-weight:700;">${a.id}</td>
                <td style="font-weight:600;">${a.species}</td>
                <td>${a.morph}</td>
                <td>${a.enclosure}</td>
                <td><span class="badge ${a.status === 'Recovered' ? 'badge-healthy' : a.status === 'Monitoring' ? 'badge-monitoring' : 'badge-treatment'}">${a.status}</span></td>
                <td><button class="btn btn-secondary btn-sm"><i data-lucide="chevron-right"></i></button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// G. ENCLOSURES VIEW
function getEnclosuresHtml() {
  return `
    <div class="enclosure-grid">
      ${appState.enclosures.map(enc => `
        <div class="enclosure-card" onclick="openItemDrawer('enclosure', '${enc.id}')">
          <div class="enclosure-badge">
            <span class="badge badge-healthy">Active</span>
          </div>
          <div>
            <span style="font-size:0.65rem; text-transform:uppercase; color:var(--text-muted); font-weight:700;">${enc.room}</span>
            <h3 class="enclosure-title">${enc.name}</h3>
            <span style="font-size:0.75rem; color:var(--text-muted);">${enc.type}</span>
          </div>
          <div style="display:flex; gap:6px;">
            ${enc.occupants.map(occ => `<span class="badge badge-monitoring" style="font-size:0.65rem;">${occ}</span>`).join('')}
          </div>
          <div class="enclosure-stats">
            <div class="enclosure-stat-item">
              <i data-lucide="thermometer" style="color:#ef4444; width:14px;"></i>
              <span class="enclosure-stat-label">Temp</span>
              <span class="enclosure-stat-value">${enc.temp}</span>
            </div>
            <div class="enclosure-stat-item">
              <i data-lucide="droplet" style="color:#3b82f6; width:14px;"></i>
              <span class="enclosure-stat-label">Humidity</span>
              <span class="enclosure-stat-value">${enc.humidity}</span>
            </div>
            <div class="enclosure-stat-item">
              <i data-lucide="layers" style="color:var(--primary); width:14px;"></i>
              <span class="enclosure-stat-label">Capacity</span>
              <span class="enclosure-stat-value">${enc.occupants.length}/${enc.capacity}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// H. SPECIAL CARE ENGINE PAGE
function getAnimalCareHtml() {
  return `
    <div class="dashboard-panel">
      <h3 class="panel-title" style="margin-bottom:16px;">Species Care Configuration Profiles</h3>
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="border:1px solid var(--border-color); border-radius:8px; padding:16px; background-color:#f8fafc;">
          <h5 style="font-weight:700;">Ball Python Care Profile</h5>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Feeding Schedule: Every 10-14 days • Cleaning Cycle: Spot clean daily • Target Temp: 29-32°C</p>
        </div>
        <div style="border:1px solid var(--border-color); border-radius:8px; padding:16px; background-color:#f8fafc;">
          <h5 style="font-weight:700;">Leopard Gecko Care Profile</h5>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Feeding Schedule: Every 2-3 days • Cleaning Cycle: Spot clean daily • Target Temp: 28-30°C</p>
        </div>
      </div>
    </div>
  `;
}

// I. BREEDING PAIRS LIST
function getBreedingHtml() {
  return `
    <div class="dashboard-panel">
      <h3 class="panel-title" style="margin-bottom:16px;">Active Breeding Pair logs</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Breeding Pair</th>
            <th>Location</th>
            <th>Days Together</th>
            <th>Lifecycle Stage</th>
            <th>Date Registered</th>
          </tr>
        </thead>
        <tbody>
          ${appState.breedingPairs.map(p => `
            <tr class="clickable" onclick="openItemDrawer('pair', '${p.pairId}')">
              <td style="font-weight:700;">${p.species} Pair (${p.maleId} x ${p.femaleId})</td>
              <td>${p.location}</td>
              <td>${p.daysTogether} days</td>
              <td><span class="badge badge-pairing">${p.stage}</span></td>
              <td>${p.pairDate}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// J. INVENTORY LIST
function getInventoryHtml() {
  return `
    <div class="dashboard-panel">
      <h3 class="panel-title" style="margin-bottom:16px;">Feeder & Medicine Supplies</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Stock level</th>
            <th>Storage Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${appState.inventory.map(item => `
            <tr class="clickable" onclick="openItemDrawer('inventory', '${item.id}')">
              <td style="font-weight:700;">${item.name}</td>
              <td>${item.category}</td>
              <td>${item.stock} ${item.unit}s</td>
              <td>${item.location} (${item.storageRequirement})</td>
              <td><span class="badge ${item.status === 'Low Stock' ? 'badge-low-stock' : 'badge-healthy'}">${item.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// K. STAFF USERS LIST
function getUsersHtml() {
  return `
    <div class="dashboard-panel">
      <h3 class="panel-title" style="margin-bottom:16px;">Registered Facility Staff</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Access Status</th>
          </tr>
        </thead>
        <tbody>
          ${appState.users.map(u => `
            <tr>
              <td style="font-weight:700;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <img src="${u.photo}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
                  <span>${u.name}</span>
                </div>
              </td>
              <td>${u.email}</td>
              <td><span class="badge badge-monitoring">${u.role}</span></td>
              <td><span class="badge badge-healthy">${u.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// L. SYSTEM SETTINGS
function getSettingsHtml() {
  return `
    <div class="dashboard-panel">
      <h3 class="panel-title" style="margin-bottom:16px;">Application Settings</h3>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:20px;">Restore initial default mockup dataset.</p>
      <button class="btn btn-danger" onclick="resetDatabase()"><i data-lucide="refresh-cw"></i><span>Restore Defaults</span></button>
    </div>
  `;
}

function resetDatabase() {
  if (confirm('Clear local storage and restore default facility datasets?')) {
    appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
    alert('System database reset complete.');
    location.reload();
  }
}

// ==================== DRAWER CONTROLLER ====================

function openItemDrawer(type, id) {
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('detail-drawer');
  
  let targetObj = null;
  if (type === 'animal') targetObj = appState.animals.find(a => a.id === id);
  else if (type === 'enclosure') targetObj = appState.enclosures.find(e => e.id === id);
  else if (type === 'pair') targetObj = appState.breedingPairs.find(p => p.pairId === id);
  else if (type === 'inventory') targetObj = appState.inventory.find(i => i.id === id);

  if (!targetObj) return;

  drawer.innerHTML = getDrawerTemplate(type, targetObj);
  backdrop.classList.add('open');
  lucide.createIcons();
}

function closeDetailDrawer() {
  const backdrop = document.getElementById('drawer-backdrop');
  backdrop.classList.remove('open');
}

function getDrawerTemplate(type, obj) {
  if (type === 'animal') {
    return `
      <div class="drawer-header">
        <div class="drawer-title-area">
          <div class="drawer-id-row">
            <span class="drawer-id">${obj.id}</span>
            <span class="badge badge-treatment">${obj.status}</span>
          </div>
          <span class="drawer-subtitle">${obj.species} • ${obj.morph}</span>
        </div>
        <button class="drawer-close" onclick="closeDetailDrawer()"><i data-lucide="x"></i></button>
      </div>
      <div class="drawer-content">
        <div class="details-grid">
          <div class="detail-item"><span class="detail-label">Age</span><span class="detail-value">${obj.age}</span></div>
          <div class="detail-item"><span class="detail-label">Weight</span><span class="detail-value">${obj.weight} kg</span></div>
          <div class="detail-item"><span class="detail-label">Enclosure</span><span class="detail-value">${obj.enclosure}</span></div>
          <div class="detail-item"><span class="detail-label">Sire ID</span><span class="detail-value">${obj.parentLineage?.male || 'N/A'}</span></div>
        </div>
        <div style="margin-top:20px; border-top:1px solid var(--border-color); padding-top:16px;">
          <h4 style="font-size:0.85rem; margin-bottom:8px;">Profile notes</h4>
          <p style="font-size:0.8rem; color:var(--text-muted);">${obj.notes}</p>
        </div>
      </div>
    `;
  } else if (type === 'enclosure') {
    return `
      <div class="drawer-header">
        <div class="drawer-title-area">
          <div class="drawer-id-row">
            <span class="drawer-id">${obj.id}</span>
            <span class="badge badge-healthy">Active</span>
          </div>
          <span class="drawer-subtitle">${obj.name} • ${obj.room}</span>
        </div>
        <button class="drawer-close" onclick="closeDetailDrawer()"><i data-lucide="x"></i></button>
      </div>
      <div class="drawer-content">
        <div class="details-grid">
          <div class="detail-item"><span class="detail-label">Temp</span><span class="detail-value">${obj.temp}</span></div>
          <div class="detail-item"><span class="detail-label">Humidity</span><span class="detail-value">${obj.humidity}</span></div>
          <div class="detail-item"><span class="detail-label">Capacity</span><span class="detail-value">${obj.occupants.length}/${obj.capacity}</span></div>
        </div>
        <div style="margin-top:20px;">
          <h4 style="font-size:0.85rem; margin-bottom:8px;">Printable Enclosure QR</h4>
          <div class="qr-sticker-preview">
            <span class="qr-sticker-title">Feronia</span>
            <span class="qr-sticker-code">${obj.id}</span>
            <div class="qr-sticker-img">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="black">
                <rect x="5" y="5" width="20" height="20" />
                <rect x="75" y="5" width="20" height="20" />
                <rect x="5" y="75" width="20" height="20" />
                <rect x="35" y="35" width="30" height="30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'pair') {
    return `
      <div class="drawer-header">
        <div class="drawer-title-area">
          <div class="drawer-id-row">
            <span class="drawer-id">${obj.pairId}</span>
            <span class="badge badge-pairing">${obj.stage}</span>
          </div>
          <span class="drawer-subtitle">${obj.species} pairing logs</span>
        </div>
        <button class="drawer-close" onclick="closeDetailDrawer()"><i data-lucide="x"></i></button>
      </div>
      <div class="drawer-content">
        <div class="details-grid">
          <div class="detail-item"><span class="detail-label">Sire (Male)</span><span class="detail-value">${obj.maleId}</span></div>
          <div class="detail-item"><span class="detail-label">Dam (Female)</span><span class="detail-value">${obj.femaleId}</span></div>
          <div class="detail-item"><span class="detail-label">Days together</span><span class="detail-value">${obj.daysTogether} days</span></div>
        </div>
      </div>
    `;
  } else {
    // Inventory supply quick adjustments drawer
    return `
      <div class="drawer-header">
        <div class="drawer-title-area">
          <div class="drawer-id-row">
            <span class="drawer-id">${obj.name}</span>
            <span class="badge ${obj.status === 'Low Stock' ? 'badge-low-stock' : 'badge-healthy'}">${obj.status}</span>
          </div>
          <span class="drawer-subtitle">ID: ${obj.id} • ${obj.category}</span>
        </div>
        <button class="drawer-close" onclick="closeDetailDrawer()"><i data-lucide="x"></i></button>
      </div>
      <div class="drawer-content">
        <div class="details-grid">
          <div class="detail-item"><span class="detail-label">Current Stock</span><span class="detail-value">${obj.stock} ${obj.unit}s</span></div>
          <div class="detail-item"><span class="detail-label">Reorder limit</span><span class="detail-value">${obj.reorderLevel} ${obj.unit}s</span></div>
        </div>
        <form style="margin-top:20px; border:1px solid var(--border-color); padding:16px; border-radius:8px; background-color:#f8fafc;" onsubmit="handleQuickStock(event, '${obj.id}')">
          <h5 style="font-size:0.85rem; margin-bottom:12px; font-weight:700; color:var(--primary-dark);">Quick Stock Change</h5>
          <div style="display:flex; gap:10px;">
            <div class="form-group" style="margin-bottom:0; flex:1;">
              <label class="form-label">Quantity</label>
              <input id="quick-qty" class="form-input" type="number" required min="1">
            </div>
            <div class="form-group" style="margin-bottom:0; flex:1;">
              <label class="form-label">Type</label>
              <select id="quick-type" class="form-select">
                <option value="Add">Add Stock</option>
                <option value="Remove">Use Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-sm" style="width:100%; margin-top:12px;">Apply change</button>
        </form>
      </div>
    `;
  }
}

function handleQuickStock(e, id) {
  e.preventDefault();
  const qty = parseInt(document.getElementById('quick-qty').value) || 0;
  const type = document.getElementById('quick-type').value;

  const itemIdx = appState.inventory.findIndex(i => i.id === id);
  if (itemIdx === -1) return;

  const item = appState.inventory[itemIdx];
  if (type === 'Add') {
    item.stock += qty;
  } else {
    item.stock = Math.max(0, item.stock - qty);
  }

  item.status = item.stock <= item.reorderLevel ? 'Low Stock' : 'In Stock';
  saveState();
  closeDetailDrawer();
  renderAll();
}

// ==================== SCANNER CONTROLLER ====================

function openScannerModal() {
  const modal = document.getElementById('scanner-modal');
  const targetsNode = document.getElementById('scanner-targets-list');

  const targets = [
    { code: 'ENC-BD-01', label: 'Enclosure Rack A-01 (ENC-BD-01)', desc: 'Occupant: Ember (Bearded Dragon)' },
    { code: 'ENC-BP-03', label: 'Enclosure House B1 (ENC-BP-03)', desc: 'Occupant: Slyther (Ball Python)' },
    { code: 'A01', label: 'Patient: Slyther (A01)', desc: 'Diagnosis: Respiratory Infection' },
    { code: 'B02', label: 'Patient: Ember (B02)', desc: 'Diagnosis: Metabolic Bone Disease' }
  ];

  targetsNode.innerHTML = targets.map(t => `
    <button class="scanner-target-btn" onclick="simulateQRScan('${t.code}')">
      <div style="display:flex; justify-content:space-between; width:100%;">
        <span style="font-weight:700; font-size:0.85rem;">${t.label}</span>
      </div>
      <span style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${t.desc}</span>
    </button>
  `).join('');

  modal.style.display = 'flex';
  lucide.createIcons();
}

function closeScannerModal() {
  document.getElementById('scanner-modal').style.display = 'none';
}

function simulateQRScan(code) {
  closeScannerModal();
  
  // Try enclosure scan
  const enc = appState.enclosures.find(e => e.id === code);
  if (enc) {
    openItemDrawer('enclosure', enc.id);
    return;
  }

  // Try animal scan
  const animal = appState.animals.find(a => a.id === code);
  if (animal) {
    if (currentRole === 'Veterinarian') {
      // Vet scan opens patient file record directly!
      currentTab = 'medical-records';
      selectPatient(animal.id);
    } else {
      openItemDrawer('animal', animal.id);
    }
    return;
  }

  alert(`Scanned tag ID code "${code}" but no matching registered profile was found in this facility.`);
}

// ==================== APPOINTMENTS MODALS CONTROLLER ====================

function openAddCheckupModal() {
  const modal = document.getElementById('add-checkup-modal');
  const select = document.getElementById('new-checkup-animal');

  select.innerHTML = appState.animals.map(a => `<option value="${a.id}">${a.species} - ${a.name} (${a.id})</option>`).join('');
  
  // Set default date
  document.getElementById('new-checkup-date').value = calendarSelectedDate;
  document.getElementById('new-checkup-time').value = '10:00';
  modal.style.display = 'flex';
}

function closeAddCheckupModal() {
  document.getElementById('add-checkup-modal').style.display = 'none';
}

function handleCheckupSubmit(e) {
  e.preventDefault();
  const animalId = document.getElementById('new-checkup-animal').value;
  const dateVal = document.getElementById('new-checkup-date').value;
  const timeVal = document.getElementById('new-checkup-time').value;
  const typeVal = document.getElementById('new-checkup-type').value;
  const vetVal = document.getElementById('new-checkup-vet').value;

  // Format time to AM/PM
  const [h, m] = timeVal.split(':');
  const hr = parseInt(h);
  const ampm = hr >= 12 ? 'PM' : 'AM';
  const displayHr = hr % 12 || 12;
  const formattedTime = `${displayHr < 10 ? '0' + displayHr : displayHr}:${m} ${ampm}`;

  const newApp = {
    date: dateVal,
    time: formattedTime,
    animalId,
    type: typeVal,
    vet: vetVal,
    status: 'Scheduled'
  };

  appState.checkups.push(newApp);
  
  // Update patient next checkup date if matching
  const patient = appState.animals.find(a => a.id === animalId);
  if (patient) {
    patient.nextCheckup = `${dateVal} | ${formattedTime}`;
  }

  saveState();
  closeAddCheckupModal();
  renderAll();
}

function addCheckupNote(date, time, animalId, inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  const appt = appState.checkups.find(c => c.date === date && c.time === time && c.animalId === animalId);
  if (appt) {
    appt.notes = val;
    appt.status = 'Completed';

    // Log this checkup to the animal's history
    const animal = appState.animals.find(a => a.id === animalId);
    if (animal) {
      if (!animal.healthHistory) animal.healthHistory = [];
      animal.healthHistory.unshift({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        type: appt.type,
        summary: `${appt.type} Performed`,
        notes: val,
        performedBy: appt.vet
      });
      
      // Sync status
      if (appt.type === 'Treatment') {
        animal.status = 'Under Treatment';
      }
    }

    saveState();
    renderAll();
  }
}

function addMedicalRecordNote(animalId) {
  const input = document.getElementById('quick-add-note-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  const animal = appState.animals.find(a => a.id === animalId);
  if (animal) {
    const todayStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    if (animal.notes && animal.notes !== 'No recent notes.') {
      animal.notes = `${animal.notes} | ${todayStr}: ${val}`;
    } else {
      animal.notes = `${todayStr}: ${val}`;
    }

    // Add to health log
    if (!animal.healthHistory) animal.healthHistory = [];
    animal.healthHistory.unshift({
      date: todayStr,
      type: "Observation",
      summary: "Observation Note Added",
      notes: val,
      performedBy: "Dr. Maria Reyes"
    });

    saveState();
    renderAll();
  }
}

// ==================== MEDICAL RECORD DETAILS MODAL ====================

function openEditRecordModal() {
  const modal = document.getElementById('edit-record-modal');
  const patient = appState.animals.find(a => a.id === selectedPatientId);
  if (!patient) return;

  document.getElementById('edit-weight').value = patient.weight || '';
  document.getElementById('edit-heart-rate').value = patient.heartRate || '';
  document.getElementById('edit-resp-rate').value = patient.respRate || '';
  document.getElementById('edit-temp').value = patient.temp || '';
  document.getElementById('edit-diagnosis').value = patient.healthHistory?.[0]?.summary || '';
  document.getElementById('edit-note').value = '';

  modal.style.display = 'flex';
}

function closeEditRecordModal() {
  document.getElementById('edit-record-modal').style.display = 'none';
}

function handleRecordSubmit(e) {
  e.preventDefault();
  const patient = appState.animals.find(a => a.id === selectedPatientId);
  if (!patient) return;

  patient.weight = document.getElementById('edit-weight').value;
  patient.heartRate = document.getElementById('edit-heart-rate').value;
  patient.respRate = document.getElementById('edit-resp-rate').value;
  patient.temp = document.getElementById('edit-temp').value;

  const diagText = document.getElementById('edit-diagnosis').value;
  const noteText = document.getElementById('edit-note').value;

  // Add clinical check history
  const todayStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
  const newLog = {
    date: todayStr,
    type: 'Diagnosis',
    summary: diagText,
    notes: noteText || 'Record updated.',
    performedBy: 'Dr. Maria Reyes'
  };

  patient.healthHistory = [newLog, ...(patient.healthHistory || [])];
  if (noteText) {
    patient.notes = noteText;
  }

  saveState();
  closeEditRecordModal();
  renderAll();
}

// ==================== KEEPER CHECKLIST HELPERS ====================

function toggleKeeperTask(taskId) {
  const task = appState.dailyTasks.find(t => t.id === taskId);
  if (task) {
    task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
    
    // Log recent activities on completion
    if (task.status === 'Completed') {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const dateStr = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
      
      if (!appState.careActivities) appState.careActivities = [];
      appState.careActivities.unshift({
        animalId: task.enclosure.split(' ')[0],
        species: task.details,
        activity: task.type,
        details: task.name,
        by: "Juan Dela Cruz",
        date: dateStr + ' ' + timeStr
      });
    }
    
    saveState();
    renderAll();
  }
}

function setKeeperTaskFilter(filter) {
  keeperDashboardTaskFilter = filter;
  renderAll();
}

// ==================== TREATMENTS PAGE EVENT HANDLERS ====================

function handleTreatmentsSearch(val) {
  treatmentsSearchQuery = val;
  // Re-render the active tab
  const container = document.getElementById('page-render-node');
  if (container) {
    container.innerHTML = getTreatmentsHtml();
    lucide.createIcons();
  }
}

function handleTreatmentsStatusFilter(val) {
  treatmentsStatusFilter = val;
  renderAll();
}

function handleTreatmentsSpeciesFilter(val) {
  treatmentsSpeciesFilter = val;
  renderAll();
}

function handleTreatmentsActiveFilter(val) {
  treatmentsActiveFilter = val;
  renderAll();
}

function setTreatmentsActiveTab(tab) {
  treatmentsActiveTab = tab;
  renderAll();
}

// Add Treatment Modal Handlers
function openAddTreatmentModal() {
  let modal = document.getElementById('add-treatment-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'add-treatment-modal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-container" style="max-width: 480px;">
        <div class="modal-header">
          <h3 class="panel-title">Add New Treatment Plan</h3>
          <button class="drawer-close" onclick="closeAddTreatmentModal()"><i data-lucide="x"></i></button>
        </div>
        <form id="add-treatment-form" onsubmit="handleTreatmentSubmit(event)">
          <div class="modal-content">
            <div class="form-group">
              <label class="form-label">Select Patient</label>
              <select id="new-trt-animal" class="form-select" required>
                ${appState.animals.map(a => `<option value="${a.id}">${a.name} (${a.species} - ${a.id})</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Condition / Diagnosis</label>
              <input id="new-trt-diagnosis" class="form-input" type="text" placeholder="e.g. Respiratory Infection" required>
            </div>
            <div class="form-group">
              <label class="form-label">Treatment Plan</label>
              <input id="new-trt-plan" class="form-input" type="text" placeholder="e.g. Antibiotic + Supportive Care" required>
            </div>
            <div class="details-grid">
              <div class="form-group">
                <label class="form-label">Priority Level</label>
                <select id="new-trt-priority" class="form-select" required>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Status</label>
                <select id="new-trt-status" class="form-select" required>
                  <option value="Under Treatment">Under Treatment</option>
                  <option value="Monitoring">Monitoring</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="closeAddTreatmentModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Treatment</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    lucide.createIcons();
  }
  
  // Update select option list dynamically
  const select = document.getElementById('new-trt-animal');
  if (select) {
    select.innerHTML = appState.animals.map(a => `<option value="${a.id}">${a.name} (${a.species} - ${a.id})</option>`).join('');
  }

  // Clear inputs
  document.getElementById('new-trt-diagnosis').value = '';
  document.getElementById('new-trt-plan').value = '';
  document.getElementById('new-trt-priority').value = 'High';
  document.getElementById('new-trt-status').value = 'Under Treatment';

  modal.style.display = 'flex';
}

function closeAddTreatmentModal() {
  const modal = document.getElementById('add-treatment-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function handleTreatmentSubmit(e) {
  e.preventDefault();
  const animalId = document.getElementById('new-trt-animal').value;
  const diagnosis = document.getElementById('new-trt-diagnosis').value;
  const plan = document.getElementById('new-trt-plan').value;
  const priority = document.getElementById('new-trt-priority').value;
  const status = document.getElementById('new-trt-status').value;

  const animal = appState.animals.find(a => a.id === animalId);
  const animalName = animal ? `${animal.species} - ${animal.name} (${animal.id})` : `Animal - ${animalId}`;
  const species = animal ? animal.species : 'Reptile';

  const todayStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const newTreatment = {
    id: `TRT-${Math.floor(100 + Math.random() * 900)}`,
    animalId,
    animalName,
    species,
    diagnosis,
    plan,
    startDate: todayStr,
    priority,
    status
  };

  if (!appState.treatments) appState.treatments = [];
  appState.treatments.push(newTreatment);

  // Sync to priorityCases for Admin/Keeper dashboards compatibility
  if (!appState.priorityCases) appState.priorityCases = [];
  appState.priorityCases.unshift({
    targetId: animalId,
    type: "Animal",
    species: species,
    issue: diagnosis,
    details: plan,
    priority: priority,
    vet: "Dr. Maria Reyes",
    date: todayStr
  });

  // Sync animal status if relevant
  if (animal) {
    animal.status = status === 'Under Treatment' ? 'Under Treatment' : 'Monitoring';
  }

  saveState();
  closeAddTreatmentModal();
  renderAll();
}
