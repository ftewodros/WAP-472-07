/* js*/



// Q1


function askPassword(ok, fail) { 
    let password = prompt("Password?", '');
    if (password == "rockstar") 
    ok(); 
    else fail();
   
    }
     let user = { 
        name: 'John', 
    loginOk() { 
    console.log(`${this.name} logged in`); 
    }, 
    loginFail() { 
    console.log(`${this.name} failed to log in`); 
    }, 
    }; 
    askPassword(user.loginOk.bind(user) , user.loginFail.bind(user)); 
    askPassword(()=> user.loginOk.call(user), ()=> user.loginFail.call(user));
    askPassword(()=> user.loginOk.apply(user), ()=> user.loginFail.apply(user));

  
    //Q2



    let group = { 
        title: "Our Group",
        students: ["John", "Pete", "Alice"], 
        showList: function() { 
            this.students.forEach(function(student) { 
                console.log(this.title + ": " + student); 
            }.bind(this)); 
        }
     };
      group.showList();    


// 3

let group1 = { 
    title: "Our Group",
    students: ["John", "Pete", "Alice"], 
    showList: function() { 
        this.students.forEach((stu)=>function(student) { 
            console.log(this.title + ": " + student); 
        }.call(this, stu)); 
    }
 };
  group.showList();   
 
  ////////////

  let group2 = { 
    title: "Our Group",
    students: ["John", "Pete", "Alice"], 
    showList: function() { 
        this.students.forEach((student)=>function() { 
            console.log(this.title + ": " + student); 
        }.call(this)); 
    }
 };
  group.showList();   

  ///////////////  Apply

  let group3 = { 
    title: "Our Group",
    students: ["John", "Pete", "Alice"], 
    showList: function() { 
        this.students.forEach((student)=>function() { 
            console.log(this.title + ": " + student); 
        }.apply(this)); 
    }
 };
  group.showList();   