export const generalEN = [
	"Interested? Write to us.",
	"Product advantages:",
	"Recommended materials",
	"DTP instructions",
	"Example dimensions [cm]",
	"Specifications:",
	"Topic",
	"Name",
	"e-mail",
	"Message",
	"Send",
	"Download"
];

// -----------------------------------
// finishing EN
export const confectionsEN = [
	//[0] Zrzew i oczka EN
	{
		group: "Banners",
		name: "Welding and rings",
		description: "The most popular finish. Provides strength and quick installation.",
		fullDescription:
			"Two layers of material are welded together, increasing the strength of the edges on which the eyelets are forged. This type of finish allows you to mount the banner almost anywhere, without fear of tearing it.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products", "Banners"],
			crumbs3: ["/products/banners/eyes", "Welding and rings"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#mesh",
				materialName: "Mesh Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=6"]],
		advantages: ["easy assembly", "universal advertisement", "galvanized steel eyelets"]
	},
	//[1] Wycięcie do formatu
	{
		group: "Banners",
		name: "Cut to size",
		description: "Simple cut-out to the desired dimensions.",
		fullDescription:
			"It consists of cutting out the printout to the dimension required by the client - it is used for printouts mounted in special systems or mounted directly to the surface. In the case of vinyl materials, it is possible to put rings on the edges, but in this case, we recommend ordering an additional weld that will strengthen the edges.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products", "Banners"],
			crumbs3: ["/products/banners/format", "Cut to size"]
		},
		recommended: [
			{
				url: "/materials",
				materialName: "Vinyls"
			},
			{
				url: "/materials/foils",
				materialName: "Foils"
			},
			{
				url: "/materials/flat",
				materialName: "Flat Materials"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=5"]],
		advantages: [" precise notch", "smooth edges"]
	},
	//[2] Keder
	{
		group: "Banners",
		name: "Keder",
		description: "For a special system that gives great stability and attractive appearance.",
		fullDescription:
			"Keder, also called tent tape, is a silicone cord (mostly 8,5mm diameter) braided with polyester fabric tape with very high resistance. After sewing the keder with tape, the printout can be mounted in special aluminum constructions that guarantee stability and attractive appearance of the advertisement.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products", "Banners"],
			crumbs3: ["/products/banners/keder", "Keder"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#mesh",
				materialName: "Mesh Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flags"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=7"]],
		advantages: ["durable finish", "high stability"]
	},
	//[3] Rękaw
	{
		group: "Banners",
		name: "Sleeve",
		description: "When it is necessary to hang the advertisement in a visible place.",
		fullDescription:
			"If we want to use pipes or beams to hang the advertisement, it is best to make a tunnel. For example, a print-loading element can be placed in the lower sleeve to prevent wavy material and show the ad in all its glory. When preparing the file, we recommend paying special attention to the place of stitching - this will avoid collision of sewing with inscriptions or other important elements of graphics.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products", "Banners"],
			crumbs3: ["/products/banners/sleeve", "Sleeve"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#mesh",
				materialName: "Mesh Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout Banner"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flags"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=9"]],
		advantages: ["the possibility of exposure 'at height", "easy assembly"]
	},
	//[4] Taśma Silikonowa
	{
		group: "Banners",
		name: "Silicone Tape",
		description: "For a special system with backlighting.",
		fullDescription:
			"Stitching with silicone tape is most often used to display illuminated advertising - a few millimeter thick tape is sewn on the edges of the graphic. The banner finished in this way is placed in special grooves of the backlight system.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products", "Banners"],
			crumbs3: ["/products/banners/tape", "Silicone Tape"]
		},
		recommended: [
			{
				url: "/materials/decorative/#arth",
				materialName: "Artist"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Satin Banner"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=8"]],
		advantages: ["permanent print", "effective look", "backlight option"]
	},
	//[5] Rzep
	{
		group: "Banners",
		name: "Velcro",
		description: "Easy to change exposure.",
		fullDescription:
			"Velcro enables quick and easy replacement of the advertisement. The female velcro is sewn in at the back of the banner as standard, while the male one is sticked on a flat surface with double-sided tape. The print with two types of Velcro sewn in (at opposite ends), can be mounted e.g. around pillars. The Velcro finish is ideal, including as an easy to install pallet cover.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products", "Banners"],
			crumbs3: ["/products/banners/velcro", "Velcro"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=7"]],
		advantages: ["easy to assemble", "large exposure options"]
	}
];

