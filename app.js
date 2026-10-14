/**
 * NutriPaws Enterprise | Pet Food Nutrition Solutions & Enterprise Hub
 * Interactive Application Engine & Business Logic
 */

// Global State
const EnterpriseState = {
  currentRole: 'Chief Veterinary Nutritionist',
  currentUser: {
    name: 'Dr. Evelyn Vance, PhD, DVM',
    title: 'Chief Veterinary Nutritionist',
    department: 'Nutritional Sciences & R&D',
    email: 'e.vance@apexpetnutrition.com',
    avatar: 'EV'
  },
  seatsTotal: 30,
  seatsUsed: 24,
  teamMembers: [
    { id: 1, name: 'Dr. Evelyn Vance, PhD', role: 'Chief Veterinary Nutritionist', email: 'e.vance@apexpetnutrition.com', dept: 'R&D Nutrition', status: 'Active', formulasAccess: 'Full / Admin', contractsAccess: 'Signatory', mfa: 'Enabled' },
    { id: 2, name: 'Marcus Sterling', role: 'VP of Procurement & Co-Packing', email: 'm.sterling@apexpetnutrition.com', dept: 'Supply Chain', status: 'Active', formulasAccess: 'Read Only', contractsAccess: 'Signatory', mfa: 'Enabled' },
    { id: 3, name: 'Elena Rostova, MSc', role: 'Formulation Research Scientist', email: 'e.rostova@apexpetnutrition.com', dept: 'Formulation Lab', status: 'Active', formulasAccess: 'Full / Editor', contractsAccess: 'No Access', mfa: 'Enabled' },
    { id: 4, name: 'Jonathan Thorne', role: 'Director of Sponsorship & BD', email: 'j.thorne@apexpetnutrition.com', dept: 'Partnerships', status: 'Active', formulasAccess: 'Read Only', contractsAccess: 'Negotiator', mfa: 'Enabled' },
    { id: 5, name: 'Dr. Alistair Chen, DVM', role: 'Regulatory & AAFCO Auditor', email: 'a.chen@apexpetnutrition.com', dept: 'Compliance', status: 'Active', formulasAccess: 'Audit Only', contractsAccess: 'Reviewer', mfa: 'Enabled' },
    { id: 6, name: 'Sarah Jenkins', role: 'Quality Control Lead', email: 's.jenkins@apexpetnutrition.com', dept: 'QA / Lab Testing', status: 'Active', formulasAccess: 'Editor', contractsAccess: 'No Access', mfa: 'Enabled' }
  ],
  matchmakingPartners: [
    {
      id: 'p1',
      name: 'BlueRidge Sustainable Proteins',
      type: 'Biotech Ingredient Supplier',
      specialty: 'Black Soldier Fly & Upcycled Insect Larvae Meal',
      species: 'Canine & Feline',
      aafcoTier: 'AAFCO / FEDIAF Certified',
      matchScore: 98,
      capacity: '4,500 MT / Year',
      location: 'Oregon, USA',
      budgetTier: '$250k - $1.2M',
      icon: '🦗'
    },
    {
      id: 'p2',
      name: 'OceanBio Microalgae DHA',
      type: 'Marine Lipid Innovator',
      specialty: 'Fermented Microalgae EPA/DHA Omega-3 Oil',
      species: 'Canine, Feline & Exotic',
      aafcoTier: 'EU FEDIAF & FDA GRAS',
      matchScore: 95,
      capacity: '1,200 MT / Year',
      location: 'Reykjavik, Iceland',
      budgetTier: '$150k - $800k',
      icon: '🌊'
    },
    {
      id: 'p3',
      name: 'Vanguard Co-Packing Facilities',
      type: 'OEM Co-Packer & Extrusion',
      specialty: 'Cold-Extruded Kibble & Freeze-Dried Raw Morsels',
      species: 'Canine & Feline',
      aafcoTier: 'SQF Level 3 & USDA Organic',
      matchScore: 92,
      capacity: '18,000 MT / Year',
      location: 'Wisconsin, USA',
      budgetTier: '$500k - $3.5M',
      icon: '🏭'
    },
    {
      id: 'p4',
      name: 'CanineBiome Clinical Research',
      type: 'Veterinary Clinical CRO',
      specialty: 'In-vivo Gut Microbiome & Palatability Trials',
      species: 'Canine',
      aafcoTier: 'NASC & IACUC Accredited',
      matchScore: 96,
      capacity: '40 Concurrent Cohorts',
      location: 'Cambridge, UK',
      budgetTier: '$80k - $450k',
      icon: '🔬'
    },
    {
      id: 'p5',
      name: 'Nordic Clean Petfoods Group',
      type: 'Global Brand Sponsor',
      specialty: 'Hypoallergenic Single-Protein Feline Diets',
      species: 'Feline',
      aafcoTier: 'FEDIAF Strict Compliant',
      matchScore: 89,
      capacity: 'Multi-Market Retail',
      location: 'Stockholm, Sweden',
      budgetTier: '$1.5M - $5.0M',
      icon: '🐾'
    },
    {
      id: 'p6',
      name: 'BioGut Postbiotics Lab',
      type: 'Microbiome Biotech',
      specialty: 'Heat-Stabilized Postbiotic Cell Wall Fractions',
      species: 'Canine & Feline',
      aafcoTier: 'AAFCO Complete',
      matchScore: 94,
      capacity: '800 MT / Year',
      location: 'Montreal, Canada',
      budgetTier: '$100k - $600k',
      icon: '🧬'
    }
  ],
  pipelineDeals: [
    { id: 'd1', title: 'High-Omega3 Senior Canine Formula Co-Pack', partner: 'OceanBio + Vanguard', value: '$850,000', stage: 'discovery', date: 'Oct 08, 2026' },
    { id: 'd2', title: 'Hypoallergenic Insect Protein Feline Range', partner: 'BlueRidge Sustainable', value: '$1,420,000', stage: 'rfp', date: 'Oct 04, 2026' },
    { id: 'd3', title: 'Microbiome Gut-Shield Clinical Feeding Study', partner: 'CanineBiome CRO', value: '$220,000', stage: 'review', date: 'Sep 29, 2026' },
    { id: 'd4', title: 'Nordic Clean Feline Exclusive IP Licensing', partner: 'Nordic Clean Group', value: '$2,800,000', stage: 'terms', date: 'Sep 22, 2026' },
    { id: 'd5', title: 'Freeze-Dried Raw Complete Bio-Shield Batch #4', partner: 'Vanguard Co-Packing', value: '$3,150,000', stage: 'executed', date: 'Sep 15, 2026' }
  ],
  contracts: {
    'ip-licensing': {
      title: 'Exclusive Formulation IP Licensing & Royalty Master Agreement',
      type: 'Intellectual Property Licensing',
      parties: {
        licensor: 'NutriPaws Enterprise Solutions Inc. (DE, USA)',
        licensee: 'Nordic Clean Petfoods Group AB (Sweden)'
      },
      effectiveDate: '2026-11-01',
      term: '36 Months (Renewable)',
      royaltyRate: '4.25% of Net Wholesale Sales',
      annualMinimum: '$250,000 USD',
      jurisdiction: 'State of Delaware & EU FEDIAF Standard Code',
      clauses: [
        {
          num: '1.0 GRANT OF EXCLUSIVE LICENSE',
          body: 'Licensor hereby grants to Licensee an exclusive, non-transferable right and license to utilize Proprietary Formulation Code #NP-CANINE-HYPO8 (Hydrolyzed Insect & Marine Algae Lipid Profile) for manufacturing, packaging, and global commercial distribution in designated territories.'
        },
        {
          num: '2.0 NUTRITIONAL ADEQUACY & REGULATORY COMPLIANCE',
          body: 'Licensee covenants that all commercial products produced under this Agreement shall strictly conform to AAFCO 2026 Official Publication standards for Canine Adult Maintenance and FEDIAF Complete Dog Food Guidelines, maintaining crude protein minimum of 28.5% and EPA+DHA minimum of 0.85% on dry matter basis.'
        },
        {
          num: '3.0 QUALITY AUDIT & PALATABILITY VERIFICATION',
          body: 'Licensor retains the perpetual right to perform bi-annual unannounced third-party lab assay audits and two-bowl palatability verification tests across active manufacturing runs. Any batch showing >1.5% nutritional variance shall be recalled at Licensee expense.'
        },
        {
          num: '4.0 INDEMNIFICATION & PRODUCT LIABILITY',
          body: 'Each party shall indemnify, defend, and hold harmless the other against any claims, losses, or pathogen contamination damages arising out of manufacturing defects, non-approved formula substitutions, or regulatory non-compliance.'
        }
      ]
    },
    'copacking-sla': {
      title: 'Co-Manufacturing & OEM Co-Packing Master Service Agreement (SLA)',
      type: 'Manufacturing Service Level Agreement',
      parties: {
        licensor: 'NutriPaws Enterprise Hub',
        licensee: 'Vanguard Co-Packing Facilities LLC'
      },
      effectiveDate: '2026-10-15',
      term: '24 Months',
      royaltyRate: 'Fixed Toll Fee: $0.48 / kg extruded',
      annualMinimum: '5,000 Metric Tons / Year',
      jurisdiction: 'United States (Wisconsin / FDA FSMA Rules)',
      clauses: [
        {
          num: '1.0 MANUFACTURING ALLOCATION & MINIMUMS',
          body: 'Manufacturer guarantees dedicated extrusion line capacity of not less than 450 Metric Tons per calendar month with maximum allowable moisture variance of +/- 0.4% post-drying.'
        },
        {
          num: '2.0 COLD-CHAIN & INGREDIENT TRACEABILITY',
          body: 'Manufacturer shall maintain lot-level digital blockchain traceability for all incoming micro-ingredients, cold-pressed marine lipids, and postbiotic additions, accessible via NutriPaws API.'
        }
      ]
    },
    'clinical-nda': {
      title: 'Veterinary Clinical Feeding Trial & Microbiome NDA Agreement',
      type: 'Clinical Trial Agreement & Confidentiality',
      parties: {
        licensor: 'NutriPaws Scientific Board',
        licensee: 'CanineBiome Clinical Research Ltd'
      },
      effectiveDate: '2026-10-20',
      term: '12 Months',
      royaltyRate: 'Fixed Grant: $140,000 USD',
      annualMinimum: 'N/A - 60-Subject Canine Trial',
      jurisdiction: 'United Kingdom / IACUC Ethical Standards',
      clauses: [
        {
          num: '1.0 CLINICAL PROTOCOL & FECAL METABOLOMICS',
          body: 'CRO shall conduct a 12-week double-blind randomized crossover feeding trial testing stool consistency, microbiome Shannon diversity index, and serum immunoglobulin G concentrations.'
        }
      ]
    }
  }
};

