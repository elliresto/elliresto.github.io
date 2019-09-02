// TODO vseguin return from API
const menu = {
    food: {
        snacks: [{
            name: "hummus",
            description: "du moment",
            price: 5
        }, {
            name: "olives",
            description: "du moment",
            price: 5
        }, {
            name: "planche de charcuteries",
            description: "moutarde et légumes marinés",
            price: 10
        }]
    }
}

export const getMenu = async () => {
    return menu;
} 
