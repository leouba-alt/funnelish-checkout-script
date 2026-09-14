const HOST_WEBHOOK = "";
const HOST_PREELIMINAR_WEBHOOK = "https://automatizacion-n8n.v4iimk.easypanel.host/webhook/funnelish-preliminar-tyv";
const STORE_NAME = "Tienda TyV";

var countryStateInfo = { "Colombia": { "Seleccione un Departamento": {}, "Amazonas": { "Leticia": [], "Puerto Nario": [] }, "Antioquia": { "Abejorral": [], "Abriaquí": [], "Alejandría": [], "Amagá": [], "Amalfi": [], "Andes": [], "Angelópolis": [], "Angostura": [], "Anorí": [], "Anzá": [], "Apartadó": [], "Arboletes": [], "Argelia": [], "Armenia": [], "Barbosa": [], "Bello": [], "Belmira": [], "Betania": [], "Betulia": [], "Briceño": [], "Buriticá": [], "Cáceres": [], "Caicedo": [], "Caldas": [], "Campamento": [], "Cañasgordas": [], "Caracolí": [], "Caramanta": [], "Carepa": [], "Carolina del Príncipe": [], "Caucasia": [], "Chigorodó": [], "Cisneros": [], "Ciudad Bolívar": [], "Cocorná": [], "Concepción": [], "Concordia": [], "Copacabana": [], "Dabeiba": [], "Donmatías": [], "Ebéjico": [], "El Bagre": [], "El Carmen de Viboral": [], "El Peñol": [], "El Retiro": [], "El Santuario": [], "Entrerríos": [], "Envigado": [], "Fredonia": [], "Frontino": [], "Giraldo": [], "Girardota": [], "Gómez Plata": [], "Granada": [], "Guadalupe": [], "Guarne": [], "Guatapé": [], "Heliconia": [], "Hispania": [], "Itagüí": [], "Ituango": [], "Jardín": [], "Jericó": [], "La Ceja": [], "La Estrella": [], "La Pintada": [], "La Unión": [], "Liborina": [], "Maceo": [], "Marinilla": [], "Medellín": [], "Montebello": [], "Murindó": [], "Mutatá": [], "Nariño": [], "Nechí": [], "Necoclí": [], "Olaya": [], "Peque": [], "Pueblorrico": [], "Puerto Berrío": [], "Puerto Nare": [], "Puerto Triunfo": [], "Remedios": [], "Rionegro": [], "Sabanalarga": [], "Sabaneta": [], "Salgar": [], "San Andrés de Cuerquia": [], "San Carlos": [], "San Francisco": [], "San Jerónimo": [], "San José de la Montaña": [], "San Juan de Urabá": [], "San Luis": [], "San Pedro de Urabá": [], "San Pedro de los Milagros": [], "San Rafael": [], "San Roque": [], "San Vicente": [], "Santa Bárbara": [], "Santa Fe de Antioquia": [], "Santa Rosa de Osos": [], "Santo Domingo": [], "Segovia": [], "Sonsón": [], "Sopetrán": [], "Támesis": [], "Tarazá": [], "Tarso": [], "Titiribí": [], "Toledo": [], "Turbo": [], "Uramita": [], "Urrao": [], "Valdivia": [], "Valparaíso": [], "Vegachí": [], "Venecia": [], "Vigía del Fuerte": [], "Yalí": [], "Yarumal": [], "Yolombó": [], "Yondó": [], "Zaragoza": [] }, "Arauca": { "Arauca": [], "Arauquita": [], "Cravo Norte": [], "Fortul": [], "Puerto Rondón": [], "Saravena": [], "Tame": [] }, "Atlántico": { "Baranoa": [], "Barranquilla": [], "Campo de la Cruz": [], "Candelaria": [], "Galapa": [], "Juan de Acosta": [], "Luruaco": [], "Malambo": [], "Manatí": [], "Palmar de Varela": [], "Piojó": [], "Polonuevo": [], "Ponedera": [], "Puerto Colombia": [], "Repelón": [], "Sabanagrande": [], "Sabanalarga": [], "Santa Lucía": [], "Santo Tomás": [], "Soledad": [], "Suán": [], "Tubará": [], "Usiacurí": [] }, "Bolívar": { "Achí": [], "Altos del Rosario": [], "Arenal": [], "Arjona": [], "Arroyohondo": [], "Barranco de Loba": [], "Brazuelo de Papayal": [], "Calamar": [], "Cantagallo": [], "Cartagena": [], "Cicuco": [], "Clemencia": [], "Córdoba": [], "El Carmen de Bolívar": [], "El Guamo": [], "El Peñón": [], "Hatillo de Loba": [], "Magangué": [], "Mahates": [], "Margarita": [], "María la Baja": [], "Mompós": [], "Montecristo": [], "Morales": [], "Norosí": [], "Pinillos": [], "Regidor": [], "Río Viejo": [], "San Cristóbal": [], "San Estanislao": [], "San Fernando": [], "San Jacinto del Cauca": [], "San Jacinto": [], "San Juan Nepomuceno": [], "San Martín de Loba": [], "San Pablo": [], "Santa Catalina": [], "Santa Rosa": [], "Santa Rosa del Sur": [], "Simití": [], "Soplaviento": [], "Talaigua Nuevo": [], "Tiquisio": [], "Turbaco": [], "Turbaná": [], "Villanueva": [], "Zambrano": [] }, "Boyacá": { "Almeida": [], "Aquitania": [], "Arcabuco": [], "Belén": [], "Berbeo": [], "Betéitiva": [], "Boavita": [], "Boyacá": [], "Briceño": [], "Buenavista": [], "Busbanzá": [], "Caldas": [], "Campohermoso": [], "Cerinza": [], "Chinavita": [], "Chiquinquirá": [], "Chíquiza": [], "Chiscas": [], "Chita": [], "Chitaraque": [], "Chivatá": [], "Chivor": [], "Ciénega": [], "Cómbita": [], "Coper": [], "Corrales": [], "Covarachía": [], "Cubará": [], "Cucaita": [], "Cuítiva": [], "Duitama": [], "El Cocuy": [], "El Espino": [], "Firavitoba": [], "Floresta": [], "Gachantivá": [], "Gámeza": [], "Garagoa": [], "Guacamayas": [], "Guateque": [], "Guayatá": [], "Güicán": [], "Iza": [], "Jenesano": [], "Jericó": [], "La Capilla": [], "La Uvita": [], "La Victoria": [], "Labranzagrande": [], "Macanal": [], "Maripí": [], "Miraflores": [], "Mongua": [], "Monguí": [], "Moniquirá": [], "Motavita": [], "Muzo": [], "Nobsa": [], "Nuevo Colón": [], "Oicatá": [], "Otanche": [], "Pachavita": [], "Páez": [], "Paipa": [], "Pajarito": [], "Panqueba": [], "Pauna": [], "Paya": [], "Paz del Río": [], "Pesca": [], "Pisba": [], "Puerto Boyacá": [], "Quípama": [], "Ramiriquí": [], "Ráquira": [], "Rondón": [], "Saboyá": [], "Sáchica": [], "Samacá": [], "San Eduardo": [], "San José de Pare": [], "San Luis de Gaceno": [], "San Mateo": [], "San Miguel de Sema": [], "San Pablo de Borbur": [], "Santa María": [], "Santa Rosa de Viterbo": [], "Santa Sofía": [], "Santana": [], "Sativanorte": [], "Sativasur": [], "Siachoque": [], "Soatá": [], "Socha": [], "Socotá": [], "Sogamoso": [], "Somondoco": [], "Sora": [], "Soracá": [], "Sotaquirá": [], "Susacón": [], "Sutamarchán": [], "Sutatenza": [], "Tasco": [], "Tenza": [], "Tibaná": [], "Tibasosa": [], "Tinjacá": [], "Tipacoque": [], "Toca": [], "Togüí": [], "Tópaga": [], "Tota": [], "Tunja": [], "Tununguá": [], "Turmequé": [], "Tuta": [], "Tutazá": [], "Úmbita": [], "Ventaquemada": [], "Villa de Leyva": [], "Viracachá": [], "Zetaquira": [] }, "Caldas": { "Aguadas": [], "Anserma": [], "Aranzazu": [], "Belalcázar": [], "Chinchiná": [], "Filadelfia": [], "La Dorada": [], "La Merced": [], "Manizales": [], "Manzanares": [], "Marmato": [], "Marquetalia": [], "Marulanda": [], "Neira": [], "Norcasia": [], "Pácora": [], "Palestina": [], "Pensilvania": [], "Riosucio": [], "Risaralda": [], "Salamina": [], "Samaná": [], "San José": [], "Supía": [], "Victoria": [], "Villamaría": [], "Viterbo": [] }, "Caquetá": { "Albania": [], "Belén de los Andaquíes": [], "Cartagena del Chairá": [], "Curillo": [], "El Doncello": [], "El Paujil": [], "Florencia": [], "La Montañita": [], "Milán": [], "Morelia": [], "Puerto Rico": [], "San José del Fragua": [], "San Vicente del Caguán": [], "Solano": [], "Solita": [], "Valparaíso": [] }, "Casanare": { "Aguazul": [], "Chámeza": [], "Hato Corozal": [], "La Salina": [], "Maní": [], "Monterrey": [], "Nunchía": [], "Orocué": [], "Paz de Ariporo": [], "Pore": [], "Recetor": [], "Sabanalarga": [], "Sácama": [], "San Luis de Palenque": [], "Támara": [], "Tauramena": [], "Trinidad": [], "Villanueva": [], "Yopal": [] }, "Cauca": { "Almaguer": [], "Argelia": [], "Balboa": [], "Bolívar": [], "Buenos Aires": [], "Cajibío": [], "Caldono": [], "Caloto": [], "Corinto": [], "El Tambo": [], "Florencia": [], "Guachené": [], "Guapí": [], "Inzá": [], "Jambaló": [], "La Sierra": [], "La Vega": [], "López de Micay": [], "Mercaderes": [], "Miranda": [], "Morales": [], "Padilla": [], "Páez": [], "Patía": [], "Piamonte": [], "Piendamó": [], "Popayán": [], "Puerto Tejada": [], "Puracé": [], "Rosas": [], "San Sebastián": [], "Santa Rosa": [], "Santander de Quilichao": [], "Silvia": [], "Sotará": [], "Suárez": [], "Sucre": [], "Timbío": [], "Timbiquí": [], "Toribío": [], "Totoró": [], "Villa Rica": [] }, "Cesar": { "Aguachica": [], "Agustín Codazzi": [], "Astrea": [], "Becerril": [], "Bosconia": [], "Chimichagua": [], "Chiriguaná": [], "Curumaní": [], "El Copey": [], "El Paso": [], "Gamarra": [], "González": [], "La Gloria (Cesar)": [], "La Jagua de Ibirico": [], "La Paz": [], "Manaure Balcón del Cesar": [], "Pailitas": [], "Pelaya": [], "Pueblo Bello": [], "Río de Oro": [], "San Alberto": [], "San Diego": [], "San Martín": [], "Tamalameque": [], "Valledupar": [] }, "Chocó": { "Acandí": [], "Alto Baudó": [], "Bagadó": [], "Bahía Solano": [], "Bajo Baudó": [], "Bojayá": [], "Cantón de San Pablo": [], "Cértegui": [], "Condoto": [], "El Atrato": [], "El Carmen de Atrato": [], "El Carmen del Darién": [], "Istmina": [], "Juradó": [], "Litoral de San Juan": [], "Lloró": [], "Medio Atrato": [], "Medio Baudó": [], "Medio San Juan": [], "Nóvita": [], "Nuquí": [], "Quibdó": [], "Río Iró": [], "Río Quito": [], "Riosucio": [], "San José del Palmar": [], "Sipí": [], "Tadó": [], "Unión Panamericana": [], "Unguía": [] }, "Cundinamarca": { "Agua de Dios": [], "Albán": [], "Anapoima": [], "Anolaima": [], "Apulo": [], "Arbeláez": [], "Beltrán": [], "Bituima": [], "Bogotá": [], "Bojacá": [], "Cabrera": [], "Cachipay": [], "Cajicá": [], "Caparrapí": [], "Cáqueza": [], "Carmen de Carupa": [], "Chaguaní": [], "Chía": [], "Chipaque": [], "Choachí": [], "Chocontá": [], "Cogua": [], "Cota": [], "Cucunubá": [], "El Colegio": [], "El Peñón": [], "El Rosal": [], "Facatativá": [], "Fómeque": [], "Fosca": [], "Funza": [], "Fúquene": [], "Fusagasugá": [], "Gachalá": [], "Gachancipá": [], "Gachetá": [], "Gama": [], "Girardot": [], "Granada": [], "Guachetá": [], "Guaduas": [], "Guasca": [], "Guataquí": [], "Guatavita": [], "Guayabal de Síquima": [], "Guayabetal": [], "Gutiérrez": [], "Jerusalén": [], "Junín": [], "La Calera": [], "La Mesa": [], "La Palma": [], "La Peña": [], "La Vega": [], "Lenguazaque": [], "Machetá": [], "Madrid": [], "Manta": [], "Medina": [], "Mosquera": [], "Nariño": [], "Nemocón": [], "Nilo": [], "Nimaima": [], "Nocaima": [], "Pacho": [], "Paime": [], "Pandi": [], "Paratebueno": [], "Pasca": [], "Puerto Salgar": [], "Pulí": [], "Quebradanegra": [], "Quetame": [], "Quipile": [], "Ricaurte": [], "San Antonio del Tequendama": [], "San Bernardo": [], "San Cayetano": [], "San Francisco": [], "San Juan de Rioseco": [], "Sasaima": [], "Sesquilé": [], "Sibaté": [], "Silvania": [], "Simijaca": [], "Soacha": [], "Sopó": [], "Subachoque": [], "Suesca": [], "Supatá": [], "Susa": [], "Sutatausa": [], "Tabio": [], "Tausa": [], "Tena": [], "Tenjo": [], "Tibacuy": [], "Tibirita": [], "Tocaima": [], "Tocancipá": [], "Topaipí": [], "Ubalá": [], "Ubaque": [], "Ubaté": [], "Une": [], "Útica": [], "Venecia": [], "Vergara": [], "Vianí": [], "Villagómez": [], "Villapinzón": [], "Villeta": [], "Viotá": [], "Yacopí": [], "Zipacón": [], "Zipaquirá": [] }, "Córdoba": { "Ayapel": [], "Buenavista": [], "Canalete": [], "Cereté": [], "Chimá": [], "Chinú": [], "Ciénaga de Oro": [], "Cotorra": [], "La Apartada": [], "Lorica": [], "Los Córdobas": [], "Momil": [], "Montelíbano": [], "Montería": [], "Moñitos": [], "Planeta Rica": [], "Pueblo Nuevo": [], "Puerto Escondido": [], "Puerto Libertador": [], "Purísima": [], "Sahagún": [], "San Andrés de Sotavento": [], "San Antero": [], "San Bernardo del Viento": [], "San Carlos": [], "San José de Uré": [], "San Pelayo": [], "Tierralta": [], "Tuchín": [], "Valencia": [] }, "Guainía": { "Inírida": [] }, "Guaviare": { "Calamar": [], "El Retorno": [], "Miraflores": [], "San José del Guaviare": [] }, "Huila": { "Acevedo": [], "Agrado": [], "Aipe": [], "Algeciras": [], "Altamira": [], "Baraya": [], "Campoalegre": [], "Colombia": [], "El Pital": [], "Elías": [], "Garzón": [], "Gigante": [], "Guadalupe": [], "Hobo": [], "Íquira": [], "Isnos": [], "La Argentina": [], "La Plata": [], "Nátaga": [], "Neiva": [], "Oporapa": [], "Paicol": [], "Palermo": [], "Palestina": [], "Pitalito": [], "Rivera": [], "Saladoblanco": [], "San Agustín": [], "Santa María": [], "Suaza": [], "Tarqui": [], "Tello": [], "Teruel": [], "Tesalia": [], "Timaná": [], "Villavieja": [], "Yaguará": [] }, "La Guajira": { "Albania": [], "Barrancas": [], "Dibulla": [], "Distracción": [], "El Molino": [], "Fonseca": [], "Hatonuevo": [], "La Jagua del Pilar": [], "Maicao": [], "Manaure": [], "Riohacha": [], "San Juan del Cesar": [], "Uribia": [], "Urumita": [], "Villanueva": [] }, "Magdalena": { "Algarrobo": [], "Aracataca": [], "Ariguaní": [], "Cerro de San Antonio": [], "Chibolo": [], "Ciénaga": [], "Concordia": [], "El Banco": [], "El Piñón": [], "El Retén": [], "Fundación": [], "Guamal": [], "Nueva Granada": [], "Pedraza": [], "Pijiño del Carmen": [], "Pivijay": [], "Plato": [], "Pueblo Viejo": [], "Remolino": [], "Sabanas de San Ángel": [], "Salamina": [], "San Sebastián de Buenavista": [], "San Zenón": [], "Santa Ana": [], "Santa Bárbara de Pinto": [], "Santa Marta": [], "Sitionuevo": [], "Tenerife": [], "Zapayán": [], "Zona Bananera": [] }, "Meta": { "Acacías": [], "Barranca de Upía": [], "Cabuyaro": [], "Castilla la Nueva": [], "Cubarral": [], "Cumaral": [], "El Calvario": [], "El Castillo": [], "El Dorado": [], "Fuente de Oro": [], "Granada": [], "Guamal": [], "La Macarena": [], "La Uribe": [], "Lejanías": [], "Mapiripán": [], "Mesetas": [], "Puerto Concordia": [], "Puerto Gaitán": [], "Puerto Lleras": [], "Puerto López": [], "Puerto Rico": [], "Restrepo": [], "San Carlos de Guaroa": [], "San Juan de Arama": [], "San Juanito": [], "San Martín": [], "Villavicencio": [], "Vista Hermosa": [] }, "Nariño": { "Aldana": [], "Ancuyá": [], "Arboleda": [], "Barbacoas": [], "Belén": [], "Buesaco": [], "Chachagüí": [], "Colón": [], "Consacá": [], "Contadero": [], "Córdoba": [], "Cuaspud": [], "Cumbal": [], "Cumbitara": [], "El Charco": [], "El Peñol": [], "El Rosario": [], "El Tablón": [], "El Tambo": [], "Francisco Pizarro": [], "Funes": [], "Guachucal": [], "Guaitarilla": [], "Gualmatán": [], "Iles": [], "Imués": [], "Ipiales": [], "La Cruz": [], "La Florida": [], "La Llanada": [], "La Tola": [], "La Unión": [], "Leiva": [], "Linares": [], "Los Andes": [], "Magüí Payán": [], "Mallama": [], "Mosquera": [], "Nariño": [], "Olaya Herrera": [], "Ospina": [], "Pasto": [], "Policarpa": [], "Potosí": [], "Providencia": [], "Puerres": [], "Pupiales": [], "Ricaurte": [], "Roberto Payán": [], "Samaniego": [], "San Bernardo": [], "San José de Albán": [], "San Lorenzo": [], "San Pablo": [], "San Pedro de Cartago": [], "Sandoná": [], "Santa Bárbara": [], "Santacruz": [], "Sapuyes": [], "Taminango": [], "Tangua": [], "Tumaco": [], "Túquerres": [], "Yacuanquer": [] }, "Norte de Santander": { "Ábrego": [], "Arboledas": [], "Bochalema": [], "Bucarasica": [], "Cáchira": [], "Cácota": [], "Chinácota": [], "Chitagá": [], "Convención": [], "Cúcuta": [], "Cucutilla": [], "Duranía": [], "El Carmen": [], "El Tarra": [], "El Zulia": [], "Gramalote": [], "Hacarí": [], "Herrán": [], "La Esperanza": [], "La Playa de Belén": [], "Labateca": [], "Los Patios": [], "Lourdes": [], "Mutiscua": [], "Ocaña": [], "Pamplona": [], "Pamplonita": [], "Puerto Santander": [], "Ragonvalia": [], "Salazar de Las Palmas": [], "San Calixto": [], "San Cayetano": [], "Santiago": [], "Santo Domingo de Silos": [], "Sardinata": [], "Teorama": [], "Tibú": [], "Toledo": [], "Villa Caro": [], "Villa del Rosario": [] }, "Putumayo": { "Colón": [], "Mocoa": [], "Orito": [], "Puerto Asís": [], "Puerto Caicedo": [], "Puerto Guzmán": [], "Puerto Leguízamo": [], "San Francisco": [], "San Miguel": [], "Santiago": [], "Sibundoy": [], "Valle del Guamuez": [], "Villagarzón": [] }, "Quindío": { "Armenia": [], "Buenavista": [], "Calarcá": [], "Circasia": [], "Córdoba": [], "Filandia": [], "Génova": [], "La Tebaida": [], "Montenegro": [], "Pijao": [], "Quimbaya": [], "Salento": [] }, "Risaralda": { "Apía": [], "Balboa": [], "Belén de Umbría": [], "Dosquebradas": [], "Guática": [], "La Celia": [], "La Virginia": [], "Marsella": [], "Mistrató": [], "Pereira": [], "Pueblo Rico": [], "Quinchía": [], "Santa Rosa de Cabal": [], "Santuario": [] }, "San Andrés y Providencia": { "Providencia y Santa Catalina Islas": [], "San Andrés": [] }, "Santander": { "Aguada": [], "Albania": [], "Aratoca": [], "Barbosa": [], "Barichara": [], "Barrancabermeja": [], "Betulia": [], "Bolívar": [], "Bucaramanga": [], "Cabrera": [], "California": [], "Capitanejo": [], "Carcasí": [], "Cepitá": [], "Cerrito": [], "Charalá": [], "Charta": [], "Chima": [], "Chipatá": [], "Cimitarra": [], "Concepción": [], "Confines": [], "Contratación": [], "Coromoro": [], "Curití": [], "El Carmen de Chucurí": [], "El Guacamayo": [], "El Peñón": [], "El Playón": [], "El Socorro": [], "Encino": [], "Enciso": [], "Florián": [], "Floridablanca": [], "Galán": [], "Gámbita": [], "Girón": [], "Guaca": [], "Guadalupe": [], "Guapotá": [], "Guavatá": [], "Güepsa": [], "Hato": [], "Jesús María": [], "Jordán": [], "La Belleza": [], "La Paz": [], "Landázuri": [], "Lebrija": [], "Los Santos": [], "Macaravita": [], "Málaga": [], "Matanza": [], "Mogotes": [], "Molagavita": [], "Ocamonte": [], "Oiba": [], "Onzaga": [], "Palmar": [], "Palmas del Socorro": [], "Páramo": [], "Piedecuesta": [], "Pinchote": [], "Puente Nacional": [], "Puerto Parra": [], "Puerto Wilches": [], "Rionegro": [], "Sabana de Torres": [], "San Andrés": [], "San Benito": [], "San Gil": [], "San Joaquín": [], "San José de Miranda": [], "San Miguel": [], "San Vicente de Chucurí": [], "Santa Bárbara": [], "Santa Helena del Opón": [], "Simacota": [], "Suaita": [], "Sucre": [], "Suratá": [], "Tona": [], "Valle de San José": [], "Vélez": [], "Vetas": [], "Villanueva": [], "Zapatoca": [] }, "Sucre": { "Buenavista": [], "Caimito": [], "Chalán": [], "Colosó": [], "Corozal": [], "Coveñas": [], "El Roble": [], "Galeras": [], "Guaranda": [], "La Unión": [], "Los Palmitos": [], "Majagual": [], "Morroa": [], "Ovejas": [], "Sampués": [], "San Antonio de Palmito": [], "San Benito Abad": [], "San Juan de Betulia": [], "San Marcos": [], "San Onofre": [], "San Pedro": [], "Sincé": [], "Sincelejo": [], "Sucre": [], "Tolú": [], "Tolú Viejo": [] }, "Tolima": { "Alpujarra": [], "Alvarado": [], "Ambalema": [], "Anzoátegui": [], "Armero": [], "Ataco": [], "Cajamarca": [], "Carmen de Apicalá": [], "Casabianca": [], "Chaparral": [], "Coello": [], "Coyaima": [], "Cunday": [], "Dolores": [], "El Espinal": [], "Falán": [], "Flandes": [], "Fresno": [], "Guamo": [], "Herveo": [], "Honda": [], "Ibagué": [], "Icononzo": [], "Lérida": [], "Líbano": [], "Mariquita": [], "Melgar": [], "Murillo": [], "Natagaima": [], "Ortega": [], "Palocabildo": [], "Piedras": [], "Planadas": [], "Prado": [], "Purificación": [], "Rioblanco": [], "Roncesvalles": [], "Rovira": [], "Saldaña": [], "San Antonio": [], "San Luis": [], "Santa Isabel": [], "Suárez": [], "Valle de San Juan": [], "Venadillo": [], "Villahermosa": [], "Villarrica": [] }, "Valle del Cauca": { "Alcalá": [], "Andalucía": [], "Ansermanuevo": [], "Argelia": [], "Bolívar": [], "Buenaventura": [], "Buga": [], "Bugalagrande": [], "Caicedonia": [], "Cali": [], "Calima": [], "Candelaria": [], "Cartago": [], "Dagua": [], "El Águila": [], "El Cairo": [], "El Cerrito": [], "El Dovio": [], "Florida": [], "Ginebra": [], "Guacarí": [], "Jamundí": [], "La Cumbre": [], "La Unión": [], "La Victoria": [], "Obando": [], "Palmira": [], "Pradera": [], "Restrepo": [], "Riofrío": [], "Roldanillo": [], "San Pedro": [], "Sevilla": [], "Toro": [], "Trujillo": [], "Tuluá": [], "Ulloa": [], "Versalles": [], "Vijes": [], "Yotoco": [], "Yumbo": [], "Zarzal": [] }, "Vaupés": { "Carurú": [], "Mitú": [], "Taraira": [] }, "Vichada": { "Cumaribo": [], "La Primavera": [], "Puerto Carreño": [], "Santa Rosalía": [] } } };

