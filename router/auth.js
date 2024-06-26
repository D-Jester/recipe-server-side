//importing dependencies 
const { default: axios } = require('axios');
const express = require('express')
const Router = express.Router();
const cors = require('cors')
Router.use(cors({
    origin:["https://recipe-app-2be3.onrender.com"]
    // origin: ["http://localhost:3000"]
}))


//setting routing components

//getting 10random items
Router.get('/randomItems', async (req, res) => {
    const dishes = new Array(8)
    for (let i = 0; i < 8; i++) {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
        dishes[i] = response.data
    }
    res.json({ data: dishes })
})

//gettings regional dishes
Router.get('/regionDishes', async (req,res)=>{
    let region = req.query.r
    const link = "https://www.themealdb.com/api/json/v1/1/filter.php?a="+region
    const response = await axios.get(link)
    .then(data=>{
        return data.data
    })
    .catch(err=>{
        console.log(err)
        return
    })
    res.json({data:response})
})

//getting category dishes
Router.get('/categoryDishes', async(req,res)=>{
    const category = req.query.c
    const link = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+category
    const response = await axios.get(link)
    .then(data=>{
        return data.data
    })
    .catch(err=>{
        console.log(err)
        return
    })
    res.json({data:response})
})

//getting category list
Router.get('/categoryList', (req, res) => {
    const category = [
        {
            name: "Beef",
            type: "Beef",
            image: "https://www.themealdb.com/images/category/beef.png",
            description:"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients."
        },
        {
            name: "Breakfast",
            type: "Breakfast",
            image: "https://www.themealdb.com/images/category/breakfast.png",
            description: "Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more \"typical\", or \"traditional\", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast."
        },
        {
            name: "Chicken",
            type: "Chicken",
            image: "https://www.themealdb.com/images/category/chicken.png",
            description: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
        },
        {
            name: "Dessert",
            type: "Dessert",
            image: "https://www.themealdb.com/images/category/dessert.png",
            description: "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts."
        },
        {
            name: "Goat",
            type: "Goat",
            image: "https://www.themealdb.com/images/category/goat.png",
            description: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
        },
        {
            name: "Lamb",
            type: "Lamb",
            image: "https://www.themealdb.com/images/category/lamb.png",
            description: "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent."
        },
        {
            name: "Miscellaneous",
            type: "Miscellaneous",
            image: "https://www.themealdb.com/images/category/miscellaneous.png",
            description:"General foods that don't fit into another category"
        },
        {
            name: "Pasta",
            type: "Pasta",
            image: "https://www.themealdb.com/images/category/pasta.png",
            description: "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat. Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca)."
        },
        {
            name: "Pork",
            type: "Pork",
            image: "https://www.themealdb.com/images/category/pork.png",
            description: "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries."
        },
        {
            name: "Seafood",
            type: "Seafood",
            image: "https://www.themealdb.com/images/category/seafood.png",
            description: "Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term \"seafood\" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life."
        },
        {
            name: "Side Items",
            type: "Side",
            image: "https://www.themealdb.com/images/category/side.png",
            description:"A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes)."
        },
        {
            name: "Starters",
            type: "Starter",
            image: "https://www.themealdb.com/images/category/starter.png",
            description: "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert."
        },
        {
            name: "Vegan",
            type: "Vegan",
            image: "https://www.themealdb.com/images/category/vegan.png",
            description: "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable."
        },
        {
            name: "Vegetarian",
            type: "Vegetarian",
            image: "https://www.themealdb.com/images/category/vegetarian.png",
            description: "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish."
        }
    ]
    res.json({ data: category })
})

//getting food recipe
Router.get("/getRecipe",async(req,res)=>{
    const id = req.query.id
    const name = req.query.name
    let link
    if(id === null || id === "" || id === undefined){
        if(name === null || name === "" || name === undefined){
            res.json({message:"Bad Request"})
        }else{
            link = "https://www.themealdb.com/api/json/v1/1/search.php?s="+name
        }
    }else{
        link = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id
    }
    const response = await axios.get(link)
    .then(data=>{
        return data.data.meals
    })
    .catch(err=>{
        console.log(err)
        return 
    })
    
    //function
    //gettinf ingredients
    const getIngredientList=(value)=>{
        let ingredientList =[]
        let substr = "strIngredient"
        for(const key of Object.keys(value)){
            if(key.includes(substr)){
                let ingredient = value[key]
                if((ingredient!=="")&&(ingredient!==null)){
                    ingredientList.push(ingredient)
                }                
            }
        }        
        return ingredientList
    }
    //getting instructions
    const getInstructions= (instructionStr) =>{
        let instructions=[]
        let sentence = ""
        for(let letter of instructionStr){
            if(letter === "."){
                sentence = sentence + letter + " "
            }else{
                sentence =  sentence + letter
            }
        }
        let words = sentence.split(' ')
        sentence=""
        for(let i=0;i<words.length;i++){
            let word = words[i]
            if(word.includes("\r\n")||word.includes("\r\r\n")||word.includes("\r\n\n")||word.includes("\n")){
                instructions.push(sentence.trim())
                word = word.replace("\r","")
                word = word.replace("\n","")
                sentence = word + " "
            }else{
                sentence = sentence + word + " "
            }
        }    
        instructions.push(sentence.trim())    
        return instructions
    }
    //object 
    let data = {
        id:"",
        name:"",
        category:"",
        area:"",
        image:"",
        youtubeLink:"",
        ingredientList:"",
        instructions:""
    }
    //mappin array
    response.map(value=>{
        let id = value.idMeal//id
        let name = value.strMeal//name of food
        let category = value.strCategory//category of food
        let area = value.strArea//area of food 
        let image = value.strMealThumb//image link of food
        let youtubeLink = value.strYoutube//youtube link of recipe
        let ingredientList = getIngredientList(value)//getting ingredient list
        let instructions = getInstructions(value.strInstructions)

        data = {
            id,name,category,area,image,youtubeLink,ingredientList,instructions
        }
        return
    })
    res.json({
        data
    })
})


module.exports = Router