const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]
//creo elemento per il ritorno dei risultati
const results = {
    result: [],
    count: 0
}
//creo la funzione da assegnare al button
const startSearch = function () {
    /* creo le variabili inputTitle e inputLocation e assegno i rispettivi valori
    degli inputs nell'html. Dopodiché avvio la funzione "search" dando come paramentri 
    i due valori precedentemente salvati*/
    const inputTitle = document.querySelector("#title").value
    const inputLocation = document.querySelector("#location").value
    /*controllo se entrambi gli input sono vuoti, togliendo anche gli spazi vuoti con
    la funzione .trim(). Se lo sono faccio comparire
    un alert che dice di compilare almneo uno dei due input. Se non lo sono, proseguo 
    con la funzione search */
    if ((inputTitle.trim() === "") && (inputLocation.trim() === "")) {
        alert("Compila almeno un campo!")
    } else {
        search(inputTitle, inputLocation)
        //azzero result e count ad ogni nuova ricerca
        results.result = []
        results.count = 0
    }
}
/*creo la funzione search con i due parametri title e location. */
const search = function (title, location) {
    /*creo un ciclo for e controllo se i valori di inputTitle e inputLocation corrispondo
     rispettivamente con i valori dell'array jobs.title e jobs.location.
     Se corrispondono, per ogni valore corrispondente trovato, lo pusho nell'array 
     results.result e aggiungo 1 a results.count. Infine proseguo con la funzione showResults() */
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].title.toLowerCase().includes(title.toLowerCase()) &&
            jobs[i].location.toLowerCase().includes(location.toLowerCase())) {
            results.result.push(jobs[i])
            results.count++
        }
    }
    showResults()
}
//creo la funzione che mi permette di stampare i risultati della ricerca nell'html
const showResults = function () {
    //aggiungo il valore di result.count al div #counter
    const counter = document.querySelector("#counter")
    counter.innerHTML = `Jobs: ${results.count.valueOf()}`
    /*seleziono la lista ol con una variabile e la azzero prima di ogni stampa
    in modo da cancellare i risultati della ricerca precedente.
    Dopodiché aggiungo alla lista i valori trovati nell'array results.result*/
    const olTitle = document.querySelector(".title")
    const olLocation = document.querySelector(".location")
    olTitle.innerHTML = ""
    olLocation.innerHTML = ""
    for (let i = 0; i < results.result.length; i++) {
        olTitle.innerHTML += `<li>${results.result[i].title}}</li>`
        olLocation.innerHTML += `<li>${results.result[i].location}</li>`
    }
    //procedo con una funzione per dare uno stile alla lista
    giveStyle()
}
/*creo una funzione giveStyle per assegnare una classe al div che contiene la lista
dei risultati. Seleziono il div con la variabile listStyle e aggiungo la classe results
che si trova nel file css.
Dopodiché aggiugno le stringhe "Title" e "Location" agli h2, per differenziare
le due colonne die risultati */
const giveStyle = function () {
    const listStyle = document.querySelector(".resultsContainer")
    listStyle.classList.add("results")

    const h2Title = document.querySelector(".titleContainer h2")
    const h2Location = document.querySelector(".locationContainer h2")
    h2Title.innerHTML = "Title"
    h2Location.innerHTML = "Location"
}
/*seleziono il bottone "Cerca" nell'html e gli aggiungo l'evento click per far partire
la funzione startSearch*/
const button = document.querySelector("#searchButton")
button.addEventListener("click", startSearch)