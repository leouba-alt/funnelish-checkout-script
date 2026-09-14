// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DINÁMICA
// Se lee desde los atributos data-* del propio <script> que carga
// este archivo, para poder reusar el mismo script en cualquier
// landing page o cuenta de Funnelish sin tener que editarlo.
//
// Ejemplo de uso en Funnelish:
// <script
//   src="https://TU-PROYECTO.vercel.app/MercadomaxCustomCode.js"
//   data-store-name="Mercadomax"
//   data-webhook="https://tu-n8n.com/webhook/produccion"
//   data-webhook-preliminar="https://tu-n8n.com/webhook/preliminar"
//   defer>
// </script>
// ─────────────────────────────────────────────────────────────

// IMPORTANTE: esto debe capturarse aquí arriba, de forma síncrona,
// porque document.currentScript deja de funcionar dentro de callbacks
// asíncronos (setTimeout, addEventListener, etc).
const scriptTagActual = document.currentScript;
const configScript = scriptTagActual ? scriptTagActual.dataset : {};

if (!scriptTagActual) {
    console.error('No se pudo detectar el <script> actual (document.currentScript). Verifica que el archivo se esté cargando con <script src="..."> y no copiado/pegado inline.')
}

const HOST_WEBHOOK = configScript.webhook || ""
const HOST_PREELIMINAR_WEBHOOK = configScript.webhookPreliminar || ""
const STORE_NAME = configScript.storeName || "Tienda"

if (!HOST_PREELIMINAR_WEBHOOK) {
    console.error('Falta el atributo data-webhook-preliminar en el <script> de esta página. El envío de leads preliminares no va a funcionar.')
}

