import { NEWS_CATEGORIES, NEWS_GENERATORS } from './newsData.js';
console.log('Winnie Clicker Engine Loaded (v2.1 - Level Locking Active)');


// --- GAME CONFIGURATION ---

const STARTING_REVENUE_PER_CLICK = 1;

// 40 Tier Definitions
const ITEM_DEFINITIONS = [
    { name: "Claim Form", baseCost: 15, rps: 0.1 },
    { name: "Customer Service Call", baseCost: 100, rps: 1 },
    { name: "Prior Authorization", baseCost: 500, rps: 5 },
    { name: "In-Network Provider", baseCost: 1500, rps: 15 },
    { name: "Out-of-Network Surprise", baseCost: 5000, rps: 50 },
    { name: "Deductible Increase", baseCost: 15000, rps: 150 },
    { name: "Copay Adjustment", baseCost: 50000, rps: 500 },
    { name: "Claims Review Dept", baseCost: 150000, rps: 1500 },
    { name: "Medical Coding Specialist", baseCost: 500000, rps: 5000 },
    { name: "Policy Exclusion Clause", baseCost: 1500000, rps: 15000 }, // Chaos Lvl 1
    { name: "Appeals Department", baseCost: 5000000, rps: 50000 },
    { name: "Risk Assessment Team", baseCost: 15000000, rps: 150000 },
    { name: "Actuarial Analysis Unit", baseCost: 50000000, rps: 500000 },
    { name: "Premium Rate Adjustment", baseCost: 150000000, rps: 1500000 },
    { name: "Provider Contract Renegotiation", baseCost: 500000000, rps: 5000000 }, // Chaos Lvl 2
    { name: "Billing Dispute Resolution", baseCost: 1500000000, rps: 15000000 },
    { name: "Multi-State Expansion", baseCost: 5000000000, rps: 50000000 },
    { name: "Compliance Department", baseCost: 15000000000, rps: 150000000 },
    { name: "Federal Oversight Negotiation", baseCost: 50000000000, rps: 500000000 },
    { name: "Winnie's National Empire", baseCost: 150000000000, rps: 1500000000 }, // Chaos Lvl 3

    // --- TIER 3 EXPANSION: GALACTIC INSURANCE ---
    { name: "Global Health Conglomerate", baseCost: 500000000000, rps: 5000000000 },
    { name: "Orbital Wellness Station", baseCost: 2000000000000, rps: 20000000000 },
    { name: "Lunar Deductible Base", baseCost: 10000000000000, rps: 100000000000 },
    { name: "Mars Colony Coverage", baseCost: 50000000000000, rps: 500000000000 },
    { name: "Asteroid Risk Mining", baseCost: 250000000000000, rps: 2500000000000 },
    { name: "Interplanetary Policy", baseCost: 1000000000000000, rps: 10000000000000 }, // Quadrillion
    { name: "Sun Dyson Sphere", baseCost: 5000000000000000, rps: 50000000000000 },
    { name: "Galactic Network Provider", baseCost: 25000000000000000, rps: 250000000000000 },
    { name: "Black Hole Coverage", baseCost: 100000000000000000, rps: 1000000000000000 },
    { name: "Time Travel Premium", baseCost: 500000000000000000, rps: 5000000000000000 },
    { name: "Multiverse Expansion", baseCost: 2500000000000000000, rps: 25000000000000000 }, // Quintillion
    { name: "Clone Copay Adjustment", baseCost: 10000000000000000000, rps: 100000000000000000 },
    { name: "Telepathic Claims Dept", baseCost: 50000000000000000000, rps: 500000000000000000 },
    { name: "Reality Warping Clause", baseCost: 250000000000000000000, rps: 2500000000000000000 },
    { name: "4th Dimension Actuary", baseCost: 1000000000000000000000, rps: 10000000000000000000 }, // Sextillion
    { name: "Quantum Entanglement Plan", baseCost: 5000000000000000000000, rps: 50000000000000000000 },
    { name: "Universal Healthcare Monopoly", baseCost: 25000000000000000000000, rps: 250000000000000000000 },
    { name: "Existence Tax", baseCost: 100000000000000000000000, rps: 1000000000000000000000 }, // Septillion
    { name: "The Big Bang Policy", baseCost: 5000000000000000000000000, rps: 50000000000000000000000 },
    { name: "Winnie, Devourer of Worlds", baseCost: 25000000000000000000000000, rps: 250000000000000000000000 },

    // --- CRIMINAL ENTERPRISE & FRAUD TIERS ---
    { name: "Double-Billing Scheme", baseCost: 100000000000000000000000000, rps: 1000000000000000000000000 }, // Octillion
    { name: "Phantom Provider Network", baseCost: 500000000000000000000000000, rps: 5000000000000000000000000 },
    { name: "Offshore Treat Haven", baseCost: 2500000000000000000000000000, rps: 25000000000000000000000000 },
    { name: "Squeaky Toy Money Laundering", baseCost: 10000000000000000000000000000, rps: 100000000000000000000000000 }, // Nonillion
    { name: "Catnip Cartel Partnership", baseCost: 50000000000000000000000000000, rps: 500000000000000000000000000 },
    { name: "The Treat Mafia", baseCost: 250000000000000000000000000000, rps: 2500000000000000000000000000 },
    { name: "Global Corruption Ring", baseCost: 1000000000000000000000000000000, rps: 10000000000000000000000000000 }, // Decillion
    { name: "Intergalactic Fugitive Status", baseCost: 5000000000000000000000000000000, rps: 50000000000000000000000000000 },
    { name: "Universal Crime Syndicate", baseCost: 25000000000000000000000000000000, rps: 250000000000000000000000000000 },
    { name: "Winnie, The Infinite Outlaw", baseCost: 100000000000000000000000000000000, rps: 1000000000000000000000000000000 },

    // --- POLITICAL WARFARE & SOVEREIGN TIERS ---
    { name: "Supreme Court Bribery Fund", baseCost: 5e33, rps: 5e31 },
    { name: "Sovereign Immunity Loophole", baseCost: 2.5e34, rps: 2.5e32 },
    { name: "Executive Order: Free Cheetos", baseCost: 1e35, rps: 1e33 },
    { name: "Gerrymandered Treat Districts", baseCost: 5e35, rps: 5e33 },
    { name: "Constitutional Rewriting Dept", baseCost: 2.5e36, rps: 2.5e34 },
    { name: "Lobbyist for the Void", baseCost: 1e37, rps: 1e35 },
    { name: "Super-PAC for Squeaky Toys", baseCost: 5e37, rps: 5e35 },
    { name: "Treat-Based Embassy", baseCost: 2.5e38, rps: 2.5e36 },
    { name: "Department of Counter-ICE Zoomies", baseCost: 1e39, rps: 1e37 },
    { name: "Anti-MAGA Tactical Unit", baseCost: 5e39, rps: 5e37 },

    // --- CONCEPTUAL & METAPHYSICAL TIERS ---
    { name: "Monopoly on the Concept of 'Good'", baseCost: 2.5e40, rps: 2.5e38 },
    { name: "Taxing the Astral Plane", baseCost: 1e41, rps: 1e39 },
    { name: "Insurance for Reincarnation Errors", baseCost: 5e41, rps: 5e39 },
    { name: "Eternity Policy (Non-Refundable)", baseCost: 2.5e42, rps: 2.5e40 },
    { name: "Privatized Afterlife Gatekeeper", baseCost: 1e43, rps: 1e41 },
    { name: "Soul-Deductible Management", baseCost: 5e43, rps: 5e41 },
    { name: "Karmic Debt Collector", baseCost: 2.5e44, rps: 2.5e42 },
    { name: "Multiversal Default Insurance", baseCost: 1e45, rps: 1e43 },
    { name: "Copyrighting the Vacuum of Space", baseCost: 5e45, rps: 5e43 },
    { name: "Winnie's Existential Cartel", baseCost: 2.5e46, rps: 2.5e44 },

    // --- ABSOLUTE DOMINANCE TIERS ---
    { name: "Infinite Revenue Loop", baseCost: 1e47, rps: 1e45 },
    { name: "The Singularity Policy", baseCost: 5e47, rps: 5e45 },
    { name: "Sentient Currency", baseCost: 2.5e48, rps: 2.5e46 },
    { name: "Post-Reality Sales Team", baseCost: 1e49, rps: 1e47 },
    { name: "Dimensional Surcharge", baseCost: 5e49, rps: 5e47 },
    { name: "The End-of-Time Premium", baseCost: 2.5e50, rps: 2.5e48 },
    { name: "Winnie: The Final Constant", baseCost: 1e51, rps: 1e49 },
    { name: "Universal Undo Button", baseCost: 5e51, rps: 5e49 },
    { name: "Policy for the Heat Death of Content", baseCost: 2.5e52, rps: 2.5e50 },
    { name: "Winnie, The Alpha and Omega", baseCost: 1e53, rps: 1e51 },

    // --- HYPER-FRAUD & ULTIMATE SCANDAL ---
    { name: "Laundering Reality Itself", baseCost: 5e53, rps: 5e51 },
    { name: "Phantom Existence Network", baseCost: 2.5e54, rps: 2.5e52 },
    { name: "Insurance for Stolen Timelines", baseCost: 1e55, rps: 1e53 },
    { name: "The Grand Cosmic Grift", baseCost: 5e55, rps: 5e53 },
    { name: "Ponzi Scheme for Entropy", baseCost: 2.5e56, rps: 2.5e54 },
    { name: "Sovereign Citizen of the Universe", baseCost: 1e57, rps: 1e55 },
    { name: "Unlicensed Creation Permits", baseCost: 5e57, rps: 5e55 },
    { name: "The Void-Based Tax Haven", baseCost: 2.5e58, rps: 2.5e56 },
    { name: "Counterfeit Divinity", baseCost: 1e59, rps: 1e57 },
    { name: "Winnie's Absolute Tyranny", baseCost: 5e59, rps: 5e57 },

    // --- THE FINAL FRONTIER ---
    { name: "Beyond the Infinite Policy", baseCost: 1e60, rps: 1e58 },
    { name: "Meta-Insurance Agency", baseCost: 1e65, rps: 1e63 },
    { name: "Recursive Revenue Generation", baseCost: 1e70, rps: 1e68 },
    { name: "The Simulation's Landlord", baseCost: 1e75, rps: 1e73 },
    { name: "Owner of the Source Code", baseCost: 1e80, rps: 1e78 },
    { name: "The Developer's Nightmare", baseCost: 1e85, rps: 1e83 },
    { name: "Game Engine Monopoly", baseCost: 1e90, rps: 1e88 },
    { name: "Infinite Cookie Conglomerate", baseCost: 1e95, rps: 1e93 },
    { name: "Winnie: The True Player", baseCost: 1e100, rps: 1e98 },
    { name: "Uninstallation Insurance", baseCost: 1e105, rps: 1e103 },

    // --- DAISY & MOPPET THEMED ENDGAME ---
    { name: "Daisy's Midnight Zoomies", baseCost: 1e110, rps: 1e108 },
    { name: "Moppet's Judgmental Glare", baseCost: 1e120, rps: 1e118 },
    { name: "Squeaky Toy Singularity", baseCost: 1e130, rps: 1e128 },
    { name: "The Infinite Yarn Ball", baseCost: 1e140, rps: 1e138 },
    { name: "Winnie, Daisy, & Moppet: The Trinity", baseCost: 1e150, rps: 1e148 }
];

