/* ═══════════════════════════════════════════
   AIRPORT DATA
═══════════════════════════════════════════ */
const AIRPORTS = [
    // ── España ──
  { iata: "VLC", name: "Valencia", city: "Valencia", country: "ES", countryName: "🇪🇸 España" },
  { iata: "CDT", name: "Castellón", city: "Castellón", country: "ES", countryName: "🇪🇸 España" },
  { iata: "MAD", name: "Barajas", city: "Madrid", country: "ES", countryName: "🇪🇸 España" },
  { iata: "BCN", name: "El Prat", city: "Barcelona", country: "ES", countryName: "🇪🇸 España" },
  { iata: "SVQ", name: "San Pablo", city: "Sevilla", country: "ES", countryName: "🇪🇸 España" },
  { iata: "AGP", name: "Costa del Sol", city: "Málaga", country: "ES", countryName: "🇪🇸 España" },
  { iata: "ALC", name: "El Altet", city: "Alicante", country: "ES", countryName: "🇪🇸 España" },
  { iata: "BIO", name: "Bilbao", city: "Bilbao", country: "ES", countryName: "🇪🇸 España" },
  { iata: "PMI", name: "Son Sant Joan", city: "Palma de Mallorca", country: "ES", countryName: "🇪🇸 España" },
  { iata: "IBZ", name: "Ibiza", city: "Ibiza", country: "ES", countryName: "🇪🇸 España" },
  { iata: "MAH", name: "Menorca", city: "Menorca", country: "ES", countryName: "🇪🇸 España" },
  { iata: "TFS", name: "Sur Tenerife", city: "Tenerife Sur", country: "ES", countryName: "🇪🇸 España" },
  { iata: "TFN", name: "Norte Tenerife", city: "Tenerife Norte", country: "ES", countryName: "🇪🇸 España" },
  { iata: "LPA", name: "Gran Canaria", city: "Las Palmas", country: "ES", countryName: "🇪🇸 España" },
  { iata: "FUE", name: "Fuerteventura", city: "Fuerteventura", country: "ES", countryName: "🇪🇸 España" },
  { iata: "ACE", name: "Lanzarote", city: "Lanzarote", country: "ES", countryName: "🇪🇸 España" },
  { iata: "SPC", name: "La Palma", city: "La Palma", country: "ES", countryName: "🇪🇸 España" },
  { iata: "GMZ", name: "La Gomera", city: "La Gomera", country: "ES", countryName: "🇪🇸 España" },
  { iata: "VDE", name: "El Hierro", city: "El Hierro", country: "ES", countryName: "🇪🇸 España" },
  { iata: "SCQ", name: "Santiago de Compostela", city: "Santiago", country: "ES", countryName: "🇪🇸 España" },
  { iata: "VGO", name: "Vigo-Peinador", city: "Vigo", country: "ES", countryName: "🇪🇸 España" },
  { iata: "OVD", name: "Asturias", city: "Oviedo", country: "ES", countryName: "🇪🇸 España" },
  { iata: "SDR", name: "Santander", city: "Santander", country: "ES", countryName: "🇪🇸 España" },
  { iata: "EAS", name: "San Sebastián", city: "San Sebastián", country: "ES", countryName: "🇪🇸 España" },
  { iata: "VIT", name: "Vitoria", city: "Vitoria", country: "ES", countryName: "🇪🇸 España" },
  { iata: "PNA", name: "Pamplona", city: "Pamplona", country: "ES", countryName: "🇪🇸 España" },
  { iata: "ZAZ", name: "Zaragoza", city: "Zaragoza", country: "ES", countryName: "🇪🇸 España" },
  { iata: "REU", name: "Reus", city: "Reus", country: "ES", countryName: "🇪🇸 España" },
  { iata: "GRO", name: "Girona-Costa Brava", city: "Girona", country: "ES", countryName: "🇪🇸 España" },
  { iata: "GRX", name: "Federico García Lorca", city: "Granada", country: "ES", countryName: "🇪🇸 España" },
  { iata: "MJV", name: "Región de Murcia", city: "Murcia", country: "ES", countryName: "🇪🇸 España" },
  { iata: "XRY", name: "Jerez de la Frontera", city: "Jerez", country: "ES", countryName: "🇪🇸 España" },
  { iata: "MLN", name: "Melilla", city: "Melilla", country: "ES", countryName: "🇪🇸 España" },
  { iata: "VLL", name: "Valladolid", city: "Valladolid", country: "ES", countryName: "🇪🇸 España" },
  { iata: "BJZ", name: "Badajoz", city: "Badajoz", country: "ES", countryName: "🇪🇸 España" },
  { iata: "ODB", name: "Córdoba", city: "Córdoba", country: "ES", countryName: "🇪🇸 España" },
  // ── Alemania ──
  { iata: "BER", name: "Brandenburg", city: "Berlín", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "MUC", name: "München", city: "Múnich", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "FRA", name: "Frankfurt", city: "Frankfurt", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "DUS", name: "Düsseldorf", city: "Düsseldorf", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "HAM", name: "Hamburg", city: "Hamburgo", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "CGN", name: "Köln Bonn", city: "Colonia", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "STR", name: "Stuttgart", city: "Stuttgart", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "NUE", name: "Albrecht Dürer", city: "Núrnberg", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "HAJ", name: "Hannover", city: "Hannover", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "LEJ", name: "Leipzig/Halle", city: "Leipzig", country: "DE", countryName: "🇩🇪 Alemania" },
  // ── Austria ──
  { iata: "VIE", name: "Wien-Schwechat", city: "Viena", country: "AT", countryName: "🇦🇹 Austria" },
  { iata: "GRZ", name: "Graz", city: "Graz", country: "AT", countryName: "🇦🇹 Austria" },
  { iata: "INN", name: "Innsbruck", city: "Innsbruck", country: "AT", countryName: "🇦🇹 Austria" },
  { iata: "SZG", name: "Salzburg W. A. Mozart", city: "Salzburgo", country: "AT", countryName: "🇦🇹 Austria" },
  // ── Bélgica ──
  { iata: "BRU", name: "Bruselas", city: "Bruselas", country: "BE", countryName: "🇧🇪 Bélgica" },
  { iata: "CRL", name: "Charleroi", city: "Charleroi", country: "BE", countryName: "🇧🇪 Bélgica" },
  { iata: "LGG", name: "Liège", city: "Liège", country: "BE", countryName: "🇧🇪 Bélgica" },
  { iata: "ANR", name: "Antwerp", city: "Amberes", country: "BE", countryName: "🇧🇪 Bélgica" },
  // ── Croacia ──
  { iata: "ZAG", name: "Zagreb", city: "Zagreb", country: "HR", countryName: "🇭🇷 Croacia" },
  { iata: "DBV", name: "Dubrovnik", city: "Dubrovnik", country: "HR", countryName: "🇭🇷 Croacia" },
  { iata: "SPU", name: "Split", city: "Split", country: "HR", countryName: "🇭🇷 Croacia" },
  { iata: "ZAD", name: "Zadar", city: "Zadar", country: "HR", countryName: "🇭🇷 Croacia" },
  { iata: "PUY", name: "Pula", city: "Pula", country: "HR", countryName: "🇭🇷 Croacia" },
  // ── Dinamarca ──
  { iata: "CPH", name: "Kastrup", city: "Copenhague", country: "DK", countryName: "🇩🇰 Dinamarca" },
  { iata: "BLL", name: "Billund", city: "Billund", country: "DK", countryName: "🇩🇰 Dinamarca" },
  { iata: "AAL", name: "Aalborg", city: "Aalborg", country: "DK", countryName: "🇩🇰 Dinamarca" },
  { iata: "AAR", name: "Aarhus", city: "Aarhus", country: "DK", countryName: "🇩🇰 Dinamarca" },
  
  // ── Finlandia ──
  { iata: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", country: "FI", countryName: "🇫🇮 Finlandia" },
  { iata: "TMP", name: "Tampere-Pirkkala", city: "Tampere", country: "FI", countryName: "🇫🇮 Finlandia" },
  { iata: "OUL", name: "Oulu", city: "Oulu", country: "FI", countryName: "🇫🇮 Finlandia" },
  { iata: "TKU", name: "Turku", city: "Turku", country: "FI", countryName: "🇫🇮 Finlandia" },
  { iata: "RVN", name: "Rovaniemi", city: "Rovaniemi", country: "FI", countryName: "🇫🇮 Finlandia" },
  // ── Francia ──
  { iata: "CDG", name: "Charles de Gaulle", city: "París", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "ORY", name: "Orly", city: "París", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "BVA", name: "Beauvais-Tillé", city: "Beauvais (París)", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "NCE", name: "Côte d'Azur", city: "Niza", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "MRS", name: "Provence", city: "Marsella", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "LYS", name: "Saint-Exupéry", city: "Lyon", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "BOD", name: "Mérignac", city: "Burdeos", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "TLS", name: "Blagnac", city: "Toulouse", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "NTE", name: "Nantes Atlantique", city: "Nantes", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "MPL", name: "Montpellier Méditerranée", city: "Montpellier", country: "FR", countryName: "🇫🇷 Francia" },
  // ── Grecia ──
  { iata: "ATH", name: "Eleftherios Venizelos", city: "Atenas", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "SKG", name: "Makedonia", city: "Salónica", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "HER", name: "Nikos Kazantzakis", city: "Heraklion", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "RHO", name: "Diagoras", city: "Rodas", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "CFU", name: "Ioannis Kapodistrias", city: "Corfú", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "JMK", name: "Mykonos", city: "Mykonos", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "JTR", name: "Santorini", city: "Santorini", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "CHQ", name: "Chania", city: "Chania", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "ZTH", name: "Zakynthos", city: "Zakynthos", country: "GR", countryName: "🇬🇷 Grecia" },
  { iata: "KGS", name: "Kos", city: "Kos", country: "GR", countryName: "🇬🇷 Grecia" },
  // ── Hungría ──
  { iata: "BUD", name: "Ferenc Liszt", city: "Budapest", country: "HU", countryName: "🇭🇺 Hungría" },
  { iata: "DEB", name: "Debrecen", city: "Debrecen", country: "HU", countryName: "🇭🇺 Hungría" },
  // ── Irlanda ──
  { iata: "DUB", name: "Dublin", city: "Dublín", country: "IE", countryName: "🇮🇪 Irlanda" },
  { iata: "ORK", name: "Cork", city: "Cork", country: "IE", countryName: "🇮🇪 Irlanda" },
  { iata: "SNN", name: "Shannon", city: "Shannon", country: "IE", countryName: "🇮🇪 Irlanda" },
  // ── Italia ──
  { iata: "FCO", name: "Fiumicino", city: "Roma", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "CIA", name: "Ciampino", city: "Roma", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "MXP", name: "Malpensa", city: "Milán", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "BGY", name: "Orio al Serio", city: "Bérgamo", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "VCE", name: "Marco Polo", city: "Venecia", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "FLR", name: "Peretola", city: "Florencia", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "BLQ", name: "Guglielmo Marconi", city: "Bolonia", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "NAP", name: "Capodichino", city: "Nápoles", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "CTA", name: "Fontanarossa", city: "Catania", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "PMO", name: "Falcone Borsellino", city: "Palermo", country: "IT", countryName: "🇮🇹 Italia" },
  // ── Noruega ──
  { iata: "OSL", name: "Gardermoen", city: "Oslo", country: "NO", countryName: "🇳🇴 Noruega" },
  { iata: "BGO", name: "Flesland", city: "Bergen", country: "NO", countryName: "🇳🇴 Noruega" },
  { iata: "TRD", name: "Værnes", city: "Trondheim", country: "NO", countryName: "🇳🇴 Noruega" },
  { iata: "SVG", name: "Sola", city: "Stavanger", country: "NO", countryName: "🇳🇴 Noruega" },
  { iata: "TOS", name: "Langnes", city: "Tromsø", country: "NO", countryName: "🇳🇴 Noruega" },
  // ── Países Bajos ──
  { iata: "AMS", name: "Schiphol", city: "Ámsterdam", country: "NL", countryName: "🇳🇱 Países Bajos" },
  { iata: "EIN", name: "Eindhoven", city: "Eindhoven", country: "NL", countryName: "🇳🇱 Países Bajos" },
  { iata: "RTM", name: "Rotterdam The Hague", city: "Rotterdam", country: "NL", countryName: "🇳🇱 Países Bajos" },
  // ── Polonia ──
  { iata: "WAW", name: "Chopin", city: "Varsovia", country: "PL", countryName: "🇵🇱 Polonia" },
  { iata: "KRK", name: "Balice", city: "Cracovia", country: "PL", countryName: "🇵🇱 Polonia" },
  { iata: "GDN", name: "Lećh Wałęsa", city: "Gdansk", country: "PL", countryName: "🇵🇱 Polonia" },
  { iata: "WRO", name: "Copernicus", city: "Wroclaw", country: "PL", countryName: "🇵🇱 Polonia" },
  { iata: "POZ", name: "Lawica", city: "Poznan", country: "PL", countryName: "🇵🇱 Polonia" },
  { iata: "KTW", name: "Pyrzowice", city: "Katowice", country: "PL", countryName: "🇵🇱 Polonia" },
  // ── Portugal ──
  { iata: "LIS", name: "Humberto Delgado", city: "Lisboa", country: "PT", countryName: "🇵🇹 Portugal" },
  { iata: "OPO", name: "Francisco Sá Carneiro", city: "Oporto", country: "PT", countryName: "🇵🇹 Portugal" },
  { iata: "FAO", name: "Faro", city: "Faro", country: "PT", countryName: "🇵🇹 Portugal" },
  { iata: "FNC", name: "Cristiano Ronaldo", city: "Funchal (Madeira)", country: "PT", countryName: "🇵🇹 Portugal" },
  { iata: "PDL", name: "João Paulo II", city: "Ponta Delgada (Azores)", country: "PT", countryName: "🇵🇹 Portugal" },
  // ── República Checa ──
  { iata: "PRG", name: "Václav Havel", city: "Praga", country: "CZ", countryName: "🇨🇿 República Checa" },
  { iata: "BRQ", name: "Brno-Tuřany", city: "Brno", country: "CZ", countryName: "🇨🇿 República Checa" },
  { iata: "OSR", name: "Ostrava Mošnov", city: "Ostrava", country: "CZ", countryName: "🇨🇿 República Checa" },
  // ── Reino Unido ──
  { iata: "LHR", name: "Heathrow", city: "Londres", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "LGW", name: "Gatwick", city: "Londres", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "STN", name: "Stansted", city: "Londres", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "LTN", name: "Luton", city: "Londres", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "MAN", name: "Manchester", city: "Manchester", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "BHX", name: "Birmingham", city: "Birmingham", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "EDI", name: "Edinburgh", city: "Edimburgo", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "GLA", name: "Glasgow", city: "Glasgow", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "BRS", name: "Bristol", city: "Bristol", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "NCL", name: "Newcastle", city: "Newcastle", country: "GB", countryName: "🇬🇧 Reino Unido" },
  // ── Rumania ──
  { iata: "OTP", name: "Henri Coandă", city: "Bucarest", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "CLJ", name: "Cluj-Napoca", city: "Cluj-Napoca", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "TSR", name: "Traian Vuia", city: "Timisoara", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "IAS", name: "Iasi", city: "Iasi", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "SBZ", name: "Sibiu", city: "Sibiu", country: "RO", countryName: "🇷🇴 Rumania" },
  // ── Suecia ──
  { iata: "ARN", name: "Arlanda", city: "Estocolmo", country: "SE", countryName: "🇸🇪 Suecia" },
  { iata: "NYO", name: "Skavsta", city: "Estocolmo", country: "SE", countryName: "🇸🇪 Suecia" },
  { iata: "GOT", name: "Landvetter", city: "Gotemburgo", country: "SE", countryName: "🇸🇪 Suecia" },
  { iata: "MMX", name: "Sturup", city: "Malmö", country: "SE", countryName: "🇸🇪 Suecia" },
  { iata: "UME", name: "Umeå", city: "Umeå", country: "SE", countryName: "🇸🇪 Suecia" },
  // ── Suiza ──
  { iata: "ZRH", name: "Zúrich", city: "Zúrich", country: "CH", countryName: "🇨🇭 Suiza" },
  { iata: "GVA", name: "Ginebra", city: "Ginebra", country: "CH", countryName: "🇨🇭 Suiza" },
  { iata: "BSL", name: "EuroAirport Basel", city: "Basilea", country: "CH", countryName: "🇨🇭 Suiza" },
  { iata: "BRN", name: "Bern-Belp", city: "Berna", country: "CH", countryName: "🇨🇭 Suiza" },
  // ── Albania ──
  { iata: "TIA", name: "Tirana Rinas", city: "Tirana", country: "AL", countryName: "🇦🇱 Albania" },
  // ── Alemania (adicional) ──
  { iata: "BWE", name: "Braunschweig", city: "Braunschweig", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "DRS", name: "Dresden", city: "Dresde", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "FKB", name: "Karlsruhe/Baden-Baden", city: "Karlsruhe", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "FMM", name: "Memmingen Allgäu", city: "Memmingen", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "HHN", name: "Frankfurt Hahn", city: "Frankfurt", country: "DE", countryName: "🇩🇪 Alemania" },
  { iata: "NRN", name: "Weeze", city: "Weeze", country: "DE", countryName: "🇩🇪 Alemania" },
  // ── Arabia Saudí ──
  { iata: "JED", name: "Rey Abdulaziz", city: "Yeda", country: "SA", countryName: "🇸🇦 Arabia Saudí" },
  { iata: "RUH", name: "Rey Khalid", city: "Riad", country: "SA", countryName: "🇸🇦 Arabia Saudí" },
  // ── Argelia ──
  { iata: "ALG", name: "Houari Boumediene", city: "Argel", country: "DZ", countryName: "🇩🇿 Argelia" },
  { iata: "ORN", name: "Ahmed Ben Bella", city: "Orán", country: "DZ", countryName: "🇩🇿 Argelia" },
  // ── Armenia ──
  { iata: "EVN", name: "Zvartnots", city: "Ereván", country: "AM", countryName: "🇦🇲 Armenia" },
  // ── Azerbaiyán ──
  { iata: "GYD", name: "Heydar Aliyev", city: "Bakú", country: "AZ", countryName: "🇦🇿 Azerbaiyán" },
  // ── Bolivia ──
  { iata: "CBB", name: "Jorge Wilstermann", city: "Cochabamba", country: "BO", countryName: "🇧🇴 Bolivia" },
  { iata: "VVI", name: "Viru Viru", city: "Santa Cruz", country: "BO", countryName: "🇧🇴 Bolivia" },
  // ── Brasil ──
  { iata: "FOR", name: "Pinto Martins", city: "Fortaleza", country: "BR", countryName: "🇧🇷 Brasil" },
  { iata: "GIG", name: "Galeão", city: "Río de Janeiro", country: "BR", countryName: "🇧🇷 Brasil" },
  { iata: "GRU", name: "Guarulhos", city: "São Paulo", country: "BR", countryName: "🇧🇷 Brasil" },
  { iata: "REC", name: "Guararapes", city: "Recife", country: "BR", countryName: "🇧🇷 Brasil" },
  { iata: "SSA", name: "Dep. Luís Eduardo", city: "Salvador", country: "BR", countryName: "🇧🇷 Brasil" },
  { iata: "VCP", name: "Viracopos", city: "Campinas", country: "BR", countryName: "🇧🇷 Brasil" },
  // ── Bulgaria ──
  { iata: "SOF", name: "Sofía", city: "Sofía", country: "BG", countryName: "🇧🇬 Bulgaria" },
  // ── Cabo Verde ──
  { iata: "SID", name: "Amílcar Cabral", city: "Sal", country: "CV", countryName: "🇨🇻 Cabo Verde" },
  // ── Canadá ──
  { iata: "YHZ", name: "Halifax", city: "Halifax", country: "CA", countryName: "🇨🇦 Canadá" },
  { iata: "YUL", name: "Montréal-Trudeau", city: "Montreal", country: "CA", countryName: "🇨🇦 Canadá" },
  { iata: "YYC", name: "Calgary", city: "Calgary", country: "CA", countryName: "🇨🇦 Canadá" },
  { iata: "YYZ", name: "Toronto Pearson", city: "Toronto", country: "CA", countryName: "🇨🇦 Canadá" },
  // ── Chile ──
  { iata: "SCL", name: "Arturo Merino Benítez", city: "Santiago", country: "CL", countryName: "🇨🇱 Chile" },
  // ── China ──
  { iata: "CAN", name: "Guangzhou Baiyun", city: "Cantón", country: "CN", countryName: "🇨🇳 China" },
  { iata: "CKG", name: "Chongqing Jiangbei", city: "Chongqing", country: "CN", countryName: "🇨🇳 China" },
  { iata: "HGH", name: "Hangzhou Xiaoshan", city: "Hangzhou", country: "CN", countryName: "🇨🇳 China" },
  { iata: "HKG", name: "Hong Kong", city: "Hong Kong", country: "CN", countryName: "🇨🇳 China" },
  { iata: "PEK", name: "Beijing Capital", city: "Pekín", country: "CN", countryName: "🇨🇳 China" },
  { iata: "PVG", name: "Shanghai Pudong", city: "Shanghái", country: "CN", countryName: "🇨🇳 China" },
  { iata: "SZX", name: "Shenzhen Bao'an", city: "Shenzhen", country: "CN", countryName: "🇨🇳 China" },
  { iata: "TFU", name: "Chengdu Tianfu", city: "Chengdu", country: "CN", countryName: "🇨🇳 China" },
  { iata: "WNZ", name: "Wenzhou Longwan", city: "Wenzhou", country: "CN", countryName: "🇨🇳 China" },
  // ── Chipre ──
  { iata: "LCA", name: "Larnaca", city: "Larnaca", country: "CY", countryName: "🇨🇾 Chipre" },
  { iata: "PEG", name: "Pafos", city: "Pafos", country: "CY", countryName: "🇨🇾 Chipre" },
  // ── Colombia ──
  { iata: "BOG", name: "El Dorado", city: "Bogotá", country: "CO", countryName: "🇨🇴 Colombia" },
  { iata: "CLO", name: "Alfonso Bonilla", city: "Cali", country: "CO", countryName: "🇨🇴 Colombia" },
  { iata: "CTG", name: "Rafael Núñez", city: "Cartagena", country: "CO", countryName: "🇨🇴 Colombia" },
  { iata: "MDE", name: "José M. Córdova", city: "Medellín", country: "CO", countryName: "🇨🇴 Colombia" },
  // ── Corea del Sur ──
  { iata: "ICN", name: "Incheon", city: "Seúl", country: "KR", countryName: "🇰🇷 Corea del Sur" },
  // ── Costa Rica ──
  { iata: "SJO", name: "Juan Santamaría", city: "San José", country: "CR", countryName: "🇨🇷 Costa Rica" },
  // ── Cuba ──
  { iata: "HAV", name: "José Martí", city: "La Habana", country: "CU", countryName: "🇨🇺 Cuba" },
  { iata: "SCU", name: "Antonio Maceo", city: "Santiago de Cuba", country: "CU", countryName: "🇨🇺 Cuba" },
  // ── Ecuador ──
  { iata: "GYE", name: "José J. de Olmedo", city: "Guayaquil", country: "EC", countryName: "🇪🇨 Ecuador" },
  { iata: "UIO", name: "Mariscal Sucre", city: "Quito", country: "EC", countryName: "🇪🇨 Ecuador" },
  // ── Egipto ──
  { iata: "CAI", name: "El Cairo", city: "El Cairo", country: "EG", countryName: "🇪🇬 Egipto" },
  { iata: "LXR", name: "Luxor", city: "Luxor", country: "EG", countryName: "🇪🇬 Egipto" },
  // ── El Salvador ──
  { iata: "SAL", name: "Óscar Romero", city: "San Salvador", country: "SV", countryName: "🇸🇻 El Salvador" },
  // ── Eslovaquia ──
  { iata: "BTS", name: "M. R. Štefánik", city: "Bratislava", country: "SK", countryName: "🇸🇰 Eslovaquia" },
  // ── Eslovenia ──
  { iata: "LJU", name: "Jože Pučnik", city: "Liubliana", country: "SI", countryName: "🇸🇮 Eslovenia" },
  // ── España (adicional) ──
  { iata: "LCG", name: "A Coruña", city: "A Coruña", country: "ES", countryName: "🇪🇸 España" },
  { iata: "LEI", name: "Almería", city: "Almería", country: "ES", countryName: "🇪🇸 España" },
  { iata: "LEN", name: "León", city: "León", country: "ES", countryName: "🇪🇸 España" },
  { iata: "LEU", name: "La Seu d'Urgell", city: "La Seu d'Urgell", country: "ES", countryName: "🇪🇸 España" },
  { iata: "RJL", name: "Logroño", city: "Logroño", country: "ES", countryName: "🇪🇸 España" },
  { iata: "RMU", name: "Corvera de Murcia", city: "Murcia", country: "ES", countryName: "🇪🇸 España" },
  { iata: "SLM", name: "Salamanca", city: "Salamanca", country: "ES", countryName: "🇪🇸 España" },
  // ── Estados Unidos ──
  { iata: "ATL", name: "Hartsfield-Jackson", city: "Atlanta", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "BOS", name: "Logan", city: "Boston", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "CLT", name: "Douglas", city: "Charlotte", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "DFW", name: "Dallas/Fort Worth", city: "Dallas", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "EWR", name: "Newark Liberty", city: "Nueva York", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "IAD", name: "Dulles", city: "Washington D.C.", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "JFK", name: "John F. Kennedy", city: "Nueva York", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "LAX", name: "Los Ángeles", city: "Los Ángeles", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "MCO", name: "Orlando", city: "Orlando", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "MIA", name: "Miami", city: "Miami", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "ORD", name: "O'Hare", city: "Chicago", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "PHL", name: "Filadelfia", city: "Filadelfia", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "SEA", name: "Seattle-Tacoma", city: "Seattle", country: "US", countryName: "🇺🇸 Estados Unidos" },
  { iata: "SFO", name: "San Francisco", city: "San Francisco", country: "US", countryName: "🇺🇸 Estados Unidos" },
  // ── Etiopía ──
  { iata: "ADD", name: "Bole", city: "Addis Abeba", country: "ET", countryName: "🇪🇹 Etiopía" },
  // ── Francia (adicional) ──
  { iata: "BES", name: "Brest Bretagne", city: "Brest", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "LIL", name: "Lesquin", city: "Lille", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "RNS", name: "Saint-Jacques", city: "Rennes", country: "FR", countryName: "🇫🇷 Francia" },
  { iata: "SXB", name: "Estrasburgo", city: "Estrasburgo", country: "FR", countryName: "🇫🇷 Francia" },
  // ── Gambia ──
  { iata: "BJL", name: "Banjul", city: "Banjul", country: "GM", countryName: "🇬🇲 Gambia" },
  // ── Georgia ──
  { iata: "KUT", name: "Kutaisi", city: "Kutaisi", country: "GE", countryName: "🇬🇪 Georgia" },
  // ── Guatemala ──
  { iata: "GUA", name: "La Aurora", city: "Ciudad de Guatemala", country: "GT", countryName: "🇬🇹 Guatemala" },
  // ── Honduras ──
  { iata: "SAP", name: "Ramón Villeda Morales", city: "San Pedro Sula", country: "HN", countryName: "🇭🇳 Honduras" },
  { iata: "XPL", name: "Palmerola", city: "Comayagua", country: "HN", countryName: "🇭🇳 Honduras" },
  // ── Islandia ──
  { iata: "KEF", name: "Keflavík", city: "Reikiavik", country: "IS", countryName: "🇮🇸 Islandia" },
  // ── Islas Feroe ──
  { iata: "FAE", name: "Vágar", city: "Sørvágur", country: "FO", countryName: "🇫🇴 Islas Feroe" },
  // ── Israel ──
  { iata: "TLV", name: "Ben Gurion", city: "Tel Aviv", country: "IL", countryName: "🇮🇱 Israel" },
  // ── Italia (adicional) ──
  { iata: "AOI", name: "Raffaello Sanzio", city: "Ancona", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "BDS", name: "Brindisi", city: "Brindisi", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "BRI", name: "Karol Wojtyla", city: "Bari", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "CAG", name: "Mario Mameli", city: "Cagliari", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "GOA", name: "Cristoforo Colombo", city: "Génova", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "LIN", name: "Linate", city: "Milán", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "OLB", name: "Costa Smeralda", city: "Olbia", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "PSA", name: "Galileo Galilei", city: "Pisa", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "PSR", name: "Pescara", city: "Pescara", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "REG", name: "Tito Minniti", city: "Reggio Calabria", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "SUF", name: "Lamezia Terme", city: "Lamezia Terme", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "TRN", name: "Sandro Pertini", city: "Turín", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "TRS", name: "Ronchi dei Legionari", city: "Trieste", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "TSF", name: "Treviso", city: "Treviso", country: "IT", countryName: "🇮🇹 Italia" },
  { iata: "VRN", name: "Valerio Catullo", city: "Verona", country: "IT", countryName: "🇮🇹 Italia" },
  // ── Japón ──
  { iata: "NRT", name: "Narita", city: "Tokio", country: "JP", countryName: "🇯🇵 Japón" },
  // ── Jordania ──
  { iata: "AMM", name: "Reina Alía", city: "Amán", country: "JO", countryName: "🇯🇴 Jordania" },
  // ── Kuwait ──
  { iata: "KWI", name: "Kuwait", city: "Kuwait", country: "KW", countryName: "🇰🇼 Kuwait" },
  // ── Letonia ──
  { iata: "RIX", name: "Riga", city: "Riga", country: "LV", countryName: "🇱🇻 Letonia" },
  // ── Líbano ──
  { iata: "BEY", name: "Rafic Hariri", city: "Beirut", country: "LB", countryName: "🇱🇧 Líbano" },
  // ── Lituania ──
  { iata: "KUN", name: "Kaunas", city: "Kaunas", country: "LT", countryName: "🇱🇹 Lituania" },
  { iata: "VNO", name: "Vilnius", city: "Vilna", country: "LT", countryName: "🇱🇹 Lituania" },
  // ── Luxemburgo ──
  { iata: "LUX", name: "Luxembourg Findel", city: "Luxemburgo", country: "LU", countryName: "🇱🇺 Luxemburgo" },
  // ── Macedonia del Norte ──
  { iata: "SKP", name: "Alejandro el Grande", city: "Skopie", country: "MK", countryName: "🇲🇰 Macedonia del Norte" },
  // ── Malta ──
  { iata: "MLA", name: "Malta", city: "La Valeta", country: "MT", countryName: "🇲🇹 Malta" },
  // ── Marruecos ──
  { iata: "AGA", name: "Al Massira", city: "Agadir", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "CMN", name: "Mohammed V", city: "Casablanca", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "ESU", name: "Essaouira-Mogador", city: "Esauira", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "FEZ", name: "Fès-Saïss", city: "Fez", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "NDR", name: "Nador-El Aroui", city: "Nador", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "OUD", name: "Angads", city: "Uxda", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "OZZ", name: "Uarzazat", city: "Uarzazat", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "RAK", name: "Menara", city: "Marrakech", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "RBA", name: "Sale", city: "Rabat", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "TNG", name: "Ibn Battouta", city: "Tánger", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "TTU", name: "Tetuán", city: "Tetuán", country: "MA", countryName: "🇲🇦 Marruecos" },
  { iata: "VIL", name: "Dakhla", city: "Dajla", country: "MA", countryName: "🇲🇦 Marruecos" },
  // ── Mauricio ──
  { iata: "MRU", name: "Sir Seewoosagur Ramgoolam", city: "Port Louis", country: "MU", countryName: "🇲🇺 Mauricio" },
  // ── México ──
  { iata: "CUN", name: "Cancún", city: "Cancún", country: "MX", countryName: "🇲🇽 México" },
  { iata: "GDL", name: "Miguel Hidalgo", city: "Guadalajara", country: "MX", countryName: "🇲🇽 México" },
  { iata: "MEX", name: "Benito Juárez", city: "Ciudad de México", country: "MX", countryName: "🇲🇽 México" },
  { iata: "MTY", name: "Mariano Escobedo", city: "Monterrey", country: "MX", countryName: "🇲🇽 México" },
  { iata: "QRO", name: "Intercontinental", city: "Querétaro", country: "MX", countryName: "🇲🇽 México" },
  // ── Montenegro ──
  { iata: "TGD", name: "Podgorica", city: "Podgorica", country: "ME", countryName: "🇲🇪 Montenegro" },
  { iata: "TIV", name: "Tivat", city: "Tivat", country: "ME", countryName: "🇲🇪 Montenegro" },
  // ── Panamá ──
  { iata: "PTY", name: "Tocumen", city: "Ciudad de Panamá", country: "PA", countryName: "🇵🇦 Panamá" },
  // ── Paraguay ──
  { iata: "ASU", name: "Silvio Pettirossi", city: "Asunción", country: "PY", countryName: "🇵🇾 Paraguay" },
  // ── Perú ──
  { iata: "LIM", name: "Jorge Chávez", city: "Lima", country: "PE", countryName: "🇵🇪 Perú" },
  // ── Polonia (adicional) ──
  { iata: "WMI", name: "Modlin", city: "Varsovia", country: "PL", countryName: "🇵🇱 Polonia" },
  // ── Puerto Rico ──
  { iata: "SJU", name: "Luis Muñoz Marín", city: "San Juan", country: "PR", countryName: "🇵🇷 Puerto Rico" },
  // ── Qatar ──
  { iata: "DOH", name: "Hamad", city: "Doha", country: "QA", countryName: "🇶🇦 Qatar" },
  // ── Reino Unido (adicional) ──
  { iata: "BFS", name: "Belfast Internacional", city: "Belfast", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "EMA", name: "East Midlands", city: "Nottingham", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "LBA", name: "Leeds Bradford", city: "Leeds", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "LCY", name: "London City", city: "Londres", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "LPL", name: "Liverpool John Lennon", city: "Liverpool", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "PIK", name: "Glasgow Prestwick", city: "Glasgow", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "SEN", name: "London Southend", city: "Londres", country: "GB", countryName: "🇬🇧 Reino Unido" },
  { iata: "SOU", name: "Southampton", city: "Southampton", country: "GB", countryName: "🇬🇧 Reino Unido" },
  // ── República Dominicana ──
  { iata: "PUJ", name: "Punta Cana", city: "Punta Cana", country: "DO", countryName: "🇩🇴 República Dominicana" },
  { iata: "SDQ", name: "Las Américas", city: "Santo Domingo", country: "DO", countryName: "🇩🇴 República Dominicana" },
  { iata: "STI", name: "Cibao", city: "Santiago", country: "DO", countryName: "🇩🇴 República Dominicana" },
  // ── Rumania (adicional) ──
  { iata: "BBU", name: "Băneasa", city: "Bucarest", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "BCM", name: "Bacău", city: "Bacău", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "CRA", name: "Craiova", city: "Craiova", country: "RO", countryName: "🇷🇴 Rumania" },
  { iata: "RMO", name: "Bacău", city: "Bacău", country: "RO", countryName: "🇷🇴 Rumania" },
  // ── Senegal ──
  { iata: "DSS", name: "Blaise Diagne", city: "Dakar", country: "SN", countryName: "🇸🇳 Senegal" },
  // ── Serbia ──
  { iata: "BEG", name: "Nikola Tesla", city: "Belgrado", country: "RS", countryName: "🇷🇸 Serbia" },
  // ── Singapur ──
  { iata: "SIN", name: "Changi", city: "Singapur", country: "SG", countryName: "🇸🇬 Singapur" },
  // ── Sudáfrica ──
  { iata: "JNB", name: "OR Tambo", city: "Johannesburgo", country: "ZA", countryName: "🇿🇦 Sudáfrica" },
  // ── Tailandia ──
  { iata: "BKK", name: "Suvarnabhumi", city: "Bangkok", country: "TH", countryName: "🇹🇭 Tailandia" },
  // ── Tanzania ──
  { iata: "ZNZ", name: "Zanzíbar", city: "Zanzíbar", country: "TZ", countryName: "🇹🇿 Tanzania" },
  // ── Turquía ──
  { iata: "ADB", name: "Adnan Menderes", city: "Esmirna", country: "TR", countryName: "🇹🇷 Turquía" },
  { iata: "ESB", name: "Esenboğa", city: "Ankara", country: "TR", countryName: "🇹🇷 Turquía" },
  { iata: "IST", name: "Estambul Atatürk", city: "Estambul", country: "TR", countryName: "🇹🇷 Turquía" },
  { iata: "SAW", name: "Estambul Sabiha", city: "Estambul", country: "TR", countryName: "🇹🇷 Turquía" },
  // ── Túnez ──
  { iata: "TUN", name: "Cartago", city: "Túnez", country: "TN", countryName: "🇹🇳 Túnez" },
  // ── Uzbekistán ──
  { iata: "TAS", name: "Tashkent", city: "Taskent", country: "UZ", countryName: "🇺🇿 Uzbekistán" },
  // ── Uruguay ──
  { iata: "MVD", name: "Carrasco", city: "Montevideo", country: "UY", countryName: "🇺🇾 Uruguay" },
  // ── Emiratos Árabes Unidos ──
  { iata: "AUH", name: "Abu Dabi", city: "Abu Dabi", country: "AE", countryName: "🇦🇪 Emiratos Árabes" },
  { iata: "DXB", name: "Dubai", city: "Dubái", country: "AE", countryName: "🇦🇪 Emiratos Árabes" },
  // ── Venezuela ──
  { iata: "CCS", name: "Simón Bolívar", city: "Caracas", country: "VE", countryName: "🇻🇪 Venezuela" },
  // ── Estonia ──
  { iata: "TLL", name: "Lennart Meri", city: "Talín", country: "EE", countryName: "🇪🇪 Estonia" },
  // ── Argentina ──
  { iata: "COR", name: "Pajas Blancas", city: "Córdoba", country: "AR", countryName: "🇦🇷 Argentina" },
  { iata: "EZE", name: "Ezeiza", city: "Buenos Aires", country: "AR", countryName: "🇦🇷 Argentina" },
  { iata: "ROS", name: "Islas Malvinas", city: "Rosario", country: "AR", countryName: "🇦🇷 Argentina" },
  { iata: "AHO", name: "Fertilia", city: "Alguer", country: "IT", countryName: "🇮🇹 Italia" },
];
