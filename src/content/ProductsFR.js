// ProductView, Modal, DTP
export const generalFR = [
	"Plus d'infos? Écrivez-nous.",
	"Avantages du produit:",
	"Materiaux recommandés:",
	"Instructions PAO:",
	"Dimensions de l'échantillon [cm]:",
	"Spécifications:",
	"Temat",
	"Imię",
	"E-mail",
	"Wiadomość",
	"Wyślij",
	"Télécharger"
];

// -----------------------------------
// Wykończenia FR
export const confectionsFR = [
	//[0] Zgrzew i Oczkowanie
	{
		group: "Baches",
		name: "Ourlet + Oeillet",
		description: "La finition la plus populaire, garantissant durabilité et assemblage rapide",
		fullDescription:
			"Deux couches de matériau sont soudées ensemble, augmentant la résistance des bords sur lesquels les œillets sont forgés. Ce type de finition vous permet de monter la bâche presque partout, sans crainte de la déchirer.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products", "Baches"],
			crumbs3: ["/products/banners/eyes", "Ourlet + Oeillet"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#mesh",
				materialName: "Drapeau Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=6"]],
		advantages: ["montage facile", "publicité universelle", "oeillets métalliques"]
	},
	//[1] Wycięcie do formatu
	{
		group: "Baches",
		name: "Découpage au format",
		description: "La finition la plus simple. Coupez le matériau à la taille.",
		fullDescription:
			"Il consiste à découper l'impression à la dimension requise par le client - utilisé pour des impressions montées dans des systèmes spéciaux ou montées directement sur la surface. Dans le cas des matériaux en vinyle, il est possible de sertir les bords, mais dans ce cas, nous recommandons de commander une soudure supplémentaire qui renforcera les bords.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products", "Baches"],
			crumbs3: ["/products/banners/format", "Découpage au format"]
		},
		recommended: [
			{
				url: "/materials",
				materialName: "Vinyle"
			},
			{
				url: "/materials/foils",
				materialName: "Adhésifs"
			},
			{
				url: "/materials/flat",
				materialName: "Rigide"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=5"]],
		advantages: ["decoupage précise", "bords lisses"]
	},
	//[2] Keder
	{
		group: "Baches",
		name: "Keder",
		description: "Finition à un système spécial qui garantit la stabilité et une apparence attrayante.",
		fullDescription:
			"Keder est un cordon en silicone (7 mm de diamètre) tressé avec du ruban en tissu polyester à très haute résistance. Après avoir cousu le keder avec du ruban, l'impression peut être montée dans des constructions en aluminium spéciales qui garantissent la stabilité et l'apparence attrayante de la publicité.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products", "Baches"],
			crumbs3: ["/products/banners/keder", "Keder"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#mesh",
				materialName: "Drapeau Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=7"]],
		advantages: ["finition durable", "haute stabilité"]
	},
	//[3] Rękaw
	{
		group: "Baches",
		name: "Fourreau",
		description: "Lorsque vous devez accrocher une annonce dans un endroit bien en vue.",
		fullDescription:
			"Si nous voulons utiliser des tuyaux ou des poutres pour accrocher la publicité, il est préférable de faire un tunnel. Par exemple, un élément de chargement d'impression peut être placé dans la manche inférieure pour éviter les ondulations et afficher l'annonce dans toute sa splendeur. Lors de la préparation du fichier, nous vous recommandons de porter une attention particulière au lieu de couture - cela évitera la collision de la couture avec les inscriptions ou d'autres éléments graphiques importants.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products", "Baches"],
			crumbs3: ["/products/banners/sleeve", "Fourreau"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#mesh",
				materialName: "Drapeau Mesh"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=9"]],
		advantages: ["la possibilité d'exposition «en hauteur»", "montage facile"]
	},
	//[4] Taśma Silikonowa
	{
		group: "Baches",
		name: "Ruban silicone",
		description: "Ruban assorti à un cadre spécial. La possibilité de rétro-éclairage pour un meilleur effet.",
		fullDescription:
			"La couture avec du ruban de silicone est le plus souvent utilisée pour afficher une publicité lumineuse - un ruban de quelques millimètres d'épaisseur est cousu sur les bords du graphique. La bâche ainsi réalisée est placée dans des rainures spéciales du système de rétroéclairage.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products", "Baches"],
			crumbs3: ["/products/banners/tape", "Ruban silicone"]
		},
		recommended: [
			{
				url: "/materials/decorative/#arth",
				materialName: "Artist"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
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
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=8"]],
		advantages: ["impression permanente", "look efficace", "option de rétroéclairage"]
	},
	//[5] Rzep
	{
		group: "Baches",
		name: "Velcro",
		description: "Finition pour un changement d'exposition facile.",
		fullDescription:
			"Le velcro permet un remplacement rapide et facile de la publicité. Le velcro féminin est cousu à l'arrière de la bannière en standard, tandis que le velcro masculin est collé sur une surface plane avec du ruban adhésif double face.",
		fullDescription2:
			"Imprimé avec deux types de Velcro cousus (aux extrémités opposées), peut être monté par exemple autour des piliers. La finition velcro est idéale, y compris comme couvercle de palette facile à installer.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products", "Baches"],
			crumbs3: ["/products/banners/velcro", "Velcro"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=7"]],
		advantages: ["facile à assembler", "grandes options d'exposition"]
	}
];

