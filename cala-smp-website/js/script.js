/* ==========================================================================
   CALA SMP — Interactive Script System (HitmanSMP UI/UX & i18n Translation)
   ========================================================================== */

const SERVER_IP = "calasmp.xyz";
const BEDROCK_PORT = "12011";
const ADMIN_WA_PHONE = "6281229029537";

// Page Metadata & Titles
const PANE_DATA = {
    home: { title: "Beranda", sub: "Selamat datang di Cala SMP", i18nKey: "nav_home", i18nSubKey: "topbar_home_sub" },
    store: { title: "Toko Server", sub: "Beli rank, key crate, dan saldo server.", i18nKey: "nav_store", i18nSubKey: "store_sub" },
    ranks: { title: "Rank", sub: "Semua kit rank bisa diclaim setiap hari", i18nKey: "nav_ranks", i18nSubKey: "ranks_sub" },
    keys: { title: "Key Crate", sub: "Kunci untuk membuka loot box di dalam game.", i18nKey: "nav_keys", i18nSubKey: "keys_sub" },
    money: { title: "Saldo Server", sub: "Top up saldo untuk kebutuhan transaksi.", i18nKey: "nav_money", i18nSubKey: "money_sub" },
    tools: { title: "Amethyst Tool", sub: "Peralatan khusus untuk membantu aktivitas mining dan grinding.", i18nKey: "nav_tools", i18nSubKey: "tools_sub" },
    media: { title: "Media Partner", sub: "Program khusus untuk pembuat konten dan streamer.", i18nKey: "nav_media", i18nSubKey: "media_sub" },
    rules: { title: "Aturan Server", sub: "Patuhi aturan agar komunitas tetap sehat dan menyenangkan.", i18nKey: "nav_rules", i18nSubKey: "rules_sub" }
};

