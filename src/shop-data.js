const SHOP_DATA = [
	{
		title: "Cameras",
		items: [
			{
				id: 1,
				name: "Canon R5",
				imageUrl: "https://i.ibb.co/7491mnT/car5.jpg",
				price: 3399.0,
			},
			{
				id: 2,
				name: "Canon R50",
				imageUrl: "https://i.ibb.co/yqCPv0t/car50.jpg",
				price: 679.0,
			},
			{
				id: 3,
				name: "Canon R50",
				imageUrl: "https://i.ibb.co/yqCPv0t/car50.jpg",
				price: 679.0,
			},
			{
				id: 4,
				name: "Sony Alpha 1",
				imageUrl: "https://i.ibb.co/6t0ssVg/isoa1.jpg",
				price: 6489.0,
			},
			{
				id: 5,
				name: "Sony Alpha a7R V",
				imageUrl: "https://i.ibb.co/KzcsPCp/isoa7r5.jpg",
				price: 3898.0,
			},
			{
				id: 6,
				name: "Sony Alpha a7 IV",
				imageUrl: "https://i.ibb.co/HTNfPkT/isoa7m4.jpg",
				price: 3898.0,
			},
			{
				id: 7,
				name: "Sony Alpha a6400",
				imageUrl: "https://i.ibb.co/N98cgMf/isoa6400.jpg",
				price: 898.0,
			},
			{
				id: 8,
				name: "Leica M11 Rangefinder",
				imageUrl: "https://i.ibb.co/6sGdnJM/lcm11b.jpg",
				price: 8995.0,
			},
		],
	},
	{
		title: "Lenses",
		items: [
			{
				id: 9,
				title: "Canon RF 70-200mm f/2.8",
				imageUrl: "https://i.ibb.co/xGshnVH/car7020028.jpg",
				price: 2599.0,
			},
			{
				id: 10,
				title: "Canon RF 24-70 f/2.8",
				imageUrl: "https://i.ibb.co/hdkjcMh/car2470.jpg",
				price: 2199.0,
			},
			{
				id: 12,
				title: "Canon RF 50mm f/1.2",
				imageUrl: "https://i.ibb.co/9GmxgCm/car5012.jpg",
				price: 2099.0,
			},
			{
				id: 13,
				title: "Canon RF 85mm f/1.2",
				imageUrl: "https://i.ibb.co/NtzjGYD/car8512.jpg",
				price: 2899.0,
			},
			{
				id: 14,
				title: "Fujifilm XF 23mm f/2",
				imageUrl: "https://i.ibb.co/GWfRqb5/ifj232b.jpg",
				price: 449.0,
			},
			{
				id: 15,
				title: "Fujifilm XF 35mm f/2",
				imageUrl: "https://i.ibb.co/5rQ2V4p/ifj352xf.jpg",
				price: 399.0,
			},
			{
				id: 16,
				title: "Fujifilm XF 16-55mm f/2.8",
				imageUrl: "https://i.ibb.co/3fb6Hv7/ifj165528.jpg",
				price: 1199.0,
			},
			{
				id: 17,
				title: "Sony FE 24-70mm f/2.8 GM II",
				imageUrl: "https://i.ibb.co/4NL0Vtf/iso2470gm.jpg",
				price: 2298.0,
			},
			{
				id: 18,
				title: "Sony FE 70-200mm f/2,8 GM II",
				imageUrl: "https://i.ibb.co/cL5QGdK/iso70200gm2.jpg",
				price: 2798.0,
			},
			{
				id: 19,
				title: "Sony FE 35mm f/1.4 GM",
				imageUrl: "https://i.ibb.co/zGgpsCy/iso3514gm.jpg",
				price: 1398.0,
			},
		],
	},
	{
		title: "Filters",
		items: [
			{
				id: 20,
				title: "Hasselblad 67mm ND8",
				imageUrl: "https://i.ibb.co/Xt1CLgJ/hscphb75301.jpg",
				price: 239.0,
			},
			{
				id: 21,
				title: "Hasselblad 62mm ND8",
				imageUrl: "https://i.ibb.co/3mmLRWn/hscphb75701.jpg",
				price: 229.0,
			},
			{
				id: 22,
				title: "PolarPro Peter McKinnon VND",
				imageUrl: "https://i.ibb.co/805LVJF/pp8225vnded2.jpg",
				price: 249.0,
			},
			{
				id: 23,
				title: "Hoya 49mm 2X ND",
				imageUrl: "https://i.ibb.co/9t9mTs8/hy82cplhd3.jpg",
				price: 19.0,
			},
			{
				id: 24,
				title: "Moment 82mm CineBloom Diffusion",
				imageUrl: "https://i.ibb.co/s2Tj9Dp/mo600080.jpg",
				price: 69.0,
			},
			{
				id: 25,
				title: "Tiffen 58mm Color Graduated ND",
				imageUrl: "https://i.ibb.co/kGYjNk7/tf58cgnd6x.jpg",
				price: 32.0,
			},
		],
	},
	{
		title: "Lighting",
		items: [
			{
				id: 26,
				title: "Flashpoint BLAZ 300 Studio",
				imageUrL: "https://i.ibb.co/HpjjZzF/fplfbl300vk2.jpg",
				price: 329.0,
			},
			{
				id: 27,
				title: "Flashpoint Studio 300 II",
				imageUrL: "https://i.ibb.co/sbZdQc7/fplfs300ivk2.jpg",
				price: 599.0,
			},
			{
				id: 28,
				title: "Flashpoint Studio 400 II",
				imageUrL: "https://i.ibb.co/xmGZh37/fplfs400ivk1.jpg",
				price: 469.0,
			},
			{
				id: 29,
				title: "Flashpoint Rapid 600 II",
				imageUrL: "https://i.ibb.co/b58Vh62/fplfrp600ii2.jpg",
				price: 1298.0,
			},
		],
	},
	{
		title: "Tripods",
		items: [
			{
				id: 30,
				title: "JOBY GorillaPod",
				imageUrL: "https://i.ibb.co/5MHQsP0/jogp3kkpro.jpg",
				price: 164.0,
			},
			{
				id: 31,
				title: "FotoPro X-Aircross",
				imageUrL: "https://i.ibb.co/RP0Wmnf/fpxairc2fo.jpg",
				price: 189.0,
			},
			{
				id: 32,
				title: "Benro MeFOTO GlobeTrotter",
				imageUrL: "https://i.ibb.co/KGcmM9y/bemgtcblk.jpg",
				price: 369.0,
			},
			{
				id: 33,
				title: "Vanguard ALTA Pro",
				imageUrL: "https://i.ibb.co/H2LHCS2/vgapro264tbh.jpg",
				price: 199.0,
			},
		],
	},
	{
		title: "Backpacks",
		items: [
			{
				id: 34,
				title: "Lowepro Fastpack BP 250",
				imageUrL: "https://i.ibb.co/fvChsPq/lpfpbp250.jpg",
				price: 159.0,
			},
			{
				id: 35,
				title: "MindShift Gear BackLight 36L",
				imageUrL: "https://i.ibb.co/qMXWW5r/msgbl36lbch.jpg",
				price: 318.0,
			},
			{
				id: 36,
				title: "Nomatic Peter McKinnon 35L",
				imageUrL: "https://i.ibb.co/GVBR19m/nompmtpblk01.jpg",
				price: 399.0,
			},
			{
				id: 37,
				title: "Shimoda Explore V2 30L",
				imageUrL: "https://i.ibb.co/QXpgr6M/sh520154.jpg",
				price: 309.0,
			},
		],
	},
];

export default SHOP_DATA;
