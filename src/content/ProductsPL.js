// ProductView, Modal, DTP
export const generalPL = [
	"Zainteresowany? Napisz do Nas.",
	"Zalety produktu:",
	"Polecane materiały:",
	"Instrukcje DTP:",
	"Przykładowe wymiary [cm]:",
	"Specyfikacje:",
	"Temat",
	"Imię",
	"E-mail",
	"Wiadomość",
	"Wyślij",
	"Pobierz"
];

// -----------------------------------
// Wykończenia PL
export const confectionsPL = [
	//[0] Zgrzew i Oczkowanie
	{
		group: "Banery",
		name: "Zgrzew i oczkowanie",
		description: "Najpopularniejsze wykończenie, zapewniające wytrzymałość i szybki montaż.",
		fullDescription:
			"Dwie warstwy materiału są ze sobą zgrzewane, zwiększając wytrzymałość krawędzi, na których zakuwane są oczka. Tego typu wykończenie, umożliwia zamontowanie banera niemal w każdym miejscu, bez obaw o jego rozerwanie.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products", "Banery"],
			crumbs3: ["/products/banners/eyes", "Zgrzew i oczkowanie"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#mesh",
				materialName: "Siatka Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=6"]],
		advantages: ["łatwy montaż", "uniwersalna reklama", "stalowe oczka ocynkowane"]
	},
	//[1] Wycięcie do formatu
	{
		group: "Banery",
		name: "Wycięcie do formatu",
		description: "Najprostsze wykończenie. Wycięcie materiału do wymiaru.",
		fullDescription:
			"Polega na wycięciu wydruku do wymaganego przez klienta wymiaru - stosowane jest dla wydruków montowanych w specjalnych systemach lub mocowanych bezpośrednio do powierzchni. W przypadku materiałów vinylowych istnieje możliwość zaoczkowania krawędzi, jednak w takim przypadku, zalecamy zamówienie dodatkowo zgrzewu, który wzmocni krawędzie.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products", "Banery"],
			crumbs3: ["/products/banners/format", "Wycięcie do formatu"]
		},
		recommended: [
			{
				url: "/materials",
				materialName: "Vinyle"
			},
			{
				url: "/materials/foils",
				materialName: "Folie"
			},
			{
				url: "/materials/flat",
				materialName: "Materiały płaskie"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=5"]],
		advantages: ["precyzyjne wycięcie", "gładkie krawędzie"]
	},
	//[2] Keder
	{
		group: "Banery",
		name: "Keder",
		description: "Wykończenie do specjalnego systemu gwarantującego stabilność i atrakcyjny wygląd.",
		fullDescription:
			"Keder, zwany również taśmą namiotową, jest silikonowym sznurkiem (o średnicy 7mm) oplecionym taśmą z tkaniny poliestrowej o bardzo wysokiej odporności. Po doszyciu kederu z taśmą, wydruk można zamontować w specjalnych, aluminiowych konstrukcjach, które gwarantują stabilność i atrakcyjny wygląd reklamy.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products", "Banery"],
			crumbs3: ["/products/banners/keder", "Keder"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#mesh",
				materialName: "Siatka Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaga"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=7"]],
		advantages: ["trwałe wykończenie", "wysoka stabilność"]
	},
	//[3] Rękaw
	{
		group: "Banery",
		name: "Rękaw",
		description: "Gdy potrzeba zawiesić reklamę w widocznym miejscu.",
		fullDescription:
			"Jeśli do powieszenia reklamy chcemy wykorzystać rury lub belki, to najlepiej wykonać tunel. Np. w dolnym rękawie można umieścić element obciążający wydruk, który zapobiegnie falowaniu materiału i pokaże reklamę w całej okazałości. Przy przygotowywaniu pliku zalecamy zwrócenie szczególnej uwagi na miejsce przeszycia - pozwoli to uniknąć kolizji szycia z napisami, bądź innymi ważnymi elementami grafiki.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products", "Banery"],
			crumbs3: ["/products/banners/sleeve", "Rękawy"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#mesh",
				materialName: "Siatka Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaga"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=9"]],
		advantages: ["możliwość ekspozycji 'na wysokości'", "łatwy montaż"]
	},
	//[4] Taśma Silikonowa
	{
		group: "Banery",
		name: "Taśma Silikonowa",
		description: "Taśma pasująca do specjalnej ramy. Możliwość podświetlenia dla lepszego efektu.",
		fullDescription:
			"Przeszycie taśmą silikonową najczęściej stosuje się do wyeksponowania reklamy podświetlanej - na krawędziach grafiki doszywa się taśmę o grubości kilku milimetrów. Tak wykończony baner, umieszcza się w specjalnych rowkach systemu do podświetleń.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products", "Banery"],
			crumbs3: ["/products/banners/tape", "Taśma Silikonowa"]
		},
		recommended: [
			{
				url: "/materials/decorative/#arth",
				materialName: "Artist"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Baner Satynowy"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=8"]],
		advantages: ["trwały wydruk", "efektowny wygląd", "możliwość podświetlenia"]
	},
	//[5] Rzep
	{
		group: "Banery",
		name: "Rzep",
		description: "Wykończenie umożliwiające łatwą zmianę ekspozycji.",
		fullDescription:
			"Rzep umożliwia szybką i łatwą podmianę reklamy. Rzep żeński standardowo wszywany jest z tyłu baneru, natomiast męski, za pomocą taśmy dwustronnej, nadaje się do przyklejenia na płaskiej powierzchni.",
		fullDescription2:
			"Wydruk z doszytymi dwoma rodzajami rzepu (na przeciwległych końcach), można zamontować np. wokół filarów. Wykończenie rzepem idealnie sprawdzi się, m.in. jako łatwy w montażu pokrowiec na palety.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products", "Banery"],
			crumbs3: ["/products/banners/velcro", "Rzep"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=7"]],
		advantages: ["łatwy w montażu", "duże możliwości ekspozycji"]
	}
];

