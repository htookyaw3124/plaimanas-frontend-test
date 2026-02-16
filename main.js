// ============================================
// Currency Dropdown
// ============================================
function setCurrency(value) {
    document.getElementById('currency-label').textContent = value;
    document.getElementById('currency-dropdown').classList.add('hidden');
}

// Close currency dropdown when clicking outside
document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('currency-dropdown');
    if (!e.target.closest('.header-left')) {
        dropdown.classList.add('hidden');
    }
});

// ============================================
// Mobile Menu Toggle
// ============================================
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");
    if (menu.classList.contains("opacity-0")) {
        menu.classList.remove("opacity-0", "invisible");
        menu.classList.add("opacity-100", "visible");
        hamburger.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    } else {
        menu.classList.remove("opacity-100", "visible");
        menu.classList.add("opacity-0", "invisible");
        hamburger.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

// ============================================
// FAQ Tab Switcher
// ============================================
function setActiveTab(clicked) {
    document.querySelectorAll('#faq-tabs .faq-tab').forEach(btn => {
        btn.classList.remove('active', 'bg-white', 'text-black');
        btn.classList.add('bg-zinc-800', 'hover:bg-zinc-700', 'text-white');
    });
    clicked.classList.remove('bg-zinc-800', 'hover:bg-zinc-700', 'text-white');
    clicked.classList.add('active', 'bg-white', 'text-black');
}
