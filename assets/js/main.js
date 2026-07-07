// Hero Image Rotation - Carousel effect
function rotateHeroImage() {
  const heroSection = document.getElementById('heroSection');
  if (!heroSection) return;
  
  const heroImages = [
    'assets/images/quick-on-the-draw-rev0.jpg',
    'assets/images/roll-with-it-rev0.png',
    'assets/images/victor-coil-rev0.jpg',
  ];
  
  let currentIndex = 0;
  
  function changeImage() {
    currentIndex = (currentIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
  }
  
  // Set initial image
  heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
  
  // Change image every 5 seconds
  setInterval(changeImage, 6000);
}

// Text Rotation for Capabilities and Applications
function initTextRotation() {
  const capabilityText = document.getElementById('capabilityText');
  const applicationText = document.getElementById('applicationText');
  const contactText = document.getElementById('contactText');
  const projectTypeText = document.getElementById('projectTypeText');
  const supportText = document.getElementById('supportText');
  const otherText = document.getElementById('otherText');
  const oilGasSubsector = document.getElementById('oilGasSubsector');
  const industrialSubsector = document.getElementById('industrialSubsector');
  const automotiveSubsector = document.getElementById('automotiveSubsector');
  const artSubsector = document.getElementById('artSubsector');
  const architectureSubsector = document.getElementById('architectureSubsector');
  const civilSubsector = document.getElementById('civilSubsector');
  const personalProjectsSubsector = document.getElementById('personalProjectsSubsector');
  const commercialProductsSubsector = document.getElementById('commercialProductsSubsector');
  
  const capabilities = [
    'Roll Bending',
    'Draw Bending',
    'Coil Bending',
    'Pipeline Bends',
    'Fabrication & Finishing',
    'Coating & Insulation',
  ];
  
  const applications = [
    'Oil and Gas',
    'Industrial',
    'Chemical Processing',
    'Infrastructure',
    'Structural'
  ];

  const oilGasSectors = [
    'Pipelines',
    'Refining',
    'Chemical Processing',
    'Drilling',
    'Transportation',
    'Storage'
  ];

  const industrialSectors = [
    'Equipment frames',
    'Heavy machinery',
    'Chemical Processing',
    'Custom fabrication'
  ];

  const automotiveSectors = [
    'Exhaust systems',
    'Fuel lines',
    'Cooling systems',
    'Hydraulic tubing',
    'Suspension components'
  ];

  const artSectors = [
    'Sculptures',
    'Public installations',
    'Decorative railings',
    'Theatrical props',
    'Outdoor exhibits'
  ];

  const architectureSectors = [
    'Structural elements',
    'Railings and balustrades',
    'Canopies and awnings',
    'Support structures',
    'Façade systems'
  ];

  const civilSectors = [
    'Bridges',
    'Water systems',
    'Electrical systems',
    'Recreational facilities',
    'Transportation systems'
  ];

  const personalProjectsSectors = [
    'Hobbies',
    'Art projects',
    'Custom builds',
    'Prototypes',
    'DIY installations'
  ];

  const commercialProductsSectors = [
    'Manufacturing',
    'Retail components',
    'Consumer goods',
    'OEM parts',
    'Replacement parts'
  ];

  const contactOptions = [
    'Ideas',
    'Drawings',
    'Samples',
    'Delivery',
    'Material',
    'Quick turnaround',
    'Turnaround',
    'Interfacing',
    'Finishing',
    'Certifications',
    'Insulation'
  ];

  const projectTypes = [
    'R&D',
    'Oil and Gas',
    'Personal project',
    'Industrial chemicals'
  ];

  const supportOptions = [
    'Engineering drawings',
    'Tolerancing',
    'Delivery',
    'Samples',
    'Prototypes',
    'Certifications'
  ];

  const otherOptions = [
    'Materials',
    'Budget',
    'Timeline',
    'Location'
  ];
  
  let capIndex = 0;
  let appIndex = 0;
  let contactIndex = 0;
  let projectTypeIndex = 0;
  let supportIndex = 0;
  let otherIndex = 0;
  let oilGasIndex = 0;
  let industrialIndex = 0;
  let automotiveIndex = 0;
  let artIndex = 0;
  let architectureIndex = 0;
  let civilIndex = 0;
  let personalProjectsIndex = 0;
  let commercialProductsIndex = 0;
  
  function updateCapabilityText() {
    if (capabilityText) {
      capabilityText.classList.remove('slide-text');
      void capabilityText.offsetWidth;
      capabilityText.textContent = capabilities[capIndex];
      capabilityText.classList.add('slide-text');
      capIndex = (capIndex + 1) % capabilities.length;
    }
  }
  
  function updateApplicationText() {
    if (applicationText) {
      applicationText.classList.remove('slide-text');
      void applicationText.offsetWidth;
      applicationText.textContent = applications[appIndex];
      applicationText.classList.add('slide-text');
      appIndex = (appIndex + 1) % applications.length;
    }
  }

  function updateContactText() {
    if (contactText) {
      contactText.classList.remove('slide-text');
      void contactText.offsetWidth;
      contactText.textContent = contactOptions[contactIndex];
      contactText.classList.add('slide-text');
      contactIndex = (contactIndex + 1) % contactOptions.length;
    }
  }

  function updateProjectTypeText() {
    if (projectTypeText) {
      projectTypeText.classList.remove('slide-text');
      void projectTypeText.offsetWidth;
      projectTypeText.textContent = projectTypes[projectTypeIndex];
      projectTypeText.classList.add('slide-text');
      projectTypeIndex = (projectTypeIndex + 1) % projectTypes.length;
    }
  }

  function updateSupportText() {
    if (supportText) {
      supportText.classList.remove('slide-text');
      void supportText.offsetWidth;
      supportText.textContent = supportOptions[supportIndex];
      supportText.classList.add('slide-text');
      supportIndex = (supportIndex + 1) % supportOptions.length;
    }
  }

  function updateOtherText() {
    if (otherText) {
      otherText.classList.remove('slide-text');
      void otherText.offsetWidth;
      otherText.textContent = otherOptions[otherIndex];
      otherText.classList.add('slide-text');
      otherIndex = (otherIndex + 1) % otherOptions.length;
    }
  }

  function updateOilGasSubsector() {
    if (oilGasSubsector) {
      oilGasSubsector.classList.remove('slide-text');
      void oilGasSubsector.offsetWidth;
      oilGasSubsector.textContent = oilGasSectors[oilGasIndex];
      oilGasSubsector.classList.add('slide-text');
      oilGasIndex = (oilGasIndex + 1) % oilGasSectors.length;
    }
  }

  function updateIndustrialSubsector() {
    if (industrialSubsector) {
      industrialSubsector.classList.remove('slide-text');
      void industrialSubsector.offsetWidth;
      industrialSubsector.textContent = industrialSectors[industrialIndex];
      industrialSubsector.classList.add('slide-text');
      industrialIndex = (industrialIndex + 1) % industrialSectors.length;
    }
  }

  function updateAutomotiveSubsector() {
    if (automotiveSubsector) {
      automotiveSubsector.classList.remove('slide-text');
      void automotiveSubsector.offsetWidth;
      automotiveSubsector.textContent = automotiveSectors[automotiveIndex];
      automotiveSubsector.classList.add('slide-text');
      automotiveIndex = (automotiveIndex + 1) % automotiveSectors.length;
    }
  }

  function updateArtSubsector() {
    if (artSubsector) {
      artSubsector.classList.remove('slide-text');
      void artSubsector.offsetWidth;
      artSubsector.textContent = artSectors[artIndex];
      artSubsector.classList.add('slide-text');
      artIndex = (artIndex + 1) % artSectors.length;
    }
  }

  function updateArchitectureSubsector() {
    if (architectureSubsector) {
      architectureSubsector.classList.remove('slide-text');
      void architectureSubsector.offsetWidth;
      architectureSubsector.textContent = architectureSectors[architectureIndex];
      architectureSubsector.classList.add('slide-text');
      architectureIndex = (architectureIndex + 1) % architectureSectors.length;
    }
  }

  function updateCivilSubsector() {
    if (civilSubsector) {
      civilSubsector.classList.remove('slide-text');
      void civilSubsector.offsetWidth;
      civilSubsector.textContent = civilSectors[civilIndex];
      civilSubsector.classList.add('slide-text');
      civilIndex = (civilIndex + 1) % civilSectors.length;
    }
  }

  function updatePersonalProjectsSubsector() {
    if (personalProjectsSubsector) {
      personalProjectsSubsector.classList.remove('slide-text');
      void personalProjectsSubsector.offsetWidth;
      personalProjectsSubsector.textContent = personalProjectsSectors[personalProjectsIndex];
      personalProjectsSubsector.classList.add('slide-text');
      personalProjectsIndex = (personalProjectsIndex + 1) % personalProjectsSectors.length;
    }
  }

  function updateCommercialProductsSubsector() {
    if (commercialProductsSubsector) {
      commercialProductsSubsector.classList.remove('slide-text');
      void commercialProductsSubsector.offsetWidth;
      commercialProductsSubsector.textContent = commercialProductsSectors[commercialProductsIndex];
      commercialProductsSubsector.classList.add('slide-text');
      commercialProductsIndex = (commercialProductsIndex + 1) % commercialProductsSectors.length;
    }
  }
  
  if (capabilityText) {
     setTimeout(() => {
      updateCapabilityText();
      setInterval(updateCapabilityText, 3000);
    }, 100);

  }
  
  if (applicationText) {
    setTimeout(() => {
      updateApplicationText();
      setInterval(updateApplicationText, 3000);
    }, 100);
  }

  if (contactText) {
    updateContactText();
    setInterval(updateContactText, 3500);
  }

  if (oilGasSubsector) {
    setTimeout(() => {
      updateOilGasSubsector();
      setInterval(updateOilGasSubsector, 3500);
    }, 200);
  }

  if (industrialSubsector) {
    setTimeout(() => {
      updateIndustrialSubsector();
      setInterval(updateIndustrialSubsector, 3500);
    }, 400);
  }

  if (automotiveSubsector) {
    setTimeout(() => {
      updateAutomotiveSubsector();
      setInterval(updateAutomotiveSubsector, 3500);
    }, 600);
  }

  if (artSubsector) {
    setTimeout(() => {
      updateArtSubsector();
      setInterval(updateArtSubsector, 2500);
    }, 800);
  }

  if (architectureSubsector) {
    setTimeout(() => {
      updateArchitectureSubsector();
      setInterval(updateArchitectureSubsector, 2500);
    }, 1000);
  }

  if (civilSubsector) {
    setTimeout(() => {
      updateCivilSubsector();
      setInterval(updateCivilSubsector, 2500);
    }, 1200);
  }

  if (personalProjectsSubsector) {
    setTimeout(() => {
      updatePersonalProjectsSubsector();
      setInterval(updatePersonalProjectsSubsector, 2500);
    }, 1400);
  }

  if (commercialProductsSubsector) {
    setTimeout(() => {
      updateCommercialProductsSubsector();
      setInterval(updateCommercialProductsSubsector, 2500);
    }, 1600);
  }

  if (projectTypeText) {
    updateProjectTypeText();
    setInterval(updateProjectTypeText, 2500);
  }

  if (supportText) {
    setTimeout(() => {
      updateSupportText();
      setInterval(updateSupportText, 2500);
    }, 100);
  }

  if (otherText) {
    setTimeout(() => {
      updateOtherText();
      setInterval(updateOtherText, 2500);
    }, 100);
  }
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  rotateHeroImage();
  initTextRotation();
  initSearch();

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  // Close nav when a link is clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });
});

