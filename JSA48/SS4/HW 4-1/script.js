const users = [
    {
        id: 1,
        Name: "John"
    },{
        id: 2,
        Name: "Bill"
    },{
        id: 3,
        Name: "Karen"
    }
];

users.push({
    id: 4,
    Name: "Jill"
});

users.find(user => user.id === 2).Name = "Jane";
const index = users.findIndex(user => user.id === 3);
if (index !== -1) {
    users.splice(index, 1);
}

console.log(users);

const dummy = {
    id: 0,
    Name: "Dummy",
    Age: 0
}

dummy.Email = "dummy@example.com"
delete dummy.Age