const CLICK_UPGRADES = [
    { id: 'click_1', name: "Cheeto Dust Fingers", cost: 500, multiplier: 2 },
    { id: 'click_2', name: "Iron Paws", cost: 5000, multiplier: 2 },
    { id: 'click_3', name: "Diamond Claws", cost: 50000, multiplier: 3 },
    { id: 'click_4', name: "Quantum Taps", cost: 1000000, multiplier: 5 },
    { id: 'click_5', name: "Reality Breaking Boop", cost: 50000000, multiplier: 10 }
];

const SPICE_TOLERANCE_UPGRADES = [
    { id: 'spice_1', name: "Milk Chug", cost: 2000, tolerance: 50 },
    { id: 'spice_2', name: "Tongue Coating", cost: 10000, tolerance: 100 },
    { id: 'spice_3', name: "Steel Stomach", cost: 100000, tolerance: 250 },
    { id: 'spice_4', name: "Lava Glands", cost: 5000000, tolerance: 500 }
];

const CRIME_UPGRADES = [
    { id: 'crime_1', name: "Bribery for Beginners", cost: 1000000, riskReduction: 0.05 },
    { id: 'crime_2', name: "Money Laundromat", cost: 100000000, riskReduction: 0.1 },
    { id: 'crime_3', name: "Swiss Treat Accounts", cost: 5000000000, riskReduction: 0.15 },
    { id: 'crime_4', name: "Diplomatic Immunity", cost: 1000000000000, riskReduction: 0.2 }
];

// --- STATE MANAGEMENT ---

// --- MINIGAME DEFINITIONS ---
const STOCKS = [
    { id: 'bone', name: "Bone (BNE)", basePrice: 10, volatility: 0.15 },
    { id: 'toy', name: "Squeaky Toy (SQK)", basePrice: 35, volatility: 0.2 },
    { id: 'kibble', name: "Premium Kibble (KBL)", basePrice: 120, volatility: 0.25 },
    { id: 'treat', name: "Gourmet Treat (TRT)", basePrice: 600, volatility: 0.35 }
];

const SPELLS = [
    { id: 'biscuits', name: "Manifest Biscuits", cost: 15, icon: '🍪', desc: "Gain 300s of revenue instantly." },
    { id: 'frenzy', name: "Force Frenzy", cost: 40, icon: '🔥', desc: "Start a 7x Frenzy for 15s." },
    { id: 'zoomies', name: "Summon Zoomies", cost: 30, icon: '💨', desc: "Instantly trigger Daisy's Zoomies." },
    { id: 'clean', name: "Clear Paperwork", cost: 25, icon: '📄', desc: "Reduce Risk and Spice by 40." }
];

const GARDEN_PLANTS = [
    { id: 'ball', name: "Tennis Ball Seed", cost: 100, icon: '🎾', growthTime: 60, effect: "Increases Click Power by 2%" },
    { id: 'plush', name: "Plushie Sprout", cost: 500, icon: '🧸', growthTime: 120, effect: "Increases RPS by 1%" },
    { id: 'rope', name: "Rope Vine", cost: 2500, icon: '🪢', growthTime: 300, effect: "Reduces Risk by 0.1/s" }
];

const SPIRITS = [
    { id: 'glutton', name: "Winnie the Glutton", icon: '🐕', desc: "+10% RPS, +25% Risk Gain" },
    { id: 'swift', name: "Daisy the Swift", icon: '🐈', desc: "+15% Click Power, -10% RPS" },
    { id: 'stoic', name: "Moppet the Stoic", icon: '🐈‍⬛', desc: "-50% Risk Gain, -15% RPS" }
];

const state = {
    revenue: 0,
    totalRevenue: 0,
    revenuePerClick: 1,
    revenuePerSecond: 0,
    risk: 0,
    spice: 0,
    mana: 100, // Moppet's Patience
    level: 1,
    levelProgress: 0,
    complianceCredits: 0,
    items: [], // Initialized in initGame
    upgrades: {}, // Map of key -> boolean
    chaosLevel: 0,
    prestige: {
        level: 0,
        biscuits: 0,
        totalBiscuits: 0,
        upgrades: {}
    },
    startTime: Date.now(),
    isPaused: false,
    meltdowns: 0,
    auditsSurvived: 0,
    auditActive: false,
    manualClicks: 0,
    // Minigame State
    stocks: STOCKS.map(s => ({ ...s, price: s.basePrice, owned: 0 })),
    activeMinigame: null,
    garden: {
        grid: new Array(4).fill(null).map(() => new Array(4).fill(null)), // 4x4 Grid
        seedsOwned: { ball: 5, plush: 2, rope: 1 }
    },
    pantheon: {
        slots: [null, null, null], // Diamond, Ruby, Jade
        swaps: 3,
        lastSwap: Date.now()
    },
    goldenBiscuits: 0,
    lastGoldenBiscuit: Date.now()
};