// Flagi FR
export const flagsFR = [
	//Beachflags [0]
	{
		group: "Drapeaux",
		name: "Beachflag",
		description: "Le type de drapeau le plus populaire. Un mât pour de nombreuses formes.",
		fullDescription:
			"Les drapeaux sont faits de matériaux avec un certificat anti-feu de classe B1 - très résistant, adapté pour le lavage en machine à laver. Un autre matériau très populaire est le Mesh drapeau avec une structure en mesh respirant, mais il est légèrement plus transparent. Grâce à l'utilisation de l'impression par sublimation fixée thermiquement, les couleurs des drapeaux imprimés par nous sont vives, résistantes aux conditions météorologiques et clairement visibles des deux côtés.",
		fullDescription2:
			"Les beachflags sont l'un des produits les plus fréquemment choisis par nos clients. Ils viennent dans plusieurs formes et tailles. Notre offre comprend également des mâts de drapeau, qui sont divisés en type Standard - entièrement en fibre de verre et Budget - combinant aluminium et fibre de verre.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/flags", "Drapeaux"],
			crumbs3: ["/products/flags/beachflags", "Beachflags"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tissu micro-perforé Mesh"
			}
		],
		template: [
			//BG
			["Budget F (taille-S)", "http://printxl.pl/templates/F-S_BG.pdf"],
			["Budget F (taille-M)", "http://printxl.pl/templates/F-M_BG.pdf"],
			["Budget F (taille-L)", "http://printxl.pl/templates/F-L_BG.pdf"],
			["Budget F (taille-XL)", "http://printxl.pl/templates/F-XL_BG.pdf"],
			["Budget S (taille-S)", "http://printxl.pl/templates/S-S_BG.pdf"],
			["Budget S (taille-M)", "http://printxl.pl/templates/S-M_BG.pdf"],
			["Budget S (taille-L)", "http://printxl.pl/templates/S-L_BG.pdf"],
			["Budget S (taille-XL)", "http://printxl.pl/templates/S-XL_BG.pdf"],
			["Budget SP (taille-S)", "http://printxl.pl/templates/SP-S_BG.pdf"],
			["Budget SP (taille-M)", "http://printxl.pl/templates/SP-M_BG.pdf"],
			["Budget SP (taille-L)", "http://printxl.pl/templates/SP-L_BG.pdf"],
			["Budget SP (taille-XL)", "http://printxl.pl/templates/SP-XL_BG.pdf"],
			//ST
			["Standard F (taille-S)", "http://printxl.pl/templates/F-S_ST.pdf"],
			["Standard F (taille-M)", "http://printxl.pl/templates/F-M_ST.pdf"],
			["Standard F (taille-L)", "http://printxl.pl/templates/F-L_ST.pdf"],
			["Standard F (taille-XL)", "http://printxl.pl/templates/F-XL_ST.pdf"],
			["Standard S (taille-S)", "http://printxl.pl/templates/S-S_ST.pdf"],
			["Standard S (taille-M)", "http://printxl.pl/templates/S-M_ST.pdf"],
			["Standard S (taille-L)", "http://printxl.pl/templates/S-L_ST.pdf"],
			["Standard S (taille-XL)", "http://printxl.pl/templates/S-XL_ST.pdf"],
			["Standard SP (taille-S)", "http://printxl.pl/templates/SP-S_ST.pdf"],
			["Standard SP (taille-M)", "http://printxl.pl/templates/SP-M_ST.pdf"],
			["Standard SP (taille-L)", "http://printxl.pl/templates/SP-L_ST.pdf"],
			["Standard SP (taille-XL)", "http://printxl.pl/templates/SP-XL_ST.pdf"],
			["Standard SS (taille-S)", "http://printxl.pl/templates/SS-S_ST.pdf"],
			["Standard SS (taille-M)", "http://printxl.pl/templates/SS-M_ST.pdf"],
			["Standard SS (taille-L)", "http://printxl.pl/templates/SS-L_ST.pdf"],
			["Standard SS (taille-XL)", "http://printxl.pl/templates/SS-XL_ST.pdf"],
			["Standard SW (taille-S)", "http://printxl.pl/templates/SW-S_ST.pdf"],
			["Standard SW (taille-M)", "http://printxl.pl/templates/SW-M_ST.pdf"],
			["Standard SW (taille-L)", "http://printxl.pl/templates/SW-L_ST.pdf"],
			["Standard SW (taille-XL)", "http://printxl.pl/templates/SW-XL_ST.pdf"]
		],
		advantages: ["impression durable", "couleurs vives", "un mât pour de nombreuses formes"]
	},
	//Beachflag H [1]
	{
		group: "Drapeaux",
		name: "Beachflag H",
		description: "Un simple drapeau avec une grande surface pour l'affichage publicitaire.",
		fullDescription:
			"Les drapeaux sont faits de matériaux avec un certificat anti-feu de classe B1 - très résistant, adapté pour le lavage en machine à laver. Un autre matériau très populaire est le Mesh drapeau avec une structure en mesh respirant, mais il est légèrement plus transparent. Grâce à l'utilisation de l'impression par sublimation fixée thermiquement, les couleurs des drapeaux imprimés par nous sont vives, résistantes aux conditions météorologiques et clairement visibles des deux côtés.",
		fullDescription2:
			"Ce type de drapeau est aussi populaire que les drapeaux de plage «ordinaires», mais la différence d'apparence est clairement visible. Les beachflags utilisent un mât vertical avec une pointe en fibre de verre qui se plie en forme de drapeau. En revanche, le drapeau H a un mât entièrement en aluminium, ce qui lui donne une forme plus rectangulaire.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/flags", "Drapeaux"],
			crumbs3: ["/products/flags/beachflags-h", "Beachflags H"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tissu micro-perforé Mesh"
			}
		],
		template: [
			["Budget H (taille-S)", "http://printxl.pl/templates/H-S_BG.pdf"],
			["Standard H (taille-S)", "http://printxl.pl/templates/H-S_ST.pdf"],
			["Standard H (taille-M)", "http://printxl.pl/templates/H-M_ST.pdf"],
			["Standard H (taille-L)", "http://printxl.pl/templates/H-L_ST.pdf"],
			["Standard H (taille-XL)", "http://printxl.pl/templates/H-XL_ST.pdf"]
		],
		advantages: ["plus grande zone de présentation graphique", "montage rapide et facile", "le mât est entièrement en aluminium"]
	},
	//Sail [2]
	{
		group: "Drapeaux",
		name: "Sail",
		description: "Le drapeau est tendu entre deux mâts sur une base tournante.",
		fullDescription:
			"Les drapeaux sont faits de matériaux avec un certificat anti-feu de classe B1 - très résistant, adapté pour le lavage en machine à laver. Un autre matériau très populaire est le Mesh drapeau avec une structure en mesh respirant, mais il est légèrement plus transparent. Grâce à l'utilisation de l'impression par sublimation fixée thermiquement, les couleurs des drapeaux imprimés par nous sont vives, résistantes aux conditions météorologiques et clairement visibles des deux côtés.",
		fullDescription2:
			"Les drapeaux de type voile sont nouveaux dans notre offre. Ce type de drapeau vous permet de présenter des graphiques d'une manière très efficace - une base spéciale est montée sur deux mâts en fibre de verre sur lesquels le drapeau est appliqué. Grâce à cette solution, dans le vent, le drapeau tourne, exposant tous ses avantages.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/flags", "Drapeaux"],
			crumbs3: ["/products/flags/sail", "Sail"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tissu micro-perforé Mesh"
			}
		],
		template: [
			["Sail (taille-XL)", "http://printxl.pl/templates/Flag_Sail_XL.pdf"],
			["Sail (taille-L)", "http://printxl.pl/templates/Flag_Sail_L.pdf"],
			["Sail (taille-M)", "http://printxl.pl/templates/Flag_Sail_M.pdf"],
			["Sail (taille-S)", "http://printxl.pl/templates/Flag_Sail_S.pdf"]
		],
		advantages: ["haute qualité du produit", "s'adapte à tous les types de base", "construction rotative"]
	},
	// Thunder [3]
	{
		group: "Drapeaux",
		name: "Thunder",
		description: "La forme originale. Le drapeau est tendu entre deux mâts sur une base tournante.",
		fullDescription:
			"Les drapeaux sont faits de matériaux avec un certificat anti-feu de classe B1 - très résistant, adapté pour le lavage en machine à laver. Un autre matériau très populaire est le Mesh drapeau avec une structure en mesh respirant, mais il est légèrement plus transparent. Grâce à l'utilisation de l'impression par sublimation fixée thermiquement, les couleurs des drapeaux imprimés par nous sont vives, résistantes aux conditions météorologiques et clairement visibles des deux côtés.",
		fullDescription2:
			"Il s'agit d'une solution double pour les drapeaux de type voile. Cependant, dans ce cas, le drapeau est façonné par des mâts de différentes tailles - l'un plus petit que l'autre. Mâts en fibre de verre. La base est rotative.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/flags", "Drapeaux"],
			crumbs3: ["/products/flags/thunder", "Thunder"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Tissu micro-perforé Mesh"
			}
		],
		template: [
			["Thunder (taille-S/M)", "http://printxl.pl/templates/Flag_Thunder_S-M.pdf"],
			["Thunder (taille-M/L)", "http://printxl.pl/templates/Flag_Thunder_M-L.pdf"],
			["Thunder (taille-L/XL)", "http://printxl.pl/templates/Flag_Thunder_L-XL.pdf"]
		],
		advantages: ["haute qualité du produit", "s'adapte à tous les types de base", "construction rotative"]
	}
];

