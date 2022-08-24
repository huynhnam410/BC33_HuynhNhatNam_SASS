// Object:

var student1 = {
  // property: value
  name: "Hieu",
  age: 19,
  email: "hieu@gmail.com",
  math: 10,
  physic: 1,
  // method: function
  calcGPA: function () {
    return (this.math + this.physic) / 2;
  },
};

var student2 = {
  // property: value
  email: "dung@gmail.com",
  name: "Dung",
  age: 20,
  math: 5,
  physic: 9,
  // method: function
  calcGPA: function () {
    return (this.math + this.physic) / 2;
  },
};

student1.phone = "0334643124";
student1.age = 20;

console.log(student1.name, student1.age, student1.email, student1);
console.log(student2["name"], student2["age"]);

var key = "email";

console.log(student1[key]);

console.log(student1.calcGPA());

// this: trỏ tới đối tượng mà function đang là phương thức
// OOP: 4 tính chất của lập trình OOP: đóng gói, kế thừa, đa hình, trừu tương

// var cyberDogCEO = {}

var cyberDog = {
  name: "CyberDog",
  address: "457 Sư Vạn Hạnh",
  email: "cyberdog@gmail.com",
  phone: "0252252525",
  logo: "https://cyberdog.logo.png",
  //   CEO: cyberDogCEO
  CEO: {
    name: "Đặng Trung Hiếu",
    age: 27,
  },
  dogs: [
    {
      name: "Xu",
      age: 10,
      breed: "Alaska",
    },
    { name: "Cà", age: 12, breed: "Corgi" },
    { name: "Na", age: 14, breed: "shiba inu" },
  ],
};

console.log(cyberDog.name, cyberDog.CEO.name);

for (var i = 0; i < cyberDog.dogs.length; i++) {
  console.log(cyberDog.dogs[i].name, cyberDog.dogs[i].breed);
}

//ex7: cho một mảng số nguyên, kiểm tra xem có 2 số nào cộng lại = 10;

function ex7(arr) {
    
}


ex7([4,2,3,1,5,7,10])