window.addEventListener('load', personalizarSelects);

function personalizarSelects() {
    if (typeof countryStateInfo === 'undefined') {
        console.error('countryStateInfo no está definido.');
        return;
    }

    const firstCountry = Object.keys(countryStateInfo)[0];
    const listCountry = countryStateInfo[firstCountry];

    const stateSel = document.getElementsByName("shipping_state")[0];
    const citySel = document.getElementsByName("shipping_city")[0];

    if (!stateSel || !citySel) return;

    stateSel.innerHTML = '';
    citySel.innerHTML = '';

    Object.keys(listCountry).forEach(state => {
        const option = new Option(state, state);
        stateSel.options.add(option);
    });

    stateSel.onchange = function () {
        citySel.innerHTML = '';
        const cities = listCountry[this.value] || {};
        const optionDefault = new Option('Selecciona una opción', '');
        citySel.options.add(optionDefault);

        Object.keys(cities).forEach(city => {
            const option = new Option(city, city);
            citySel.options.add(option);
        });
    };
}

window.addEventListener('load', ocultarEmail);

function ocultarEmail() {
    const inputEmail = document.getElementsByName("email")[0];
    if (inputEmail) {
        inputEmail.value = createMailAleatory();
        inputEmail.style.display = `none`;
        if (inputEmail.previousElementSibling) {
            inputEmail.previousElementSibling.style.display = `none`;
        }
        if (inputEmail.parentElement) {
            inputEmail.parentElement.style.display = `none`;
        }
    }
}