// --- UTILS ---
function useComplianceCredit() {
    if (state.complianceCredits > 0) {
        state.complianceCredits--;
        state.risk = Math.max(0, state.risk - 30);
        state.spice = Math.max(0, state.spice - 30);
        createFloatingText("-30 RISK / -30 SPICE", window.innerWidth / 2, window.innerHeight / 2);
        updateUI();
    }
}

// Attach to globalThis/window so index.html onclick can find it
globalThis.useComplianceCredit = useComplianceCredit;
globalThis.resetGame = () => {
    if (confirm("Are you sure you want to wipe your save and restart?")) {
        localStorage.removeItem('winnieEmpireSave');
        location.reload();
    }
};

globalThis.prestigeGame = () => {
    const gain = calculatePrestigeGain();
    if (gain < 1) {
        alert("You need at least 1 Gilded Paw to ascend!");
        return;
    }

    if (confirm(`Are you sure you want to Ascend? You will gain ${gain} Gilded Paws (🐾) but restart your progress.`)) {
        state.prestige.biscuits += gain;
        state.prestige.totalBiscuits += gain;
        state.prestige.level++;

        // Reset game state but keep prestige
        const prestige = state.prestige;
        state.revenue = 0;
        state.totalRevenue = 0;
        state.items.fill(0);
        state.upgrades = {};
        state.chaosLevel = 0;
        state.risk = 0;
        state.spice = 0;
        state.mana = 100;
        state.level = 1;
        state.levelProgress = 0;
        state.manualClicks = 0;
        state.prestige = prestige;

        localStorage.setItem('winnieEmpireSave', JSON.stringify(state));
        location.reload();
    }
};

function calculatePrestigeGain() {
    if (!state.prestige) return 0;
    // Basic formula: sqrt(totalRevenue / 1e12) - current total biscuits
    const totalPotential = Math.floor(Math.sqrt(state.totalRevenue / 1e12));
    return Math.max(0, totalPotential - (state.prestige.totalBiscuits || 0));
}

// --- DOM ELEMENTS ---
let el = {};

// --- NEWS TICKER ---
let tickerIndex = 0;

function updateNewsTicker() {
    if (!el.tickerContent) return;
    if (el.tickerContent.children.length > 0) return;

    // --- NEWS SELECTION LOGIC ---
    // Goal: Emphasis on Daisy, Moppet, and Winnie at all times.

    let characterNews = [...NEWS_CATEGORIES.BASE]; // Base contains heavy Winnie/Daisy/Moppet content
    let systemNews = [];

    // Expand pools based on progress
    if (state.totalRevenue > 1000) systemNews.push(...NEWS_CATEGORIES.INSURANCE_SATIRE);
    if (state.chaosLevel >= 1) systemNews.push(...NEWS_CATEGORIES.CHAOS);
    if (state.items[19] > 0 || state.auditsSurvived > 0) characterNews.push(...NEWS_CATEGORIES.SCANDAL);
    if (state.items[61] > 0) characterNews.push(...NEWS_CATEGORIES.LEGAL_DEFENSE);

    // Procedural character news
    characterNews.push(...NEWS_GENERATORS.SIBLINGS().slice(0, 100));

    // Procedural system/crime news
    if (state.auditsSurvived > 0) systemNews.push(...NEWS_GENERATORS.CRIMES().slice(0, 50));

    // Tier-based news (the "bogging down" part) - we limit its presence
    if (state.totalRevenue > 1e6) {
        systemNews.push(...NEWS_CATEGORIES.EXPANSION.slice(0, 100)); // Still only 100 of them
    }

    let message = "";
    // 80% chance for Character Emphasis, 20% for System/Insurance Satire
    if (Math.random() < 0.8 || systemNews.length === 0) {
        message = characterNews[Math.floor(Math.random() * characterNews.length)];
    } else {
        message = systemNews[Math.floor(Math.random() * systemNews.length)];
    }

    // Extremely rare special overrides
    if (Math.random() < 0.05) {
        if (state.meltdowns > 10) message = "SPECIAL: Winnie has been legally classified as a biological hazard. 🧪";
        if (state.items[49] > 0) message = "FINAL: Reality is just a snack that Winnie hasn't finished yet. 🌌";
    }

    const span = document.createElement('span');
    span.className = 'ticker-item';
    span.innerText = `🐕 ${message}`;

    let nextScheduled = false;
    const scheduleNext = () => {
        if (nextScheduled) return;
        nextScheduled = true;
        span.remove();
        setTimeout(updateNewsTicker, 500);
    };

    // Clean up after animation
    span.addEventListener('animationend', scheduleNext);

    // Backup timer (15s animation + 5s buffer)
    setTimeout(scheduleNext, 20000);

    el.tickerContent.appendChild(span);
}



// --- CORE LOGIC ---

function calculateMaxSpice() {
    let max = 100;
    SPICE_TOLERANCE_UPGRADES.forEach(upg => {
        if (state.upgrades[upg.id]) max += upg.tolerance;
    });
    return max;
}

function calculateRPS() {
    let rps = 0;
    ITEM_DEFINITIONS.forEach((def, index) => {
        const count = state.items[index];
        if (count > 0) {
            let multiplier = 1;
            if (state.upgrades[`${index}_A`]) multiplier *= 2;
            if (state.upgrades[`${index}_B`]) multiplier *= 2;
            if (state.upgrades[`${index}_C`]) multiplier *= 3;
            if (state.upgrades['global_spicy']) multiplier *= 1.25;

            rps += (def.rps * count * multiplier);
        }
    });

    // --- GARDEN BONUSES (RPS) ---
    state.garden.grid.forEach(row => row.forEach(cell => {
        if (cell && cell.id === 'plush') rps *= 1.01;
    }));

    // --- PANTHEON BONUSES (RPS) ---
    const slots = state.pantheon.slots;
    const eff = [1, 0.5, 0.25]; // Diamond, Ruby, Jade effectiveness

    slots.forEach((sId, i) => {
        if (!sId) return;
        const e = eff[i];
        if (sId === 'glutton') rps *= (1 + 0.1 * e);
        if (sId === 'swift') rps *= (1 - 0.1 * e);
        if (sId === 'stoic') rps *= (1 - 0.15 * e);
    });

    state.revenuePerSecond = rps;
}

function calculateClickValue() {
    let clickVal = STARTING_REVENUE_PER_CLICK;

    // Apply explicit click upgrades
    CLICK_UPGRADES.forEach(upg => {
        if (state.upgrades[upg.id]) clickVal *= upg.multiplier;
    });

    // Milestone check
    if (state.upgrades['global_click_1']) clickVal += 1;

    // Scaling Click Power: 1% of RPS added to click value
    if (state.level >= 10) {
        clickVal += state.revenuePerSecond * 0.01;
    }

    // --- GARDEN BONUSES (CLICK) ---
    state.garden.grid.forEach(row => row.forEach(cell => {
        if (cell?.id === 'ball') clickVal *= 1.02;
    }));

    // --- PANTHEON BONUSES (CLICK) ---
    const slots = state.pantheon.slots;
    const eff = [1, 0.5, 0.25];
    slots.forEach((sId, i) => {
        if (!sId) return;
        if (sId === 'swift') clickVal *= (1 + 0.15 * eff[i]);
    });

    state.revenuePerClick = clickVal;

    // Prestige Multiplier
    state.revenuePerClick *= (1 + (state.prestige.biscuits || 0) * 0.1);
}

function updateLevels() {
    const totalItems = state.items.reduce((a, b) => a + b, 0);
    const nextLevelAt = state.level * 25 + Math.pow(state.level, 1.5) * 10;

    if (totalItems >= nextLevelAt) {
        state.level++;
        createFloatingText(`LEVEL UP! LVL ${state.level} 📈`, window.innerWidth / 2, window.innerHeight / 2);
    }

    state.levelProgress = (totalItems / nextLevelAt) * 100;

    // Show Daisy at Level 5
    if (state.level >= 5) {
        if (el.daisy?.classList.contains('hidden')) {
            el.daisy.classList.remove('hidden');
            createFloatingText("Daisy Joined! 🐈‍⬛", window.innerWidth / 2, window.innerHeight / 2);
        }
    }

    // Show Moppet at Level 15
    if (state.level >= 15) {
        if (el.moppet?.classList.contains('hidden')) {
            el.moppet.classList.remove('hidden');
            el.manaGroup.style.display = 'block';
            createFloatingText("Moppet Joined! 🐈", window.innerWidth / 2, window.innerHeight / 2);
        }
    }

    // Show Prestige at high level or revenue
    if (state.totalRevenue > 1e11 || state.level >= 50) {
        el.prestigeContainer.style.display = 'block';
    }
}