// Ścianki FR
export const wallsFR = [
	//[0] W_Express Line
	{
		group: "Les murs d'image",
		name: "Ligne Express",
		description: "Fixation murale droite en textile avec velcro.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"L'avantage incontestable du système Express Line est sa forme simple et sa facilité d'installation - vous pouvez déplier le mur même en 3 minutes! L'assemblage de ce modèle mural se fait avec du Velcro.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/express", "Ligne Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Baner Satynowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Line_3x3.pdf"],
			["3x3 avec côtés", "http://printxl.pl/templates/Wall_Express_Line_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Line_3x4.pdf"],
			["3x4 avec côtés", "http://printxl.pl/templates/Wall_Express_Line_3x4_side.pdf"]
		],
		advantages: ["petit prix", "graphiques en une seule partie, sans division en panneaux", "montage rapide avec velcro"]
	},
	//[1] W_ExpressArc
	{
		group: "Les murs d'image",
		name: "Arc express",
		description: "Arche textile fixée au mur avec velcro.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"L'avantage incontestable du système Express Arc est sa forme arquée unique et sa facilité d'installation - vous pouvez déplier le mur même en 3 minutes! L'assemblage de ce modèle mural se fait avec du Velcro.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/express-arc", "Arc express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Baner Satynowy"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Arc_3x3.pdf"],
			["3x3 avec côtés", "http://printxl.pl/templates/Wall_Express_Arc_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Arc_3x4.pdf"],
			["3x4 avec côtés", "http://printxl.pl/templates/Wall_Express_Arc_3x4_side.pdf"]
		],
		advantages: ["petit prix", "graphiques en une seule partie, sans division en panneaux", "montage rapide avec velcro"]
	},
	//[2] W_Popup Line
	{
		group: "Les murs d'image",
		name: "Ligne PopUp",
		description: "Un simple mur composé de panneaux plaqués de papier d'aluminium. Meilleure valeur pour le produit.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Les systèmes PopUp se composent de deux parties de base: cadre en aluminium et panneaux en PVC, sur lesquels des graphiques sont collés. Ces panneaux sont montés sur le cadre à l'aide de crochets spéciaux. Surtout, le cadre est extrêmement facile à installer et, grâce aux panneaux latéraux rabattus, ils sont presque invisibles à l'avant. PopUp Line a une forme simple et classique.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/popup", "Ligne PopUp"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Line_3x5.pdf"]
		],
		advantages: [
			"affichage graphique efficace",
			"la possibilité d'acheter un kit de remplacement graphique et d'utiliser un rack pour plusieurs graphiques",
			"options supplémentaires: éclairage halogène ou LED"
		]
	},
	//[3] W_PopupArc
	{
		group: "Les murs d'image",
		name: "Arc PopUp",
		description: "Mur en arc composé de panneaux plaqués de papier d'aluminium. Meilleure valeur pour le produit.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Les systèmes PopUp se composent de deux parties de base: cadre en aluminium et panneaux en PVC, sur lesquels des graphiques sont collés. Ces panneaux sont montés sur le cadre à l'aide de crochets spéciaux. Surtout, le cadre est extrêmement facile à installer et, grâce aux panneaux latéraux rabattus, ils sont presque invisibles à l'avant. PopUp Arc a une forme arquée unique.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/popup-arc", "Arc PopUp"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Arc_3x5.pdf"]
		],
		advantages: [
			"affichage graphique efficace",
			"la possibilité d'acheter un kit de remplacement graphique et d'utiliser un rack pour plusieurs graphiques",
			"options supplémentaires: éclairage halogène ou LED"
		]
	},
	//[4] W_PopupMagnetic
	{
		group: "Les murs d'image",
		name: "Ligne magnétique PopUp",
		description: "Montage et démontage extrêmement simples du mur avec des panneaux en PVC. Panneaux recouverts de papier d'aluminium.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Contrairement aux modèles standard, les murs magnétiques ont un système inhabituel de connexion rapide d'éléments utilisant des aimants intégrés dans la construction. De plus, les panneaux latéraux sont courbés vers l'arrière, de sorte qu'ils sont visibles de l'avant sur 1/3 de la largeur. Ce modèle est en forme d'arc.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/popup-magnetic", "PopUp Magnetyczna"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x5_ST.pdf"]
		],
		advantages: ["construction stable", "options supplémentaires: éclairage halogène ou LED", "montage et démontage simples"]
	},
	//[5] W_PopupMagneticArc
	{
		group: "Les murs d'image",
		name: "Arc magnétique PopUp",
		description: "Montage et démontage extrêmement simples du mur avec des panneaux en PVC. Panneaux recouverts de papier d'aluminium.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Contrairement aux modèles standard, les murs magnétiques ont un système inhabituel de connexion rapide d'éléments utilisant des aimants intégrés dans la construction. De plus, les panneaux latéraux sont courbés vers l'arrière, de sorte qu'ils sont visibles de l'avant sur 1/3 de la largeur. Ce modèle est de forme droite.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/popup-magnetic-arc", "Arc magnétique PopUp"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x5_ST.pdf"]
		],
		advantages: ["construction stable", "montage et démontage simples"]
	},
	//[6] W_PopupTwin
	{
		group: "Les murs d'image",
		name: "PopUp Twin",
		description: "La meilleure valeur pour le prix du produit et des deux côtés. Panneaux recouverts de papier d'aluminium.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Les systèmes PopUp se composent de deux parties de base: cadre en aluminium et panneaux en PVC, sur lesquels des graphiques sont collés. Ces panneaux sont montés sur le cadre à l'aide de crochets spéciaux. Surtout, le cadre est extrêmement facile à installer. Ce modèle est une combinaison parfaite de la plus haute qualité avec un prix extrêmement compétitif. Les systèmes PopUp sont uniques car les graphiques peuvent être vus de tous les côtés.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/popup-twin", "PopUp Twin"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x5.pdf"]
		],
		advantages: ["présentation graphique recto verso", "ensemble extrêmement léger", "options supplémentaires: éclairage halogène ou LED"]
	},
	//[7] W_Silic
	{
		group: "Les murs d'image",
		name: "Silic Line",
		description: "L'impression est montée avec du ruban de silicone. Tissu sur un système d'affichage soigné.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Les parois siliceuses sont nouvelles sur le marché. Le système innovant signifie que la construction légère devient suffisamment stable pour vous permettre de présenter de manière impressionnante une publicité qui peut facilement être montée avec du ruban de silicone. La version standard du mur vous permet de monter les graphiques uniquement par l'avant, tandis que la version Twin offre une telle possibilité sur chaque mur du système.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/silic", "Silic Line"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_4x3.pdf"]
		],
		advantages: ["graphiques en une partie", "montage et démontage simples", "construction stable", "sac inclus"]
	},
	//[8] W_SilicArc
	{
		group: "Les murs d'image",
		name: "Arc Silique",
		description: "L'impression est montée avec du ruban de silicone. Tissu sur un système d'affichage soigné.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Les parois siliceuses sont nouvelles sur le marché. Le système innovant signifie que la construction légère devient suffisamment stable pour vous permettre de présenter de manière impressionnante une publicité qui peut facilement être montée avec du ruban de silicone. La version standard du mur vous permet de monter les graphiques uniquement par l'avant, tandis que la version Twin offre une telle possibilité sur chaque mur du système. Ce modèle est disponible en version droite.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/silic-arc", "Arc Silique"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_4x3.pdf"]
		],
		advantages: ["graphiques en une partie", "montage et démontage simples", "construction stable", "sac inclus"]
	},
	//[9] W_SilicLed
	{
		group: "Les murs d'image",
		name: "Silic Led Line",
		description: "L'impression est montée avec du ruban de silicone. Tissu surligné.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Ce qui distingue Silic Led Arc des autres murs est le système qui a été mis en évidence par son rétro-éclairage avec des rideaux LED. Des centaines d'ampoules donnent un effet unique à l'impression. Surtout, le mur a des bandes de montage des deux côtés, et lors de l'utilisation de doubles rideaux, il peut être double face. Ce modèle est disponible en version arc.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
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
		advantages: ["effet spectaculaire", "présentation graphique recto verso", "Rideaux LED", "sac inclus"]
	},
	//[10] W_SilicLedArc
	{
		group: "Les murs d'image",
		name: "Silic Led Arc",
		description: "L'impression est montée avec du ruban de silicone. Tissu surligné.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Ce qui distingue Silic Led Arc des autres murs est le système qui a été mis en évidence par son rétro-éclairage avec des rideaux LED. Des centaines d'ampoules donnent un effet unique à l'impression. Surtout, le mur a des bandes de montage des deux côtés, et lors de l'utilisation de doubles rideaux, il peut être double face. Ce modèle est disponible en version droite.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
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
		advantages: ["effet spectaculaire", "présentation graphique recto verso", "Rideaux LED", "sac inclus"]
	},
	//[11] W_SilicTwin
	{
		group: "Les murs d'image",
		name: "Silic Twin Line",
		description: "L'impression est montée avec du ruban de silicone. Mur double face.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Ce système est conçu pour présenter des graphiques de deux côtés. L'assemblage d'impression est le même que sur tous les murs de cette série, c'est-à-dire en utilisant du ruban de silicone. Ce modèle est disponible en version arc.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/silic-twin", "Silic Twin Line"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_4x3.pdf"]
		],
		advantages: ["présentation graphique recto verso", "montage et démontage simples", "construction stable", "sac inclus"]
	},
	//[12] W_SilicTwinArc
	{
		group: "Les murs d'image",
		name: "Silic Twin Arc",
		description: "L'impression est montée avec du ruban de silicone. Mur cintré double face.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Ce système est conçu pour présenter des graphiques de deux côtés. Le système d'assemblage d'impression est le même que sur tous les murs de cette série, c'est-à-dire à l'aide de ruban de silicone. Ce modèle est disponible en version arc.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/silic-twin-arc", "Silic Twin Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_4x3.pdf"]
		],
		advantages: ["présentation graphique recto verso", "montage et démontage simples", "construction stable", "sac inclus"]
	},
	//[13] W_Smart
	{
		group: "Les murs d'image",
		name: "Smart Line",
		description: "Construction légère et petite. Le matériau est appliqué par le haut du système.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Les murs de la série Smart sont des produits avec de nombreux avantages. Ils se distinguent, entre autres, par un design léger et en même temps par une très grande surface de présentation graphique. L'impression est basée sur le principe de l'étirement des chaussettes et les tuyaux du cadre ont un diamètre de 32 mm.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/smart", "Smart"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_line_24.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_line_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_line_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_line_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_line_60.pdf"]
		],
		advantages: ["Top rapport qualité / prix", "graphiques recto verso", "montage rapide", "sac de transport inclus"]
	},
	//[14] W_SmartArc
	{
		group: "Les murs d'image",
		name: "Smart Arc",
		description: "Construction légère et petite. Le matériau est appliqué par le haut du système.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"La série de produits présentée se présente sous plusieurs formes intéressantes. Dans Arc, grâce aux côtés incurvés, certains graphiques sont également visibles de côté. Le cadre mural est profilé de manière à ne pas nécessiter de pieds stabilisateurs supplémentaires.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/smart-arc", "Smart Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_Arc_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_Arc_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_Arc_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_Arc_50.pdf"]
		],
		advantages: ["graphiques recto verso", "montage rapide", "aluminium anodisé", "sac de transport inclus"]
	},
	//[15] W_SmartS
	{
		group: "Les murs d'image",
		name: "Smart S",
		description: "Construction légère et petite. Le matériau est appliqué par le haut du système.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"La version de loin la plus efficace des murs intelligents est la forme en S, qui rappelle la forme d'un serpent. De plus, toute la structure est en aluminium anodisé. Il convient également de savoir que les graphiques peuvent être imprimés sur deux faces. Tous les murs intelligents sont emballés dans des sacs durables.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/smart-s", "Smart S"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_S_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_S_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_S_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_S_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_S_60.pdf"]
		],
		advantages: ["look efficace", "graphiques recto verso", "montage rapide", "sac de transport inclus"]
	},
	//[16] W_SmartU
	{
		group: "Les murs d'image",
		name: "Smart U",
		description: "Construction légère et petite. Le matériau est appliqué par le haut du système.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Ce mur a la forme d'un arc en position verticale. Il s'agit d'une version très intéressante et efficace du produit, se démarquant dans cette série. L'ensemble comprend des pieds, grâce auxquels le système est extrêmement stable.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/smart-u", "Smart U"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["3.0", "http://printxl.pl/templates/Wall_Smart_U_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_U_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_U_50.pdf"]
		],
		advantages: ["look efficace", "montage rapide", "sac de transport inclus"]
	},
	//[17] W_Suxen
	{
		group: "Les murs d'image",
		name: "Suxen",
		description: "Un système simple mais très ingénieux et efficace.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Ce système est simple, mais très ingénieux et efficace. Le cadre est basé sur une fenêtre pop-up classique et les graphiques peuvent être imprimés sur une bannière ou un tissu et des œillets dans les coins. Vous pouvez créer diverses formes et compositions à partir de ces impressions préparées.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/suxen", "Suxen"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["1 élément", "http://printxl.pl/templates/Wall_Suxen.pdf"]],
		advantages: ["montage et démontage simples", "la possibilité de créer des formes intéressantes", "sac de transport inclus"]
	},
	//[18] W_Telescopic
	{
		group: "Les murs d'image",
		name: "Télescopique",
		description: "La finition la plus populaire. Fournit la force et une installation rapide.",
		fullDescription:
			"Les murs publicitaires sont une forme idéale de présentation d'entreprise. Ils fonctionnent bien comme élément de marque lors de salons ou de fêtes d'entreprise, ainsi que comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"Telescopic est une série de murs conçus pour les graphiques de bannière avec de grandes surfaces. Ces murs deviennent de plus en plus populaires en raison de leur simplicité, stabilité et flexibilité. Leur conception fonctionne sur le principe des tubes télescopiques, grâce auxquels le cadre est réglable et peut être de différentes tailles.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/walls", "Les murs d'image"],
			crumbs3: ["/products/walls/telescopic", "Télescopique"]
		},
		recommended: [
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			}
		],
		template: [["Télescopique", "http://printxl.pl/templates/Wall_Telescopic.pdf"]],
		advantages: ["petit prix", "montage et démontage simples", "construction stable", "sac inclus"]
	}
];

