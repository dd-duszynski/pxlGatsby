// ProductView, Modal, DTP
export const generalDE = [
	"Hast Du Interesse? Schreib an uns.",
	"Vorteile:",
	"Empfohlene Stoffe:",
	"DTP- Anleitung:",
	"Beispielsabmessungen [CM]:",
	"Druckdatenvorbereitung:",
	"Temat",
	"Imię",
	"E-mail",
	"Wiadomość",
	"Wyślij",
	"Herunterladen"
];

// -----------------------------------
// Wykończenia DE
export const confectionsDE = [
	//[0] Zgrzew i Oczkowanie
	{
		group: "Banner",
		name: "Saum und Ösen",
		description: "Die beliebteste Konfektionierung, die Haltbarkeit und schnelle Montage gewährleistet",
		fullDescription:
			"Zwei Schichten des Stoffes sind zusammengeschweißt, um Ränder zu verstärken. Am Ränder sind Ösen gemacht. Diese Konfektionierung ermöglicht  Montage des Banners fast überall, ohne Angst zu haben, es zu zerreißen.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Banner"],
			crumbs3: ["/products/banners/eyes", "Saum und Ösen"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#mesh",
				materialName: "Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=6"]],
		advantages: ["Einfache Montage", "Universalwerbung", "Ösen aus verzinktem Stahl"]
	},
	//[1] Wycięcie do formatu
	{
		group: "Banner",
		name: "Zuschnitt auf Format",
		description: "Die einfachste Konfektionierung. Zuschnitt des Stoffes auf Format.",
		fullDescription:
			"Es besteht darin, den Ausdruck auf das vom Kunden gewünschte Maß auszuschneiden. Es wird für Ausdrucke verwendet, die in speziellen Systemen oder direkt auf der Oberfläche montiert sind. Bei Vinylmaterialien ist es möglich die Ränder mit Ösen zu versehen. In diesem Fall empfehlen wir jedoch, ein Saum zusätzlich zu machen, der die Ränder verstärkt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Banner"],
			crumbs3: ["/products/banners/format", "Zuschnitt auf Format"]
		},
		recommended: [
			{
				url: "/materials",
				materialName: "Vinyls"
			},
			{
				url: "/materials/foils",
				materialName: "Folien"
			},
			{
				url: "/materials/flat",
				materialName: "Platten"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=5"]],
		advantages: ["Präzises Ausschnitt", "Glatte Ränder "]
	},
	//[2] Keder
	{
		group: "Banner",
		name: "Keder",
		description: "Konfektionierung für ein System, die Stabilität und attraktives Aussehen garantiert.",
		fullDescription:
			"Keder ist ein Silikonschnur (7 mm Durchmesser), die mit Polyesterband mit sehr hohem Wiederstandsfähigkeit geflochten ist. Nach dem Nähen des Keders kann der Ausdruck in speziellen Aluminiumkonstruktionen montiert werden. Die Stabilität und attraktives Erscheinungsbild der Werbung gewährleisten.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Banner"],
			crumbs3: ["/products/banners/keder", "Keder"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#mesh",
				materialName: "Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=7"]],
		advantages: ["Lebensdauer", "Gute Stablilität"]
	},
	//[3] Rękaw
	{
		group: "Banner",
		name: "Hohlsaum",
		description: "Wenn Sie ein Banner an einer prominenten Stelle aufhängen müssen.",
		fullDescription:
			"Wenn wir Rohre oder Holzstab verwenden möchten, um die Werbung aufzuhängen, ist es am besten, einen Tunnel zu machen. Zum Beispiel kann man ein Beschwerungselement im Tunnel unten platzieren, um welliges Stoff zu verhindern. Bei der Vorbereitung der Datei empfehlen wir, besonders auf Stelle des Nähens zu achten. Naht soll nicht an wichtige Elemente der Grafik werden.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Banner"],
			crumbs3: ["/products/banners/sleeve", "Hohlsaum"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#mesh",
				materialName: "Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=9"]],
		advantages: ["Möglichkeit der Exposition 'in der Höhe'", "Einfache Installation"]
	},
	//[4] Taśma Silikonowa
	{
		group: "Banner",
		name: "Silikonband",
		description: "Silikonband für ein spezielles System. Möglichkeit der hinterleuchtung für einen besseren Effekt.",
		fullDescription:
			"Konfektionierung mit Silikonband wird am häufigsten bei beleuchtete Werbung verwendet. An den Rändern der Grafik ist ein paar Milimeter dickes Silikonband aufgenäht. So festgestellter Banner wird in speziellen Rillen des Systems platziert.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Banner"],
			crumbs3: ["/products/banners/tape", "Silikonband"]
		},
		recommended: [
			{
				url: "/materials/decorative/#arth",
				materialName: "Artist"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Satin"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=8"]],
		advantages: ["Permanenter Druck", "Effektives Aussehen", "Möglichkeit der Beleuchtung"]
	},
	//[5] Rzep
	{
		group: "Banner",
		name: "Klettverschluss",
		description: "Konfektionierung, die einfache Grafikwechsel ermöglicht.",
		fullDescription:
			"Klettverschluss ermöglicht schnelles und einfaches Ersetzen des Druckes. Flauschband ist standardmäßig auf der Rückseite des Banners eingenäht. Selbstklebendes Klettband kann man auf eine ebene Fläche kleben.",
		fullDescription2:
			"Ausdruck mit zwei Arten von eingenähtem Klettverschluss (an gegenüberliegenden Enden), kann z.B. rundum Säulen montiert werden. Klettverschluss ist bei Palettenhüssen verwendet.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Banner"],
			crumbs3: ["/products/banners/velcro", "Klettverschluss"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=7"]],
		advantages: ["Einfache Montage", "Viele Möglichkeiten der Anwendung"]
	}
];

