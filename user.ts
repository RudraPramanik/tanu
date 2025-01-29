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
console.log(user1.getUsername()); // ✅ Allowed
// console.log(user1.password); // ❌ Error: Property 'password' is private
