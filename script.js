const curriculum = [
            {
                id: "RDF",
                title: "Modulul 1: Arhitectura RDF",
                difficulty: "Începător",
                image: "https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMHN0cmVhbXxlbnwwfHwwfHx8MA%3D%3D",
                lessons: [
                    ["RDF este fundamentul Web-ului Semantic, standardizat de W3C.", "Toate datele sunt modelate sub formă de triplete (Subiect-Predicat-Obiect).", "Subiectul reprezintă resursa descrisă (identificată prin URI).", "Predicatul definește proprietatea sau relația specifică.", "Obiectul poate fi o altă resursă sau o valoare literală (text, dată).", "RDF nu folosește tabele, ci grafuri direcționate.", "Identificarea prin URI permite interconectarea globală a datelor.", "Permite combinarea seturilor de date fără unificarea schemelor.", "Este independent de limbaj (există Turtle, JSON-LD, XML).", "Facilitează 'mașinile care citesc web-ul'."],
                    ["Tripletele pot fi stocate în baze de date numite Triple Stores.", "Un set de triplete RDF formează un 'Graf RDF'.", "Literalele pot fi tipizate (ex: integer, boolean).", "Literalele pot avea 'language tags' pentru multilingvism (@ro).", "Blank Nodes (noduri anonime) reprezintă resurse fără URI.", "Turtle (.ttl) este cea mai utilizată serializare umană.", "Prefixele în RDF scurtează URI-urile lungi.", "O resursă poate fi subiectul multor triplete simultan.", "Reificarea permite transformarea unui triplet în subiectul altuia.", "RDF permite extinderea datelor fără a strica sistemele vechi."],
                    ["RDFS (RDF Schema) adaugă vocabular pentru structurarea datelor.", "Introduce conceptul de 'Clasă' (rdfs:Class).", "Definește ierarhii prin proprietatea rdfs:subClassOf.", "Proprietățile pot fi ierarhizate prin rdfs:subPropertyOf.", "rdfs:domain restricționează tipul subiectului.", "rdfs:range restricționează tipul obiectului.", "Permite inferențe de bază (dacă A e subclasă B, atunci A este B).", "rdfs:label oferă nume prietenoase pentru utilizatori.", "rdfs:comment stochează documentația tehnică a nodului.", "RDFS transformă datele brute în informații ierarhizate."],
                    ["JSON-LD este formatul modern de serializare RDF.", "Este 100% compatibil cu JSON-ul clasic.", "Folosește un '@context' pentru a mapa cheile JSON la URI-uri.", "'@id' indică identificatorul unic al resursei.", "'@type' indică clasa din care face parte resursa.", "Este tehnologia din spatele Schema.org (Google Rich Snippets).", "Permite programatorilor web să folosească RDF fără a învăța XML.", "Poate fi integrat ușor în scripturi de tip <script type='application/ld+json'>.", "Ușurează transformarea API-urilor REST în Linked Data.", "Este motorul SEO-ului semantic modern."]
                ],
                concepts: ["Triplet RDF", "URI", "Graf RDF", "Turtle", "RDFS", "JSON-LD", "Literal", "Blank Node", "rdfs:subClassOf", "Serializare"],
                quiz: [
                    { q: "Din ce este compus un triplet RDF?", a: ["Fișier, Folder, Date", "Subiect, Predicat, Obiect", "ID, Nume, Tip"], c: 1 },
                    { q: "Ce identifică în mod unic o resursă?", a: ["Un URI", "O parolă", "Un nume local"], c: 0 },
                    { q: "Care serializare RDF este cea mai citibilă?", a: ["RDF/XML", "Turtle", "Binary"], c: 1 },
                    { q: "Ce face rdfs:subClassOf?", a: ["Șterge o clasă", "Creează o ierarhie", "Modifică un site"], c: 1 },
                    { q: "Ce format este preferat pentru SEO?", a: ["CSV", "JSON-LD", "PDF"], c: 1 }
                ]
            },
            {
                id: "SPARQL",
                title: "Modulul 2: Interogări SPARQL",
                difficulty: "Intermediar",
                image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
                lessons: [
                    ["SPARQL este limbajul oficial de query pentru RDF.", "Numele este un acronim: SPARQL Protocol and RDF Query Language.", "Sintaxa sa este inspirată puternic din SQL.", "Funcționează prin potrivirea șabloanelor de graf (Graph Patterns).", "Variabilele sunt notate întotdeauna cu semnul întrebării (ex: ?persoana).", "Clauza SELECT definește ce date vrem să extragem.", "Clauza WHERE definește condițiile de potrivire.", "O interogare se termină întotdeauna cu punct (.).", "Poate uni date din multiple grafuri simultan.", "Rezultatele pot fi returnate în format tabelar sau graf."],
                    ["PREFIX permite utilizarea scurtăturilor pentru namespace-uri.", "Un 'Basic Graph Pattern' este o listă de triplete cu variabile.", "Punctul (.) separă tripletele individuale.", "Punct-virgulă (;) permite refolosirea aceluiași subiect.", "Virgula (,) permite refolosirea subiectului și predicatului.", "Motorul de query caută 'izomorfisme' în graful de date.", "Variabilele pot apărea în orice poziție (S, P sau O).", "SPARQL permite interogarea de la distanță via HTTP (Endpoints).", "Cea mai mare bază de date SPARQL publică este DBpedia.", "Interogările pot fi testate în 'SPARQL Playgrounds'."],
                    ["FILTER este folosit pentru a limita rezultatele pe criterii logice.", "Pot fi folosiți operatori precum >, <, =, !=.", "REGEX() permite căularea de pattern-uri în text.", "OPTIONAL aduce date dacă există, fără a anula rândul dacă lipsesc.", "UNION combină rezultatele a două pattern-uri diferite.", "LIMIT limitează numărul de rânduri returnate.", "OFFSET permite sărirea peste un număr de rânduri (paginare).", "ORDER BY sortează rezultatele (ASC sau DESC).", "DISTINCT elimină duplicatele din rezultate.", "FILTER(lang(?v) = 'ro') selectează doar textul în română."],
                    ["CONSTRUCT creează un nou graf RDF pe baza rezultatelor.", "ASK returnează un simplu 'true' sau 'false' dacă există potriviri.", "DESCRIBE oferă toate tripletele despre o resursă specifică.", "SPARQL Update permite modificarea datelor (INSERT, DELETE).", "LOAD permite importul de triplete dintr-un fișier extern.", "CLEAR șterge toate datele dintr-un graf specific.", "SERVICE permite interogări 'federated' (interoghezi 2 servere o dată).", "Sub-interogările permit calcule complexe.", "Agregările (COUNT, SUM, AVG) funcționează similar cu SQL.", "SPARQL este motorul de căutare al Web-ului Semantic."]
                ],
                concepts: ["SELECT", "WHERE", "FILTER", "OPTIONAL", "UNION", "PREFIX", "LIMIT", "ORDER BY", "CONSTRUCT", "Endpoint SPARQL"],
                quiz: [
                    { q: "Cum notăm o variabilă în SPARQL?", a: ["#var", "?var", "$var"], c: 1 },
                    { q: "Ce clauză folosim pentru date care pot lipsi?", a: ["MAYBE", "OPTIONAL", "NULL"], c: 1 },
                    { q: "Ce returnează o interogare ASK?", a: ["Un tabel", "Un fișier", "Boolean (T/F)"], c: 2 },
                    { q: "Cum limităm rezultatele la 10?", a: ["LIMIT 10", "STOP 10", "COUNT 10"], c: 0 },
                    { q: "Ce face PREFIX?", a: ["Adaugă date", "Scurtează URIs", "Șterge tabele"], c: 1 }
                ]
            },
            {
                id: "OWL",
                title: "Modulul 3: Logica OWL",
                difficulty: "Avansat",
                image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600",
                lessons: [
                    ["OWL (Web Ontology Language) este folosit pentru ontologii complexe.", "Oferă un vocabular mult mai bogat decât RDFS.", "Se bazează pe Logica Descrierii (Description Logics).", "Permite calculatoarelor să 'gândească' prin inferență.", "Clasele în OWL sunt considerate seturi de indivizi.", "OWL poate exprima echivalența între două clase (equivalentClass).", "Permite definirea claselor disjuncte (care nu au membri comuni).", "Ontologiile OWL pot fi validate pentru consistență logică.", "Există 3 variante: OWL Lite, OWL DL și OWL Full.", "OWL DL este cea mai folosită pentru echilibrul între putere și viteză."],
                    ["Proprietățile în OWL pot fi ObjectProperties (către resurse).", "DatatypeProperties fac legătura către valori literale.", "TransitiveProperty: Dacă A e frate cu B și B cu C, A e frate cu C.", "SymmetricProperty: Dacă A e rudă cu B, atunci B e rudă cu A.", "InverseOf: 'părinte' este inversul lui 'copil'.", "FunctionalProperty: O resursă poate avea un singur obiect (ex: CNP).", "InverseFunctionalProperty: Obiectul identifică unic subiectul.", "Proprietățile pot fi restricționate local pe o clasă.", "owl:sameAs indică faptul că două URI-uri sunt aceeași entitate.", "owl:differentFrom separă entități similare dar distincte."],
                    ["Restricțiile de cardinalitate definesc câți membri are o relație.", "minCardinality: Cel puțin X relații.", "maxCardinality: Cel mult X relații.", "allValuesFrom: Toate valorile trebuie să fie de un anumit tip.", "someValuesFrom: Cel puțin o valoare trebuie să fie de un tip.", "OWL permite intersecția claselor (intersectionOf).", "Permite uniunea claselor (unionOf).", "Clasele pot fi definite prin enumerarea indivizilor (oneOf).", "ComplementOf definește tot ce NU face parte dintr-o clasă.", "Acestea permit crearea de definiții matematice pentru concepte."],
                    ["Raționamentul (Reasoning) este procesul de deducere a faptelor noi.", "Un 'Reasoner' (ex: HermiT, Pellet) verifică logica ontologiei.", "Inferența automată găsește ierarhii ascunse.", "Clasificarea automată plasează indivizii în clasele corecte.", "OWL permite verificarea satisfiabilității unei clase.", "Ontologiile pot fi modulare (importarea unei ontologii în alta).", "Versiunea OWL 2 a introdus tipuri de date noi și mai multă putere.", "OWL este esențial pentru sisteme expert și diagnosticare.", "Permite interoperabilitatea la nivel de semnificație, nu doar format.", "Fără OWL, web-ul ar fi doar o listă de date, nu de cunoștințe."]
                ],
                concepts: ["Ontologie OWL", "Description Logic", "Reasoner", "owl:sameAs", "ObjectProperty", "TransitiveProperty", "InverseOf", "Cardinalitate", "inferență", "owl:equivalentClass"],
                quiz: [
                    { q: "Pe ce se bazează OWL?", a: ["Logica Descrierii", "Probabilități", "Regex"], c: 0 },
                    { q: "Ce face owl:sameAs?", a: ["Șterge date", "Unește 2 entități", "Creează un tabel"], c: 1 },
                    { q: "Ce este o proprietate Simetrică?", a: ["A->B implică B->A", "A->B->C", "Doar un sens"], c: 0 },
                    { q: "Ce face un Reasoner?", a: ["Desenează", "Deduce fapte noi", "Navighează pe net"], c: 1 },
                    { q: "Care variantă OWL este cea mai echilibrată?", a: ["Full", "Lite", "DL"], c: 2 }
                ]
            },
            {
                id: "LOD",
                title: "Modulul 4: Linked Open Data",
                difficulty: "Expert",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
                lessons: [
                    ["Linked Data reprezintă setul de bune practici pentru publicarea datelor.", "Termenul a fost inventat de Sir Tim Berners-Lee.", "Principiul 1: Folosește URIs ca nume pentru lucruri.", "Principiul 2: Folosește HTTP URIs pentru ca oamenii să le poată accesa.", "Principiul 3: Oferă informații utile folosind standardele (RDF, SPARQL).", "Principiul 4: Include link-uri către alte URIs pentru a descoperi mai mult.", "Linked Open Data (LOD) este Linked Data publicat sub licență liberă.", "Transformă Web-ul dintr-o rețea de documente într-o rețea de date.", "Modelul de 5 stele evaluează calitatea publicării datelor.", "LOD permite interogarea web-ului ca pe o singură bază de date."],
                    ["Steaua 1: Date disponibile pe web sub orice format.", "Steaua 2: Date structurate (ex: Excel în loc de poză).", "Steaua 3: Format non-proprietar (ex: CSV în loc de Excel).", "Steaua 4: Folosirea standardelor W3C (RDF) și URIs.", "Steaua 5: Legarea datelor tale de datele altora.", "LOD Cloud este vizualizarea tuturor seturilor de date conectate.", "DBpedia este versiunea semantică a Wikipedia.", "Wikidata oferă un depozit central de date pentru toate proiectele.", "GeoNames oferă date semantice despre locații geografice.", "Bio2RDF conectează date din domeniul bio-informaticii."],
                    ["Identificarea resurselor este critică în LOD.", "Trebuie evitate 'Cool URIs' care se schimbă în timp.", "Redirecționarea 303 este folosită pentru resurse non-informaționale.", "Content Negotiation permite servirea de HTML pentru oameni și RDF pentru mașini.", "Link-urile externe creează valoarea adăugată a LOD.", "Interogările federate permit căutarea în multiple servere o dată.", "Provenance (PROV-O) ajută la urmărirea originii datelor.", "Calitatea datelor depinde de actualizarea constantă a link-urilor.", "Silk și LIMES sunt instrumente pentru descoperirea automată a link-urilor.", "Vocabularele standard (FOAF, DC, SKOS) trebuie refolosite."],
                    ["Platformele educaționale LOD permit învățarea personalizată.", "Datele semantice pot recomanda resurse bazate pe profilul tău.", "LOD este folosit în biblioteci digitale (Europeana).", "Guvernele publică date (data.gov) pentru transparență.", "Provocarea principală este protecția datelor (Privacy).", "Scalabilitatea interogărilor pe întreg web-ul este dificilă.", "Web-ul de Date crește exponențial în fiecare an.", "Ontologiile acționează ca 'punți' între limbaje diferite.", "Masteratul în AI necesită înțelegerea acestui graf global.", "Viitorul este un web unde datele sunt libere și conectate."]
                ],
                concepts: ["Linked Data", "5 Stele", "DBpedia", "Wikidata", "FOAF", "Cool URIs", "Content Negotiation", "LOD Cloud", "PROV-O", "Interoperabilitate"],
                quiz: [
                    { q: "Cine a inventat conceptul de Linked Data?", a: ["Elon Musk", "Tim Berners-Lee", "Bill Gates"], c: 1 },
                    { q: "Câte stele are modelul ideal de date?", a: ["3", "10", "5"], c: 2 },
                    { q: "Care este nucleul LOD Cloud?", a: ["Google", "DBpedia", "Facebook"], c: 1 },
                    { q: "Ce este un URI?", a: ["Un tip de fișier", "Un identificator global", "Un browser"], c: 1 },
                    { q: "Ce permite Content Negotiation?", a: ["Plata datelor", "Format diferit (HTML/RDF)", "Viteză mai mare"], c: 1 }
                ]
            }
        ];