// Flagi PL
export const flagsPL = [
	//Beachflags [0]
	{
		group: "Flagi",
		name: "Beachflagi",
		description: "Najpopularniejszy rodzja flag. Jeden maszt do wielu kształtów.",
		fullDescription:
			"Flagi wykonujemy z materiałów posiadających certyfikat niepalności klasy B1. Najczęściej wybieranym przez Państwa materiałem jest Tkanina Flagowa – bardzo wytrzymała, nadająca się m.in. do prania w pralce. Innym bardzo popularnym materiałem jest Tkanina Flagowa Mesh, o strukturze siatki przepuszczającej powietrze, jest ona jednak nieco bardziej przezroczysta. Dzięki wykorzystaniu utrwalanego termicznie druku sublimacyjnego, kolory drukowanych przez nas flag są żywe, odporne na warunki atmosferyczne i dobrze widoczne z obydwu stron.",
		fullDescription2:
			"Beachflagi są jednymi z najczęsciej wybieranych produktów przez naszych klientów. Występują w kilku kształtach oraz rozmiarach. W naszej ofercie znajdują się również maszty do flag, które dzielimy na typ Standard - wykonany w całości z włókna szklanego oraz Budget - łączący w sobie aluminium i włókno szklane.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/flags", "Flagi"],
			crumbs3: ["/products/flags/beachflags", "Beachflags"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Tkanina Flagowa"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tkanina Flagowa Mesh"
			}
		],
		template: [
			//BG
			["Budget F (rozmiar-S)", "http://printxl.pl/templates/F-S_BG.pdf"],
			["Budget F (rozmiar-M)", "http://printxl.pl/templates/F-M_BG.pdf"],
			["Budget F (rozmiar-L)", "http://printxl.pl/templates/F-L_BG.pdf"],
			["Budget F (rozmiar-XL)", "http://printxl.pl/templates/F-XL_BG.pdf"],
			["Budget S (rozmiar-S)", "http://printxl.pl/templates/S-S_BG.pdf"],
			["Budget S (rozmiar-M)", "http://printxl.pl/templates/S-M_BG.pdf"],
			["Budget S (rozmiar-L)", "http://printxl.pl/templates/S-L_BG.pdf"],
			["Budget S (rozmiar-XL)", "http://printxl.pl/templates/S-XL_BG.pdf"],
			["Budget SP (rozmiar-S)", "http://printxl.pl/templates/SP-S_BG.pdf"],
			["Budget SP (rozmiar-M)", "http://printxl.pl/templates/SP-M_BG.pdf"],
			["Budget SP (rozmiar-L)", "http://printxl.pl/templates/SP-L_BG.pdf"],
			["Budget SP (rozmiar-XL)", "http://printxl.pl/templates/SP-XL_BG.pdf"],
			//ST
			["Standard F (rozmiar-S)", "http://printxl.pl/templates/F-S_ST.pdf"],
			["Standard F (rozmiar-M)", "http://printxl.pl/templates/F-M_ST.pdf"],
			["Standard F (rozmiar-L)", "http://printxl.pl/templates/F-L_ST.pdf"],
			["Standard F (rozmiar-XL)", "http://printxl.pl/templates/F-XL_ST.pdf"],
			["Standard S (rozmiar-S)", "http://printxl.pl/templates/S-S_ST.pdf"],
			["Standard S (rozmiar-M)", "http://printxl.pl/templates/S-M_ST.pdf"],
			["Standard S (rozmiar-L)", "http://printxl.pl/templates/S-L_ST.pdf"],
			["Standard S (rozmiar-XL)", "http://printxl.pl/templates/S-XL_ST.pdf"],
			["Standard SP (rozmiar-S)", "http://printxl.pl/templates/SP-S_ST.pdf"],
			["Standard SP (rozmiar-M)", "http://printxl.pl/templates/SP-M_ST.pdf"],
			["Standard SP (rozmiar-L)", "http://printxl.pl/templates/SP-L_ST.pdf"],
			["Standard SP (rozmiar-XL)", "http://printxl.pl/templates/SP-XL_ST.pdf"],
			["Standard SS (rozmiar-S)", "http://printxl.pl/templates/SS-S_ST.pdf"],
			["Standard SS (rozmiar-M)", "http://printxl.pl/templates/SS-M_ST.pdf"],
			["Standard SS (rozmiar-L)", "http://printxl.pl/templates/SS-L_ST.pdf"],
			["Standard SS (rozmiar-XL)", "http://printxl.pl/templates/SS-XL_ST.pdf"],
			["Standard SW (rozmiar-S)", "http://printxl.pl/templates/SW-S_ST.pdf"],
			["Standard SW (rozmiar-M)", "http://printxl.pl/templates/SW-M_ST.pdf"],
			["Standard SW (rozmiar-L)", "http://printxl.pl/templates/SW-L_ST.pdf"],
			["Standard SW (rozmiar-XL)", "http://printxl.pl/templates/SW-XL_ST.pdf"]
		],
		advantages: ["trwały nadruk", "żywe kolory", "jeden maszt do wielu kształtów"]
	},
	//Beachflag H [1]
	{
		group: "Flagi",
		name: "Beachflaga H",
		description: "Prosta flaga z dużą powierzchnią do ekspozycji reklamy.",
		fullDescription:
			"Flagi wykonujemy z materiałów posiadających certyfikat niepalności klasy B1. Najczęściej wybieranym przez Państwa materiałem jest Tkanina Flagowa – bardzo wytrzymała, nadająca się m.in. do prania w pralce. Innym bardzo popularnym materiałem jest Tkanina Flagowa Mesh, o strukturze siatki przepuszczającej powietrze, jest ona jednak nieco bardziej przezroczysta. Dzięki wykorzystaniu utrwalanego termicznie druku sublimacyjnego, kolory drukowanych przez nas flag są żywe, odporne na warunki atmosferyczne i dobrze widoczne z obydwu stron.",
		fullDescription2:
			"Ten typ flag, jest równie popularny co 'zwykłe' beachflagi, jednak różnica w ich wyglądzie jest wyraźnie widoczna. Beachflagi wykorzystują maszt pionowy z końcówką z włókna szklanego, który wygina się do kształtu flagi. Natomiast flaga H ma maszt wykonany w całości z aluminium, który nadaje jej bardziej prostokątny kształt.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/flags", "Flagi"],
			crumbs3: ["/products/flags/beachflags-h", "Beachflags H"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Tkanina Flagowa"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tkanina Flagowa Mesh"
			}
		],
		template: [
			["Budget H (rozmiar-S)", "http://printxl.pl/templates/H-S_BG.pdf"],
			["Standard H (rozmiar-S)", "http://printxl.pl/templates/H-S_ST.pdf"],
			["Standard H (rozmiar-M)", "http://printxl.pl/templates/H-M_ST.pdf"],
			["Standard H (rozmiar-L)", "http://printxl.pl/templates/H-L_ST.pdf"],
			["Standard H (rozmiar-XL)", "http://printxl.pl/templates/H-XL_ST.pdf"]
		],
		advantages: ["większą powierzchnia do prezentacji  grafiki", "szybki i prosty montaż", "maszt w całości wykonany z aluminium"]
	},
	//Sail [2]
	{
		group: "Flagi",
		name: "Sail",
		description: "Nowość w naszej ofercie. Flaga rozpięta między dwoma masztami na obrotowej podstawie.",
		fullDescription:
			"Flagi wykonujemy z materiałów posiadających certyfikat niepalności klasy B1. Najczęściej wybieranym przez Państwa materiałem jest Tkanina Flagowa – bardzo wytrzymała, nadająca się m.in. do prania w pralce. Innym bardzo popularnym materiałem jest Tkanina Flagowa Mesh, o strukturze siatki przepuszczającej powietrze, jest ona jednak nieco bardziej przezroczysta. Dzięki wykorzystaniu utrwalanego termicznie druku sublimacyjnego, kolory drukowanych przez nas flag są żywe, odporne na warunki atmosferyczne i dobrze widoczne z obydwu stron.",
		fullDescription2:
			"Flagi typu Sail są nowością w naszej ofercie. Ten typ flagi pozwala zaprezentować grafikę w bardzo efektowny sposób - w specjalną podstawę montuje się dwa maszty z włókna szklanego, na które nakłada się flagę. Dzięki takiemu rozwiązaniu, na wietrze, flaga obraca się, eksponując wszystkie swoje zalety.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/flags", "Flagi"],
			crumbs3: ["/products/flags/sail", "Sail"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Tkanina Flagowa"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tkanina Flagowa Mesh"
			}
		],
		template: [
			["Sail (rozmiar-XL)", "http://printxl.pl/templates/Flag_Sail_XL.pdf"],
			["Sail (rozmiar-L)", "http://printxl.pl/templates/Flag_Sail_L.pdf"],
			["Sail (rozmiar-M)", "http://printxl.pl/templates/Flag_Sail_M.pdf"],
			["Sail (rozmiar-S)", "http://printxl.pl/templates/Flag_Sail_S.pdf"]
		],
		advantages: ["wysoka jakość produktu", "pasuje do wszystkich typów podstaw", "obrotowa konstrukcja"]
	},
	// Thunder [3]
	{
		group: "Flagi",
		name: "Thunder",
		description: "Oryginalny kształt flagi rozpiętej między dwoma masztami.",
		fullDescription:
			"Flagi wykonujemy z materiałów posiadających certyfikat niepalności klasy B1. Najczęściej wybieranym przez Państwa materiałem jest Tkanina Flagowa – bardzo wytrzymała, nadająca się m.in. do prania w pralce. Innym bardzo popularnym materiałem jest Tkanina Flagowa Mesh, o strukturze siatki przepuszczającej powietrze, jest ona jednak nieco bardziej przezroczysta. Dzięki wykorzystaniu utrwalanego termicznie druku sublimacyjnego, kolory drukowanych przez nas flag są żywe, odporne na warunki atmosferyczne i dobrze widoczne z obydwu stron.",
		fullDescription2:
			"Jest to bliźniacze rozwiązanie do flag typu Sail. Jednak w tym przypadku oryginalny kształt fladze nadają różnej wielkości maszty - pierwszy o rozmiar mniejszy od drugiego. Maszty wykonane się z włókna szklanego. Podstawa jest obrotowa.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/flags", "Flagi"],
			crumbs3: ["/products/flags/thunder", "Thunder"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Tkanina Flagowa"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tkanina Flagowa Mesh"
			}
		],
		template: [
			["Thunder (rozmiar-S/M)", "http://printxl.pl/templates/Flag_Thunder_S-M.pdf"],
			["Thunder (rozmiar-M/L)", "http://printxl.pl/templates/Flag_Thunder_M-L.pdf"],
			["Thunder (rozmiar-L/XL)", "http://printxl.pl/templates/Flag_Thunder_L-XL.pdf"]
		],
		advantages: ["wysoka jakość produktu", "pasuje do wszystkich typów podstaw", "obrotowa konstrukcja"]
	}
];

