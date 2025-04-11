import React, { useState } from 'react';

export default function DietPlan() {
  const [formData, setFormData] = useState({
    name: localStorage.getItem('username') || '',
    age: '',
    height: '',
    weight: '',
    gender: 'male',
    goal: 'maintain',
  });

  const [bmi, setBmi] = useState(null);
  const [dietPlan, setDietPlan] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateBMI = () => {
    const heightInMeters = parseFloat(formData.height) / 100;
    const weight = parseFloat(formData.weight);
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);
    suggestDietPlan(calculatedBmi);
  };

  const suggestDietPlan = (bmiValue) => {
    const goal = formData.goal;
    let plan = '';

    if (bmiValue < 18.5) {
      plan = `
💪 Underweight Diet Plan:

🍽️ Must Include Ingredients:
- Whole milk
- Peanut butter
- Eggs
- Cheese
- Avocados
- Chicken breast
- Bananas
- Almonds

🍴 Meal Suggestion:
- Breakfast: Peanut butter toast, banana smoothie, boiled eggs (~550 kcal) — [Recipe](https://www.allrecipes.com/recipe/245655/peanut-butter-toast/)
- Lunch: Chicken curry, brown rice, salad with olive oil (~700 kcal) — [Recipe](https://www.allrecipes.com/recipe/46822/indian-chicken-curry-murgh-kari/)
- Snack: Mixed nuts & fruit yogurt (~400 kcal) — [Recipe](https://www.allrecipes.com/recipe/213613/fruit-yogurt-parfaits/)
- Dinner: Grilled paneer, whole wheat roti, stir-fried veggies (~600 kcal) — [Recipe](https://www.vegrecipesofindia.com/grilled-paneer-recipe/)
📊 Total: ~2250 kcal/day
      `;
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      plan = `
✅ Normal BMI Maintenance Plan:

🍽️ Must Include Ingredients:
- Oats
- Greek yogurt
- Berries
- Lentils
- Leafy greens
- Quinoa
- Fish
- Olive oil

🍴 Meal Suggestion:
- Breakfast: Oatmeal with berries, almonds (~400 kcal) — [Recipe](https://www.allrecipes.com/recipe/244251/oatmeal-with-fresh-or-frozen-fruit/)
- Lunch: Grilled salmon, quinoa, steamed broccoli (~650 kcal) — [Recipe](https://www.allrecipes.com/recipe/229960/grilled-salmon-i/)
- Snack: Apple slices with almond butter (~250 kcal) — [Recipe](https://www.allrecipes.com/recipe/240389/apple-slices-with-peanut-butter/)
- Dinner: Moong dal, brown rice, spinach curry (~550 kcal) — [Recipe](https://www.vegrecipesofindia.com/moong-dal-recipe/)
📊 Total: ~1850 kcal/day
      `;
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      plan = `
⚠️ Overweight Diet Plan:

🍽️ Must Include Ingredients:
- Cottage cheese (paneer)
- Green tea
- Cucumber
- Eggs
- Lentils
- Whole grains
- Low-fat yogurt
- Lemon

🍴 Meal Suggestion:
- Breakfast: Boiled eggs, green tea, whole wheat toast (~350 kcal) — [Recipe](https://www.allrecipes.com/recipe/272293/perfect-boiled-eggs/)
- Lunch: Moong dal, millet roti, cucumber salad (~550 kcal) — [Recipe](https://www.archanaskitchen.com/moong-dal-and-palak-ka-saag-recipe)
- Snack: Roasted chickpeas, lemon water (~200 kcal) — [Recipe](https://www.allrecipes.com/recipe/240662/roasted-chickpeas/)
- Dinner: Grilled paneer tikka, sautéed veggies (~450 kcal) — [Recipe](https://www.vegrecipesofindia.com/paneer-tikka-recipe-on-tava/)
📊 Total: ~1550 kcal/day
      `;
    } else {
      plan = `
🚨 Obese Diet Plan:

🍽️ Must Include Ingredients:
- Broccoli
- Tofu
- Turmeric
- Garlic
- Flaxseeds
- Green leafy veggies
- Cauliflower rice
- Skim milk

🍴 Meal Suggestion:
- Breakfast: Smoothie with spinach, flaxseed, banana & skim milk (~300 kcal) — [Recipe](https://www.allrecipes.com/recipe/233603/spinach-and-banana-power-smoothie/)
- Lunch: Stir-fried tofu with broccoli and quinoa (~500 kcal) — [Recipe](https://www.allrecipes.com/recipe/229960/grilled-tofu-and-broccoli/)
- Snack: Carrot sticks with hummus (~150 kcal) — [Recipe](https://www.allrecipes.com/recipe/229156/hummus-with-tahini/)
- Dinner: Cauliflower rice, mixed veg curry (low oil), soup (~400 kcal) — [Recipe](https://www.allrecipes.com/recipe/244051/cauliflower-rice/)
📊 Total: ~1350 kcal/day
      `;
    }

    if (goal === 'gain') {
      plan += `\n💡 Goal: Muscle gain. Add protein shakes post workout and calorie-dense snacks.`;
    } else if (goal === 'lose') {
      plan += `\n🔥 Goal: Fat loss. Drink water before meals, avoid sugar, focus on portion control.`;
    }

    setDietPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div  className='dietplan'style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: 'auto', backgroundColor: 'rgba(256,256,256,0)' }}>
      <h1 style={{ textAlign: 'center', color: '#4B0082' }}>💡 Personalized Diet Plan for {formData.name}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', border: 'none', borderRadius: '10px', backgroundColor: 'rgba(256,256,256,0)' }}>
        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} required style={{ padding: '0.6rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} required style={{ padding: '0.6rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input name="height" placeholder="Height (cm)" type="number" onChange={handleChange} required style={{ padding: '0.6rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input name="weight" placeholder="Weight (kg)" type="number" onChange={handleChange} required style={{ padding: '0.6rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <select name="gender" onChange={handleChange} style={{ padding: '0.6rem', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="goal" onChange={handleChange} style={{ padding: '0.6rem', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="maintain">Maintain</option>
          <option value="gain">Gain</option>
          <option value="lose">Lose</option>
        </select>
        <button type="submit" style={{ backgroundColor: '#6a0dad', color: 'white', padding: '10px', borderRadius: '6px', border: 'none', fontWeight: 'bold' }}>
          Get My Diet Plan
        </button>
      </form>

      {bmi && (
        <div style={{ marginTop: '2rem', backgroundColor: '#f8f8ff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ccc' }}>
          <h3 style={{ color: '#6a0dad' }}>Your BMI: {bmi}</h3>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', lineHeight: '1.6' }}>{dietPlan}</pre>
        </div>
      )}
    </div>
  );
}