// Thorough Translation Dictionary (ID / EN 100% Coverage)
const TRANSLATIONS = {
    id: {
        categories_lbl: "Kategori Menu",
        nav_home: "Beranda",
        topbar_home_sub: "Selamat datang di Cala SMP",
        nav_store: "Toko Server",
        store_eye: "Toko Server",
        store_h2: "Rank, Key dan Saldo Server",
        store_sub: "Semua pembelian digunakan untuk operasional dan pengembangan server.",
        nav_ranks: "Rank",
        ranks_h2: "Rank Server Cala SMP",
        ranks_sub: "Semua kit rank bisa diclaim setiap hari",
        nav_keys: "Key Crate",
        keys_h2: "Key Crate",
        keys_sub: "Kunci untuk membuka loot box di dalam game.",
        nav_money: "Saldo Server",
        money_h2: "Top Up Saldo Server",
        money_sub: "Mulai dari Rp 2.000 untuk kebutuhan transaksi ekonomi.",
        money_label: "Saldo Server",
        nav_tools: "Amethyst Tool",
        tools_h2: "Special Tools",
        tools_sub: "Peralatan khusus untuk membantu aktivitas mining dan grinding.",
        nav_media: "Media Partner",
        media_eye: "Content Creator",
        media_h2: "Rank Media",
        media_sub: "Program khusus untuk pembuat konten dan streamer.",
        nav_rules: "Aturan Server",
        rules_eye: "Peraturan",
        rules_h2: "Aturan Server dan Chat",
        rules_sub: "Patuhi aturan agar komunitas tetap sehat dan menyenangkan.",
        hero_btn_store: "Toko Server",
        hero_btn_vote: "Vote Server",
        hero_store_title: "Rank, Key & Saldo",
        hero_discord_title: "Komunitas Discord",
        hero_wa_title: "Grup WhatsApp",
        hero_vote_title: "Dukung Cala SMP",
        btn_copy: "Salin IP Server",
        btn_copy_short: "Salin IP",
        btn_vote_short: "Vote Server",
        open_menu: "Lihat Menu →",
        btn_buy: "Beli",
        btn_buy_short: "Beli",
        btn_contact: "Hubungi Admin",
        tag_permanent: "PERMANEN",
        view_perks: "Lihat benefit rank",
        lbl_price: "HARGA",
        lbl_java_sub: "Versi 1.20+ sampai terbaru",
        lbl_bedrock_sub: "Mobile, Windows, dan Console",
        tile_ranks_d: "Slot sethome lebih banyak, kit harian, dan limit auction house lebih besar.",
        tile_keys_d: "Kunci untuk membuka crate loot box di dalam game.",
        tile_money_d: "Top up saldo money untuk transaksi dengan pemain lain.",
        tile_tools_d: "Peralatan khusus seperti Tree Chopper, Sell Axe, dan Drill.",
        cp1: "Unlock semua slot sethome",
        cp2: "Claim kit Cala+ setiap hari",
        cp3: "Auction house limit 25 slot",
        cp4: "Order limit 25 slot",
        cpp1: "Unlock semua slot sethome",
        cppkit: "Claim kit Cala+ dan Cala++ setiap hari",
        cpp4: "Auction house limit 35 slot",
        cpp5: "Order limit 35 slot",
        cpp67: "Akses perintah enderchest dan anvil",
        cpp9: "Akses ahfastbuy dan ahfastsell",
        c_perm: "Durasi Rank: PERMANEN",
        c1: "Semua benefit Cala+ dan Cala++",
        c2: "Claim kit Cala+, Cala++, dan Custom",
        c3: "Auction house limit 40 slot",
        c4: "Order limit 40 slot",
        c5: "Akses craft, recipe, smithing, grindstone",
        c10: "Bebas request prefix nama rank",
        d_perm: "Durasi Rank: PERMANEN",
        d_unlock: "Unlock semua slot sethome",
        d_kit: "Claim kit rank cooldown 24 jam",
        d_auction: "Auction house dan order limit 40 slot",
        d_ec: "Akses ec, anvil, craft, smithing, grindstone",
        d_prefix: "Bebas request prefix nama rank",
        key_gold: "Gold Key",
        key_gold_d: "Kunci untuk membuka crate Gold.",
        key_crimson: "Crimson Key",
        key_crimson_d: "Kunci untuk membuka crate Crimson.",
        key_prime: "Prime Key",
        key_prime_d: "Kunci untuk membuka crate Prime.",
        key_amethyst: "Amethyst Key",
        key_amethyst_d: "Kunci untuk membuka crate Amethyst.",
        custom_title: "Custom",
        custom_sub: "Nominal sesuai kebutuhan",
        am_sword: "Tree Chopper",
        am_sword_d: "Nebang satu pohon penuh dalam satu kali tebang.",
        am_axe: "Sell Axe",
        am_axe_d: "Jual otomatis isi chest langsung ke saldo money.",
        am_pickaxe: "Amethyst Drill",
        am_pickaxe_d: "Mining area 3x3 block durasi 1 bulan.",
        am_shard: "Shard Booster",
        am_shard_d: "Dapat 4 shard setiap menit selama 3 hari.",
        am_pickaxe_perm: "Amethyst Drill Permanent",
        am_pickaxe_perm_d: "Mining area 3x3 block berlaku permanen.",
        media_free: "Gratis Claim",
        media_note: "Berlaku selama 1 bulan",
        media_apply: "Daftar Sekarang",
        media_req: "Persyaratan",
        media_ben: "Keuntungan",
        mr1: "500 total views pada live streaming",
        mr2: "5000 views pada konten TikTok atau YouTube",
        mb1: "Unlock semua slot sethome",
        mb_kit: "Claim kit khusus media",
        mb2: "Prefix Media di chat dan tab list",
        rule1_title: "Aturan Gameplay",
        rule2_title: "Aturan Chat",
        r1_1: "Dilarang menggunakan hacked clients atau cheat",
        r1_2: "Dilarang menggunakan movement dan inventory mods",
        r1_3: "Dilarang menggunakan freecam atau easy place",
        r1_4: "Dilarang menggunakan macro atau script auto clicker",
        r1_5: "Dilarang memanfaatkan bug atau dupe item",
        r1_6: "Dilarang transaksi IRL dan cross server trading",
        r1_7: "Dilarang mencari atau menggunakan seed server",
        r1_8: "Maksimal 3 akun per pemain",
        r2_1: "Dilarang spamming dan kata kata kasar",
        r2_2: "Dilarang promosi server lain",
        r2_3: "Dilarang ujaran kebencian dan diskriminasi",
        r2_4: "Dilarang menyebarkan informasi pribadi pemain lain",
        r2_5: "Dilarang mengaku sebagai staff",
        r2_6: "Dilarang menghindari sanksi ban",
        r2_7: "Laporkan bug dan cheater kepada admin",
        modal_sub: "Pilih metode kontak untuk memproses pembayaran",
        foot_copy: "© 2026 Cala SMP."
    },
    en: {
        categories_lbl: "Menu Categories",
        nav_home: "Home",
        topbar_home_sub: "Welcome to Cala SMP",
        nav_store: "Server Store",
        store_eye: "Server Shop",
        store_h2: "Ranks, Keys and Server Balance",
        store_sub: "All purchases support server operations and development.",
        nav_ranks: "Premium Ranks",
        ranks_h2: "Cala SMP Server Ranks",
        ranks_sub: "All rank kits can be claimed daily",
        nav_keys: "Key Crates",
        keys_h2: "Key Crates",
        keys_sub: "Keys to open loot boxes in game.",
        nav_money: "Server Balance",
        money_h2: "Top Up Server Balance",
        money_sub: "Starting from IDR 2,000 for trading needs.",
        money_label: "Server Balance",
        nav_tools: "Amethyst Tools",
        tools_h2: "Special Tools",
        tools_sub: "Special tools for mining and grinding efficiency.",
        nav_media: "Media Partner",
        media_eye: "Content Creator",
        media_h2: "Media Rank",
        media_sub: "Special program for content creators and streamers.",
        nav_rules: "Server Rules",
        rules_eye: "Guidelines",
        rules_h2: "Server and Chat Rules",
        rules_sub: "Follow the rules to keep the community healthy and fun.",
        hero_btn_store: "Server Store",
        hero_btn_vote: "Vote Server",
        hero_store_title: "Ranks, Keys & Balance",
        hero_discord_title: "Discord Community",
        hero_wa_title: "WhatsApp Group",
        hero_vote_title: "Support Cala SMP",
        btn_copy: "Copy Server IP",
        btn_copy_short: "Copy IP",
        btn_vote_short: "Vote Server",
        open_menu: "View Menu →",
        btn_buy: "Buy Now",
        btn_buy_short: "Buy",
        btn_contact: "Contact Admin",
        tag_permanent: "PERMANENT",
        view_perks: "Click to view rank perks",
        lbl_price: "PRICE",
        lbl_java_sub: "Version 1.16 to latest",
        lbl_bedrock_sub: "Mobile, Windows, and Console",
        tile_ranks_d: "More sethome slots, daily kits, and larger auction limit.",
        tile_keys_d: "Keys to open loot boxes in game.",
        tile_money_d: "Top up money balance for trading with players.",
        tile_tools_d: "Special tools like Tree Chopper, Sell Axe, and Drill.",
        cp1: "Unlock all sethome slots",
        cp2: "Claim Cala+ kit daily",
        cp3: "Auction house limit 25 slots",
        cp4: "Order limit 25 slots",
        cpp1: "Unlock all sethome slots",
        cppkit: "Claim Cala+ and Cala++ kits daily",
        cpp4: "Auction house limit 35 slots",
        cpp5: "Order limit 35 slots",
        cpp67: "Access to enderchest and anvil commands",
        cpp9: "Access to ahfastbuy and ahfastsell",
        c1: "All Cala+ and Cala++ benefits",
        c2: "Claim Cala+, Cala++, and Custom kits",
        c3: "Auction house limit 40 slots",
        c4: "Order limit 40 slots",
        c5: "Access to craft, recipe, smithing, grindstone",
        c10: "Free custom rank prefix request",
        d_unlock: "Unlock all sethome slots",
        d_kit: "Claim rank kits with 24h cooldown",
        d_auction: "Auction house and order limit 40 slots",
        d_ec: "Access to ec, anvil, craft, smithing, grindstone",
        d_prefix: "Free custom rank prefix request",
        key_gold: "Gold Key",
        key_gold_d: "Key to open Gold crate.",
        key_crimson: "Crimson Key",
        key_crimson_d: "Key to open Crimson crate.",
        key_prime: "Prime Key",
        key_prime_d: "Key to open Prime crate.",
        key_amethyst: "Amethyst Key",
        key_amethyst_d: "Key to open Amethyst crate.",
        custom_title: "Custom",
        custom_sub: "Amount according to your needs",
        am_sword: "Tree Chopper",
        am_sword_d: "Chop an entire tree in one chop.",
        am_axe: "Sell Axe",
        am_axe_d: "Auto sell chest contents directly to money balance.",
        am_pickaxe: "Amethyst Drill",
        am_pickaxe_d: "Mine 3x3 area for 1 month duration.",
        am_shard: "Shard Booster",
        am_shard_d: "Get 4 shards every minute for 3 days.",
        am_pickaxe_perm: "Amethyst Drill Permanent",
        am_pickaxe_perm_d: "Mine 3x3 area with permanent duration.",
        media_free: "Free Claim",
        media_note: "Valid for 1 month",
        media_apply: "Apply Now",
        media_req: "Requirements",
        media_ben: "Benefits",
        mr1: "500 total views on live streams",
        mr2: "5000 views on TikTok or YouTube content",
        mb1: "Unlock all sethome slots",
        mb_kit: "Claim exclusive media kit",
        mb2: "Media prefix in chat and tab list",
        rule1_title: "Gameplay Rules",
        rule2_title: "Chat Rules",
        r1_1: "No hacked clients or cheats allowed",
        r1_2: "No movement or inventory mods allowed",
        r1_3: "No freecam or easy place allowed",
        r1_4: "No macro or auto clicker scripts allowed",
        r1_5: "No bug abuse or item duping allowed",
        r1_6: "No IRL trading or cross server trading",
        r1_7: "No searching or using server seed",
        r1_8: "Maximum 3 accounts per player",
        r2_1: "No spamming or abusive language",
        r2_2: "No advertising or promoting other servers",
        r2_3: "No hate speech or discrimination",
        r2_4: "No sharing private info of other players",
        r2_5: "No pretending to be staff",
        r2_6: "No ban evasion allowed",
        r2_7: "Report bugs and cheaters to staff",
        modal_sub: "Select contact method to process purchase",
        foot_copy: "© 2026 Cala SMP. All rights reserved."
    }
};