// Flagi EN
export const flagsEN = [
	//Beachflags [0]
	{
		group: "Flags",
		name: "Beachflags",
		description: "Currently the most popular flags.",
		fullDescription:
			"Flags are made of materials with class B1 non-flammability certificate. The most often chosen material is Flag Fabric - very durable, suitable, among others for washing in a washing machine. Another very popular material is Mesh Flag Fabric with a breathable mesh structure, but it is slightly more transparent. Thanks to the use of thermally fixed sublimation printing, the colors of the flags printed by us are vivid, resistant to weather conditions and clearly visible from both sides.",
		fullDescription2:
			"Beachflags are one of the most frequently chosen products by our customers. They come in several shapes and sizes. Our offer also includes flagpoles, which are divided into Standard type - made entirely of fiberglass and Budget - combining aluminum and fiberglass.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/flags", "Flags"],
			crumbs3: ["/products/flags/beachflags", "Beachflags"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flag"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Mesh Flag"
			}
		],
		template: [
			//BG
			//BG
			["Budget F (size-S)", "http://printxl.pl/templates/F-S_BG.pdf"],
			["Budget F (size-M)", "http://printxl.pl/templates/F-M_BG.pdf"],
			["Budget F (size-L)", "http://printxl.pl/templates/F-L_BG.pdf"],
			["Budget F (size-XL)", "http://printxl.pl/templates/F-XL_BG.pdf"],
			["Budget S (size-S)", "http://printxl.pl/templates/S-S_BG.pdf"],
			["Budget S (size-M)", "http://printxl.pl/templates/S-M_BG.pdf"],
			["Budget S (size-L)", "http://printxl.pl/templates/S-L_BG.pdf"],
			["Budget S (size-XL)", "http://printxl.pl/templates/S-XL_BG.pdf"],
			["Budget SP (size-S)", "http://printxl.pl/templates/SP-S_BG.pdf"],
			["Budget SP (size-M)", "http://printxl.pl/templates/SP-M_BG.pdf"],
			["Budget SP (size-L)", "http://printxl.pl/templates/SP-L_BG.pdf"],
			["Budget SP (size-XL)", "http://printxl.pl/templates/SP-XL_BG.pdf"],
			//ST
			["Standard F (size-S)", "http://printxl.pl/templates/F-S_ST.pdf"],
			["Standard F (size-M)", "http://printxl.pl/templates/F-M_ST.pdf"],
			["Standard F (size-L)", "http://printxl.pl/templates/F-L_ST.pdf"],
			["Standard F (size-XL)", "http://printxl.pl/templates/F-XL_ST.pdf"],
			["Standard S (size-S)", "http://printxl.pl/templates/S-S_ST.pdf"],
			["Standard S (size-M)", "http://printxl.pl/templates/S-M_ST.pdf"],
			["Standard S (size-L)", "http://printxl.pl/templates/S-L_ST.pdf"],
			["Standard S (size-XL)", "http://printxl.pl/templates/S-XL_ST.pdf"],
			["Standard SP (size-S)", "http://printxl.pl/templates/SP-S_ST.pdf"],
			["Standard SP (size-M)", "http://printxl.pl/templates/SP-M_ST.pdf"],
			["Standard SP (size-L)", "http://printxl.pl/templates/SP-L_ST.pdf"],
			["Standard SP (size-XL)", "http://printxl.pl/templates/SP-XL_ST.pdf"],
			["Standard SS (size-S)", "http://printxl.pl/templates/SS-S_ST.pdf"],
			["Standard SS (size-M)", "http://printxl.pl/templates/SS-M_ST.pdf"],
			["Standard SS (size-L)", "http://printxl.pl/templates/SS-L_ST.pdf"],
			["Standard SS (size-XL)", "http://printxl.pl/templates/SS-XL_ST.pdf"],
			["Standard SW (size-S)", "http://printxl.pl/templates/SW-S_ST.pdf"],
			["Standard SW (size-M)", "http://printxl.pl/templates/SW-M_ST.pdf"],
			["Standard SW (size-L)", "http://printxl.pl/templates/SW-L_ST.pdf"],
			["Standard SW (size-XL)", "http://printxl.pl/templates/SW-XL_ST.pdf"]
		],
		advantages: ["durable print", "vivid colors", "one mast for many shapes"]
	},
	//Beachflag H [1]
	{
		group: "Flags",
		name: "Beachflag H",
		description: "A simple flag that can be displayed anywhere.",
		fullDescription:
			"Flags are made of materials with class B1 non-flammability certificate. The most often chosen material is Flag Fabric - very durable, suitable, among others for washing in a washing machine. Another very popular material is Mesh Flag Fabric with a breathable mesh structure, but it is slightly more transparent. Thanks to the use of thermally fixed sublimation printing, the colors of the flags printed by us are vivid, resistant to weather conditions and clearly visible from both sides.",
		fullDescription2:
			"This type of flag is as popular as 'regular' beachflags, but the difference in their appearance is clearly visible. Beachflags use a vertical mast with a fiberglass tip that bends into the shape of a flag. In contrast, the H flag has a mast made entirely of aluminum, which gives it a more rectangular shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/flags", "Flags"],
			crumbs3: ["/products/flags/beachflags-h", "Beachflag H"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flag"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Flag Mesh"
			}
		],
		template: [
			["Budget H (size-S)", "http://printxl.pl/templates/H-S_BG.pdf"],
			["Standard H (size-S)", "http://printxl.pl/templates/H-S_ST.pdf"],
			["Standard H (size-M)", "http://printxl.pl/templates/H-M_ST.pdf"],
			["Standard H (size-L)", "http://printxl.pl/templates/H-L_ST.pdf"],
			["Standard H (size-XL)", "http://printxl.pl/templates/H-XL_ST.pdf"]
		],
		advantages: ["larger area for graphic presentation", "quick and easy assembly", "the mast is made entirely of aluminum"]
	},
	//Sail [2]
	{
		group: "Flags",
		name: "Sail",
		description: "New in our offer. The flag is stretched between two masts on a rotating base.",
		fullDescription:
			"Flags are made of materials with class B1 non-flammability certificate. The most often chosen material is Flag Fabric - very durable, suitable, among others for washing in a washing machine. Another very popular material is Mesh Flag Fabric with a breathable mesh structure, but it is slightly more transparent. Thanks to the use of thermally fixed sublimation printing, the colors of the flags printed by us are vivid, resistant to weather conditions and clearly visible from both sides.",
		fullDescription2:
			"Sail type flags are new in our offer. This type of flag allows you to present graphics in a very effective way - a special base is mounted two fiberglass masts on which the flag is applied. Thanks to this solution, in the wind, the flag rotates, exposing all its advantages.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/flags", "Flags"],
			crumbs3: ["/products/flags/sail", "Sail"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flag"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Mesh Flag"
			}
		],
		template: [
			["Sail (size-XL)", "http://printxl.pl/templates/Flag_Sail_XL.pdf"],
			["Sail (size-L)", "http://printxl.pl/templates/Flag_Sail_L.pdf"],
			["Sail (size-M)", "http://printxl.pl/templates/Flag_Sail_M.pdf"],
			["Sail (size-S)", "http://printxl.pl/templates/Flag_Sail_S.pdf"]
		],
		advantages: ["high product quality", "fits all base types", "rotary construction"]
	},
	// Thunder [3]
	{
		group: "Flags",
		name: "Thunder",
		description: "The original shape of the flag spanning between two masts.",
		fullDescription:
			"Flags are made of materials with class B1 non-flammability certificate. The most often chosen material is Flag Fabric - very durable, suitable, among others for washing in a washing machine. Another very popular material is Mesh Flag Fabric with a breathable mesh structure, but it is slightly more transparent. Thanks to the use of thermally fixed sublimation printing, the colors of the flags printed by us are vivid, resistant to weather conditions and clearly visible from both sides.",
		fullDescription2:
			"It is a twin solution for Sail type flags. However, in this case the flag is shaped by the masts of different sizes - the first one is smaller than the second. Masts made of fiberglass.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/flags", "Flags"],
			crumbs3: ["/products/flags/thunder", "Thunder"]
		},
		recommended: [
			{
				url: "/materials/textiles/#flg",
				materialName: "Flag"
			},
			{
				url: "/materials/textiles/#flgMesh",
				materialName: "Mesh Flag"
			}
		],
		template: [
			["Thunder (size-S/M)", "http://printxl.pl/templates/Flag_Thunder_S-M.pdf"],
			["Thunder (size-M/L)", "http://printxl.pl/templates/Flag_Thunder_M-L.pdf"],
			["Thunder (size-L/XL)", "http://printxl.pl/templates/Flag_Thunder_L-XL.pdf"]
		],
		advantages: ["high product quality", "fits all base types", "rotary construction"]
	}
];

