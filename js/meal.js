document.getElementById('mealForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const foodItems = [
        {
            name: document.getElementById('foodItem1').value,
            portion: document.getElementById('portion1').value
        },
        {
            name: document.getElementById('foodItem2').value,
            portion: document.getElementById('portion2').value
        }
        // Add more food items if needed
    ];

    getNutritionData(foodItems);
});

async function getNutritionData(foodItems) {
    const apiKey = 'dc176e1bce2d7f71f403b8716d4edd5c';
    const appId = '92b2b0f1';
    let totalCalories = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbs = 0;

    for (let item of foodItems) {
        if (item.name) {
            const response = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': appId,
                    'x-app-key': apiKey
                },
                body: JSON.stringify({
                    query: item.name,
                    num_servings: item.portion / 100 // assuming portion size in grams
                })
            });

            const data = await response.json();
            const food = data.foods[0];

            totalCalories += food.nf_calories;
            totalProteins += food.nf_protein;
            totalFats += food.nf_total_fat;
            totalCarbs += food.nf_total_carbohydrate;
        }
    }

    document.getElementById('caloriesValue').textContent = totalCalories.toFixed(2);
    document.getElementById('proteinsValue').textContent = totalProteins.toFixed(2);
    document.getElementById('fatsValue').textContent = totalFats.toFixed(2);
    document.getElementById('carbsValue').textContent = totalCarbs.toFixed(2);

    // Optionally, update the chart here
}