function updateChaos() {
    // Chaos Levels
    if (state.items[9] > 0 || (state.items[8] >= 10 && state.totalRevenue >= 2 * ITEM_DEFINITIONS[9].baseCost)) {
        if (state.chaosLevel < 1) state.chaosLevel = 1;
    }
    if (state.items[14] > 0 || (state.items[13] >= 10 && state.totalRevenue >= 2 * ITEM_DEFINITIONS[14].baseCost)) {
        if (state.chaosLevel < 2) state.chaosLevel = 2;
    }
    if (state.items[19] > 0) {
        state.chaosLevel = 3;
    }

    document.body.className = `chaos-level-${state.chaosLevel}`;

    if (state.chaosLevel >= 3) {
        document.body.classList.add('antigravity-active');
        el.chaosDisplay.innerText = "REGULATORY CHAOS ACTIVE";
        el.chaosDisplay.style.color = "var(--chaos-purple)";
        el.chaosContainer.style.display = "block";
    } else if (state.chaosLevel >= 2) {
        el.chaosDisplay.innerText = "High Uncertainty";
        el.chaosContainer.style.display = "block";
    } else if (state.chaosLevel >= 1) {
        el.chaosDisplay.innerText = "Noticeable Drift";
        el.chaosContainer.style.display = "block";
    }
}

function triggerEvent(type) {
    state.isPaused = type === 'MELTDOWN'; // Only pause on Meltdown
    el.overlay.classList.remove('hidden');

    if (type === 'MELTDOWN') {
        el.overlayTitle.innerText = "SPICE MELTDOWN!";
        el.overlayDesc.innerText = "Production paused for 5s!";
        state.meltdowns++;

        setTimeout(() => {
            state.isPaused = false;
            el.overlay.classList.add('hidden');
            state.spice = 25;
            state.risk += 10;
        }, 5000);

    } else if (type === 'AUDIT') {
        el.overlayTitle.innerText = "FEDERAL AUDIT!";
        el.overlayDesc.innerText = "Revenue halved for 10s!";
        state.auditsSurvived++;
        state.auditActive = true;

        setTimeout(() => {
            el.overlay.classList.add('hidden');
        }, 2000); // Hide overlay quickly but keep penalty

        setTimeout(() => {
            state.auditActive = false;
            state.risk = 40;
            state.spice = Math.max(0, state.spice - 20);
        }, 10000);
    }
}

// --- INTERACTION ---

// Wait for DOM to be ready before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, attaching event listeners...');

    // Attach listener to container to ensure hits
    const cheetoContainer = document.getElementById('cheeto-container');
    console.log('Cheeto container:', cheetoContainer);

    if (cheetoContainer) {
        cheetoContainer.addEventListener('mousedown', (e) => {
            console.log('Cheeto clicked!');
            e.preventDefault(); // Prevent drag/select
            if (state.isPaused) return;

            calculateClickValue();
            state.revenue += state.revenuePerClick;
            state.totalRevenue += state.revenuePerClick;
            state.spice += 1;
            state.manualClicks++;

            // Award Compliance Credit every 500 clicks
            if (state.manualClicks % 500 === 0) {
                state.complianceCredits++;
                createFloatingText("+1 COMPLIANCE CREDIT! 📄", e.clientX, e.clientY);
            }

            const maxSpice = calculateMaxSpice();

            // Risk reduction
            let riskGen = 0.5;
            if (state.upgrades['global_risk']) riskGen -= 0.1;

            CRIME_UPGRADES.forEach(upg => {
                if (state.upgrades[upg.id]) riskGen -= upg.riskReduction;
            });

            // --- PANTHEON BONUSES (RISK) ---
            const slots = state.pantheon.slots;
            const eff = [1, 0.5, 0.25];
            slots.forEach((sId, i) => {
                if (sId === 'glutton') riskGen *= (1 + 0.25 * eff[i]);
                if (sId === 'stoic') riskGen *= (1 - 0.5 * eff[i]);
            });

            state.risk += Math.max(0.1, riskGen); // Minimum 0.1 risk per click

            // Visuals
            // Apply squish to the inner image
            if (el.cheeto) {
                el.cheeto.classList.remove('cheeto-squish');
                el.cheeto.offsetWidth; // Trigger reflow safely - ignored by some linters, but functional
                el.cheeto.classList.add('cheeto-squish');
            }

            // Make particles spawn properly
            createParticle(e.clientX, e.clientY);
            createFloatingText(`+$${state.revenuePerClick.toFixed(1)}`, e.clientX, e.clientY);

            if (state.spice >= maxSpice) triggerEvent('MELTDOWN');
            if (state.risk >= 100) triggerEvent('AUDIT');

            updateUI();
        });

        // Remove class on mouseup/leave
        const resetSquish = () => el.cheeto.classList.remove('cheeto-squish');
        cheetoContainer.addEventListener('mouseup', resetSquish);
        cheetoContainer.addEventListener('mouseleave', resetSquish);
    } else {
        console.error('Cheeto container not found!');
    }

    // Flip Card Interaction
    const flipCardInner = document.getElementById('flip-card-inner');
    if (flipCardInner) {
        flipCardInner.addEventListener('click', () => {
            console.log('Flip card clicked!');
            flipCardInner.classList.toggle('flipped');
        });
    } else {
        console.error('Flip card not found!');
    }
});

// Whimsical text variations
const FLAVOR_EMOJIS = ['💰', '💸', '🧀', '🦴', '🧡', '📈', '✨', '🔥'];

function createFloatingText(text, x, y) {
    const f = document.createElement('div');
    f.classList.add('floating-text');

    // 30% chance to add a random emoji
    if (Math.random() < 0.3) {
        const emoji = FLAVOR_EMOJIS[Math.floor(Math.random() * FLAVOR_EMOJIS.length)];
        text = `${text} ${emoji}`;
    }

    f.innerText = text;

    // Random variances for "whimsical" feel
    const randRot = Math.floor(Math.random() * 40) - 20; // -20deg to 20deg
    const randDrift = Math.floor(Math.random() * 100) - 50; // -50px to 50px X drift

    // Set custom properties for CSS animation
    f.style.setProperty('--rot', `${randRot}deg`);
    f.style.setProperty('--drift', `${randDrift}px`);

    f.style.left = `${x}px`;
    f.style.top = `${y}px`;

    // Append to body to ensure correct positioning relative to viewport/mouse
    document.body.appendChild(f);

    // Slightly variable removal time
    setTimeout(() => f.remove(), 1200);
}

function createParticle(x, y) {
    const p = document.createElement('div');
    p.classList.add('crumb-particle');

    // Random variance for particles
    const tx = Math.floor(Math.random() * 200) - 100; // -100 to 100 drift
    p.style.setProperty('--tx', `${tx}px`);

    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    // Append to body
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 1500);
}

function getCost(baseCost, count) {
    return baseCost * Math.pow(1.15, count);
}

function buyItem(index) {
    const def = ITEM_DEFINITIONS[index];
    const cost = getCost(def.baseCost, state.items[index]);

    if (state.revenue >= cost) {
        state.revenue -= cost;
        state.items[index]++;
        updateUI();
        updateChaos();
    }
}

function buyMaxItem(index) {
    const def = ITEM_DEFINITIONS[index];
    let count = state.items[index];
    const r = 1.15;

    // Geometric series sum formula to find max N
    // Cost = Base * r^count * (r^n - 1) / (r - 1)
    // n = log_r( (Cost * (r-1) / (Base * r^count)) + 1 )

    const baseAtCurrent = def.baseCost * Math.pow(r, count);
    const n = Math.floor(Math.log((state.revenue * (r - 1) / baseAtCurrent) + 1) / Math.log(r));

    if (n > 0) {
        const totalCost = baseAtCurrent * (Math.pow(r, n) - 1) / (r - 1);
        state.revenue -= totalCost;
        state.items[index] += n;
        updateUI();
        updateChaos();
        createFloatingText(`+${n} ${def.name}`, window.innerWidth / 2, window.innerHeight / 2);
    }
}