// Ścianki PL
export const wallsPL = [
	//[0] W_Express Line
	{
		group: "Ścianki",
		name: "Express Line",
		description: "Prosta ścianka tekstylna montowana na rzep.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Niekwestionowaną zaletą systemu  Express Line jest jego prosty kształt i łatwość montażu - możesz mieć rozłożoną ściankę nawet w 3 minuty! Montaż tego modelu ścianki odbywa się przy pomocy rzepów.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Baner Satynowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Line_3x3.pdf"],
			["3x3 z bokami", "http://printxl.pl/templates/Wall_Express_Line_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Line_3x4.pdf"],
			["3x4 z bokami", "http://printxl.pl/templates/Wall_Express_Line_3x4_side.pdf"]
		],
		advantages: ["niska cena", "grafika w jednej części, bez podziału na bryty", "szybki montaż rzepami"]
	},
	//[1] W_ExpressArc
	{
		group: "Ścianki",
		name: "Express Arc",
		description: "Łukowa ścianka tekstylna montowana na rzep.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Niekwestionowaną zaletą systemu  Express Arc jest jego niepowtarzalny, łukowy kształt i łatwość montażu - możesz mieć rozłożoną ściankę nawet w 3 minuty! Montaż tego modelu ścianki odbywa się przy pomocy rzepów.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/express-arc", "Express Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Baner Satynowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Arc_3x3.pdf"],
			["3x3 z bokami", "http://printxl.pl/templates/Wall_Express_Arc_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Arc_3x4.pdf"],
			["3x4 z bokami", "http://printxl.pl/templates/Wall_Express_Arc_3x4_side.pdf"]
		],
		advantages: ["niska cena", "grafika w jednej części, bez podziału na bryty", "szybki montaż rzepami"]
	},
	//[2] W_Popup Line
	{
		group: "Ścianki",
		name: "PopUp Line",
		description: "Prosta ścianka składająca się z paneli oklejonych folią. Najlepszy stosunek jakości do ceny produktu.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Systemy PopUp składają się z dwóch podstawowych części: aluminiowego stelaża i paneli z pcv, na które nakleja się grafikę. Panele te montuje się na stelaż za pomocą specjalnych haczyków. Co ważne, stelaż jest niezwykle prosty w montażu, a dzięki  zagiętymi do tyłu bocznym panelom, z przodu są one niemalże niewidoczne. PopUp Line ma prosty, klasyczny kształt.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/popup", "PopUp Prosta"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Line_3x5.pdf"]
		],
		advantages: [
			"efektowna ekspozycja grafiki",
			"możliwość dokupienia zestawu do wymiany grafiki i użycia jednego stelażu do kilku grafik",
			"opcje dodatkowe: oświetlenie halogenowe lub LED"
		]
	},
	//[3] W_PopupArc
	{
		group: "Ścianki",
		name: "PopUp Arc",
		description: "Ścianka łukowa składająca się z paneli oklejonych folią. Najlepszy stosunek jakości do ceny produktu.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Systemy PopUp składają się z dwóch podstawowych części: aluminiowego stelaża i paneli z pcv, na które nakleja się grafikę. Panele te montuje się na stelaż za pomocą specjalnych haczyków. Co ważne, stelaż jest niezwykle prosty w montażu, a dzięki  zagiętymi do tyłu bocznym panelom, z przodu są one niemalże niewidoczne. PopUp Arc ma niepowtarzalny łukowy kształt.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/popup-arc", "PopUp Łukowa"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Arc_3x5.pdf"]
		],
		advantages: [
			"efektowna ekspozycja grafiki",
			"możliwość dokupienia zestawu do wymiany grafiki i użycia jednego stelażu do kilku grafik",
			"opcje dodatkowe: oświetlenie halogenowe lub LED"
		]
	},
	//[4] W_PopupMagnetic
	{
		group: "Ścianki",
		name: "PopUp Magnetyczna Line",
		description: "Niezwykle prosty montaż i demontaż ścianki z panelami pcv. Panele oklejone folią.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"W odróżnieniu od standardowych modeli, ścianki magnetyczne posiadają niezwykły system szybkiego łączenia elementów za pomocą wbudowanych w konstrukcję magnesów. Ponadto, boczne panele są zagięte do tyłu, dlatego od przodu widoczne są w 1/3 szerokości. Ten model występuje w kształcie łukowym.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/popup-magnetic", "PopUp Magnetyczna"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x5_ST.pdf"]
		],
		advantages: ["stabilna konstrukcja", "opcje dodatkowe: oświetlenie halogenowe lub LED", "prosty montaż i demontaż"]
	},
	//[5] W_PopupMagneticArc
	{
		group: "Ścianki",
		name: "PopUp Magnetyczna Arc",
		description: "Niezwykle prosty montaż i demontaż ścianki z panelami pcv. Panele oklejone folią.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"W odróżnieniu od standardowych modeli, ścianki magnetyczne posiadają niezwykły system szybkiego łączenia elementów za pomocą wbudowanych w konstrukcję magnesów. Ponadto, boczne panele są zagięte do tyłu, dlatego od przodu widoczne są w 1/3 szerokości. Ten model występuje w kształcie prostym.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/popup-magnetic-arc", "PopUp Magnetyczna Łukowa"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x5_ST.pdf"]
		],
		advantages: ["stabilna konstrukcja", "prosty montaż i demontaż"]
	},
	//[6] W_PopupTwin
	{
		group: "Ścianki",
		name: "PopUp Twin",
		description: "Najlepszy stosunek jakości do ceny produktu i do tego dwustronnie. Panele oklejone folią.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Systemy PopUp składają się z dwóch podstawowych części: aluminiowego stelaża i paneli z pcv, na które nakleja się grafikę. Panele te montuje się na stelaż za pomocą specjalnych haczyków. Co ważne, stelaż jest niezwykle prosty w montażu. Ten model to idealne połączenie najwyższej jakości z niezwykle konkurencyjną ceną. Systemy PopUp są wyjątkowe, ponieważ grafikę widać z każdej strony.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/popup-twin", "PopUp Twin"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x5.pdf"]
		],
		advantages: ["dwustronna prezentacja grafiki", "wyjątkowo lekki zestaw", "opcje dodatkowe: oświetlenie halogenowe lub LED"]
	},
	//[7] W_Silic
	{
		group: "Ścianki",
		name: "Silic Line",
		description: "Wydruk montuje się taśmą silikonową. Tkanina na zgrabnym systemie do ekspozycji.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Ścianki Silic to nowość na rynku. Innowacyjny system sprawia, że lekka konstrukcja staje się na tyle stabilna, iż pozwala na efektowne zaprezentowanie reklamy, którą w prosty sposób można zamontować za pomocą taśmy silikonowej. Standardowa wersja ścianki pozwala zamontować grafikę tylko od frontu, natomiast wersja Twin daje taką możliwość na każdej ścianie systemu.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/silic", "Silic"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_4x3.pdf"]
		],
		advantages: ["grafika w jednej części", "prosty montaż i demontaż", "stabilna konstrukcja", "torba w zestawie"]
	},
	//[8] W_SilicArc
	{
		group: "Ścianki",
		name: "Silic Arc",
		description: "Wydruk montuje się taśmą silikonową. Tkanina na łukowym systemie do ekspozycji.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Ścianki Silic to nowość na rynku. Innowacyjny system sprawia, że lekka konstrukcja staje się na tyle stabilna, iż pozwala na efektowne zaprezentowanie reklamy, którą w prosty sposób można zamontować za pomocą taśmy silikonowej. Standardowa wersja ścianki pozwala zamontować grafikę tylko od frontu, natomiast wersja Twin daje taką możliwość na każdej ścianie systemu. Ten model występuje w wersji prostej.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/silic-arc", "Silic Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_4x3.pdf"]
		],
		advantages: ["grafika w jednej części", "prosty montaż i demontaż", "stabilna konstrukcja", "torba w zestawie"]
	},
	//[9] W_SilicLed
	{
		group: "Ścianki",
		name: "Silic Led Line",
		description: "Wydruk montuje się taśmą silikonową. Tkanina podświetlana.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Tym co wyróżnia Silic Led Arc spośród innych ścianek, jest system,  który został podkreślony  poprzez jego podświetlenie za pomocą kurtyn LED. Setki żarówek nadają niepowtarzalny efekt prezentowanemu wydrukowi. Co ważne, ścianka posiada listwy montażowe z obu stron, a przy zastosowaniu podwójnych kurtyn może być dwustronna. Ten model występuje w wersji łukowej.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/silic-led", "Silic Led"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_LED_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_LED_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_LED_4x3.pdf"]
		],
		advantages: ["widowiskowy efekt", "dwustronna prezentacja grafiki", "kurtyny LED", "torba w zestawie"]
	},
	//[10] W_SilicLedArc
	{
		group: "Ścianki",
		name: "Silic Led Arc",
		description: "Wydruk montuje się taśmą silikonową. Tkanina podświetlana.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Tym co wyróżnia Silic Led Arc spośród innych ścianek, jest system,  który został podkreślony  poprzez jego podświetlenie za pomocą kurtyn LED. Setki żarówek nadają niepowtarzalny efekt prezentowanemu wydrukowi. Co ważne, ścianka posiada listwy montażowe z obu stron, a przy zastosowaniu podwójnych kurtyn może być dwustronna. Ten model występuje w wersji prostej.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/silic-led-arc", "Silic Led Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_LED_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_LED_4x3.pdf"]
		],
		advantages: ["widowiskowy efekt", "dwustronna prezentacja grafiki", "kurtyny LED", "torba w zestawie"]
	},
	//[11] W_SilicTwin
	{
		group: "Ścianki",
		name: "Silic Twin Line",
		description: "Wydruk montuje się taśmą silikonową. Ścianka dwustronna.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"System ten przeznaczony jest do prezentacji grafiki z dwóch stron. Montaż wydruku jest taki sam jak we wszystkich ściankach z tej serii, czyli za pomocą taśmy silikonowej. Ten model występuje w wersji łukowej.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/silic-twin", "Silic Twin Prosta"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_4x3.pdf"]
		],
		advantages: ["dwustronna prezentacja grafiki", "prosty montaż i demontaż", "stabilna konstrukcja", "torba w zestawie"]
	},
	//[12] W_SilicTwinArc
	{
		group: "Ścianki",
		name: "Silic Twin Arc",
		description: "Wydruk montuje się taśmą silikonową. Ścianka dwustronna łukowa.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"System ten przeznaczony jest do prezentacji grafiki z dwóch stron. System montażu wydruku jest taki sam jak we wszystkich ściankach tej serii, czyli przy pomocy taśmy silikonowej. Ten model występuje w wersji łukowej.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/silic-twin-arc", "Silic Twin Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_4x3.pdf"]
		],
		advantages: ["dwustronna prezentacja grafiki", "prosty montaż i demontaż", "stabilna konstrukcja", "torba w zestawie"]
	},
	//[13] W_Smart
	{
		group: "Ścianki",
		name: "Smart Line",
		description: "Lekka, mała konstrukcja. Materiał nakładany jest od góry systemu.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Ścianki z serii Smart to produkty o wielu atutach. Wyróżnia je m.in. lekka konstrukcja, a przy tym bardzo duża powierzchnia prezentacji grafiki. Wydruk zakłada się na zasadzie naciągania skarpety, a rury stelażu mają aż 32 mm średnicy.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/smart", "Smart"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_line_24.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_line_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_line_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_line_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_line_60.pdf"]
		],
		advantages: ["niska cena", "dwustronna grafika", "szybki montaż", "torba transportowa w zestawie"]
	},
	//[14] W_SmartArc
	{
		group: "Ścianki",
		name: "Smart Arc",
		description: "Lekka, mała konstrukcja. Materiał nakładany jest od góry systemu.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Prezentowana seria produktów występuje w kilku ciekawych kształtach. W Arc, dzięki zakrzywionym bokom, część grafiki jest widoczna również z boku. Stelaż ścianki wyprofilowany jest w taki sposób, że nie wymaga dodatkowych nóg stabilizacyjnych.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/smart-arc", "Smart Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_Arc_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_Arc_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_Arc_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_Arc_50.pdf"]
		],
		advantages: ["dwustronna grafika", "szybki montaż", "aluminium anodowane", "torba transportowa w zestawie"]
	},
	//[15] W_SmartS
	{
		group: "Ścianki",
		name: "Smart S",
		description: "Lekka, mała konstrukcja. Materiał nakładany jest od góry systemu.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Zdecydowanie najbardziej efektowną wersją spośród ścianek Smart jest kształt S, przypominający kształtem węża. Ponadto, cała konstrukcja wykonana jest z aluminium anodowanego. Warto także wiedzieć, że grafika może być wydrukowana z dwóch stron. Wszystkie ścianki Smart pakowane są w wytrzymałe torby.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/smart-s", "Smart S"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_S_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_S_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_S_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_S_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_S_60.pdf"]
		],
		advantages: ["efektowny wygląd", "dwustronna grafika", "szybki montaż", "torba transportowa w zestawie"]
	},
	//[16] W_SmartU
	{
		group: "Ścianki",
		name: "Smart U",
		description: "Lekka, mała konstrukcja. Materiał nakładany jest od góry systemu.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Ścianka ta ma kształt łuku w pozycji wertykalnej. Jest to bardzo ciekawa i efektowna wersja produktu, wyróżniająca się w tej serii. W zestawie znajdują się nogi, dzięki czemu system jest wyjątkowo stabilny.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/smart-u", "Smart U"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["3.0", "http://printxl.pl/templates/Wall_Smart_U_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_U_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_U_50.pdf"]
		],
		advantages: ["efektowny wygląd", "szybki montaż", "torba transportowa w zestawie"]
	},
	//[17] W_Suxen
	{
		group: "Ścianki",
		name: "Suxen",
		description: "Prosty ale bardzo pomysłowy i efektowny system.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"System ten jest prosty, ale bardzo pomysłowy i efektowny. Stelaż bazuje na klasycznym pop-upie, a grafika może być wydrukowana na banerze lub tkaninie i zaoczkowana w narożnikach. Z tak przygotowanych wydruków, można tworzyć różne kształty i kompozycje.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/suxen", "Suxen"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [["1 element", "http://printxl.pl/templates/Wall_Suxen.pdf"]],
		advantages: ["prosty montaż i demontaż", "możliwość tworzenia ciekawych kształtów", "torba transportowa w zestawie"]
	},
	//[18] W_Telescopic
	{
		group: "Ścianki",
		name: "Telescopic",
		description: "Najpopularniejsze wykończenie. Zapewnia wytrzymałość i szybki montaż.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się zarówno jako element brandingu podczas imprez targowych czy uroczystości firmowych, jak i tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Telescopic to seria ścianek przeznaczonych dla grafik banerowych o dużych powierzchniach. Te ścianki stają się coraz bardziej popularne dzięki swojej prostocie, stabilności i elastyczności. Ich konstrukcja działa na zasadzie rurek teleskopowych, dzięki czemu rama jest regulowana i może uzyskiwać różne wielkości.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/walls", "Ścianki"],
			crumbs3: ["/products/walls/telescopic", "Telescopic"]
		},
		recommended: [
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			}
		],
		template: [["Telescopic", "http://printxl.pl/templates/Wall_Telescopic.pdf"]],
		advantages: ["niska cena", "prosty montaż i demontaż", "stabilna konstrukcja", "torba w zestawie"]
	}
];