function createMailAleatory() {
    let mail = ``;
    let caracteres = `abcdefghijklmnopqrstuvwxyz0123456789`;
    for (let i = 0; i < 10; i++) {
        mail += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return mail + `@gmail.com`;
}

// Validación de teléfono Colombia en el envío
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('a[href="#submit-step"]');
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            const inputTelefono = document.getElementsByName('phone')[0];
            const telefono = inputTelefono ? inputTelefono.value : '';
            const patronTelefonoColombia = /^\+57[3]\d{9}$/;

            if (!patronTelefonoColombia.test(telefono)) {
                console.log("No se permite enviar el formulario pues el teléfono " + telefono + " es inválido");
                if (inputTelefono) inputTelefono.className = 'invalid';
                event.stopImmediatePropagation();
            }
        }, true);
    }
});

// Listener principal para tracking de leads
window.addEventListener('load', mainLeadTracking);

function mainLeadTracking() {
    const body = document.body;
    body.addEventListener('input', (e) => handleInputEvent(e));
    body.addEventListener('change', (e) => handleInputEvent(e));
}

let timerId;
let count = 0;
const time = 4000;

function enviarConDebouncing() {
    clearTimeout(timerId);
    timerId = setTimeout(async () => {
        count++;
        console.log(`Enviamos el lead con debouncing, count: ${count}`);
        pushLead();
    }, time);
}