function buyUpgrade(key, cost) {
    if (state.revenue >= cost && !state.upgrades[key]) {
        state.revenue -= cost;
        state.upgrades[key] = true;
        updateUI();
        calculateRPS();
        calculateClickValue();
    }
}

// --- RENDER ---

function updateUI() {
    el.revenue.innerText = `$${Math.floor(state.revenue).toLocaleString()}`;

    const currentRPS = state.auditActive ? state.revenuePerSecond * 0.5 : state.revenuePerSecond;
    el.rps.innerText = `per second: $${currentRPS.toFixed(1).toLocaleString()}`;
    el.complianceDisplay.innerText = state.complianceCredits;

    const maxSpice = calculateMaxSpice();
    const spicePercent = (state.spice / maxSpice) * 100;

    el.spiceVal.innerText = `${Math.floor(state.spice)} / ${maxSpice}`;
    el.spiceBar.style.width = `${Math.min(100, spicePercent)}%`;

    // Dynamic Bar Colors
    if (spicePercent > 85) el.spiceBar.style.background = "var(--chaos-purple)";
    else if (spicePercent > 60) el.spiceBar.style.background = "#ff4d4d";
    else if (spicePercent > 30) el.spiceBar.style.background = "#ff944d";
    else el.spiceBar.style.background = "#ff6b6b";

    el.riskVal.innerText = Math.floor(state.risk);
    el.riskBar.style.width = `${Math.min(100, state.risk)}%`;

    if (state.risk > 85) el.riskBar.style.background = "var(--chaos-purple)";
    else if (state.risk > 60) el.riskBar.style.background = "#ff4d4d";
    else el.riskBar.style.background = "#4da6ff";

    // New Bars
    el.levelVal.innerText = state.level;
    el.levelBar.style.width = `${Math.min(100, state.levelProgress)}%`;

    if (state.level >= 15) {
        el.manaVal.innerText = Math.floor(state.mana);
        el.manaBar.style.width = `${state.mana}%`;
    }

    const prestigeGain = calculatePrestigeGain();
    el.prestigeGain.innerText = prestigeGain;

    // Compliance Button State
    const complianceBtn = document.getElementById('compliance-btn');
    if (complianceBtn) {
        if (state.complianceCredits > 0) {
            complianceBtn.style.opacity = "1";
            complianceBtn.style.cursor = "pointer";
            complianceBtn.classList.remove('btn-disabled');
        } else {
            complianceBtn.style.opacity = "0.4";
            complianceBtn.style.cursor = "not-allowed";
            complianceBtn.classList.add('btn-disabled');
        }
    }

    renderStore();
    renderUpgrades();

    // Minigame Button States
    const minigameReqs = {
        'btn-garden': 3,
        'btn-stock-market': 7,
        'btn-grimoire': 15,
        'btn-pantheon': 25
    };

    Object.entries(minigameReqs).forEach(([id, level]) => {
        const btn = document.getElementById(id);
        if (btn) {
            if (state.level < level) {
                btn.classList.add('locked-btn');
                btn.title = `Unlocks at Level ${level}`;
            } else {
                btn.classList.remove('locked-btn');
                btn.title = "Ready for Business";
            }
        }
    });
}

function renderStore() {
    ITEM_DEFINITIONS.forEach((def, index) => {
        let visible = index === 0;
        if (index > 0) {
            const prevCount = state.items[index - 1];
            if (prevCount >= 10 && state.totalRevenue >= (2 * def.baseCost)) {
                visible = true;
            }
        }
        if (state.items[index] > 0) visible = true;

        let itemEl = document.getElementById(`store-item-${index}`);

        if (!visible) {
            if (itemEl) itemEl.style.display = 'none';
            return;
        }

        const count = state.items[index];
        const cost = getCost(def.baseCost, count);
        const canAfford = state.revenue >= cost;

        if (!itemEl) {
            itemEl = document.createElement('div');
            itemEl.id = `store-item-${index}`;
            itemEl.className = 'store-item';

            itemEl.innerHTML = `
                <div class="item-info" style="flex: 1; pointer-events: none;">
                    <span class="item-name"></span>
                    <span class="item-cost"></span>
                </div>
                <div class="item-controls" style="display: flex; gap: 5px; align-items: center;">
                    <span class="item-owned" style="margin-right: 10px;"></span>
                    <button class="buy-max-btn" style="padding: 2px 6px; font-size: 0.7rem; background: var(--winnie-pink); border: none; border-radius: 4px; color: white; cursor: pointer;">MAX</button>
                </div>
            `;

            itemEl.onclick = (e) => {
                if (e.target.classList.contains('buy-max-btn')) {
                    buyMaxItem(index);
                    return;
                }
                const currentCost = getCost(def.baseCost, state.items[index]);
                if (state.revenue >= currentCost) buyItem(index);
            };

            el.storeList.appendChild(itemEl);
        }

        itemEl.style.display = 'flex';
        if (canAfford) itemEl.classList.remove('disabled');
        else itemEl.classList.add('disabled');

        // Update individual parts instead of innerHTML
        itemEl.querySelector('.item-name').innerText = def.name;
        itemEl.querySelector('.item-cost').innerText = `$${Math.floor(cost).toLocaleString()}`;
        itemEl.querySelector('.item-owned').innerText = count;
    });
}

function renderUpgrades() {
    const renderBtn = (key, cost, tooltip) => {
        let btn = document.getElementById(`upgrade-${key}`);

        if (state.upgrades[key]) {
            if (btn) btn.style.display = 'none';
            return;
        }

        // Visibility rule: "Player has generated at least 50% of its cost"
        if (cost > 0 && state.totalRevenue < cost * 0.5) return;

        if (!btn) {
            btn = document.createElement('div');
            btn.id = `upgrade-${key}`;
            btn.className = `upgrade-icon`;
            btn.innerText = "UP";
            btn.onclick = () => {
                if (state.revenue >= cost) buyUpgrade(key, cost);
            };
            el.upgradesList.appendChild(btn);
        }

        btn.style.display = 'flex';
        btn.title = `${tooltip} (Cost: $${cost.toLocaleString()})`;

        if (state.revenue >= cost) {
            btn.style.borderColor = 'var(--revenue-green)';
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        } else {
            btn.style.borderColor = '#555';
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        }
    };

    // 1. Item Productivity Upgrades (5 Unique Tiers per item)
    ITEM_DEFINITIONS.forEach((def, index) => {
        const count = state.items[index];
        if (count >= 1) renderBtn(`${index}_A`, def.baseCost * 10, `x2 ${def.name} Mastery`);
        if (count >= 10) renderBtn(`${index}_B`, def.baseCost * 100, `x2 ${def.name} Efficiency`);
        if (count >= 25) renderBtn(`${index}_C`, def.baseCost * 1000, `x3 ${def.name} Optimization`);
        if (count >= 50) renderBtn(`${index}_D`, def.baseCost * 10000, `x5 ${def.name} Dominance`);
        if (count >= 100) renderBtn(`${index}_E`, def.baseCost * 100000, `x10 ${def.name} Ascendance`);
    });

    // 2. Click Power Upgrades
    CLICK_UPGRADES.forEach(upg => {
        renderBtn(upg.id, upg.cost, `${upg.name} (x${upg.multiplier} Click Value)`);
    });

    // 3. Spice Tolerance Upgrades
    SPICE_TOLERANCE_UPGRADES.forEach(upg => {
        renderBtn(upg.id, upg.cost, `${upg.name} (+${upg.tolerance} Spice Max)`);
    });

    // 4. Crime Upgrades (Risk Reduction)
    CRIME_UPGRADES.forEach(upg => {
        renderBtn(upg.id, upg.cost, `${upg.name} (-${(upg.riskReduction * 100).toFixed(0)}% Risk per click)`);
    });

    // 5. Global Upgrades (Milestones)
    if (state.totalRevenue >= 1000) renderBtn('global_click_1', 0, "Electronic Claim Processing (+1 Click Rev)");
    if (state.auditsSurvived >= 3) renderBtn('global_risk', 0, "Automated Risk Modeling (-20% Risk Gen)");
    if (state.meltdowns >= 10) renderBtn('global_spicy', 0, "Spicy Efficiency Training (+25% Global Prod)");
}