// Ścianki EN
export const wallsEN = [
	//[0] W_Express
	{
		group: "Walls",
		name: "Express Line",
		description: "Straight textile wall mounted with velcro.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"The unquestionable advantage of the Express Line system is its simple shape and ease of installation - you can have the wall unfolded even in 3 minutes! The assembly of this wall model is done with Velcro.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Satin Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Line_3x3.pdf"],
			["3x3 with sides", "http://printxl.pl/templates/Wall_Express_Line_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Line_3x4.pdf"],
			["3x4 with sides", "http://printxl.pl/templates/Wall_Express_Line_3x4_side.pdf"]
		],
		advantages: ["low price", "graphics in one part, without division into panels", "quick assembly with Velcro"]
	},
	//[1] W_ExpressArc
	{
		group: "Walls",
		name: "Express Arc",
		description: "Textile arch wall mounted with velcro.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"The unquestionable advantage of the Express Arc system is its unique, arched shape and ease of installation - you can have the wall unfolded even in 3 minutes! The assembly of this wall model is done with Velcro.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/express-arc", "Express Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#bsat",
				materialName: "Satin Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Express_Arc_3x3.pdf"],
			["3x3 with sides", "http://printxl.pl/templates/Wall_Express_Arc_3x3_side.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Express_Arc_3x4.pdf"],
			["3x4 with sides", "http://printxl.pl/templates/Wall_Express_Arc_3x4_side.pdf"]
		],
		advantages: ["low price", "graphics in one part, without division into panels", "quick assembly with Velcro"]
	},
	//[2] W_Popup Line
	{
		group: "Walls",
		name: "PopUp Line",
		description: "A simple wall consisting of panels with foil stuck on. The best value for the product.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"PopUp systems consist of two basic parts: aluminum frame and PVC panels, on which graphics are glued. These panels are mounted on the frame using special hooks. Importantly, the frame is extremely easy to install, and thanks to the side panels folded back, they are almost invisible at the front. PopUp Line has a simple, classic shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/popup", "PopUp Prosta"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Line_3x5.pdf"]
		],
		advantages: [
			"effective graphics display",
			"the ability to buy a graphic replacement kit and use one rack for several graphics",
			"additional options: halogen or LED lighting"
		]
	},
	//[3] W_PopupArc
	{
		group: "Walls",
		name: "PopUp Arc",
		description: "Arc wall consisting of panels with foil stuck on. The best value for the product.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"PopUp systems consist of two basic parts: aluminum frame and PVC panels, on which graphics are glued. These panels are mounted on the frame using special hooks. Importantly, the frame is extremely easy to install, and thanks to the side panels folded back, they are almost invisible at the front. PopUp Arc has a unique arched shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/popup-arc", "PopUp Arc"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Arc_3x5.pdf"]
		],
		advantages: [
			"effective graphics display",
			"the ability to buy a graphic replacement kit and use one rack for several graphics",
			"additional options: halogen or LED lighting"
		]
	},
	//[4] W_PopupMagnetic
	{
		group: "Walls",
		name: "PopUp Magnetic Line",
		description: "Extremely simple assembly and disassembly of the wall with PVC panels. Panels with glued foil.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Unlike standard models, magnetic walls have an unusual system of quick connection of elements using magnets embedded in the construction. In addition, the side panels are bent backwards, so from the front they are visible in 1/3 of the width. This model is in an arc shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/popup-magnetic", "PopUp Magnetic"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Line_3x5_ST.pdf"]
		],
		advantages: ["stable construction", "additional options: halogen or LED lighting", "simple assembly and disassembly"]
	},
	//[5] W_PopupMagneticArc
	{
		group: "Walls",
		name: "PopUp Magnetic Arc",
		description: "Extremely simple assembly and disassembly of the wall with PVC panels. Panels with glued foil.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Unlike standard models, magnetic walls have an unusual system of quick connection of elements using magnets embedded in the construction. In addition, the side panels are bent backwards, so from the front they are visible in 1/3 of the width. This model is in a straight shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/popup-magnetic-arc", "PopUp Magnetic Arc"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Magnetic_Arc_3x5_ST.pdf"]
		],
		advantages: ["stable construction", "simple assembly and disassembly"]
	},
	//[6] W_PopupTwin
	{
		group: "Walls",
		name: "PopUp Twin",
		description: "The best value for the product price and on both sides. Panels with glued foil.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"PopUp systems consist of two basic parts: aluminum frame and PVC panels, on which graphics are glued. These panels are mounted on the frame using special hooks. Importantly, the frame is extremely easy to install. This model is a perfect combination of the highest quality with an extremely competitive price. PopUp systems are unique because the graphics can be seen from all sides.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/popup-twin", "PopUp Twin"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			}
		],
		template: [
			["3x2", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x2.pdf"],
			["3x3", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x4.pdf"],
			["3x5", "http://printxl.pl/templates/Wall_PopUp_Twin_Line_3x5.pdf"]
		],
		advantages: ["two-sided graphics presentation", "extremely light set", "additional options: halogen or LED lighting"]
	},
	//[7] W_Silic
	{
		group: "Walls",
		name: "Silic Line",
		description: "The printout is mounted with silicone tape. Fabric on a neat display system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Silic walls are new on the market. The innovative system means that the lightweight construction becomes stable enough to allow you to impressively present an advertisement that can easily be mounted using silicone tape. The standard version of the wall allows you to mount the graphics only from the front, while the Twin version gives such a possibility on every wall of the system.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/silic", "Silic"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_4x3.pdf"]
		],
		advantages: ["graphics in one part", "simple assembly and disassembly", "stable construction", "bag included"]
	},
	//[8] W_SilicArc
	{
		group: "Walls",
		name: "Silic Arc",
		description: "The printout is mounted with silicone tape. Fabric on an arc system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Silic walls are new on the market. The innovative system means that the lightweight construction becomes stable enough to allow you to impressively present an advertisement that can easily be mounted using silicone tape. The standard version of the wall allows you to mount the graphics only from the front, while the Twin version gives such a possibility on every wall of the system. This model is available in a straight version.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/silic-arc", "Silic Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_4x3.pdf"]
		],
		advantages: ["graphics in one part", "simple assembly and disassembly", "stable construction", "bag included"]
	},
	//[9] W_SilicLed
	{
		group: "Walls",
		name: "Silic Led Line",
		description: "The printout is mounted with silicone tape. Highlighted fabric.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"What distinguishes Silic Led Arc from other walls is the system that has been highlighted by its backlighting with LED curtains. Hundreds of bulbs give a unique effect to the print. Importantly, the wall has mounting strips on both sides, and when using double curtains it can be double-sided. This model is available in an arc version.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
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
		advantages: ["spectacular effect", "two-sided graphics presentation", "LED curtains", "bag included"]
	},
	//[10] W_SilicLedArc
	{
		group: "Walls",
		name: "Silic Led Arc",
		description: "The printout is mounted with silicone tape. Highlighted fabric.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"What distinguishes Silic Led Arc from other walls is the system that has been highlighted by its backlighting with LED curtains. Hundreds of bulbs give a unique effect to the print. Importantly, the wall has mounting strips on both sides, and when using double curtains it can be double-sided. This model is available in a straight version.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
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
		advantages: ["spectacular effect", "two-sided graphics presentation", "LED curtains", "bag included"]
	},
	//[11] W_SilicTwin
	{
		group: "Walls",
		name: "Silic Twin Line",
		description: "The printout is mounted with silicone tape. Double-sided wall.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"This system is designed to present graphics from two sides. The print assembly is the same as in all walls from this series, i.e. using silicone tape. This model is available in an arc version.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/silic-twin", "Silic Twin Prosta"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x3.pdf"],
			["3x4", "http://printxl.pl/templates/Wall_Silic_Line_Twin_3x4.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Line_Twin_4x3.pdf"]
		],
		advantages: ["two-sided graphics presentation", "simple assembly and disassembly", "stable construction", "bag included"]
	},
	//[12] W_SilicTwinArc
	{
		group: "Walls",
		name: "Silic Twin Arc",
		description: "The printout is mounted with silicone tape. Double-sided wall.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"This system is designed to present graphics from two sides. The print assembly system is the same as in all walls of this series, i.e. with the help of silicone tape. This model is available in an arc version.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/silic-twin-arc", "Silic Twin Łukowa"]
		},
		recommended: [
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["3x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_3x3.pdf"],
			["4x3", "http://printxl.pl/templates/Wall_Silic_Arc_Twin_4x3.pdf"]
		],
		advantages: ["two-sided graphics presentation", "simple assembly and disassembly", "stable construction", "bag included"]
	},
	//[13] W_Smart
	{
		group: "Walls",
		name: "Smart Line",
		description: "Lightweight, small construction. The material is applied from the top of the system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Walls from the Smart series are products with many advantages. They are distinguished by, among others, lightweight design, and at the same time a very large area of graphics presentation. The print is based on the principle of stretching the socks, and the frame pipes have a diameter of 32 mm.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/smart", "Smart"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_line_24.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_line_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_line_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_line_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_line_60.pdf"]
		],
		advantages: ["low price", "double-sided graphics", "quick montage", "transport bag included"]
	},
	//[14] W_SmartArc
	{
		group: "Walls",
		name: "Smart Arc",
		description: "Lightweight, small construction. The material is applied from the top of the system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"The presented series of products comes in several interesting shapes. In Arc, thanks to the curved sides, some graphics are also visible from the side. The wall frame is profiled in such a way that it does not require additional stabilizing legs.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/smart-arc", "Smart Arc"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_Arc_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_Arc_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_Arc_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_Arc_50.pdf"]
		],
		advantages: ["double-sided graphics", "quick montage", "anodized aluminum", "transport bag included"]
	},
	//[15] W_SmartS
	{
		group: "Walls",
		name: "Smart S",
		description: "Lightweight, small construction. The material is applied from the top of the system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"By far the most effective version of the Smart walls is the S shape, reminiscent of the shape of a snake. In addition, the entire structure is made of anodized aluminum. It is also worth knowing that graphics can be printed from two sides. All Smart walls are packed in durable bags.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/smart-s", "Smart S"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["2.5", "http://printxl.pl/templates/Wall_Smart_S_25.pdf"],
			["3.0", "http://printxl.pl/templates/Wall_Smart_S_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_S_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_S_50.pdf"],
			["6.0", "http://printxl.pl/templates/Wall_Smart_S_60.pdf"]
		],
		advantages: ["effective look", "double-sided graphics", "quick montage", "transport bag included"]
	},
	//[16] W_SmartU
	{
		group: "Walls",
		name: "Smart U",
		description: "Lightweight, small construction. The material is applied from the top of the system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"This wall has the shape of an arch in a vertical position. This is a very interesting and effective version of the product, standing out in this series. The set includes legs, thanks to which the system is extremely stable.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/smart-u", "Smart U"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			},
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["3.0", "http://printxl.pl/templates/Wall_Smart_U_30.pdf"],
			["4.0", "http://printxl.pl/templates/Wall_Smart_U_40.pdf"],
			["5.0", "http://printxl.pl/templates/Wall_Smart_U_50.pdf"]
		],
		advantages: ["effective look", "quick montage", "transport bag included"]
	},
	//[17] W_Suxen
	{
		group: "Walls",
		name: "Suxen",
		description: "A simple but very ingenious and effective system.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"This system is simple, but very ingenious and effective. The frame is based on a classic pop-up, and the graphics can be printed on a banner or fabric and eyelets in the corners. You can create various shapes and compositions from such prepared prints.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/suxen", "Suxen"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["1box", "http://printxl.pl/templates/Wall_Suxen.pdf"]],
		advantages: ["simple assembly and disassembly", "the ability to create interesting shapes", "transport bag included"]
	},
	//[18] W_Telescope
	{
		group: "Walls",
		name: "Telescopic",
		description: "The most popular finish. Provides strength and quick installation.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. They work well as an element of branding during trade fairs or company celebrations, as well as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Telescopic is a series of walls designed for banner graphics with large areas. These walls are becoming more and more popular due to their simplicity, stability and flexibility. Their design works on the principle of telescopic tubes, thanks to which the frame is adjustable and can be of various sizes.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/walls", "Walls"],
			crumbs3: ["/products/walls/telescopic", "Telescopic", "Telescopic"]
		},
		recommended: [
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			}
		],
		template: [["Telescopic", "http://printxl.pl/templates/Wall_Telescopic.pdf"]],
		advantages: ["low price", "simple assembly and disassembly", "stable construction", "bag included"]
	}
];