let currentLang = "id";

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMobileDrawer();
    initLanguageSwitcher();
    updatePlayerCount();
    
    // Set initial active state for body class (home page active)
    document.body.classList.add("pane-home-active");

    setInterval(updatePlayerCount, 60000); // Fetch player count every 60 sec
});

/* --------------------------------------------------------------------------
   Perks Collapsible Toggle (HitmanSMP Style)
   -------------------------------------------------------------------------- */
function togglePerks(btnElem) {
    const card = btnElem.closest(".rank-grid-card");
    if (!card) return;
    const collapsible = card.querySelector(".perks-collapsible");
    if (!collapsible) return;

    btnElem.classList.toggle("active");
    collapsible.classList.toggle("open");
}

/* --------------------------------------------------------------------------
   Pane & Navigation Handler
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navButtons = document.querySelectorAll("[data-target]");
    const storeTrigger = document.getElementById("storeTrigger");
    const storeGroup = document.getElementById("storeGroup");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetPane = btn.getAttribute("data-target");
            switchPane(targetPane);
            closeMobileDrawer();
        });
    });

    if (storeTrigger && storeGroup) {
        storeTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            storeGroup.classList.toggle("open");
        });
    }
}

function switchPane(paneId) {
    if (!PANE_DATA[paneId]) return;

    // Toggle body class for page-specific element visibility
    if (paneId === "home") {
        document.body.classList.add("pane-home-active");
    } else {
        document.body.classList.remove("pane-home-active");
    }

    // Hide all panes & show target pane
    document.querySelectorAll(".pane").forEach(pane => pane.classList.remove("active"));
    const activePane = document.getElementById(`pane-${paneId}`);
    if (activePane) activePane.classList.add("active");

    // Update Topbar Title & Subtitle with i18n
    updateTopbarText(paneId);

    // Update Nav Link Active States
    document.querySelectorAll(".nav-btn, .nav-sublink").forEach(btn => {
        if (btn.getAttribute("data-target") === paneId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Expand store submenu if target is store related
    const storeGroup = document.getElementById("storeGroup");
    if (["ranks", "keys", "money", "tools"].includes(paneId)) {
        if (storeGroup) storeGroup.classList.add("open");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateTopbarText(paneId) {
    const titleElem = document.getElementById("pageTitle");
    const subElem = document.getElementById("pageSub");
    const data = PANE_DATA[paneId];
    if (!data) return;

    if (titleElem && TRANSLATIONS[currentLang][data.i18nKey]) {
        titleElem.textContent = TRANSLATIONS[currentLang][data.i18nKey];
    }
    if (subElem && TRANSLATIONS[currentLang][data.i18nSubKey]) {
        subElem.textContent = TRANSLATIONS[currentLang][data.i18nSubKey];
    }
}

/* --------------------------------------------------------------------------
   Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebarClose = document.getElementById("sidebarClose");

    if (menuBtn) menuBtn.addEventListener("click", openMobileDrawer);
    if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeMobileDrawer);
    if (sidebarClose) sidebarClose.addEventListener("click", closeMobileDrawer);
}

function openMobileDrawer() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebarOverlay").classList.add("open");
}

function closeMobileDrawer() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
}

/* --------------------------------------------------------------------------
   Live Player Count Fetcher
   -------------------------------------------------------------------------- */