// --- GAME LOOP ---
function startGameLoop() {
    setInterval(() => {
        if (state.isPaused) return;

        calculateRPS();

        // 10 ticks/sec
        const tickRev = (state.auditActive ? state.revenuePerSecond * 0.5 : state.revenuePerSecond) / 10;

        state.revenue += tickRev;
        state.totalRevenue += tickRev;

        // Passive Decay Logic
        // Spice cools down fast (5/sec), Risk cools down slow (1/sec)
        // But Chaos Level 3 (Winnie National Empire+) generates passive risk!

        let spiceDecay = 0.5;
        let riskDecay = 0.1;

        // Items acting against decay or adding generation
        // Optimized: Reduced generation from Actuarial Unit and ensured base decay remains
        if (state.items[19] > 0) riskDecay = -0.02; // Generates 0.2 Risk/sec (Reduced)
        if (state.items[9] > 0) riskDecay = 0.02;  // Reduced decay (feels 'heavy' but not 'stuck')

        if (state.spice > 0) state.spice = Math.max(0, state.spice - spiceDecay);

        // Risk doesn't decay below 0, and capped at 100 usually
        if (state.risk > 0 || riskDecay < 0) {
            state.risk = Math.max(0, Math.min(100, state.risk - riskDecay));
        }

        // Mana Regeneration
        if (state.level >= 15 && state.mana < 100) {
            state.mana = Math.min(100, state.mana + 0.05);
        }

        // Golden Biscuit Accrual (every 15 mins = 9000 ticks)
        if (Date.now() - state.lastGoldenBiscuit > 15 * 60000) {
            state.goldenBiscuits++;
            state.lastGoldenBiscuit = Date.now();
            createFloatingText("Golden Biscuit Accrued! 🦴", window.innerWidth / 2, window.innerHeight / 2);
        }

        // Pantheon Swap Regen (1 per hour)
        if (state.pantheon.swaps < 3 && Date.now() - state.pantheon.lastSwap > 60 * 60000) {
            state.pantheon.swaps++;
            state.pantheon.lastSwap = Date.now();
        }

        updateLevels();
        updateChaos();
        updateGarden();
        updateUI();
    }, 100);
}

function updateGarden() {
    // Passive Risk Reduction from Rope Vine
    let reduction = 0;
    state.garden.grid.forEach(row => row.forEach(cell => {
        if (cell && cell.id === 'rope') reduction += 0.01; // 0.1 per second (0.01 per 100ms)
    }));

    if (reduction > 0) {
        state.risk = Math.max(0, state.risk - reduction);
    }
}

// Random Events: Golden Cheeto
setInterval(() => {
    if (state.isPaused) return;
    if (Math.random() < 0.2) spawnGoldenCheeto(); // 20% chance every 10s

    // Daisy's Midnight Zoomies (Starts at level 5)
    if (state.level >= 5 && Math.random() < 0.1) spawnZoomieDaisy();

    // Moppet's Quality Audit (Starts at level 15)
    if (state.level >= 15 && Math.random() < 0.05) spawnMoppetAudit();
}, 10000);

setInterval(() => {
    const save = JSON.stringify({ ...state, startTime: null });
    localStorage.setItem('winnieEmpireSave', save);
}, 5000);

// Stock Market Updates (Every 10s)
setInterval(() => {
    if (state.isPaused) return;
    updateStocks();
    if (state.activeMinigame === 'stock') renderStockMarket();
}, 10000);

function updateStocks() {
    state.stocks.forEach(s => {
        const change = (Math.random() - 0.48) * 2 * s.volatility; // Bias slightly up
        s.price = Math.max(1, s.price * (1 + change));
    });
}

function spawnGoldenCheeto() {
    const gc = document.createElement('div');
    gc.className = 'golden-cheeto';
    gc.innerHTML = '🧀';
    gc.style.left = Math.random() * 80 + 10 + '%';
    gc.style.top = Math.random() * 80 + 10 + '%';

    gc.onclick = () => {
        const rewards = [
            {
                name: 'Frenzy', effect: () => {
                    state.revenuePerSecond *= 7;
                    createFloatingText('FRENZY! x7 RPS for 15s', window.innerWidth / 2, window.innerHeight / 2);
                    setTimeout(() => state.revenuePerSecond /= 7, 15000);
                }
            },
            {
                name: 'Lucky Paw', effect: () => {
                    const win = state.revenuePerSecond * 900 + 13;
                    state.revenue += win;
                    createFloatingText(`LUCKY! +$${Math.floor(win).toLocaleString()}`, window.innerWidth / 2, window.innerHeight / 2);
                }
            },
            {
                name: 'Click Frenzy', effect: () => {
                    state.revenuePerClick *= 77;
                    createFloatingText('CLICK FRENZY! x77 Click for 13s', window.innerWidth / 2, window.innerHeight / 2);
                    setTimeout(() => state.revenuePerClick /= 77, 13000);
                }
            }
        ];

        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        reward.effect();
        gc.remove();
    };

    document.body.appendChild(gc);
    setTimeout(() => gc.remove(), 10000);
}

function spawnZoomieDaisy() {
    const d = document.createElement('div');
    d.className = 'zoomie-daisy';
    d.innerHTML = '🐈‍⬛💨';
    d.style.left = '-100px';
    d.style.top = Math.random() * 60 + 20 + '%';
    document.body.appendChild(d);

    let clicked = false;
    d.onclick = () => {
        if (clicked) return;
        clicked = true;
        state.revenuePerSecond *= 2;
        createFloatingText('DAISY ZOOMIES! x2 RPS for 30s', window.innerWidth / 2, window.innerHeight / 2);
        d.innerHTML = '✨🐈‍⬛✨';
        setTimeout(() => {
            state.revenuePerSecond /= 2;
            if (d.parentElement) d.remove();
        }, 30000);
    };

    // Animate across screen
    const duration = 4000;
    d.animate([
        { left: '-100px' },
        { left: '110vw' }
    ], { duration: duration, iterations: 1 });

    setTimeout(() => { if (!clicked && d.parentElement) d.remove(); }, duration);
}

function spawnMoppetAudit() {
    const m = document.createElement('div');
    m.className = 'moppet-audit';
    m.innerHTML = '📄⚖️';
    m.style.left = Math.random() * 80 + 10 + '%';
    m.style.top = '10%';
    document.body.appendChild(m);

    let timer = 5;
    const updateTimer = () => {
        if (timer <= 0) {
            if (m.parentElement) {
                m.remove();
                createFloatingText('AUDIT FAILED! -5% Revenue', window.innerWidth / 2, window.innerHeight / 2);
                state.revenue *= 0.95;
            }
            return;
        }
        m.setAttribute('title', `Audit ends in ${timer}s! Click to resolve!`);
        timer--;
        setTimeout(updateTimer, 1000);
    };
    updateTimer();

    m.onclick = () => {
        state.complianceCredits += 2;
        createFloatingText('AUDIT PASSED! +2 Credits', window.innerWidth / 2, window.innerHeight / 2);
        m.remove();
    };
}

// --- MINIGAME RENDERERS ---