// Rollupy EN
export const rollupsEN = [
	//[0] Compact
	{
		group: "Rollups",
		name: "Compact",
		description: "Extremely light and handy system.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"The Compact model is an extremely light and handy system. The diameter of its cassette has been reduced from the classical dimension of 9.3 cm to 8.3 cm. It is an economy class product.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/compact", "Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			"compact and easy to transport",
			"'Express Clip' type strip - quick and easy assembly and replacement of the printout",
			"100% cassette made of anodized aluminum"
		]
	},
	//[1] Standard
	{
		group: "Rollups",
		name: "Standard",
		description: "Bestseller in many markets.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"The Standard model has a mast stabilizer, which ensures durable graphics presentation. In addition, the 'Express Clip' type strip included in the set allows for quick and easy installation, as well as trouble-free graphics exchange. Liked by our customers because of the ideal price-quality ratio.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/standard", "Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
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
			"stable, strong construction 100% made of anodized aluminum",
			"the mast is connected with an elastic cord to prevent losing its elements",
			"Express Clip type strip - quick and easy assembly"
		]
	},
	//[2] Classic
	{
		group: "Rollups",
		name: "Classic",
		description: "Improved bestseller.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"This is an improved version of the Standard model. In addition to the mast stabilizer, it also has reinforcement of the back wall, which guarantees greater stability and longer life. Unlike the Standard model, Classic also has plastic leg ends.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/classic", "Classic"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"rear panel reinforcement with mast stabilizer",
			"3M tape - secure graphics attachment to the winding system",
			"the mast is connected with an elastic cord to prevent losing its elements"
		]
	},
	//[3] Premium
	{
		group: "Rollups",
		name: "Premium",
		description: "This is a very strong, solid and stable construction.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"This type of rollups was made of much thicker aluminum than its predecessors. It is a very strong, solid and stable construction, which is completed by a large, reinforced carrying bag.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/premium", "Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"thick aluminum profile",
			"improved winding system",
			"3M tape for secure graphics attachment",
			"rear panel reinforcement with mast stabilizer"
		]
	},
	//[4] Pro
	{
		group: "Rollups",
		name: "Pro",
		description: "It is the highest model in the rollup category with a classic cassette shape.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"Pro is the highest quality model from the rollup category with a classic cassette shape. The exceptionally thick aluminum profile used in the production of this model guarantees the highest product quality and long-term durability.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/pro", "Pro"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
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
			"available in size 200x200",
			"the thickest aluminum profile",
			"3M tape for secure graphics attachment",
			"the top of the mast does not protrude above the graphics"
		]
	},
	//[5] Exclusive
	{
		group: "Rollups",
		name: "Exclusive",
		description: "Recognized in many markets.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"Rollup recognized in many markets, with an exceptionally elegant appearance, gracefully called a 'tear'. It is characterized by a very durable and stable construction that gracefully presents the graphics.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollupy"],
			crumbs3: ["/products/rollups/exclusive", "Exclusive"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
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
			"modern, elegant look",
			"Express Clip type strip - quick and easy assembly",
			"3M tape for secure graphics attachment",
			"the top of the mast does not protrude above the graphics",
			"available in size 200x200"
		]
	},
	//[6] Twin
	{
		group: "Rollups",
		name: "Twin",
		description: "Twin is the basic model of two-sided rollup.",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2: "Twin is the basic model of two-sided rollup. This model works where graphics presentation is necessary on both sides.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/twin", "Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"]
		],
		advantages: [
			"two-sided graphics presentation option",
			"3M tape for secure graphics attachment",
			"the top of the mast does not protrude above the graphics",
			"Express Clip type strip - quick and easy assembly"
		]
	},
	//[7] Twin Plus
	{
		group: "Rollups",
		name: "Twin Plus",
		description: "Double-sided rollup from the 'higher shelf'",
		fullDescription:
			"The Rollup system is a very popular advertising solution. This is one of the most compact forms of advertising - it is characterized by great ease of use and ease of transport. Each rollup consists of graphics hidden in an aluminum cassette and a three-part frame connected by an elastic band. Rollups are packed in elegant, black bags with a comfortable handle.",
		fullDescription2:
			"Twin Plus is a two-sided model with double graphics. The nickel-plated leg is not only the undoubted ornament of this model, but above all the system stabilization. Thanks to this, this model is also available in 120 and 150 cm widths.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/rollups", "Rollups"],
			crumbs3: ["/products/rollups/twin-plus", "Twin Plus"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/foils/#stplg",
				materialName: "Stoplight"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["rollup 85", "http://printxl.pl/templates/Other_roll85.pdf"],
			["rollup 100", "http://printxl.pl/templates/Other_roll100.pdf"],
			["rollup 120", "http://printxl.pl/templates/Other_roll120.pdf"],
			["rollup 150", "http://printxl.pl/templates/Other_roll150.pdf"]
		],
		advantages: [
			"two-sided graphics presentation option",
			"sizes up to 150 cm wide",
			"the top of the mast does not protrude above the graphics",
			"elegant stabilizing foot"
		]
	}
];

