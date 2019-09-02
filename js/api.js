// TODO vseguin return from API
const menu = {
    food: {
        categories: [{
            name: "le snack",
            values: [{
                name: "boulangerie",
                description: "assiette de pain Le Goût Du Plaisir",
                price: "2"
            }, {
                name: "hummus",
                description: "du moment",
                price: "5"
            }, {
                name: "olives",
                description: "du moment",
                price: "5"
            }, {
                name: "marinés",
                description: "variétés de légumes du marché",
                price: "5"
            }, {
                name: "planche de charcuteries",
                description: "légumes marinés, croûtons, moutarde",
                price: "10"
            }]
        }, {
            name: "le froid",
            values: [{
                name: "oeuf de canne parfait",
                description: "asperges et crumble de cacahuète",
                price: "10"
            }, {
                name: "orge perlé",
                description: "bouillon au saveur d’orange et légumes croquants",
                price: "10"
            }, {
                name: "tomates de la ferme Marcoux",
                description: "crues et confites, faisselle de chèvre en deux façons et gel de basilic ",
                price: "12/16"
            }, {
                name: "omble",
                description: "gravlax brûlée à la torche, déclinaison de pommes et cerfeuil",
                price: "18/26"
            }]
        }, {
            name: "le chaud",
            values: [{
                name: "quinoa",
                description: "lait d’amande, tofu mariné aux agrumes et champignons à la coriandre",
                price: "11"
            }, {
                name: "terre & mer",
                description: "flanc de porc confit, poulpe grillé, frites de polenta au citron, asperges et chutney de citron au nori",
                price: "11"
            }, {
                name: "volaille",
                description: "champignons,amandes, pommes de terre de l’Île d’Orléans au romarin et purée de petits pois",
                price: "13/20"
            }, {
                name: "aiglefin",
                description: "oignons verts grillés, soubise d’oignons doux, salsa de tomates et herbes fraîches",
                price: "16/23"
            }]
        }, {
            name: "le sucré",
            values: [{
                name: "millefeuille au chocolat",
                description: "épices et ganache au café",
                price: "7"
            }, {
                name: "tiramisu",
                description: "bleuet et érable",
                price: "8.50"
            }]
        }]
    },
    drinks: {
        categories: [{
            name: "cocktails",
            values: [{
                name: "spritz martini",
                description: "gin Tanqueray,Vermouth blanc, prosecco et huile de citron",
                price: "7"
            }, {
                name: "campari twist",
                description: "Campari, Lilet, gin Radoune,pamplemousse et bière de gingembre",
                price: "8.5"
            }, {
                name: "vanillaperol",
                description: "Aperol,Chambord,Galiano, sirop de romarin et lime",
                price: "10.5"
            }, {
                name: "italian bloody",
                description: "vodka Finlandia,basilic, bitter de céleri,fumé,lime et cornichon mariné",
                price: "7"
            }, {
                name: "veggie margarita",
                description: "tequila El Jimador,jus de poivrons grillés,red hot, citron et bitter de céleri",
                price: "10.5"
            }, {
                name: "tokyo spice",
                description: "vodka Finlandia,sirop de rose, gingembre,wasabi et lime",
                price: "7.5"
            }, {
                name: "foggy",
                description: "gin Radoune,Soho,sirop de thym,lime et aquafaba ",
                price: "10.5"
            }]
        }, {
            name: "vins blancs",
            values: [{
                name: "Pierre à feu",
                description: "Sauvignon Touraine,Loire,France 2017",
                price: "8/40"
            }, {
                name: "Domaine du Fresche",
                description: "Chenin Blanc Anjou,Loire,France",
                price: "12/60"
            }, {
                name: "Soave Classico",
                description: "Garganega Soave,Vénétie,Italie 2016",
                price: "9/45"
            }, {
                name: "Domaine Dugois",
                description: "Chardonnay Arbois,Jura,France 2013",
                price: "12/60"
            }, {
                name: "Drago Bianco",
                description: "Garganega Vénétie, Italie",
                price: "12/60"
            }, {
                name: "Palpite",
                description: "Arinto-Verdelho-Antão Vaz Alentejano, Portugal 2016",
                price: "14.5/72.5"
            }]
        }, {
            name: "vins rouges",
            values: [{
                name: "Bodegas Aessir",
                description: "Bobal Iniesta, Cuenca, Espagne 2015",
                price: "6.5/32.5"
            }, {
                name: "Kings Ridge",
                description: "Pinot Noir Willamette Valley,Oregon, ÉtatsUnis 2016",
                price: "9.5/47.5"
            }, {
                name: "Vega Sindoa",
                description: "Tempranillo Navarra, Espagne 2016",
                price: "7/35"
            }, {
                name: "À tout de suite",
                description: "Pinot Noir Willamette Valley,Oregon, ÉtatsUnis 2017",
                price: "11/55"
            }, {
                name: "Pure",
                description: "Cabernet Franc Domaine de Brau,Pays D’Oc, France 2013",
                price: "7/35"
            }, {
                name: "L’Arco",
                description: "Corvina-RondinellaMolinara-Sangiovese Valpolicella,Vérone,Italie 2015",
                price: "11/55"
            }]
        }, {
            name: "bulles rosé",
            values: [{
                name: "Baga Luis Pato",
                description: "Baga Bairrada, Anadia, Portugal 2016",
                price: "36"
            }]
        }, {
            name: "champagne",
            values: [{
                name: "Alfred Basely",
                description: "Brut, Champagne Champillon, France",
                price: "64"
            }]
        }, {
            name: "vin de dessert",
            values: [{
                name: "Domaine de la Tour Vieille",
                description: "Grenache-Mourvèdre-Syrah Banyuls, Languedoc, France 2017",
                price: "50"
            }]
        }]
    }
}

export const getMenu = async () => {
    return menu;
} 
