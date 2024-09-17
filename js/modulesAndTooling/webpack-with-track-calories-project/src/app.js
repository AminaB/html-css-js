import '@fortawesome/fontawesome-free/js/all';
import {Modal, Collapse} from 'bootstrap';
import CalorieTracker from "./Tracker";
import {Meal, Workout} from "./Item";

import './css/bootstrap.css';
import './css/style.css';



class App{
    constructor() {
        this._tracker= new CalorieTracker();
        this._eventListeners();
        this._tracker.loadItems();

    }
    _eventListeners(){
        document.getElementById('meal-form')
            .addEventListener('submit', this._newItem.bind(this,'meal'));
        document.getElementById('workout-form')
            .addEventListener('submit', this._newItem.bind(this,'workout'));
        document.getElementById('meal-items')
            .addEventListener('click',this._removeItem.bind(this,'meal'));
        document.getElementById('workout-items')
            .addEventListener('click',this._removeItem.bind(this,'workout'));
        document.getElementById('filter-meals')
            .addEventListener('keyup', this._filterItems.bind(this,'meal'));
        document.getElementById('filter-workouts')
            .addEventListener('keyup', this._filterItems.bind(this,'workout'));
        document.getElementById('reset')
            .addEventListener('click', this._reset.bind(this));
        document.getElementById('limit-form')
            .addEventListener('submit', this._setLimit.bind(this));
    }
    _removeItem(type,e){

        if(e.target.classList.contains('delete')
            || e.target.classList.contains('fa-xmark')) {
            if (confirm('Are you sure?')) {
                // console.log(type);
                const id = e.target.closest('.card').getAttribute('data-id');
                if (type === 'workout') {
                    this._tracker.removeWorkout(id);
                } else {
                    this._tracker.removeMeal(id);
                }
                e.target.closest('.card').remove();
            }
        }
    }
    _newItem(type,e){
        e.preventDefault();
        const name=document.getElementById(`${type}-name`);
        const calories=document.getElementById(`${type}-calories`);

        if(name.value==='' || calories.value===''){
            alert('Please fill in all fields');
            return;
        }
        if(type==='workout') {
            this._tracker.addWorkout(new Workout(name.value, +calories.value));
        }else{
            this._tracker.addMeal(new Meal(name.value, +calories.value));
        }
        name.value='';
        calories.value='';
        const collapse=document.getElementById(`collapse-${type}`);
        const btCollapse=new Collapse(collapse,{
            toogle:true,
        });
    }
    _filterItems(type,e){
        const text= e.target.value.toLowerCase();
        document.querySelectorAll(`#${type}-items .card`).forEach(
            item=>{
                const name=item.firstElementChild.firstElementChild.textContent;
                if(name.toLowerCase().indexOf(text)!==-1){
                    item.style.display='block';
                }else{
                    item.style.display='none';
                }
            }
        )
    }
    _reset(){
        if (confirm('Are you sure you want to reset everything?')) {
            this._tracker.reset();
            document.getElementById('meal-items').innerHTML = '';
            document.getElementById('workout-items').innerHTML = '';
            document.getElementById('filter-meals').innerHTML = '';
            document.getElementById('filter-workouts').innerHTML = '';
        }

    }
    _setLimit(e){
        e.preventDefault();
        const limit = document.getElementById('limit');
        if(limit.value===''){
            alert('please add a limit');
            return;
        }
        this._tracker.setLimit(+limit.value);
        limit.value='';
        const modalEl= document.getElementById('limit-modal');
        const modal =  Modal.getInstance(modalEl);
        modal.hide();
    }
}
const app = new App();