// Pozostał EN
export const othersEN = [
	//[0] Namioty
	{
		group: "Others",
		name: "Tents",
		description: "The fastest way to an outdoor stand.",
		fullDescription:
			"The construction of our tents is made of steel or aluminum and comes in four sizes. The aluminum version is very light and comfortable, especially with frequent changes in the location of the stand. The steel variant is very durable and powder painted white. Importantly, the graphics are printed on a special polyester fabric that meets basic waterproof standards.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/tent", "Tents"]
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
		advantages: ["3M tape for secure graphics attachment", "the top of the mast does not protrude above the graphics"]
	},
	//[1] Leżaki
	{
		group: "Pozostałe",
		name: "Sunbeds",
		description: "Sunbathing in a unique style.",
		fullDescription:
			"Our offer includes two types of deckchairs, with or without armrests made of wood. As a seat, your dream graphics will be mounted, printed on a fabric ideal for such tasks: polyester Monaco.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Pozostałe"],
			crumbs3: ["/products/others/sunbeds", "Sunbeds"]
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
			["Sunbed", "http://printxl.pl/templates/Other_Sunbed.pdf"],
			["Sunbed XXL", "http://printxl.pl/templates/Other_Sunbed_XXL.pdf"]
		],
		advantages: ["possibility of personalization"]
	},
	//[2] O_PalletsCover
	{
		group: "Others",
		name: "Pallet Cover",
		description: "To have order with pallets and advertising in one.",
		fullDescription:
			"Durable and aesthetic covers are the perfect way to cover pallets with your advertisement. The dimensions of the covers depend on the dimensions and number of pallets for which they are to be prepared. Covers for pallets are made of coated banner (waterproof) - the best possible material for their production.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/pallets-cover", "Pallet Cover"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [
			["7 pallets", "http://printxl.pl/templates/Other_Cover7.pdf"],
			["6 pallets", "http://printxl.pl/templates/Other_Cover6.pdf"],
			["5 pallets", "http://printxl.pl/templates/Other_Cover5.pdf"],
			["4 pallets", "http://printxl.pl/templates/Other_Cover4.pdf"],
			["3 pallets", "http://printxl.pl/templates/Other_Cover3.pdf"],
			["2 pallets", "http://printxl.pl/templates/Other_Cover2.pdf"],
			["1 palette", "http://printxl.pl/templates/Other_Cover1.pdf"]
		],
		advantages: ["quick assembly and disassembly", "waterproof material", "durable"]
	},
	//[3] Legtab
	{
		group: "Others",
		name: "Legtab Board",
		description: "A definite bestseller among the trippers.",
		fullDescription:
			"Advertising A-boards are very effective and easy to use advertising media. The ergonomic design, made of the highest quality materials, guarantees its durability and long-term durability.",
		fullDescription2:
			"Thanks to the characteristic 'clip-clap' system for this model, it is possible to replace graphics very quickly and easily. It comes in two popular dimensions: A0 and A1.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/legtab", "Legtab Board"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["two-sided graphics presentation", "very resistant to weather conditions"]
	},
	//[4] Springtab
	{
		group: "Others",
		name: "Springtab Board",
		description: "The wind is not scary for him.",
		fullDescription:
			"Advertising A-boards are very effective and easy to use advertising media. The ergonomic design, made of the highest quality materials, guarantees its durability and long-term durability.",
		fullDescription2:
			"After flooding the base with water, the Springtab baffle becomes a very durable structure, which, in combination with the frame attached to it with solid springs, is resistant, including to strong winds. The graphics are displayed in frames in the dimensions A1 and A0.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/springtab", "Springtab Board"]
		},
		recommended: [
			{
				url: "/materials/foils/#pp",
				materialName: "Papier"
			},
			{
				url: "/materials/foils/#fplbk",
				materialName: "Polyester Blockout Foil"
			}
		],
		template: [
			["A1", "http://printxl.pl/templates/Other_frameA1.pdf"],
			["A0", "http://printxl.pl/templates/Other_frameA0.pdf"]
		],
		advantages: ["two-sided graphics presentation", "quick and easy exchange of exposure"]
	},
	//[5] O_Bubble
	{
		group: "Others",
		name: "Bubble Circle Board",
		description: "Light and stable with an interesting shape.",
		fullDescription:
			"Advertising A-boards are very effective and easy to use advertising media. The ergonomic design, made of the highest quality materials, guarantees its durability and long-term durability, and thanks to attachment to the ground with pins, the Bubble tripod is extremely stable.",
		fullDescription2:
			"Bubble is the perfect advertising system for outdoor events. Its main advantages are easy installation and lightness. In addition, it comes in a variety of shapes, e.g. a circle, an oval or a triangle.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/bubble", "Bubble Circle Board"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#flg",
				materialName: "Flag"
			}
		],
		template: [
			["Oval S", "http://printxl.pl/templates/Other_Bubble_140.pdf"],
			["Oval M", "http://printxl.pl/templates/Other_Bubble_170.pdf"],
			["Oval L", "http://printxl.pl/templates/Other_Bubble_200.pdf"]
		],
		advantages: ["very quick to unfold", "light and stable"]
	},
	//[6] O_Canvas
	{
		group: "Others",
		name: "Canvas",
		description: "Picture on the wall any way you like.",
		fullDescription:
			"Canvas is an unusual material - a canvas with the possibility of using it during digital printing. The graphics are mounted on a stretcher (painting loom). Thanks to this, you can have your dream picture on the wall.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
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
		advantages: ["solid construction"]
	},
	//[7] O_Frames
	{
		group: "Others",
		name: "Poster Frames",
		description: "Frequent change of exposure in a permanent place.",
		fullDescription:
			"Poster frames can be used as a permanent place of advertising display, with the possibility of frequent graphics exchange. Ideally suited to include at the entrance door or at the entrance to the office as a place to provide current and most important information. Poster frames are in the following dimensions: A4, A3, A2, A1, A0, B2, B1.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/frames", "Poster Frames"]
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
		advantages: ["quick and easy exchange of exposure"],
		url: "/products/others/frames"
	},
	//[8] Pufy
	{
		group: "Others",
		name: "Poufs",
		description: "The perfect seat with any graphics.",
		fullDescription:
			"Our poufs with print can be a perfect complement to the decor of a trade fair stand, exhibition, event or office. Each side of the cube can have any print, which makes it possible to freely adapt the advertising message to the circumstances. The poufs are made of soft upholstery foam and a velcro cover. They come in 5 sizes.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/poufs", "Poufs"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [
			["50x50", "http://printxl.pl/templates/Other_PUF50.pdf"],
			["45x45", "http://printxl.pl/templates/Other_PUF45.pdf"],
			["40x40", "http://printxl.pl/templates/Other_PUF40.pdf"],
			["35x35", "http://printxl.pl/templates/Other_PUF35.pdf"],
			["30x30", "http://printxl.pl/templates/Other_PUF30.pdf"]
		],
		advantages: ["interesting advertising display", "light and easy to move"]
	},
	//[9] Listwy Plakatowe
	{
		group: "Others",
		name: "Poster Strips",
		description: "Elegant appearance and quick assembly.",
		fullDescription: "Very elegant appearance and quick print assembly are the two main advantages of the poster slats presented here.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/strips", "Poster Strips"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			},
			{
				url: "/materials/#bmat",
				materialName: "Mat Banner"
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
			"wide range of widths - the option of custom-made slats",
			"can be mounted to the wall or ceiling",
			"thick profile made of anodized aluminum"
		]
	},
	//[10] Parawany
	{
		group: "Others",
		name: "Beach Windbreak",
		description: "A beach windbreaks is an indispensable attribute of a seaside vacationer.",
		fullDescription:
			"A beach windbreaks is an indispensable attribute of a seaside vacationer. This form of advertising, even in such unusual conditions, will allow an interesting and effective presentation of your company or service. We make screens on the same fabric as the beach chairs. In addition, windbreaks are available in several sizes.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/windbreak", "Beach Windbreak"]
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
			["6 segments", "http://printxl.pl/templates/Other_PAR6.pdf"],
			["5 segments", "http://printxl.pl/templates/Other_PAR5.pdf"],
			["4 segments", "http://printxl.pl/templates/Other_PAR4.pdf"],
			["3 segments", "http://printxl.pl/templates/Other_PAR3.pdf"]
		],
		advantages: ["ideal wind protection on the beach"]
	},
	//[11] Naklejka
	{
		group: "Others",
		name: "Sticker",
		description: "Any shape in any dimensions.",
		fullDescription:
			"When creating stickers, there is a lot of freedom in finishing. Foils can be cut to the desired format, but also to any shape using a cutting plotter. It is worth knowing that the smallest element that can be cut can be 5x5 mm. There is also a possibility of making a double-sided sticker, which is ideal for transparent surfaces.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/others", "Others"],
			crumbs3: ["/products/others/sticker", "Sticker"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_EN.pdf#page=13"]],
		advantages: ["permanent print", "effective look", "long exposure", "the possibility of lamination"]
	}
];

