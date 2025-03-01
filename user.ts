class User {
  public username: string;
  private password: string;
  protected role: string;

  constructor(username: string, password: string, role: string) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public getUsername(): string {
    return this.username;
  }

  private getPassword(): string {
    return this.password;
  }
}

const user1 = new User('admin', '1234', 'Admin');
console.log(user1.getUsername()); //
// console.log(user1.password); //

class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand() {
    console.log(`This car is a ${this.brand}`);
  }
}

const myCar = new Car('Tesla');
console.log(myCar.brand); // Output: Tesla
// myCar.brand = "BMW"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property
