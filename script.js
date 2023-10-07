let input = prompt("what would you like to do")
const todos = []
while(input !=="quit"){
    if (input === "list"){
        console.log("***********************")
        for(let i = 0 ; i < todos.length ; i++){
            console.log(`${i} : ${todos[i]}`)
        }
        console.log("***********************")
    }
    else if (input === "new"){
        let newTodo = prompt("ok , what is the new to do ")
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`)
    }
    else if (input === "delete"){
        const index = parseInt(prompt("enter the index you want to delete"))
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1)
            console.log(`deleted ${deleted[0]}`)

        }
        else{
            console.log("unknown index")
        }

    }
    input = prompt("what would you like to do")
   
}
console.log("you quit the app")

