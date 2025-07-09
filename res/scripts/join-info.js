// kategorie a pravidla (můžeš rozšířit až na 100+ pravidel)
const RULES_DATA = [
  {
    category: "Obecná pravidla",
    rules: [
      {
        title: "Respektuj ostatní hráče",
        desc: "Každý hráč je povinen chovat se slušně a s respektem ke všem členům komunity a členům A-Teamu. Urážky, šikana a toxické chování nejsou tolerovány."
      },
      {
        title: "Zákaz reklamy a propagace",
        desc: "Jakákoliv forma reklamy na jiné servery, produkty nebo služby bez předchozího schválení administrátory je zakázána."
      },
      {
        title: "Zákaz spamování",
        desc: "Spamování zpráv, obrázků nebo jiného obsahu je zakázáno a může vést k trestům."
      },
      {
        title: "Zákaz cheatů, exploitů a zneužívání herních chyb",
        desc: "Používání cheatů, exploitů nebo zneužívání herních chyb je zakázáno a povede k trestům. Pokud najdeš chybu, nahlas ji administrátorům."
      },
      {
        title: "Právo zásahu člena AT",
        desc: "Člen administrátorského týmu má právo udělit mute, warn nebo ban i za prohřešky, které nejsou výslovně uvedeny v pravidlech, pokud to uzná za vhodné k zachování pořádku a pravidel serveru."
      },
      {
        title: "Dodržuj pravidla",
        desc: "Každý hráč je povinen dodržovat pravidla serveru a chovat se slušně k ostatním hráčům. Porušení pravidel může vést k varování, dočasnému nebo trvalému vyloučení ze serveru. Neznalost pravidel neomlouvá jejich porušení a hledání chyb/mezer v pravidlech není důvodem k jejich porušení."
      },
      {
        title: "Obecná zodpovědnost",
        desc: "To, co není uvedeno v pravidlech, neznamená, že je automaticky povoleno. Řiďte se zdravým rozumem a chovejte se ohleduplně."
      }
    ]
  },
  {
    category: "Discord pravidla",
    rules: [
      {
        title: "Dodržujte Discord TOS (pravidla platformy).",
        desc: "Používání Discordu je povoleno pouze v souladu s pravidly platformy. Jakékoliv porušení TOS může vést k trestům na serveru a nahlášení moderátorům discordu."
      },
      {
        title: "Ochrana osobních údajů",
        desc: "Zákaz sdílení osobních informací jiných uživatelů bez jejich výslovného souhlasu. To zahrnuje jména, adresy, telefonní čísla, e-maily a další citlivé údaje."
      },
      {
        title: "Zneužívání ticket systému",
        desc: "Nezneužívejte ticket systém (např. spamování, nesmyslné požadavky, opakované zakládání bezdůvodných ticketů)."
      },
      {
        title: "Mluvte ve správných kanálech",
        desc: "Dodržujte témata jednotlivých kanálů. Příspěvky mimo téma mohou být smazány a při opakování může následovat mute."
      },
      {
        title: "Zákaz nevhodného obsahu",
        desc: "Je přísně zakázán jakýkoliv rasistický, nacistický nebo NSFW (nevhodný) obsah. Porušení tohoto pravidla může vést k okamžitému banu."
      },
      {
        title: "Zákaz falešných reportů",
        desc: "Je zakázáno podávat falešné reporty nebo obviňovat jiné hráče bez dostatečných důkazů. Zneužívání report systému může vést k trestu."
      }
    ]
  },
  {
    category: "Herní pravidla",
    rules: [
      {
        title: "Frakce a základny",
        desc: " Nelze být ve více frakcích současně.\n\  Frakci můžete opustit pouze, pokud máte důvod.\n\  Neraidovat základny bez povolení v ticketu.\n\  Frakce může za SSU ukradnout pouze 2 vozidla (při raidu 4).\n\n\
               Max. počet není stanoven.\n\  Počty ve frakcích se můžou lišit max. o 4 lidi. \n\  Vybavení je předem dané.\n\  Frakce zabírají jednotlivé body a mohou vytvářet menší checkpointy nebo bariéry."
      },
      {
        title: "Boj a chování se ve hře",
        desc: "Zákaz poškozování hráčů na FOB (střelba, granáty apod.).\n\n\ Při přestřelce se nesmí schovávat do safezóny.\n\n\ Nesmíte campit jednu část mapy za účelem zabíjení projíždějících hráčů (výjimka při hrozbě raidu).\n\n\
              Assault zbraně mohou mít max. 6x scope - používejte realistické vybavení.\n\n\ Zákaz bunny hoppingu během přestřelek a jiných RP akcí.\n\n\ Hráč u sebe může mít maximálně 3 frag granáty. (odpovědnost nese vedení frakce).\n\n\ Nesmíte se pohybovat na těchto lokacích: Depot, DOU\n\n\ Opuštěná vozidla se budou kadžých 15 - 30 minut mazat."
      },
      {
        title: "Zákaz trollení a narušování RP",
        desc: "Nesmíte trollit ani jinak úmyslně narušovat nebo kazit roleplay ostatním hráčům. Dbejte na to, aby vaše chování nenarušovalo herní zážitek ostatních."
      },
      {
        title: "Zákaz opuštění základny",
        desc: "Nesmíte opustit základnu nebo bezpečnou zónu (safe zone), dokud není oznámeno RP ON."
      },
      {
        title: "Zákaz RDM/VDM",
        desc: "Random Deathmatch (RDM) a Vehicle Deathmatch (VDM) jsou zakázány. Každý útok musí mít RP důvod."
      },
      {
        title: "Spawn na FOB",
        desc: "Spawn na FOB je možný jen na začátku SSU."
      },
      {
        title: "Krádež vybavení",
        desc: "Z hráčů lze ukrást max. 1 část výbavy, frakce si ji může ponechat po žádosti v ticketu.\n\n\ V průběhu SSU je zakázáno si měnit výbavu (nevztahuje se ke kradenému vybavení)."
      },
      {
        title: "Zákaz vitamínů",
        desc: "Zákaz používání a držení (v inventáři) vitamínů."
      },
      {
        title: "Death screen & revive",
        desc: "Nesmíte se resetovat v \"death screenu\", musíte vyčkat na vykrvácení a poté vás hra respawne. Pokud jste ošetřeni jiným hráčem, tak si musíte lehnout, protože stále krvácíte. Když vás kdokoliv oživí, tak musíte doRPit ošetřování (podle pravidla RP Injuries)."
      },
      {
        title: "Zabírání území",
        desc: "Na zabrání použijte příkaz /capture, kde vyplníte požadované informace (jaké území jste obsadili, která armáda ho obsadila, …).\n\n\ Na zabírání basepointů musíte být minimálně dva – jeden, který fotí, a druhý, který je vidět na fotce."
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
        title: "RP | Roleplay",
        desc: "Roleplay (RP) je základem hry. Všechny akce by měly mít logický RP důvod a měly by být v souladu s herním světem. Chováte se tak jako by jste se chovali na daném místě v realitě, pokud se něco stane, co by postava v reálném životě neudělala, mělo by to být vysvětleno v rámci RP."
      },
      {
        title: "OOC | Out of Character",
        desc: "OOC je mimo RP, tedy říkáte kámošovi jeho přezdívkou/jménem a bavíte se mimo RP svět."
      },
      {
        title: "IC | In Character",
        desc: "IC je v rámci RP, tedy říkáte kámošovi jeho postavu, jméno a chováte se tak, jak byste se choval v dané situaci."
      },
      {
        title: "/me /do",
        desc: "/me = nahrazení animací/činností, které ve hře nejdou udělat, ale musíte je vyjádřit slovně v /me stylu\n\
              např.: /me bere osobu nebo /me prohledává.\n\n\
               /do = nahrazení/vyjádření stavu/otázek, atd...\n\n\
              Příklad:\n\
              - osoba 1 → /do je pán zraněný?\n\
              - osoba 2 → /do není.\n\n\
               Pokud není spojeno s akcí RP Injuries lze říkat přímo ve voice callu."
      },
      {
        title: "Passive Roleplay",
        desc: "Passive se RPí hlavně na base, na kterou přijede druhá frakce (s předchozí domluvou) k řešení diplomatických věcí, pokud máte raid ticket, pravidlo v tuto chvíli neplatí) (+ více vysvětleno v Raid base jiné frakce)."
      },
      {
        title: "Fear RP",
        desc: "Fear RP znamená, že pokud je vaše postava v nebezpečí, měla by jednat tak, aby se vyhnula nebezpečí. Například pokud je postava oblíkečena nebo napadena, měla by se podřídit požadavkům útočníka.\n\n\ Příklady:\n\
              → Musíte RPit strach z přesily, CK, ublížení, atd...\n\ → Musíte RPit fear i z nepřátelských základen (nesmíte se k nim přibližovat, pokud nemáte schválený raid ticket).\n\ → Příslušníci armád mají strach z teroristů (např. když jsou 3 teroristi proti jednomu členovi).\n\ → Armády RPí strach z toho, že nikdy neví, kdy a kde terorista zaútočí nebo něco udělá.\n\ → Teroristé mají fear z armád jen, když je obklíčí nebo mají alespoň stejný počet členů."
      },
      {
        title: "NonRP Driving",
        desc: "= Nereálné řízení s vozidly.\n\ S vozidly jezdíme tak, jak bychom s nimi jezdili v realitě.\n\ Příklad: jízda po horách ve velké rychlosti, bourání do stromů a pokračování v jízdě atd.(v realitě by vám tyto aktivity poškodily/zničily vozidlo)."
      }
    ]
  },
  {
    category: "Custom RP pravidla",
    rules: [
      {
        title: "Roadblock RP",
        desc: "RoadBlock RP = možnost vytvářet malé checkpointy/roadblocky dle potřeby.\n\n\ K jeho vytvoření je nutný validní důvod (např. probíhající konflikt mezi frakcemi v dané oblasti nebo ochrana místních civilistů, …).\n\ Checkpointblock nesmí být permanentní - na jednom místě může být max. 1 hodinu."
      },
      {
        title: "Ambush RP",
        desc: "Umožňuje udělat krátkodobý ''ambush'' na projíždějící vozidla\n\n\ Na chvíli (max. 15 minut) můžete zablokovat silnici a přepadat projíždějící vozidla.\n\ Po uplynutí 15 minut jste povinen/povinná barikádu odstranit a obnovit provoz silnice a z oblasti se stáhnout.\n\ Cooldown mezi ambushy je 1 hodina."
      }
    ]
  },
  {
    category: "Combat RP pravidla",
    rules: [
      {
        title: "KOS | Kill on Sight",
        desc: "KOS je situace, kdy je hráč zabit bez varování nebo předchozí interakce. Toto pravidlo platí pro všechny hráče a frakce. KOS je povolen pouze v případě, že hráč nebo frakce má oprávněný důvod k zabití.\n\n\
              → Před tím, než začnete střílet, si musíte být 100% jisti/y, že to je člen nepřátelské frakce\n\
              Pokud vidíte někoho, o kom v OOC víte, že je např. terorista, ale v IC ne, tak s ním musíte zacházet tak, jako s civilistou do té doby, než se vaše postava v IC dozví, že opravdu je terorista"
      },
      {
        title: "RP Combat | RPC",
        desc: "= pravidlo, které zakazuje hráči jakýmkoliv způsobem kazit RP tím, že bude např. při přestřelce provádět bunny hopping, nerealisticky se hýbat či skákat atd...\n\n\
               Toto pravidlo platí, pokud je hráč v combatu/drží v ruce zbraň.\n\  Pokud se hráč pohybuje nerealisticky, může být trestán administrátorským týmem."
      },
      {
        title: "Combat log",
        desc: " Combat log = odpojení z RP Akce (např. když je kropení/raid na vaší frakci, atd...)\n\n\
               Pokud dáte vědět oběma stranám, že musíte odejít, combat log se nepočítá (u únosu se při dalším připojení do hry musíte vrátit s frakcí a únos doRPit)\n\n\
               Pokud se vaše celá frakce (i jen např. 80%) u RP akce odpojí a všichni si i přesto napíšou důvod, může se to stále brát, jako obcházení pravidla, tudíž pravidlo platí"
      },
      {
        title: "Combat Comeback",
        desc: " Nesmíte se opakovaně vracet do přestřelky, ve které jste zemřeli\n\n\
               Pokud se bojuje o nějaký basepoint nebo podobné systémy na serveru, máte 5min cooldown, pak se můžete vrátit zpět do RP akce či její blízkosti, abyste mohli zaútočit\n\n\
               Když se kropí na jediné cestě k vaší base, kde jste byly pokropeni, počkejte nějakou dobu a druhý team by nadále cestu neměl campit (navazuje na Herní pravidlo Frakce a základny)"
      },
      {
        title: "Unášení lidí | Kidnapp RP",
        desc: " Z jedné frakce smíte unést pouze 3 lidi za SSU.\n\n\ → Člena jiné frakce nesmíte držet déle než 45 min (pokud unesený člen OOC souhlasí s prodloužením RP akce únosu, tak můžete akci prodloužit).\n\n\  Pokud chcete někoho unést, musíte s ním mít nějakou RP akci (meet/přestřelku v blízkosti/povídání delší dobu, atd...).\n\n\
               Členy jiných frakcí můžete unést pouze s důvodem a musíte 100% vědět , že jde o nepřátelskou frakci (neplatí pro teroristy).\n\n\  Z hráčů se může krást výbava (max. 1 část) - frakce si ji může ponechat po dobu trvání SSU, nebo ji může prodat u obchodníka."
      },
      {
        title: "Pravidla pro raidy",
        desc: " Během raidu můžete ukrást maximálně **3 vozidla** a převzít **odměnu**: buď **polovinu PT z jejich celkové ceny** (v případě lichých čísel se zaokrouhluje dolů), nebo **polovinu PT**, kterou armáda právě má (min. 6 PT, max. 15 PT).\n\n\
               Útočníci se spawnují na své základně, ale **jakmile zemřou, nesmí se vracet zpět do konfliktu**.\n\n\
               Spawn obránců je **přesunut na neutrální, vzdálené místo**, aby se nemohli okamžitě vracet na svou základnu.\n\n\
               Díky tomuto systému se lépe **rozhodne, která strana byla v raidu úspěšná**. Pokud útočící strana prohraje, **nedostane žádnou odměnu**.\n\n\
               **Na základně musí být alespoň 1 hráč** (neunesený, nevydíraný), **nebo frakce musí mít alespoň 5 aktivních členů**, jinak nelze raid provést.\n\n\
               Raid je možný pouze po **schválení ticketu** s **minimálně 3 smysluplnými důvody** a **důkazním materiálem**, které musí potvrdit AT.\n\n\
               Abyste mohli **zahájit střelbu na cizí základnu**, musíte mít schválený **raid ticket**. Výjimkou je, pokud **první vystřelí nepřítel z jejich base** – v tom případě můžete opětovat palbu **bez ticketu**, ale musíte se **postupně stahovat z oblasti jejich základny**."
      }
    ]
  },
  {
    category: "Medical RP pravidla",
    rules: [
      {
        title: "RP Injuries",
        desc: " Pokud je vaše postava zraněná, postřelená, do něčeho nabourala, atp., musíte to RPit s pomocí /me a popř. /do k ošetření zranění.\n\n\ Pokud jste v přestřelce, zasažení byste měli vyjádřit i zvukově např. výkřikem, jesliže se delší chvíli v okruhu 10m od vás nestřílí, můžete se začít ošetřovat s /me a /do.\n\n\
         Jestliže se ocitnete v death screenu (animace, při které zemřete) a někdo vás vyléčí, musíte si lehnout na zem, dokud vás medic neošetří, také nesmíte střílet, plazit se nebo se jakýmkoliv jiným způsobem hýbat.\n\n\  Ošetřování RP Injuries musíte psát do herního chatu pomocí /me a /do."
      },
      {
        title: "NVL | Not Valuing Life",
        desc: "NVL = Nevážení si vlastního života herní postavy\n\n\ Příklad:\n\ → Člověk v běžném životě nepoběží na místo, na kterém se po něm střílí nebo se jen tak nenechá přejet či odpálit vlastním granátem."
      },
      {
        title: "PK | Player Kill",
        desc: " PK = zapomenutí RP akce od jejíího začátku.\n\n\  PK můžete někomu udělit, když je v death screenu a proběhla delší RP akce (víc jak 5 minut).\n\  FullPK zde není."
      },
      {
        title: "CK | Character Kill",
        desc: "Když vám někdo dá CK, můžete jít do stejné frakce až za 8 SSU.\n\Je zde několik druhů CK:\n\n\
              → SelfCK = Vaše postava se zabila/zabije, píše se do ticketu.\n\
              → MemberCK = Nejvyšší role ve frakci vás může zabít bez vypsání ticketu s dobrým důvodem\n\ (porušením pravidel frakce, platí i odpojení frakčního DC bez povolení)\n\
              → NormalCK = Na někoho si vypíšete CK skrze CK-ticket\n\  SituationCK = CK, které dostanete v případě nějaké nehody helikoptéry."
      }
    ]
  },
  {
    category: "RP informace",
    rules: [
      {
        title: "Mixing",
        desc: " Míchání vašich OOC vědomostí/vlastností do IC charakteru.\n\
        Příklad:\n\ → Jinému hráči v IC řeknete: ''Podívej se do dms, něco jsem ti tam poslal.''\n\  Jako porušení tohoto pravidla se počítá i IC oslovení nonRP jménem/přezdívkou."
      },
      {
        title: "Metagaming",
        desc: " Metagaming je získávání informací jinak než herním způsobem (IC).\n\  Je zakázané i pobízení ostatních hráčů k Metagamingu!\n\n\
              Příklad:\n\ → Sdílení informací na Discordu a jejich následné využití ve hře.\n\ → Nabádání k Metagamingu:\n\
              1. Posílání nevyžádaných IC informací v OOC (sdílení obrazovky na Discordu).\n\ 2. Vyžadování IC informací OOC."
      },
      {
        title: "Radio RP",
        desc: " Zakazuje hráčům používat in-game radio/vysílačku, pokud jim byla odebrána nebo ji nemají u sebe - na vestě/batohu (musí být vizuálně vidět).\n\n\
               Dále je zakázáno vyhledávat a zkoušet náhodné frekvence za cílem najít nepřátelskou vysílačku, a tím získat výhodu.\n\n\
               Jediný způsob, jak získat odposlech nepřátelské vysílačky, je získat vysílačku/frekvenci od nějakého člena z nepřátelské frakce.\n\n\
               Během SSU frakce mohou libovolně měnit své frekvence. Pokud dojde k nalezení frekvence, kterou už nějaká frakce používá, tak se přelaďte na jinou frekvenci a zároveň informujte frakci, že jste omylem naladili jejich frekvenci."
      }
    ]
  },
  {
    category: "Další RP pravidla",
    rules: [
      {
        title: "Gross RP",
        desc: " Jedná se o nechutné RP, jako je tvrdé mučení.\n\n\  Bez vypsání CK nemůžete oběti řezat končetiny nebo udělat stálé následky (řezání je povolené).\n\n\  Na gross se musíte ptát každého, kdo je přítomen v okolí grossu. Když přijde někdo nový k RP akci, musí se gross pozastavit a všichni ho opět povolit.\n\n\
               Všichni v daném voice callu a v dané RP akci gross musí povolit, pokud jeden člověk zamítne, tak se gross nesmí konat.\n\n\ Sexuální gross může být povolen, pokud všem osobám bylo OOC 15 a více let."
      },
      {
        title: "Trash/Fail RP",
        desc: " Toto pravidlo udává jakýkoliv pokus o pokažení nebo trolení RP. Můžeme tu počítat i jednání/chování určitých frakcí.\n\n\  Pokud budete na toto pravidlo upozorněni, vždy se snažte zlepšit váš styl RP.\n\n\  Je přísně zakázané jen tak pozastavit RP prostřednictvím chatu.\n\n\  Hráč je povinný situaci doRPit."
      }
    ]
  },
  {
  category: "Ekonomika frakcí",
  rules: [
    {
      title: "Získávání PT",
      desc: "Pro získání PT musíte mít ve chvíli započítání (každých 30 minut) mít zabrané určité místo na mapě.\n\n\
            Za každé zabrané místo získáte 2 PT.\n\n\ Na mapě je 9 míst, které můžete zabrat."
   },
   {
     title: "Shop",
     desc: "Pozemní vozidla:\n\ 4x4 - 4pt\n\
            M1038 - 4pt\n\
            Pvp - 4pt\n\
            Humvee - 5pt\n\
            Srtv - 5pt + gamepass\n\
            Tiger - 6pt\n\
            Vab - 6pt\n\
            Vbmr - 6pt\n\
            Ural - 7pt\n\
            M1083 - 8pt\n\
            M1078 - 8pt\n\
            Cougar - 9pt\n\
            Stryker - 9pt\n\n\
            Helikoptéry:\n\
            MH-6 - 6pt\n\
            NH90 TTH - 11pt\n\
            Mi-8MTV2 - 11pt\n\
            CH-53D - 13pt\n\
            UH-60V - 13pt"
   }
  ]
  },
  {
    category: "Tresty a sankce",
    rules: [
      {
        title: "📌 Postihy za porušení pravidel",
        desc: "**🔸 Za porušení pravidla:**\n\
              > 🟡 Warn 1\n\n\
              **🔸 Za opakované porušování pravidel:**\n\
              > 🟠 Warn 2, Warn 3 → poté BAN\n\n\
              **🔸 Porušení frakčních pravidel:**\n\
              > 🟥 Frakční warn 1, 2, 3 → ❌ Smazání frakce\n\n\
              ---\n\n\
              **⏱ Sankce podle warnu:**\n\
              > ⚠️ Warn 1 → max. pauza **45 minut**\n\
              > ⚠️ Warn 2 → max. pauza **3 hodiny**\n\
              > ⚠️ Warn 3 → max. pauza **1 den**\n\
              ---\n\n\
              **🏳️ Frakční varování:**\n\
              > 📌 Warn 1 → napomenutí majitele  \n\
              > 📌 Warn 2 → napomenutí majitele  \n\
              > 📌 Warn 3 → napomenutí + ❌ Smazání frakce\n\n\
              **‼️ Ve vážném případě může být frakce donucena opustit herní server nebo oblast na mapě členy A-Teamu.**"
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
  const search = searchInput.value.trim().toLowerCase();

  if (search) {
    // Najdi ve všech kategoriích
    RULES_DATA.forEach(cat => {
      cat.rules.forEach(rule => {
        if (
          rule.title.toLowerCase().includes(search) ||
          rule.desc.toLowerCase().includes(search)
        ) {
          // Přidej i informaci o kategorii
          rulesToShow.push({ ...rule, category: cat.category });
        }
      });
    });
  } else if (activeCategory !== null) {
    // Jen aktivní kategorie
    rulesToShow = RULES_DATA[activeCategory].rules.map(rule => ({
      ...rule,
      category: RULES_DATA[activeCategory].category
    }));
  }

  if (rulesToShow.length === 0) {
    rulesList.innerHTML = '<p style="text-align:center;color:var(--accent);margin:24px 0;">Žádné pravidlo nenalezeno.</p>';
    return;
  }

  rulesToShow.forEach((rule, idx) => {
    const item = document.createElement('div');
    item.className = 'rule-item';

    // Accordion button
    const toggle = document.createElement('button');
    toggle.className = 'rule-toggle';
    toggle.type = 'button';

    const title = document.createElement('span');
    title.className = 'rule-title';
    title.textContent = rule.title;

    const arrow = document.createElement('span');
    arrow.className = 'rule-arrow';

    toggle.appendChild(title);
    toggle.appendChild(arrow);

    // Popis pravidla
    const desc = document.createElement('div');
    desc.className = 'rule-desc';
    function convertBoldSyntax(text) {return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');}
    desc.innerHTML = convertBoldSyntax(rule.desc.replace(/\n/g, '<br>'));

    // Pokud hledáš napříč kategoriemi, zobraz i kategorii
    if (search) {
      const catLabel = document.createElement('span');
      catLabel.className = 'rule-category-label';
      catLabel.textContent = rule.category;
      catLabel.style.cssText = "display:inline-block;font-size:0.95em;color:var(--ji-accent);margin-bottom:2px;margin-right:8px;";
      toggle.insertBefore(catLabel, title);
    }

    toggle.onclick = () => {
      const isOpen = item.classList.contains('open');
      if (isOpen) {
        desc.style.maxHeight = desc.scrollHeight + "px";
        void desc.offsetHeight;
        desc.style.maxHeight = "0";
        item.classList.remove('open');
      } else {
        desc.style.maxHeight = desc.scrollHeight + "px";
        item.classList.add('open');
      }
    };

    item.appendChild(toggle);
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