// Rollupy FR
export const rollupsFR = [
	//[0] Compact
	{
		group: "Roll-ups",
		name: "Compact",
		description: "Système Rollup extrêmement léger et maniable.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Le modèle Compact est un système extrêmement léger et maniable. Le diamètre de sa cassette a été réduit de la dimension classique de 9,3 cm à 8,3 cm. C'est un produit de classe économique.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/compact", "Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			"compact et facile à transporter",
			"bande de type 'Express Clip' - montage et remplacement rapides et faciles de l'impression",
			"cassette 100% en aluminium anodisé"
		]
	},
	//[1] Standard
	{
		group: "Roll-ups",
		name: "Standard",
		description: "Best-seller sur de nombreux marchés.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Le modèle Standard dispose d'un stabilisateur de mât, ce qui garantit une présentation graphique durable. De plus, la bande de type 'Express Clip' incluse dans l'ensemble permet une installation rapide et facile, ainsi qu'un échange graphique sans problème. Aimé par nos clients en raison du rapport qualité-prix idéal.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/standard", "Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 80", "http://printxl.pl/templates/Other_roll80.pdf"],
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["roll-ups 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["roll-ups 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"construction stable et solide 100% en aluminium anodisé",
			"le mât est relié à un cordon élastique pour éviter de perdre ses éléments",
			"bande de type Express Clip - montage rapide et facile"
		]
	},
	//[2] Classic
	{
		group: "Roll-ups",
		name: "Classic",
		description: "Une version améliorée du modèle Standard.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"La version améliorée du modèle standard. En plus du stabilisateur de mât, il a également un renfort de la paroi arrière, ce qui garantit une plus grande stabilité et une durée de vie plus longue. Contrairement au modèle Standard, Classic, il possède également des embouts en plastique.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/classic", "Classic"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["roll-ups 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["roll-ups 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"renfort de panneau arrière avec stabilisateur de mât",
			"ruban 3M - fixation graphique sécurisée au système d'enroulement",
			"le mât est relié à un cordon élastique pour éviter de perdre ses éléments"
		]
	},
	//[3] Premium
	{
		group: "Roll-ups",
		name: "Premium",
		description: "Construction solide et stable.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Ce type de rollups était en aluminium beaucoup plus épais que ses prédécesseurs. Il s'agit d'une construction très solide et stable, complétée par un grand sac de transport renforcé.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/premium", "Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["roll-ups 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["roll-ups 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"profil en aluminium épais",
			"système d'enroulement amélioré",
			"Ruban 3M pour une fixation graphique sécurisée",
			"renfort de panneau arrière avec stabilisateur de mât"
		]
	},
	//[4] Pro
	{
		group: "Roll-ups",
		name: "Pro",
		description: "Le modèle le plus haut de la catégorie rollup avec une forme de cassette classique.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Pro est le modèle de la plus haute qualité de la catégorie rollup avec une forme de cassette classique. Le profil en aluminium exceptionnellement épais utilisé dans la production de ce modèle garantit la plus haute qualité du produit et une durabilité à long terme.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/pro", "Pro"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["roll-ups 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["roll-ups 150", "http://printxl.pl/templates/Other_roll150.pdf"],
			["roll-ups 200", "http://printxl.pl/templates/Other_roll200.pdf"]
		],
		advantages: [
			"disponible en taille 200x200",
			"le profil en aluminium le plus épais",
			"Ruban 3M pour une fixation graphique sécurisée",
			"le haut du mât ne dépasse pas des graphiques"
		]
	},
	//[5] Exclusive
	{
		group: "Roll-ups",
		name: "Exclusive",
		description: "Rollup reconnu sur de nombreux marchés. Design moderne.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Rollup reconnu sur de nombreux marchés, avec un aspect exceptionnellement élégant, gracieusement appelé une 'déchirure'. Il se caractérise par une construction très durable et stable qui présente gracieusement les graphismes.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/exclusive", "Exclusive"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["roll-ups 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["roll-ups 150", "http://printxl.pl/templates/Other_roll150.pdf"],
			["roll-ups 200", "http://printxl.pl/templates/Other_roll200.pdf"]
		],
		advantages: [
			"look moderne et élégant",
			"Bande de type Express Clip - montage rapide et facile",
			"Ruban 3M pour une fixation graphique sécurisée",
			"le haut du mât ne dépasse pas des graphiques",
			"disponible en taille 200x200"
		]
	},
	//[6] Twin
	{
		group: "Roll-ups",
		name: "Twin",
		description: "Le modèle de base à deux faces.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Twin est le modèle de base du roll-up bilatéral. Ce modèle fonctionne bien lorsque la présentation graphique est nécessaire des deux côtés.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/twin", "Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			",option de présentation graphique recto verso",
			",Ruban 3M pour une fixation graphique sécurisée",
			",le haut du mât ne dépasse pas des graphiques",
			",Bande de type Express Clip - montage rapide et facile"
		]
	},
	//[7] Twin Plus
	{
		group: "Roll-ups",
		name: "Twin Plus",
		description: "Rollup double face dans une version améliorée.",
		fullDescription:
			"Le système Rollup est une solution publicitaire très populaire. Il s'agit de l'une des formes de publicité les plus compactes - il se caractérise par une grande facilité d'utilisation et une facilité de transport. Chaque rollup se compose de graphiques cachés dans une cassette en aluminium et d'un cadre en trois parties reliés par une bande élastique. Les rollups sont emballés dans d'élégants sacs noirs avec une poignée confortable.",
		fullDescription2:
			"Twin Plus est un modèle à deux faces avec double graphisme. Le pied nickelé n'est pas seulement l'ornement incontestable de ce modèle, mais surtout la stabilisation du système. Grâce à cela, ce modèle est également disponible en 120 et 150 cm de largeur.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/rollups", "Roll-ups"],
			crumbs3: ["/products/rollups/twin-plus", "Twin Plus"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["roll-ups 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["roll-ups 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["roll-ups 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["roll-ups 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"option de présentation graphique recto verso",
			"tailles jusqu'à 150 cm de large",
			"le haut du mât ne dépasse pas des graphiques",
			"pied stabilisateur élégant"
		]
	}
];