// Form Submission Handler
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.querySelector('input[name="name"]')?.value || '',
      email: document.querySelector('input[name="email"]')?.value || '',
      phone: document.querySelector('input[name="phone"]')?.value || '',
      message: document.querySelector('textarea[name="message"]')?.value || ''
    };

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // For static site, show success message
    alert('Thank you! Your message has been received. We will contact you shortly.');
    form.reset();
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Search Bar Functionality
const searchIndex = [
  { title: 'Roll Bending', url: 'capabilities.html#roll-bending', keywords: 'roll bending solid bars brackets channel beams plate radius compound multi-plane' },
  { title: 'Draw Bending', url: 'capabilities.html#draw-bending', keywords: 'draw bending pipe hollow tube custom profiles mandrel dies CNC' },
  { title: 'Coil Bending', url: 'capabilities.html#coil-bending', keywords: 'coil bending springs industrial chemical processing pitch custom coils' },
  { title: 'Compression Bending', url: 'capabilities.html#compression-bending', keywords: 'compression bending pipeline beam tubing' },
  { title: 'Fabrication & Finishing', url: 'capabilities.html#fabrication-finishing', keywords: 'fabrication welding custom assemblies machine shop drilling tapping threading' },
  { title: 'Coatings & Insulation', url: 'capabilities.html#coatings-insulation', keywords: 'coating insulation powder galvanizing tape wrap shrink sleeve NACE AMPP' },
  { title: 'Standards', url: 'capabilities.html#standards', keywords: 'standards certifications ASME ASTM API CSA PFI' },
  { title: 'Quality Assurance', url: 'capabilities.html#quality-assurance', keywords: 'quality assurance MTR inspection test plan non-conformance' },
  { title: 'Stocked Materials', url: 'capabilities.html#stocked-materials', keywords: 'inventory stock pipe structurals carbon steel stainless aluminum material' },
  { title: 'Applications', url: 'applications.html', keywords: 'applications oil gas industrial infrastructure chemical processing' },
  { title: 'Resources', url: 'resources.html', keywords: 'resources guides technical information documentation' },
  { title: 'About Us', url: 'about.html', keywords: 'about company story history team values' },
  { title: 'Blog', url: 'blog.html', keywords: 'blog news articles posts' },
  { title: 'Careers', url: 'careers.html', keywords: 'careers jobs employment positions' },
  { title: 'Contact', url: 'contact.html', keywords: 'contact information email phone address' },
  { title: 'FAQs', url: 'faqs.html', keywords: 'frequently asked questions faq help support' },
];

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.classList.remove('visible');
      return;
    }

    const results = searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) ||
             item.keywords.toLowerCase().includes(query);
    });

    displaySearchResults(results, searchResults);
  });

  // Close search results when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
      searchResults.classList.remove('visible');
    }
  });
}

function displaySearchResults(results, container) {
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<div class="search-no-results">No results found</div>';
    container.classList.add('visible');
    return;
  }

  results.forEach(result => {
    const resultItem = document.createElement('a');
    resultItem.href = result.url;
    resultItem.className = 'search-result-item';
    resultItem.innerHTML = `
      <span class="search-result-title">${result.title}</span>
    `;
    container.appendChild(resultItem);
  });

  container.classList.add('visible');
}

// FAQ Accordion
document.querySelectorAll('.faq-item h3').forEach(header => {
  header.addEventListener('click', function() {
    const faqItem = this.parentElement;
    const answer = faqItem.querySelector('p');

    // Toggle visibility
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

// Accordion Sections
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const section = this.parentElement;
    const content = section.querySelector('.accordion-content');
    
    // Close all other accordion sections
    document.querySelectorAll('.accordion-section').forEach(s => {
      if (s !== section) {
        s.classList.remove('active');
        const c = s.querySelector('.accordion-content');
        if (c) c.style.display = 'none';
      }
    });
    
    // Toggle current section
    section.classList.toggle('active');
    if (content) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
  });
});
