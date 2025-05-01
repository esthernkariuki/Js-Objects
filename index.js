// Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) 
// that increases the balance and logs the new balance, and another method withdraw(amount) that decreases the balance only
//  if there are enough funds. Create 3 user accounts and simulate deposits and withdrawals.
//start 
//bankaccount constructor function(name,balance)
//set this.nameto name and this.balance to balance
//add method=function deposit(amount) 
//incrementing the the balance with the amount
//log the message showing deposit and  new balance
//add method withdraw()
//decrement this.balance by amount using if and else condition 
//log  the outputs


function BankAccount(name,balance) {
    this.name=name;
    this.balance=balance;
    

    this.deposit=function(amount){
    
     this.balance += amount;
     console.log(`${this.name} deposited ${amount}.New balance:${this.balance}`);
     

}
this.withdraw=function(amount){
if (this.balance >= amount){
    this.balance -= amount
    console.log(`${this.name}:Withdraw ${amount}.New balance:${this.balance}`);
     

}
else {
    console.log(`${this.name}: Insufficient funds.`);
    
}
};
}
const accounts1= new BankAccount("Kariuki",1900);
const accounts2 = new BankAccount("Ian",1900);
const accounts3 = new BankAccount("Alice",1900);

accounts1.deposit(200);
accounts2.deposit(500);
accounts3.deposit(1200);



//  Create an object taskList with a property tasks (an array of task names).
//  Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() to print all remaining tasks. 
// Test the object with 4–5 tasks and demonstrate the functionality of each method.

//start
//creating a tasklist objects (array of tasks)
//initialize empty tasks
//add method=>addTask(name)
//complete task(task) object=>name:task completed:false
//find a task in this.tasks were task.name is =t o task name
//set a condition to check if it complted by use of if ...else
//log the output
//log the remaining using listTasks
//loop through the tasks ans set  a condition to check if its completed
//task.loist.addtask(Buy milk")
//log using4 to 5 arguments 


// const taskList=
// task=[];
// addTask: function addTask(task) {
//     this.task.push({name:task});
//     console.log(`${task} added`)

// };
// completeTask: function completeTask(task){
// const findTask=this.task.find(task.name===task)
// if( findTask) {
// findTask.completed =true;
// console.log(`${task} completed`);

// }
// };
//  listTask:
// function listTask(task){
//     this.task.forEach(task => {
//         if(task.name,task.complete===true)
//         {
//             console.log("done")
//         }
//         else {
//             console.log("not done");

            
//         }

//     });

// };

// taskList.addTask("purchased books");
// taskList.addTask(" purchased vegetables");
// taskList.addTask("purchased institution")
// taskList.completeTask("purchased vegetables");
// taskList.completeTask("purchased institution");
// taskList.listTask();









//  Create a Student object with name, scores (an array), and a method getAverage() that returns the average score.
//  Add another method hasPassed() that returns true if the average is 50 or more, otherwise false.
//  Create and test this for at least two students.

//start
//create a function=>  attributes(name,scores )of an object student
//set ths.name=name and this.scores=scores
//  create a function getAverage()
//return average score by addding the scores dividing by the number of the students
//initialize sum =0
//loop through the array to get the sum and return sum/lenght of this scores
//create haspassed() function
//  returnby  checking if  average is >=50
//create the objects and check their passing scores
//log using atleast 2 arguments

function student(name,scores) {
    this.name=name;
    this.scores=scores;
    this.getAverage=function(){
        const sum= this.scores.reduce((acc,score)=>acc+score,0)
    //     for(i=0;i<this.scores.length;i++);
    // sum +=this.scores[i]
    

    return sum/this.scores.length
    };

    this.haspassed=function(){
return this.getAverage()>=50;
    }
    
}

const students1 = new student("Lwam",[77,96]);
console.log(students1.getAverage(),students1.haspassed())
const students2 =new student("Kamau",[30,98]);
console.log( students2.getAverage(),students2.haspassed())
 







//  Create a ShoppingCart object with a property items (an array of item objects with name and price). 
// Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart.
//  Add 3 items and print the final total.

//start
//create object array of = items(name,price)
//crete an empty items 
//add method addItem(name ,price)
//add new object to this .item and logg the output
//add method to calculate the total cost in cart
//initialize total to 0
//loop through the this.items
//add total item.price and return the total
//add 3 items 
//log the total

const ShoppingCart={
    items:[],

addItem: function addItem(name,price) {
         this.items.push({name:name, price:price})  ;
         console.log(`${name} added`);},

 getTotal:function() {
    let total=0;
    for( const total of this.items){
    total += item.price;}
 
 
 return total;    
    }
    };

ShoppingCart.addItem("sausage",500)
ShoppingCart.addItem("books",100)
ShoppingCart.addItem("vegetables",300)
console.log(ShoppingCart.getTotal());







//  Create a Movie constructor that takes title, year, and rating.
//  Add a method isClassic() that returns true if the year is before 2000, and a method recommend() that returns a string like "Highly recommended!"
//  if rating is above 8. Create at least 3 movies and call these methods on each.

//movie  to have parametres (title,year,rating)
//add method =isClassic()
//set this.title=title,this.year=year,this.rating=rating
//add a method recommend()
// set a condition to give out the  one the passed the condion annd those that are not passing the condition if the movie is highly recommended
//return true =>year is before 2000,
//use if and else to check which met the conditions
//method=recommend()=return=string if the item >8
//create movie objects
//log using atleast 3 arguments and call each


function movie(title,year,rating) {
    this.title=title;
    this.year=year;
    this.rating=rating;

    this.isClassic=function(){
        return this.year >2000
    }
    
}


