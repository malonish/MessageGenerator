let Randomizer = {
    _directions: ["North", "South", "East", "West", "Central"],
    _states: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
    _careers: ["Software", "Nursing", "IT", "Physical Therapy", "Finance", "Dentistry","Law", "Logistics", "Data Science", "Construction", "Farming", "Surgery", "Statistics","Speech Therapy", "Pediatrics", "Psychology", "Biochemistry", "Petroleum Engineering", "Teaching", "Public Relation", "Human Resources", "Landscaping"],
    get directions(){
        return this._directions;
    },
    get states (){
        return this._states;
    },
    get careers(){
        return this._careers;
    }
};

let directionRoll = Math.floor(Math.random() * Randomizer.directions.length);
const direction = Randomizer.directions[directionRoll]; 

let stateRoll = Math.floor(Math.random() * Randomizer.states.length);
const state = Randomizer.states[stateRoll];

let careerRoll = Math.floor(Math.random() * Randomizer.careers.length);
const career = Randomizer.careers[careerRoll];

console.log(`
I want to move to ${direction} ${state} to start a career in ${career}!
`);