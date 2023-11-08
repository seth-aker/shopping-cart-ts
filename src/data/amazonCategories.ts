import getData from "./amazonData";

const amazonData = getData();

export const topTenCategories = [
    "Toys & Games", 
    "Hobbies", 
    "Home & Kitchen", 
    "Games & Accessories", 
    "Clothing, Shoes & Jewelry", 
    "Sports & Outdoors", 
    "Arts & Crafts", 
    "Costumes & Accessories", 
    "Stuffed Animals & Plush Toys", 
    "Remote & App Controlled Vehicles & Parts", 
    "Party Supplies"]

export const allCategories = amazonData.map(item => {
    const categories: string[] = []
    const itemCategories = item.product_category.split(" | ");
    itemCategories.forEach(category => {
        if(!categories.includes(category) && category != "") {
            categories.push(category);
        }
    })
})
