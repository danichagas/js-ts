class User {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  showName = () => {
    console.log(this.name)
  }
}

const user = new User("Daniel", 17)
user.showName()