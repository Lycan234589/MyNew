import logo from './logo.svg';
import Person from './Person';
import './App.css';
import Car from './car';
/*const fruits = ["apple", "mango", "orange"];
fruits.map((fruits, index) => {
  console.log(`${index}.${fruits}`);

});*/



const fruits = [
  {
    name: "Apple",
    units: 3,
    price: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    price: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    price: 0.15,
  },
];

const [first,second,thrid]=["laide","Gebriel","Jets"];
console.log(first,thrid);
  function App() {
    return (
      <div className="App">
        <Car name="bmw " color="red" />
        <Person name="Tannu" age="25"></Person>
    );
        
        {fruits.map((fruitEl, index) => {
          return (
            <div>
              {index + 1}) {fruitEl.units} units of {fruitEl.name}
              costs ${(fruitEl.price * fruitEl.units).toFixed(2)}
            </div>
          );
        })}
        <Car name="honda" color="yellow" />
        <Car name="Bmw" color="red"/>

      </div>
     
    );
  }

export default App;
