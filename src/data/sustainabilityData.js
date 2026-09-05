export const sustainabilityData = [
  {
    keywords: ["light", "lights", "fan", "electricity", "energy", "power"],
    category: "Energy",
    priority: "Medium",

    problem:
      "Lights and fans are sometimes left running after classes have ended, resulting in unnecessary energy consumption.",

    actions: [
      "Ask students and teachers to turn off lights and fans at the end of the class.",
      "Place clear, visible reminder signs near light and fan switches.",
      "Train classroom staff to check and turn off devices after use.",
    ],

    impact:
      "These actions could lower unnecessary electricity usage and help develop energy-saving habits on campus.",
  },

  {
    keywords: [
      "food",
      "waste",
      "plastic",
      "bottle",
      "bin",
      "recycling",
      "canteen",
    ],
    category: "Waste",
    priority: "High",

    problem:
      "Students mix food waste, plastic bottles, and other waste in the same bin, making proper waste segregation difficult.",

    actions: [
      "Add clear signage above each bin explaining what type of waste belongs there.",
      "Place separate recycling and compost bins near general waste bins.",
      "Educate students about proper waste sorting during orientation or seminars.",
    ],

    impact:
      "Better waste sorting can improve recycling rates, reduce contaminated waste, and support more sustainable campus waste management.",
  },

  {
    keywords: [
      "water",
      "tap",
      "leak",
      "leaking",
      "faucet",
      "pipe",
    ],
    category: "Water",
    priority: "Medium",

    problem:
      "A leaking water tap near the hostel can remain unnoticed for several hours, causing unnecessary water loss.",

    actions: [
      "Establish a simple reporting channel for students to report water leaks.",
      "Conduct regular inspections of water fixtures by maintenance staff.",
      "Provide training for staff on quick response and repair of leaks.",
    ],

    impact:
      "These steps could reduce water wastage, lower utility costs, and conserve water resources on campus.",
  },

  {
    keywords: [
      "bike",
      "motorcycle",
      "motorcycles",
      "transport",
      "vehicle",
      "traffic",
      "pollution",
      "travel",
    ],
    category: "Transportation",
    priority: "High",

    problem:
      "Students often use individual vehicles for short-distance travel to campus, contributing to traffic, pollution, and energy use.",

    actions: [
      "Promote campus shuttle services and carpooling for nearby students.",
      "Encourage walking and cycling for short-distance journeys.",
      "Consider bike-sharing programs for last-mile connectivity.",
    ],

    impact:
      "Promoting sustainable transportation can reduce traffic volume, lower emissions, and improve air quality around campus.",
  },

  {
    keywords: [
      "food",
      "canteen",
      "meal",
      "meals",
      "leftover",
      "leftovers",
      "unused food",
    ],
    category: "Food & Consumption",
    priority: "Medium",

    problem:
      "Excess food preparation in the college canteen can lead to unnecessary food waste and resource consumption.",

    actions: [
      "Plan food quantities based on previous demand patterns.",
      "Donate suitable unserved food through approved food-sharing initiatives.",
      "Educate canteen staff about inventory management and food waste reduction.",
    ],

    impact:
      "Reducing food waste can improve resource efficiency, reduce disposal requirements, and potentially lower operational costs.",
  },
];

export const defaultResult = {
  category: "Other",
  priority: "Low",

  problem:
    "The sustainability issue could not be confidently classified into one of the predefined campus categories.",

  actions: [
    "Report the issue to the appropriate campus department.",
    "Collect additional information about the problem.",
    "Consider a suitable sustainability improvement based on the findings.",
  ],

  impact:
    "Proper identification and follow-up can help the campus address sustainability issues more effectively.",
};