// Standy FR
export const standsFR = [
	//[0] L-Banner Premium
	{
		group: "Stands",
		name: "L-Banner Premium",
		description: "Système de bannière en L populaire, classe premium.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Ils sont appelés L stands de la lettre, qui ressemblent à leur forme. L-Banner Premium est un système d'exposition léger, pratique et facile à utiliser. Est un outil de communication visuelle extrêmement économique. Parfait pour les conférences, spectacles, expositions, ainsi que dans les points de vente. Des profilés de fond en aluminium ont été utilisés ici avec une épaisseur beaucoup plus grande que la version moins chère, tout en maintenant la légèreté du système et en augmentant sa stabilité, tout en permettant un échange rapide des planches.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/l-banner-premium", "L-Banner Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
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
		advantages: ["faible coût du système", "montage simple et rapide", "ultra-léger", "sac inclus"]
	},
	//[1] L-Banner Premium Twin
	{
		group: "Stands",
		name: "Twin Premium L-Banner",
		description: "La version Twin, comme son nom l'indique, est à double face.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Appelé L se tient de la lettre à laquelle ils ressemblent. Il s'agit d'un système d'exposition léger, pratique et facile à utiliser. Est un outil de communication visuelle extrêmement économique. Parfait pour les conférences, spectacles, expositions, ainsi que dans les points de vente. Des profilés de fond en aluminium ont été utilisés ici avec une épaisseur beaucoup plus grande que la version moins chère, tout en maintenant la légèreté du système et en augmentant sa stabilité, tout en permettant un échange rapide des planches.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/l-banner-premium-twin", "Twin Premium L-Banner"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
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
		advantages: ["présentation graphique recto verso", "montage simple et rapide", "ultra-léger", "sac inclus"]
	},
	//[2] L-Banner St
	{
		group: "Stands",
		name: "L-Banner Standard",
		description: "Son avantage est une construction très légère. Facile à transporter et très stable en même temps.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Ils sont appelés L stands de la lettre, qui ressemblent à leur forme. Il s'agit d'un système d'exposition léger, pratique et facile à utiliser. Est un outil de communication visuelle extrêmement économique. Il fonctionne parfaitement lors de conférences, salons, expositions, ainsi que dans les points de vente. Le profil inférieur en aluminium assure la stabilité et facilite le remplacement rapide de la planche.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/l-banner-standard", "L-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
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
		advantages: ["Top rapport qualité / prix", "montage simple et rapide", "ultra-léger", "sac inclus"]
	},
	//[3] Portal
	{
		group: "Stands",
		name: "Portal",
		description: "Construction durable et solide. Matériel monté avec du ruban de silicone.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Stand Portal est actuellement le système le plus utilisé pour présenter des graphiques dans les centres commerciaux et les vitrines. Surtout, la construction extrêmement durable et solide garantit une longue durée de vie, et grâce au profil pour le ruban de silicone, l'installation et le remplacement des graphiques ne prennent qu'un instant.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/portal", "Portal"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Portal", "http://printxl.pl/templates/Stand_Portal.pdf"]],
		advantages: [
			"construction extrêmement stable et durable",
			"présentation graphique recto verso",
			"profil pour ruban de silicone",
			"échange graphique instantané"
		]
	},
	//[4] Totem 1
	{
		group: "Stands",
		name: "Totem 1",
		description: "Stand extrêmement impressionnant.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Ce système est destiné à la présentation de graphismes sur tissus. Il se caractérise par une construction extrêmement simple et légère et un montage rapide. En raison du fait que le tissu est tendu sur le cadre, le support peut présenter des graphiques unilatéraux ou bilatéraux.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-1", "Totem 1"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
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
		advantages: ["Top rapport qualité / prix", "montage simple et rapide", "sac inclus"]
	},
	//[5] Totem 2
	{
		group: "Stands",
		name: "Totem 2",
		description: "Stand extrêmement impressionnant.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Ce système est destiné à la présentation de graphismes sur tissus. Il se caractérise par une construction extrêmement simple et légère et un montage rapide. En raison du fait que le tissu est tendu sur le cadre, le support peut présenter des graphiques unilatéraux ou bilatéraux. Dans le cas du Totem 2, les pieds ont été remplacés par une plaque métallique. En utilisant ce type de base, le système est plus stable.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-2", "Totem 2"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
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
		advantages: ["Top rapport qualité / prix", "montage simple et rapide", "sac inclus"]
	},
	//[6] Totem 3
	{
		group: "Stands",
		name: "Totem 3",
		description: "Stand extrêmement impressionnant.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Ce produit est destiné aux clients qui préfèrent la technologie d'impression letx ou solvant. Grâce à l'utilisation de captures spéciales, Totem 3 présentera très efficacement des graphiques imprimés sur une bannière enduite populaire. Dans ce cas également, les graphiques peuvent être présentés des deux côtés - après impression sur du matériel Blockout",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-3", "Totem 3"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			}
		],
		template: [
			["60x230", "http://printxl.pl/templates/Stand_Totem3_60.pdf"],
			["90x230", "http://printxl.pl/templates/Stand_Totem3_90.pdf"],
			["120x230", "http://printxl.pl/templates/Stand_Totem3_120.pdf"],
			["150x230", "http://printxl.pl/templates/Stand_Totem3_150.pdf"]
		],
		advantages: ["impression sur bannière enduite", "Top rapport qualité / prix", "montage simple et rapide", "sac inclus"]
	},
	//[7] Totem Plus
	{
		group: "Stands",
		name: "Totem Plus",
		description: "La solution parfaite pour les événements.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Un excellent choix pour les entreprises organisant des événements de présentation sous forme de banquets, événements ou cocktails. En raison du fait que le mur a une étagère supplémentaire, ce produit peut servir de table à cocktail et de support publicitaire en un. Surtout, le système présente des graphiques des deux côtés.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-plus", "Totem Plus"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Totem Plus", "http://printxl.pl/templates/Stand_Totem_PLUS.pdf"]],
		advantages: ["étagère pratique", "recto-verso", "montage rapide", "cadre et sac inclus"]
	},
	//[8] X-Banner Compact
	{
		group: "Stands",
		name: "X-Banner Compact",
		description: "Une façon économique de présenter votre annonce.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"Une version économique du système de présentation graphique populaire sur le marché, qui doit son nom à la forme caractéristique de la lettre X. Ce modèle mural a été entièrement réalisé en fibre de verre, grâce auquel sa construction est ultra-légère, mais très stable. Le X-Banner Compact est un moyen simple pour une présentation graphique efficace.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/x-banner-compact", "X-Banner Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			}
		],
		template: [
			["80x180", "http://printxl.pl/templates/Stand_Xban80.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Xban60.pdf"]
		],
		advantages: ["top rapport qualité / prix", "montage simple et rapide", "ultra-léger", "sac inclus"]
	},
	//[9] X-Banner Standard
	{
		group: "Stands",
		name: "X-Banner Standard",
		description: "Modèle supérieur du système X-banner.",
		fullDescription:
			"Les stands sont des systèmes qui ressemblent à des rollups de taille, mais offrent des possibilités beaucoup plus grandes d'exposition publicitaire.",
		fullDescription2:
			"La norme X-banner est le modèle de système supérieur de la série X-banner. Il est plus stable et durable que ses prédécesseurs. De plus, il était fait de métal élégant et résistant à la corrosion, et pourtant c'est toujours un système ultra-léger. Grâce à sa simplicité, le pliage et le dépliage ne prennent que quelques secondes.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/x-banner-standard", "X-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			}
		],
		template: [
			["120x210", "http://printxl.pl/templates/Stand_Xban120.pdf"],
			["80x180", "http://printxl.pl/templates/Stand_Xban80.pdf"],
			["60x160", "http://printxl.pl/templates/Stand_Xban60.pdf"]
		],
		advantages: ["haute qualité", "disponible en plus grand format: 120x210", "facile à utiliser", "ultra-léger"]
	}
];

