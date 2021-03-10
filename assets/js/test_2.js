let user = {
    firstName: "Вася"
};

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // Вася