// Nowości EN
export const NewProductsEN = [
	//[0] Maska ochronna z opaską
	// {
	// 	group: "News",
	// 	name: "Protective mask with a band",
	// 	description: "Hygienic headband with face shield.",
	// 	fullDescription:
	// 		"Protective mask with a cover made of transparent polycarbonate, adjustable on the belt. The strap has a soft foam that allows a better fit and affects comfort. Using a face mask risk of contact with germs. Delivery time 6 days.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Main page"],
	// 		crumbs2: ["/products/new", "News"],
	// 		crumbs3: ["/products/new/mask", "Protective mask with a band"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Reusable",
	// 		"0.8mm clear polypropylene glass",
	// 		"Black polypropylene headband with smooth adjustment without using elastic bands",
	// 		"Resistant to alcohol-based disinfectants",
	// 		"Comfortable to wear thanks to soft foam and low weight",
	// 		"Glass replacement possible",
	// 		"Glass dimension 35/27 cm flat"
	// 	]
	// },
	//[1] Maska ochronna z okularami
	// {
	// 	group: "News",
	// 	name: "Protective mask with glasses",
	// 	description: "Glasses with face protection.",
	// 	fullDescription:
	// 		"Safety glasses with a cover made of colorless polycarbonate. Using a protective mask reduces the risk of contact with germs Delivery time 6 days.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Main page"],
	// 		crumbs2: ["/products/new", "News"],
	// 		crumbs3: ["/products/new/mask-with-glasses", "Protective mask with glasses"]
	// 	},
	// 	recommended: [
	// 		{
	// 			url: "",
	// 			materialName: ""
	// 		}
	// 	],
	// 	template: [["", ""]],
	// 	advantages: [
	// 		"Reusable",
	// 		"0.5mm clear polypropylene glass",
	// 		"Glasses in a universal size",
	// 		"Glass resistant to alcohol-based disinfectants",
	// 		"Glass replacement",
	// 		"Glass dimension 32/25 cm flat",
	// 	]
	// },
	//[2] HomeConference
	{
		group: "News",
		name: "Conference Wall",
		description: "Extract your HOME OFFICE space.",
		fullDescription:
			"Advertising walls are an ideal form of company presentation. Works great as a background for photos or recordings. Importantly, all the types of walls we offer are very easy to install and easy to transport.",
		fullDescription2:
			"Using SKYPE during HOME OFFICE you can effectively advertise your company. The walls are distinguished by a lightweight design and a very large graphic presentation surface. The printout is based on the principle of stretching the sock. The dimensions below are only the most frequently chosen ones. If you are interested in a wider wall, please contact us.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/new", "News"],
			crumbs3: ["/products/new/homeConference", "Conference Wall"]
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
		advantages: ["low price", "two-sided graphics", "quick montage", "transport bag included"]
	},
	//[3] Baner na balkon
	{
		group: "News",
		name: "Banner for the balcony",
		description: "Decorate and secure your balcony.",
		fullDescription:
			"The banner on the balcony has many functions. Appropriate graphics can perfectly match the color of the building and at the same time increase the privacy of tenants. The banner can be mounted in many ways. We recommend using Velcro or eyelets. In case of Velcro, add the appropriate piece of material for the wrap (example of wrap in pictures). You can print on both sides, with two different graphics.",
		breadcrumbs: {
			crumbs1: ["/", "Main Page"],
			crumbs2: ["/products/new", "News"],
			crumbs3: ["/products/new/balcony", "Banner for the balcony"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
			},
			{
				url: "/materials/#bkhv",
				materialName: "Blockout"
			}
		],
		template: [["Instruction", "http://printxl.pl/Instructions/Instructions_PL.pdf#3"]],
		advantages: ["two-sided printing is possible", "long exposure"]
   },
   //[4] Maseczka
	// {
	// 	group: "Nouveauté",
	// 	name: "Face mask",
	// 	description: "Face mask with custom graphics.",
	// 	fullDescription:
	// 		"A two-layer mask made of a softer polyester fabric and a felt interior with a pocket for mounting an additional filter. Solid performance and sublimation printing allows for multiple washing. The mask has elastics to put on the ears. Graphics dimension 20x21.",
	// 	breadcrumbs: {
	// 		crumbs1: ["/", "Main Page"],
	// 		crumbs2: ["/products/new", "Nouveauté"],
	// 		crumbs3: ["/products/new/mask-small", "Face mask"]
	// 	},
	// 	recommended: [],
	// 	template: [],
	// 	advantages: ["Reusable", "Washable", "Solid made", "Custom graphics", "An additional filter pocket"]
	// }
];

