import Storage from "./Storage";
class CalorieTracker{
    // public methods

    constructor() {
        this._calorieLimit=Storage.getCalorieLimit();
        this._totalCalories = Storage.getTotalCalories(0);
        this._meals=Storage.getMeals();
        this._workouts=Storage.getWorkouts();

        this._displayCaloriesLimit();
        this._displayCalories();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
        document.getElementById('limit').value=this._calorieLimit;

    }
    loadItems() {
        this._meals.forEach((meal) => this._displayItem('meal',meal));
        this._workouts.forEach((workout) => this._displayItem('workout',workout));
    }
    addMeal(meal){
        this._meals.push(meal);
        this._totalCalories+=meal._calories;
        Storage.updateCalories(this._totalCalories);
        Storage.saveMeal(meal);
        this._render();
        this._displayItem('meal', meal);
    }
    addWorkout(workout){
        this._workouts.push(workout);
        this._totalCalories-=workout._calories;
        Storage.updateCalories(this._totalCalories);
        Storage.saveWorkout(workout);
        this._render();
        this._displayItem('workout', workout)
    }
    removeMeal(id){
        const index= this._meals.findIndex(meal => meal.id === id);
        if(index !== -1){
            const meal=this._meals[index];
            this._meals.splice(index, 1);
            this._totalCalories-=meal._calories;
            Storage.updateCalories(this._totalCalories);
            Storage.removeMeal(id);
            this._render();
        }

    }
    removeWorkout(id){
        const index= this._workouts.findIndex(meal => meal.id === id);
        if(index > -1){
            const workout=this._workouts[index];
            this._workouts.splice(index, 1);
            this._totalCalories+=workout._calories;
            Storage.updateCalories(this._totalCalories);
            Storage.removeWorkout(id);
            this._render();
        }
    }
    // private methods
    _displayCalories(){
        const totalCaloriesEl= document.getElementById('calories-total')
        totalCaloriesEl.innerHTML=this._totalCalories;
    }
    _displayItem(type,item){
        //console.log(item);
        const itemsListEl= document.getElementById(`${type}-items`);
        const div = document.createElement('div');
        div.classList.add('card', 'my-2');
        div.setAttribute('data-id', item.id);
        div.innerHTML= `
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                    <h4 class="mx-1">${item._name}</h4>
                    ${type === 'workout'
            ? `<div  class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5">
                        ${item._calories}
                    </div>`
            : `<div class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">
                        ${item._calories}
                    </div>`
        }
                   
                    <button class="delete btn btn-danger btn-sm mx-2">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        `;
        itemsListEl.appendChild(div);
    }

    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.getElementById('calories-consumed');
        const consumed = this._meals.reduce((total, meal) => total + meal._calories, 0);
        caloriesConsumedEl.innerHTML = consumed;
    }

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.getElementById('calories-burned');
        const burned = this._workouts.reduce((total, workout) => total + workout._calories, 0);
        caloriesBurnedEl.innerHTML = burned;
    }

    _displayCaloriesRemaining() {
        const caloriesRemainingEl = document.getElementById('calories-remaining');
        const progressEl = document.getElementById('calorie-progress');
        const remain=this._calorieLimit - this._totalCalories;
        caloriesRemainingEl.innerHTML=remain;
        if(remain<0){
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

    reset() {
        this._totalCalories=0;
        this._meals=[];
        this._workouts=[];
        Storage.clearAll();
        this._render();
    }

    setLimit(caloriesLimit) {
        this._calorieLimit=caloriesLimit;
        Storage.setCalorieLimit(caloriesLimit);
        this._displayCaloriesLimit();
        this._render();
    }
}
export default CalorieTracker;
