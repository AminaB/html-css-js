class CalorieTracker{
    // public methods

    constructor() {
        this._calorieLimit=2000;
        this._totalCalories=0;
        this._meals=[];
        this._workouts=[];

        this._displayCaloriesLimit();
        this._displayCalories();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();

    }
    addMeal(meal){
        this._meals.push(meal);
        this._totalCalories+=meal._calories;
        this._render();
    }
    addWord( workout){
        this._workouts.push(workout);
        this._totalCalories-=workout._calories;
        this._render();
    }
    // private methods
    _displayCalories(){
        const totalCaloriesEl= document.getElementById('calories-total')
        totalCaloriesEl.innerHTML=this._totalCalories;
    }
    _displayCaloriesConsumed(){
        const caloriesConsumedEl= document.getElementById('calories-consumed');
        const consumed = this._meals.reduce((total, meal)=>total+meal._calories,0);
        caloriesConsumedEl.innerHTML=consumed;
    }
    _displayCaloriesBurned(){
        const caloriesBurnedEl= document.getElementById('calories-burned');
        const burned = this._workouts.reduce((total, workout)=>total+workout._calories,0);
        caloriesBurnedEl.innerHTML=burned;
    }
    _displayCaloriesRemaining(){
        const caloriesRemainingEl= document.getElementById('calories-remaining');
        const progressEl = document.getElementById('calorie-progress');
        const remain=this._calorieLimit - this._totalCalories;
        caloriesRemainingEl.innerHTML=remain;
        if(remain<0){
            console.log('here')
            caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-light');
            caloriesRemainingEl.parentElement.parentElement.classList.add('bg-danger');
            progressEl.classList.add('bg-danger');
            progressEl.classList.remove('bg-success');
        }else{
            caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-danger');
            caloriesRemainingEl.parentElement.parentElement.classList.add('bg-light');
            progressEl.classList.add('bg-success');
            progressEl.classList.remove('bg-danger');
        }
    }
    _displayCaloriesLimit(){
        const caloriesLimitEl= document.getElementById('calories-limit');
        caloriesLimitEl.innerHTML=this._calorieLimit;
    }
    _displayCaloriesProgress() {
        const progressEl = document.getElementById('calorie-progress');
        const percentage = (this._totalCalories / this._calorieLimit) * 100;
        const width = Math.min(percentage, 100);
        progressEl.style.width = `${width}%`;

    }
    _render(){
        this._displayCalories();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();

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
const lunch= new Meal('Lunch', 2000);
tracker.addMeal(breakFast);
tracker.addMeal(lunch);

const run = new Workout("Morning run", 300);
tracker.addWord(run);
console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
