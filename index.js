const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var od = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == '2022-11-07') {
        od.push(all[i]);
      }
    }
    return od;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt = []
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == '2022-11-08') {
        dt.push(all[i]);
      }
    }
    return dt;

  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dl = []
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == '2022-11-09') {
        dl.push(all[i]);
      }
    }
    return dl;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING

    var OUTPUT_STRING = '';
    for (var i = 0; i < list.length - 1; i++) {
      if (list[i].dueDate != '2022-11-08') {
        OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + ' ' + list[i].dueDate + '\n';
      }
      else {
        if (list[i].completed != true) {
          OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + ' ' + '\n';
        }
        else {
          OUTPUT_STRING = OUTPUT_STRING + '[x] ' + list[i].title + ' ' + '\n';
        }
      }
    }

    if (list[list.length - 1].dueDate != '2022-11-08') {
      OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + ' ' + list[i].dueDate;
    }
    else {
      if (list[list.length - 1].completed != true) {
        OUTPUT_STRING = OUTPUT_STRING + '[ ] ' + list[i].title + ' ';
      }
      else {
        OUTPUT_STRING = OUTPUT_STRING + '[x] ' + list[i].title + ' ';
      }
    }
    return OUTPUT_STRING;
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)


todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")