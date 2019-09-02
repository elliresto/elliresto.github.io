// TODO use proper endpoint
const endpoint = "http://elliresto.s3-website-us-west-2.amazonaws.com/menu.json";

export const getMenu = async () => {
    const response = await fetch(endpoint);
    const data = await response.json()
    return data;
} 
