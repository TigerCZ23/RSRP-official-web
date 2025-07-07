// Ukázkové kategorie a pravidla (můžeš rozšířit až na 100+ pravidel)
const RULES_DATA = [
  {
    category: "Obecná pravidla",
    rules: [
      {
        title: "Respektuj ostatní hráče",
        desc: "Každý hráč je povinen chovat se slušně a s respektem ke všem členům komunity. Urážky, šikana a toxické chování nejsou tolerovány."
      },
      {
        title: "Zákaz cheatování",
        desc: "Používání jakýchkoliv cheatů, hacků nebo exploitů je přísně zakázáno a povede k okamžitému banu."
      }
    ]
  },
  {
    category: "Roleplay pravidla",
    rules: [
      {
        title: "Dodržuj roleplay",
        desc: "Vždy hraj podle své role a respektuj herní svět. OOC (out of character) chování je povoleno pouze v určených kanálech."
      },
      {
        title: "Zákaz RDM/VDM",
        desc: "Random Deathmatch (RDM) a Vehicle Deathmatch (VDM) jsou zakázány. Každý útok musí mít RP důvod."
      }
    ]
  },
  {
    category: "Discord pravidla",
    rules: [
      {
        title: "Správné používání kanálů",
        desc: "Piš pouze do příslušných kanálů podle tématu. Spamování a floodování je zakázáno."
      },
      {
        title: "Zákaz reklamy",
        desc: "Reklama na jiné servery, weby nebo produkty je bez povolení administrátorů zakázána."
      }
    ]
  },
  {
    category: "Technická pravidla",
    rules: [
      {
        title: "Zákaz zneužívání bugů",
        desc: "Pokud najdeš chybu nebo bug, nahlas ji administrátorům. Zneužívání bugů je zakázáno."
      }
    ]
  },
  {
    category: "Tresty a sankce",
    rules: [
      {
        title: "Postup při porušení pravidel",
        desc: "Při porušení pravidel může být hráč varován, dočasně zabanován nebo trvale vyloučen ze serveru."
      }
    ]
  },
  {
    category: "Další",
    rules: [
      {
        title: "Aktualizace pravidel",
        desc: "Pravidla se mohou měnit. Sleduj oznámení na Discordu a webu pro aktuální informace."
      }
    ]
  }
];

// Dynamicky generování kategorií
const categoriesContainer = document.getElementById('rules-categories');
const rulesList = document.getElementById('rules-list');
const searchInput = document.getElementById('rules-search');

let activeCategory = null;
let filteredRules = RULES_DATA;

// Vykresli kategorie
function renderCategories() {
  categoriesContainer.innerHTML = '';
  RULES_DATA.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'rules-category' + (activeCategory === idx ? ' active' : '');
    btn.textContent = cat.category;
    btn.onclick = () => {
      activeCategory = idx;
      renderCategories();
      renderRules();
    };
    categoriesContainer.appendChild(btn);
  });
}

// Vykresli pravidla podle aktivní kategorie a vyhledávání
function renderRules() {
  rulesList.innerHTML = '';
  let rulesToShow = [];
  if (activeCategory !== null) {
    rulesToShow = RULES_DATA[activeCategory].rules;
  }
  // Filtrování podle vyhledávání
  const search = searchInput.value.trim().toLowerCase();
  if (search) {
    rulesToShow = rulesToShow.filter(rule =>
      rule.title.toLowerCase().includes(search) ||
      rule.desc.toLowerCase().includes(search)
    );
  }
  if (rulesToShow.length === 0) {
    rulesList.innerHTML = '<p style="text-align:center;color:var(--accent);margin:24px 0;">Žádné pravidlo nenalezeno.</p>';
    return;
  }
  rulesToShow.forEach((rule, idx) => {
    const item = document.createElement('div');
    item.className = 'rule-item';
    const title = document.createElement('div');
    title.className = 'rule-title';
    title.textContent = rule.title;
    const desc = document.createElement('div');
    desc.className = 'rule-desc';
    desc.textContent = rule.desc;
    title.onclick = () => {
      item.classList.toggle('expanded');
    };
    item.appendChild(title);
    item.appendChild(desc);
    rulesList.appendChild(item);
  });
}

// Vyhledávání v pravidlech
searchInput.addEventListener('input', renderRules);

// Výchozí zobrazení: první kategorie aktivní
activeCategory = 0;
renderCategories();
renderRules();