var countryStateInfo = { "Colombia": { "Seleccione un Departamento": {}, "Amazonas": { "Leticia": [], "Puerto Nario": [] }, "Antioquia": { "Abejorral": [], "Abriaquí": [], "Alejandría": [], "Amagá": [], "Amalfi": [], "Andes": [], "Angelópolis": [], "Angostura": [], "Anorí": [], "Anzá": [], "Apartadó": [], "Arboletes": [], "Argelia": [], "Armenia": [], "Barbosa": [], "Bello": [], "Belmira": [], "Betania": [], "Betulia": [], "Briceño": [], "Buriticá": [], "Cáceres": [], "Caicedo": [], "Caldas": [], "Campamento": [], "Cañasgordas": [], "Caracolí": [], "Caramanta": [], "Carepa": [], "Carolina del Príncipe": [], "Caucasia": [], "Chigorodó": [], "Cisneros": [], "Ciudad Bolívar": [], "Cocorná": [], "Concepción": [], "Concordia": [], "Copacabana": [], "Dabeiba": [], "Donmatías": [], "Ebéjico": [], "El Bagre": [], "El Carmen de Viboral": [], "El Peñol": [], "El Retiro": [], "El Santuario": [], "Entrerríos": [], "Envigado": [], "Fredonia": [], "Frontino": [], "Giraldo": [], "Girardota": [], "Gómez Plata": [], "Granada": [], "Guadalupe": [], "Guarne": [], "Guatapé": [], "Heliconia": [], "Hispania": [], "Itagüí": [], "Ituango": [], "Jardín": [], "Jericó": [], "La Ceja": [], "La Estrella": [], "La Pintada": [], "La Unión": [], "Liborina": [], "Maceo": [], "Marinilla": [], "Medellín": [], "Montebello": [], "Murindó": [], "Mutatá": [], "Nariño": [], "Nechí": [], "Necoclí": [], "Olaya": [], "Peque": [], "Pueblorrico": [], "Puerto Berrío": [], "Puerto Nare": [], "Puerto Triunfo": [], "Remedios": [], "Rionegro": [], "Sabanalarga": [], "Sabaneta": [], "Salgar": [], "San Andrés de Cuerquia": [], "San Carlos": [], "San Francisco": [], "San Jerónimo": [], "San José de la Montaña": [], "San Juan de Urabá": [], "San Luis": [], "San Pedro de Urabá": [], "San Pedro de los Milagros": [], "San Rafael": [], "San Roque": [], "San Vicente": [], "Santa Bárbara": [], "Santa Fe de Antioquia": [], "Santa Rosa de Osos": [], "Santo Domingo": [], "Segovia": [], "Sonsón": [], "Sopetrán": [], "Támesis": [], "Tarazá": [], "Tarso": [], "Titiribí": [], "Toledo": [], "Turbo": [], "Uramita": [], "Urrao": [], "Valdivia": [], "Valparaíso": [], "Vegachí": [], "Venecia": [], "Vigía del Fuerte": [], "Yalí": [], "Yarumal": [], "Yolombó": [], "Yondó": [], "Zaragoza": [] }, "Arauca": { "Arauca": [], "Arauquita": [], "Cravo Norte": [], "Fortul": [], "Puerto Rondón": [], "Saravena": [], "Tame": [] }, "Atlántico": { "Baranoa": [], "Barranquilla": [], "Campo de la Cruz": [], "Candelaria": [], "Galapa": [], "Juan de Acosta": [], "Luruaco": [], "Malambo": [], "Manatí": [], "Palmar de Varela": [], "Piojó": [], "Polonuevo": [], "Ponedera": [], "Puerto Colombia": [], "Repelón": [], "Sabanagrande": [], "Sabanalarga": [], "Santa Lucía": [], "Santo Tomás": [], "Soledad": [], "Suán": [], "Tubará": [], "Usiacurí": [] }, "Bolívar": { "Achí": [], "Altos del Rosario": [], "Arenal": [], "Arjona": [], "Arroyohondo": [], "Barranco de Loba": [], "Brazuelo de Papayal": [], "Calamar": [], "Cantagallo": [], "Cartagena": [], "Cicuco": [], "Clemencia": [], "Córdoba": [], "El Carmen de Bolívar": [], "El Guamo": [], "El Peñón": [], "Hatillo de Loba": [], "Magangué": [], "Mahates": [], "Margarita": [], "María la Baja": [], "Mompós": [], "Montecristo": [], "Morales": [], "Norosí": [], "Pinillos": [], "Regidor": [], "Río Viejo": [], "San Cristóbal": [], "San Estanislao": [], "San Fernando": [], "San Jacinto del Cauca": [], "San Jacinto": [], "San Juan Nepomuceno": [], "San Martín de Loba": [], "San Pablo": [], "Santa Catalina": [], "Santa Rosa": [], "Santa Rosa del Sur": [], "Simití": [], "Soplaviento": [], "Talaigua Nuevo": [], "Tiquisio": [], "Turbaco": [], "Turbaná": [], "Villanueva": [], "Zambrano": [] }, "Boyacá": { "Almeida": [], "Aquitania": [], "Arcabuco": [], "Belén": [], "Berbeo": [], "Betéitiva": [], "Boavita": [], "Boyacá": [], "Briceño": [], "Buenavista": [], "Busbanzá": [], "Caldas": [], "Campohermoso": [], "Cerinza": [], "Chinavita": [], "Chiquinquirá": [], "Chíquiza": [], "Chiscas": [], "Chita": [], "Chitaraque": [], "Chivatá": [], "Chivor": [], "Ciénega": [], "Cómbita": [], "Coper": [], "Corrales": [], "Covarachía": [], "Cubará": [], "Cucaita": [], "Cuítiva": [], "Duitama": [], "El Cocuy": [], "El Espino": [], "Firavitoba": [], "Floresta": [], "Gachantivá": [], "Gámeza": [], "Garagoa": [], "Guacamayas": [], "Guateque": [], "Guayatá": [], "Güicán": [], "Iza": [], "Jenesano": [], "Jericó": [], "La Capilla": [], "La Uvita": [], "La Victoria": [], "Labranzagrande": [], "Macanal": [], "Maripí": [], "Miraflores": [], "Mongua": [], "Monguí": [], "Moniquirá": [], "Motavita": [], "Muzo": [], "Nobsa": [], "Nuevo Colón": [], "Oicatá": [], "Otanche": [], "Pachavita": [], "Páez": [], "Paipa": [], "Pajarito": [], "Panqueba": [], "Pauna": [], "Paya": [], "Paz del Río": [], "Pesca": [], "Pisba": [], "Puerto Boyacá": [], "Quípama": [], "Ramiriquí": [], "Ráquira": [], "Rondón": [], "Saboyá": [], "Sáchica": [], "Samacá": [], "San Eduardo": [], "San José de Pare": [], "San Luis de Gaceno": [], "San Mateo": [], "San Miguel de Sema": [], "San Pablo de Borbur": [], "Santa María": [], "Santa Rosa de Viterbo": [], "Santa Sofía": [], "Santana": [], "Sativanorte": [], "Sativasur": [], "Siachoque": [], "Soatá": [], "Socha": [], "Socotá": [], "Sogamoso": [], "Somondoco": [], "Sora": [], "Soracá": [], "Sotaquirá": [], "Susacón": [], "Sutamarchán": [], "Sutatenza": [], "Tasco": [], "Tenza": [], "Tibaná": [], "Tibasosa": [], "Tinjacá": [], "Tipacoque": [], "Toca": [], "Togüí": [], "Tópaga": [], "Tota": [], "Tunja": [], "Tununguá": [], "Turmequé": [], "Tuta": [], "Tutazá": [], "Úmbita": [], "Ventaquemada": [], "Villa de Leyva": [], "Viracachá": [], "Zetaquira": [] }, "Caldas": { "Aguadas": [], "Anserma": [], "Aranzazu": [], "Belalcázar": [], "Chinchiná": [], "Filadelfia": [], "La Dorada": [], "La Merced": [], "Manizales": [], "Manzanares": [], "Marmato": [], "Marquetalia": [], "Marulanda": [], "Neira": [], "Norcasia": [], "Pácora": [], "Palestina": [], "Pensilvania": [], "Riosucio": [], "Risaralda": [], "Salamina": [], "Samaná": [], "San José": [], "Supía": [], "Victoria": [], "Villamaría": [], "Viterbo": [] }, "Caquetá": { "Albania": [], "Belén de los Andaquíes": [], "Cartagena del Chairá": [], "Curillo": [], "El Doncello": [], "El Paujil": [], "Florencia": [], "La Montañita": [], "Milán": [], "Morelia": [], "Puerto Rico": [], "San José del Fragua": [], "San Vicente del Caguán": [], "Solano": [], "Solita": [], "Valparaíso": [] }, "Casanare": { "Aguazul": [], "Chámeza": [], "Hato Corozal": [], "La Salina": [], "Maní": [], "Monterrey": [], "Nunchía": [], "Orocué": [], "Paz de Ariporo": [], "Pore": [], "Recetor": [], "Sabanalarga": [], "Sácama": [], "San Luis de Palenque": [], "Támara": [], "Tauramena": [], "Trinidad": [], "Villanueva": [], "Yopal": [] }, "Cauca": { "Almaguer": [], "Argelia": [], "Balboa": [], "Bolívar": [], "Buenos Aires": [], "Cajibío": [], "Caldono": [], "Caloto": [], "Corinto": [], "El Tambo": [], "Florencia": [], "Guachené": [], "Guapí": [], "Inzá": [], "Jambaló": [], "La Sierra": [], "La Vega": [], "López de Micay": [], "Mercaderes": [], "Miranda": [], "Morales": [], "Padilla": [], "Páez": [], "Patía": [], "Piamonte": [], "Piendamó": [], "Popayán": [], "Puerto Tejada": [], "Puracé": [], "Rosas": [], "San Sebastián": [], "Santa Rosa": [], "Santander de Quilichao": [], "Silvia": [], "Sotará": [], "Suárez": [], "Sucre": [], "Timbío": [], "Timbiquí": [], "Toribío": [], "Totoró": [], "Villa Rica": [] }, "Cesar": { "Aguachica": [], "Agustín Codazzi": [], "Astrea": [], "Becerril": [], "Bosconia": [], "Chimichagua": [], "Chiriguaná": [], "Curumaní": [], "El Copey": [], "El Paso": [], "Gamarra": [], "González": [], "La Gloria (Cesar)": [], "La Jagua de Ibirico": [], "La Paz": [], "Manaure Balcón del Cesar": [], "Pailitas": [], "Pelaya": [], "Pueblo Bello": [], "Río de Oro": [], "San Alberto": [], "San Diego": [], "San Martín": [], "Tamalameque": [], "Valledupar": [] }, "Chocó": { "Acandí": [], "Alto Baudó": [], "Bagadó": [], "Bahía Solano": [], "Bajo Baudó": [], "Bojayá": [], "Cantón de San Pablo": [], "Cértegui": [], "Condoto": [], "El Atrato": [], "El Carmen de Atrato": [], "El Carmen del Darién": [], "Istmina": [], "Juradó": [], "Litoral de San Juan": [], "Lloró": [], "Medio Atrato": [], "Medio Baudó": [], "Medio San Juan": [], "Nóvita": [], "Nuquí": [], "Quibdó": [], "Río Iró": [], "Río Quito": [], "Riosucio": [], "San José del Palmar": [], "Sipí": [], "Tadó": [], "Unión Panamericana": [], "Unguía": [] }, "Cundinamarca": { "Agua de Dios": [], "Albán": [], "Anapoima": [], "Anolaima": [], "Apulo": [], "Arbeláez": [], "Beltrán": [], "Bituima": [], "Bogotá": [], "Bojacá": [], "Cabrera": [], "Cachipay": [], "Cajicá": [], "Caparrapí": [], "Cáqueza": [], "Carmen de Carupa": [], "Chaguaní": [], "Chía": [], "Chipaque": [], "Choachí": [], "Chocontá": [], "Cogua": [], "Cota": [], "Cucunubá": [], "El Colegio": [], "El Peñón": [], "El Rosal": [], "Facatativá": [], "Fómeque": [], "Fosca": [], "Funza": [], "Fúquene": [], "Fusagasugá": [], "Gachalá": [], "Gachancipá": [], "Gachetá": [], "Gama": [], "Girardot": [], "Granada": [], "Guachetá": [], "Guaduas": [], "Guasca": [], "Guataquí": [], "Guatavita": [], "Guayabal de Síquima": [], "Guayabetal": [], "Gutiérrez": [], "Jerusalén": [], "Junín": [], "La Calera": [], "La Mesa": [], "La Palma": [], "La Peña": [], "La Vega": [], "Lenguazaque": [], "Machetá": [], "Madrid": [], "Manta": [], "Medina": [], "Mosquera": [], "Nariño": [], "Nemocón": [], "Nilo": [], "Nimaima": [], "Nocaima": [], "Pacho": [], "Paime": [], "Pandi": [], "Paratebueno": [], "Pasca": [], "Puerto Salgar": [], "Pulí": [], "Quebradanegra": [], "Quetame": [], "Quipile": [], "Ricaurte": [], "San Antonio del Tequendama": [], "San Bernardo": [], "San Cayetano": [], "San Francisco": [], "San Juan de Rioseco": [], "Sasaima": [], "Sesquilé": [], "Sibaté": [], "Silvania": [], "Simijaca": [], "Soacha": [], "Sopó": [], "Subachoque": [], "Suesca": [], "Supatá": [], "Susa": [], "Sutatausa": [], "Tabio": [], "Tausa": [], "Tena": [], "Tenjo": [], "Tibacuy": [], "Tibirita": [], "Tocaima": [], "Tocancipá": [], "Topaipí": [], "Ubalá": [], "Ubaque": [], "Ubaté": [], "Une": [], "Útica": [], "Venecia": [], "Vergara": [], "Vianí": [], "Villagómez": [], "Villapinzón": [], "Villeta": [], "Viotá": [], "Yacopí": [], "Zipacón": [], "Zipaquirá": [] }, "Córdoba": { "Ayapel": [], "Buenavista": [], "Canalete": [], "Cereté": [], "Chimá": [], "Chinú": [], "Ciénaga de Oro": [], "Cotorra": [], "La Apartada": [], "Lorica": [], "Los Córdobas": [], "Momil": [], "Montelíbano": [], "Montería": [], "Moñitos": [], "Planeta Rica": [], "Pueblo Nuevo": [], "Puerto Escondido": [], "Puerto Libertador": [], "Purísima": [], "Sahagún": [], "San Andrés de Sotavento": [], "San Antero": [], "San Bernardo del Viento": [], "San Carlos": [], "San José de Uré": [], "San Pelayo": [], "Tierralta": [], "Tuchín": [], "Valencia": [] }, "Guainía": { "Inírida": [] }, "Guaviare": { "Calamar": [], "El Retorno": [], "Miraflores": [], "San José del Guaviare": [] }, "Huila": { "Acevedo": [], "Agrado": [], "Aipe": [], "Algeciras": [], "Altamira": [], "Baraya": [], "Campoalegre": [], "Colombia": [], "El Pital": [], "Elías": [], "Garzón": [], "Gigante": [], "Guadalupe": [], "Hobo": [], "Íquira": [], "Isnos": [], "La Argentina": [], "La Plata": [], "Nátaga": [], "Neiva": [], "Oporapa": [], "Paicol": [], "Palermo": [], "Palestina": [], "Pitalito": [], "Rivera": [], "Saladoblanco": [], "San Agustín": [], "Santa María": [], "Suaza": [], "Tarqui": [], "Tello": [], "Teruel": [], "Tesalia": [], "Timaná": [], "Villavieja": [], "Yaguará": [] }, "La Guajira": { "Albania": [], "Barrancas": [], "Dibulla": [], "Distracción": [], "El Molino": [], "Fonseca": [], "Hatonuevo": [], "La Jagua del Pilar": [], "Maicao": [], "Manaure": [], "Riohacha": [], "San Juan del Cesar": [], "Uribia": [], "Urumita": [], "Villanueva": [] }, "Magdalena": { "Algarrobo": [], "Aracataca": [], "Ariguaní": [], "Cerro de San Antonio": [], "Chibolo": [], "Ciénaga": [], "Concordia": [], "El Banco": [], "El Piñón": [], "El Retén": [], "Fundación": [], "Guamal": [], "Nueva Granada": [], "Pedraza": [], "Pijiño del Carmen": [], "Pivijay": [], "Plato": [], "Pueblo Viejo": [], "Remolino": [], "Sabanas de San Ángel": [], "Salamina": [], "San Sebastián de Buenavista": [], "San Zenón": [], "Santa Ana": [], "Santa Bárbara de Pinto": [], "Santa Marta": [], "Sitionuevo": [], "Tenerife": [], "Zapayán": [], "Zona Bananera": [] }, "Meta": { "Acacías": [], "Barranca de Upía": [], "Cabuyaro": [], "Castilla la Nueva": [], "Cubarral": [], "Cumaral": [], "El Calvario": [], "El Castillo": [], "El Dorado": [], "Fuente de Oro": [], "Granada": [], "Guamal": [], "La Macarena": [], "La Uribe": [], "Lejanías": [], "Mapiripán": [], "Mesetas": [], "Puerto Concordia": [], "Puerto Gaitán": [], "Puerto Lleras": [], "Puerto López": [], "Puerto Rico": [], "Restrepo": [], "San Carlos de Guaroa": [], "San Juan de Arama": [], "San Juanito": [], "San Martín": [], "Villavicencio": [], "Vista Hermosa": [] }, "Nariño": { "Aldana": [], "Ancuyá": [], "Arboleda": [], "Barbacoas": [], "Belén": [], "Buesaco": [], "Chachagüí": [], "Colón": [], "Consacá": [], "Contadero": [], "Córdoba": [], "Cuaspud": [], "Cumbal": [], "Cumbitara": [], "El Charco": [], "El Peñol": [], "El Rosario": [], "El Tablón": [], "El Tambo": [], "Francisco Pizarro": [], "Funes": [], "Guachucal": [], "Guaitarilla": [], "Gualmatán": [], "Iles": [], "Imués": [], "Ipiales": [], "La Cruz": [], "La Florida": [], "La Llanada": [], "La Tola": [], "La Unión": [], "Leiva": [], "Linares": [], "Los Andes": [], "Magüí Payán": [], "Mallama": [], "Mosquera": [], "Nariño": [], "Olaya Herrera": [], "Ospina": [], "Pasto": [], "Policarpa": [], "Potosí": [], "Providencia": [], "Puerres": [], "Pupiales": [], "Ricaurte": [], "Roberto Payán": [], "Samaniego": [], "San Bernardo": [], "San José de Albán": [], "San Lorenzo": [], "San Pablo": [], "San Pedro de Cartago": [], "Sandoná": [], "Santa Bárbara": [], "Santacruz": [], "Sapuyes": [], "Taminango": [], "Tangua": [], "Tumaco": [], "Túquerres": [], "Yacuanquer": [] }, "Norte de Santander": { "Ábrego": [], "Arboledas": [], "Bochalema": [], "Bucarasica": [], "Cáchira": [], "Cácota": [], "Chinácota": [], "Chitagá": [], "Convención": [], "Cúcuta": [], "Cucutilla": [], "Duranía": [], "El Carmen": [], "El Tarra": [], "El Zulia": [], "Gramalote": [], "Hacarí": [], "Herrán": [], "La Esperanza": [], "La Playa de Belén": [], "Labateca": [], "Los Patios": [], "Lourdes": [], "Mutiscua": [], "Ocaña": [], "Pamplona": [], "Pamplonita": [], "Puerto Santander": [], "Ragonvalia": [], "Salazar de Las Palmas": [], "San Calixto": [], "San Cayetano": [], "Santiago": [], "Santo Domingo de Silos": [], "Sardinata": [], "Teorama": [], "Tibú": [], "Toledo": [], "Villa Caro": [], "Villa del Rosario": [] }, "Putumayo": { "Colón": [], "Mocoa": [], "Orito": [], "Puerto Asís": [], "Puerto Caicedo": [], "Puerto Guzmán": [], "Puerto Leguízamo": [], "San Francisco": [], "San Miguel": [], "Santiago": [], "Sibundoy": [], "Valle del Guamuez": [], "Villagarzón": [] }, "Quindío": { "Armenia": [], "Buenavista": [], "Calarcá": [], "Circasia": [], "Córdoba": [], "Filandia": [], "Génova": [], "La Tebaida": [], "Montenegro": [], "Pijao": [], "Quimbaya": [], "Salento": [] }, "Risaralda": { "Apía": [], "Balboa": [], "Belén de Umbría": [], "Dosquebradas": [], "Guática": [], "La Celia": [], "La Virginia": [], "Marsella": [], "Mistrató": [], "Pereira": [], "Pueblo Rico": [], "Quinchía": [], "Santa Rosa de Cabal": [], "Santuario": [] }, "San Andrés y Providencia": { "Providencia y Santa Catalina Islas": [], "San Andrés": [] }, "Santander": { "Aguada": [], "Albania": [], "Aratoca": [], "Barbosa": [], "Barichara": [], "Barrancabermeja": [], "Betulia": [], "Bolívar": [], "Bucaramanga": [], "Cabrera": [], "California": [], "Capitanejo": [], "Carcasí": [], "Cepitá": [], "Cerrito": [], "Charalá": [], "Charta": [], "Chima": [], "Chipatá": [], "Cimitarra": [], "Concepción": [], "Confines": [], "Contratación": [], "Coromoro": [], "Curití": [], "El Carmen de Chucurí": [], "El Guacamayo": [], "El Peñón": [], "El Playón": [], "El Socorro": [], "Encino": [], "Enciso": [], "Florián": [], "Floridablanca": [], "Galán": [], "Gámbita": [], "Girón": [], "Guaca": [], "Guadalupe": [], "Guapotá": [], "Guavatá": [], "Güepsa": [], "Hato": [], "Jesús María": [], "Jordán": [], "La Belleza": [], "La Paz": [], "Landázuri": [], "Lebrija": [], "Los Santos": [], "Macaravita": [], "Málaga": [], "Matanza": [], "Mogotes": [], "Molagavita": [], "Ocamonte": [], "Oiba": [], "Onzaga": [], "Palmar": [], "Palmas del Socorro": [], "Páramo": [], "Piedecuesta": [], "Pinchote": [], "Puente Nacional": [], "Puerto Parra": [], "Puerto Wilches": [], "Rionegro": [], "Sabana de Torres": [], "San Andrés": [], "San Benito": [], "San Gil": [], "San Joaquín": [], "San José de Miranda": [], "San Miguel": [], "San Vicente de Chucurí": [], "Santa Bárbara": [], "Santa Helena del Opón": [], "Simacota": [], "Suaita": [], "Sucre": [], "Suratá": [], "Tona": [], "Valle de San José": [], "Vélez": [], "Vetas": [], "Villanueva": [], "Zapatoca": [] }, "Sucre": { "Buenavista": [], "Caimito": [], "Chalán": [], "Colosó": [], "Corozal": [], "Coveñas": [], "El Roble": [], "Galeras": [], "Guaranda": [], "La Unión": [], "Los Palmitos": [], "Majagual": [], "Morroa": [], "Ovejas": [], "Sampués": [], "San Antonio de Palmito": [], "San Benito Abad": [], "San Juan de Betulia": [], "San Marcos": [], "San Onofre": [], "San Pedro": [], "Sincé": [], "Sincelejo": [], "Sucre": [], "Tolú": [], "Tolú Viejo": [] }, "Tolima": { "Alpujarra": [], "Alvarado": [], "Ambalema": [], "Anzoátegui": [], "Armero": [], "Ataco": [], "Cajamarca": [], "Carmen de Apicalá": [], "Casabianca": [], "Chaparral": [], "Coello": [], "Coyaima": [], "Cunday": [], "Dolores": [], "El Espinal": [], "Falán": [], "Flandes": [], "Fresno": [], "Guamo": [], "Herveo": [], "Honda": [], "Ibagué": [], "Icononzo": [], "Lérida": [], "Líbano": [], "Mariquita": [], "Melgar": [], "Murillo": [], "Natagaima": [], "Ortega": [], "Palocabildo": [], "Piedras": [], "Planadas": [], "Prado": [], "Purificación": [], "Rioblanco": [], "Roncesvalles": [], "Rovira": [], "Saldaña": [], "San Antonio": [], "San Luis": [], "Santa Isabel": [], "Suárez": [], "Valle de San Juan": [], "Venadillo": [], "Villahermosa": [], "Villarrica": [] }, "Valle del Cauca": { "Alcalá": [], "Andalucía": [], "Ansermanuevo": [], "Argelia": [], "Bolívar": [], "Buenaventura": [], "Buga": [], "Bugalagrande": [], "Caicedonia": [], "Cali": [], "Calima": [], "Candelaria": [], "Cartago": [], "Dagua": [], "El Águila": [], "El Cairo": [], "El Cerrito": [], "El Dovio": [], "Florida": [], "Ginebra": [], "Guacarí": [], "Jamundí": [], "La Cumbre": [], "La Unión": [], "La Victoria": [], "Obando": [], "Palmira": [], "Pradera": [], "Restrepo": [], "Riofrío": [], "Roldanillo": [], "San Pedro": [], "Sevilla": [], "Toro": [], "Trujillo": [], "Tuluá": [], "Ulloa": [], "Versalles": [], "Vijes": [], "Yotoco": [], "Yumbo": [], "Zarzal": [] }, "Vaupés": { "Carurú": [], "Mitú": [], "Taraira": [] }, "Vichada": { "Cumaribo": [], "La Primavera": [], "Puerto Carreño": [], "Santa Rosalía": [] } } }