// DOM Helper
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Toast Notification
function showToast(message, type = 'success') {
  let container = $('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? '✅' : type === 'info' ? 'ℹ️' : '⚠️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initDashboardTabs();
  initRoleSwitcher();
  initMatchmaking();
  initKanban();
  initFormulaSimulator();
  initContractStudio();
  initTeamSeats();
  initCharts();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   Theme & RTL Support
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggles = $$('[data-theme-toggle]');
  const isLight = localStorage.getItem('nutripaws-theme') === 'light';
  if (isLight) document.body.classList.add('light-theme');

  themeToggles.forEach(btn => {
    btn.innerHTML = isLight ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const lightActive = document.body.classList.contains('light-theme');
      localStorage.setItem('nutripaws-theme', lightActive ? 'light' : 'dark');
      themeToggles.forEach(b => b.innerHTML = lightActive ? '☀️' : '🌙');
      showToast(lightActive ? 'Switched to Enterprise Light Mode' : 'Switched to Deep Dark Mode', 'info');
      // Redraw charts if present
      initCharts();
    });
  });
}

function initMobileMenu() {
  const menuToggle = $('[data-site-menu-toggle]');
  const navLinks = $('#site-menu');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      if (navLinks.classList.contains('open')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-secondary)';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid var(--border-subtle)';
      } else {
        navLinks.style.display = '';
      }
    });
  }

  // Sidebar toggle for dashboard mobile
  const sidebarToggle = $('.mobile-menu-toggle');
  const sidebar = $('.app-sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

/* --------------------------------------------------------------------------
   Navigation & Role Switcher
   -------------------------------------------------------------------------- */
function initNavigation() {
  // Handle hash changes for dashboard navigation
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash || '#overview';
    switchDashboardTab(hash.replace('#', ''));
  });

  if (window.location.hash && $('.dashboard-app')) {
    switchDashboardTab(window.location.hash.replace('#', ''));
  }
}