// Standy EN
export const standsEN = [
	//[0] L-Ban Premium
	{
		group: "Stands",
		name: "L-Banner Premium",
		description: "Popular L-banner system, premium class.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"They are called L stands from the letter, which they resemble in shape. L-Banner Premium is a light, practical and easy-to-use exhibition system. Is an extremely economical visual communication tool. Perfect for conferences, shows, exhibitions, as well as at sales locations. Aluminum bottom profiles were used here with a much greater thickness than the cheaper version, while maintaining the lightness of the system and increasing its stability, as well as still allowing for quick exchange of boards.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/l-banner-premium", "L-Banner Premium"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
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
			["100x200", "http://printxl.pl/templates/Stand_Lban100.pdf"],
			["80x180", "http://printxl.pl/templates/Stand_Lban80.pdf"]
		],
		advantages: ["low system cost", "simple and quick assembly", "ultralight", "bag included"]
	},
	//[1] L-Ban Premium Twin
	{
		group: "Stands",
		name: "L-Banner Premium Twin",
		description: "The Twin version, as the name suggests, is two-sided.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"Called L stands from the letter they resemble. It is a light, practical, easy-to-use exhibition system. Is an extremely economical visual communication tool. Perfect for conferences, shows, exhibitions, as well as at sales locations. Aluminum bottom profiles were used here with a much greater thickness than the cheaper version, while maintaining the lightness of the system and increasing its stability, as well as still allowing for quick exchange of boards.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/l-banner-premium-twin", "L-Banner Premium Twin"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
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
		advantages: ["two-sided graphics presentation", "simple and quick assembly", "ultralight", "bag included"]
	},
	//[2] L-Ban ST
	{
		group: "Stands",
		name: "L-Banner Standard",
		description: "Its advantage is very light construction. Easy to transport and very stable at the same time.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"They are called L stands from the letter, which they resemble in shape. It is a light, practical, easy-to-use exhibition system. Is an extremely economical visual communication tool. Perfect for conferences, shows, exhibitions, as well as at sales locations. The aluminum bottom profile ensures stability and facilitates quick board replacement.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/l-banner-standard", "L-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
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
		advantages: ["low system cost", "simple and quick assembly", "ultralight", "bag included"]
	},
	//[3] Portal
	{
		group: "Stands",
		name: "Portal",
		description: "Durable and solid construction. Material mounted with silicone tape.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"Stand Portal is currently the most popular system used for presenting graphics in shopping centers and storefronts. Importantly, the extremely durable and solid construction guarantees a long service life, and thanks to the profile for the silicone tape, installation and replacement of graphics takes only a moment.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/portal", "Portal"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#ledtex",
				materialName: "Ledtex"
			}
		],
		template: [["Portal", "http://printxl.pl/templates/Stand_Portal.pdf"]],
		advantages: [
			"extremely stable and durable construction",
			"two-sided graphics presentation",
			"profile for silicone tape",
			"instant graphics exchange"
		]
	},
	//[4] Totem 1
	{
		group: "Stands",
		name: "Totem 1",
		description: "Extremely impressive stand.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"This system is intended for the presentation of graphics on fabrics. It is characterized by an extremely simple, lightweight construction and rapid assembly. Due to the fact that the fabric is stretched on the frame, the stand can present one- or two-sided graphics.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-1", "Totem 1"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
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
		advantages: ["low system cost", "simple and quick assembly", "bag included"]
	},
	//[5] Totem 2
	{
		group: "Stands",
		name: "Totem 2",
		description: "Extremely impressive stand.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"This system is intended for the presentation of graphics on fabrics. It is characterized by an extremely simple, lightweight construction and rapid assembly. Due to the fact that the fabric is stretched on the frame, the stand can present one- or two-sided graphics. In the case of Totem 2, the legs were replaced with a metal plate. By using this type of base, the system is more stable.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-2", "Totem 2"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
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
		advantages: ["low system cost", "simple and quick assembly", "bag included"]
	},
	//[6] Totem 3
	{
		group: "Stands",
		name: "Totem 3",
		description: "Extremely impressive stand.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"This product is intended for customers who prefer latex or solvent printing technology. Thanks to the use of special catches, Totem 3 will very effectively present graphics printed on a popular coated banner. Also in this case, the graphics can be presented on both sides - after printing on Blockout material.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-3", "Totem 3"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
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
		advantages: ["printing on coated banner", "low cost", "simple and quick assembly", "bag included"]
	},
	//[7] Totem Plus
	{
		group: "Stands",
		name: "Totem Plus",
		description: "The perfect solution for events.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"An excellent choice for companies organizing presentation events in the form of banquets, events or cocktails. Due to the fact that the wall has an additional shelf, this product can act as a cocktail table and advertising medium in one. Importantly, the system presents graphics on both sides.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/totem-plus", "Totem Plus"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			},
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Totem Plus", "http://printxl.pl/templates/Stand_Totem_PLUS.pdf"]],
		advantages: ["practical shelf", "bilateral", "quick montage", "frame and bag included"]
	},
	//[8] X-Banner Compact
	{
		group: "Stands",
		name: "X-Banner Compact",
		description: "An economical way of presenting your ad.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"An economical version of the popular graphic presentation system, which owes its name to the characteristic shape of the letter X. This wall model was entirely made of fiberglass, thanks to which its construction is ultra-light, but very stable. The X- Banner Compact is a simple way for effective graphics presentation.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/x-banner-compact", "X-Banner Compact"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
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
		advantages: ["low system cost", "simple and quick assembly", "ultralight", "bag included"]
	},
	//[9] X-Ban Standard
	{
		group: "Stands",
		name: "X-Banner Standard",
		description: "Higher model of the X-banner system.",
		fullDescription: "Stands are systems that resemble rollups in size, but give much greater possibilities of advertising exposure.",
		fullDescription2:
			"The X-banner standard is the higher system model in the X-banner series. It is more stable and durable than its predecessors. In addition, it was made of elegant, corrosion-resistant metal, and yet it is still an ultra-light system. Thanks to its simplicity, folding and unfolding takes only a few seconds.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/stands", "Stands"],
			crumbs3: ["/products/stands/x-banner-standard", "X-Banner Standard"]
		},
		recommended: [
			{
				url: "/materials/#bpwl",
				materialName: "Coated Banner"
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
		advantages: ["high quality", "available in larger format: 120x210", "easy to use", "ultralight"]
	}
];