// Rollupy PL
export const rollupsPL = [
	//[0] Compact
	{
		group: "Rollupy",
		name: "Compact",
		description: "Niezwykle lekki i poręczny system Rollup.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Jest to jedna z najbardziej kompaktowych form reklamy - charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Rollup’y pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Model Compact to niezwykle lekki i poręczny system. Średnica jego kasety zmniejszona została z klasycznego wymiaru 9,3 cm do 8,3 cm. Jest to produkt klasy ekonomicznej.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/compact", "Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			"kompaktowy i łatwy w transporcie",
			"listwa typu „Express Clip“ – błyskawiczny i łatwy montaż oraz wymiana wydruku",
			"kaseta w 100% wykonana z aluminium anodowanego"
		]
	},
	//[1] Standard
	{
		group: "Rollupy",
		name: "Standard",
		description: "Bestseller na wielu rynkach.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Model Standard posiada stabilizator masztu, co zapewnia trwałą prezentację grafiki. Ponadto, dołączona do kompletu listwa typu „Express Clip“ umożliwia szybki oraz łatwy montaż, a także bezproblemową wymianę grafiki.Przez naszych klientów lubiany z uwagi na idealny stosunek jakości do ceny.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/standard", "Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 80", "http://printxl.pl/templates/Other_roll80.pdf"],
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"stabilna, mocna konstrukcja w 100% wykonana z anodowanego aluminium",
			"maszt połączony elastyczną linką zapobiegającą zagubieniu jego elementów",
			"listwa typu Express Clip - szybki i łatwy montaż"
		]
	},
	//[2] Classic
	{
		group: "Rollupy",
		name: "Classic",
		description: "Ulepszona wersja modelu Standard.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"To ulepszona wersja modelu Standard. Oprócz stabilizatora masztu, posiada on również wzmocnienie tylnej ścianki, co gwarantuje większą stabilność i dłuższą żywotność. W odróżnieniu od modelu Standard, Classic, posiada również plastikowe końcówki nóżek.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/classic", "Classic"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"wzmocnienie tylnej ścianki ze stabilizatorem masztu",
			"taśma 3M – pewne mocowanie grafiki do systemu zwijającego",
			"maszt połączony elastyczną linką zapobiegającą zagubieniu jego elementów"
		]
	},
	//[3] Premium
	{
		group: "Rollupy",
		name: "Premium",
		description: "Mocna i stabilna konstrukcja.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Ten typ rollupów wykonany został ze zdecydowanie grubszego aluminium niż jego poprzednicy. To bardzo mocna, solidna i stabilna konstrukcja, którą dopełnia duża, wzmocniona torba transportowa.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/premium", "Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"gruby profil aluminiowy",
			"ulepszony system zwijający",
			"taśma 3M zapewniająca pewne mocowanie grafiki",
			"wzmocnienie tylnej ścianki ze stabilizatorem masztu"
		]
	},
	//[4] Pro
	{
		group: "Rollupy",
		name: "Pro",
		description: "Najwyższy model w kategorii rollupów o klasycznym kształcie kasety.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Pro jest najwyższym jakościowo modelem z kategorii rollupów o klasycznym kształcie kasety. Wyjątkowo gruby profil aluminiowy użyty do produkcji tego modelu, gwarantuje najwyższą jakość produktu i wieloletnią trwałość.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/pro", "Pro"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"],
			["rollup 200", "http://printxl.pl/templates/Other_roll200.pdf"]
		],
		advantages: [
			"dostępny w rozmiarze 200x200",
			"najgrubszy profil aluminiowy",
			"taśma 3M zapewniająca pewne mocowanie grafiki",
			"szczyt masztu nie wystaje ponad grafikę"
		]
	},
	//[5] Exclusive
	{
		group: "Rollupy",
		name: "Exclusive",
		description: "Uznany na wielu rynkach rollup. Nowoczesny design.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Uznany na wielu rynkach rollup, o wyjątkowo eleganckim wyglądzie, wdzięcznie nazywany „łezką“. Charakteryzuje go bardzo trwała i stabilna konstrukcja, która z gracją prezentuje grafikę.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/exclusive", "Exclusive"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"],
			["rollup 200", "http://printxl.pl/templates/Other_roll200.pdf"]
		],
		advantages: [
			"nowoczesny, elegancki wygląd",
			"listwa typu Express Clip - szybki i łatwy montaż",
			"taśma 3M zapewniająca pewne mocowanie grafiki",
			"szczyt masztu nie wystaje ponad grafikę",
			"dostępny w wymiarze 200x200"
		]
	},
	//[6] Twin
	{
		group: "Rollupy",
		name: "Twin",
		description: "Podstawowy model dwustronny.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Twin to podstawowy model rollup’u dwustronnego. Ten model sprawdza się tam gdzie prezentacja grafiki jest konieczna z obu stron.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/twin", "Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			"możliwość dwustronnej prezentacji grafiki",
			"taśma 3M zapewniająca pewne mocowanie grafik",
			"szczyt masztu nie wystaje ponad grafik",
			"listwa typu Express Clip - szybki i łatwy montaż"
		]
	},
	//[7] Twin Plus
	{
		group: "Rollupy",
		name: "Twin Plus",
		description: "Rollup dwustronny w ulepszonej wersji.",
		fullDescription:
			"System Rollup jest bardzo popularnym rozwiązaniem reklamowym. Charakteryzuje się dużą wygodą użytkowania i łatwością w transporcie. Jest to jedna z najbardziej kompaktowych form reklamy. Każdy rollup składa się z grafiki chowanej w aluminiową kasetę oraz trzyczęściowego stelaża połączonego elastyczną gumką. Pakowane są w eleganckie, czarne torby z wygodną rączką.",
		fullDescription2:
			"Twin Plus to model dwustronny z podwójną grafiką. Niklowana noga to nie tylko niewątpliwa ozdoba tego modelu, ale przede wszystkim stabilizacja systemu. Dzięki temu, model ten występuje również w szerokościach 120 i 150 cm.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/twin-plus", "Twin Plus"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Light"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"możliwość dwustronnej prezentacji grafiki",
			"rozmiary do 150 cm szerokości",
			"szczyt masztu nie wystaje ponad grafik",
			"elegancka stopa stabilizująca"
		]
	}
];