// Flagi DE
export const flagsDE = [
	//Beachflags [0]
	{
		group: "Flaggen",
		name: "Beachflags",
		description: "Die beliebteste Art von Flagge. Ein Mast für viele Formen.",
		fullDescription:
			"Flaggen bestehen aus Materialien mit Brandschutzzertifikat B1. Das am häufigsten gewählte Material ist Flaggenmaterial – sehr haltbar, unter anderem zum Waschen in einer Waschmaschine geeignet. Ein weiteres sehr beliebtes Material ist Mesh Flag – luftdurchlässig und mehr lichtdurchlässig.",
		fullDescription2:
			"Beachflags sind eine der am häufigsten ausgewählten Produkte unserer Kunden. Sie treten in einigen Formen und Größen. Unser Angebot umfasst auch Fahnenmasten,die in Standard – und Budgettypen unterteilt sind. Standardmasten sind aus Glasfaser und Budgetmasten aus Aluminium und Glasfaser gefertigt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/flags", "Flaggen"],
			crumbs3: ["/products/flags/beachflags", "Beachflags"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Flaggenmesh"
			}
		],
		template: [
			//BG
			["Budget F (Größe-S)", "http://printxl.pl/templates/F-S_BG.pdf"],
			["Budget F (Größe-M)", "http://printxl.pl/templates/F-M_BG.pdf"],
			["Budget F (Größe-L)", "http://printxl.pl/templates/F-L_BG.pdf"],
			["Budget F (Größe-XL)", "http://printxl.pl/templates/F-XL_BG.pdf"],
			["Budget S (Größe-S)", "http://printxl.pl/templates/S-S_BG.pdf"],
			["Budget S (Größe-M)", "http://printxl.pl/templates/S-M_BG.pdf"],
			["Budget S (Größe-L)", "http://printxl.pl/templates/S-L_BG.pdf"],
			["Budget S (Größe-XL)", "http://printxl.pl/templates/S-XL_BG.pdf"],
			["Budget SP (Größe-S)", "http://printxl.pl/templates/SP-S_BG.pdf"],
			["Budget SP (Größe-M)", "http://printxl.pl/templates/SP-M_BG.pdf"],
			["Budget SP (Größe-L)", "http://printxl.pl/templates/SP-L_BG.pdf"],
			["Budget SP (Größe-XL)", "http://printxl.pl/templates/SP-XL_BG.pdf"],
			//ST
			["Standard F (Größe-S)", "http://printxl.pl/templates/F-S_ST.pdf"],
			["Standard F (Größe-M)", "http://printxl.pl/templates/F-M_ST.pdf"],
			["Standard F (Größe-L)", "http://printxl.pl/templates/F-L_ST.pdf"],
			["Standard F (Größe-XL)", "http://printxl.pl/templates/F-XL_ST.pdf"],
			["Standard S (Größe-S)", "http://printxl.pl/templates/S-S_ST.pdf"],
			["Standard S (Größe-M)", "http://printxl.pl/templates/S-M_ST.pdf"],
			["Standard S (Größe-L)", "http://printxl.pl/templates/S-L_ST.pdf"],
			["Standard S (Größe-XL)", "http://printxl.pl/templates/S-XL_ST.pdf"],
			["Standard SP (Größe-S)", "http://printxl.pl/templates/SP-S_ST.pdf"],
			["Standard SP (Größe-M)", "http://printxl.pl/templates/SP-M_ST.pdf"],
			["Standard SP (Größe-L)", "http://printxl.pl/templates/SP-L_ST.pdf"],
			["Standard SP (Größe-XL)", "http://printxl.pl/templates/SP-XL_ST.pdf"],
			["Standard SS (Größe-S)", "http://printxl.pl/templates/SS-S_ST.pdf"],
			["Standard SS (Größe-M)", "http://printxl.pl/templates/SS-M_ST.pdf"],
			["Standard SS (Größe-L)", "http://printxl.pl/templates/SS-L_ST.pdf"],
			["Standard SS (Größe-XL)", "http://printxl.pl/templates/SS-XL_ST.pdf"],
			["Standard SW (Größe-S)", "http://printxl.pl/templates/SW-S_ST.pdf"],
			["Standard SW (Größe-M)", "http://printxl.pl/templates/SW-M_ST.pdf"],
			["Standard SW (Größe-L)", "http://printxl.pl/templates/SW-L_ST.pdf"],
			["Standard SW (Größe-XL)", "http://printxl.pl/templates/SW-XL_ST.pdf"]
		],
		advantages: ["Dauerhafter Druck", "Lebendige Farben", "Ein Mast für viele Formen"]
	},
	//Beachflag H [1]
	{
		group: "Flaggen",
		name: "Beachflaga H",
		description: "Ein einfaches Beachflag mit große Werbefläche.",
		fullDescription:
			"Flaggen bestehen aus Materialien mit Brandschutzzertifikat B1. Das am häufigsten gewählte Material ist Flaggenmaterial – sehr haltbar, unter anderem zum Waschen in einer Waschmaschine geeignet. Ein weiteres sehr beliebtes Material ist Mesh Flag – luftdurchlässig und mehr lichtdurchlässig.",
		fullDescription2:
			"Diese Form von Beachflag ist so beliebt wie Standardformen, sondern der Unterschied in ihrem Aussehen ist deutlich sichtbar. Bei Beachflags sind vertikale Masten mit Glasfaserspitze verwendet, die sich in die Form eines Beachflag biegt. Im Gegensatz dazu hat Beachflag H einen Mast, der vollständig aus Aluminium besteht, was eine rechteckige Form verleiht.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/flags", "Flaggen"],
			crumbs3: ["/products/flags/beachflags-h", "Beachflags H"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Flaggenmesh"
			}
		],
		template: [
			["Budget H (Größe-S)", "http://printxl.pl/templates/H-S_BG.pdf"],
			["Standard H (Größe-S)", "http://printxl.pl/templates/H-S_ST.pdf"],
			["Standard H (Größe-M)", "http://printxl.pl/templates/H-M_ST.pdf"],
			["Standard H (Größe-L)", "http://printxl.pl/templates/H-L_ST.pdf"],
			["Standard H (Größe-XL)", "http://printxl.pl/templates/H-XL_ST.pdf"]
		],
		advantages: ["größerer Bereich für Grafik", "schnelle und einfache Montage", "Mast komplett aus Aluminium"]
	},
	//Sail [2]
	{
		group: "Flaggen",
		name: "Sail",
		description: "Flaggenmaterial wird zwischen zwei Masten auf einer rotierenden Basis gespannt.",
		fullDescription:
			"Flaggen bestehen aus Materialien mit Brandschutzzertifikat B1. Das am häufigsten gewählte Material ist Flaggenmaterial – sehr haltbar, unter anderem zum Waschen in einer Waschmaschine geeignet. Ein weiteres sehr beliebtes Material ist Mesh Flag – luftdurchlässig und mehr lichtdurchlässig.",
		fullDescription2:
			"Sail sind neu in unserem Angebot. Mit dieser Art von Flagge können Sie Grafiken auf sehr effektive Weise präsentieren. Auf einer speziellen Basis sind zwei Glasfasermasten montiert, auf denen die Flagge angebracht ist. Dank dieser Lösung dreht sich die Flagge im Wind und zeigt alle ihre Vorteile auf.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/flags", "Flaggen"],
			crumbs3: ["/products/flags/sail", "Sail"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Flaggenmesh"
			}
		],
		template: [
			["Sail (Größe-XL)", "http://printxl.pl/templates/Flag_Sail_XL.pdf"],
			["Sail (Größe-L)", "http://printxl.pl/templates/Flag_Sail_L.pdf"],
			["Sail (Größe-M)", "http://printxl.pl/templates/Flag_Sail_M.pdf"],
			["Sail (Größe-S)", "http://printxl.pl/templates/Flag_Sail_S.pdf"]
		],
		advantages: ["Hohe Qualität", "Für alle Füße passend", "Drehkonstruktion"]
	},
	// Thunder [3]
	{
		group: "Flaggen",
		name: "Thunder",
		description: "Die ursprüngliche Form. Flaggenmaterial wird zwischen zwei Masten auf einer rotierenden Basis gespannt.",
		fullDescription:
			"Flaggen bestehen aus Materialien mit Brandschutzzertifikat B1. Das am häufigsten gewählte Material ist Flaggenmaterial – sehr haltbar, unter anderem zum Waschen in einer Waschmaschine geeignet. Ein weiteres sehr beliebtes Material ist Mesh Flag – luftdurchlässig und mehr lichtdurchlässig.",
		fullDescription2:
			"Thunder ist an Sail ähnlich . In diesem Fall wird die Flagge jedoch von Masten unterschiedlicher Größe geformt – der erste ist kleiner als der zweite. Masten sind aus Glasfaser gefertigt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/flags", "Flaggen"],
			crumbs3: ["/products/flags/thunder", "Thunder"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Flaggenmesh"
			}
		],
		template: [
			["Thunder (Größe-S/M)", "http://printxl.pl/templates/Flag_Thunder_S-M.pdf"],
			["Thunder (Größe-M/L)", "http://printxl.pl/templates/Flag_Thunder_M-L.pdf"],
			["Thunder (Größe-L/XL)", "http://printxl.pl/templates/Flag_Thunder_L-XL.pdf"]
		],
		advantages: ["Hohe Qualität", "Für alle Füße passend", "Drehkonstruktion"]
	}
];