// Trybunki EN
export const tribunesEN = [
	//[0] Desq0
	{
		group: "Tribunes",
		name: "Desq 0",
		description: "Very simple design: base, top and special PVC panel.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Desq 0 system consists of a table top and base, connected together by a PVC sheet, which is mounted with Velcro. Importantly, folding and unfolding these stands takes no more than a minute, and the lightness of the structure facilitates transport.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/desq-0", "Desq 0"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Desq0", "http://printxl.pl/templates/Counter_Desq_0.pdf"]],
		advantages: ["low price", "quick montage", "lightweight design", "bag and tube for graphics included"]
	},
	//[1] Desq 1
	{
		group: "Tribunes",
		name: "Desq 1",
		description: "Very simple design: base, top and special PVC panel.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Desq 1 system consists of a table top and base, connected together by a PVC sheet, which is mounted using Velcro. Importantly, folding and unfolding these stands takes no more than a minute, and the lightness of the structure facilitates transport.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/desq-1", "Desq 1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Desq1", "http://printxl.pl/templates/Counter_Desq_1.pdf"]],
		advantages: ["low price", "quick montage", "lightweight design", "bag and tube for graphics included"],
		url: "/products/tribunes/desq-1"
	},
	//[2] Desq2
	{
		group: "Tribunes",
		name: "Desq 2",
		description: "Very simple design: base, top and special PVC panel.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Desq 2 system consists of a table top and base, connected together by a PVC sheet, which is mounted with Velcro. Importantly, folding and unfolding these stands takes no more than a minute, and the lightness of the structure facilitates transport.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/desq-2", "Desq 2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Desq2", "http://printxl.pl/templates/Counter_Desq_2.pdf"]],
		advantages: ["low price", "quick montage", "lightweight design", "bag and tube for graphics included"]
	},
	//[3] Desq3
	{
		group: "Tribunes",
		name: "Desq 3",
		description: "Very simple design: base, top and special PVC panel.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Desq 3 system consists of a table top and base, connected together by a PVC sheet, which is mounted with Velcro. Importantly, folding and unfolding these stands takes no more than a minute, and the lightness of the structure facilitates transport.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/desq-3", "Desq 3"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Desq3", "http://printxl.pl/templates/Counter_Desq_3.pdf"]],
		advantages: ["low price", "quick montage", "lightweight design", "bag and tube for graphics included"]
	},
	//[4] Express
	{
		group: "Tribunes",
		name: "Express",
		description: "Pop-up design with velcro-mounted textile graphics.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"Stand Tribune is the perfect complement to the Velcro wall - graphics are also mounted with Velcro, and the system unfolding takes only a moment. The kit also includes a practical shelf.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/express", "Express"]
		},
		recommended: [
			{
				url: "/materials/textiles/#bmat",
				materialName: "Mat Banner"
			}
		],
		template: [["Express", "http://printxl.pl/templates/Counter_Express.pdf"]],
		advantages: ["low price", "quick montage", "lightweight design", "bag and tube for graphics included"]
	},
	//[5] Popup 2x1 ----------------------------
	{
		group: "Tribunes",
		name: "PopUp 2x1",
		description: "Pop-up design with graphics mounted on a pvc panel.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"PopUp walls are characterized by simple assembly and lightweight construction - this is no different for this model. As with the standard PopUp wall, graphics are presented on PVC panels, however, they are mounted to the structure with magnets.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/popup-2x1", "PopUp 2x1"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["PopUp 2x1", "http://printxl.pl/templates/Counter_PopUp_2x1.pdf"]],
		advantages: ["stable construction", "attractive appearance", "pop-up rack", "bag included"]
	},
	//[6] Popup 2x2
	{
		group: "Tribunes",
		name: "PopUp 2x2",
		description: "Pop-up design with graphics mounted on a pvc panel.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"PopUp walls are characterized by simple assembly and lightweight construction - this is no different for this model. As with the standard PopUp wall, graphics are presented on PVC panels, however, they are mounted to the structure with magnets.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/popup-2x2", "PopUp 2x2"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["PopUp 2x2", "http://printxl.pl/templates/Counter_PopUp_2x2.pdf"]],
		advantages: ["stable construction", "attractive appearance", "pop-up rack"]
	},
	//[7] Silic Oval
	{
		group: "Tribunes",
		name: "Silic Oval",
		description: "Unique shape thanks to textile graphics with silicone tape.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Silic stand is a very solid and stable construction. In this system, graphics are mounted using silicone tape, and thanks to the use of fabric as a graphic carrier, the stand can be illuminated from the inside. What distinguishes the Silic Oval stand is the unusual shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/silic-oval", "Silic Oval"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Silic Oval", "http://printxl.pl/templates/Counter_Silic_oval.pdf"]],
		advantages: ["stable construction", "effective look", "possibility of backlighting from the inside", "reinforced bag included"]
	},
	//[8] Silic Rectangle
	{
		group: "Tribunes",
		name: "Silic Rectangle",
		description: "Unique shape thanks to textile graphics with silicone tape.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Silic stand is a very solid and stable construction. In this system, graphics are mounted using silicone tape, and thanks to the use of fabric as the graphic carrier, the stand can be illuminated from the inside. What distinguishes the stand from Silic Rectangle is its unusual shape.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
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
		advantages: ["stable construction", "effective look", "possibility of backlighting from the inside", "reinforced bag included"]
	},
	//[9] Silic Triangle
	{
		group: "Tribunes",
		name: "Silic Triangle",
		description: "Unique shape thanks to textile graphics with silicone tape.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Silic stand is a very solid and stable construction. In this system, graphics are mounted using silicone tape, and thanks to the use of fabric as a graphic carrier, the stand can be illuminated from the inside.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Trybunki"],
			crumbs3: ["/products/tribunes/silic-triangle", "Silic Triangle"]
		},
		recommended: [
			{
				url: "/materials/textiles/#stretch",
				materialName: "Stretch"
			}
		],
		template: [["Silic Triangle", "http://printxl.pl/templates/Counter_Silic_triangle.pdf"]],
		advantages: ["stable construction", "effective look", "possibility of backlighting from the inside", "reinforced bag included"]
	},
	//[10] Upper
	{
		group: "Tribunes",
		name: "Upper",
		description: "No additional assembly required.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription2:
			"The Upper Grandstand is made entirely of PVC. In addition, the set includes a large transport bag - the stand is delivered in one folded element, therefore it does not require additional assembly.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/upper", "Upper"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Upper", "http://printxl.pl/templates/Counter_Upper.pdf"]],
		advantages: ["low price", "lightweight design", "no assembly required"]
	},
	//[11] Upper Plus
	{
		group: "Tribunes",
		name: "Upper Plus",
		description: "The most popular finish. Provides strength and quick installation.",
		fullDescription:
			"The stands we offer are an ideal advertising medium, perfect for direct sales, various promotions and tastings. Thanks to the simplicity of installation, they are very popular in many markets.",
		fullDescription:
			"The Upper Plus system consists of a table top and base connected by a PVC sheet, which is mounted with Velcro. To meet the needs of customers, we added a raised PVC panel (on an aluminum frame) to the Upper Plus countertop, thanks to which your stand will certainly be more visible. Importantly, folding and unfolding these stands takes no more than a minute, and the lightness of the structure facilitates transport.",
		breadcrumbs: {
			crumbs1: ["/", "Main page"],
			crumbs2: ["/products/tribunes", "Tribunes"],
			crumbs3: ["/products/tribunes/upper-plus", "Upper Plus"]
		},
		recommended: [
			{
				url: "/materials/foils/#fmma",
				materialName: "Monomeric Foil"
			},
			{
				url: "/materials/foils/#fpl0g",
				materialName: "Polimeric Foil"
			},
			{
				url: "/materials/foils/#fwlk",
				materialName: "Cast Foil"
			}
		],
		template: [["Upper Plus", "http://printxl.pl/templates/Counter_UpperPlus.pdf"]],
		advantages: ["low price", "quick montage", "lightweight design", "bag and tube for graphics included"]
	}
];

// mainPageEN
export const mainPageEN = [
	confectionsEN[0],
	flagsEN[0],
	flagsEN[3],
	wallsEN[13],
	othersEN[0],
	standsEN[7],
];