// Standy PL
export const standsPL = [
	//[0] L-Banner Premium
	{
		group: "Standy",
		name: "L-Banner Premium",
		description: "Popularny system typu L-banner, klasy premium.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Zwane są stojakami L od litery, którą swoim kształtem przypominają. L-Banner Premium to lekki, praktyczny i łatwy w obsłudze system wystawienniczy. Jest niezwykle ekonomicznym narzędziem komunikacji wizualnej. Idealnie sprawdza się na konferencjach, pokazach, wystawach, a także w miejscach sprzedaży. Zastosowano tutaj profile aluminiowe dolne o zdecydowanie większej grubości niż w tańszej wersji, zachowując przy tym lekkość systemu i zwiększając jego stabilność, a także, nadal pozwalając na szybką wymianę plansz.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/l-banner-premium", "L-Banner Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			}
		],
		template: [
			["100x200", "http://printxl.pl/templates/Stand_Lban80.pdf"],
			["80x180", "http://printxl.pl/templates/Stand_Lban100.pdf"]
		],
		advantages: ["niski koszt systemu", "prosty i szybki montaż", "ultralekki", "torba w zestawie"]
	},
	//[1] L-Banner Premium Twin
	{
		group: "Standy",
		name: "L-Banner Premium Twin",
		description: "Wersja Twin, jak sama nazwa sugeruje jest dwustronna.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Zwane stojakami L od litery, którą przypominają. To lekki, praktyczny, łatwy w obsłudze system wystawienniczy. Jest niezwykle ekonomicznym narzędziem komunikacji wizualnej. Idealnie sprawdza się na konferencjach, pokazach, wystawach, a także w miejscach sprzedaży. Zastosowano tutaj profile aluminiowe dolne o zdecydowanie większej grubości niż w tańszej wersji, zachowując przy tym lekkość systemu i zwiększając jego stabilność, a także, nadal pozwalając na szybką wymianę plansz.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/l-banner-premium-twin", "L-Banner Premium Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/folis/#stplg",
				materialName: "Stoplight"
			}
		],
		template: [
			["100x200", "http://printxl.pl/templates/Stand_Lban100.pdf"],
			["80x200", "http://printxl.pl/templates/Stand_Lban80.pdf"]
		],
		advantages: ["dwustronna prezentacja grafiki", "prosty i szybki montaż", "ultralekki", "torba w zestawie"]
	},
	//[2] L-Banner St
	{
		group: "Standy",
		name: "L-Banner Standard",
		description: "Jego zaletą jest bardzo lekka konstrukcja. Łatwa w transporcie, a przy tym bardzo stabilna.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Zwane są stojakami L od litery, które swoim kształtem przypominają. To lekki, praktyczny, łatwy w obsłudze system wystawienniczy. Jest niezwykle ekonomicznym narzędziem komunikacji wizualnej. Idealnie sprawdza się na konferencjach, pokazach, wystawach, a także w miejscach sprzedaży. Aluminiowy profil dolny zapewnia stabilność oraz ułatwia szybką wymianę plansz.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/l-banner-standard", "L-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			}
		],
		template: [
			["85x180", "http://printxl.pl/templates/Stand_Lban85.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Lban60.pdf"]
		],
		advantages: ["niski koszt systemu", "prosty i szybki montaż", "ultralekki", "torba w zestawie"]
	},
	//[3] Portal
	{
		group: "Standy",
		name: "Portal",
		description: "Trwała i solidna konstrukcja. Materiał montowany za pomocą taśmy silikonowej.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Stand Portal to aktualnie najpopularniejszy system stosowany do prezentacji grafiki w centrach handlowych i witrynach sklepowych. Co ważne, wyjątkowo trwała i solidna konstrukcja gwarantuje długi okres użytkowania, a dzięki profilowi na taśmę silikonową, montaż i wymiana grafiki zajmuje tylko chwilę.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/portal", "Portal"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Portal", "http://printxl.pl/templates/Stand_Portal.pdf"]],
		advantages: [
			"wyjątkowo stabilna i trwała konstrukcja",
			"dwustronna prezentacja grafiki",
			"profil na taśmę silikonową",
			"błyskawiczna wymiana grafiki"
		]
	},
	//[4] Totem 1
	{
		group: "Standy",
		name: "Totem 1",
		description: "Niezwykle efektowny stand.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"System ten przeznaczony jest do prezentacji grafiki na tkaninach. Charakteryzuje się niezwykle prostą, lekką konstrukcją i błyskawicznym montażem. Dzięki temu, że tkanina naciągana jest na stelaż, stand może prezentować grafikę jedno lub dwustronną.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/totem-1", "Totem 1"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem1_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem1_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem1_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem1_150.pdf"]
		],
		advantages: ["niski koszt systemu", "prosty i szybki montaż", "torba w zestawie"]
	},
	//[5] Totem 2
	{
		group: "Standy",
		name: "Totem 2",
		description: "Niezwykle efektowny stand.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"System ten przeznaczony jest do prezentacji grafiki na tkaninach. Charakteryzuje się niezwykle prostą, lekką konstrukcją i błyskawicznym montażem. Dzięki temu, że tkanina naciągana jest na stelaż, stand może prezentować grafikę jedno lub dwustronną. W przypadku Totem 2, nogi zastąpione zostały płytą metalową. Dzięki użyciu tego typu podstawy, system jest bardziej stabilny.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/totem-2", "Totem 2"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem2_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem2_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem2_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem2_150.pdf"]
		],
		advantages: ["niski koszt systemu", "prosty i szybki montaż", "torba w zestawie"]
	},
	//[6] Totem 3
	{
		group: "Standy",
		name: "Totem 3",
		description: "Niezwykle efektowny stand.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Ten produkt przeznaczony jest dla Klientów, którzy wolą leteksową lub solwentową technologię druku. Dzięki zastosowaniu specjalnych zaczepów, Totem 3 bardzo efektownie zaprezentuje grafikę, wydrukowaną na popularnym banerze powlekanym. Również w tym przypadku, grafika może zostać zaprezentowana dwustronnie - po wydrukowaniu na materiale Blockout.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/totem-3", "Totem 3"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem3_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem3_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem3_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem3_150.pdf"]
		],
		advantages: ["druk na banerze powlekanym", "niski koszt", "prosty i szybki montaż", "torba w komplecie"]
	},
	//[7] Totem Plus
	{
		group: "Standy",
		name: "Totem Plus",
		description: "Idealne rozwiązanie na eventy.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Doskonały wybór dla firm organizujących imprezy prezentacyjne w formie bankietów, eventów czy koktajli. Dzięki temu, że ścianka posiada dodatkowo półkę, produkt ten może spełniać funkcję stolika koktajlowego i nośnika reklamy w jednym. Co ważne, system prezentuje grafikę dwustronnie.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/totem-plus", "Totem Plus"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [["Totem Plus", "http://printxl.pl/templates/Stand_Totem_PLUS.pdf"]],
		advantages: ["praktyczna półka", "dwustronny", "szybki montaż", "stelaż i torba w zestawie"]
	},
	//[8] X-Banner Compact
	{
		group: "Standy",
		name: "X-Banner Compact",
		description: "Ekonomiczny sposób prezentacji swojej reklamy.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"Ekonomiczna wersja popularnego na rynku systemu do prezentacji grafiki, który swoją nazwę zawdzięcza charakterystycznemu kształtowi litery X. Ten model ścianki w całości został wykonany z włókna szklanego, dzięki czemu jego konstrukcja jest ultralekka, ale bardzo stabilna. X- Banner Compact to prosty sposób na efektowną prezentację grafiki.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/x-banner-compact", "X-Banner Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [
			["80x180", "http://printxl.pl/templates/Stand_Xban80.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Xban60.pdf"]
		],
		advantages: ["niski koszt systemu", "prosty i szybki montaż", "ultralekki", "torba w zestawie"]
	},
	//[9] X-Banner Standard
	{
		group: "Standy",
		name: "X-Banner Standard",
		description: "Wyższy model systemu X-banner.",
		fullDescription: "Standy to systemy, które wielkością przypominają rollupy, ale dają dużo większe możliwości ekspozycji reklamy.",
		fullDescription2:
			"X-banner standard to wyższy model systemu z serii X-banner. Jest bardziej stabilny i wytrzymały od swoich poprzedników. Ponadto, wykonany został z eleganckiego, odpornego na korozję, metalu, a mimo to wciąż jest to system ultralekki. Dzięki swojej prostocie, jego składanie i rozkładanie trwa tylko kilka sekund.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/stands", "Standy"],
			crumbs3: ["/products/stands/x-banner-standard", "X-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [
			["120x210", "http://printxl.pl/templates/Stand_Xban120.pdf"],
			["80x180", "http://printxl.pl/templates/Stand_Xban80.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Xban60.pdf"]
		],
		advantages: ["wysoka jakość wykonania", "dostępny w większym formacie: 120x210", "prosty w obsłudze", "ultralekki"]
	}
];

