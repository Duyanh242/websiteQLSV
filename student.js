var data = [];
function add() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var item = {
        Id : id,
        Name : name,
        Age : age
    }
let index = data.findIndex((c)=>c.Id == item.Id)
    if (index >= 0) {
        this.data.splice(index, 1, item);
    }else{
        this.data.push(item);
    }
    show();
    clear();
}
function show() {
   var table = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Action</th>
</tr>`
for(var i = 0; i < this.data.length; i++){
    table += `<tr>
    <th>${this.data[i].Id}</th>
    <th>${this.data[i].Name}</th>
    <th>${this.data[i].Age}</th>
    <th> 
    <button onclick = "deleteItem(${this.data[i].Id})">Delete</button>
    <button onclick = "editItem(${this.data[i].Id})">Edit</button>
    </th>
</tr>`
}
document.getElementById('show').innerHTML = table;
}
function clear() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}
function deleteItem(x) {
    for(var i = 0; i < this.data.length; i++) {
       if(this.data[i].Id == x) {
        data.splice(i,1);
        show();
       }    
    }
}
function editItem(x) {
    for(var i = 0; i < this.data.length; i++) {
        if(this.data[i].Id == x) {
            document.getElementById('id').value = this.data[i].Id;
            document.getElementById('name').value = this.data[i].Name;
            document.getElementById('age').value = this.data[i].Age;
        }
    }
}
function search() {
    var kq = [];
    var nameSearch = document.getElementById('tField_Search').value;
    if (nameSearch) {
       for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].Name.includes(nameSearch)) {
             document.getElementById('show_Search').style.display = "block";
             document.getElementById('show').style.display = "none";
             var itemSearch = {
                id: this.data[i].Id,
                name: this.data[i].Name,
                age: this.data[i].Age
             }
             kq.push(itemSearch);
          }
       }
       var table = "<tr>" +
          "<th>IDSearch</th>" +
          "<th>NameSearch</th>" +
          "<th>AgeSearch</th>" +
          "<th>Action</th>" +
          "</tr>";
       for (var j = 0; j < kq.length; j++) { // Sử dụng biến 'j' cho vòng lặp bên trong
          table += "<tr>" +
             "<th>" + kq[j].id + "</th>" +
             "<th>" + kq[j].name + "</th>" +
             "<th>" + kq[j].age + "</th>" +
             "<th>" +
             "<button onclick=\"Exit()\">Exit</button>" +
             "</th>" +
             "</tr>";
       }
       document.getElementById('show_Search').innerHTML = table;
    }
 }
 function Exit() {
    document.getElementById('show').style.display = "block";
    document.getElementById('show_Search').style.display = "none";
 }
 