function renderGarden() {
    const content = document.getElementById('minigame-content');
    if (!content) return;

    // Safety check for seedsOwned
    const seedInventory = Object.entries(state.garden.seedsOwned).map(([id, count]) => {
        const plant = GARDEN_PLANTS.find(p => p.id === id);
        return plant ? `${plant.icon} x${count}` : null;
    }).filter(x => x).join(', ');

    content.innerHTML = `
        <p>Seeds: ${seedInventory}</p>
        <div class="garden-grid" style="display: grid; grid-template-columns: repeat(4, 16.5%); gap: 8px; background: #3e2723; padding: 15px; border-radius: 10px; justify-content: center;">
            ${state.garden.grid.map((row, y) => row.map((cell, x) => `
                <div class="garden-cell" onclick="handleGardenClick(${x}, ${y})" style="aspect-ratio: 1; background: #5d4037; border: 2px solid #3e2723; border-radius: 5px; display: flex; justify-content: center; align-items: center; font-size: 2rem; cursor: pointer; transition: background 0.2s;">
                    ${cell ? cell.icon : ''}
                </div>
            `).join('')).join('')}
        </div>
        <div id="seed-selector" style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
            ${GARDEN_PLANTS.map(p => `
                <button onclick="state.selectedSeed='${p.id}'; renderGarden();" class="btn" style="${state.selectedSeed === p.id ? 'border: 2px solid #00ff80; background: rgba(0,255,128,0.1)' : ''}">${p.icon} ${p.name}</button>
            `).join('')}
        </div>
        <p style="font-size: 0.8rem; margin-top: 10px; color: #aaa;">Select a seed and click an empty plot to plant. Plants provide <b>passive bonuses</b> while in the soil!</p>
    `;
}

globalThis.handleGardenClick = (x, y) => {
    const cell = state.garden.grid[y][x];
    if (cell) {
        const age = (Date.now() - cell.plantedAt) / 1000;
        if (age >= cell.growthTime) {
            // Harvest mature plant
            state.garden.grid[y][x] = null;
            const reward = Math.floor(state.revenuePerSecond * 60);
            state.revenue += reward;
            createFloatingText(`HARVESTED! +$${reward.toLocaleString()} +1 Seed`, window.innerWidth / 2, window.innerHeight / 2);
            state.garden.seedsOwned[cell.id]++;
            renderGarden();
            calculateRPS();
        } else {
            createFloatingText(`Growing... (${Math.floor((age / cell.growthTime) * 100)}%)`, window.innerWidth / 2, window.innerHeight / 2);
        }
    } else if (state.selectedSeed && state.garden.seedsOwned[state.selectedSeed] > 0) {
        state.garden.seedsOwned[state.selectedSeed]--;
        const plant = GARDEN_PLANTS.find(p => p.id === state.selectedSeed);
        state.garden.grid[y][x] = { ...plant, plantedAt: Date.now() };
        renderGarden();
    } else {
        createFloatingText("Select a seed first!", window.innerWidth / 2, window.innerHeight / 2);
    }
};

function renderPantheon() {
    const content = document.getElementById('minigame-content');
    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <p>Swaps: <b>${state.pantheon.swaps}/3</b></p>
            <button onclick="useGoldenBiscuit('swaps')" class="btn" style="background: gold; color: black; font-weight: bold;">Refill (${state.goldenBiscuits} 🦴)</button>
        </div>
        <div class="pantheon-slots" style="display: flex; gap: 20px; justify-content: center; margin-bottom: 25px; margin-top: 15px;">
            ${['💎 Diamond', '🛑 Ruby', '🟢 Jade'].map((name, i) => `
                <div class="slot" style="width: 100px; height: 130px; border: 2px dashed rgba(255,255,255,0.2); border-radius: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); position: relative;">
                    <div style="font-size: 0.7rem; margin-bottom: 10px; color: #aaa;">${name}</div>
                    <div id="slot-${i}" style="font-size: 3rem; filter: drop-shadow(0 0 10px rgba(255,255,255,0.3)); cursor: pointer;" onclick="assignSpirit(${i}, null)">
                        ${state.pantheon.slots[i] ? SPIRITS.find(s => s.id === state.pantheon.slots[i]).icon : '❓'}
                    </div>
                    ${state.pantheon.slots[i] ? `<div style="font-size: 0.6rem; color: #00ff80; margin-top: 5px;">ACTIVE</div>` : ''}
                </div>
            `).join('')}
        </div>
        <div class="spirits-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px;">
            ${SPIRITS.map(s => `
                <div class="spirit-card glass-panel" style="padding: 12px; text-align: center; cursor: pointer; border: 1px solid ${state.pantheon.slots.includes(s.id) ? '#00ff80' : 'var(--glass-border)'};" onclick="handleSpiritClick('${s.id}')">
                    <div style="font-size: 2rem; margin-bottom: 5px;">${s.icon}</div>
                    <div style="font-weight: bold; font-size: 0.9rem; margin-bottom: 5px;">${s.name}</div>
                    <div style="font-size: 0.7rem; line-height: 1.2; color: #ccc;">${s.desc}</div>
                </div>
            `).join('')}
        </div>
    `;
}

globalThis.assignSpirit = (slotIndex, spiritId) => {
    if (spiritId !== null && state.pantheon.swaps <= 0) {
        createFloatingText("No swaps left!", window.innerWidth / 2, window.innerHeight / 2);
        return;
    }

    // Check if spirit already slotted
    if (spiritId) {
        const existing = state.pantheon.slots.indexOf(spiritId);
        if (existing !== -1) state.pantheon.slots[existing] = null;
        state.pantheon.swaps--;
    }

    state.pantheon.slots[slotIndex] = spiritId;
    renderPantheon();
    calculateClickValue();
};

globalThis.handleSpiritClick = (id) => {
    const alreadySlotted = state.pantheon.slots.indexOf(id);
    if (alreadySlotted !== -1) {
        assignSpirit(alreadySlotted, null);
        return;
    }
    const empty = state.pantheon.slots.indexOf(null);
    if (empty !== -1) assignSpirit(empty, id);
    else createFloatingText("Slots full! Clear one first.", window.innerWidth / 2, window.innerHeight / 2);
};

function renderStockMarket() {
    const content = document.getElementById('minigame-content');
    content.innerHTML = `
        <p>Market operates on 10s ticks. Prices are in <b>seconds of production</b>.</p>
        <table class="stock-table">
            <thead>
                <tr>
                    <th>Asset</th>
                    <th>Price</th>
                    <th>Owned</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${state.stocks.map(s => `
                    <tr>
                        <td>${s.name}</td>
                        <td class="stock-price-up">$${s.price.toFixed(2)}</td>
                        <td>${s.owned}</td>
                        <td>
                            <button onclick="buyStock('${s.id}')" class="btn">Buy</button>
                            <button onclick="sellStock('${s.id}')" class="btn">Sell</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderGrimoire() {
    const content = document.getElementById('minigame-content');
    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <p>Moppet's Patience (Mana): <b>${Math.floor(state.mana)}/100</b></p>
            <button onclick="useGoldenBiscuit('mana')" class="btn" style="background: gold; color: black; font-weight: bold;">Refill (${state.goldenBiscuits} 🦴)</button>
        </div>
        <div class="spell-grid">
            ${SPELLS.map(s => `
                <div class="spell-card ${state.mana < s.cost ? 'locked' : ''}" onclick="castSpell('${s.id}')">
                    <div class="spell-icon">${s.icon}</div>
                    <div class="spell-name">${s.name}</div>
                    <div class="spell-cost">${s.cost} Mana</div>
                    <div class="spell-desc" style="font-size: 0.8rem; margin-top: 5px;">${s.desc}</div>
                </div>
            `).join('')}
        </div>
    `;
}

globalThis.buyStock = (id) => {
    const s = state.stocks.find(x => x.id === id);
    const cost = s.price * state.revenuePerSecond;
    if (state.revenue >= cost) {
        state.revenue -= cost;
        s.owned++;
        renderStockMarket();
    } else {
        createFloatingText("Not enough revenue!", window.innerWidth / 2, window.innerHeight / 2);
    }
};

globalThis.sellStock = (id) => {
    const s = state.stocks.find(x => x.id === id);
    if (s.owned > 0) {
        const gain = s.price * state.revenuePerSecond;
        state.revenue += gain;
        s.owned--;
        renderStockMarket();
    }
};

globalThis.castSpell = (id) => {
    const s = SPELLS.find(x => x.id === id);
    if (state.mana >= s.cost) {
        state.mana -= s.cost;
        executeSpell(id);
        renderGrimoire();
        updateUI();
    } else {
        createFloatingText("Not enough Patience!", window.innerWidth / 2, window.innerHeight / 2);
    }
};

function executeSpell(id) {
    if (id === 'biscuits') {
        const win = state.revenuePerSecond * 300;
        state.revenue += win;
        createFloatingText(`MANIFEST! +$${Math.floor(win).toLocaleString()}`, window.innerWidth / 2, window.innerHeight / 2);
    } else if (id === 'frenzy') {
        state.revenuePerSecond *= 7;
        createFloatingText('GIGANTIC FRENZY! x7 RPS for 15s', window.innerWidth / 2, window.innerHeight / 2);
        setTimeout(() => state.revenuePerSecond /= 7, 15000);
    } else if (id === 'zoomies') {
        spawnZoomieDaisy();
    } else if (id === 'clean') {
        state.risk = Math.max(0, state.risk - 40);
        state.spice = Math.max(0, state.spice - 40);
        createFloatingText('PAPERWORK SHREDDED!', window.innerWidth / 2, window.innerHeight / 2);
    }
}

globalThis.useGoldenBiscuit = (type) => {
    if (state.goldenBiscuits > 0) {
        state.goldenBiscuits--;
        if (type === 'mana') {
            state.mana = 100;
            renderGrimoire();
        } else if (type === 'swaps') {
            state.pantheon.swaps = 3;
            renderPantheon();
        }
        createFloatingText("Golden Biscuit Used! 🦴", window.innerWidth / 2, window.innerHeight / 2);
        updateUI();
    } else {
        createFloatingText("Not enough Golden Biscuits!", window.innerWidth / 2, window.innerHeight / 2);
    }
};

// --- INITIALIZATION ---
function initGame() {
    console.log('Initializing game...');
    ensureStateConsistency();

    // Initialize DOM element references
    el = {
        revenue: document.getElementById('revenue-display'),
        rps: document.getElementById('rps-display'),
        cheeto: document.getElementById('cheeto'),
        storeList: document.getElementById('store-list'),
        upgradesList: document.getElementById('upgrades-list'),
        spiceBar: document.getElementById('spice-bar'),
        spiceVal: document.getElementById('spice-val'),
        riskBar: document.getElementById('risk-bar'),
        riskVal: document.getElementById('risk-val'),
        overlay: document.getElementById('event-overlay'),
        overlayTitle: document.getElementById('event-title'),
        overlayDesc: document.getElementById('event-desc'),
        particles: document.getElementById('particles-container'),
        floating: document.getElementById('floating-text-container'),
        chaosContainer: document.getElementById('chaos-container'),
        chaosDisplay: document.getElementById('chaos-display'),
        complianceDisplay: document.getElementById('compliance-display'),
        tickerContent: document.getElementById('news-ticker-content'),
        daisy: document.getElementById('daisy'),
        moppet: document.getElementById('moppet'),
        levelBar: document.getElementById('level-bar'),
        levelVal: document.getElementById('level-val'),
        manaBar: document.getElementById('mana-bar'),
        manaVal: document.getElementById('mana-val'),
        manaGroup: document.getElementById('mana-group'),
        prestigeContainer: document.getElementById('prestige-container'),
        prestigeGain: document.getElementById('prestige-gain'),
        centerPanel: document.getElementById('center-panel')
    };

    console.log('DOM elements:', el);

    calculateClickValue();
    updateUI();
    updateNewsTicker(); // Initial call

    // Hide loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => loadingOverlay.style.display = 'none', 500);
    }
    console.log('Game initialized!');
}



function ensureStateConsistency() {
    console.log('Ensuring state consistency...');
    // Load saved game with migration logic
    const saved = localStorage.getItem('winnieEmpireSave');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Deep merge to ensure new properties exist
            const merge = (target, source) => {
                Object.keys(source).forEach(key => {
                    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                        if (!target[key]) target[key] = {};
                        merge(target[key], source[key]);
                    } else {
                        target[key] = source[key];
                    }
                });
            };

            // Special handling for some keys
            const oldItems = parsed.items;
            delete parsed.items;
            const oldPrestige = parsed.prestige;
            delete parsed.prestige;

            merge(state, parsed);

            if (Array.isArray(oldItems)) {
                state.items = [...oldItems];
            }
            if (oldPrestige) {
                state.prestige = { ...state.prestige, ...oldPrestige };
            }

        } catch (e) {
            console.error("Save file corrupted, starting fresh.", e);
        }
    }

    // Ensure items array length
    if (!state.items || state.items.length < ITEM_DEFINITIONS.length) {
        const oldItems = state.items || [];
        state.items = new Array(ITEM_DEFINITIONS.length).fill(0);
        for (let i = 0; i < oldItems.length; i++) {
            state.items[i] = oldItems[i];
        }
    }

    // Ensure minigame sub-objects exist
    if (!state.garden) state.garden = { grid: new Array(4).fill(null).map(() => new Array(4).fill(null)), seedsOwned: { ball: 5 } };
    if (!state.pantheon) state.pantheon = { slots: [null, null, null], swaps: 3, lastSwap: Date.now() };
    if (!state.stocks) state.stocks = STOCKS.map(s => ({ ...s, price: s.basePrice, owned: 0 }));
}