// SUB-CONCEPTE pentru harta 
const subConcepts = {
    "RDF":    [{ id:"Triplet",    label:"Triplet S-P-O" }, { id:"URI_node", label:"URI" }, { id:"Turtle",   label:"Turtle" }],
    "SPARQL": [{ id:"SELECT",     label:"SELECT" },        { id:"FILTER",   label:"FILTER" }, { id:"ENDPOINT", label:"Endpoint" }],
    "OWL":    [{ id:"Ontologie",  label:"Ontologie" },     { id:"Reasoner", label:"Reasoner" }, { id:"sameAs",   label:"owl:sameAs" }],
    "LOD":    [{ id:"DBpedia",    label:"DBpedia" },       { id:"5stars",   label:"5 Stele" }, { id:"FOAF_v",   label:"FOAF" }]
};

//  STATE 
let state = {
    currentModuleIndex: 0,
    currentStep: 0,
    userAnswers: [],
    progress: JSON.parse(localStorage.getItem('master_edu_prog')) || {},
    currentFilter: 'all'
};

//  Builder state 
let builderTriplets = [];
let builderSim = null;

//  Graph state 
let graphZoom = null;
let graphSvg  = null;
let graphG    = null;
let showSubconcepts = true;

//  Tour state 
let tourStep = 0;
const TOUR_STEPS = 5;


//  TOAST NOTIFICATIONS 