// Pozostałe PL
export const othersPL = [
	//[0] Namioty
	{
		group: "Pozostałe",
		name: "Namioty",
		description: "Najszybszy sposób na stoisko outdorowe.",
		fullDescription:
			"Konstrukcja oferowanych przez nas namiotów jest stalowa lub aluminiowa i występuje w czterech rozmiarach. Wersja aluminiowa jest bardzo lekka i wygodna, szczególnie przy częstych zmianach lokalizacji stoiska. Wariant stalowy jest za to bardzo trwały i pomalowany proszkowo na biało. Co ważne, grafika drukowana na specjalnej poliestrowej tkaninie, która spełnia podstawowe standardy wodoodporności.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/tent", "Namioty"]
		},
		recommended: [
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["Tent 2,5x2,5", "http://printxl.pl/templates/Tent_2%2C5x2%2C5.pdf"],
			["Tent 3x3", "http://printxl.pl/templates/Tent_3x3.pdf"],
			["Tent 3x3 [ST]", "http://printxl.pl/templates/Tent_3x3_ST.pdf"],
			["Tent 3x4", "http://printxl.pl/templates/Tent_3x4.pdf"],
			["Tent 3x6", "http://printxl.pl/templates/Tent_3x6.pdf"]
		],
		advantages: ["taśma 3M zapewniająca pewne mocowanie grafiki", "szczyt masztu nie wystaje ponad grafik"]
	},
	//[1] Leżaki
	{
		group: "Pozostałe",
		name: "Leżaki plażowe",
		description: "Plażowanie w wyjątkowym stylu.",
		fullDescription:
			"W naszej ofercie znajdują się dwa typy leżaków, z wykonanymi z drewna podłokietnikami lub bez nich. Jako siedzisko, zamontowana zostanie Twoja wymarzona grafika, wydrukowana na tkaninie idealnej do takich zadań: poliesterze Monaco.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/sunbeds", "Leżaki plażowe"]
		},
		recommended: [
			{
				url: "/materials/textiles/#polim",
				materialName: "Poliester Monaco"
			},
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["Leżak", "http://printxl.pl/templates/Other_Sunbed.pdf"],
			["Leżak XXL", "http://printxl.pl/templates/Other_Sunbed_XXL.pdf"]
		],
		advantages: ["możliwość niepowtarzalnego leżaka"]
	},
	//[2] O_PalletsCover
	{
		group: "Pozostałe",
		name: "Pokrowiec na palety",
		description: "Aby mieć porządek z paletami i reklamę w jednym.",
		fullDescription:
			"Wytrzymałe i estetyczne pokrowce, to idealny sposób na nakrycie palet swoją reklamą. Wymiary pokrowców są zależne od wymiarów oraz ilości palet, na które mają być przygotowane. Pokrowce na palety wykonywane są z baneru powlekanego (woodpornego) - najlepszego możliwego materiału do ich produkcji.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/pallets-cover", "Pokrowiec na palety"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [
			["7 palet", "http://printxl.pl/templates/Other_Cover7.pdf"],
			["6 palet", "http://printxl.pl/templates/Other_Cover6.pdf"],
			["5 palet", "http://printxl.pl/templates/Other_Cover5.pdf"],
			["4 palety", "http://printxl.pl/templates/Other_Cover4.pdf"],
			["3 palety", "http://printxl.pl/templates/Other_Cover3.pdf"],
			["2 palety", "http://printxl.pl/templates/Other_Cover2.pdf"],
			["1 paleta", "http://printxl.pl/templates/Other_Cover1.pdf"]
		],
		advantages: ["szybki montaż i demontaż", "nieprzemakalny materiał", "wytrzymały"]
	},
	//[3] Legtab
	{
		group: "Pozostałe",
		name: "Potykacz Legtab",
		description: "Zdecydowany bestseller wśród potykaczy.",
		fullDescription:
			"Potykacze reklamowe to bardzo efektowne i wygodne w użytkowaniu nośniki reklamy. Ergonomiczna konstrukcja, wykonana z najwyższej jakości materiałów, gwarantuje jego trwałość i wieloletnią wytrzymałość.",
		fullDescription2:
			"Dzięki charakterystycznemu dla tego modelu systemowi 'clip-clap', można w nim bardzo szybko i łatwo wymienić grafikę. Występuje w dwóch, popularnych wymiarach: A0 i A1.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/legtab", "Potykacz Legtab"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["dwustronna prezentacja grafiki", "bardzo wytrzymała na warunki atmosferyczne konstrukcja"]
	},
	//[4] Springtab
	{
		group: "Pozostałe",
		name: "Potykacz Springtab",
		description: "Wichura mu nie straszna.",
		fullDescription:
			"Potykacze reklamowe to bardzo efektowne i wygodne w użytkowaniu nośniki reklamy. Ergonomiczna konstrukcja, wykonana z najwyższej jakości materiałów, gwarantuje jego trwałość i wieloletnią wytrzymałość. ",
		fullDescription2:
			"Po zalaniu podstawy wodą potykacz Springtab staje się bardzo wytrzymałą konstrukcją, która w połączeniu z przymocowaną do niej, za pomocą solidnych sprężyn, ramą, jest odporna m.in. na silny wiatr.  Grafika eksponowana jest w ramkach w wymiarze A1 i A0.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/springtab", "Potykacz Springtab"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Folia Poliestrowa blockout"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["dwustronna prezentacja grafiki", "szybka i łatwa wymiana ekspozycji"]
	},
	//[5] O_Bubble
	{
		group: "Pozostałe",
		name: "Potykacze Bubble",
		description: "Lekkie i stabilne potykacze o ciekawych kształtach.",
		fullDescription:
			"Potykacze reklamowe to bardzo efektowne i wygodne w użytkowaniu nośniki reklamy. Ergonomiczna konstrukcja, wykonana z najwyższej jakości materiałów, gwarantuje jego trwałość i wieloletnią wytrzymałość, a dzięki przytwierdzeniu do podłoża za pomocą szpilek, potykacz Bubble jest niezwykle stabilny. ",
		fullDescription2:
			"Bubble to idealny system reklamowy na imprezy plenerowe. Jego główne atuty to łatwy montaż i lekkość. Ponadto, występuje w różnych kształtach, np. koła, owalu lub trójkąta.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/bubble", "Potykacze Bubble"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner matowy"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaga"
			}
		],
		template: [
			["Oval S", "http://printxl.pl/templates/Other_Bubble_140.pdf"],
			["Oval M", "http://printxl.pl/templates/Other_Bubble_170.pdf"],
			["Oval L", "http://printxl.pl/templates/Other_Bubble_200.pdf"]
		],
		advantages: ["bardzo szybkie rozkładanie", "lekki i stabilny"]
	},
	//[6] O_Canvas
	{
		group: "Pozostałe",
		name: "Canvas",
		description: "Obraz, na ścianę jaki tylko chcesz.",
		fullDescription:
			"Canvas jest nietypowym materiałem - płótnem malarskim z możliwością wykorzystania go podczas druku cyfrowego. Grafikę montuje się na blejtramie (krosno malarskie). Dzięki temu można mieć na ścianie wymarzony przez siebie obraz.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/canvas", "Canvas"]
		},
		recommended: [
			{
				url: "/materials/decorative/#canvas",
				materialName: "Canvas"
			}
		],
		template: [
			["A4", "http://printxl.pl/templates/Other_frameA4.pdf"],
			["A3", "http://printxl.pl/templates/Other_frameA3.pdf"],
			["A2", "http://printxl.pl/templates/Other_frameA2.pdf"],
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"],
			["B2", "http://printxl.pl/templates/Other_frameB2.pdf"],
			["B1", "http://printxl.pl/templates/Other_frameB1.pdf"]
		],
		advantages: ["solidna konstrukcja"]
	},
	//[7] O_Frames
	{
		group: "Pozostałe",
		name: "Ramki plakatowe",
		description: "Częsta zmiana ekspozycji w stałym miejscu.",
		fullDescription:
			"Ramki plakatowe mogą posłużyć jako stałe miejsce ekspozycji reklamy, z możliwością częstej wymiany grafiki. Idealnie sprawdzą się m.in. przy drzwiach wejściowych lub przy wejściu do biura, jako miejsce przekazania bieżących i najważniejszych informacji. Ramki plakatowe występują w wymiarach: A4, A3, A2, A1, A0, B2, B1.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/frames", "Ramki plakatowe"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier"
			}
		],
		template: [
			["A4", "http://printxl.pl/templates/Other_frameA4.pdf"],
			["A3", "http://printxl.pl/templates/Other_frameA3.pdf"],
			["A2", "http://printxl.pl/templates/Other_frameA2.pdf"],
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"],
			["B2", "http://printxl.pl/templates/Other_frameB2.pdf"],
			["B1", "http://printxl.pl/templates/Other_frameB1.pdf"]
		],
		advantages: ["szybka i łatwa wymiana ekspozycji"]
	},
	//[8] Pufy
	{
		group: "Pozostałe",
		name: "Pufy",
		description: "Idealne siedzisko ze spersonalizowanym nadrukiem.",
		fullDescription:
			"Oferowane przez nas pufy z nadrukiem mogą być doskonałym uzupełnieniem wystroju stoiska targowego, wystawy, eventu lub biura. Każdy bok kostki może mieć dowolny nadruk, przez co możliwe jest swobodne dostosowanie przekazu reklamowego do okoliczności. Pufy wykonane są z miękkiej pianki tapicerskiej i pokrowca zapinanego na rzepy. Występują w 5 rozmiarach.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/poufs", "Pufy"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["50x50", "http://printxl.pl/templates/Other_PUF50.pdf"],
			["45x45", "http://printxl.pl/templates/Other_PUF45.pdf"],
			["40x40", "http://printxl.pl/templates/Other_PUF40.pdf"],
			["35x35", "http://printxl.pl/templates/Other_PUF35.pdf"],
			["30x30", "http://printxl.pl/templates/Other_PUF30.pdf"]
		],
		advantages: ["ciekawa ekspozycja reklamy", "lekkie i łatwe do przestawienia"]
	},
	//[9] Listwy Plakatowe
	{
		group: "Pozostałe",
		name: "Listwy Plakatowe",
		description: "Elegancki wygląd i szybki montaż.",
		fullDescription: "Bardzo elegancki wygląd i szybki montaż wydruku, to dwie główne zalety prezentowanych tutaj listew plakatowych.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/strips", "Listwy Plakatowe"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [
			["40", "http://printxl.pl/templates/Stand_strips40.pdf"],
			["60", "http://printxl.pl/templates/Stand_strips60.pdf"],
			["85", "http://printxl.pl/templates/Stand_strips85.pdf"],
			["100", "http://printxl.pl/templates/Stand_strips100.pdf"],
			["120", "http://printxl.pl/templates/Stand_strips120.pdf"],
			["150", "http://printxl.pl/templates/Stand_strips150.pdf"],
			["200", "http://printxl.pl/templates/Stand_strips200.pdf"]
		],
		advantages: [
			"duży wybór szerokości – możliwość wykonania listew pod wymiar klienta",
			"możliwość montażu do ściany lub sufitu",
			"gruby profil wykonany z aluminium anodowanego"
		]
	},
	//[10] Parawany
	{
		group: "Pozostałe",
		name: "Parawany",
		description: "Parawan na plaże to nieodzowny atrybut nadmorskiego urlopowicza.",
		fullDescription:
			"Parawan na plaży, to nieodzowny atrybut nadmorskiego urlopowicza. Taka forma reklamy, nawet w tak nietypowych warunkach, pozwoli na ciekawe i efektowne zaprezentowanie Twojej firmy lub usługi. Parawany wykonujemy na tej samej tkaninie co leżaki. Ponadto, parawany występują w kilku rozmiarach.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/windbreak", "Parawany"]
		},
		recommended: [
			{
				url: "/materials/textiles/#polim",
				materialName: "Poliester Monaco"
			},
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["6 segmentów", "http://printxl.pl/templates/Other_PAR6.pdf"],
			["5 segmentów", "http://printxl.pl/templates/Other_PAR5.pdf"],
			["4 segmenty", "http://printxl.pl/templates/Other_PAR4.pdf"],
			["3 segmenty", "http://printxl.pl/templates/Other_PAR3.pdf"]
		],
		advantages: ["idealna ochrona przed wiatrem na plaży"]
	},
	//[11] Naklejka
	{
		group: "Pozostałe",
		name: "Naklejka",
		description: "Dowolny kształt i wymiar. Możliwość laminowania dla poprawy odporności.",
		fullDescription:
			"Podczas tworzenia naklejek istnieje duża dowolność wykończenia. Folie można wyciąć do pożądanego formatu, ale również do dowolnego kształtu za pomocą plotera tnącego. Warto wiedzieć, że najmniejszy możliwy do wycięcia element, może mieć 5x5 mm. Istnieje również możliwość wykonania naklejki dwustronnej, która idealnie sprawdzi się na przezroczystych powierzchniach.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/sticker", "Naklejka wycięta do kształtu"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=13"]],
		advantages: ["trwały druk", "efektowny wygląd", "długotrwała ekspozycja", "możliwość laminowania"]
	}
];
// Nowości PL
export const NewProductsPL = [
	//[0] Maska ochronna z opaską
	// {
	// 	group: "Nowości",
	// 	name: "Maska ochronna z opaską",
	// 	description: "Higieniczna opaska z osłoną twarzy.",
	// 	fullDescription:
	// 		"Maska ochronna z osłoną wykonaną z bezbarwnego poliwęglanu mocowaną na pasku z możliwością regulacji. Pasek posiada miękką piankę która pozwala na lepsze dopasowanie oraz wpływa na komfort użytkowania. Używanie maski ochronnej ryzyko kontaktu z zarazkami. Termin dostawy 6 dni.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Strona główna"],
	// 		crumbs2: ["/products/new", "Nowości"],
	// 		crumbs3: ["/products/new/mask", "Maska ochronna z opaską"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Wielokrotnego użytku",
	// 		"Bezbarwna szyba z polipropyleny grubości 0,8 mm",
	// 		"Opaska z czarnego polipropylenu z płynną regulacją bez użycia gumek dociskowych",
	// 		"Odporna na środki dezenfekujące na bazie alkoholu",
	// 		"Komfortowa w noszeniu dzięki miękkiej piance oraz niskiej wadze",
	// 		"Możliwość wymiany szyby",
	// 		"Wymiar szyby na płasko 35/27 cm"
	// 	]
	// },
	//[1] Maska ochronna z okularami
	// {
	// 	group: "Nowości",
	// 	name: "Maska ochronna z okularami",
	// 	description: "Okulary z osłoną chroniącą twarz.",
	// 	fullDescription:
	// 		"Okulary ochronne z osłoną wykonaną z bezbarwnego poliwęglanu. Używanie maski ochronnej zmniejsza ryzyko kontaktu z zarazkami. Termin dostawy 6 dni.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Strona główna"],
	// 		crumbs2: ["/products/new", "Nowości"],
	// 		crumbs3: ["/products/new/mask-with-glasses", "Maska ochronna z okularami"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Wielokrotnego użytku",
	// 		"Bezbarwna szyba z polipropyleny grubości 0,5 mm",
	// 		"Okulary w uniwersalnym rozmiarze",
	// 		"Szyba odporna na środki dezenfekujące na bazie alkoholu",
	// 		"Możliwość wymiany szyby",
	// 		"Wymiar szyby na płasko 32/25 cm"
	// 	]
	// },
	//[2] HomeConference [teraz 0]
	{
		group: "Nowości",
		name: "Ścianka Konferencyjna",
		description: "Wydziel swoją przestrzeń HOME OFICE.",
		fullDescription:
			"Ścianki reklamowe to idealna forma prezentacji firmy. Sprawdzą się jako tło do zdjęć lub nagrań. Co ważne, wszystkie oferowane przez nas rodzaje ścianek są bardzo proste w montażu oraz łatwe w transporcie.",
		fullDescription2:
			"Używając SKYPE podczas HOME OFICE możesz efektownie zareklamować swoją firmę. Ścianki wyróżnia lekka konstrukcja, a przy tym bardzo duża powierzchnia prezentacji grafiki. Wydruk zakłada się na zasadzie naciągania skarpety. Wymiary poniżej są jedynie tymi najczęściej wybieranymi. W przypadku zainteresowania szerszą ścianką prosimy o kontakt.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/new", "Nowości"],
			crumbs3: ["/products/new/homeConference", "Ścianka Konferencyjna"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [
			["3.0", "http://printxl.pl/templates/Wall_Smart_line_30.pdf"],
			["2.5", "http://printxl.pl/templates/Wall_Smart_line_24.pdf"]
		],
		advantages: ["niska cena", "dwustronna grafika", "szybki montaż", "torba transportowa w zestawie"]
	},
	//[3] Baner na balkon teraz [1]
	{
		group: "Nowości",
		name: "Baner na balkon",
		description: "Ozdób i zabezpiecz swój balkon.",
		fullDescription:
			"Baner na balkonie posiada wiele funkcji. Odpowiednia grafika potrafi świetnie wpasować się w kolor budynku i  jednocześnie zwiększyć prywatność lokatorów mieszkania. Baner można zamontować na wiele sposób. Rekomendujemy wykorzystanie rzepów lub oczek. W przypadku rzepów należy doliczyć odpowiedni fragment materiału na zawinięcie (przykład zawinięcia na zdjęciach). Istnieje możliwość zadruku dwustronnego, z dwiema różnymi grafikami.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/new", "Nowości"],
			crumbs3: ["/products/new/balcony", "Baner na balkon"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Baner Powlekany"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Blockout"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#3"]],
		advantages: ["możliwy druk dwustronny", "długotrwała ekspozycja"]
	},
	//[4] Maseczka
	// {
	// 	group: "Nowości",
	// 	name: "Maseczka na twarz",
	// 	description: "Maseczka na twarz z dowolnym nadrukiem.",
	// 	fullDescription:
	// 		"Dwuwarstwowa maska z delikatniej poliestrowej tkaniny oraz filcowego wnętrza z kieszonką umożliwiającą zamontowanie dodatkowego filtra. Solidne wykonanie i druk sublimacyjny pozwala na wielokrotne pranie. Maseczka posiada gumki do założenia na uszy.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Strona główna"],
	// 		crumbs2: ["/products/new", "Nowości"],
	// 		crumbs3: ["/products/new/mask-small", "Maseczka na twarz"]
	// 	},
	// 	recommended: [],
	// 	template: [],
	// 	advantages: ["Wielokrotnego użytku", "Możliwość prania", "Solidne wykonanie", "Dowolna grafika", "Kieszeń na dodatkowy filtr"]
	// }
];
// Trybunki PL
export const tribunesPL = [
	//[0] Desq0
	{
		group: "Trybunki",
		name: "Desq 0",
		description: "Bardzo prosta konstrukcja: podstawa, blat i specjalny panel PCV.",
		fullDescription:
			"Proponowane przez nas trybunki Desq, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"System Desq 0 składa się z blatu i podstawy, połączonych ze sobą brytem PCV, który montowany jest za pomocą rzepów. Co ważne, złożenie i rozłożenie tych trybunek zajmuje nie więcej niż minutę, a lekkość konstrukcji ułatwia transport.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/desq-0", "Desq 0"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Desq0", "http://printxl.pl/templates/Counter_Desq_0.pdf"]],
		advantages: ["niska cena", "szybki montaż", "lekka konstrukcja", "torba i tuba na grafikę w komplecie"]
	},
	//[1] Desq 1
	{
		group: "Trybunki",
		name: "Desq 1",
		description: "Bardzo prosta konstrukcja: podstawa, blat i specjalny panel PCV.",
		fullDescription:
			"Proponowane przez nas trybunki Desq, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"System Desq 1 składa się z blatu i podstawy, połączonych ze sobą brytem PCV, który montowany jest za pomocą rzepów. Co ważne, złożenie i rozłożenie tych trybunek zajmuje nie więcej niż minutę, a lekkość konstrukcji ułatwia transport.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/desq-1", "Desq 1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Desq1", "http://printxl.pl/templates/Counter_Desq_1.pdf"]],
		advantages: ["niska cena", "szybki montaż", "lekka konstrukcja", "torba i tuba na grafikę w komplecie"]
	},
	//[2] Desq2
	{
		group: "Trybunki",
		name: "Desq 2",
		description: "Bardzo prosta konstrukcja: podstawa, blat i specjalny panel PCV.",
		fullDescription:
			"Proponowane przez nas trybunki Desq, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"System Desq 2 składa się z blatu i podstawy, połączonych ze sobą brytem PCV, który montowany jest za pomocą rzepów. Co ważne, złożenie i rozłożenie tych trybunek zajmuje nie więcej niż minutę, a lekkość konstrukcji ułatwia transport.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/desq-2", "Desq 2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Desq2", "http://printxl.pl/templates/Counter_Desq_2.pdf"]],
		advantages: ["niska cena", "szybki montaż", "lekka konstrukcja", "torba i tuba na grafikę w komplecie"]
	},
	//[3] Desq3
	{
		group: "Trybunki",
		name: "Desq 3",
		description: "Bardzo prosta konstrukcja: podstawa, blat i specjalny panel PCV.",
		fullDescription:
			"Proponowane przez nas trybunki Desq, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"System Desq 3 składa się z blatu i podstawy, połączonych ze sobą brytem PCV, który montowany jest za pomocą rzepów. Co ważne, złożenie i rozłożenie tych trybunek zajmuje nie więcej niż minutę, a lekkość konstrukcji ułatwia transport.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/desq-3", "Desq 3"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Desq3", "http://printxl.pl/templates/Counter_Desq_3.pdf"]],
		advantages: ["niska cena", "szybki montaż", "lekka konstrukcja", "torba i tuba na grafikę w komplecie"]
	},
	//[4] Express
	{
		group: "Trybunki",
		name: "Express",
		description: "Konstrukcja pop-up z tekstylną grafiką montowaną na rzep.",
		fullDescription:
			"Proponowane przez nas trybunki Express, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Trybunka Express jest idealnym uzupełnieniem ścianki Velcro - grafika również montowana jest za pomocą rzepu, a rozłożenie systemu zajmuje tylko chwilę. W zestawie znajduje się także praktyczna półka.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Baner Matowy"
			}
		],
		template: [["Express", "http://printxl.pl/templates/Counter_Express.pdf"]],
		advantages: ["niska cena", "szybki montaż", "lekka konstrukcja", "torba i tuba na grafikę w komplecie"]
	},
	//[5] Popup 2x1
	{
		group: "Trybunki",
		name: "PopUp 2x1",
		description: "Konstrukcja pop-up z grafiką montowaną na panelu pcv.",
		fullDescription:
			"Proponowane przez nas trybunki PopUp, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Ścianki PopUp charakteryzują się prostym montażem i lekką konstrukcją - nie inaczej jest w przypadku tego modelu. Tak jak w przypadku standardowej ścianki PopUp, grafika prezentowana jest na brytach PCV,  jednakże montuje się je do konstrukcji za pomoc magnesów.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/popup-2x1", "PopUp 2x1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["PopUp 2x1", "http://printxl.pl/templates/Counter_PopUp_2x1.pdf"]],
		advantages: ["stabilna konstrukcja", "atrakcyjny wygląd", "stelaż pop-up", "torba w zestawie"]
	},
	//[6] Popup 2x2
	{
		group: "Trybunki",
		name: "PopUp 2x2",
		description: "Konstrukcja pop-up z grafiką montowaną na panelu pcv.",
		fullDescription:
			"Proponowane przez nas trybunki PopUp, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Ścianki PopUp charakteryzują się prostym montażem i lekką konstrukcją - nie inaczej jest w przypadku tego modelu. Tak jak w przypadku standardowej ścianki PopUp, grafika prezentowana jest na brytach PCV,  jednakże montuje się je do konstrukcji za pomoc magnesów.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/popup-2x2", "PopUp 2x2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["PopUp 2x2", "http://printxl.pl/templates/Counter_PopUp_2x2.pdf"]],
		advantages: ["stabilna konstrukcja", "atrakcyjny wygląd", "stelaż pop-up"]
	},
	//[7] Silic Oval
	{
		group: "Trybunki",
		name: "Silic Oval",
		description: "Niepowtarzalny kształt dzięki grafice tekstylnej z taśmą silikonową.",
		fullDescription:
			"Proponowane przez nas trybunki Silic, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Domeną trybunek Silic jest ich bardzo solidna i stabilna konstrukcja. W tym systemie grafikę montuje się za pomocą taśmy silikonowej, a dzięki zastosowaniu tkaniny, jako nośnika grafiki, trybunkę można podświetlić od wewnątrz. Tym co wyróżnia trybunkę Silic Oval jest jest niezwykły kształt.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/silic-oval", "Silic Oval"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [["Silic Oval", "http://printxl.pl/templates/Counter_Silic_oval.pdf"]],
		advantages: ["stabilna konstrukcja", "efektowny wygląd", "możliwość podświetlania od wewnątrz", "wzmocniona torba w komplecie"]
	},
	//[8] Silic Rectangle
	{
		group: "Trybunki",
		name: "Silic Rectangle",
		description: "Niepowtarzalny kształt dzięki grafice tekstylnej z taśmą silikonową.",
		fullDescription:
			"Proponowane przez nas trybunki Silic, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Domeną trybunek Silic jest ich bardzo solidna i stabilna konstrukcja. W tym systemie grafikę montuje się za pomocą taśmy silikonowej, a dzięki zastosowaniu tkaniny, jako nośnika grafiki, trybunkę można podświetlić od wewnątrz.Tym co wyróżnia trybunkę Silic Rectangle jest jest niezwykły kształt.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/silic-rectangle", "Silic Rectangle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [
			["Silic Rectangle", "http://printxl.pl/templates/Counter_Silic_rectangle.pdf"],
			["Silic XXL", "http://printxl.pl/templates/Counter_Silic_rectangleXXL.pdf"]
		],
		advantages: ["stabilna konstrukcja", "efektowny wygląd", "możliwość podświetlania od wewnątrz", "wzmocniona torba w komplecie"]
	},
	//[9] Silic Triangle
	{
		group: "Trybunki",
		name: "Silic Triangle",
		description: "Niepowtarzalny kształt dzięki grafice tekstylnej z taśmą silikonową.",
		fullDescription:
			"Proponowane przez nas trybunki Silic, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Domeną trybunek Silic jest ich bardzo solidna i stabilna konstrukcja. W tym systemie grafikę montuje się za pomocą taśmy silikonowej, a dzięki zastosowaniu tkaniny, jako nośnika grafiki, trybunkę można podświetlić od wewnątrz.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/silic-triangle", "Silic Triangle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Strecz"
			}
		],
		template: [["Silic Triangle", "http://printxl.pl/templates/Counter_Silic_triangle.pdf"]],
		advantages: ["stabilna konstrukcja", "efektowny wygląd", "możliwość podświetlania od wewnątrz", "wzmocniona torba w komplecie"]
	},
	//[10] Upper
	{
		group: "Trybunki",
		name: "Upper",
		description: "Nie wymaga dodatkowego montażu.",
		fullDescription:
			"Proponowane przez nas trybunki Upper, są idealnym nośnikiem reklamy, świetnie sprawdzą się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu są one bardzo popularne na wielu rynkach.",
		fullDescription2:
			"Trybunka Upper w całości wykonana została z płyty PCV. Ponadto, w komplecie znajduje się duża torba transportowa - trybunka dostarczana jest w jednym, złożonym elemencie, dlatego nie wymaga ona dodatkowego montażu.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/upper", "Upper"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Upper", "http://printxl.pl/templates/Counter_Upper.pdf"]],
		advantages: ["niska cena", "lekka konstrukcja", "nie wymaga montażu"]
	},
	//[11] Upper Plus
	{
		group: "Trybunki",
		name: "Upper Plus",
		description: "Najpopularniejsze wykończenie. Zapewnia wytrzymałość i szybki montaż.",
		fullDescription:
			"Proponowane przez nas trybunki promocyjne świetnie sprawdzają się w trakcie sprzedaży bezpośredniej, na różnego rodzaju promocjach i degustacjach. Dzięki prostocie montażu mają one bardzo dużą popularność na wielu rynkach.",
		fullDescription:
			"System Desq 2 składa się z blatu i podstawy połączonych brytem PCV, który montowany jest za pomocą rzepów. Wychodząc naprzeciw potrzebom klientów, do trybunki Desq 2, dodaliśmy podwyższony (na stelażu aluminiowym) panel z PCV, dzięki któremu Twoje stoisko z pewnością będzie bardziej widoczne. Co ważne, złożenie i rozłożenie tych trybunek zajmuje nie więcej niż minutę, a lekkość konstrukcji ułatwia transport.",
		breadcrumbs: {
			crumbs1: ["/", "Strona główna"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/upper-plus", "Upper Plus"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Folia Monomeryczna"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Folia Polimerowa"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Folia Wylewana"
			}
		],
		template: [["Upper Plus", "http://printxl.pl/templates/Counter_UpperPlus.pdf"]],
		advantages: ["niska cena", "szybki montaż", "lekka konstrukcja", "torba i tuba na grafikę w komplecie"]
	}
];

// mainPagePL
export const mainPagePL = [
	confectionsPL[0],
	flagsPL[0],
	flagsPL[3],
	wallsPL[13],
	othersPL[0],
	standsPL[7],
];
