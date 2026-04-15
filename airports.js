/* ═══════════════════════════════════════════
   AIRPORT DATA
═══════════════════════════════════════════ */
const AIRPORTS = [
    // ── España ──
  { iata: "VLC", name: "Valencia", city: "Valencia", country: "ES" },
  { iata: "CDT", name: "Castellón", city: "Castellón", country: "ES" },
  { iata: "MAD", name: "Barajas", city: "Madrid", country: "ES" },
  { iata: "BCN", name: "El Prat", city: "Barcelona", country: "ES" },
  { iata: "SVQ", name: "San Pablo", city: "Sevilla", country: "ES" },
  { iata: "AGP", name: "Costa del Sol", city: "Málaga", country: "ES" },
  { iata: "ALC", name: "El Altet", city: "Alicante", country: "ES" },
  { iata: "BIO", name: "Bilbao", city: "Bilbao", country: "ES" },
  { iata: "PMI", name: "Son Sant Joan", city: "Palma de Mallorca", country: "ES" },
  { iata: "IBZ", name: "Ibiza", city: "Ibiza", country: "ES" },
  { iata: "MAH", name: "Menorca", city: "Menorca", country: "ES" },
  { iata: "TFS", name: "Sur Tenerife", city: "Tenerife Sur", country: "ES" },
  { iata: "TFN", name: "Norte Tenerife", city: "Tenerife Norte", country: "ES" },
  { iata: "LPA", name: "Gran Canaria", city: "Las Palmas", country: "ES" },
  { iata: "FUE", name: "Fuerteventura", city: "Fuerteventura", country: "ES" },
  { iata: "ACE", name: "Lanzarote", city: "Lanzarote", country: "ES" },
  { iata: "SPC", name: "La Palma", city: "La Palma", country: "ES" },
  { iata: "GMZ", name: "La Gomera", city: "La Gomera", country: "ES" },
  { iata: "VDE", name: "El Hierro", city: "El Hierro", country: "ES" },
  { iata: "SCQ", name: "Santiago de Compostela", city: "Santiago", country: "ES" },
  { iata: "VGO", name: "Vigo-Peinador", city: "Vigo", country: "ES" },
  { iata: "OVD", name: "Asturias", city: "Oviedo", country: "ES" },
  { iata: "SDR", name: "Santander", city: "Santander", country: "ES" },
  { iata: "EAS", name: "San Sebastián", city: "San Sebastián", country: "ES" },
  { iata: "VIT", name: "Vitoria", city: "Vitoria", country: "ES" },
  { iata: "PNA", name: "Pamplona", city: "Pamplona", country: "ES" },
  { iata: "ZAZ", name: "Zaragoza", city: "Zaragoza", country: "ES" },
  { iata: "REU", name: "Reus", city: "Reus", country: "ES" },
  { iata: "GRO", name: "Girona-Costa Brava", city: "Girona", country: "ES" },
  { iata: "GRX", name: "Federico García Lorca", city: "Granada", country: "ES" },
  { iata: "MJV", name: "Región de Murcia", city: "Murcia", country: "ES" },
  { iata: "XRY", name: "Jerez de la Frontera", city: "Jerez", country: "ES" },
  { iata: "MLN", name: "Melilla", city: "Melilla", country: "ES" },
  { iata: "VLL", name: "Valladolid", city: "Valladolid", country: "ES" },
  { iata: "BJZ", name: "Badajoz", city: "Badajoz", country: "ES" },
  { iata: "ODB", name: "Córdoba", city: "Córdoba", country: "ES" },
  // ── Alemania ──
  { iata: "BER", name: "Brandenburg", city: "Berlín", country: "DE" },
  { iata: "MUC", name: "München", city: "Múnich", country: "DE" },
  { iata: "FRA", name: "Frankfurt", city: "Frankfurt", country: "DE" },
  { iata: "DUS", name: "Düsseldorf", city: "Düsseldorf", country: "DE" },
  { iata: "HAM", name: "Hamburg", city: "Hamburgo", country: "DE" },
  { iata: "CGN", name: "Köln Bonn", city: "Colonia", country: "DE" },
  { iata: "STR", name: "Stuttgart", city: "Stuttgart", country: "DE" },
  { iata: "NUE", name: "Albrecht Dürer", city: "Núrnberg", country: "DE" },
  { iata: "HAJ", name: "Hannover", city: "Hannover", country: "DE" },
  { iata: "LEJ", name: "Leipzig/Halle", city: "Leipzig", country: "DE" },
  // ── Austria ──
  { iata: "VIE", name: "Wien-Schwechat", city: "Viena", country: "AT" },
  { iata: "GRZ", name: "Graz", city: "Graz", country: "AT" },
  { iata: "INN", name: "Innsbruck", city: "Innsbruck", country: "AT" },
  { iata: "SZG", name: "Salzburg W. A. Mozart", city: "Salzburgo", country: "AT" },
  // ── Bélgica ──
  { iata: "BRU", name: "Bruselas", city: "Bruselas", country: "BE" },
  { iata: "CRL", name: "Charleroi", city: "Charleroi", country: "BE" },
  { iata: "LGG", name: "Liège", city: "Liège", country: "BE" },
  { iata: "ANR", name: "Antwerp", city: "Amberes", country: "BE" },
  // ── Croacia ──
  { iata: "ZAG", name: "Zagreb", city: "Zagreb", country: "HR" },
  { iata: "DBV", name: "Dubrovnik", city: "Dubrovnik", country: "HR" },
  { iata: "SPU", name: "Split", city: "Split", country: "HR" },
  { iata: "ZAD", name: "Zadar", city: "Zadar", country: "HR" },
  { iata: "PUY", name: "Pula", city: "Pula", country: "HR" },
  // ── Dinamarca ──
  { iata: "CPH", name: "Kastrup", city: "Copenhague", country: "DK" },
  { iata: "BLL", name: "Billund", city: "Billund", country: "DK" },
  { iata: "AAL", name: "Aalborg", city: "Aalborg", country: "DK" },
  { iata: "AAR", name: "Aarhus", city: "Aarhus", country: "DK" },
  
  // ── Finlandia ──
  { iata: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", country: "FI" },
  { iata: "TMP", name: "Tampere-Pirkkala", city: "Tampere", country: "FI" },
  { iata: "OUL", name: "Oulu", city: "Oulu", country: "FI" },
  { iata: "TKU", name: "Turku", city: "Turku", country: "FI" },
  { iata: "RVN", name: "Rovaniemi", city: "Rovaniemi", country: "FI" },
  // ── Francia ──
  { iata: "CDG", name: "Charles de Gaulle", city: "París", country: "FR" },
  { iata: "ORY", name: "Orly", city: "París", country: "FR" },
  { iata: "BVA", name: "Beauvais-Tillé", city: "Beauvais (París)", country: "FR" },
  { iata: "NCE", name: "Côte d'Azur", city: "Niza", country: "FR" },
  { iata: "MRS", name: "Provence", city: "Marsella", country: "FR" },
  { iata: "LYS", name: "Saint-Exupéry", city: "Lyon", country: "FR" },
  { iata: "BOD", name: "Mérignac", city: "Burdeos", country: "FR" },
  { iata: "TLS", name: "Blagnac", city: "Toulouse", country: "FR" },
  { iata: "NTE", name: "Nantes Atlantique", city: "Nantes", country: "FR" },
  { iata: "MPL", name: "Montpellier Méditerranée", city: "Montpellier", country: "FR" },
  // ── Grecia ──
  { iata: "ATH", name: "Eleftherios Venizelos", city: "Atenas", country: "GR" },
  { iata: "SKG", name: "Makedonia", city: "Salónica", country: "GR" },
  { iata: "HER", name: "Nikos Kazantzakis", city: "Heraklion", country: "GR" },
  { iata: "RHO", name: "Diagoras", city: "Rodas", country: "GR" },
  { iata: "CFU", name: "Ioannis Kapodistrias", city: "Corfú", country: "GR" },
  { iata: "JMK", name: "Mykonos", city: "Mykonos", country: "GR" },
  { iata: "JTR", name: "Santorini", city: "Santorini", country: "GR" },
  { iata: "CHQ", name: "Chania", city: "Chania", country: "GR" },
  { iata: "ZTH", name: "Zakynthos", city: "Zakynthos", country: "GR" },
  { iata: "KGS", name: "Kos", city: "Kos", country: "GR" },
  // ── Hungría ──
  { iata: "BUD", name: "Ferenc Liszt", city: "Budapest", country: "HU" },
  { iata: "DEB", name: "Debrecen", city: "Debrecen", country: "HU" },
  // ── Irlanda ──
  { iata: "DUB", name: "Dublin", city: "Dublín", country: "IE" },
  { iata: "ORK", name: "Cork", city: "Cork", country: "IE" },
  { iata: "SNN", name: "Shannon", city: "Shannon", country: "IE" },
  // ── Italia ──
  { iata: "FCO", name: "Fiumicino", city: "Roma", country: "IT" },
  { iata: "CIA", name: "Ciampino", city: "Roma", country: "IT" },
  { iata: "MXP", name: "Malpensa", city: "Milán", country: "IT" },
  { iata: "BGY", name: "Orio al Serio", city: "Bérgamo", country: "IT" },
  { iata: "VCE", name: "Marco Polo", city: "Venecia", country: "IT" },
  { iata: "FLR", name: "Peretola", city: "Florencia", country: "IT" },
  { iata: "BLQ", name: "Guglielmo Marconi", city: "Bolonia", country: "IT" },
  { iata: "NAP", name: "Capodichino", city: "Nápoles", country: "IT" },
  { iata: "CTA", name: "Fontanarossa", city: "Catania", country: "IT" },
  { iata: "PMO", name: "Falcone Borsellino", city: "Palermo", country: "IT" },
  // ── Noruega ──
  { iata: "OSL", name: "Gardermoen", city: "Oslo", country: "NO" },
  { iata: "BGO", name: "Flesland", city: "Bergen", country: "NO" },
  { iata: "TRD", name: "Værnes", city: "Trondheim", country: "NO" },
  { iata: "SVG", name: "Sola", city: "Stavanger", country: "NO" },
  { iata: "TOS", name: "Langnes", city: "Tromsø", country: "NO" },
  // ── Países Bajos ──
  { iata: "AMS", name: "Schiphol", city: "Ámsterdam", country: "NL" },
  { iata: "EIN", name: "Eindhoven", city: "Eindhoven", country: "NL" },
  { iata: "RTM", name: "Rotterdam The Hague", city: "Rotterdam", country: "NL" },
  // ── Polonia ──
  { iata: "WAW", name: "Chopin", city: "Varsovia", country: "PL" },
  { iata: "KRK", name: "Balice", city: "Cracovia", country: "PL" },
  { iata: "GDN", name: "Lećh Wałęsa", city: "Gdansk", country: "PL" },
  { iata: "WRO", name: "Copernicus", city: "Wroclaw", country: "PL" },
  { iata: "POZ", name: "Lawica", city: "Poznan", country: "PL" },
  { iata: "KTW", name: "Pyrzowice", city: "Katowice", country: "PL" },
  // ── Portugal ──
  { iata: "LIS", name: "Humberto Delgado", city: "Lisboa", country: "PT" },
  { iata: "OPO", name: "Francisco Sá Carneiro", city: "Oporto", country: "PT" },
  { iata: "FAO", name: "Faro", city: "Faro", country: "PT" },
  { iata: "FNC", name: "Cristiano Ronaldo", city: "Funchal (Madeira)", country: "PT" },
  { iata: "PDL", name: "João Paulo II", city: "Ponta Delgada (Azores)", country: "PT" },
  // ── República Checa ──
  { iata: "PRG", name: "Václav Havel", city: "Praga", country: "CZ" },
  { iata: "BRQ", name: "Brno-Tuřany", city: "Brno", country: "CZ" },
  { iata: "OSR", name: "Ostrava Mošnov", city: "Ostrava", country: "CZ" },
  // ── Reino Unido ──
  { iata: "LHR", name: "Heathrow", city: "Londres", country: "GB" },
  { iata: "LGW", name: "Gatwick", city: "Londres", country: "GB" },
  { iata: "STN", name: "Stansted", city: "Londres", country: "GB" },
  { iata: "LTN", name: "Luton", city: "Londres", country: "GB" },
  { iata: "MAN", name: "Manchester", city: "Manchester", country: "GB" },
  { iata: "BHX", name: "Birmingham", city: "Birmingham", country: "GB" },
  { iata: "EDI", name: "Edinburgh", city: "Edimburgo", country: "GB" },
  { iata: "GLA", name: "Glasgow", city: "Glasgow", country: "GB" },
  { iata: "BRS", name: "Bristol", city: "Bristol", country: "GB" },
  { iata: "NCL", name: "Newcastle", city: "Newcastle", country: "GB" },
  // ── Rumania ──
  { iata: "OTP", name: "Henri Coandă", city: "Bucarest", country: "RO" },
  { iata: "CLJ", name: "Cluj-Napoca", city: "Cluj-Napoca", country: "RO" },
  { iata: "TSR", name: "Traian Vuia", city: "Timisoara", country: "RO" },
  { iata: "IAS", name: "Iasi", city: "Iasi", country: "RO" },
  { iata: "SBZ", name: "Sibiu", city: "Sibiu", country: "RO" },
  // ── Suecia ──
  { iata: "ARN", name: "Arlanda", city: "Estocolmo", country: "SE" },
  { iata: "NYO", name: "Skavsta", city: "Estocolmo", country: "SE" },
  { iata: "GOT", name: "Landvetter", city: "Gotemburgo", country: "SE" },
  { iata: "MMX", name: "Sturup", city: "Malmö", country: "SE" },
  { iata: "UME", name: "Umeå", city: "Umeå", country: "SE" },
  // ── Suiza ──
  { iata: "ZRH", name: "Zúrich", city: "Zúrich", country: "CH" },
  { iata: "GVA", name: "Ginebra", city: "Ginebra", country: "CH" },
  { iata: "BSL", name: "EuroAirport Basel", city: "Basilea", country: "CH" },
  { iata: "BRN", name: "Bern-Belp", city: "Berna", country: "CH" },
  // ── Albania ──
  { iata: "TIA", name: "Tirana Rinas", city: "Tirana", country: "AL" },
  // ── Alemania (adicional) ──
  { iata: "BWE", name: "Braunschweig", city: "Braunschweig", country: "DE" },
  { iata: "DRS", name: "Dresden", city: "Dresde", country: "DE" },
  { iata: "FKB", name: "Karlsruhe/Baden-Baden", city: "Karlsruhe", country: "DE" },
  { iata: "FMM", name: "Memmingen Allgäu", city: "Memmingen", country: "DE" },
  { iata: "HHN", name: "Frankfurt Hahn", city: "Frankfurt", country: "DE" },
  { iata: "NRN", name: "Weeze", city: "Weeze", country: "DE" },
  // ── Arabia Saudí ──
  { iata: "JED", name: "Rey Abdulaziz", city: "Yeda", country: "SA" },
  { iata: "RUH", name: "Rey Khalid", city: "Riad", country: "SA" },
  // ── Argelia ──
  { iata: "ALG", name: "Houari Boumediene", city: "Argel", country: "DZ" },
  { iata: "ORN", name: "Ahmed Ben Bella", city: "Orán", country: "DZ" },
  // ── Armenia ──
  { iata: "EVN", name: "Zvartnots", city: "Ereván", country: "AM" },
  // ── Azerbaiyán ──
  { iata: "GYD", name: "Heydar Aliyev", city: "Bakú", country: "AZ" },
  // ── Bolivia ──
  { iata: "CBB", name: "Jorge Wilstermann", city: "Cochabamba", country: "BO" },
  { iata: "VVI", name: "Viru Viru", city: "Santa Cruz", country: "BO" },
  // ── Brasil ──
  { iata: "FOR", name: "Pinto Martins", city: "Fortaleza", country: "BR" },
  { iata: "GIG", name: "Galeão", city: "Río de Janeiro", country: "BR" },
  { iata: "GRU", name: "Guarulhos", city: "São Paulo", country: "BR" },
  { iata: "REC", name: "Guararapes", city: "Recife", country: "BR" },
  { iata: "SSA", name: "Dep. Luís Eduardo", city: "Salvador", country: "BR" },
  { iata: "VCP", name: "Viracopos", city: "Campinas", country: "BR" },
  // ── Bulgaria ──
  { iata: "SOF", name: "Sofía", city: "Sofía", country: "BG" },
  // ── Cabo Verde ──
  { iata: "SID", name: "Amílcar Cabral", city: "Sal", country: "CV" },
  // ── Canadá ──
  { iata: "YHZ", name: "Halifax", city: "Halifax", country: "CA" },
  { iata: "YUL", name: "Montréal-Trudeau", city: "Montreal", country: "CA" },
  { iata: "YYC", name: "Calgary", city: "Calgary", country: "CA" },
  { iata: "YYZ", name: "Toronto Pearson", city: "Toronto", country: "CA" },
  // ── Chile ──
  { iata: "SCL", name: "Arturo Merino Benítez", city: "Santiago", country: "CL" },
  // ── China ──
  { iata: "CAN", name: "Guangzhou Baiyun", city: "Cantón", country: "CN" },
  { iata: "CKG", name: "Chongqing Jiangbei", city: "Chongqing", country: "CN" },
  { iata: "HGH", name: "Hangzhou Xiaoshan", city: "Hangzhou", country: "CN" },
  { iata: "HKG", name: "Hong Kong", city: "Hong Kong", country: "CN" },
  { iata: "PEK", name: "Beijing Capital", city: "Pekín", country: "CN" },
  { iata: "PVG", name: "Shanghai Pudong", city: "Shanghái", country: "CN" },
  { iata: "SZX", name: "Shenzhen Bao'an", city: "Shenzhen", country: "CN" },
  { iata: "TFU", name: "Chengdu Tianfu", city: "Chengdu", country: "CN" },
  { iata: "WNZ", name: "Wenzhou Longwan", city: "Wenzhou", country: "CN" },
  // ── Chipre ──
  { iata: "LCA", name: "Larnaca", city: "Larnaca", country: "CY" },
  { iata: "PEG", name: "Pafos", city: "Pafos", country: "CY" },
  // ── Colombia ──
  { iata: "BOG", name: "El Dorado", city: "Bogotá", country: "CO" },
  { iata: "CLO", name: "Alfonso Bonilla", city: "Cali", country: "CO" },
  { iata: "CTG", name: "Rafael Núñez", city: "Cartagena", country: "CO" },
  { iata: "MDE", name: "José M. Córdova", city: "Medellín", country: "CO" },
  // ── Corea del Sur ──
  { iata: "ICN", name: "Incheon", city: "Seúl", country: "KR" },
  // ── Costa Rica ──
  { iata: "SJO", name: "Juan Santamaría", city: "San José", country: "CR" },
  // ── Cuba ──
  { iata: "HAV", name: "José Martí", city: "La Habana", country: "CU" },
  { iata: "SCU", name: "Antonio Maceo", city: "Santiago de Cuba", country: "CU" },
  // ── Ecuador ──
  { iata: "GYE", name: "José J. de Olmedo", city: "Guayaquil", country: "EC" },
  { iata: "UIO", name: "Mariscal Sucre", city: "Quito", country: "EC" },
  // ── Egipto ──
  { iata: "CAI", name: "El Cairo", city: "El Cairo", country: "EG" },
  { iata: "LXR", name: "Luxor", city: "Luxor", country: "EG" },
  // ── El Salvador ──
  { iata: "SAL", name: "Óscar Romero", city: "San Salvador", country: "SV" },
  // ── Eslovaquia ──
  { iata: "BTS", name: "M. R. Štefánik", city: "Bratislava", country: "SK" },
  // ── Eslovenia ──
  { iata: "LJU", name: "Jože Pučnik", city: "Liubliana", country: "SI" },
  // ── España (adicional) ──
  { iata: "LCG", name: "A Coruña", city: "A Coruña", country: "ES" },
  { iata: "LEI", name: "Almería", city: "Almería", country: "ES" },
  { iata: "LEN", name: "León", city: "León", country: "ES" },
  { iata: "LEU", name: "La Seu d'Urgell", city: "La Seu d'Urgell", country: "ES" },
  { iata: "RJL", name: "Logroño", city: "Logroño", country: "ES" },
  { iata: "RMU", name: "Corvera de Murcia", city: "Murcia", country: "ES" },
  { iata: "SLM", name: "Salamanca", city: "Salamanca", country: "ES" },
  // ── Estados Unidos ──
  { iata: "ATL", name: "Hartsfield-Jackson", city: "Atlanta", country: "US" },
  { iata: "BOS", name: "Logan", city: "Boston", country: "US" },
  { iata: "CLT", name: "Douglas", city: "Charlotte", country: "US" },
  { iata: "DFW", name: "Dallas/Fort Worth", city: "Dallas", country: "US" },
  { iata: "EWR", name: "Newark Liberty", city: "Nueva York", country: "US" },
  { iata: "IAD", name: "Dulles", city: "Washington D.C.", country: "US" },
  { iata: "JFK", name: "John F. Kennedy", city: "Nueva York", country: "US" },
  { iata: "LAX", name: "Los Ángeles", city: "Los Ángeles", country: "US" },
  { iata: "MCO", name: "Orlando", city: "Orlando", country: "US" },
  { iata: "MIA", name: "Miami", city: "Miami", country: "US" },
  { iata: "ORD", name: "O'Hare", city: "Chicago", country: "US" },
  { iata: "PHL", name: "Filadelfia", city: "Filadelfia", country: "US" },
  { iata: "SEA", name: "Seattle-Tacoma", city: "Seattle", country: "US" },
  { iata: "SFO", name: "San Francisco", city: "San Francisco", country: "US" },
  // ── Etiopía ──
  { iata: "ADD", name: "Bole", city: "Addis Abeba", country: "ET" },
  // ── Francia (adicional) ──
  { iata: "BES", name: "Brest Bretagne", city: "Brest", country: "FR" },
  { iata: "LIL", name: "Lesquin", city: "Lille", country: "FR" },
  { iata: "RNS", name: "Saint-Jacques", city: "Rennes", country: "FR" },
  { iata: "SXB", name: "Estrasburgo", city: "Estrasburgo", country: "FR" },
  // ── Gambia ──
  { iata: "BJL", name: "Banjul", city: "Banjul", country: "GM" },
  // ── Georgia ──
  { iata: "KUT", name: "Kutaisi", city: "Kutaisi", country: "GE" },
  // ── Guatemala ──
  { iata: "GUA", name: "La Aurora", city: "Ciudad de Guatemala", country: "GT" },
  // ── Honduras ──
  { iata: "SAP", name: "Ramón Villeda Morales", city: "San Pedro Sula", country: "HN" },
  { iata: "XPL", name: "Palmerola", city: "Comayagua", country: "HN" },
  // ── Islandia ──
  { iata: "KEF", name: "Keflavík", city: "Reikiavik", country: "IS" },
  // ── Islas Feroe ──
  { iata: "FAE", name: "Vágar", city: "Sørvágur", country: "FO" },
  // ── Israel ──
  { iata: "TLV", name: "Ben Gurion", city: "Tel Aviv", country: "IL" },
  // ── Italia (adicional) ──
  { iata: "AOI", name: "Raffaello Sanzio", city: "Ancona", country: "IT" },
  { iata: "BDS", name: "Brindisi", city: "Brindisi", country: "IT" },
  { iata: "BRI", name: "Karol Wojtyla", city: "Bari", country: "IT" },
  { iata: "CAG", name: "Mario Mameli", city: "Cagliari", country: "IT" },
  { iata: "GOA", name: "Cristoforo Colombo", city: "Génova", country: "IT" },
  { iata: "LIN", name: "Linate", city: "Milán", country: "IT" },
  { iata: "OLB", name: "Costa Smeralda", city: "Olbia", country: "IT" },
  { iata: "PSA", name: "Galileo Galilei", city: "Pisa", country: "IT" },
  { iata: "PSR", name: "Pescara", city: "Pescara", country: "IT" },
  { iata: "REG", name: "Tito Minniti", city: "Reggio Calabria", country: "IT" },
  { iata: "SUF", name: "Lamezia Terme", city: "Lamezia Terme", country: "IT" },
  { iata: "TRN", name: "Sandro Pertini", city: "Turín", country: "IT" },
  { iata: "TRS", name: "Ronchi dei Legionari", city: "Trieste", country: "IT" },
  { iata: "TSF", name: "Treviso", city: "Treviso", country: "IT" },
  { iata: "VRN", name: "Valerio Catullo", city: "Verona", country: "IT" },
  // ── Japón ──
  { iata: "NRT", name: "Narita", city: "Tokio", country: "JP" },
  // ── Jordania ──
  { iata: "AMM", name: "Reina Alía", city: "Amán", country: "JO" },
  // ── Kuwait ──
  { iata: "KWI", name: "Kuwait", city: "Kuwait", country: "KW" },
  // ── Letonia ──
  { iata: "RIX", name: "Riga", city: "Riga", country: "LV" },
  // ── Líbano ──
  { iata: "BEY", name: "Rafic Hariri", city: "Beirut", country: "LB" },
  // ── Lituania ──
  { iata: "KUN", name: "Kaunas", city: "Kaunas", country: "LT" },
  { iata: "VNO", name: "Vilnius", city: "Vilna", country: "LT" },
  // ── Luxemburgo ──
  { iata: "LUX", name: "Luxembourg Findel", city: "Luxemburgo", country: "LU" },
  // ── Macedonia del Norte ──
  { iata: "SKP", name: "Alejandro el Grande", city: "Skopie", country: "MK" },
  // ── Malta ──
  { iata: "MLA", name: "Malta", city: "La Valeta", country: "MT" },
  // ── Marruecos ──
  { iata: "AGA", name: "Al Massira", city: "Agadir", country: "MA" },
  { iata: "CMN", name: "Mohammed V", city: "Casablanca", country: "MA" },
  { iata: "ESU", name: "Essaouira-Mogador", city: "Esauira", country: "MA" },
  { iata: "FEZ", name: "Fès-Saïss", city: "Fez", country: "MA" },
  { iata: "NDR", name: "Nador-El Aroui", city: "Nador", country: "MA" },
  { iata: "OUD", name: "Angads", city: "Uxda", country: "MA" },
  { iata: "OZZ", name: "Uarzazat", city: "Uarzazat", country: "MA" },
  { iata: "RAK", name: "Menara", city: "Marrakech", country: "MA" },
  { iata: "RBA", name: "Sale", city: "Rabat", country: "MA" },
  { iata: "TNG", name: "Ibn Battouta", city: "Tánger", country: "MA" },
  { iata: "TTU", name: "Tetuán", city: "Tetuán", country: "MA" },
  { iata: "VIL", name: "Dakhla", city: "Dajla", country: "MA" },
  // ── Mauricio ──
  { iata: "MRU", name: "Sir Seewoosagur Ramgoolam", city: "Port Louis", country: "MU" },
  // ── México ──
  { iata: "CUN", name: "Cancún", city: "Cancún", country: "MX" },
  { iata: "GDL", name: "Miguel Hidalgo", city: "Guadalajara", country: "MX" },
  { iata: "MEX", name: "Benito Juárez", city: "Ciudad de México", country: "MX" },
  { iata: "MTY", name: "Mariano Escobedo", city: "Monterrey", country: "MX" },
  { iata: "QRO", name: "Intercontinental", city: "Querétaro", country: "MX" },
  // ── Montenegro ──
  { iata: "TGD", name: "Podgorica", city: "Podgorica", country: "ME" },
  { iata: "TIV", name: "Tivat", city: "Tivat", country: "ME" },
  // ── Panamá ──
  { iata: "PTY", name: "Tocumen", city: "Ciudad de Panamá", country: "PA" },
  // ── Paraguay ──
  { iata: "ASU", name: "Silvio Pettirossi", city: "Asunción", country: "PY" },
  // ── Perú ──
  { iata: "LIM", name: "Jorge Chávez", city: "Lima", country: "PE" },
  // ── Polonia (adicional) ──
  { iata: "WMI", name: "Modlin", city: "Varsovia", country: "PL" },
  // ── Puerto Rico ──
  { iata: "SJU", name: "Luis Muñoz Marín", city: "San Juan", country: "PR" },
  // ── Qatar ──
  { iata: "DOH", name: "Hamad", city: "Doha", country: "QA" },
  // ── Reino Unido (adicional) ──
  { iata: "BFS", name: "Belfast Internacional", city: "Belfast", country: "GB" },
  { iata: "EMA", name: "East Midlands", city: "Nottingham", country: "GB" },
  { iata: "LBA", name: "Leeds Bradford", city: "Leeds", country: "GB" },
  { iata: "LCY", name: "London City", city: "Londres", country: "GB" },
  { iata: "LPL", name: "Liverpool John Lennon", city: "Liverpool", country: "GB" },
  { iata: "PIK", name: "Glasgow Prestwick", city: "Glasgow", country: "GB" },
  { iata: "SEN", name: "London Southend", city: "Londres", country: "GB" },
  { iata: "SOU", name: "Southampton", city: "Southampton", country: "GB" },
  // ── República Dominicana ──
  { iata: "PUJ", name: "Punta Cana", city: "Punta Cana", country: "DO" },
  { iata: "SDQ", name: "Las Américas", city: "Santo Domingo", country: "DO" },
  { iata: "STI", name: "Cibao", city: "Santiago", country: "DO" },
  // ── Rumania (adicional) ──
  { iata: "BBU", name: "Băneasa", city: "Bucarest", country: "RO" },
  { iata: "BCM", name: "Bacău", city: "Bacău", country: "RO" },
  { iata: "CRA", name: "Craiova", city: "Craiova", country: "RO" },
  { iata: "RMO", name: "Bacău", city: "Bacău", country: "RO" },
  // ── Senegal ──
  { iata: "DSS", name: "Blaise Diagne", city: "Dakar", country: "SN" },
  // ── Serbia ──
  { iata: "BEG", name: "Nikola Tesla", city: "Belgrado", country: "RS" },
  // ── Singapur ──
  { iata: "SIN", name: "Changi", city: "Singapur", country: "SG" },
  // ── Sudáfrica ──
  { iata: "JNB", name: "OR Tambo", city: "Johannesburgo", country: "ZA" },
  // ── Tailandia ──
  { iata: "BKK", name: "Suvarnabhumi", city: "Bangkok", country: "TH" },
  // ── Tanzania ──
  { iata: "ZNZ", name: "Zanzíbar", city: "Zanzíbar", country: "TZ" },
  // ── Turquía ──
  { iata: "ADB", name: "Adnan Menderes", city: "Esmirna", country: "TR" },
  { iata: "ESB", name: "Esenboğa", city: "Ankara", country: "TR" },
  { iata: "IST", name: "Estambul Atatürk", city: "Estambul", country: "TR" },
  { iata: "SAW", name: "Estambul Sabiha", city: "Estambul", country: "TR" },
  // ── Túnez ──
  { iata: "TUN", name: "Cartago", city: "Túnez", country: "TN" },
  // ── Uzbekistán ──
  { iata: "TAS", name: "Tashkent", city: "Taskent", country: "UZ" },
  // ── Uruguay ──
  { iata: "MVD", name: "Carrasco", city: "Montevideo", country: "UY" },
  // ── Emiratos Árabes Unidos ──
  { iata: "AUH", name: "Abu Dabi", city: "Abu Dabi", country: "AE" },
  { iata: "DXB", name: "Dubai", city: "Dubái", country: "AE" },
  // ── Venezuela ──
  { iata: "CCS", name: "Simón Bolívar", city: "Caracas", country: "VE" },
  // ── Estonia ──
  { iata: "TLL", name: "Lennart Meri", city: "Talín", country: "EE" },
  // ── Argentina ──
  { iata: "COR", name: "Pajas Blancas", city: "Córdoba", country: "AR" },
  { iata: "EZE", name: "Ezeiza", city: "Buenos Aires", country: "AR" },
  { iata: "ROS", name: "Islas Malvinas", city: "Rosario", country: "AR" },
  { iata: "AHO", name: "Fertilia", city: "Alguer", country: "IT" },
];

/* ═══════════════════════════════════════════
   COUNTRY FLAGS  (ISO 3166-1 alpha-2 → emoji)
═══════════════════════════════════════════ */
const COUNTRY_FLAGS = {
  AE: "🇦🇪", AL: "🇦🇱", AM: "🇦🇲", AR: "🇦🇷", AT: "🇦🇹",
  AZ: "🇦🇿", BE: "🇧🇪", BG: "🇧🇬", BO: "🇧🇴", BR: "🇧🇷",
  CA: "🇨🇦", CH: "🇨🇭", CL: "🇨🇱", CN: "🇨🇳", CO: "🇨🇴",
  CR: "🇨🇷", CU: "🇨🇺", CV: "🇨🇻", CY: "🇨🇾", CZ: "🇨🇿",
  DE: "🇩🇪", DK: "🇩🇰", DO: "🇩🇴", DZ: "🇩🇿", EC: "🇪🇨",
  EE: "🇪🇪", EG: "🇪🇬", ES: "🇪🇸", ET: "🇪🇹", FI: "🇫🇮",
  FO: "🇫🇴", FR: "🇫🇷", GB: "🇬🇧", GE: "🇬🇪", GM: "🇬🇲",
  GR: "🇬🇷", GT: "🇬🇹", HN: "🇭🇳", HR: "🇭🇷", HU: "🇭🇺",
  IE: "🇮🇪", IL: "🇮🇱", IS: "🇮🇸", IT: "🇮🇹", JO: "🇯🇴",
  JP: "🇯🇵", KR: "🇰🇷", KW: "🇰🇼", LB: "🇱🇧", LT: "🇱🇹",
  LU: "🇱🇺", LV: "🇱🇻", MA: "🇲🇦", ME: "🇲🇪", MK: "🇲🇰",
  MT: "🇲🇹", MU: "🇲🇺", MX: "🇲🇽", NL: "🇳🇱", NO: "🇳🇴",
  PA: "🇵🇦", PE: "🇵🇪", PL: "🇵🇱", PR: "🇵🇷", PT: "🇵🇹",
  PY: "🇵🇾", QA: "🇶🇦", RO: "🇷🇴", RS: "🇷🇸", SA: "🇸🇦",
  SE: "🇸🇪", SG: "🇸🇬", SI: "🇸🇮", SK: "🇸🇰", SN: "🇸🇳",
  SV: "🇸🇻", TH: "🇹🇭", TN: "🇹🇳", TR: "🇹🇷", TZ: "🇹🇿",
  US: "🇺🇸", UY: "🇺🇾", UZ: "🇺🇿", VE: "🇻🇪", ZA: "🇿🇦",
};