// Pozostałe FR
export const othersFR = [
	//[0] Namioty
	{
		group: "Autres",
		name: "Tentes",
		description: "Le moyen le plus rapide d'accéder à un stand outdoor.",
		fullDescription:
			"La construction de nos tentes est en acier ou en aluminium et se décline en quatre tailles. La version en aluminium est très légère et confortable, en particulier avec des changements fréquents dans l'emplacement du stand. La variante en acier est très durable et peinte en poudre blanche. Surtout, les graphiques sont imprimés sur un tissu spécial en polyester qui répond aux normes de base en matière d'étanchéité.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/tent", "Tentes"]
		},
		recommended: [
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["Tente 2,5x2,5", "http://printxl.pl/templates/Tent_2%2C5x2%2C5.pdf"],
			["Tente 3x3", "http://printxl.pl/templates/Tent_3x3.pdf"],
			["Tente 3x3 [ST]", "http://printxl.pl/templates/Tent_3x3_ST.pdf"],
			["Tente 3x4", "http://printxl.pl/templates/Tent_3x4.pdf"],
			["Tente 3x6", "http://printxl.pl/templates/Tent_3x6.pdf"]
		],
		advantages: ["la bande 3M pour une fixation graphique sécurisée"]
	},
	//[1] Leżaki
	{
		group: "Autres",
		name: "Lits de plage",
		description: "Un bain de soleil dans un style unique",
		fullDescription:
			"Notre offre comprend deux types de transats, avec ou sans accoudoirs en bois. En tant que siège, vos graphiques seront montés, imprimés sur un tissu idéal pour de telles tâches: le polyester Monaco.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/sunbeds", "Lits de plage"]
		},
		recommended: [
			{
				url: "/materials/textiles/#polim",
				materialName: "Tissu Monaco"
			},
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["Lit de plage", "http://printxl.pl/templates/Other_Sunbed.pdf"],
			["Lit de plage XXL", "http://printxl.pl/templates/Other_Sunbed_XXL.pdf"]
		],
		advantages: ["la possibilité d'avoir un bain de soleil personnalisé."]
	},
	//[2] O_PalletsCover
	{
		group: "Autres",
		name: "Housse de palette",
		description: "Pour garder l'ordre avec palettes et la publicité en même temps.",
		fullDescription:
			"Un revêtement durable et esthétique est un moyen idéal pour couvrir des palettes avec votre publicité. Les dimensions des housses dépendent des dimensions et du nombre de palettes à couvrir. Les housses pour les palettes sont constitués de la bâche couchée (résistant à l'eau) - les meilleurs matériaux disponibles pour leur production.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/pallets-cover", "Housse de palette"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			}
		],
		template: [
			["7 palettes", "http://printxl.pl/templates/Other_Cover7.pdf"],
			["6 palettes", "http://printxl.pl/templates/Other_Cover6.pdf"],
			["5 palettes", "http://printxl.pl/templates/Other_Cover5.pdf"],
			["4 palettes", "http://printxl.pl/templates/Other_Cover4.pdf"],
			["3 palettes", "http://printxl.pl/templates/Other_Cover3.pdf"],
			["2 palettes", "http://printxl.pl/templates/Other_Cover2.pdf"],
			["1 palette", "http://printxl.pl/templates/Other_Cover1.pdf"]
		],
		advantages: ["montage et démontage rapides", "matériau résistant à l'eau","résistant"]
	},
	//[3] Legtab
	{
		group: "Autres",
		name: "Stop-trottoir Legtab",
		description: "Best-seller parmi les stop-trottoirs.",
		fullDescription:
			"Les stop-trottoirs publicitaires sont un outil facile à utiliser et très efficace. La conception ergonomique, faite de matériaux de la plus haute qualité, garantit longévité et durabilité.",
		fullDescription2:
			"Grâce au système «clip-clap» caractéristique de ce modèle, il est possible de remplacer les graphiques très rapidement et facilement. Les graphiques sont affichés dans des cadres aux dimensions A1 et A0.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/legtab", "Stop-trottoir Legtab"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier Affiche"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["présentation graphique recto et verso", "très résistant aux conditions météorologiques"]
	},
	//[4] Springtab
	{
		group: "Autres",
		name: "Stop-trottoir Springtab",
		description: "Le vent ne lui fait pas peur.",
		fullDescription:
			"Les stop-trottoirs publicitaires sont un outil facile à utiliser et très efficace. La conception ergonomique, faite de matériaux de la plus haute qualité, garantit longévité et durabilité.",
		fullDescription2:
			"Springtab devient une construction très durable grace à la base remplie d’eau. Les graphiques sont affichés dans des cadres aux dimensions A1 et A0.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/springtab", "Stop-trottoir Springtab"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier Affiche"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Film Polyester Blockout"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["présentation graphique recto et verso", "échange rapide et facile d'exposition"]
	},
	//[5] O_Bubble
	{
		group: "Autres",
		name: "Stop-trottoir Bubble",
		description: "Les Stop-trottoir légers et stables aux formes intéressantes.",
		fullDescription:
			"Les stop-trottoirs publicitaires sont un outil facile à utiliser et très efficace. La conception ergonomique, faite de matériaux de la plus haute qualité, garantit longévité et durabilité.",
		fullDescription2:
			"Bubble est un excellent système de publicité pour les événements en plein air. La facilité de montage et la légèreté du trépied sont ses principaux avantages. Il est attaché au sol  avec des épingles. Il se présente sous différents formes : rond, ovale ou triangle.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/bubble", "Stop-trottoir Bubble"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Drapeau"
			}
		],
		template: [
			["Oval S", "http://printxl.pl/templates/Other_Bubble_140.pdf"],
			["Oval M", "http://printxl.pl/templates/Other_Bubble_170.pdf"],
			["Oval L", "http://printxl.pl/templates/Other_Bubble_200.pdf"]
		],
		advantages: ["très rapide à déplier", "léger et stable"]
	},
	//[6] O_Canvas
	{
		group: "Autres",
		name: "Canvas",
		description: "Le tableau comme vous le souhaitez.",
		fullDescription:
			"Canvas est un matériau spéciale - avec possibilité de l'utiliser lors de l'impression numérique. Textile idéal pour la reproduction de tableau chassis bois.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
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
		advantages: ["construction solide"]
	},
	//[7] O_Frames
	{
		group: "Autres",
		name: "Cadres d'affiches",
		description: "Changement fréquent d'exposition dans un lieu permanent.",
		fullDescription:
			"Les cadres d'affiches peuvent être utilisés comme un lieu permanent d'affichage publicitaire, avec la possibilité d'échanges graphiques fréquents. Idéalement adapté avant la porte d'entrée ou à l'entrée du bureau, comme un endroit pour fournir des informations actuelles et les plus importantes. Les cadres d'affiches sont dans les dimensions suivantes: A4, A3, A2, A1, A0, B2, B1.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/frames", "Cadres d'affiches"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier Affiche"
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
		advantages: ["échange rapide et facile d'exposition"]
	},
	//[8] Pufy
	{
		group: "Autres",
		name: "Poufs",
		description: "Le siège parfait avec une impression personnalisée.",
		fullDescription:
			"Les poufs imprimés peuvent être un complément parfait au décor d'un stand de salon, d'une exposition, d'un événement ou d'un bureau. Les poufs sont faits de mousse d'ameublement douce et d'une housse avec velcro. Ils viennent en 5 tailles.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/poufs", "Poufs"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [
			["50x50", "http://printxl.pl/templates/Other_PUF50.pdf"],
			["45x45", "http://printxl.pl/templates/Other_PUF45.pdf"],
			["40x40", "http://printxl.pl/templates/Other_PUF40.pdf"],
			["35x35", "http://printxl.pl/templates/Other_PUF35.pdf"],
			["30x30", "http://printxl.pl/templates/Other_PUF30.pdf"]
		],
		advantages: [" affichage publicitaire intéressant", "léger et facile à déplacer"]
	},
	//[9] Listwy Plakatowe
	{
		group: "Autres",
		name: "Le porte-affiche",
		description: "Aspect élégant et montage rapide.",
		fullDescription: "Un aspect très élégant et un assemblage rapide des impressions sont les deux principaux avantages des lattes d'affiches présentées ici.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/strips", "Le porte-affiche"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Bâche Blockout"
			},
			{
				url: "/materials/#bmat",
				materialName: "Bâche Textile Polyester Mat"
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
			"large gamme de largeurs - l'option de lattes sur mesure",
			"peut être monté au mur ou au plafond",
			"profil épais en aluminium anodisé"
		]
	},
	//[10] Parawany
	{
		group: "Autres",
		name: "Paravents",
		description: "Le paravent est un attribut indispensable d'un vacancier balnéaire.",
		fullDescription:
			"Un paravent de plage est un attribut indispensable d'un vacancier balnéaire. Cette forme de publicité, même dans des conditions aussi inhabituelles, permettra une présentation intéressante et efficace de votre entreprise ou service. Nous fabriquons des paravents sur le même tissu que les chaises de plage. De plus, les paravents sont disponibles en plusieurs tailles.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others", "Autres"],
			crumbs3: ["/products/others/windbreak", "Paravents"]
		},
		recommended: [
			{
				url: "/materials/textiles/#polim",
				materialName: "Tissu Monaco"
			},
			{
				url: "/materials/textiles/#havana",
				materialName: "Havana"
			}
		],
		template: [
			["6 segments", "http://printxl.pl/templates/Other_PAR6.pdf"],
			["5 segments", "http://printxl.pl/templates/Other_PAR5.pdf"],
			["4 segments", "http://printxl.pl/templates/Other_PAR4.pdf"],
			["3 segments", "http://printxl.pl/templates/Other_PAR3.pdf"]
		],
		advantages: ["protection contre le vent idéale sur la plage"]
    },
    //[11] Naklejka
	{
		group: "Autres",
		name: "Autocollant",
		description: "N'importe quelle forme et taille. Possibilité de laminage pour améliorer l'immunité.",
		fullDescription:
			"Lors de la création d'autocollants, il y a beaucoup de liberté dans la finition. Les feuilles peuvent être coupées au format souhaité, mais aussi à n'importe quelle forme à l'aide d'un traceur de découpe. Il faut savoir que le plus petit élément pouvant être coupé peut mesurer 5x5 mm. Il est également possible de réaliser un autocollant double face, idéal pour les surfaces transparentes.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/others/", "Autres"],
			crumbs3: ["/products/others/sticker", "Autocollant"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#page=13"]],
		advantages: ["impression permanente", "look efficace", "longue exposition", "la possibilité de laminage"]
	},
];
// Nowości FR
export const NewProductsFR = [
	//[0] Maska ochronna z opaską
	// {
	// 	group: "Nouveauté",
	// 	name: "Masque de protection avec une bande",
	// 	description: "Bandeau hygiénique avec écran facial",
	// 	fullDescription:
	// 		"Masque de protection avec un couvercle en polycarbonate transparent, réglable sur la ceinture. La sangle a une mousse douce qui permet un meilleur ajustement et affecte le confort. L'utilisation d'un masque facial risque de contact avec des germes. Délai de livraison 6 jours.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Accueil"],
	// 		crumbs2: ["/products/new", "Nouveauté"],
	// 		crumbs3: ["/products/new/mask", "Masque de protection avec une bande"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Réutilisable",
	// 		"Verre en polypropylène transparent de 0,8 mm",
	// 		"Bandeau en polypropylène noir avec ajustement en douceur sans utiliser de bandes élastiques",
	// 		"Résistant aux désinfectants à base d'alcool",
	// 		"Confortable à porter grâce à la mousse douce et au faible poids",
   //          "Remplacement du verre possible",
   //          "Dimension verre 35/27 cm à plat"
	// 	]
	// },
	//[1] Maska ochronna z okularami
	// {
	// 	group: "Nouveauté",
	// 	name: "Masque de protection à lunettes",
	// 	description: "Lunettes avec protection faciale.",
	// 	fullDescription:
	// 		"Lunettes de sécurité avec un couvercle en polycarbonate incolore. L'utilisation d'un masque de protection réduit le risque de contact avec les germes Délai de livraison 6 jours.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Accueil"],
	// 		crumbs2: ["/products/new", "Nouveauté"],
	// 		crumbs3: ["/products/new/mask-with-glasses", "Masque de protection à lunettes"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Réutilisable",
	// 		"Verre en polypropylène transparent 0,5 mm",
	// 		"Lunettes de taille universelle",
	// 		"Verre résistant aux désinfectants à base d'alcool",
	// 		"Remplacement du verre",
	// 		"Dimension verre 32/25 cm à plat"
	// 	]
	// },
	//[2] HomeConference
	{
		group: "Nouveauté",
		name: "Stand Photocall",
		description: "Préparez votre espace HOME OFFICE",
		fullDescription:
			" Les murs publicitaires sont une forme idéale de présentation de l'entreprise. Fonctionne très bien comme arrière-plan pour des photos ou des enregistrements. Surtout, tous les types de murs que nous proposons sont très faciles à installer et à transporter.",
		fullDescription2:
			"En utilisant SKYPE pendant HOME OFFICE, vous pouvez faire de la publicité efficace pour votre entreprise. Les murs se distinguent par un design léger et une très grande surface de présentation graphique. L'impression est basée sur le principe de l'étirement de la chaussette. Les dimensions ci-dessous ne sont que les plus fréquemment choisies. Si vous êtes intéressé par un mur plus large, veuillez nous contacter.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/new", "Nouveauté"],
			crumbs3: ["/products/new/homeConference", "Stand Photocall"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
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
		advantages: ["TOP rapport prix / qualité", "Graphique recto / verso", "Montage rapide", "Sac de transport inclus"]
	},
	//[3] Baner na balkon
	{
		group: "Nouveauté",
		name: "Bannière pour le balcon",
		description: "Décorez et sécurisez votre balcon.",
		fullDescription:
			"La bannière sur le balcon a de nombreuses fonctions. Les graphismes appropriés peuvent parfaitement correspondre à la couleur du bâtiment et en même temps augmenter l'intimité des locataires. La bannière peut être montée de plusieurs façons. Nous vous recommandons d'utiliser du velcro ou des œillets. Dans le cas du Velcro, ajoutez le morceau de matériau approprié pour le recouvrement (exemple d'enrouler sur la photo). Vous pouvez imprimer des deux côtés, avec deux graphiques différents.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/new", "Nouveauté"],
			crumbs3: ["/products/new/balcony", "Bannière pour le balcon"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Bâche couchée"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Bâche BLOCKOUT"
			}
		],
		template: [["Instrukcja", "http://printxl.pl/Instructions/Instructions_PL.pdf#3"]],
		advantages: ["l’impression recto/verso", "Exposition à long terme"]
   },
   //[4] Maseczka
	// {
	// 	group: "Nouveauté",
	// 	name: "Face mask",
	// 	description: "Face mask with custom graphics.",
	// 	fullDescription:
	// 		"A two-layer mask made of a softer polyester fabric and a felt interior with a pocket for mounting an additional filter. Solid performance and sublimation printing allows for multiple washing. The mask has elastics to put on the ears. Graphics dimension 20x21.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Accueil"],
	// 		crumbs2: ["/products/new", "Nouveauté"],
	// 		crumbs3: ["/products/new/mask-small", "Face mask"]
	// 	},
	// 	recommended: [],
	// 	template: [],
	// 	advantages: ["Reusable", "Washable", "Solid made", "Custom graphics", "An additional filter pocket"]
	// }
];
// Trybunki FR
export const tribunesFR = [
	//[0] Desq0
	{
		group: "Comptoirs",
		name: "Desq 0",
		description: "Conception très simple: base, plateau et panneau spécial en PVC.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le système Desq 0 se compose d'un plateau et d'une base, reliés entre eux par une feuille de PVC, qui est montée avec du velcro. Surtout, le pliage et le dépliage de ces supports ne prennent pas plus d'une minute, et la légèreté de la structure facilite le transport.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/desq-0", "Desq 0"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Desq0", "http://printxl.pl/templates/Counter_Desq_0.pdf"]],
		advantages: ["top rapport qualité / prix", "montage rapide", "construction légère", "sac et tube pour les graphiques inclus"]
	},
	//[1] Desq 1
	{
		group: "Comptoirs",
		name: "Desq 1",
		description: "Conception très simple: base, plateau et panneau spécial en PVC.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le système Desq 1 se compose d'un plateau et d'une base, reliés entre eux par une feuille de PVC, qui est montée avec du velcro. Surtout, le pliage et le dépliage de ces supports ne prennent pas plus d'une minute, et la légèreté de la structure facilite le transport.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/desq-1", "Desq 1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Desq1", "http://printxl.pl/templates/Counter_Desq_1.pdf"]],
		advantages: ["top rapport qualité / prix", "montage rapide", "construction légère", "sac et tube pour les graphiques inclus"]
	},
	//[2] Desq2
	{
		group: "Comptoirs",
		name: "Desq 2",
		description: "Conception très simple: base, plateau et panneau spécial en PVC.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le système Desq 2 se compose d'un plateau et d'une base, reliés entre eux par une feuille de PVC, qui est montée avec du velcro. Surtout, le pliage et le dépliage de ces supports ne prennent pas plus d'une minute, et la légèreté de la structure facilite le transport.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/desq-2", "Desq 2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Desq2", "http://printxl.pl/templates/Counter_Desq_2.pdf"]],
		advantages: ["Top rapport qualité / prix", "montage rapide", "construction légère", "sac et tube pour les graphiques inclus"]
	},
	//[3] Desq3
	{
		group: "Comptoirs",
		name: "Desq 3",
		description: "Conception très simple: base, plateau et panneau spécial en PVC.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le système Desq 3 se compose d'un plateau et d'une base, reliés entre eux par une feuille de PVC, qui est montée avec du velcro. Surtout, le pliage et le dépliage de ces supports ne prennent pas plus d'une minute, et la légèreté de la structure facilite le transport.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/desq-3", "Desq 3"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Desq3", "http://printxl.pl/templates/Counter_Desq_3.pdf"]],
		advantages: ["Top rapport qualité / prix", "montage rapide", "construction légère", "sac et tube pour les graphiques inclus"]
	},
	//[4] Express
	{
		group: "Comptoirs",
		name: "Express",
		description: "Conception pop-up avec graphiques textiles montés sur velcro.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Stand Express est le complément parfait du mur Velcro - les graphiques sont également montés avec du Velcro et le déploiement du système ne prend qu'un instant. Le kit comprend également une étagère pratique.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Bâche Textile Polyester Mat"
			}
		],
		template: [["Express", "http://printxl.pl/templates/Counter_Express.pdf"]],
		advantages: ["Top rapport qualité / prix", "montage rapide", "construction légère", "sac et tube pour les graphiques inclus"]
	},
	//[5] Popup 2x1
	{
		group: "Comptoirs",
		name: "PopUp 2x1",
		description: "Conception pop-up avec graphiques montés sur un panneau en pvc.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Les murs PopUp se caractérisent par un assemblage simple et une construction légère - ce n'est pas différent pour ce modèle. Comme pour le mur PopUp standard, les graphiques sont présentés sur des panneaux en PVC, mais ils sont montés sur la structure avec des aimants.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/popup-2x1", "PopUp 2x1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["PopUp 2x1", "http://printxl.pl/templates/Counter_PopUp_2x1.pdf"]],
		advantages: ["construction stable", "aspect attrayant", "rack escamotable", "sac inclus"]
	},
	//[6] Popup 2x2
	{
		group: "Comptoirs",
		name: "PopUp 2x2",
		description: "Conception pop-up avec graphiques montés sur un panneau en pvc.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Les murs PopUp se caractérisent par un assemblage simple et une construction légère - ce n'est pas différent pour ce modèle. Comme pour le mur PopUp standard, les graphiques sont présentés sur des panneaux en PVC, mais ils sont montés sur la structure avec des aimants.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/popup-2x2", "PopUp 2x2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["PopUp 2x2", "http://printxl.pl/templates/Counter_PopUp_2x2.pdf"]],
		advantages: ["construction stable", "aspect attrayant", "rack escamotable"]
	},
	//[7] Silic Oval
	{
		group: "Comptoirs",
		name: "Silic Oval",
		description: "Forme unique grâce au graphisme textile avec ruban silicone.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le support Silic est une construction très solide et stable. Dans ce système, les graphiques sont montés avec du ruban de silicone, et grâce à l'utilisation de tissu comme support graphique, le support peut être éclairé de l'intérieur. Ce qui distingue le support Silic Oval, c'est sa forme inhabituelle.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/silic-oval", "Silic Oval"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Silic Oval", "http://printxl.pl/templates/Counter_Silic_oval.pdf"]],
		advantages: ["construction stable", "look efficace", "possibilité de rétro-éclairage de l'intérieur", "sac renforcé inclus"]
	},
	//[8] Silic Rectangle
	{
		group: "Comptoirs",
		name: "Silic Rectangle",
		description: "Forme unique grâce au graphisme textile avec ruban silicone.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le support Silic est une construction très solide et stable. Dans ce système, les graphiques sont montés avec du ruban de silicone, et grâce à l'utilisation de tissu comme support graphique, le support peut être éclairé de l'intérieur.Ce qui le distingue du Silic Rectangle est sa forme inhabituelle.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
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
		advantages: ["construction stable", "look efficace", "possibilité de rétro-éclairage de l'intérieur", "sac renforcé inclus"]
	},
	//[9] Silic Triangle
	{
		group: "Comptoirs",
		name: "Silic Triangle",
		description: "Forme unique grâce au graphisme textile avec ruban silicone.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le support Silic est une construction très solide et stable. Dans ce système, les graphiques sont montés avec du ruban de silicone, et grâce à l'utilisation de tissu comme support graphique, le support peut être éclairé de l'intérieur.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/silic-triangle", "Silic Triangle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Silic Triangle", "http://printxl.pl/templates/Counter_Silic_triangle.pdf"]],
		advantages: ["construction stable", "look efficace", "possibilité de rétro-éclairage de l'intérieur", "sac renforcé inclus"]
	},
	//[10] Upper
	{
		group: "Comptoirs",
		name: "Upper",
		description: "Aucun assemblage supplémentaire requis.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription2:
			"Le comptoir supérieure est entièrement en PVC. De plus, l'ensemble comprend un grand sac de transport - le support est livré dans un élément plié, il ne nécessite donc pas d'assemblage supplémentaire.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/upper", "Upper"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Upper", "http://printxl.pl/templates/Counter_Upper.pdf"]],
		advantages: ["Top rapport qualité / prix", "construction légère", "aucun assemblage requis"]
	},
	//[11] Upper Plus
	{
		group: "Comptoirs",
		name: "Upper Plus",
		description: "La finition la plus populaire. Fournit la force et une installation rapide.",
		fullDescription:
			"Les stands que nous proposons sont un support publicitaire idéal, parfait pour la vente directe, diverses promotions et dégustations. Grâce à la simplicité d'installation, ils sont très populaires sur de nombreux marchés.",
		fullDescription:
			"Le système Upper Plus se compose d'un plateau et d'une base reliés par une feuille de PVC, qui est montée avec du Velcro. Pour répondre aux besoins des clients, nous avons ajouté un panneau en PVC surélevé (sur un cadre en aluminium) au comptoir Upper Plus, grâce auquel votre stand sera certainement plus visible. Surtout, le pliage et le dépliage de ces supports ne prennent pas plus d'une minute, et la légèreté de la structure facilite le transport.",
		breadcrumbs: {
			crumbs1: ["/", "Accueil"],
			crumbs2: ["/products/tribunes", "Comptoirs"],
			crumbs3: ["/products/tribunes/upper-plus", "Upper Plus"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Feuille Monomère"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Film Polymère"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Film"
			}
		],
		template: [["Upper Plus", "http://printxl.pl/templates/Counter_UpperPlus.pdf"]],
		advantages: ["Top rapport qualité / prix", "montage rapide", "construction légère", "sac et tube pour les graphiques inclus"]
	}
];

// mainPageFR
export const mainPageFR = [
	confectionsFR[0],
	flagsFR[0],
	flagsFR[3],
	wallsFR[13],
	othersFR[0],
	standsFR[7],
];