// Ścianki DE
export const wallsDE = [
	//[0] W_Express Line
	{
		group: "Werbewände",
		name: "Express Line",
		description: "Gerade Textilwand mit Klettverschluss befestigt.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Der unbestreitbare Vorteil des Express Line Systems ist seine einfache Form und die leichte Installation - Sie können die Wand sogar in 3 Minuten entfalten lassen! Die Installation dieses Wandmodels erfolgt mit Klettverschlüssen.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Satin"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Line_3x3.pdf"],
			["3x3 mit Seiten", "http://printxl.pl/templates/Wall_Express_Line_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Line_3x4.pdf"],
			["3x4 mit Seiten", "http://printxl.pl/templates/Wall_Express_Line_3x4_side.pdf"]
		],
		advantages: ["günstiger Preis", "grafiken in einem Stück, ohne die Einteilung in Bahnen", "schnelle Montage mit Klettverschlüssen"]
	},
	//[1] W_ExpressArc
	{
		group: "Werbewände",
		name: "Express Arc",
		description: "Gebogene Textilwand auf Klettverschluss montiert.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Der unbestreitbare Vorteil des Express-Bogen-Systems ist seine einzigartige, gebogene Form und die einfache Installation - Sie können die Wand sogar in 3 Minuten entfalten lassen! Die Installation dieses Wandmodels erfolgt mit Klettverschlüssen.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/express-arc", "Express Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Satin"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Arc_3x3.pdf"],
			["3x3 mit Seiten", "http://printxl.pl/templates/Wall_Express_Arc_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Arc_3x4.pdf"],
			["3x4 mit Seiten", "http://printxl.pl/templates/Wall_Express_Arc_3x4_side.pdf"]
		],
		advantages: ["günstiger Preis", "Grafiken in einem Stück, ohne die Einteilung in Bahnen", "schnelle Montage mit Klettverschlüssen"]
	},
	//[2] W_Popup Line
	{
		group: "Werbewände",
		name: "PopUp Line",
		description: "Eine gerade Wand, die aus mit Folie bedeckten Paneelen besteht. Das beste Preis-Leistungs-Verhältnis.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"PopUp-Systeme bestehen aus zwei grundlegenden Teilen: einem Aluminiumrahmen und PVC-Platten, auf die Grafiken geklebt werden. Diese Platten werden mit speziellen Haken am Rahmen befestigt. Wichtig ist, dass der Rahmen extrem einfach zu montieren ist und dank der nach hinten gebogenen Seitenteile von vorne fast unsichtbar ist. PopUp Line hat eine einfache, klassische Form.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/popup", "PopUp Prosta"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Line_3x5.pdf"]
		],
		advantages: [
			"Beeindruckende grafische Darstellung",
			"Möglichkeit, ein Set zu kaufen, um Grafiken auszutauschen und ein Gestell für mehrere Grafiken zu verwenden",
			"Zusätzliche Optionen: Halogen- oder LED-Beleuchtung"
		]
	},
	//[3] W_PopupArc
	{
		group: "Werbewände",
		name: "PopUp Arc",
		description: "Bogen Wand, die aus mit Folie bedeckten Paneelen besteht. Das beste Preis-Leistungs-Verhältnis.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"PopUp-Systeme bestehen aus zwei grundlegenden Teilen: einem Aluminiumrahmen und PVC-Platten, auf die Grafiken geklebt werden. Diese Platten werden mit speziellen Haken am Rahmen befestigt. Wichtig ist, dass der Rahmen extrem einfach zu montieren ist und dank der nach hinten gebogenen Seitenteile von vorne fast unsichtbar ist. PopUp Arc hat eine einzigartige gebogene Form.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/popup-arc", "PopUp Łukowa"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Arc_3x5.pdf"]
		],
		advantages: [
			"Beeindruckende grafische Darstellung",
			"Möglichkeit, ein Set zu kaufen, um Grafiken auszutauschen und ein Gestell für mehrere Grafiken zu verwenden",
			"Zusätzliche Optionen: Halogen- oder LED-Beleuchtung"
		]
	},
	//[4] W_PopupMagnetic
	{
		group: "Werbewände",
		name: "PopUp Magnetische Wand - Line",
		description: "Extrem einfache Montage und Demontage einer Wand mit PVC-Platten. Die Tafeln sind mit Folie abgedeckt.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Im Gegensatz zu den Standardmodellen haben die Magnetwände ein ungewöhnliches System von Befestigungselementen mit in die Konstruktion eingebauten Magneten. Außerdem sind die Seitenwände nach hinten gebogen, so dass sie von vorne in 1/3 ihrer Breite sichtbar sind. Dieses Modell hat die Form eines Bogens.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/popup-magnetic", "PopUp Magnetische Wand - Line"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x5_ST.pdf"]
		],
		advantages: ["Stabile Konstruktion", "Zusätzliche Optionen: Halogen - oder LED-Beleuchtung", "Einfache Montage und Demontage"]
	},
	//[5] W_PopupMagneticArc
	{
		group: "Werbewände",
		name: "PopUp-Magnetisch Arc",
		description: "Extrem einfache Montage und Demontage einer Wand mit PVC-Platten. Die Tafeln sind mit Folie abgedeckt.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Im Gegensatz zu den Standardmodellen haben die Magnetwände ein ungewöhnliches System von Befestigungselementen mit in die Konstruktion eingebauten Magneten. Außerdem sind die Seitenwände nach hinten gebogen, so dass sie von vorne in 1/3 ihrer Breite sichtbar sind. Dieses Modell hat eine gerade Form.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/popup-magnetic-arc", "PopUp-Magnetisch Arc"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x5_ST.pdf"]
		],
		advantages: ["Stabile Konstruktion", "Einfache Montage und Demontage"]
	},
	//[6] W_PopupTwin
	{
		group: "Werbewände",
		name: "PopUp Twine",
		description: "Das beste Preis-Leistungsverhältnis und beidseitig. Die Tafeln sind mit Folie abgedeckt.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"PopUp-Systeme bestehen aus zwei grundlegenden Teilen: einem Aluminiumrahmen und PVC-Platten, auf die Grafiken geklebt werden. Diese Platten werden mit speziellen Haken am Rahmen befestigt. Wichtig ist, dass der Rahmen extrem einfach zu installieren ist. Dieses Modell ist eine perfekte Kombination aus höchster Qualität und einem äußerst wettbewerbsfähigen Preis. PopUp-Systeme sind einzigartig, weil die Grafiken von allen Seiten sichtbar sind.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/popup-twin", "PopUp Twine"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x5.pdf"]
		],
		advantages: ["Beidseitige grafische Darstellung", "Extrem leichtes Set", "Zusätzliche Optionen: Halogen- oder LED-Beleuchtung"]
	},
	//[7] W_Silic
	{
		group: "Werbewände",
		name: "Silic Line",
		description: "Der Ausdruck wird mit Silikonband montiert. Der Stoff auf einem sauberen Display-System.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Silikonwände sind eine Neuheit auf dem Markt. Das innovative System macht die Leichtbauweise so stabil, dass sie eine eindrucksvolle Präsentation der Werbung ermöglicht, die sich mit Hilfe von Silikonband einfach installieren lässt. Die Standardversion der Wand erlaubt es, Grafiken nur von vorne zu montieren, während die Twin-Version eine solche Möglichkeit an jeder Wand des Systems bietet.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/silic", "Silic"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_4x3.pdf"]
		],
		advantages: ["Grafiken in einem Teil", "Einfache Montage und Demontage", "Stabile Konstruktion", "Inklusive Tasche"]
	},
	//[8] W_SilicArc
	{
		group: "Werbewände",
		name: "Silic Arc",
		description: "Der Ausdruck wird mit Silikonband montiert. Der Stoff auf einem sauberen Display-System.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Silikonwände sind eine Neuheit auf dem Markt. Das innovative System macht die Leichtbauweise so stabil, dass sie eine eindrucksvolle Präsentation der Werbung ermöglicht, die sich mit Hilfe von Silikonband einfach installieren lässt. Die Standardversion der Wand erlaubt es, Grafiken nur von vorne zu montieren, während die Twin-Version eine solche Möglichkeit an jeder Wand des Systems bietet. Dieses Modell ist in einer einfachen Version erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/silic-arc", "Silic Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_4x3.pdf"]
		],
		advantages: ["Grafiken in einem Teil", "Einfache Montage und Demontage", "Stabile Konstruktion", "Inklusive Tasche"]
	},
	//[9] W_SilicLed
	{
		group: "Werbewände",
		name: "Silic Led Line",
		description: "Der Ausdruck wird mit Silikonband montiert. Der Stoff ist beleuchtet.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Was Silic Led Arc von anderen Wänden unterscheidet, ist das System, das durch seine LED-Hintergrundbeleuchtung hervorgehoben wurde. Hunderte von Glühbirnen verleihen dem präsentierten Druck eine einzigartige Wirkung. Wichtig ist, dass die Wand auf beiden Seiten mit Befestigungsstreifen versehen ist und bei Verwendung von Doppelvorhängen auch beidseitig bespannt werden kann. Dieses Modell ist in einer Bogenversion erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
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
		advantages: ["Ein spektakulärer Effekt", "Zweiseitige grafische Darstellung", "LED-Vorhänge", "Inklusive Tasche"]
	},
	//[10] W_SilicLedArc
	{
		group: "Werbewände",
		name: "Silic Led Arc",
		description: "Der Ausdruck wird mit Silikonband montiert. Der Stoff ist beleuchtet.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Was Silic Led Arc von anderen Wänden unterscheidet, ist das System, das durch seine LED-Hintergrundbeleuchtung hervorgehoben wurde. Hunderte von Glühbirnen verleihen dem präsentierten Druck eine einzigartige Wirkung. Wichtig ist, dass die Wand auf beiden Seiten mit Befestigungsstreifen versehen ist und bei Verwendung von Doppelvorhängen auch beidseitig bespannt werden kann. Dieses Modell ist in einer einfachen Version erhältlich",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
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
		advantages: ["Ein spektakulärer Effekt", "Beidseitige grafische Darstellung", "LED-Vorhänge", "Inklusive Tasche"]
	},
	//[11] W_SilicTwin
	{
		group: "Werbewände",
		name: "Silic Twin Line",
		description: "Der Ausdruck wird mit Silikonband montiert. Doppelseitige Wand.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Dieses System ist dafür ausgelegt, Grafiken von zwei Seiten zu präsentieren. Der Zusammenbau des Ausdrucks ist derselbe wie bei allen Wänden dieser Serie, d.h. mit Silikonband. Dieses Modell ist in einer Bogenversion erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/silic-twin", "Silic Twin Prosta"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_4x3.pdf"]
		],
		advantages: ["Beidseitige grafische Darstellung", "Einfache Montage und Demontage", "Stabile Konstruktion", "Inklusive Tasche"]
	},
	//[12] W_SilicTwinArc
	{
		group: "Werbewände",
		name: "Silic Twin Arc",
		description: "Der Ausdruck wird mit Silikonband montiert. Wand gebogen doppelseitig.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Dieses System ist dafür ausgelegt, Grafiken von zwei Seiten zu präsentieren. Das System der Montage des Ausdrucks ist das gleiche wie bei allen Wänden dieser Serie, d.h. die Verwendung von Silikonband. Dieses Modell ist in einer Bogenversion erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/silic-twin-arc", "Silic Twin Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_4x3.pdf"]
		],
		advantages: ["Zweiseitige grafische Darstellung", "Einfache Montage und Demontage", "Stabile Konstruktion", "Inklusive Tasche"]
	},
	//[13] W_Smart
	{
		group: "Werbewände",
		name: "Smart Line",
		description: "Leichte, kleine Ausführung. Das Material wird von der Oberseite des Systems aufgetragen.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Die Wände der Smart-Serie sind Produkte mit vielen Vorteilen. Sie zeichnen sich unter anderem durch Leichtbauweise und eine sehr große Fläche der grafischen Darstellung aus. Der Ausdruck wird über den Rahmen gespannt. Die Rahmenrohre haben einen Durchmesser von bis zu 32 mm.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/smart", "Smart"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_line_24.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_line_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_line_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_line_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_line_60.pdf"]
		],
		advantages: ["Günstiger Preis", "Doppelseitige Grafiken", "Schnelle Montage", "Inklusive Transporttasche"]
	},
	//[14] W_SmartArc
	{
		group: "Werbewände",
		name: "Smart Arc",
		description: "Leichte, kleine Ausführung. Das Material wird von der Oberseite des Systems aufgetragen.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Die vorgestellte Produktserie hat mehrere interessante Formen. In Arc sind dank der gewölbten Seiten einige der Grafiken auch von der Seite her sichtbar. Der Wandrahmen ist so profiliert, dass er keine zusätzlichen Stabilisierungsbeine benötigt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/smart-arc", "Smart Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_Arc_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_Arc_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_Arc_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_Arc_50.pdf"]
		],
		advantages: ["Doppelseitige Grafiken", "Schnelle Montage", "Eloxiertes Aluminium", "Inklusive Transporttasche"]
	},
	//[15] W_SmartS
	{
		group: "Werbewände",
		name: "Smart S",
		description: "Leichte, kleine Ausführung. Das Material wird von der Oberseite des Systems aufgetragen.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Smart-Wand ist im S-Form, die der Form eines Schlauchs ähnelt. Außerdem ist die gesamte Struktur aus eloxiertem Aluminium gefertigt. Es ist auch interessant zu wissen, dass die Grafiken beidseitig bedruckt werden können. Alle Smart-Wände sind in haltbaren Säcken verpackt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/smart-s", "Smart S"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_S_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_S_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_S_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_S_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_S_60.pdf"]
		],
		advantages: ["Beeindruckende Erscheinung", "Doppelseitige Grafiken", "Schnelle Montage", "Inklusive Transporttasche"]
	},
	//[16] W_SmartU
	{
		group: "Werbewände",
		name: "Smart U",
		description: "Leichte, kleine Konstruktion. Das Material wird von der Oberseite des Systems aufgetragen.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Diese Wand hat die Form eines Bogens in vertikaler Position. Es handelt sich um eine sehr interessante und beeindruckende Version des Produkts, die in dieser Serie herausragt. Die Beine sind im Set enthalten, wodurch das System extrem stabil ist.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/smart-u", "Smart U"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["3.0", "http://printxl.pl/templates/Wall_Smart_U_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_U_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_U_50.pdf"]
		],
		advantages: ["Beeindruckende Erscheinung", "Schnelle Montage", "Transporttasche im Set enthalten"]
	},
	//[17] W_Suxen
	{
		group: "Werbewände",
		name: "Suxen",
		description: "Einfaches, aber sehr geniales und beeindruckendes System.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Dieses System ist einfach, aber sehr genial und beeindruckend. DIe Stellega basiert auf dem klassischen Pop-up, und die Grafiken können auf ein Banner oder einen Stoff gedruckt und in den Ecken gestempelt werden. Aus solchen vorbereiteten Drucken können verschiedene Formen und Kompositionen erstellt werden.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/suxen", "Suxen"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["1 element", "http://printxl.pl/templates/Wall_Suxen.pdf"]],
		advantages: ["Einfache Montage und Demontage.", "Möglichkeit, interessante Formen zu schaffen", "Inklusive Transporttasche"]
	},
	//[18] W_Telescopic
	{
		group: "Werbewände",
		name: "Telescopic",
		description: "Die beliebteste Ausführung. Bietet Haltbarkeit und schnelle Installation.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie können sowohl als Branding-Element bei Messen oder Firmenfeiern als auch als Hintergrund für Fotos oder Aufnahmen verwendet werden. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Telescopic ist eine Reihe von Wänden, die für großflächige Bannergrafiken konzipiert sind. Diese Wände werden aufgrund ihrer Einfachheit, Stabilität und Flexibilität immer beliebter. Ihre Konstruktion basiert auf dem Prinzip von Teleskoprohren, so dass der Rahmen verstellbar ist und verschiedene Größen haben kann.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/walls", "Werbewände"],
			crumbs3: ["/products/walls/telescopic", "Telescopic"]
		},
		recommended: [
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			}
		],
		template: [["Telescopic", "http://printxl.pl/templates/Wall_Telescopic.pdf"]],
		advantages: ["Günstiger Preis", "Einfache Montage und Demontage", "Stabile Konstruktion", "Inklusive Tasche"]
	}
];

