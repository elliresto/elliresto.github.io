// TODO use proper endpoint
const endpoint = "https://elliresto.s3.amazonaws.com/menu.json";

export const getMenu = async () => {
    const response = await fetch(endpoint);
    const data = await response.json()
    return data;
} 