window.addEventListener('load', personalizarSelects);

function personalizarSelects() {

    //miramos si existe el contryStateInfo 
    if (typeof countryStateInfo === 'undefined') {
        console.error('countryStateInfo no está definido, debes usar el script listStatesCitySelect[Pais].js ')
        //deberíamos de mandar un error al servidor para que lo registre
        return
    }
    // seleccionamos el primer país del objeto
    const firstCountry = Object.keys(countryStateInfo)[0];
    //seleccionamos el primer estado del objeto


    const listCountry = countryStateInfo[firstCountry];


    // Obtenemos los elementos HTML por su nombre
    const countrySel = document.getElementsByName("shipping_country")[0];
    const stateSel = document.getElementsByName("shipping_state")[0];
    const citySel = document.getElementsByName("shipping_city")[0];


    //establecer el valor de countrySel ( en campo select ) como el primer país
    // establecerCountry(firstCountry, countrySel);

    // Limpiamos las opciones existentes en los selects de estado y ciudad
    stateSel.innerHTML = '';
    citySel.innerHTML = '';

    // Carga inicial de los estados para el país por defecto
    Object.keys(listCountry).forEach(state => {
        // La opción placeholder (ej. "Seleccione un Departamento") debe tener valor vacío
        // para que el campo "required" del navegador SÍ bloquee el envío si no se cambia.
        const esPlaceholder = state.toLowerCase().startsWith('seleccione');
        const option = new Option(state, esPlaceholder ? '' : state);
        if (esPlaceholder) {
            option.disabled = true; // evita que el usuario la vuelva a seleccionar manualmente
            option.selected = true; // asegura que sea la que se muestra por defecto (si no, el navegador salta a la siguiente opción habilitada)
        }
        stateSel.options.add(option);
    });

    // Función para manejar el cambio de estado y cargar las ciudades correspondientes
    stateSel.onchange = function () {
        // Limpia las opciones de ciudades anteriores
        citySel.innerHTML = '';
        // Si quedó en el placeholder (valor vacío), no hay ciudades que cargar
        if (!this.value || !listCountry[this.value]) {
            return;
        }
        // Obtiene y carga las ciudades para el estado seleccionado
        const cities = listCountry[this.value];
        // creamos un option vació para que no se muestre nada por defecto
        const optionDefault = new Option('Selecciona una opción', '');
        citySel.options.add(optionDefault);

        Object.keys(cities).forEach(city => {
            const option = new Option(city, city);
            citySel.options.add(option);
        });
    };

    // Función para manejar el cambio de ciudad
    citySel.onchange = function () {
        // console.log('Ciudad cambiada:', this.value);
    };
}