// Rollupy DE
export const rollupsDE = [
	//[0] Compact
	{
		group: "Rollups",
		name: "Compact",
		description: "Extrem leichtes und handliches RollUp-System.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Rollup Compact ist ein extrem leichtes und handliches System. Der Durchmesser von Kassette wurde von der klassischen Abmessung von 9,3 cm auf 8,3 cm reduziert. Das ist ein Produkt der Economy Class.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/compact", "Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: ["einfacher Transport", "Leiste Express Clip – schnelle und einfache Montage", "100 % eloxierte Aluminiumkassette"]
	},
	//[1] Standard
	{
		group: "Rollups",
		name: "Standard",
		description: "Bestseller in vielen Märkten.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Rollup Standard verfügt über einen Maststabilisator, was eine dauerhafte Grafikdarstellung gewährleistet. Außerdem enthält Set eine Leiste Express Clip, was eine schnelle und einfache Montage, als auch einen problemlosen Grafikaustausch ermöglicht. Dieses Rollup wird von unseren Kunden aufgrund des idealen Preis-Leistungs-Verhältnisses geschätzt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/standard", "Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
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
			"Stabile, starke Konstruktion aus 100% eloxiertem Aluminium",
			"Mast ist durch ein flexibles Seil verbunden, um den Verlust seiner Komponenten zu verhindern",
			"Leiste Express Clip – schnelle und einfache Montage"
		]
	},
	//[2] Classic
	{
		group: "Rollups",
		name: "Classic",
		description: "Eine verbesserte Version des Standardmodells.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Das ist ein neueres Modell des anerkannten Standardmodells. Neben dem Maststabilisator verfügt er auch über eine Rückwandverstärkung, die Stabilität und Langlebigkeit des Systems garantiert. Im Gegensatz zum Standardmodell, hat Classic Fußenden aus Kunststoff.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/classic", "Classic"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"Verstärkung der Rückwand mit Maststabilisator",
			"3M Band – sichere Grafikbefestigung am Wickelsystem",
			"Mast ist durch ein flexibles Seil verbunden, um den Verlust seiner Komponenten zu verhindern"
		]
	},
	//[3] Premium
	{
		group: "Rollups",
		name: "Premium",
		description: "Starke und stabile Konstruktion.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Diese Art von Rollups besteht aus viel dickerem Aluminium im Vergleich zu andere Systeme. Es ist eine sehr starke, solide und stabile Konstruktion, die durch eine Tragetasche ergänzt wird.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/premium", "Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"Dickes Aluminiumprofil",
			"Verbessertes Rollsystem",
			"3M Band zur Grafikbefestigung",
			"Verstärkung der Rückwand mit Maststabilisator"
		]
	},
	//[4] Pro
	{
		group: "Rollups",
		name: "Pro",
		description: "Das höchste Modell in der RollUp-Kategorie mit klassischer Kassettenform.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Rollup Pro ist das hochwertigste Modell aus der Rollups mit einem klassischen Kassettenform. Das bei der Herstellung dieses Modells verwendete außergewöhnlich dicke Aluminiumprofil garantiert höchste Produktqualität und langjährige Haltbarkeit.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/pro", "Pro"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
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
			"Erhältlich in der Größe  200x200",
			"Das dickste Aluminiumprofil",
			"3M Band zur Grafikbefestigung",
			"Die Mastspitze ragt nicht über die Grafik hinaus"
		]
	},
	//[5] Exclusive
	{
		group: "Rollups",
		name: "Exclusive",
		description: "RollUp in vielen Märkten anerkannt. Modernes Design.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"In vielen Märkten anerkanntes Rollup mit einem außergewöhnlich eleganten Erscheinungsbild, das als „Träne” bezeichnet wird. Es zeichnet sich durch langjährige Haltbarkeit und stabile Konstruktion aus.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/exclusive", "Exclusive"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
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
			"modernes, elegantes Aussehen",
			"Leiste Express Clip – schnelle und einfache Montage",
			"3M Band zur Grafikbefestigung",
			"Die Mastspitze ragt nicht über die Grafik hinaus",
			"Erhältlich in der Größe  200x200"
		]
	},
	//[6] Twin
	{
		group: "Rollups",
		name: "Twin",
		description: "Das zweiseitige Grundmodell.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Rollup Twin ist das Basismodell des doppelseitigen Rollups. Dieses System funktioniert gut, wenn auf beiden Seiten eine grafische Darstellung erforderlich ist.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/twin", "Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			"Möglichkeit der beidseitigen Darstellung des Druckes",
			"3M Band zur Grafikbefestigung",
			"Die Mastspitze ragt nicht über die Grafik hinaus",
			"Leiste Express Clip – schnelle und einfache Montage"
		]
	},
	//[7] Twin Plus
	{
		group: "Rollups",
		name: "Twin Plus",
		description: "Doppelseitiges Rollup in einer verbesserten Version.",
		fullDescription:
			"Rollup System ist eine der beliebtesten Werbelösungen. Das ist eine der kompaktesten Werbeformen – zeichnet sich durch einfache Bedienung und bequeme Transportmöglichkeiten aus. Jedes Rollup besteht aus Druck, das in eine Aluminiumkassette verstecken kann und dreiteilige Stellage, der durch ein Gummiband verbunden ist. Rollups sind in eleganten, schwarzen Taschen mit bequemem Griff verpackt.",
		fullDescription2:
			"Twin Plus ist ein doppelseitiges System mit doppeltem Druck. Das vernickelte Fuß ist nicht nur das zweifelsfreie Schmuckstück, sondern vor allem die Systemstabilisierung. Dieses System ist auch in den Breiten 120 und 150 cm erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/twin-plus", "Twin Plus"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"Möglichkeit der beidseitigen Darstellung des Druckes",
			"Breite bis 150 cm",
			"Die Mastspitze ragt nicht über die Grafik hinaus",
			"Eleganter stabilisierender Fuß"
		]
	}
];

