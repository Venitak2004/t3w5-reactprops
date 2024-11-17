import FoodCard from "./FoodCard";

let foods = [
    'bokkeumbap',
    'ramen',
    'sushi',
    'pasta',
    'port buns',
    'lasagna',
    'pizza',
    'dumplings',
    'Butter Chicken',
    'Laksa',
];
export default function FoodList(){
    return(
        <section>
                {
                    foods.map((food, index) => {
                        // if you change the key to 'food' it will print the foods in console.
                        return <p><FoodCard key={index} foodName={food}/></p>
                    })
                }
        </section>
    )
}
