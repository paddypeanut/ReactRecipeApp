export function createIngrediants(ingriedients, amount, meal) {
    let newArray = [];

    for (let i = 0; i <= amount; i++) {
        if (ingriedients + i in meal) {
            let ingr = (ingriedients + i).toString();
            let newIng = meal[ingr];

            if (newIng === null) {
                newIng = '';
            }
            if (newIng !== '' && newIng.length >= 1) {
                newArray.push(newIng);
            }
        }
    }
    return newArray;
}