// Standy DE
export const standsDE = [
	//[0] L-Banner Premium
	{
		group: "Ständer",
		name: "L-Banner Premium",
		description: "Beliebtes L-Banner-System, Premiumklasse.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Sie heißen L-Ständer aus dem Buchstaben, die in ihrer Form einem Buchstaben ähneln. L-Banner Premium ist ein leichtes, praktisches und einfach zu bedienendes Ausstellungssystem. Es ist ein äußerst wirtschaftliches Werkzeug für die visuelle Kommunikation. Es ist ideal für Konferenzen, Shows, Ausstellungen und Verkaufsstellen. Es verwendet Aluminium-Bodenprofile von viel größerer Dicke als in der billigeren Version, wobei die Leichtigkeit des Systems erhalten bleibt und die Stabilität erhöht wird, wobei ein schneller Austausch der Platten möglich ist.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/l-banner-premium", "L-Banner Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
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
		advantages: ["Niedrige Kosten des Systems", "Einfache und schnelle Montage", "Ultraleicht", "Inklusive Tasche"]
	},
	//[1] L-Banner Premium Twin
	{
		group: "Ständer",
		name: "L-Banner Premium Twin",
		description: "Die Twin-Version ist, wie der Name schon sagt, bilateral.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Sie werden L-Stände genannt, da sie dem Buchstaben ähneln. Es ist ein leichtes, praktisches und einfach zu bedienendes Ausstellungssystem. Es ist ein äußerst wirtschaftliches Werkzeug für die visuelle Kommunikation. Es ist ideal für Konferenzen, Shows, Ausstellungen und Verkaufsstellen. Hier wurden die Aluminium-Bodenprofile verwendet, die viel dicker sind als in der billigeren Version, wobei die Leichtigkeit des Systems erhalten bleibt und die Stabilität erhöht wird, wobei ein schneller Austausch der Grafiken möglich ist.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/l-banner-premium-twin", "L-Banner Premium Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
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
		advantages: ["Zweiseitige grafische Darstellung", "Einfache und schnelle Montage", "Ultraleicht", "Inklusive Tasche"]
	},
	//[2] L-Banner Standard
	{
		group: "Ständer",
		name: "L-Banner Standard",
		description: "Sein Vorteil ist eine sehr leichte Konstruktion. Leicht zu transportieren und dennoch sehr stabil.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Sie heißen L-Ständer aus dem Buchstaben, die in ihrer Form einem Buchstaben ähneln. Es ist ein leichtes, praktisches und einfach zu bedienendes Ausstellungssystem. Es ist ein äußerst wirtschaftliches Werkzeug für die visuelle Kommunikation. Es ist ideal für Konferenzen, Shows, Ausstellungen und Verkaufsstellen. Das Aluminium-Bodenprofil sorgt für Stabilität und erleichtert den schnellen Austausch der Platten.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/l-banner-standard", "L-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
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
		advantages: ["Niedrige Systemkosten", "Einfache und schnelle Installation", "Ultraleicht", "Inklusive Tasche"]
	},
	//[3] Portal
	{
		group: "Ständer",
		name: "Portal",
		description: "Langlebige und robuste Konstruktion. Mit Silikonband montiertes Material.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Das Stand-Portal ist derzeit das beliebteste System zur Präsentation von Grafiken in Einkaufszentren und Schaufenstern. Wichtig ist, dass die extrem haltbare und solide Konstruktion eine lange Lebensdauer garantiert, und dank des Profils für Silikonband dauert die Montage und der Austausch von Grafiken nur einen Moment.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/portal", "Portal"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Portal", "http://printxl.pl/templates/Stand_Portal.pdf"]],
		advantages: [
			"Extrem stabile und dauerhafte Konstruktion",
			"Beidseitige grafische Darstellung",
			"Silikonbandprofil",
			"Sofortiger Austausch von Grafiken"
		]
	},
	//[4] Totem 1
	{
		group: "Ständer",
		name: "Totem 1",
		description: "Ein sehr beeindruckender Stand.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Dieses System ist für die Präsentation von Grafiken auf Stoffen konzipiert. Es zeichnet sich durch eine extrem einfache, leichte Konstruktion und schnelle Montage aus. Dank der Tatsache, dass der Stoff auf den Rahmen gespannt ist, kann der Stand ein- oder doppelseitige Grafiken präsentieren",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/totem-1", "Totem 1"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem1_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem1_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem1_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem1_150.pdf"]
		],
		advantages: ["Geringe Kosten des Systems", "Einfache und schnelle Montage", "Inklusive Tasche"]
	},
	//[5] Totem 2
	{
		group: "Ständer",
		name: "Totem 2",
		description: "Ein sehr beeindruckender Stand.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Dieses System ist für die Präsentation von Grafiken auf Stoffen konzipiert. Es zeichnet sich durch eine extrem einfache, leichte Konstruktion und schnelle Montage aus. Dank der Tatsache, dass der Stoff auf den Rahmen gespannt ist, kann der Stand ein- oder doppelseitige Grafiken präsentieren. Im Fall von Totem 2 werden die Füße durch eine Metallplatte ersetzt. Durch die Verwendung dieser Art von Basis ist das System stabiler.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/totem-2", "Totem 2"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem2_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem2_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem2_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem2_150.pdf"]
		],
		advantages: ["Geringe Kosten des Systems", "Einfache und schnelle Montage", "Inklusive Tasche"]
	},
	//[6] Totem 3
	{
		group: "Ständer",
		name: "Totem 3",
		description: "Ein sehr beeindruckender Stand.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Dieses Produkt wurde für Kunden entwickelt, die die Latex- oder Solventdrucktechnologie bevorzugen. Dank der Verwendung spezieller Haken wird Totem 3 sehr eindrucksvolle Grafiken präsentieren, die auf einem beliebten beschichteten Banner gedruckt werden. Auch in diesem Fall können die Grafiken - nach dem Druck auf Blockout-Material - auf beiden Seiten präsentiert werden.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/totem-3", "Totem 3"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem3_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem3_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem3_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem3_150.pdf"]
		],
		advantages: ["Druck auf einem beschichteten Banner", "Geringe Kosten", "Einfache und schnelle Montage", "Inklusive Tasche"]
	},
	//[7] Totem Plus
	{
		group: "Ständer",
		name: "Totem Plus",
		description: "Ideale Lösung für Veranstaltungen.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Eine ausgezeichnete Wahl für Unternehmen, die Präsentationsveranstaltungen in Form von Banketten, Events oder Cocktails organisieren. Dank der Tatsache, dass die Wand ein zusätzliches Regal hat, kann dieses Produkt als Cocktailtisch und Werbeträger in einem dienen. Wichtig ist, dass das System auf beiden Seiten Grafiken präsentiert.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/totem-plus", "Totem Plus"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Totem Plus", "http://printxl.pl/templates/Stand_Totem_PLUS.pdf"]],
		advantages: ["Praktisches Regal", "Zweiseitig", "Schnelle Montage", "Stellage und Tasche inklusive"]
	},
	//[8] X-Banner Compact
	{
		group: "Ständer",
		name: "X-Banner Compact",
		description: "Eine ökonomische Art, Ihre Werbung zu präsentieren.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Eine preiswerte Version des auf dem Markt beliebten Grafik-Präsentationssystems, das seinen Namen der charakteristischen Form des Buchstabens X verdankt. Dieses Modell der Wand besteht vollständig aus Fiberglas, dank dessen die Konstruktion ultraleicht, aber sehr stabil ist. Der X- Banner Compact ist eine einfache Möglichkeit, Ihre Grafiken auf eindrucksvolle Weise zu präsentieren.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/x-banner-compact", "X-Banner Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [
			["80x180", "http://printxl.pl/templates/Stand_Xban80.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Xban60.pdf"]
		],
		advantages: ["Niedrige Systemkosten", "Einfache und schnelle Installation", "Ultraleicht", "Inklusive Tasche"]
	},
	//[9] X-Banner Standard
	{
		group: "Ständer",
		name: "X-Banner Standard",
		description: "Höheres Modell des X-Banner-Systems.",
		fullDescription: "Ständer sind Systeme, die in ihrer Größe Roll-Ups ähneln, aber viel größere Möglichkeiten der Werbepräsenz bieten.",
		fullDescription2:
			"Der X-Banner-Standard ist ein höheres Modell des X-Banner-Systems. Es ist stabiler und haltbarer als seine Vorgänger. Darüber hinaus besteht es aus elegantem, korrosionsbeständigem Metall und ist dennoch ein ultraleichtes System. Dank seiner Einfachheit dauert das Auf- und Zusammenklappen nur wenige Sekunden.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/stands", "Ständer"],
			crumbs3: ["/products/stands/x-banner-standard", "X-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [
			["120x210", "http://printxl.pl/templates/Stand_Xban120.pdf"],
			["80x180", "http://printxl.pl/templates/Stand_Xban80.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Xban60.pdf"]
		],
		advantages: ["Hohe Qualität der Verarbeitung", "In einem größeren Format erhältlich: 120x210", "Einfach zu bedienen", "Ultraleicht"]
	}
];

