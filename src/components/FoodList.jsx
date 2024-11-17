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
                    foods.map(food => {
                        return <p><FoodCard foodName={food}/></p>
                    })
                }
        </section>
    )
}