async function pushLead() {
    try {
        const dataForm = recoverData();
        if (!dataForm.client.phone || dataForm.client.phone === '+57') {
            console.log(`No se puede enviar el lead, número de teléfono incompleto`);
            return false;
        }
        await sendLead(dataForm, true);
    } catch (error) {
        console.log("Error en pushLead:", error);
    }
}

async function sendLead(Lead, preliminar = true) {
    try {
        const urlHost = preliminar ? HOST_PREELIMINAR_WEBHOOK : HOST_WEBHOOK;
        if (!urlHost) return false;

        const response = await fetch(urlHost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Lead)
        });

        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Error enviando lead: ${response.status} - ${response.statusText}`);
        }
        return true;
    } catch (error) {
        console.log(`Error al enviar el lead:`, error);
        return false;
    }
}

function handleInputEvent(event) {
    enviarConDebouncing();
}

function recoverData() {
    const getValueQuery = (name) => document.querySelector(`[name="${name}"]`)?.value || '';

    const data = {
        storeName: STORE_NAME,
        LeadID: getLeadID(),
        urlOrigin: `${location.hostname}${location.pathname}`,
        dateTime: new Date().toISOString(),
        leadType: '',
        ipOrigin: '',
        notes: getValueQuery('notes'),
        client: {
            name: '',
            lastName: '',
            fullName: getValueQuery('full_name'),
            email: getValueQuery('email'),
            phone: getValueQuery('phone')
        },
        dataAddress: {
            address: getValueQuery('shipping_address'),
            city: getValueQuery('shipping_city'),
            state: getValueQuery('shipping_state'),
            country: getValueQuery('shipping_country'),
            zipCode: getValueQuery('zip_code'),
            notes: getValueQuery('notes'),
            coordinates: { latitude: null, longitude: null }
        }
    };
    data.products = getDataProducts();
    data.totalPrice = getDataPrice(data.products);

    return data;
}

function getDataProducts() {
    const productNames = [...document.querySelectorAll('.os-name')].map(element =>
        element.textContent.trim()
    );

    if (typeof PRODUCTS === 'undefined') return [];

    return PRODUCTS.filter(product =>
        productNames.some(name => name.trim() === product.name.trim())
    ).map(product => ({
        name: product.name,
        price: product.price
    }));
}

function getDataPrice(mergedProductInfo) {
    const totalElem = document.querySelector('.os-total .os-price');
    const totalPriceFromHTML = totalElem ? totalElem.textContent.trim() : '';
    const calculatedTotal = mergedProductInfo.reduce((acc, product) => acc + (product.price || 0), 0);

    if (totalPriceFromHTML.includes(calculatedTotal.toString())) {
        return calculatedTotal;
    } else {
        return totalPriceFromHTML;
    }
}

// Inicialización de LeadID
let leadId;

function makeId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

function setLeadIdLocalStorage() {
    if (leadId) {
        return { id: leadId };
    }

    // Limpieza de claves previas obsoletas si existieran
    if (localStorage.getItem('idIntegramelo')) {
        localStorage.removeItem('idIntegramelo');
    }
    if (localStorage.getItem('IDIntegramelo')) {
        localStorage.removeItem('IDIntegramelo');
    }

    const currentUrl = `${window.location.hostname}${window.location.pathname}`;
    let elementosArray = JSON.parse(localStorage.getItem('LeadID')) || [];
    let existingElement = elementosArray.find(e => e.url === currentUrl && new Date() - new Date(e.date) < 20 * 60 * 1000);

    if (existingElement) {
        leadId = existingElement.id;
        return existingElement;
    }

    const newElement = {
        url: currentUrl,
        id: makeId(10),
        date: new Date().toISOString()
    };

    elementosArray.push(newElement);
    localStorage.setItem('LeadID', JSON.stringify(elementosArray));

    leadId = newElement.id;
    return newElement;
}

function getLeadID() {
    if (!leadId) {
        leadId = setLeadIdLocalStorage().id;
    }
    return leadId;
}

// Configuración inicial en DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    getLeadID();
    const urlOrigin = `${window.location.hostname}${window.location.pathname}`;
    const objLeadID = { LeadID: leadId, urlOrigin };

    const leadIdField = document.querySelector(`[data-name="LeadID"]`);
    if (leadIdField) {
        leadIdField.value = JSON.stringify(objLeadID);
        if (leadIdField.parentElement) {
            leadIdField.parentElement.style.display = 'none';
        }
    }
});

addEventListener('load', () => {
    const DireccionInput = document.querySelector(`[data-name="Direccion"]`);
    if (DireccionInput) {
        DireccionInput.value = DireccionInput.value.replace(/{.*}/, '');
    }
});

// Concatenar dirección
window.addEventListener('load', initConcatenarDireccion);

function initConcatenarDireccion() {
    const camposCustom = document.getElementsByName("custom");
    const direccionField = camposCustom[0];
    const barrioField = camposCustom[1];
    const direccion = document.getElementsByName('shipping_address')[0];

    if (!direccion) return;

    direccion.setAttribute('readonly', true);

    function actualizarDireccion() {
        direccion.value = `${direccionField?.value || ''} , Barrio: ${barrioField?.value || ''}`;
    }

    if (direccionField) {
        direccionField.addEventListener('change', actualizarDireccion);
        direccionField.addEventListener('input', actualizarDireccion);
    }
    if (barrioField) {
        barrioField.addEventListener('change', actualizarDireccion);
        barrioField.addEventListener('input', actualizarDireccion);
    }
}

window.addEventListener('load', ocultarInputs);

function ocultarInputs() {
    const leadIdInput = document.querySelector('input[data-name="LeadID"]');
    if (leadIdInput) {
        leadIdInput.style.display = `none`;
    }

    const countryField = document.getElementsByName("shipping_country")[0];
    const countryCode = 'CO';

    if (countryField) {
        const fieldContainer = countryField.parentNode;
        if (fieldContainer) {
            fieldContainer.style.display = 'none';
        }

        if (countryField.tagName === "INPUT") {
            countryField.value = countryCode;
        } else if (countryField.tagName === "SELECT") {
            const newOption = new Option(countryCode, countryCode);
            countryField.add(newOption, 1);
            countryField.selectedIndex = 1;

            if (fieldContainer && fieldContainer.parentNode) {
                fieldContainer.parentNode.style.display = 'none';
            }
        }
    }
}