// Pozostałe DE
export const othersDE = [
	//[0] Namioty
	{
		group: "Sonstige",
		name: "Zelte",
		description: "Der schnellste Weg zu einem Stand im Freien.",
		fullDescription:
			"Die Konstruktion unserer Zelte besteht aus Stahl oder Aluminium und ist in vier Größen erhältlich. Die Aluminiumversion ist sehr leicht und komfortabel, insbesondere bei häufigem Wechsel des Standplatzes. Die Stahlversion ist sehr haltbar und weiß pulverbeschichtet. Wichtig ist, dass die Grafiken auf ein spezielles Polyestergewebe gedruckt werden, das die grundlegenden Normen für die Wasserbeständigkeit erfüllt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/tent", "Zelte"]
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
		advantages: ["Das 3M-Band gewährleistet eine sichere Fixierung der Grafiken", "die Spitze des Mastes nicht über die Grafik hinausragt"]
	},
	//[1] Leżaki
	{
		group: "Sonstige",
		name: "Liegestühle",
		description: "Strände in einem einzigartigen Stil.",
		fullDescription:
			"Wir bieten zwei Arten von Liegestühlen an, mit oder ohne Holzarmlehnen. Als Sitzplatz wird Ihre Traumgrafik auf einen für solche Aufgaben idealen Stoff aufgezogen und gedruckt: Monaco-Polyester.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/sunbeds", "Liegestühle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#polim",
				materialName: "Stoff Monaco"
			},
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["Liegestühle", "http://printxl.pl/templates/Other_Sunbed.pdf"],
			["Liegestühle XXL", "http://printxl.pl/templates/Other_Sunbed_XXL.pdf"]
		],
		advantages: ["Die Möglichkeit eines einzigartigen Liegestuhles"]
	},
	//[2] O_PalletsCover
	{
		group: "Sonstige",
		name: "Abdeckung der Palette",
		description: "Ordnung mit Paletten und Werbung in einem.",
		fullDescription:
			"Langlebige und ästhetische Abdeckungen sind eine ideale Möglichkeit, Paletten mit Ihrer Werbung zu bedecken. Die Abmessungen der Abdeckungen hängen von den Abmessungen und der Anzahl der abzudeckenden Paletten ab. Palettenhüllen werden aus beschichtetem (holzbeständigem) Banner hergestellt - dem bestmöglichen Material für ihre Herstellung.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/pallets-cover", "Abdeckung der Palette"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [
			["7 paletten", "http://printxl.pl/templates/Other_Cover7.pdf"],
			["6 paletten", "http://printxl.pl/templates/Other_Cover6.pdf"],
			["5 paletten", "http://printxl.pl/templates/Other_Cover5.pdf"],
			["4 paletten", "http://printxl.pl/templates/Other_Cover4.pdf"],
			["3 paletten", "http://printxl.pl/templates/Other_Cover3.pdf"],
			["2 paletten", "http://printxl.pl/templates/Other_Cover2.pdf"],
			["1 palette", "http://printxl.pl/templates/Other_Cover1.pdf"]
		],
		advantages: ["Schnelle Montage und Demontage", "Wasserdichtes Material.", "Dauerhaft"]
	},
	//[3] Legtab
	{
		group: "Sonstige",
		name: "Kundenstopper Legtab",
		description: "Eindeutig ein Bestseller unter den Kundenstopper.",
		fullDescription:
			"Kundenstopper sind sehr effektiv und bequem in der Anwendung von Werbemitteln. Die ergonomische Konstruktion, die aus Materialien höchster Qualität hergestellt wird, garantiert seine Haltbarkeit und langfristige Beständigkeit.",
		fullDescription2:
			"Dank des für dieses Modell charakteristischen 'Clip-Clap'-Systems ist es möglich, Grafiken sehr schnell und einfach zu wechseln. Es ist in zwei beliebten Dimensionen erhältlich: A0 und A1.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/legtab", "Kundenstopper Legtab"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Plakatpapier"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["Beidseitige grafische Darstellung", "Sehr witterungsbeständige Konstruktion"]
	},
	//[4] Springtab
	{
		group: "Sonstige",
		name: "Kundenstopper Springtab",
		description: "Der Sturm macht ihm keine Angst.",
		fullDescription:
			"Kundenstopper sind sehr effektiv und bequem in der Anwendung von Werbemitteln. Die ergonomische Konstruktion, die aus Materialien höchster Qualität hergestellt wird, garantiert seine Haltbarkeit und langfristige Beständigkeit.",
		fullDescription2:
			"Nachdem der Sockel mit Wasser geflutet wurde, wird der Springtab-Stolperbrecher zu einer sehr widerstandsfähigen Struktur, die in Verbindung mit dem mit soliden Federn daran befestigten Rahmen gegen starke Winde widerstandsfähig ist. Die Grafiken werden in Rahmen in den Dimensionen A1 und A0 angezeigt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/springtab", "Kundenstopper Springtab"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Plakatpapier"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyesterfolie Blockout"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["Zweiseitige Präsentation von Grafiken", "Schneller und einfacher Austausch der Belichtung"]
	},
	//[5] O_Bubble
	{
		group: "Sonstige",
		name: "Kundenstopper Bubble",
		description: "Leichtes und stabiles Stolpern mit interessanten Formen.",
		fullDescription:
			"Kundenstopper Bubble sind sehr effektiv und bequem in der Anwendung von Werbemitteln. Die ergonomische Konstruktion, die aus Materialien höchster Qualität hergestellt wird, garantiert seine Haltbarkeit und langfristige Beständigkeit, und dank seiner Befestigung am Boden mit Stiften ist der Bubble Stumble äußerst stabil.",
		fullDescription2:
			"Bubble ist ein ideales Werbesystem für Veranstaltungen im Freien. Seine Hauptvorteile sind einfache Installation und Leichtigkeit. Außerdem gibt es sie in verschiedenen Formen, z.B. als Kreis, Oval oder Dreieck.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/bubble", "Kundenstopper Bubble"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flaggenstoff"
			}
		],
		template: [
			["Oval S", "http://printxl.pl/templates/Other_Bubble_140.pdf"],
			["Oval M", "http://printxl.pl/templates/Other_Bubble_170.pdf"],
			["Oval L", "http://printxl.pl/templates/Other_Bubble_200.pdf"]
		],
		advantages: ["Sehr schnell entfaltet sich", "Leicht und stabil"]
	},
	//[6] O_Canvas
	{
		group: "Sonstige",
		name: "Canvas",
		description: "Ein Gemälde, an jeder beliebigen Wand, die Sie wollen.",
		fullDescription:
			"Die Leinwand ist ein ungewöhnliches Material - eine Mal-Leinwand mit der Möglichkeit, sie für den Digitaldruck zu verwenden. Die Grafiken sind auf einem Keilrahmen (Malwebstuhl) montiert. Dank dessen können Sie Ihr Traumbild an der Wand haben.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
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
		advantages: ["Robuste Konstruktion"]
	},
	//[7] O_Frames
	{
		group: "Sonstige",
		name: "Plakatrahmen",
		description: "Häufiger Wechsel der Belichtung an einem festen Standort.",
		fullDescription:
			"Plakatrahmen können als permanenter Platz für die Anzeige verwendet werden, mit der Möglichkeit des häufigen Austauschs von Grafiken. Sie sind ideal für die Haustür oder am Eingang zum Büro, als Ort der Vermittlung aktueller und wichtiger Informationen. Posterrahmen sind in verschiedenen Größen erhältlich: A4, A3, A2, A1, A0, B2, B1.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/frames", "Plakatrahmen"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Plakatpapier"
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
		advantages: ["schneller und einfacher Austausch des Displays"]
	},
	//[8] Pufy
	{
		group: "Sonstige",
		name: "Sitzwürfel",
		description: "Der perfekte Sitz mit einem personalisierten Aufdruck.",
		fullDescription:
			"Unsere gedruckten Sitzwürfel können eine perfekte Ergänzung zur Dekoration eines Messestandes, einer Ausstellung, einer Veranstaltung oder eines Büros sein. Jede Seite des Würfels kann mit einem beliebigen Aufdruck versehen werden, so dass die Werbebotschaft frei an die Gegebenheiten angepasst werden kann. Sitzwürfel bestehen aus weichem Polsterschaum und einem mit Klettverschluss befestigten Bezug. Sie sind in 5 Größen erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/poufs", "Sitzwürfel"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [
			["50x50", "http://printxl.pl/templates/Other_PUF50.pdf"],
			["45x45", "http://printxl.pl/templates/Other_PUF45.pdf"],
			["40x40", "http://printxl.pl/templates/Other_PUF40.pdf"],
			["35x35", "http://printxl.pl/templates/Other_PUF35.pdf"],
			["30x30", "http://printxl.pl/templates/Other_PUF30.pdf"]
		],
		advantages: ["Interessante Darstellung der Anzeige.", "Leicht und einfach zu bewegen."]
	},
	//[9] Listwy Plakatowe
	{
		group: "Sonstige",
		name: "Poster Leisten ",
		description: "Elegantes Design und schnelle Installation.",
		fullDescription:
			"Sehr elegantes Aussehen und schnelle Installation des Ausdrucks sind zwei Hauptvorteile der hier vorgestellten Poster Leisten.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/strips", "Poster Leisten"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/#bmat",
				materialName: "Matt Banner"
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
			"Große Auswahl an Breiten - die Möglichkeit, die Lamellen auf die Größe des Kunden anzupassen",
			"Möglichkeit der Montage an der Wand oder Decke",
			"Dickes Profil aus eloxiertem Aluminium"
		]
	},
	//[10] Parawany
	{
		group: "Sonstige",
		name: "Windschutz",
		description: "Windschutz ist ein unverzichtbares Attribut eines Urlaubers am Meer.",
		fullDescription:
			"Windschutz am Strand ist ein unverzichtbares Attribut eines Urlaubers. Diese Form der Werbung, auch unter solch ungewöhnlichen Bedingungen, ermöglicht eine interessante und effektive Präsentation Ihres Unternehmens oder Ihrer Dienstleistung. Wir stellen Windschutz aus dem gleichen Stoff wie Liegestühle her. Außerdem sind Windschutze in verschiedenen Größen erhältlich.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/others", "Sonstige"],
			crumbs3: ["/products/others/windbreak", "Windschutz"]
		},
		recommended: [
			{
				url: "/materials/textiles/#polim",
				materialName: "Stoff Monaco"
			},
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["6 segmente", "http://printxl.pl/templates/Other_PAR6.pdf"],
			["5 segmente", "http://printxl.pl/templates/Other_PAR5.pdf"],
			["4 segmente", "http://printxl.pl/templates/Other_PAR4.pdf"],
			["3 segmente", "http://printxl.pl/templates/Other_PAR3.pdf"]
		],
		advantages: ["Idealer Schutz gegen den Wind am Strand"]
	},
	//[11] Naklejka
	{
		group: "Sonstige",
		name: "Aufkleber",
		description: "Jede Form und Größe möglich. Möglichkeit der Laminierung.",
		fullDescription:
			"Beim Aufklebern gibt es Freiheit beim Konfektionierung. Folien können mit einem Schneideplotter in das gewünschte Format, aber auch in jede Form geschnitten werden. Das kleinste Element, das geschnitten werden kann, beträgt 5x5 mm. Es besteht Möglichkeit, einen doppelseitigen Aufkleber herzustellen, der sich perfekt für transparente Oberflächen eignet.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products", "Sonstige"],
			crumbs3: ["/products/others/sticker", "Aufkleber"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Instruktion", "http://printxl.pl/Instructions/Instructions_DE.pdf#page=13"]],
		advantages: ["Permanenter Druck", "Effektives Aussehen", "Langdauernde Anwendung", "Möglichkeit der Laminierung"]
	}
];