function showToast(message, type = 'info', duration = 5000) {
    const container = document.getElementById('toast-container');

    const toast = document.createElement('div');

    const icons = {
        success:'✅',
        error:'❌',
        info:'ℹ️',
        warning:'⚠️'
    };

    toast.className = `toast ${type}`;

    toast.innerHTML = `
        <span>${icons[type] || 'ℹ️'}</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // AUTO HIDE
    setTimeout(() => {
        toast.classList.add('hide');

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, duration);
}



//  ONBOARDING TOUR

function nextTourStep() {
    document.getElementById('tour-step-' + tourStep).classList.add('hidden');
    tourStep++;
    if (tourStep >= TOUR_STEPS) { skipTour(); return; }
    document.getElementById('tour-step-' + tourStep).classList.remove('hidden');
    const dots = document.querySelectorAll('.tour-dot');
    dots.forEach((d,i) => d.classList.toggle('active', i === tourStep));
    if (tourStep === TOUR_STEPS - 1) {
        document.getElementById('tour-next-btn').textContent = 'Începe!';
    }
}
function skipTour() {
    document.getElementById('tour-overlay').classList.add('hidden');
    localStorage.setItem('semanti_tour_done', '1');
}


//  CĂUTARE SEMANTICĂ

function handleSearch(query) {
    const dropdown = document.getElementById('search-results-dropdown');
    if (!query || query.length < 2) { dropdown.classList.add('hidden'); return; }

    const q = query.toLowerCase();
    const results = [];

    curriculum.forEach((mod, modIdx) => {
        const isUnlocked = modIdx === 0 || state.progress[curriculum[modIdx-1].id];
        // Caută în titlu
        if (mod.title.toLowerCase().includes(q)) {
            results.push({ type:'module', modIdx, label: mod.title, hint: mod.difficulty });
        }
        // Caută în concepte
        if (mod.concepts) {
            mod.concepts.forEach(c => {
                if (c.toLowerCase().includes(q)) {
                    results.push({ type:'concept', modIdx, label: c, hint: mod.title, isUnlocked });
                }
            });
        }
        // Caută în lecții
        mod.lessons.forEach((lesson, lIdx) => {
            lesson.forEach(sentence => {
                if (sentence.toLowerCase().includes(q) && results.length < 8) {
                    const excerpt = sentence.length > 60 ? sentence.slice(0,57)+'…' : sentence;
                    results.push({ type:'lesson', modIdx, lessonIdx: lIdx, label: excerpt, hint: mod.title, isUnlocked });
                }
            });
        });
    });

    // Deduplicate by label
    const seen = new Set();
    const unique = results.filter(r => { if(seen.has(r.label)) return false; seen.add(r.label); return true; }).slice(0,8);

    if (!unique.length) {
        dropdown.innerHTML = '<div class="search-result-item text-slate-400 italic">Niciun rezultat găsit</div>';
        dropdown.classList.remove('hidden');
        return;
    }

    dropdown.innerHTML = unique.map((r, i) => {
        const highlighted = r.label.replace(new RegExp(`(${query})`, 'gi'), '<mark>$1</mark>');
        const icon = r.type === 'module' ? '📚' : r.type === 'concept' ? '🔖' : '📝';
        return `<div class="search-result-item" tabindex="0" role="option"
            onclick="selectSearchResult(${r.modIdx})"
            onkeydown="if(event.key==='Enter')selectSearchResult(${r.modIdx})">
            <span>${icon}</span>
            <div>
                <div class="font-semibold text-slate-800 text-sm">${highlighted}</div>
                <div class="text-xs text-slate-400">${r.hint}</div>
            </div>
        </div>`;
    }).join('');
    dropdown.classList.remove('hidden');
}

function selectSearchResult(modIdx) {
    closeSearch();
    document.getElementById('semantic-search').value = '';
    const isUnlocked = modIdx === 0 || state.progress[curriculum[modIdx-1].id];
    if (!isUnlocked) {
        showToast('Modulul este blocat. Finalizează mai întâi modulele anterioare.', 'warning');
        return;
    }
    openModule(modIdx);
}

function closeSearch() {
    document.getElementById('search-results-dropdown').classList.add('hidden');
}


//  PROGRESS & RESET

function resetProgress() {
    if (confirm("Ești sigur că vrei să resetezi tot progresul?")) {
        localStorage.removeItem('master_edu_prog');
        state.progress = {};
        renderDashboard();
        showToast('Progresul a fost resetat.', 'info');
        setTimeout(() => window.location.reload(), 1000);
    }
}


//  DASHBOARD

function renderDashboard() {
    const list = document.getElementById('module-list');
    list.innerHTML = "";
    let completedCount = 0;

    curriculum.forEach((m, idx) => {
        const isDone = state.progress[m.id];
        if (isDone) completedCount++;
        const isUnlocked = idx === 0 || state.progress[curriculum[idx-1].id];
        if (state.currentFilter === 'done' && !isDone) return;

        const diffColor = m.difficulty === 'Începător'  ? 'bg-green-100 text-green-700'  :
                          m.difficulty === 'Intermediar' ? 'bg-yellow-100 text-yellow-700' :
                          m.difficulty === 'Avansat'     ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700';

        list.innerHTML += `
            <article class="module-card bg-white rounded-[2.5rem] shadow-sm border-2 border-slate-100 flex flex-col ${!isUnlocked ? 'locked' : ''}" aria-label="Modul: ${m.title}">
                <div class="h-44 overflow-hidden relative">
                    <img src="${m.image}" class="w-full h-full object-cover" alt="Copertă ${m.title}" loading="lazy">
                    <div class="absolute top-4 left-4 flex gap-2">
                        <span class="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm">Unitatea ${idx+1}</span>
                        <span class="${diffColor} px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm">${m.difficulty}</span>
                    </div>
                </div>
                <div class="p-8 flex-1 flex flex-col">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-2xl font-extrabold text-slate-900">${m.title}</h3>
                        ${isDone ? '<div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg" aria-label="Modul finalizat"><i class="fas fa-check" aria-hidden="true"></i></div>'
                               : (!isUnlocked ? '<i class="fas fa-lock text-slate-300" aria-label="Modul blocat"></i>' : '')}
                    </div>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed italic">Explorare profundă la nivel ${m.difficulty.toLowerCase()}.</p>
                    ${m.concepts ? `<div class="flex flex-wrap gap-1 mb-4">${m.concepts.slice(0,4).map(c=>`<span class="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-semibold">${c}</span>`).join('')}</div>` : ''}
                    <button onclick="openModule(${idx})" ${!isUnlocked ? 'disabled aria-disabled="true"' : ''} aria-label="${isDone ? 'Revizuiește' : (isUnlocked ? 'Începe' : 'Modul blocat')}: ${m.title}"
                        class="w-full ${isDone ? 'bg-green-600' : (isUnlocked ? 'bg-slate-900' : 'bg-slate-200')} text-white py-4 rounded-2xl font-bold hover:opacity-90 transition mt-auto">
                        ${isDone ? '✓ Revizuiește Lecția' : (isUnlocked ? 'Începe Modulul →' : '🔒 Modul Blocat')}
                    </button>
                </div>
            </article>`;
    });

    const perc = Math.round((completedCount / curriculum.length) * 100);
    document.getElementById('global-perc').innerText = perc + "%";
    const globalBar = document.getElementById('global-bar');
        if (globalBar) {
            globalBar.style.width = perc + "%";
}
    const circ = document.getElementById('progress-circle');
    if (circ) {
        const r = 52, c = 2*Math.PI*r;
        circ.style.strokeDasharray = c;
        circ.style.strokeDashoffset = c - (perc/100)*c;
    }
}

function filterModules(type) {
    state.currentFilter = type;
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-blue-600','text-white');
        b.classList.add('text-slate-500');
    });
    event.target.classList.add('bg-blue-600','text-white');
    renderDashboard();
}


//  HARTA ONTOLOGICĂ D3 

function initGraph() {
    const container = document.getElementById('graph-container');
    const canvas    = document.getElementById('d3-canvas');
    canvas.innerHTML = "";

    const width  = container.clientWidth  || 800;
    const height = container.clientHeight || 600;

    // Noduri principale
    const nodes = [{ id:"Semantic Web", group:"core", status:"active", label:"Semantic Web" }];
    curriculum.forEach((m, idx) => {
    const previousModule = curriculum[idx - 1];
    const isCompleted = !!state.progress[m.id];
    const isUnlocked =
        idx === 0 ||
        (previousModule && state.progress[previousModule.id]);

    nodes.push({
        id: m.id,
        index: idx,
        label: m.id,
        completed: isCompleted,
        unlocked: isUnlocked,

        status: isCompleted
            ? "completed"
            : isUnlocked
                ? "available"
                : "locked"
    });
});
    // Sub-concepte
    if (showSubconcepts) {
        Object.entries(subConcepts).forEach(([parentId, subs]) => {
            subs.forEach(s => {
                const parent = curriculum.find(m => m.id === parentId);
                const parentDone = parent && state.progress[parentId];
                nodes.push({ id: s.id, label: s.label, status: parentDone ? "subconcept-done" : "subconcept", parentId });
            });
        });
    }

    const links = [];
    curriculum.forEach(m => links.push({ source:"Semantic Web", target: m.id, type:"main" }));
    if (showSubconcepts) {
        Object.entries(subConcepts).forEach(([parentId, subs]) => {
            subs.forEach(s => links.push({ source: parentId, target: s.id, type:"sub" }));
        });
    }

    const svg = d3.select("#d3-canvas").append("svg")
        .attr("width", width).attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("role", "img")
        .attr("aria-label", "Graf semantic interactiv");

    graphSvg = svg;

    // Tooltip
    const tooltip = document.getElementById('graph-tooltip');

    graphZoom = d3.zoom().scaleExtent([0.3, 3]).on("zoom", (e) => graphG.attr("transform", e.transform));
    svg.call(graphZoom);

    graphG = svg.append("g");

    const sim = d3.forceSimulation(nodes)
        .force("link",   d3.forceLink(links).id(d => d.id).distance(d => d.type === 'sub' ? 90 : 160))
        .force("charge", d3.forceManyBody().strength(d => d.status.startsWith('subconcept') ? -300 : -800))
        .force("center", d3.forceCenter(width/2, height/2))
        .force("collision", d3.forceCollide(50));

    // Links
    const link = graphG.append("g").selectAll("line").data(links).join("line")
        .attr("stroke", d => d.type === 'sub' ? '#f59e0b55' : '#cbd5e1')
        .attr("stroke-width", d => d.type === 'sub' ? 1 : 2)
        .attr("stroke-dasharray", d => d.type === 'sub' ? '4,3' : null);

    // Node groups
    const node = graphG.append("g").selectAll("g").data(nodes).join("g")
        .style("cursor", d => d.status === "locked" ? "not-allowed" : "pointer")
        .attr("aria-label", d => `Nod: ${d.label}, stare: ${d.status}`)
        .on("click", (e, d) => {

        if (d.index === undefined) return;

        // dacă modulul e blocat
        if (!d.unlocked) {
            showToast(
                "Trebuie să finalizezi modulul anterior înainte.",
                "warning"
            );
            return;
        }

    // deschide modulul curent
    openModule(d.index);
})
        .on("mouseover", (e, d) => {
            tooltip.style.display = 'block';
            const statusLabel = { active:'Nod central', completed:'✓ Finalizat', available:'Disponibil – click pentru a deschide', locked:'🔒 Blocat', subconcept:'Sub-concept', 'subconcept-done':'Sub-concept asimilat' };
            tooltip.innerHTML = `<strong>${d.label}</strong><br><small>${statusLabel[d.status]||d.status}</small>`;
        })
        .on("mousemove", (e) => {
            tooltip.style.left = (e.clientX + 14) + 'px';
            tooltip.style.top  = (e.clientY - 10) + 'px';
        })
        .on("mouseout", () => { tooltip.style.display = 'none'; })
        .call(d3.drag()
            .on("start", (e,d) => { if(!e.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
            .on("drag",  (e,d) => { d.fx=e.x; d.fy=e.y; })
            .on("end",   (e,d) => { if(!e.active) sim.alphaTarget(0); d.fx=null; d.fy=null; }));

    // Pulse ring pentru noduri disponibile
    node.filter(d => d.status === 'available')
        .append("circle")
        .attr("r", 38)
        .attr("fill", "none")
        .attr("stroke", "#2563eb")
        .attr("stroke-width", 2)
        .attr("opacity", 0.3)
        .each(function() { animatePulse(this); });

    function animatePulse(el) {
        const circle = d3.select(el);
        function pulse() {
            circle.attr("r", 35).attr("opacity", 0.4)
                .transition().duration(1400)
                .attr("r", 55).attr("opacity", 0)
                .on("end", pulse);
        }
        pulse();
    }

    // Cercul principal
    const isSubconcept = d => d.status.startsWith('subconcept');
    node.append("circle")
        .attr("r", d => d.id === "Semantic Web" ? 42 : (isSubconcept(d) ? 22 : 35))
        .attr("fill", d => {
            if (d.id === "Semantic Web") return "#1e293b";
            if (d.status === "completed") return "#10b981";
            if (d.status === "available") return "#2563eb";
            if (d.status === "subconcept-done") return "#f59e0b";
            if (d.status === "subconcept") return "#fef3c7";
            return "#f1f5f9";
        })
        .attr("stroke", d => isSubconcept(d) ? "#f59e0b" : "#fff")
        .attr("stroke-width", d => isSubconcept(d) ? 1.5 : 3);

    // Icoane stare
    node.filter(d => d.status === 'completed').append("text")
        .text("✓").attr("text-anchor","middle").attr("dy",5)
        .style("font-size","16px").style("fill","white").style("pointer-events","none");

    node.filter(d => d.status === 'locked').append("text")
        .text("🔒").attr("text-anchor","middle").attr("dy",5)
        .style("font-size","14px").style("pointer-events","none");

    // Label
    node.append("text")
        .text(d => d.label)
        .attr("text-anchor","middle")
        .attr("dy", d => (isSubconcept(d) ? 22 : 35) + 14)
        .style("font-size", d => isSubconcept(d) ? "9px" : "11px")
        .style("font-weight","bold")
        .style("pointer-events","none")
        .style("fill","#334155");

    sim.on("tick", () => {
        link.attr("x1",d=>d.source.x).attr("y1",d=>d.source.y)
            .attr("x2",d=>d.target.x).attr("y2",d=>d.target.y);
        node.attr("transform", d=>`translate(${d.x},${d.y})`);
    });
}

function graphZoomIn()  { if(graphSvg && graphZoom) graphSvg.transition().call(graphZoom.scaleBy, 1.4); }
function graphZoomOut() { if(graphSvg && graphZoom) graphSvg.transition().call(graphZoom.scaleBy, 0.7); }
function graphReset()   { if(graphSvg && graphZoom) graphSvg.transition().call(graphZoom.transform, d3.zoomIdentity); }

function toggleSubconcepts() {
    showSubconcepts = !showSubconcepts;
    const btn = document.getElementById('subconcept-toggle');
    btn.textContent = `⬡ Sub-concepte: ${showSubconcepts ? 'ON' : 'OFF'}`;
    btn.setAttribute('aria-pressed', showSubconcepts);
    initGraph();
}


//  CONSTRUCTOR RDF

let builderD3Sim = null;
 
// ── helpers ─────────────────────────────────────────────────
function isLiteral(term) {
    // literal dacă începe cu " sau nu are prefix valid (nu conține ":")
    if (term.startsWith('"')) return true;
    const colonIdx = term.indexOf(':');
    return colonIdx <= 0; // fără prefix => text plain => literal
}
 
function normalizeTerm(term) {
    // dacă e plain text fără prefix și fără ghilimele, adaugă ghilimele
    if (!term.startsWith('"') && term.indexOf(':') <= 0) {
        return `"${term}"`;
    }
    return term;
}
 
function truncateLabel(str, max) {
    return str.length > max ? str.slice(0, max - 1) + '…' : str;
}
 
// ── addTriplet ───────────────────────────────────────────────
function addTriplet() {
    const s = document.getElementById('rdf-subject').value.trim();
    const p = document.getElementById('rdf-predicate').value.trim();
    const o = document.getElementById('rdf-object').value.trim();
 
    if (!s || !p || !o) {
        showToast('Completează toate câmpurile: Subiect, Predicat, Obiect.', 'warning');
        return;
    }
 
    // obiectul se normalizează (literale plain → cu ghilimele)
    const oNorm = normalizeTerm(o);
 
    builderTriplets.push({ s, p, o: oNorm, id: Date.now() });
    document.getElementById('rdf-subject').value   = '';
    document.getElementById('rdf-predicate').value = '';
    document.getElementById('rdf-object').value    = '';
 
    renderBuilderGraph();
    renderTripletList();
    updateTurtlePreview();
    showToast(`Triplet adăugat: ${s} → ${p} → ${oNorm}`, 'success', 2500);
}

function renderBuilderGraph() {
    const canvas    = document.getElementById('builder-d3-canvas');
    const emptyEl   = document.getElementById('builder-empty-state');
    canvas.innerHTML = '';
 
    if (builderTriplets.length === 0) {
        emptyEl.style.display = 'flex';
        return;
    }
    emptyEl.style.display = 'none';
 
    const container = document.getElementById('builder-d3-container');
    // Forțăm dimensiunile reale ale containerului vizibil
    const W = container.offsetWidth  || 600;
    const H = Math.max(container.offsetHeight, 380);

    // Colectăm noduri unice
    const nodeMap = new Map();
 
    builderTriplets.forEach(t => {
        if (!nodeMap.has(t.s)) {
            nodeMap.set(t.s, { id: t.s, label: t.s, type: 'subject' });
        } else {
            // dacă un nod apare și ca subiect, rămâne subject
        }
        if (!nodeMap.has(t.o)) {
            const type = isLiteral(t.o) ? 'literal' : 'object';
            nodeMap.set(t.o, { id: t.o, label: t.o, type });
        }
        // dacă obiectul e și el subiect în alt triplet → devine 'both'
        if (nodeMap.has(t.o) && nodeMap.has(t.s) && t.o === t.s) {
            nodeMap.get(t.o).type = 'subject';
        }
    });
 
    // Noduri care sunt simultan subiect în un alt triplet
    builderTriplets.forEach(t => {
        if (nodeMap.has(t.o) && nodeMap.get(t.o).type === 'object') {
            const asSubject = builderTriplets.some(tt => tt.s === t.o);
            if (asSubject) nodeMap.get(t.o).type = 'subject';
        }
    });
 
    const nodes = Array.from(nodeMap.values());
    const links = builderTriplets.map(t => ({
        source: t.s,
        target: t.o,
        label:  t.p,
        id:     t.id
    }));
 
    // ── SVG ─────────────────────────────────────────────────
    const svg = d3.select('#builder-d3-canvas')
        .append('svg')
        .attr('width',  W)
        .attr('height', H)
        .attr('viewBox', `0 0 ${W} ${H}`)
        .style('display', 'block');
 
    // Zoom
    const zoomG = svg.append('g');
    svg.call(
        d3.zoom()
          .scaleExtent([0.3, 3])
          .on('zoom', e => zoomG.attr('transform', e.transform))
    );
 
    // Arrow marker ─ fill solid pentru vizibilitate
    const defs = svg.append('defs');
    defs.append('marker')
        .attr('id', 'builder-arrow')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 22)          // depărtare de centrul nodului (raza elipsei + puțin)
        .attr('refY', 5)
        .attr('markerWidth', 8)
        .attr('markerHeight', 8)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0 0L10 5L0 10Z')
        .attr('fill', '#10b981');
 
    defs.append('marker')
        .attr('id', 'builder-arrow-lit')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 18)
        .attr('refY', 5)
        .attr('markerWidth', 8)
        .attr('markerHeight', 8)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0 0L10 5L0 10Z')
        .attr('fill', '#f59e0b');
 
    // ── Simulare forțe ──────────────────────────────────────
    const sim = d3.forceSimulation(nodes)
        .force('link',      d3.forceLink(links).id(d => d.id).distance(160))
        .force('charge',    d3.forceManyBody().strength(-500))
        .force('center',    d3.forceCenter(W / 2, H / 2))
        .force('collision', d3.forceCollide(60));
 
    builderD3Sim = sim;
 
    // ── Muchii ──────────────────────────────────────────────
    const linkG = zoomG.append('g').attr('class', 'links');
    const linkSel = linkG.selectAll('g').data(links).join('g');
 
    const linkLine = linkSel.append('line')
        .attr('stroke', d => {
            const tgt = nodeMap.get(typeof d.target === 'object' ? d.target.id : d.target);
            return tgt && tgt.type === 'literal' ? '#f59e0b' : '#10b981';
        })
        .attr('stroke-width', 2)
        .attr('marker-end', d => {
            const tgt = nodeMap.get(typeof d.target === 'object' ? d.target.id : d.target);
            return tgt && tgt.type === 'literal'
                ? 'url(#builder-arrow-lit)'
                : 'url(#builder-arrow)';
        });
 
    const linkLabel = linkSel.append('text')
        .text(d => truncateLabel(d.label, 20))
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', '#059669')
        .style('pointer-events', 'none')
        .style('paint-order', 'stroke')
        .style('stroke', 'white')
        .style('stroke-width', '3px');
 
    // ── Noduri ──────────────────────────────────────────────
    const nodeG = zoomG.append('g').attr('class', 'nodes');
    const nodeSel = nodeG.selectAll('g').data(nodes).join('g')
        .style('cursor', 'grab')
        .attr('aria-label', d => `Nod RDF: ${d.label}`)
        .call(d3.drag()
            .on('start', (e, d) => {
                if (!e.active) sim.alphaTarget(0.3).restart();
                d.fx = d.x; d.fy = d.y;
            })
            .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
            .on('end',  (e, d) => {
                if (!e.active) sim.alphaTarget(0);
                d.fx = null; d.fy = null;
            })
        );
 
    // Calculăm raza orizontală a elipsei dinamic după lungimea textului
    function rx(d) { return Math.max(36, d.label.length * 4.2); }
    const ry = 22;
 
    // Umbra / glow
    nodeSel.append('ellipse')
        .attr('rx', d => rx(d) + 4)
        .attr('ry', ry + 4)
        .attr('fill', d =>
            d.type === 'subject' ? '#2563eb22' :
            d.type === 'literal' ? '#f59e0b22' : '#10b98122'
        )
        .attr('stroke', 'none');
 
    // Elipsa principală
    nodeSel.append('ellipse')
        .attr('rx', d => rx(d))
        .attr('ry', ry)
        .attr('fill', d =>
            d.type === 'subject' ? '#2563eb' :
            d.type === 'literal' ? '#f59e0b' : '#10b981'
        )
        .attr('stroke', 'white')
        .attr('stroke-width', 2.5);
 
    // Text în nod
    nodeSel.append('text')
        .text(d => truncateLabel(d.label, 18))
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', d => d.type === 'literal' ? '#1e293b' : 'white')
        .style('pointer-events', 'none');
 
    // Eticheta tipului sub nod
    nodeSel.append('text')
        .text(d =>
            d.type === 'subject' ? 'Subiect' :
            d.type === 'literal' ? 'Literal' : 'Obiect'
        )
        .attr('text-anchor', 'middle')
        .attr('dy', ry + 14)
        .attr('font-size', '8px')
        .attr('font-weight', '600')
        .attr('fill', d =>
            d.type === 'subject' ? '#2563eb' :
            d.type === 'literal' ? '#b45309' : '#059669'
        )
        .style('pointer-events', 'none');
 
    // ── Tick ────────────────────────────────────────────────
    sim.on('tick', () => {
        // Clamp în viewport
        nodes.forEach(d => {
            d.x = Math.max(80, Math.min(W - 80, d.x));
            d.y = Math.max(40, Math.min(H - 40, d.y));
        });
 
        linkLine
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
 
        linkLabel
            .attr('x', d => (d.source.x + d.target.x) / 2)
            .attr('y', d => (d.source.y + d.target.y) / 2 - 10);
 
        nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
    });
}
function renderTripletList() {
    const list  = document.getElementById('triplet-list');
    const count = document.getElementById('triplet-count');
 
    count.textContent = builderTriplets.length;
 
    if (builderTriplets.length === 0) {
        list.innerHTML = '<p class="text-slate-400 text-sm italic" id="triplet-list-empty">Niciun triplet definit încă.</p>';
        return;
    }
 
    list.innerHTML = builderTriplets.map(t => `
        <div class="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex-wrap" role="listitem">
            <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg" title="Subiect">
                <span class="text-blue-300 mr-1 text-[9px]">S</span>${escHtml(t.s)}
            </span>
            <span class="text-xs text-slate-400 font-bold mx-1">→</span>
            <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg" title="Predicat">
                <span class="text-green-300 mr-1 text-[9px]">P</span>${escHtml(t.p)}
            </span>
            <span class="text-xs text-slate-400 font-bold mx-1">→</span>
            <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg" title="Obiect">
                <span class="text-amber-300 mr-1 text-[9px]">O</span>${escHtml(t.o)}
            </span>
            <button onclick="removeTriplet(${t.id})"
                class="ml-auto text-red-400 hover:text-red-600 transition text-sm font-bold px-2"
                aria-label="Șterge tripletul ${escHtml(t.s)} ${escHtml(t.p)} ${escHtml(t.o)}">✕</button>
        </div>`).join('');
}

//  removeTriplet 
function removeTriplet(id) {
    builderTriplets = builderTriplets.filter(t => t.id !== id);
    renderBuilderGraph();
    renderTripletList();
    updateTurtlePreview();
    showToast('Triplet șters.', 'info', 1500);
}

//  clearBuilder 
function clearBuilder() {
    if (builderTriplets.length === 0) return;
    builderTriplets = [];
    renderBuilderGraph();
    renderTripletList();
    updateTurtlePreview();
    showToast('Graful a fost curățat.', 'info');
}

//  updateTurtlePreview 
function updateTurtlePreview() {
    const pre = document.getElementById('turtle-preview');
    if (builderTriplets.length === 0) {
        pre.textContent = '# Adaugă triplete pentru a vedea codul Turtle';
        return;
    }
    pre.textContent = generateTurtle(builderTriplets);
}

function generateTurtle(triplets) {
    const knownPrefixes = {
        'rdf:'   : '@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .',
        'rdfs:'  : '@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .',
        'owl:'   : '@prefix owl:    <http://www.w3.org/2002/07/owl#> .',
        'foaf:'  : '@prefix foaf:   <http://xmlns.com/foaf/0.1/> .',
        'schema:': '@prefix schema: <https://schema.org/> .',
        'dbo:'   : '@prefix dbo:    <http://dbpedia.org/ontology/> .',
        'dbr:'   : '@prefix dbr:    <http://dbpedia.org/resource/> .',
        'ex:'    : '@prefix ex:     <http://example.org/> .'
    };
 
    const prefixes = new Set();
    triplets.forEach(t => {
        [t.s, t.p, t.o].forEach(term => {
            // extrage prefix dacă există (ignoră literalele cu ghilimele)
            if (!term.startsWith('"')) {
                const colonIdx = term.indexOf(':');
                if (colonIdx > 0) {
                    const pfx = term.slice(0, colonIdx + 1);
                    if (knownPrefixes[pfx]) prefixes.add(pfx);
                }
            }
        });
    });
 
    // Header prefixe
    let ttl = '';
    if (prefixes.size > 0) {
        ttl += Array.from(prefixes).map(p => knownPrefixes[p]).join('\n') + '\n\n';
    }
 
    // Grupăm tripletele pe subiect (sintaxă ; )
    const bySubject = new Map();
    triplets.forEach(t => {
        if (!bySubject.has(t.s)) bySubject.set(t.s, []);
        bySubject.get(t.s).push({ p: t.p, o: t.o });
    });
 
    bySubject.forEach((pos, subj) => {
        if (pos.length === 1) {
            ttl += `${subj} ${pos[0].p} ${pos[0].o} .\n`;
        } else {
            // prima linie
            ttl += `${subj} ${pos[0].p} ${pos[0].o}`;
            for (let i = 1; i < pos.length; i++) {
                ttl += ` ;\n    ${pos[i].p} ${pos[i].o}`;
            }
            ttl += ' .\n';
        }
        ttl += '\n';
    });
 
    return ttl.trimEnd();
}

function generateJsonLD(triplets) {
    const graph = triplets.map(t => ({
        "@id": t.s,
        [t.p]: t.o.startsWith('"') ? { "@value": t.o.replace(/^"|"(@\w+)?$/g,''), "@language": (t.o.match(/@(\w+)$/) || [])[1] || 'ro' } : { "@id": t.o }
    }));
    return JSON.stringify({ "@context": { "rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","rdfs":"http://www.w3.org/2000/01/rdf-schema#","owl":"http://www.w3.org/2002/07/owl#","foaf":"http://xmlns.com/foaf/0.1/","schema":"https://schema.org/","dbo":"http://dbpedia.org/ontology/","dbr":"http://dbpedia.org/resource/","ex":"http://example.org/" }, "@graph": graph }, null, 2);
}

function exportTurtle() {
    if (builderTriplets.length === 0) { showToast('Adaugă cel puțin un triplet înainte de export.', 'warning'); return; }
    downloadFile(generateTurtle(builderTriplets), 'graf_rdf.ttl', 'text/turtle');
    showToast('Fișierul Turtle a fost descărcat!', 'success');
}

function exportJsonLD() {
    if (builderTriplets.length === 0) { showToast('Adaugă cel puțin un triplet înainte de export.', 'warning'); return; }
    downloadFile(generateJsonLD(builderTriplets), 'graf_rdf.jsonld', 'application/ld+json');
    showToast('Fișierul JSON-LD a fost descărcat!', 'success');
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
}

function loadExample(type) {
    clearBuilder();
    const examples = {
        basic: [
            { s:'dbr:Romania', p:'rdf:type', o:'dbo:Country' },
            { s:'dbr:Romania', p:'dbo:capital', o:'dbr:Bucharest' },
            { s:'dbr:Romania', p:'dbo:language', o:'dbr:Romanian_language' }
        ],
        foaf: [
            { s:'ex:Alice', p:'rdf:type', o:'foaf:Person' },
            { s:'ex:Alice', p:'foaf:knows', o:'ex:Bob' },
            { s:'ex:Bob',   p:'rdf:type', o:'foaf:Person' },
            { s:'ex:Bob',   p:'foaf:knows', o:'ex:Carol' }
        ],
        owl: [
            { s:'ex:Animal', p:'rdf:type', o:'owl:Class' },
            { s:'ex:Mamifer', p:'rdfs:subClassOf', o:'ex:Animal' },
            { s:'ex:Caine', p:'rdfs:subClassOf', o:'ex:Mamifer' },
            { s:'ex:lassie', p:'rdf:type', o:'ex:Caine' }
        ]
    };
    builderTriplets = examples[type].map((t,i) => ({ ...t, id: Date.now()+i }));
    renderBuilderGraph();
    renderTripletList();
    updateTurtlePreview();
    showToast(`Exemplul "${type}" a fost încărcat!`, 'info', 2000);
}


//  PROFIL SEMANTIC

let profileExportMode = 'ttl';

// ── Construiește tripletele profilului din modulele finalizate ──────────────
function buildProfileTriplets(completedModules) {
    const triplets = [];
    triplets.push({ s: 'ex:Student', p: 'rdf:type',    o: 'foaf:Agent' });
    triplets.push({ s: 'ex:Student', p: 'rdfs:label',  o: '"Utilizator SemantiLearn"@ro' });
    completedModules.forEach(m => {
        triplets.push({ s: 'ex:Student', p: 'ex:completedModule', o: 'ex:' + m.id });
        (m.concepts || []).forEach(c => {
            triplets.push({ s: 'ex:Student', p: 'ex:hasConcept', o: '"' + c + '"@ro' });
        });
    });
    return triplets;
}

function renderProfile() {
    const completedModules = curriculum.filter(m => state.progress[m.id]);
    const allConcepts      = completedModules.flatMap(m => m.concepts || []);
    // Relații = 1 (rdf:type) + 1 (rdfs:label) + module + concepte
    const relations = 2 + completedModules.length + allConcepts.length;

    document.getElementById('profile-concepts-count').textContent  = allConcepts.length;
    document.getElementById('profile-modules-count').textContent   = completedModules.length + '/' + curriculum.length;
    document.getElementById('profile-relations-count').textContent = relations;

    // Chips concepte
    const chips  = document.getElementById('profile-concepts-chips');
    const colors = [
        { bg: '#dbeafe', color: '#1e3a8a' },
        { bg: '#dcfce7', color: '#166534' },
        { bg: '#fef9c3', color: '#713f12' },
        { bg: '#f3e8ff', color: '#6b21a8' }
    ];
    if (allConcepts.length === 0) {
        chips.innerHTML = '<p class="text-slate-400 text-sm italic">Niciun concept asimilat încă. Finalizează un modul!</p>';
    } else {
        chips.innerHTML = allConcepts.map((c, i) => {
            const col = colors[i % colors.length];
            return `<span class="profile-concept-chip" style="background:${col.bg};color:${col.color}">🏷️ ${escHtml(c)}</span>`;
        }).join('');
    }

    // Graf D3 profil
    const profileCanvas = document.getElementById('profile-d3-canvas');
    profileCanvas.innerHTML = '';
    const profileEmpty = document.getElementById('profile-graph-empty');

    if (completedModules.length === 0) {
        profileEmpty.style.display = 'flex';
    } else {
        profileEmpty.style.display = 'none';
        renderProfileGraph(completedModules, profileCanvas);
    }

    showProfileExport(profileExportMode);
}

function renderProfileGraph(modules, canvas) {
    const cont = document.getElementById('profile-graph-container');
    const W = cont.clientWidth  || 600;
    const H = Math.max(cont.clientHeight || 320, 320);

    // Noduri și legături
    const nodes = [{ id: 'ex:Student', label: 'Tu', type: 'self' }];
    const links = [];

    modules.forEach(m => {
        const mid = 'ex:' + m.id;
        nodes.push({ id: mid, label: m.id, type: 'module' });
        links.push({ source: 'ex:Student', target: mid, label: 'learned' });
        (m.concepts || []).slice(0, 3).forEach(c => {
            const cid = 'ex:' + c.replace(/\s+/g, '_');
            if (!nodes.find(n => n.id === cid)) {
                nodes.push({ id: cid, label: c, type: 'concept' });
            }
            links.push({ source: mid, target: cid, label: 'hasConcept' });
        });
    });

    // Raza nodului după tip
    const nodeR = d => d.type === 'self' ? 28 : (d.type === 'module' ? 22 : 14);

    const svg = d3.select(canvas)
        .append('svg')
        .attr('width', W)
        .attr('height', H)
        .attr('viewBox', `0 0 ${W} ${H}`)
        .style('display', 'block');

    // Marker săgeată
    svg.append('defs').append('marker')
        .attr('id', 'parrow')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 10)
        .attr('refY', 5)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0 1L9 5L0 9Z')
        .attr('fill', '#8b5cf6');

    // Grup zoom
    const zoomG = svg.append('g');
    svg.call(
        d3.zoom()
          .scaleExtent([0.4, 3])
          .on('zoom', e => zoomG.attr('transform', e.transform))
    );

    // Simulare forțe
    const sim = d3.forceSimulation(nodes)
        .force('link',      d3.forceLink(links).id(d => d.id)
                              .distance(l => l.label === 'learned' ? 110 : 70))
        .force('charge',    d3.forceManyBody().strength(-350))
        .force('center',    d3.forceCenter(W / 2, H / 2))
        .force('collision', d3.forceCollide(d => nodeR(d) + 10));

    // Linii (muchii)
    const linkSel = zoomG.append('g').selectAll('line').data(links).join('line')
        .attr('stroke', '#8b5cf655')
        .attr('stroke-width', 1.5)
        .attr('marker-end', 'url(#parrow)');

    // Label muchii
    const linkLabel = zoomG.append('g').selectAll('text').data(links).join('text')
        .text(d => d.label)
        .attr('text-anchor', 'middle')
        .attr('font-size', '8px')
        .attr('fill', '#7c3aed')
        .style('pointer-events', 'none');

    // Noduri
    const nodeSel = zoomG.append('g').selectAll('g').data(nodes).join('g')
        .style('cursor', 'grab')
        .attr('aria-label', d => `Nod profil: ${d.label}`)
        .call(d3.drag()
            .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
            .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
            .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
        );

    // Glow
    nodeSel.append('circle')
        .attr('r', d => nodeR(d) + 5)
        .attr('fill', d =>
            d.type === 'self'    ? '#7c3aed22' :
            d.type === 'module'  ? '#2563eb22' : '#f59e0b22')
        .attr('stroke', 'none');

    // Cerc principal
    nodeSel.append('circle')
        .attr('r', nodeR)
        .attr('fill', d =>
            d.type === 'self'    ? '#7c3aed' :
            d.type === 'module'  ? '#2563eb' : '#f59e0b')
        .attr('stroke', 'white')
        .attr('stroke-width', 2.5);

    // Text în nod
    nodeSel.append('text')
        .text(d => d.label.length > 10 ? d.label.slice(0, 8) + '…' : d.label)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', d => d.type === 'concept' ? '7px' : '9px')
        .attr('font-weight', 'bold')
        .attr('fill', d => d.type === 'concept' ? '#1e293b' : 'white')
        .style('pointer-events', 'none');

    // Etichetă tip sub nod
    nodeSel.append('text')
        .text(d =>
            d.type === 'self'   ? 'Student' :
            d.type === 'module' ? 'Modul'   : 'Concept')
        .attr('text-anchor', 'middle')
        .attr('dy', d => nodeR(d) + 12)
        .attr('font-size', '8px')
        .attr('font-weight', '600')
        .attr('fill', '#64748b')
        .style('pointer-events', 'none');

    // Tick cu clamp
    sim.on('tick', () => {
        nodes.forEach(d => {
            const r = nodeR(d) + 8;
            d.x = Math.max(r, Math.min(W - r, d.x));
            d.y = Math.max(r, Math.min(H - r, d.y));
        });
        linkSel
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        linkLabel
            .attr('x', d => (d.source.x + d.target.x) / 2)
            .attr('y', d => (d.source.y + d.target.y) / 2 - 6);
        nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
    });
}

function showProfileExport(mode) {
    profileExportMode = mode;
    const pre              = document.getElementById('profile-export-preview');
    const completedModules = curriculum.filter(m => state.progress[m.id]);

    if (completedModules.length === 0) {
        pre.textContent = '# Finalizează module pentru a genera exportul semantic';
        return;
    }

    if (mode === 'ttl') {
        pre.textContent = generateTurtle(buildProfileTriplets(completedModules));
    } else {
        const graph = [{
            '@id':   'http://example.org/Student',
            '@type': 'http://xmlns.com/foaf/0.1/Agent',
            'rdfs:label': { '@value': 'Utilizator SemantiLearn', '@language': 'ro' },
            'ex:completedModule': completedModules.map(m => ({ '@id': 'http://example.org/' + m.id })),
            'ex:hasConcept':      completedModules.flatMap(m =>
                (m.concepts || []).map(c => ({ '@value': c, '@language': 'ro' }))
            )
        }];
        pre.textContent = JSON.stringify({
            '@context': {
                'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
                'ex':   'http://example.org/',
                'foaf': 'http://xmlns.com/foaf/0.1/'
            },
            '@graph': graph
        }, null, 2);
    }
}

function exportProfileTurtle() {
    const completedModules = curriculum.filter(m => state.progress[m.id]);
    if (!completedModules.length) {
        showToast('Finalizează cel puțin un modul înainte de export.', 'warning');
        return;
    }
    downloadFile(generateTurtle(buildProfileTriplets(completedModules)), 'profil_semantic.ttl', 'text/turtle');
    showToast('Profil exportat ca Turtle!', 'success');
}

function exportProfileJsonLD() {
    const completedModules = curriculum.filter(m => state.progress[m.id]);
    if (!completedModules.length) {
        showToast('Finalizează cel puțin un modul înainte de export.', 'warning');
        return;
    }
    // Asigurăm că preview-ul e actualizat cu JSON-LD înainte de descărcare
    showProfileExport('jsonld');
    downloadFile(document.getElementById('profile-export-preview').textContent, 'profil_semantic.jsonld', 'application/ld+json');
    showToast('Profil exportat ca JSON-LD!', 'success');
}

//  MODAL LECȚIE

function openModule(idx) {
    state.currentModuleIndex = idx;
    state.currentStep = 0;
    showStep();
    const modal = document.getElementById('study-modal');
    modal.classList.remove('hidden');
    modal.querySelector('.modal-panel').focus();
}
 
function closeModal() {
    document.getElementById('study-modal').classList.add('hidden');
}
 
function showStep() {
    const module = curriculum[state.currentModuleIndex];
    const body   = document.getElementById('modal-body');
    const nextBtn = document.getElementById('modal-next-btn');
    const footer  = document.getElementById('modal-footer-info');
    body.innerHTML = "";
    footer.innerText = `Etapa ${state.currentStep + 1} / ${module.lessons.length + 1}`;
 
    if (state.currentStep < module.lessons.length) {
        document.getElementById('modal-subtitle').innerText = `Dificultate: ${module.difficulty}`;
        document.getElementById('modal-title').innerText = module.title;
        nextBtn.innerText = "Continuă Studiul →";
        let html = '<div class="space-y-4">';
        module.lessons[state.currentStep].forEach(info => {
            html += `<div class="lesson-step"><p class="text-lg font-semibold text-slate-700">${info}</p></div>`;
        });
        body.innerHTML = html + '</div>';
    } else {
        document.getElementById('modal-subtitle').innerText = "Evaluare";
        document.getElementById('modal-title').innerText = "Examen de Modul";
        nextBtn.innerText = "Finalizează Examenul ✓";
        let html = '<div class="space-y-10">';
        module.quiz.forEach((q, qIdx) => {
            html += `<div><p class="text-xl font-bold text-slate-900 mb-6">${qIdx+1}. ${q.q}</p><div class="grid gap-3">
                ${q.a.map((opt, oIdx) => `<div onclick="selectOption(${qIdx},${oIdx})" id="q-${qIdx}-${oIdx}" class="quiz-option font-bold text-slate-600" role="radio" aria-label="${opt}" tabindex="0" onkeydown="if(event.key==='Enter')selectOption(${qIdx},${oIdx})">${opt}</div>`).join('')}
            </div></div>`;
        });
        body.innerHTML = html + '</div>';
        state.userAnswers = new Array(module.quiz.length).fill(null);
    }
}
 
function selectOption(qIdx, oIdx) {
    state.userAnswers[qIdx] = oIdx;
    document.querySelectorAll(`[id^="q-${qIdx}-"]`).forEach(el => { el.classList.remove('selected-option'); el.setAttribute('aria-checked','false'); });
    const selected = document.getElementById(`q-${qIdx}-${oIdx}`);
    selected.classList.add('selected-option');
    selected.setAttribute('aria-checked','true');
}
 
function nextStep() {
    const module = curriculum[state.currentModuleIndex];
    if (state.currentStep < module.lessons.length) {
        state.currentStep++;
        showStep();
        document.getElementById('modal-body').scrollTop = 0;
    } else {
        const score = state.userAnswers.filter((ans,i) => ans === module.quiz[i].c).length;
        const body = document.getElementById('modal-body');
 
        if (score === module.quiz.length) {
            state.progress[module.id] = true;
            localStorage.setItem('master_edu_prog', JSON.stringify(state.progress));
            renderDashboard();
 
            // Panel inline success (înlocuiește alert)
            body.innerHTML = `<div class="quiz-result-panel">
                <div class="text-6xl mb-4">🎉</div>
                <h3 class="text-3xl font-extrabold text-green-800 mb-3">Felicitări!</h3>
                <p class="text-green-700 text-lg font-semibold mb-2">Scor perfect: ${score}/${module.quiz.length}</p>
                <p class="text-green-600">Modulul <strong>${module.title}</strong> a fost finalizat cu succes!</p>
                <div class="mt-6 text-4xl">${module.id === 'LOD' ? '🏆 Toate modulele finalizate!' : '➡️ Deblochezi modulul următor!'}</div>
            </div>`;
            document.getElementById('modal-next-btn').textContent = 'Închide';
            document.getElementById('modal-next-btn').onclick = () => {
                closeModal();
                document.getElementById('modal-next-btn').onclick = nextStep;
                if (!document.getElementById('tab-graph').classList.contains('hidden')) initGraph();
                renderProfile();
                showToast(`Modulul "${module.title}" a fost finalizat! 🎉`, 'success', 5000);
            };
        } else {
            // Panel inline fail (înlocuiește alert)
            body.innerHTML = `<div class="quiz-result-panel fail">
                <div class="text-6xl mb-4">😔</div>
                <h3 class="text-3xl font-extrabold text-amber-800 mb-3">Aproape!</h3>
                <p class="text-amber-700 text-lg font-semibold mb-2">Scor: ${score}/${module.quiz.length}</p>
                <p class="text-amber-600 mb-6">Ai nevoie de scor perfect pentru a finaliza modulul. Recitește lecțiile și încearcă din nou!</p>
                <button onclick="retryQuiz()" class="bg-amber-600 text-white px-8 py-3 rounded-2xl font-extrabold hover:bg-amber-700 transition">Încearcă din nou 🔄</button>
            </div>`;
            document.getElementById('modal-next-btn').style.display = 'none';
        }
    }
}
 
function retryQuiz() {
    document.getElementById('modal-next-btn').style.display = '';
    state.currentStep = 0;
    showStep();
}

//  TAB SWITCHING

function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    document.getElementById('tab-' + id).classList.remove('hidden');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('bg-blue-50','text-blue-600'));
    document.getElementById('nav-' + id).classList.add('bg-blue-50','text-blue-600');

    if (id === 'builder') {
        setTimeout(() => {
            renderBuilderGraph();
        }, 100);
    }

    if (id === 'graph')   setTimeout(initGraph, 500);
    if (id === 'profile') setTimeout(renderProfile, 500);
    if (id === 'builder') setTimeout(() => { renderBuilderGraph(); renderTripletList(); updateTurtlePreview(); }, 500);
}


//  AI CHATBOT 

const GROQ_API_KEY = "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";
let chatHistory = [];

async function askAIFull() {
    const input = document.getElementById('ai-input-full');
    const container = document.getElementById('chat-container-full');
    const message = input.value.trim();
    if (!message) return;
    input.disabled = true;

    const userDiv = document.createElement('div');
    userDiv.className = 'msg-user p-5 max-w-[80%] mb-4';
    userDiv.textContent = message;
    container.appendChild(userDiv);
    input.value = '';
    container.scrollTop = container.scrollHeight;

    const aiDiv = document.createElement('div');
    aiDiv.className = 'msg-ai p-5 max-w-[80%] mb-4';
    aiDiv.innerHTML = '<span class="inline-block w-2 h-4 bg-blue-500 animate-pulse rounded-sm"></span>';
    container.appendChild(aiDiv);
    container.scrollTop = container.scrollHeight;

    chatHistory.push({ role:"user", content: message });

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method:"POST",
            headers:{ "Authorization":`Bearer ${GROQ_API_KEY}`, "Content-Type":"application/json" },
            body: JSON.stringify({
                model: "meta-llama/llama-4-scout-17b-16e-instruct",
                messages:[
                    { role:"system", content:`Ești SemantiBot, asistentul AI al platformei educaționale SemantiLearn. Platforma predă Web Semantic, RDF, SPARQL, OWL și Linked Open Data studenților la master. Răspunde MEREU în limba română, cu explicații clare și exemple practice. Când explici triplete RDF, SPARQL sau OWL, oferă exemple de cod relevante. Fii prietenos, entuziast și pedagogic.` },
                    ...chatHistory
                ],
                temperature:0.8, max_tokens:1024, stream:true
            })
        });
        if (!response.ok) { const e = await response.json(); throw new Error(e.error?.message || `Eroare HTTP: ${response.status}`); }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullReply = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream:true });
            for (const line of chunk.split('\n')) {
                if (line.startsWith('data: ')) {
                    const js = line.slice(6).trim();
                    if (!js || js === '[DONE]') continue;
                    try {
                        const tok = JSON.parse(js).choices?.[0]?.delta?.content || '';
                        if (tok) { fullReply += tok; aiDiv.innerHTML = formatAIResponse(fullReply) + '<span class="inline-block w-2 h-4 bg-blue-500 animate-pulse rounded-sm ml-1"></span>'; container.scrollTop = container.scrollHeight; }
                    } catch(e) {}
                }
            }
        }
        aiDiv.innerHTML = formatAIResponse(fullReply);
        chatHistory.push({ role:"assistant", content: fullReply });
    } catch (err) {
        console.error('Groq Error:', err);
        aiDiv.innerHTML = `<span class="text-red-500 font-bold">Eroare:</span> ${err.message}`;
    }
    input.disabled = false;
    input.focus();
}

function formatAIResponse(text) {
    return text
        .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre class="bg-slate-900 text-green-400 p-4 rounded-xl mt-2 mb-2 overflow-x-auto text-xs font-mono"><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded font-mono text-sm">$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');
}


//  UTILITARE

function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


//  INIT

window.onload = () => {

    try {
        renderDashboard();
    } catch(e) {
        console.log(e);
    }
    try {
        switchTab('dashboard');
    } catch(e) {
        console.log(e);
    }

    // Fact zilnic
    const facts = [
        "Modelul de 5 stele al lui Tim Berners-Lee este standardul de aur pentru date deschise.",
        "DBpedia transformă conținutul Wikipedia în date structurate care pot fi interogate prin SPARQL.",
        "Web-ul Semantic nu este un web separat, ci o extensie a celui actual, unde informația are un înțeles bine definit.",
        "Un triplet RDF este format întotdeauna din: Subiect, Predicat și Obiect.",
        "Ontologiile OWL permit calculatoarelor să deducă fapte noi care nu au fost scrise explicit în date.",
        "URI-urile (Uniform Resource Identifiers) sunt folosite pentru a identifica în mod unic orice resursă din lume.",
        "Schema.org este un efort comun Google, Bing și Yahoo pentru a ajuta motoarele de căutare să înțeleagă site-urile.",
        "Linked Open Data (LOD) Cloud conține în prezent mii de seturi de date interconectate din toate domeniile.",
        "Spre deosebire de baza de date SQL, Web-ul Semantic folosește grafuri pentru a reprezenta relații complexe.",
        "Formatul JSON-LD este cea mai populară metodă de a implementa date structurate fără a complica codul HTML."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('daily-info-title').innerText = "Știai că?";
    document.getElementById('daily-info-text').innerText = randomFact;

};

// Funcție pentru deschiderea/închiderea meniului lateral pe mobil
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('hamburger-icon');
    
    sidebar.classList.toggle('mobile-open');
    
    // Schimbă pictograma din 3 linii (bars) în X când este deschis
    if (sidebar.classList.contains('mobile-open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Opțional: Închide meniul automat pe mobil atunci când utilizatorul apasă pe un tab
const originalSwitchTab = window.switchTab;
window.switchTab = function(id) {
    if (typeof originalSwitchTab === 'function') {
        originalSwitchTab(id);
    }
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('hamburger-icon');
    if (window.innerWidth <= 1024 && sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
};