function establecerCountry(country, countrySel) {
    if (!countrySel) {
        console.error('No se ha especificado el elemento de país');
        return;
    }
    // Esconder el campo del país y establecer su valor
    countrySel.parentElement.parentElement.style.display = `none`

    // Configuración común para INPUT
    if (countrySel.tagName === "INPUT") {
        countrySel.value = country;
    }
    // Configuración específica para SELECT
    else if (countrySel.tagName === "SELECT") {
        var newOption = new Option(`${country}`, country); // Simplifica la creación de opciones
        countrySel.add(newOption, 1); // Agrega la nueva opción
        countrySel.selectedIndex = 1; // Selecciona la opción agregada
    }
}

window.addEventListener('load', ocularEmail);

//Función que oculta el campo de correo y le pone un valor aleatorio
function ocularEmail() {
    const inputEmail = document.getElementsByName("email")[0]
    //le ponemos un valor por defecto al campo de correo
    if (inputEmail) {
        inputEmail.value = createMailAleatory()
        //ocultamos el campo de correo y su label
        inputEmail.style.display = `none`
        inputEmail.previousElementSibling.style.display = `none`
        //ocultamos el contenedor padre del campo de correo
        inputEmail.parentElement.style.display = `none`
    }
}

function createMailAleatory() {
    let mail = ``
    let caracteres = `abcdefghijklmnopqrstuvwxyz0123456789`
    for (let i = 0; i < 10; i++) {
        mail += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return mail + `@gmail.com`
}

//creamos un div para mostrar el mensaje de error del teléfono si no es válido y lo añadimos al lado del input
//otra manera en la que podemos hacer todo  esto seria creando un input falso de teléfono , para poner el verdadero input de teléfono oculto y vació , para que hasta que nuestro input de teléfono sea valido , todo esto para funnelish haga la validación de que falta uno campo, lo malo es que puede ser complicado hacer todo esto en funnelish xd



function phoneIsValid(input) {
    // 1. Forzamos que la cadena empiece con +57
    let raw = input.value.toString();

    // 2. Extraemos solo los dígitos que haya ingresado el usuario
    let digits = raw.replace(/[^0-9]/g, '');

    // 3. Si el usuario incluyó el 57 (o +57), lo descartamos: siempre añadiremos nosotros +57
    if (digits.startsWith('57')) {
        digits = digits.substring(2);
    }

    // 4. Si el número no arranca con '3', lo consideramos inválido (vacío)
    if (!digits.startsWith('3')) {
        digits = '';
    }

    // 5. Limitamos a 10 dígitos
    if (digits.length > 10) {
        digits = digits.slice(0, 10);
    }

    // 6. Reconstruimos el valor del campo: +57 seguido de los 10 dígitos (o menos si aún no completa)
    input.value = '+57' + digits;

    // 7. Validamos: debemos tener exactamente 10 dígitos tras el +57
    return digits.length === 10;
}

//Para No permitir enviar el formulario sin un Telefono valido
document.addEventListener('DOMContentLoaded', function () {
    //var submitButton = document.getElementById('submitButton');
    submitButton = document.querySelector('a[href="#submit-step"]')
    // Agregar el evento en la fase de captura
    submitButton.addEventListener('click', function (event) {
        var inputTelefono = document.getElementsByName('phone')[0];
        var telefono = inputTelefono.value;
        var patronTelefonoColombia = /^\+57[3]\d{9}$/;

        if (!patronTelefonoColombia.test(telefono)) {
            console.log("No se permite enviar el formulario pues el telefono " + telefono + " es invalido")
            //alert('Por favor ingrese un número de teléfono válido en Colombia (10 dígitos y comienza con 3).');
            inputTelefono.className = 'invalid';
            event.stopImmediatePropagation(); // Detiene la propagación del evento
        }
    }, true); // True indica que el evento se maneja en la fase de captura
});



//crear un add event listener para cuando cargue la pagina
window.addEventListener('load', mainIntegramelo);

function mainIntegramelo() {
    //crear objeto base
    const dataForm = recoverData()
    // console.log(`Mandamos el lead al cargar la pagina`)
    // pushLead()

    // Añadir el event listener al elemento contenedor
    const body = document.body; // Cambia esto por el elemento contenedor específico si lo prefieres
    console.log(`activamos los addEvents`);
    body.addEventListener('input', (e) => {
        console.log(`[addEvents] input`)
        handleInputEvent(e)
    });
    body.addEventListener('change', (e) => {
        console.log(`[addEvents] change`)
        handleInputEvent(e)
    });

    // document.querySelectorAll('a[href="#submit-step"]').forEach(function (element) {
    //   element.addEventListener('click', function (event) {
    //     event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

    //     // Coloca aquí la función que quieres ejecutar
    //     console.log('El botón de pago fue presionado.');

    //     // Envía el lead al presionar el botón de pago
    //     pushSendLead();
    //   }, true); // Usar true para capturar el evento antes que en la fase de burbuja
    // });
}

let timerId;
let count = 0;
const time = 4000;//7000

function enviarConDebouncing() {
    console.log(`[enviarConDebouncing] count: ${count}`)
    // Cancela el temporizador anterior si existe
    clearTimeout(timerId);
    // Establece un nuevo temporizador
    timerId = setTimeout(async () => {
        count++
        // Envía el lead
        console.log(`enviamos el lead con debouncing, count: ${count}`)
        pushLead();
    }, time);
}

//recolectamos la data del lead y miramos si vale la pena enviarlo al servidor
async function pushLead() {
    try {
        const dataForm = recoverData()
        //miramos si vale la pena mandar el lead, puede que no estén los datos suficientes o que el no hallan cambio con respecto la vez pasada que mandamos
        if (dataForm.client.phone === '' ||
            dataForm.client.phone == '+57') {
            //dataForm.client.email === '' ||
            console.log(`no se puede enviar el lead, algunos campos son inválidos`)
            return false
        }

        await sendLead(dataForm)
        // enviamos bien el formulario
    } catch (error) {
        console.log(error)
        // algo paso
    }
}

//enviamos el lead al server
async function sendLead(Lead, preliminar = true) {
    try {
        let HOST = preliminar ? HOST_PREELIMINAR_WEBHOOK : HOST_WEBHOOK


        const UrlHost = HOST
        //hacemos fetch a la url y mandamos un post con la data del lead

        const response = await fetch(UrlHost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Lead)
        });
        const data = await response.json();
        //si no nos da un 200 o 201 es error
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Error sending lead: ${response.status} - ${response.statusText}`);
        }
        return true
        //limpiamos el formulario
    } catch (error) {
        console.log(`error al enviar el lead`, error)
        return false
    }
}


// Función que deseas ejecutar cuando se dispare el evento input
function handleInputEvent(event) {
    // Asegúrate de que el evento proviene de un elemento input
    // if (event.target.tagName.toLowerCase() === 'input' ||
    //   event.target.tagName.toLowerCase() === 'select') {
    //   // Aquí puedes añadir lo que desees hacer con el valor del input, etc.
    // }
    enviarConDebouncing()
}

//para mandar el lead cuando se presione el botón de pago
async function pushSendLead() {
    //miramos si es valido enviar el lead, si los campos están  llenos
    if (!this.funnelish.validateFields()) {
        console.log(`no se puede enviar el lead, algunos campos son inválidos`)
        return false
    }
    //si es valido enviamos el lead
    const dataForm = recoverData()
    console.log(`enviamos el lead con el botón de pago`)
    console.log(`dataForm`, JSON.stringify(dataForm))

    sendLead(dataForm, false)
    //dejamos una pausa de 500 ms para que se envié el lead
    await delay(500)
    console.log(`enviamos el lead con el botón de pago`)
}

//crear un función de delay con promesas
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function recoverData() {
    // Simplificación de la obtención de datos utilizando una función genérica
    const getValueQuery = (name) => document.querySelector(`[name="${name}"]`)?.value || '';

    // Simplificación de la estructura de datos utilizando funciones de utilidad
    const data = {
        storeName: STORE_NAME || 'Teste',
        LeadID: idMake,
        urlOrigin: `${location.hostname}${location.pathname}`,
        dateTime: new Date().toISOString(),
        leadType: '',
        ipOrigin: '',
        notes: getValueQuery('notes'),
        client: {
            name: '',
            lastName: '',
            fullName: getValueQuery('full_name'),
            email: getValueQuery('email'), // Asegúrate de que el selector sea correcto (email, no mail)
            phone: getValueQuery('phone'),
            // birthDate: '',
            // gender: ''
        },
        dataAddress: {
            address: getValueQuery('shipping_address'),
            city: getValueQuery('shipping_city'),
            state: getValueQuery('shipping_state'),
            country: getValueQuery('shipping_country'),
            zipCode: getValueQuery('zip_code'),
            notes: getValueQuery('notes'),
            coordinates: { latitude: null, longitude: null }
        },

    };
    data.products = getDataProducts()
    data.totalPrice = getDataPrice(data.products)

    // Extracción del nombre y apellido del nombre completo
    // const fullName = getValueQuery('full_name').split(' ');
    // if (fullName.length >= 2) {
    //   data.client.lastName = fullName.pop();
    //   data.client.name = fullName.join(' ');
    // } else {
    //   data.client.name = fullName.pop()
    //   data.client.lastName = ''
    // }

    return data;
}

// Convierte un texto de precio (ej. "$119.900" o "COL$ 119,900") a un número entero.
function parsePriceNumber(text) {
    const digits = (text || '').replace(/[^0-9]/g, '');
    return digits ? parseInt(digits, 10) : 0;
}

// Lee los productos leyendo directo del widget "Order Summary" que Funnelish renderiza en el HTML
function getDataProductsFromHTML() {
    // Nombres de los productos, tal como los muestra Funnelish en el resumen del pedido
    const nameElements = [...document.querySelectorAll('.os-name')];

    // Precios por producto: tomamos todos los .os-price EXCEPTO el que está dentro de .os-total
    // (ese es el total general, no el precio de un producto individual)
    const priceElements = [...document.querySelectorAll('.os-price')].filter(
        el => !el.closest('.os-total')
    );

    // Emparejamos nombre y precio por posición (deberían venir en el mismo orden en el HTML)
    return nameElements.map((nameEl, index) => {
        const priceEl = priceElements[index];
        return {
            name: nameEl.textContent.trim(),
            price: priceEl ? parsePriceNumber(priceEl.textContent) : null,
        };
    });
}

// Cuando el checkout usa un widget "Product List" (selector de variantes con radio buttons),
// SOLO nos interesa la opción que el cliente realmente marcó (clase .selected en el .pl-item),
// no todas las variantes disponibles.
function getSelectedProductFromProductList() {
    const selectedItem = document.querySelector('.pl-item.selected');
    if (!selectedItem) {
        return null;
    }

    const nameEl = selectedItem.querySelector('.pl-name');
    let name = '';
    if (nameEl) {
        // Clonamos el elemento para no tocar el DOM real, y le quitamos cualquier
        // etiqueta/badge (ej. "Más Vendido") que Funnelish suele marcar con clases
        // que contienen la palabra "tag" (como vimos en .top_tag).
        const clone = nameEl.cloneNode(true);
        clone.querySelectorAll('[class*="tag" i]').forEach(el => el.remove());
        name = clone.textContent.replace(/\s+/g, ' ').trim();
    }
    if (!name) {
        return null;
    }

    // Intentamos con la clase esperada .pl-price; si no existe con ese nombre exacto,
    // buscamos dentro del item cualquier texto con forma de precio como respaldo.
    const priceEl = selectedItem.querySelector('.pl-price');
    let price = null;
    if (priceEl) {
        price = parsePriceNumber(priceEl.textContent);
    } else {
        const match = selectedItem.textContent.match(/[\d][\d.,]{2,}/);
        price = match ? parsePriceNumber(match[0]) : null;
    }

    return { name, price };
}

function getDataProducts() {
    // Método 1 (el más preciso cuando aplica): si hay un selector de variantes (Product List),
    // tomamos SOLO la que el cliente marcó, no todas las opciones disponibles.
    const seleccionado = getSelectedProductFromProductList();
    if (seleccionado) {
        console.log('Producto detectado desde la variante seleccionada (.pl-item.selected):', seleccionado);
        return [seleccionado];
    }

    // Método 2: PRODUCTS es una variable global que Funnelish expone internamente
    // con los productos configurados en el paso (no la definimos nosotros, la inyecta Funnelish).
    // OJO: puede incluir variantes que el cliente NO seleccionó, por eso este método va después.
    if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS) && PRODUCTS.length > 0) {
        console.log('Productos detectados desde la variable global PRODUCTS de Funnelish:', PRODUCTS);
        return PRODUCTS.map(p => ({ name: p.name, price: p.price }));
    }

    // Método 3 (respaldo): leer directo del widget "Order Summary" en el HTML
    const productosDesdeHTML = getDataProductsFromHTML();
    if (productosDesdeHTML.length > 0) {
        console.log('Productos detectados desde el HTML (.os-name):', productosDesdeHTML);
        return productosDesdeHTML;
    }

    console.warn('No se pudo detectar ningún producto: ni .pl-item.selected, ni PRODUCTS, ni .os-name están disponibles en esta página todavía.');
    return [];
}


function getDataPrice(products) {
    const totalElement = document.querySelector('.os-total .os-price');

    if (totalElement) {
        const total = parsePriceNumber(totalElement.textContent);
        console.log(`Total leído del HTML: Col$ ${total}`);
        return total;
    }

    // Respaldo: si no encontramos el total en el HTML, lo calculamos sumando los productos
    const totalCalculado = (products || []).reduce((acc, p) => acc + (p.price || 0), 0);
    console.warn(`No se encontró el elemento .os-total .os-price en esta página. Se usa el total calculado sumando los productos: Col$ ${totalCalculado}`);
    return totalCalculado;
}

let idMake
getId(); // = makeId()  Simplificación de la declaración de idMake
let urlOrigin = `${window.location.hostname}${window.location.pathname}`;
let objLeadID = { LeadID: idMake, urlOrigin }

//debemos de guardarlo en el campo LeadID
//buscamos el campo por el name de LeadID
//OJO: este campo es opcional. Si la landing no lo tiene, seguimos sin romper el resto del script.
const leadIdField = document.querySelector(`[data-name="LeadID"]`)
if (leadIdField) {
    leadIdField.value = JSON.stringify(objLeadID)
    //ocultamos el campo LeadID y el padre
    if (leadIdField.parentElement) {
        leadIdField.parentElement.style.display = 'none'
    }
} else {
    console.warn('No se encontró un campo con data-name="LeadID" en este formulario. Se omite (esto es normal si esta landing no lo usa).')
}



addEventListener('load', () => {
    //hay un erro que hace que el input de "Direccion" se autocomplete con el valor del LeadID , hay que retirarlo
    const DireccionInput = document.querySelector(`[data-name="Direccion"]`)
    //con una exprecion regular retiramos todo lo que este dentro de llaves {} incluidas las llaves
    if (DireccionInput) {
        DireccionInput.value = DireccionInput.value.replace(/{.*}/, '')
    }
})


function setIdLocalStorage() {
    if (idMake) {

        return { id: idMake };
    }

    const currentUrl = `${window.location.hostname}${window.location.pathname}`;
    let elementosArray = JSON.parse(localStorage.getItem('LeadID')) || [];
    let existingElement = elementosArray.find(e => e.url === currentUrl && new Date() - new Date(e.date) < 20 * 60 * 1000);

    if (existingElement) {
        return existingElement;
    }

    const newElement = {
        url: currentUrl,
        id: makeId(10), // Ajuste para llamar a makeId con un valor específico de longitud
        date: new Date().toISOString()
    };

    elementosArray.push(newElement);
    localStorage.setItem('LeadID', JSON.stringify(elementosArray));

    idMake = newElement.id;


    return newElement;
}
function getId() {
    if (!idMake) {
        idMake = setIdLocalStorage().id;
    }

    return idMake
}

function makeId(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

//concatena direccion
window.addEventListener('load', initConcatenarDireccion);

function initConcatenarDireccion() {

    var camposCustom = document.getElementsByName("custom")
    var direccionField = camposCustom[0]  // Dirección
    var barrioField = camposCustom[1]     // Barrio (incluye "y/o punto de referencia")
    var direccion = document.getElementsByName('shipping_address')[0]

    direccion.setAttribute('readonly', true);// Establecemos la direccion como un campo se solo lectura.
    direccionField.addEventListener('change', actualizarDireccion)
    barrioField.addEventListener('change', actualizarDireccion)
    //cada ves que haya un cambio en alguno de los campos , actualizamos la direccion
    direccionField.addEventListener('input', actualizarDireccion)
    barrioField.addEventListener('input', actualizarDireccion)

    function actualizarDireccion() {
        direccion.value = `${direccionField?.value || ''} , Barrio: ${barrioField?.value || ''}`
    }
}
window.addEventListener('load', ocultarInputs);

function ocultarInputs() {
    const leadIdInput = document.querySelector('input[data-name="LeadID"]')
    if (leadIdInput) {
        leadIdInput.style.display = `none`
    }

    // Obtener el elemento del país
    const countryField = document.getElementsByName("shipping_country")[0];

    // Predefinir el código del país a "CO"
    // seleccionamos el primer país del objeto

    const firstKey = 'CO';
    const countryCode = firstKey;

    if (countryField) {
        // Ocultar el campo del país y su contenedor
        const fieldContainer = countryField.parentNode;
        fieldContainer.style.display = 'none';

        // Comportamiento específico basado en el tipo de campo
        if (countryField.tagName === "INPUT") {
            // Establecer el valor para un campo de entrada
            countryField.value = countryCode;
        } else if (countryField.tagName === "SELECT") {
            // Crear y seleccionar una nueva opción para un campo select
            const newOption = new Option(countryCode, countryCode);
            countryField.add(newOption, 1); // Añadir la nueva opción
            countryField.selectedIndex = 1; // Seleccionar la nueva opción

            // También ocultar el contenedor del padre del campo
            const grandparentContainer = fieldContainer.parentNode;
            grandparentContainer.style.display = 'none';
        }
    }

}

