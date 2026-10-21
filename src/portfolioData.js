export const slides = [
  {
    id: "welcome",
    navLabel: "Welcome",
    title: "Hello",
    introduction: "Welcome to Jake's portfolio.",
  },
  {
    id: "lightboxd",
    navLabel: "LightBoxd",
    title: "LightBoxd",
    tagline: "Every Frame Has a Story.",
    summary:
      "A responsive movie browser that turns external API data into a clean, easy-to-scan experience.",
    tools: ["HTML", "CSS", "JavaScript", "Movie API", "GitHub"],
    contributions: [
      "Retrieved and organized live movie data.",
      "Built reusable sections and interactions.",
      "Refined the experience across screen sizes.",
    ],
    takeaway:
      "I learned to break API data into manageable pieces, test as I built and plan for mobile from the start.",
    credit: "Co-developed with Craig Foulds",
    links: [
      {
        label: "View Live Site",
        href: "https://thebonville.com/lightboxd/",
      },
    ],
  },
  {
    id: "wordpress",
    navLabel: "WordPress",
    title: "WordPress School Site",
    tagline: "Matching the Vision, Building the Experience.",
    summary:
    "A from-scratch WordPress build that recreates a supplied school design, pixel by pixel, across responsive templates and interactions.",
    tools: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Gravity Forms"],
    contributions: [
      "Created templates and custom post types.",
      "Added filtering, forms and reusable calls to action.",
      "Refined typography, imagery and responsive layouts.",
    ],
    takeaway:
      "I learned how WordPress templates, custom content and plugins work together—and when the editor or custom code is the better tool.",
    credit: "Co-developed with Craig Foulds",
    links: [
      {
        label: "View Live Site",
        href: "https://halcrow.studio/school/",
      },
    ],
  },
  {
    id: "pong",
    navLabel: "Pong",
    title: "JavaScript Pong",
    tagline: "A small game with a surprising number of moving parts.",
    summary:
      "A browser-based Pong game built from scratch to explore movement, collision detection and game state using JavaScript.",
    tools: ["HTML", "CSS", "JavaScript"],
    contributions: [
      "Built player controls and ball movement.",
      "Added scoring, collision detection and resets.",
      "Connected the game logic to a responsive interface.",
    ],
    takeaway:
      "Breaking movement into small, testable rules turned complex game logic into a playable experience.",
    credit: "Solo project",
    links: [
      {
        label: "Play the Game",
        href: "https://thebonville.com/pong-game/Jake's%20Pong%20Game/index.html",
      },
    ],
  },
  {
    id: "sassy-spaw",
    navLabel: "Capstone",
    title: "Sassy Spaw Capstone",
    layout: "balanced",
    toolsPlacement: "side",
    imageAlt:
      "Sassy Spaw website displayed responsively on a laptop and mobile phone",
    tagline: "A connected booking experience for pets, people and groomers.",
    summary:
      "A team-built grooming website that brings service selection, groomer availability, recurring plans and deposits into one customer booking flow.",
    tools: [
      "WordPress",
      "WooCommerce",
      "WooCommerce Bookings",
      "Product Add-Ons",
      "Deposits",
    ],
    contributions: [
      "Configured service bookings by groomer, date, time, pet size and optional extras.",
      "Built groomer preselection links and connected Spaw Schedule choices to their booking products.",
      "Configured and tested deposits, free consultations, cancellations and the Book again flow.",
    ],
    takeaway:
      "I learned how connected WooCommerce extensions depend on careful planning and end-to-end testing, especially when one choice affects availability, pricing and checkout.",
    credit: "Team capstone project",
    links: [
      {
        label: "View Live Site",
        href: "https://sassyspaw.bcitwebdeveloper.ca/",
      },
    ],
  },
  {
    id: "portfolio",
    navLabel: "This Portfolio",
    title: "About This Portfolio",
    tagline: "Personal by design. Accessible by default.",
    summary:
      "This portfolio combines a cat-inspired visual identity with an interface designed to remain clear, responsive and comfortable to use.",
    accessibilityFeatures: [
      {
        title: "Keyboard navigation",
        description:
          "Slide controls, menus, theme settings and project links use semantic buttons and links that can be reached without a mouse.",
      },
      {
        title: "Visible focus",
        description:
          "Interactive controls keep clear focus states so keyboard users can always see where they are on the page.",
      },
      {
        title: "Motion controls",
        description:
          "Decorative animation includes a visible pause control, and the selected motion preference is saved for future visits.",
      },
      {
        title: "Reduced-motion support",
        description:
          "The portfolio respects the device’s reduced-motion setting and minimizes animation unless the visitor chooses otherwise.",
      },
      {
        title: "Light and dark themes",
        description:
          "Both themes preserve readable contrast and visual hierarchy while allowing visitors to choose the appearance that is most comfortable.",
      },
      {
        title: "Responsive reading",
        description:
          "Fluid type, mobile layouts and scrollable content panels keep each slide usable across different screen sizes and zoom levels.",
      },
      {
        title: "Image descriptions",
        description:
          "Meaningful project and personal images include descriptive alternative text, while decorative visuals are hidden from assistive technology.",
      },
      {
        title: "Clear structure and status",
        description:
          "Headings, labelled regions and announced slide status give the experience a predictable structure for assistive technology.",
      },
    ],
  },
  {
    id: "about",
    navLabel: "About",
    title: "Meet Jake",
    tagline: "Good code. Clear experiences.\nCat-approved details.",
    summary:
      "I’m a web developer who enjoys solving problems, matching designs carefully and adding just enough personality to make a website memorable.",
    directors:
      "Steban, the pale grey cat, brings the calm. Baby Chibby, the black cat, brings the chaos. Together, they inspired the colours, illustrations and personality behind this portfolio.",
    facts: [
      "Based near Vancouver",
      "Builds with JavaScript and WordPress",
      "Favourite project: LightBoxd",
      "Works well under feline supervision",
    ],
  },
];
