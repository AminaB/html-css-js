class CalorieTracker{
    constructor() {
        this._calorieLimit=2000;
        this._totalCalories=0;
        this._meals=[];
        this._workouts=[];
    }
    addMeal(meal){
        this._meals.push(meal);
        this._totalCalories+=meal.calories;
    }
    addWord(workout){
        this._workouts.push(workout);
        this._totalCalories-=workout.calories;
    }
}
class Meal{
    constructor(name, calories) {
        this._name = name;
        this._calories = calories;
        this.id=Math.random().toString(16).slice(2);
    }
}
class Workout{
    constructor(name, calories) {
        this._name = name;
        this._calories = calories;
        this.id=Math.random().toString(16).slice(2);
    }
}

const tracker = new CalorieTracker();
const breakFast= new Meal('Breakfast', 400);
tracker.addMeal(breakFast);

const run = new Workout("Morning run", 300);
tracker.addWord(run);