// Nowości DE
export const NewProductsDE = [
	//[0] Maska ochronna z opaską
	// {
	// 	group: "Neuigkeiten",
	// 	name: "Schutzmaske mit Kopfband",
	// 	description: "Hygienisches Gesichtsschutzband.",
	// 	fullDescription:
	// 		"Schutzmaske mit einer Hülle aus farblosem Polycarbonat, die an einem verstellbaren Band befestigt ist. Das Bans hat einen weichen Schaumstoff, der eine bessere Passform ermöglicht und den Benutzungskomfort beeinträchtigt. Das Tragen einer Schutzmaske verringert das Risiko des Kontakts mit Keimen. Lieferzeit 6 Tage.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Startseite"],
	// 		crumbs2: ["/products/new", "Neuigkeiten"],
	// 		crumbs3: ["/products/new/mask", "Schutzmaske mit Kopfband"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Wiederverwendbar",
	// 		"Farbloses 0,8 mm dickes Polypropylenglas",
	// 		"Schwarzes Polypropylen-Band mit stufenloser Einstellung ohne Verwendung von Druckbändern",
	// 		"Beständig gegen Desinfektionsmittel auf Alkoholbasis",
	// 		"Angenehm zu tragen dank weichem Schaumstoff und geringem Gewicht",
	// 		"Austausch des Glases möglich",
	// 		"Flaches Glas Größe 35/27 cm"
	// 	]
	// },
	//[1] Maska ochronna z okularami
	// {
	// 	group: "Neuigkeiten",
	// 	name: "Schutzmaske mit Brille",
	// 	description: "Brille mit Gesichtsschutz.",
	// 	fullDescription:
	// 		"Schutzbrille mit einer Abdeckung aus klarem Polycarbonat. Das Tragen einer Schutzmaske reduziert das Risiko des Kontakts mit Keimen Lieferzeit 6 Tage.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Startseite"],
	// 		crumbs2: ["/products/new", "Neuigkeiten"],
	// 		crumbs3: ["/products/new/mask-with-glasses", "Schutzmaske mit Brille"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Wiederverwendbar",
	// 		"Farbloses 0,5 mm dickes Polypropylenglas",
	// 		"Brille in Universalgröße",
	// 		"Das Glas ist beständig gegen Desinfektionsmittel auf Alkoholbasis",
	// 		"Das Glas kann ausgetauscht werden",
	// 		"Flaches Glas Größe 32/25 cm"
	// 	]
	// },
	//[2] HomeConference
	{
		group: "Neuigkeiten",
		name: "Konferenz-Wand",
		description: "Trennen Sie Ihren HOME OFICE-Bereich ab.",
		fullDescription:
			"Werbewände sind eine ideale Form der Unternehmenspräsentation. Sie sind ein perfekter Hintergrund für Fotos oder Aufnahmen. Wichtig ist, dass alle Arten von Wänden, die wir anbieten, sehr einfach zu installieren und leicht zu transportieren sind.",
		fullDescription2:
			"Mit SKYPE während HOME OFICE können Sie effektiv für Ihr Unternehmen werben. Die Wände zeichnen sich durch ihre Leichtbauweise und gleichzeitig durch eine sehr große grafische Darstellungsfläche aus. Der Ausdruck erfolgt nach dem Prinzip der Dehnung. Die folgenden Dimensionen sind nur die am häufigsten gewählten. Wenn Sie an einer breiteren Wand interessiert sind, kontaktieren Sie uns bitte.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/new", "Neuigkeiten"],
			crumbs3: ["/products/new/homeConference", "Konferenz-Wand"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [
			["3.0", "http://printxl.pl/templates/Wall_Smart_line_30.pdf"],
			["2.5", "http://printxl.pl/templates/Wall_Smart_line_24.pdf"]
		],
		advantages: ["niedriger Preis", "beidseitige Grafiken", "schnelle Montage", "inklusive Tragetasche"]
	},
	//[3] Baner na balkon
	{
		group: "Neuigkeiten",
		name: "Banner auf dem Balkon",
		description: "Dekorieren und sichern Sie Ihren Balkon.",
		fullDescription:
			"Das Balkonbanner hat viele Funktionen. Entsprechende Grafiken können perfekt zur Farbe des Gebäudes passen und gleichzeitig die Privatsphäre der Mieter erhöhen. Das Banner kann auf viele Arten installiert werden. Wir empfehlen die Verwendung von Klettverschlüssen oder Ösen. Im Falle von Klettverschlüssen sollte ein geeignetes Stück Material der Hülle hinzugefügt werden (Beispiel der Hülle auf den Bildern). Es besteht die Möglichkeit des zweiseitigen Drucks, mit zwei verschiedenen Grafiken.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/new", "Neuigkeiten"],
			crumbs3: ["/products/new/balcony", "Banner for the balcony"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "PVC Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_DE.pdf#3"]],
		advantages: ["Beidseitiger Druck möglich", "Langfristige Exposition"]
   },
   //[4] Maseczka
	// {
	// 	group: "Nouveauté",
	// 	name: "Face mask",
	// 	description: "Face mask with custom graphics.",
	// 	fullDescription:
	// 		"A two-layer mask made of a softer polyester fabric and a felt interior with a pocket for mounting an additional filter. Solid performance and sublimation printing allows for multiple washing. The mask has elastics to put on the ears. Graphics dimension 20x21.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Startseite"],
	// 		crumbs2: ["/products/new", "Nouveauté"],
	// 		crumbs3: ["/products/new/mask-small", "Face mask"]
	// 	},
	// 	recommended: [],
	// 	template: [],
	// 	advantages: ["Reusable", "Washable", "Solid made", "Custom graphics", "An additional filter pocket"]
	// }
];