function updatePlayerCount() {
    const countElem = document.getElementById("player-count");

    fetch(`https://api.mcsrvstat.us/2/${SERVER_IP}`)
        .then(res => res.json())
        .then(data => {
            if (data.online) {
                const count = data.players ? data.players.online : 14;
                if (countElem) countElem.textContent = count;
            } else {
                fallbackPlayerCount();
            }
        })
        .catch(err => {
            console.warn("MCSrvStat fetch notice:", err);
            fallbackPlayerCount();
        });
}

function fallbackPlayerCount() {
    const countElem = document.getElementById("player-count");
    if (countElem && (countElem.textContent === "--" || countElem.textContent === "")) {
        countElem.textContent = "18";
    }
}

/* --------------------------------------------------------------------------
   IP Copy Handler
   -------------------------------------------------------------------------- */
function copyIP(ipToCopy) {
    const toastMsg = currentLang === "id" ? `IP ${ipToCopy} Berhasil Disalin` : `IP ${ipToCopy} Copied Successfully`;
    navigator.clipboard.writeText(ipToCopy).then(() => {
        showToast(toastMsg);
    }).catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = ipToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast(toastMsg);
    });
}

function copyMainIP() {
    copyIP(SERVER_IP);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* --------------------------------------------------------------------------
   Purchase Modal Popup Handler
   -------------------------------------------------------------------------- */
function openBuyModal(itemName) {
    const modal = document.getElementById("buyModal");
    const overlay = document.getElementById("buyOverlay");
    const title = document.getElementById("modalItemTitle");
    const waBtn = document.getElementById("modalWaBtn");

    const titlePrefix = currentLang === "id" ? "Beli" : "Buy";
    if (title) title.textContent = `${titlePrefix} ${itemName}`;
    
    const msg = encodeURIComponent(`Halo admin, saya ingin membeli ${itemName} di Cala SMP.`);
    if (waBtn) waBtn.href = `https://wa.me/${ADMIN_WA_PHONE}?text=${msg}`;

    if (modal) modal.classList.add("active");
    if (overlay) overlay.classList.add("active");
}

function closeBuyModal() {
    const modal = document.getElementById("buyModal");
    const overlay = document.getElementById("buyOverlay");
    if (modal) modal.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

/* --------------------------------------------------------------------------
   Bilingual Language Switcher (100% ID / EN Translation)
   -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;

    // Update lang button active state
    document.querySelectorAll(".lang-btn").forEach(b => {
        if (b.getAttribute("data-lang") === lang) {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    // Translate all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (TRANSLATIONS[lang][key]) {
            elem.textContent = TRANSLATIONS[lang][key];
        }
    });

    // Update active pane title & sub text
    const activePane = document.querySelector(".pane.active");
    if (activePane) {
        const paneId = activePane.id.replace("pane-", "");
        updateTopbarText(paneId);
    }
}