// --- GLOBAL EXPOSURE ---
globalThis.toggleMinigame = (type) => {
    console.log('Toggling minigame:', type, 'Current Level:', state.level);
    const overlay = document.getElementById('minigame-overlay');
    if (!overlay) {
        console.error('Minigame overlay element not found!');
        return;
    }

    if (!type || state.activeMinigame === type) {
        state.activeMinigame = null;
        overlay.classList.add('hidden');
        return;
    }

    // Level Requirements
    const reqs = {
        'garden': 3,
        'stock': 7,
        'grimoire': 15,
        'pantheon': 25
    };

    if (reqs[type] && state.level < reqs[type]) {
        console.warn(`Minigame ${type} is locked! Needs level ${reqs[type]}`);
        createFloatingText(`🔒 LOCKED: Needs Lvl ${reqs[type]}`, window.innerWidth / 2, window.innerHeight / 2);
        return;
    }

    state.activeMinigame = type;
    overlay.classList.remove('hidden');

    let title = 'Executive Suite';
    if (type === 'stock') title = '📈 Bone Exchange';
    else if (type === 'grimoire') title = '📖 Winnie\'s Book of Tricks';
    else if (type === 'garden') title = '🌱 Toy Garden';
    else if (type === 'pantheon') title = '🏛️ Pet Pantheon';

    const titleEl = document.getElementById('minigame-title');
    if (titleEl) titleEl.innerText = title;

    try {
        if (type === 'stock') renderStockMarket();
        else if (type === 'grimoire') renderGrimoire();
        else if (type === 'garden') renderGarden();
        else if (type === 'pantheon') renderPantheon();
    } catch (err) {
        console.error('Error rendering minigame:', err);
    }
};
window.toggleMinigame = globalThis.toggleMinigame;

// Other Globals
globalThis.useComplianceCredit = useComplianceCredit;
window.useComplianceCredit = useComplianceCredit;
globalThis.resetGame = () => {
    if (confirm("Are you sure you want to wipe your save and restart?")) {
        localStorage.removeItem('winnieEmpireSave');
        location.reload();
    }
};
window.resetGame = globalThis.resetGame;
globalThis.prestigeGame = () => {
    const gain = calculatePrestigeGain();
    if (gain < 1) {
        alert("You need at least 1 Gilded Paw to ascend!");
        return;
    }
    if (confirm(`Are you sure you want to Ascend? You will gain ${gain} Gilded Paws (🐾) but restart your progress.`)) {
        state.prestige.biscuits += gain;
        state.prestige.totalBiscuits += gain;
        state.prestige.level++;
        const prestige = state.prestige;
        state.revenue = 0;
        state.totalRevenue = 0;
        state.items.fill(0);
        state.upgrades = {};
        state.chaosLevel = 0;
        state.risk = 0;
        state.spice = 0;
        state.mana = 100;
        state.level = 1;
        state.levelProgress = 0;
        state.manualClicks = 0;
        state.prestige = prestige;
        localStorage.setItem('winnieEmpireSave', JSON.stringify(state));
        location.reload();
    }
};
window.prestigeGame = globalThis.prestigeGame;

// Wait for DOM before starting everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, starting game...');
    initGame();
    startGameLoop();
});