// Trybunki PL
export const tribunesDE = [
	//[0] Desq0
	{
		group: "Messetheke",
		name: "Desq 0",
		description: "Sehr einfache Konstruktion: Unterteil, Oberteil und eine spezielle PVC-Platte.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Das Desq 0-System besteht aus einer Tischplatte und einem Untergestell, die durch einen PVC-Vollkörper miteinander verbunden sind, der mit Klettverschlüssen befestigt ist. Wichtig ist, dass der Auf- und Abbau dieser Ständer nicht länger als eine Minute dauert und die Leichtbauweise den Transport erleichtert.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/desq-0", "Desq 0"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Desq0", "http://printxl.pl/templates/Counter_Desq_0.pdf"]],
		advantages: ["Günstiger Preis", "Schnelle Montage", "Leichtbau", "Inklusive Grafiktasche und eine Grafikröhre"]
	},
	//[1] Desq 1
	{
		group: "Messetheke",
		name: "Desq 1",
		description: "Sehr einfache Konstruktion: Unterteil, Oberteil und eine spezielle PVC-Platte.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Das Desq 1-System besteht aus einer Tischplatte und einem Untergestell, die durch einen PVC-Vollkörper miteinander verbunden sind, der mit Klettverschlüssen befestigt ist. Wichtig ist, dass der Auf- und Abbau dieser Ständer nicht länger als eine Minute dauert und die Leichtbauweise den Transport erleichtert.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/desq-1", "Desq 1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Desq1", "http://printxl.pl/templates/Counter_Desq_1.pdf"]],
		advantages: ["Günstiger Preis", "Schnelle Montage", "Leichtbau", "Inklusive Grafiktasche und eine Grafikröhre"]
	},
	//[2] Desq2 7 182
	{
		group: "Messetheke",
		name: "Desq 2",
		description: "Sehr einfache Konstruktion: Unterteil, Oberteil und eine spezielle PVC-Platte.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Das Desq 2-System besteht aus einer Tischplatte und einem Untergestell, die durch einen PVC-Vollkörper miteinander verbunden sind, der mit Klettverschlüssen befestigt ist. Wichtig ist, dass der Auf- und Abbau dieser Ständer nicht länger als eine Minute dauert und die Leichtbauweise den Transport erleichtert.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/desq-2", "Desq 2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Desq2", "http://printxl.pl/templates/Counter_Desq_2.pdf"]],
		advantages: ["Günstiger Preis", "Schnelle Montage", "Leichtbau", "Inklusive Grafiktasche und eine Grafikröhre"]
	},
	//[3] Desq3
	{
		group: "Messetheke",
		name: "Desq 3",
		description: "Sehr einfache Konstruktion: Unterteil, Oberteil und eine spezielle PVC-Platte.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Das Desq 3-System besteht aus einer Tischplatte und einem Untergestell, die durch einen PVC-Vollkörper miteinander verbunden sind, der mit Klettverschlüssen befestigt ist. Wichtig ist, dass der Auf- und Abbau dieser Ständer nicht länger als eine Minute dauert und die Leichtbauweise den Transport erleichtert.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/desq-3", "Desq 3"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Desq3", "http://printxl.pl/templates/Counter_Desq_3.pdf"]],
		advantages: ["Günstiger Preis.", "Schnelle Montage", "Leichtbau", "Inklusive Grafiktasche und eine Grafikröhre"]
	},
	//[4] Express
	{
		group: "Messetheke",
		name: "Express",
		description: "Pop-Up-Konstruktion mit textilen, mit Klettverschluss befestigten Grafiken.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Theke Express ist eine perfekte Ergänzung zur Velcro.  Die Grafiken sind ebenfalls mit Klettverschluss montiert. Es dauert nur einen Moment, um das System zu entfalten. Ein praktisches Regal ist ebenfalls enthalten.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Matt Banner"
			}
		],
		template: [["Express", "http://printxl.pl/templates/Counter_Express.pdf"]],
		advantages: ["Günstiger Preis", "Schnelle Montage", "Leichtbau", "Inklusive Grafiktasche und eine Grafikröhre"]
	},
	//[5] Popup 2x1
	{
		group: "Messetheke",
		name: "PopUp 2x1",
		description: "Pop-Up-Konstruktion mit auf dem PCV-Panel montierten Grafiken.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Die 2x1 PopUp 2x1 Wandtheken zeichnen sich durch einfache Installation und leichte Konstruktion aus. Wie bei der Standard-PopUp-Wand werden die Grafiken auf PVC-Festkörpern präsentiert, aber sie werden mit Hilfe von Magneten an der Struktur befestigt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/popup-2x1", "PopUp 2x1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["PopUp 2x1", "http://printxl.pl/templates/Counter_PopUp_2x1.pdf"]],
		advantages: ["Stabile Konstruktion", "Attraktives Aussehen", "Stellage Popup", "Inklusive Tasche"]
	},
	//[6] Popup 2x2
	{
		group: "Messetheke",
		name: "PopUp 2x2",
		description: "Pop-Up-Konstruktion mit auf dem PC-Panel montierten Grafiken.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"PopUp-Wände zeichnen sich durch einfache Installation und Leichtbauweise aus - bei diesem Modell nicht anders. Wie bei einer Standard-PopUp-Wand werden die Grafiken auf PVC-Festkörpern präsentiert, aber sie werden mit Magneten an der Struktur befestigt.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/popup-2x2", "PopUp 2x2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["PopUp 2x2", "http://printxl.pl/templates/Counter_PopUp_2x2.pdf"]],
		advantages: ["Stabile Konstruktion", "Attraktives Aussehen", "Stellage Popup"]
	},
	//[7] Silic Oval
	{
		group: "Messetheke",
		name: "Silic Oval",
		description: "Einzigartige Form dank Spanntuch mit Silikonband.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Die Domäne der Silizium-Ständer ist ihre sehr solide und stabile Konstruktion. Bei diesem System werden die Grafiken mit Silikonband befestigt, und dank der Verwendung von Stoff als Träger für die Grafiken kann die Tribüne von innen heraus hervorgehoben werden. Was die Silic Oval-Tribüne auszeichnet, ist ihre ungewöhnliche Form.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/silic-oval", "Silic Oval"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Silic Oval", "http://printxl.pl/templates/Counter_Silic_oval.pdf"]],
		advantages: [
			"Stabile Konstruktion",
			"Beeindruckende Erscheinung",
			"Die Möglichkeit der Hintergrundbeleuchtung von innen",
			"Verstärkte Tasche inklusive"
		]
	},
	//[8] Silic Rectangle
	{
		group: "Messetheke",
		name: "Silic Rectangle",
		description: "Einzigartige Form dank Textilgrafiken mit Silikonband.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Die Domäne der Silizium-Ständer ist ihre sehr solide und stabile Konstruktion. Bei diesem System werden die Grafiken mit Silikonband befestigt, und dank der Verwendung von Stoff als Träger für die Grafiken kann die Tribüne von innen beleuchtet werden. Was die Silic Rectangle-Tribüne auszeichnet, ist ihre ungewöhnliche Form.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/silic-rectangle", "Silic Rectangle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [
			["Silic Rectangle", "http://printxl.pl/templates/Counter_Silic_rectangle.pdf"],
			["Silic XXL", "http://printxl.pl/templates/Counter_Silic_rectangleXXL.pdf"]
		],
		advantages: [
			"Stabile Konstruktion",
			"Beeindruckendes Aussehen",
			"Die Möglichkeit der Hintergrundbeleuchtung von innen",
			"Einschließlich einer verstärkten Tasche"
		]
	},
	//[9] Silic Triangle
	{
		group: "Messetheke",
		name: "Silic Triangle",
		description: "Einzigartige Form dank Textilgrafiken mit Silikonband.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Die Domäne der Silizium-Ständer ist ihre sehr solide und stabile Konstruktion. Bei diesem System werden die Grafiken mit Silikonband befestigt, und dank der Verwendung von Stoff als Träger für die Grafiken kann die Tribüne von innen heraus hervorgehoben werden.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/silic-triangle", "Silic Triangle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Silic Triangle", "http://printxl.pl/templates/Counter_Silic_triangle.pdf"]],
		advantages: [
			"Stabile Konstruktion",
			"Beeindruckende Erscheinung",
			"Möglichkeit der Hintergrundbeleuchtung von innen",
			"Einschließlich einer verstärkten Tasche"
		]
	},
	//[10] Upper
	{
		group: "Messetheke",
		name: "Upper",
		description: "Es ist keine zusätzliche Montage erforderlich.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription2:
			"Das Obergericht wurde vollständig aus PVC hergestellt. Darüber hinaus ist eine große Transporttasche im Set enthalten - der Ständer wird in einem einzigen, komplexen Stück geliefert, so dass er nicht zusätzlich montiert werden muss.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/upper", "Upper"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Upper", "http://printxl.pl/templates/Counter_Upper.pdf"]],
		advantages: ["Günstiger Preis", "Leichtkonstruktion.", "Keine Montage nötig"]
	},
	//[11] Upper Plus
	{
		group: "Messetheke",
		name: "Upper Plus",
		description: "Die beliebteste Ausführung. Bietet Haltbarkeit und schnelle Installation.",
		fullDescription:
			"Die von uns angebotenen Messetheke sind ein idealer Werbeträger. Sie eignen sich perfekt für den Direktverkauf, für verschiedene Werbeaktionen und Verkostungen. Dank der Einfachheit der Installation sind sie auf vielen Märkten sehr beliebt.",
		fullDescription:
			"Das Desq 2-System besteht aus einer Tischplatte und einem Untergestell, die durch einen PVC-Vollkörper verbunden sind, der mit Klettverschlüssen befestigt wird. Um den Bedürfnissen unserer Kunden gerecht zu werden, haben wir den Desq 2 Stand mit einer erhöhten PVC-Platte (auf einem Aluminiumrahmen) versehen, die Ihren Stand sicherlich besser sichtbar macht. Wichtig ist, dass das Zusammen- und Auseinanderklappen dieser Ständer nicht mehr als eine Minute dauert, und die Leichtigkeit der Konstruktion erleichtert den Transport.",
		breadcrumbs: {
			crumbs1: ["/", "Startseite"],
			crumbs2: ["/products/tribunes", "Messetheke"],
			crumbs3: ["/products/tribunes/upper-plus", "Upper Plus"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomere Folie"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polymere Folie"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Gegossene Folie"
			}
		],
		template: [["Upper Plus", "http://printxl.pl/templates/Counter_UpperPlus.pdf"]],
		advantages: ["Günstiger Preis", "Schnelle Montage", "Leichtkonstruktion", "Inklusive Tasche und Tube für Graphik"]
	}
];

// mainPageDE
export const mainPageDE = [
	confectionsDE[0],
	flagsDE[0],
	flagsDE[3],
	wallsDE[13],
	othersDE[0],
	standsDE[7],
];
