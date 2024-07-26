document.getElementById('addFoodItem').addEventListener('click', function() {
    const foodItemCount = document.querySelectorAll('.food-item').length + 1;

    const newFoodItem = document.createElement('div');
    newFoodItem.classList.add('food-item');
    newFoodItem.innerHTML = `
        <label for="foodItem${foodItemCount}">Food Item ${foodItemCount}:</label>
        <input type="text" id="foodItem${foodItemCount}" name="foodItem${foodItemCount}" class="foodInput" placeholder="Enter food name">
        <input type="number" id="portion${foodItemCount}" name="portion${foodItemCount}" class="portionInput" placeholder="Portion size (grams)">
        <button type="button" class="deleteFoodItem">Delete</button>
    `;

    document.getElementById('additionalFoodItems').appendChild(newFoodItem);

    // Add event listener to the delete button
    newFoodItem.querySelector('.deleteFoodItem').addEventListener('click', function() {
        newFoodItem.remove();
    });
});

document.getElementById('mealForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const foodItems = [];

    const foodItemElements = document.querySelectorAll('.food-item');
    foodItemElements.forEach((item, index) => {
        const foodName = item.querySelector('input[type="text"]').value;
        const portionSize = parseFloat(item.querySelector('input[type="number"]').value);

        if (foodName && portionSize > 0) {
            foodItems.push({
                name: foodName,
                portion: portionSize
            });
        }
    });

    console.log('Food items:', foodItems);

    getNutritionData(foodItems);
});

async function getNutritionData(foodItems) {
    const apiKey = 'dc176e1bce2d7f71f403b8716d4edd5c';
    const appId = '92b2b0f1';
    let totalCalories = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbs = 0;

    showLoadingSpinner();

    for (let item of foodItems) {
        if (item.name && item.portion > 0) {
            console.log(`Fetching data for: ${item.name}, portion: ${item.portion}`);

            try {
                const response = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-app-id': appId,
                        'x-app-key': apiKey
                    },
                    body: JSON.stringify({
                        query: `${item.portion} grams of ${item.name}`,
                        num_servings: 1
                    })
                });

                if (!response.ok) {
                    console.error('API request failed with status:', response.status);
                    continue;
                }

                const data = await response.json();
                console.log('API response:', data);

                const food = data.foods ? data.foods[0] : null;
                if (!food) {
                    console.error('No food data found for:', item.name);
                    continue;
                }

                totalCalories += food.nf_calories;
                totalProteins += food.nf_protein;
                totalFats += food.nf_total_fat;
                totalCarbs += food.nf_total_carbohydrate;

                console.log(`Current totals - Calories: ${totalCalories}, Proteins: ${totalProteins}, Fats: ${totalFats}, Carbs: ${totalCarbs}`);
            } catch (error) {
                console.error('Error fetching nutrition data:', error);
            }
        }
    }

    document.getElementById('caloriesValue').textContent = totalCalories.toFixed(2);
    document.getElementById('proteinsValue').textContent = totalProteins.toFixed(2) + ' g';
    document.getElementById('fatsValue').textContent = totalFats.toFixed(2) + ' g';
    document.getElementById('carbsValue').textContent = totalCarbs.toFixed(2) + ' g';

    hideLoadingSpinner();
}

function showLoadingSpinner() {
    document.getElementById('nutritionLabel').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'flex';
}

function hideLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
    document.getElementById('nutritionLabel').style.display = 'block';
}

//CLEAR FORM FIELDS

ocument.getElementById('contactForm').addEventListener('submit', function(e) {
    // Prevent the default form submission
    e.preventDefault();

    // Submit the form data using fetch API
    const formData = new FormData(this);
    fetch(this.action, {
        method: this.method,
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Clear the form fields
            this.reset();
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit the form.');
        }
    })
    .catch(error => {
        alert('Failed to submit the form.');
    });
});