function initDashboardTabs() {
  const links = $$('.sidebar-link[data-tab]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.tab;
      window.location.hash = target;
      switchDashboardTab(target);
      const sidebar = $('.app-sidebar');
      if (sidebar && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }
    });
  });
}

function switchDashboardTab(tabId) {
  const panels = $$('.tab-panel');
  const links = $$('.sidebar-link[data-tab]');
  if (!panels.length) return;

  panels.forEach(p => p.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  const targetPanel = $(`#tab-${tabId}`);
  const targetLink = $(`.sidebar-link[data-tab="${tabId}"]`);

  if (targetPanel) {
    targetPanel.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
    
    // update topbar title
    const titles = {
      'overview': { title: 'Executive Overview', desc: 'B2B Pet Nutrition Intelligence & Deal Pipeline' },
      'matchmaking': { title: 'Sponsorship & Client Matchmaking', desc: 'Connect with verified pet food brands, ingredient innovators & co-packers' },
      'formulation': { title: 'Nutritional Formulation & Lab', desc: 'AAFCO / FEDIAF compliant formulation engine & batch simulator' },
      'contracts': { title: 'Contract Templates & Digital Execution', desc: 'Enterprise IP licensing, SLAs and cryptographic digital signatures' },
      'team-seats': { title: 'Team Seats & Role-Based Access (RBAC)', desc: 'Enterprise quota management, permissions matrix & audit logs' }
    };
    if (titles[tabId]) {
      const topTitle = $('.topbar-title-area h1');
      const topDesc = $('.topbar-title-area p');
      if (topTitle) topTitle.textContent = titles[tabId].title;
      if (topDesc) topDesc.textContent = titles[tabId].desc;
    }

    // Trigger chart renders if needed
    if (tabId === 'overview' || tabId === 'formulation') {
      setTimeout(initCharts, 50);
    }
  }
}

function initRoleSwitcher() {
  const roleSelect = $('#roleSwitcher');
  if (!roleSelect) return;

  const roleProfiles = {
    'Chief Veterinary Nutritionist': { name: 'Dr. Evelyn Vance, PhD, DVM', dept: 'Nutritional Sciences', avatar: 'EV', badge: 'Scientific Lead' },
    'VP of Procurement & Co-Packing': { name: 'Marcus Sterling', dept: 'Supply Chain & Manufacturing', avatar: 'MS', badge: 'Procurement VP' },
    'Sponsorship & BD Director': { name: 'Jonathan Thorne', dept: 'Strategic Partnerships', avatar: 'JT', badge: 'Deal Signatory' },
    'Regulatory & AAFCO Auditor': { name: 'Dr. Alistair Chen, DVM', dept: 'Compliance & Auditing', avatar: 'AC', badge: 'Global Auditor' }
  };

  roleSelect.addEventListener('change', (e) => {
    const selected = e.target.value;
    EnterpriseState.currentRole = selected;
    const profile = roleProfiles[selected] || roleProfiles['Chief Veterinary Nutritionist'];
    
    const nameEl = $('.user-name');
    const roleEl = $('.user-role');
    const avatarEl = $('.user-avatar');
    
    if (nameEl) nameEl.textContent = profile.name;
    if (roleEl) roleEl.textContent = profile.badge;
    if (avatarEl) avatarEl.textContent = profile.avatar;

    showToast(`Active Perspective Switched to: ${selected} (${profile.name})`, 'info');
  });
}

/* --------------------------------------------------------------------------
   Sponsorship Matchmaking Hub
   -------------------------------------------------------------------------- */
function initMatchmaking() {
  const container = $('#matchmakingGrid');
  if (!container) return;

  renderMatchPartners(EnterpriseState.matchmakingPartners);

  // Search & Filters
  const searchInput = $('#matchSearch');
  const typeFilter = $('#matchTypeFilter');
  const speciesFilter = $('#matchSpeciesFilter');

  function applyFilters() {
    const q = (searchInput?.value || '').toLowerCase();
    const type = typeFilter?.value || 'all';
    const species = speciesFilter?.value || 'all';

    const filtered = EnterpriseState.matchmakingPartners.filter(p => {
      const matchQuery = p.name.toLowerCase().includes(q) || p.specialty.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
      const matchType = type === 'all' || p.type.toLowerCase().includes(type.toLowerCase());
      const matchSpecies = species === 'all' || p.species.toLowerCase().includes(species.toLowerCase());
      return matchQuery && matchType && matchSpecies;
    });

    renderMatchPartners(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (typeFilter) typeFilter.addEventListener('change', applyFilters);
  if (speciesFilter) speciesFilter.addEventListener('change', applyFilters);

  // Match RFP Proposal Modal
  initProposalModal();
}

function renderMatchPartners(partners) {
  const container = $('#matchmakingGrid');
  if (!container) return;

  if (partners.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted); font-size: 1.1rem;">No matching enterprise partners found for the selected criteria.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 12px;" onclick="$('#matchSearch').value=''; $('#matchTypeFilter').value='all'; $('#matchSpeciesFilter').value='all'; renderMatchPartners(EnterpriseState.matchmakingPartners);">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = partners.map(p => `
    <div class="match-card">
      <div class="match-card-header">
        <div class="match-header-left">
          <div class="match-avatar">${p.icon}</div>
          <div style="min-width: 0; flex: 1;">
            <div class="match-company">${p.name}</div>
            <div class="match-meta">${p.type} • 📍 ${p.location}</div>
          </div>
        </div>
        <div class="match-score-badge">${p.matchScore}% Match</div>
      </div>
      <div>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">Key Specialty:</div>
        <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 12px; word-break: break-word;">${p.specialty}</p>
        <div class="match-tags">
          <span class="tag">🐾 ${p.species}</span>
          <span class="tag">⚖️ ${p.aafcoTier}</span>
          <span class="tag">📦 ${p.capacity}</span>
          <span class="tag">💰 Budget: ${p.budgetTier}</span>
        </div>
      </div>
      <div style="display: flex; gap: 10px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
        <button class="btn btn-primary btn-sm" style="flex: 1; min-width: 120px;" onclick="openProposalModal('${p.id}')">
          🚀 Send Match RFP
        </button>
        <button class="btn btn-secondary btn-sm" onclick="viewPartnerDossier('${p.id}')">
          Specs
        </button>
      </div>
    </div>
  `).join('');
}

window.viewPartnerDossier = function(partnerId) {
  const p = EnterpriseState.matchmakingPartners.find(x => x.id === partnerId);
  if (!p) return;
  alert(`📋 ENTERPRISE DOSSIER: ${p.name}\n\n• Type: ${p.type}\n• Specialty: ${p.specialty}\n• Compliance: ${p.aafcoTier}\n• Capacity: ${p.capacity}\n• Location: ${p.location}\n• Match Synergy Index: ${p.matchScore}%\n• Direct API Endpoint: Connected & Verified`);
};

function initProposalModal() {
  const modal = $('#rfpModal');
  const closeBtn = $('#closeRfpModal');
  const cancelBtn = $('#cancelRfpBtn');
  const rfpForm = $('#rfpForm');

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  if (cancelBtn) cancelBtn.addEventListener('click', () => modal.classList.remove('open'));

  if (rfpForm) {
    rfpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const partnerName = $('#rfpPartnerName').value;
      const budget = $('#rfpBudget').value;
      const volume = $('#rfpVolume').value;
      const title = $('#rfpDealTitle').value;

      // Add to pipeline
      const newDeal = {
        id: 'd' + (EnterpriseState.pipelineDeals.length + 1),
        title: title || 'Custom Pet Food Formulation Co-Op',
        partner: partnerName,
        value: '$' + Number(budget).toLocaleString(),
        stage: 'rfp',
        date: 'Today'
      };
      EnterpriseState.pipelineDeals.push(newDeal);
      renderKanban();

      modal.classList.remove('open');
      showToast(`🎉 RFP and Confidentiality Term Sheet successfully dispatched to ${partnerName}! Added to Deal Pipeline.`, 'success');
    });
  }
}

window.openProposalModal = function(partnerId) {
  const partner = EnterpriseState.matchmakingPartners.find(p => p.id === partnerId);
  if (!partner) return;

  const modal = $('#rfpModal');
  if (!modal) return;

  $('#rfpPartnerName').value = partner.name;
  $('#rfpPartnerType').value = partner.type;
  $('#rfpDealTitle').value = `${partner.name} - Joint Formulation & Supply RFP`;
  modal.classList.add('open');
};

/* --------------------------------------------------------------------------
   Kanban Sponsorship Pipeline
   -------------------------------------------------------------------------- */
function initKanban() {
  renderKanban();

  const addDealBtn = $('#addDealBtn');
  if (addDealBtn) {
    addDealBtn.addEventListener('click', () => {
      const dealTitle = prompt('Enter Deal / Sponsorship Project Title:', 'Organic Kelp & Omega-3 Puppy Kibble Rollout');
      if (!dealTitle) return;
      const partner = prompt('Enter Partner / Co-Packer Name:', 'Apex BioNutrition Partners');
      const val = prompt('Estimated Contract Value ($):', '650000');

      EnterpriseState.pipelineDeals.push({
        id: 'd' + (EnterpriseState.pipelineDeals.length + 1),
        title: dealTitle,
        partner: partner || 'Enterprise Partner',
        value: '$' + (Number(val) || 500000).toLocaleString(),
        stage: 'discovery',
        date: 'Just now'
      });
      renderKanban();
      showToast('New deal added to Discovery column!', 'success');
    });
  }
}

function renderKanban() {
  const stages = ['discovery', 'rfp', 'review', 'terms', 'executed'];
  
  stages.forEach(stage => {
    const col = $(`#kanban-${stage}`);
    const countBadge = $(`#count-${stage}`);
    if (!col) return;

    const deals = EnterpriseState.pipelineDeals.filter(d => d.stage === stage);
    if (countBadge) countBadge.textContent = deals.length;

    col.innerHTML = deals.map(deal => `
      <div class="kanban-card" draggable="true" data-id="${deal.id}" onclick="inspectDeal('${deal.id}')">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <span class="tag" style="font-size: 0.7rem;">${deal.date}</span>
          <span class="kanban-card-deal">${deal.value}</span>
        </div>
        <div class="kanban-card-title">${deal.title}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">🤝 ${deal.partner}</div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; padding-top: 6px; border-top: 1px solid var(--border-subtle);">
          <button class="btn btn-outline btn-sm" style="font-size: 0.7rem; padding: 2px 6px;" onclick="event.stopPropagation(); advanceDeal('${deal.id}')">Advance ➔</button>
        </div>
      </div>
    `).join('');
  });
}

window.advanceDeal = function(dealId) {
  const deal = EnterpriseState.pipelineDeals.find(d => d.id === dealId);
  if (!deal) return;

  const stageOrder = ['discovery', 'rfp', 'review', 'terms', 'executed'];
  const currentIndex = stageOrder.indexOf(deal.stage);
  if (currentIndex < stageOrder.length - 1) {
    deal.stage = stageOrder[currentIndex + 1];
    renderKanban();
    showToast(`Deal "${deal.title}" advanced to ${deal.stage.toUpperCase()} stage!`, 'success');
  } else {
    showToast(`Deal is already at final EXECUTED status!`, 'info');
  }
};

window.inspectDeal = function(dealId) {
  const deal = EnterpriseState.pipelineDeals.find(d => d.id === dealId);
  if (!deal) return;
  alert(`💼 SPONSORSHIP DEAL DETAILS:\n\n• Title: ${deal.title}\n• Enterprise Partner: ${deal.partner}\n• Contract Value: ${deal.value}\n• Current Lifecycle Stage: ${deal.stage.toUpperCase()}\n• SLA Audit Status: AAFCO & FEDIAF Cleared\n• Target Production Start: Q1 2027`);
};

/* --------------------------------------------------------------------------
   Nutrition Formulation & Lab Simulator
   -------------------------------------------------------------------------- */
function initFormulaSimulator() {
  const sliders = ['simProtein', 'simFat', 'simOmega', 'simVolume'];
  sliders.forEach(id => {
    const el = $(`#${id}`);
    if (el) {
      el.addEventListener('input', updateFormulaCalculations);
    }
  });

  const speciesSelect = $('#simSpecies');
  const specialtySelect = $('#simSpecialty');
  if (speciesSelect) speciesSelect.addEventListener('change', updateFormulaCalculations);
  if (specialtySelect) specialtySelect.addEventListener('change', updateFormulaCalculations);

  const exportBtn = $('#exportFormulaBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      showToast('📄 Generating official AAFCO & FEDIAF Batch Formulation Certificate (PDF)...', 'info');
      setTimeout(() => {
        showToast('✅ Formulation Spec Sheet #NP-9921 downloaded successfully!', 'success');
      }, 1200);
    });
  }

  updateFormulaCalculations();
}

