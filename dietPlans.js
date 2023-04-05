const dietPlans = [
    {
        name: "Low Calorie",
bmiRange: { min: 0, max: 18.5 },
description: "This diet plan is for individuals who have a BMI below 18.5 and need to gain weight.\n\
Breakfast\n\Greek yogurt with mixed berries, granola, and a drizzle of honey\n\
A smoothie made with milk, frozen fruit, nut butter, and a scoop of protein powder.\n\
Whole-grain toast with avocado, a fried egg,\n\
Oatmeal made with milk, topped with sliced banana, nuts, and a drizzle of honey or maple syrup\n\
Whole-grain pancakes or waffles with fresh fruit and a dollop of Greek yogurt\n\
Lunch\n\
A turkey or chicken sandwich made with whole-grain bread, avocado, lettuce, tomato, and mayonnaise\n\
Grilled chicken or fish with a side of quinoa or brown rice and steamed vegetables\n\
A hearty salad made with mixed greens, grilled chicken, nuts or seeds\n\
A whole-grain wrap filled with grilled veggies, hummus, and sliced turkey or chicken\n\
Lentil soup with a side of whole-grain crackers and a mixed green salad\n\
Dinner\n\
Grilled or baked salmon with a side of roasted sweet potatoes and asparagus\n\
A stir-fry made with lean protein\n\
Whole-grain pasta with a tomato-based sauce, lean protein, such as shrimp or chicken, and a side of mixed veggies\n\
A baked sweet potato stuffed with black beans, salsa, and a dollop of Greek yogurt\n\
A vegetable soup or stew made with lean protein" 
    },
    {
      name: "Balanced Diet",
      bmiRange: { min: 18.5, max: 24.9 },
      description: "This diet plan is for individuals who have a normal BMI between 18.5 and 24.9 and need to maintain their weight. Keep up the good work"
    },
    {
      name: "Weight Loss",
      bmiRange: { min: 25, max: 29.9 },
      description: "This diet plan is for individuals who have a BMI between 25 and 29.9 and need to lose weight.\n\ Breakfast\n\ Scrambled eggs with sautéed veggies, such as spinach, onions, and bell peppers\n\
      A smoothie made with unsweetened almond milk, frozen berries, spinach, and a scoop of protein powder\n\
      Whole-grain toast with mashed avocado and a sliced hard-boiled egg\n\
      Greek yogurt with mixed berries, chia seeds, and a drizzle of honey\n\
      Overnight oats made with milk, chia seeds, and sliced fruit\n\ Lunch\n\Grilled Chicken/Fish with a side of roasted vegitables or salad\n\
      A veggie/hummus wrap with whole grain bread or tortilla\n\
      A bowl of vegitable soup with a slice of whole grain bread or crackers\n\
      A turkey or veggie burger\n\
      A spinach salad with grilled chicken or shrimp\n\Dinner\n\Grilled or baked salmon with a side of roasted vegetables\n\
      A vegetable stir-fry\n\
      A hearty vegetable soup or stew with lean protein\n\
      A large salad \n\
      A baked sweet potato topped with black beans, salsa, and a dollop of plain Greek yogurt.\n\
      "
    },
    {
      name: "Obese",
      bmiRange: { min: 30, max: 100 },
      description: "This diet plan is for individuals who have a BMI over 30 and need to lose a significant amount of weight.\n\ Breakfast\n\ Scrambled eggs with sautéed veggies, such as spinach, onions, and bell peppers\n\
      A smoothie made with unsweetened almond milk, frozen berries, spinach, and a scoop of protein powder\n\
      Whole-grain toast with mashed avocado and a sliced hard-boiled egg\n\
      Greek yogurt with mixed berries, chia seeds, and a drizzle of honey\n\
      Overnight oats made with milk, chia seeds, and sliced fruit\n\ Lunch\n\Grilled Chicken/Fish with a side of roasted vegitables or salad\n\
      A veggie/hummus wrap with whole grain bread or tortilla\n\
      A bowl of vegitable soup with a slice of whole grain bread or crackers\n\
      A turkey or veggie burger\n\
      A spinach salad with grilled chicken or shrimp\n\Dinner\n\Grilled or baked salmon with a side of roasted vegetables\n\
      A vegetable stir-fry\n\
      A hearty vegetable soup or stew with lean protein\n\
      A large salad \n\
      A baked sweet potato topped with black beans, salsa, and a dollop of plain Greek yogurt.\n\
      "
    }
  ];
  
  // Function to get the diet plan based on the user's BMI value
  function getDietPlan(bmiValue) {
    // Find the diet plan with the corresponding BMI range
    const dietPlan = dietPlans.find(plan => bmiValue >= plan.bmiRange.min && bmiValue <= plan.bmiRange.max);
    
    // Return the diet plan
    return dietPlan;
  }
  

  
  
  
  
  