function updateFormulaCalculations() {
  const protein = Number($('#simProtein')?.value || 30);
  const fat = Number($('#simFat')?.value || 16);
  const omega = Number($('#simOmega')?.value || 1.2);
  const volumeMT = Number($('#simVolume')?.value || 50);

  // Update visual text displays
  if ($('#valProtein')) $('#valProtein').textContent = `${protein}%`;
  if ($('#valFat')) $('#valFat').textContent = `${fat}%`;
  if ($('#valOmega')) $('#valOmega').textContent = `${omega}%`;
  if ($('#valVolume')) $('#valVolume').textContent = `${volumeMT} MT`;

  // Calculated metrics
  // Base raw material cost per kg
  const baseCostPerKg = (protein * 0.055) + (fat * 0.042) + (omega * 0.45) + 0.65;
  const wholesaleRecommendation = baseCostPerKg * 1.75;
  const retailRecommendation = baseCostPerKg * 3.20;
  const grossMargin = ((wholesaleRecommendation - baseCostPerKg) / wholesaleRecommendation) * 100;
  
  // AAFCO Safety Index Score
  let aafcoScore = 99.4;
  if (protein < 22) aafcoScore -= 12;
  if (fat < 10) aafcoScore -= 8;
  if (omega < 0.5) aafcoScore -= 5;
  if (aafcoScore > 99.8) aafcoScore = 99.8;

  const totalBatchCost = baseCostPerKg * volumeMT * 1000;
  const carbonOffsetTons = (volumeMT * 1.85).toFixed(1);

  if ($('#calcCostKg')) $('#calcCostKg').textContent = `$${baseCostPerKg.toFixed(2)}`;
  if ($('#calcWholesale')) $('#calcWholesale').textContent = `$${wholesaleRecommendation.toFixed(2)}`;
  if ($('#calcRetail')) $('#calcRetail').textContent = `$${retailRecommendation.toFixed(2)}`;
  if ($('#calcMargin')) $('#calcMargin').textContent = `${grossMargin.toFixed(1)}%`;
  if ($('#calcAafco')) $('#calcAafco').textContent = `${aafcoScore.toFixed(1)}%`;
  if ($('#calcBatchTotal')) $('#calcBatchTotal').textContent = `$${totalBatchCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  if ($('#calcCarbon')) $('#calcCarbon').textContent = `${carbonOffsetTons} t CO₂e`;

  // Compliance meter
  const meter = $('#aafcoMeterFill');
  if (meter) {
    meter.style.width = `${Math.min(aafcoScore, 100)}%`;
    meter.style.background = aafcoScore > 90 ? 'var(--gradient-brand)' : 'var(--brand-amber)';
  }
}

/* --------------------------------------------------------------------------
   Contract Studio & Digital E-Signature Execution
   -------------------------------------------------------------------------- */
function initContractStudio() {
  const contractSelect = $('#contractTemplateSelect');
  if (contractSelect) {
    contractSelect.addEventListener('change', (e) => {
      loadContractTemplate(e.target.value);
    });
  }

  const signBtn = $('#executeContractBtn');
  if (signBtn) {
    signBtn.addEventListener('click', () => {
      executeDigitalSignature();
    });
  }

  const printBtn = $('#printContractBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const downloadBtn = $('#downloadContractBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      showToast('📥 Exporting Cryptographically Signed Contract & Audit Certificate...', 'info');
      setTimeout(() => {
        showToast('✅ Enterprise Contract downloaded in PDF/A Compliance format!', 'success');
      }, 1000);
    });
  }

  // Load default template
  loadContractTemplate('ip-licensing');
}

function loadContractTemplate(key) {
  const data = EnterpriseState.contracts[key] || EnterpriseState.contracts['ip-licensing'];
  
  if ($('#docTitle')) $('#docTitle').textContent = data.title;
  if ($('#docLicensor')) $('#docLicensor').textContent = data.parties.licensor;
  if ($('#docLicensee')) $('#docLicensee').textContent = data.parties.licensee;
  if ($('#docDate')) $('#docDate').textContent = data.effectiveDate;
  if ($('#docJurisdiction')) $('#docJurisdiction').textContent = data.jurisdiction;
  if ($('#docRoyalty')) $('#docRoyalty').textContent = data.royaltyRate;
  if ($('#docMinimum')) $('#docMinimum').textContent = data.annualMinimum;

  const clausesContainer = $('#docClausesContainer');
  if (clausesContainer) {
    clausesContainer.innerHTML = data.clauses.map(c => `
      <div class="doc-clause">
        <h4>${c.num}</h4>
        <p>${c.body}</p>
      </div>
    `).join('');
  }

  // Reset signature status
  const sigStatus = $('#sigStatusLicensor');
  const sigStatusLic = $('#sigStatusLicensee');
  const sigHash = $('#sigHashBox');

  if (sigStatus) sigStatus.innerHTML = `<span style="color: var(--brand-amber);">⏳ Pending Digital Signature</span>`;
  if (sigStatusLic) sigStatusLic.innerHTML = `<span style="color: var(--brand-emerald);">✓ Signed by Partner Legal Rep</span>`;
  if (sigHash) sigHash.textContent = 'SHA-256 Hash: Pending Execution...';
}

function executeDigitalSignature() {
  const signer = EnterpriseState.currentUser.name;
  const role = EnterpriseState.currentUser.title;
  const timestamp = new Date().toISOString();
  const mockHash = '0x' + Array.from({ length: 48 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

  const sigStatus = $('#sigStatusLicensor');
  const sigHash = $('#sigHashBox');

  if (sigStatus) {
    sigStatus.innerHTML = `
      <span style="color: var(--brand-emerald); font-weight: 700;">✓ EXECUTED & SEALED</span><br/>
      <small style="color: var(--text-secondary); font-size: 0.75rem;">Signed by: ${signer} (${role})<br/>Timestamp: ${timestamp}</small>
    `;
  }

  if (sigHash) {
    sigHash.innerHTML = `<strong>Cryptographic SHA-256 Certificate:</strong><br/><span style="font-size: 0.72rem; word-break: break-all; color: var(--brand-primary);">${mockHash}</span>`;
  }

  showToast(`✍️ Contract successfully executed by ${signer}! Blockchain audit timestamp appended.`, 'success');
}

/* --------------------------------------------------------------------------
   Team Seats & RBAC Management
   -------------------------------------------------------------------------- */
function initTeamSeats() {
  renderTeamTable();

  const inviteBtn = $('#openInviteModal');
  const inviteModal = $('#inviteModal');
  const closeInvite = $('#closeInviteModal');
  const cancelInvite = $('#cancelInviteBtn');
  const inviteForm = $('#inviteForm');

  if (inviteBtn && inviteModal) {
    inviteBtn.addEventListener('click', () => inviteModal.classList.add('open'));
  }
  if (closeInvite && inviteModal) {
    closeInvite.addEventListener('click', () => inviteModal.classList.remove('open'));
  }
  if (cancelInvite && inviteModal) {
    cancelInvite.addEventListener('click', () => inviteModal.classList.remove('open'));
  }

  if (inviteForm) {
    inviteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#inviteName').value;
      const email = $('#inviteEmail').value;
      const role = $('#inviteRole').value;
      const dept = $('#inviteDept').value;

      if (EnterpriseState.seatsUsed >= EnterpriseState.seatsTotal) {
        showToast('Seat quota reached! Please add additional enterprise seats first.', 'warning');
        return;
      }

      EnterpriseState.teamMembers.push({
        id: EnterpriseState.teamMembers.length + 1,
        name: name,
        role: role,
        email: email,
        dept: dept || 'Nutritional Operations',
        status: 'Active',
        formulasAccess: role.includes('Nutritionist') || role.includes('Scientist') ? 'Full / Editor' : 'Read Only',
        contractsAccess: role.includes('VP') || role.includes('Director') ? 'Signatory' : 'Reviewer',
        mfa: 'Pending Setup'
      });

      EnterpriseState.seatsUsed += 1;
      updateSeatQuotaDisplay();
      renderTeamTable();

      inviteModal.classList.remove('open');
      inviteForm.reset();
      showToast(`🎉 Enterprise Seat assigned! Invitation credentials dispatched to ${email}`, 'success');
    });
  }

  // Add Seats Button
  const addSeatsBtn = $('#addSeatsBtn');
  if (addSeatsBtn) {
    addSeatsBtn.addEventListener('click', () => {
      EnterpriseState.seatsTotal += 5;
      updateSeatQuotaDisplay();
      showToast('🌟 5 Additional Enterprise Seats added to subscription quota!', 'success');
    });
  }

  updateSeatQuotaDisplay();
}

function updateSeatQuotaDisplay() {
  const used = EnterpriseState.seatsUsed;
  const total = EnterpriseState.seatsTotal;
  const percent = Math.round((used / total) * 100);

  if ($('#seatCountLabel')) $('#seatCountLabel').textContent = `${used} / ${total} Seats Active`;
  if ($('#seatPercentLabel')) $('#seatPercentLabel').textContent = `${percent}% Capacity`;
  if ($('#seatProgressBar')) $('#seatProgressBar').style.width = `${percent}%`;
}

function renderTeamTable() {
  const tbody = $('#teamTableBody');
  if (!tbody) return;

  tbody.innerHTML = EnterpriseState.teamMembers.map(m => `
    <tr>
      <td>
        <div style="font-weight: 600; color: var(--text-primary);">${m.name}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${m.email}</div>
      </td>
      <td>
        <span class="badge badge-blue">${m.role}</span>
        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">${m.dept}</div>
      </td>
      <td>
        <span style="font-size: 0.82rem; font-weight: 600; color: ${m.formulasAccess.includes('Full') ? 'var(--brand-emerald)' : 'var(--text-secondary)'};">
          ${m.formulasAccess}
        </span>
      </td>
      <td>
        <span style="font-size: 0.82rem; font-weight: 600; color: ${m.contractsAccess === 'Signatory' ? 'var(--brand-purple)' : 'var(--text-secondary)'};">
          ${m.contractsAccess}
        </span>
      </td>
      <td>
        <span class="badge ${m.mfa === 'Enabled' ? 'badge-emerald' : 'badge-amber'}">${m.mfa}</span>
      </td>
      <td>
        <button class="btn btn-outline btn-sm" style="font-size: 0.72rem; padding: 4px 8px;" onclick="editMemberPermissions(${m.id})">Edit RBAC</button>
      </td>
    </tr>
  `).join('');
}

window.editMemberPermissions = function(memberId) {
  const m = EnterpriseState.teamMembers.find(x => x.id === memberId);
  if (!m) return;
  const newRole = prompt(`Update RBAC Role for ${m.name}:`, m.role);
  if (newRole) {
    m.role = newRole;
    renderTeamTable();
    showToast(`Permissions updated for ${m.name}`, 'info');
  }
};

/* --------------------------------------------------------------------------
   Canvas Charts & Visual Analytics
   -------------------------------------------------------------------------- */
function initCharts() {
  renderNutrientChart();
  renderRevenueChart();
}

function renderNutrientChart() {
  const canvas = document.getElementById('nutrientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const isLight = document.body.classList.contains('light-theme');

  // Set canvas resolution
  const width = canvas.parentElement.clientWidth || 500;
  const height = 240;
  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);

  const categories = ['Crude Protein', 'Crude Fat', 'EPA+DHA', 'Prebiotics', 'Calcium:Phos', 'Ash Max'];
  const formulaValues = [34, 18, 1.4, 3.8, 1.25, 6.2];
  const aafcoStandards = [26, 12, 0.5, 1.0, 1.10, 8.5];

  const barWidth = Math.min((width - 80) / categories.length / 2.6, 32);
  const gap = (width - 60) / categories.length;
  const startX = 50;
  const maxVal = 40;

  // Grid lines
  ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = height - 40 - (i * (height - 70) / 4);
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(width - 20, y);
    ctx.stroke();

    ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.font = '10px Plus Jakarta Sans';
    ctx.fillText(`${(i * 10)}%`, 10, y + 3);
  }

  // Draw Bars
  categories.forEach((cat, idx) => {
    const x = startX + (idx * gap);
    
    // Formula Bar
    const h1 = (formulaValues[idx] / maxVal) * (height - 70);
    const y1 = height - 40 - h1;
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.roundRect(x, y1, barWidth, h1, [4, 4, 0, 0]);
    ctx.fill();

    // Standard Bar
    const h2 = (aafcoStandards[idx] / maxVal) * (height - 70);
    const y2 = height - 40 - h2;
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.roundRect(x + barWidth + 4, y2, barWidth, h2, [4, 4, 0, 0]);
    ctx.fill();

    // Category Label
    ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
    ctx.font = '10px Plus Jakarta Sans';
    ctx.textAlign = 'center';
    ctx.fillText(cat, x + barWidth, height - 15);
  });
}

function renderRevenueChart() {
  const canvas = document.getElementById('revenueCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const isLight = document.body.classList.contains('light-theme');

  const width = canvas.parentElement.clientWidth || 500;
  const height = 240;
  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);

  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const data = [1.2, 1.8, 2.4, 2.9, 3.6, 4.8]; // in Millions
  const maxVal = 6.0;

  // Grid
  ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 3; i++) {
    const y = height - 40 - (i * (height - 70) / 3);
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(width - 20, y);
    ctx.stroke();

    ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.font = '10px Plus Jakarta Sans';
    ctx.fillText(`$${(i * 2)}M`, 10, y + 3);
  }

  // Draw Area / Line
  const stepX = (width - 80) / (months.length - 1);
  const points = data.map((val, idx) => ({
    x: 50 + (idx * stepX),
    y: height - 40 - ((val / maxVal) * (height - 70))
  }));

  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
  grad.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, height - 40);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, height - 40);
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  points.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Points & Labels
  points.forEach((p, idx) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#0ea5e9';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
    ctx.font = '11px Plus Jakarta Sans';
    ctx.textAlign = 'center';
    ctx.fillText(months[idx], p.x, height - 15);
  });
}

// Window resize handler for charts
window.addEventListener('resize', () => {
  initCharts();
});

// Enterprise Sign Out Handler
window.signOut = function() {
  showToast('Signing out of NutriPaws Enterprise Hub...', 'info');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 700);
};

// Social Authentication Handler
window.socialAuth = function(provider) {
  showToast(`Connecting to ${provider} Enterprise SSO...`, 'info');
  setTimeout(() => {
    showToast(`Authenticated via ${provider}! Redirecting to Hub...`, 'success');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 700);
  }, 600);
};
