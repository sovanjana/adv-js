import "./styles.css";

export default function App() {
  // call, apply and bind hands-on practices ...

  // NOTE: this printName method will not work because
  // arrow function doesn't have access to 'this' ..
  //
  // const printName = (from) => {
  //   const fullName = `${this.firstName} ${this.lastName}`;
  //   const draftName = `${fullName}${from ? ` from ${from}` : ``}`;
  //   return draftName;
  // }

  const printName = function (from) {
    const fullName = `${this.firstName} ${this.lastName}`;
    const draftName = `${fullName}${from ? ` from ${from}` : ``}`;
    return draftName;
  };

  let person_1 = {
    firstName: "Sovan",
    lastName: "Jana",
    printName
  };

  let person_2 = {
    firstName: "Suman",
    lastName: "Jana"
    // printName: function () {
    //   const draftName = `${this.firstName} ${this.lastName}`;
    //   return draftName;
    // }
  };

  const name_1 = person_1.printName("Bangalore");
  // const name_2 = person_2.printName();
  /**
   * call method
   *
   * NOTE: 'call' method can be used to call method from another object
   * by passing reference of the object where you want to use it.
   * In short, borrowing method from another object.
   */
  // const name_2 = person_1.printName.call(person_2, 'Haldia');

  /**
   * apply method
   *
   * NOTE: by functionality, 'apply' method is exactly same as 'call'
   * method, but only difference is the way we pass params to these
   * methods.
   * - in 'call' and 'apply' method, first param will always be the
   * reference object.
   * - in 'call' method, we can pass other params individually (comma separated)
   * e.g.: const name_2 = person_1.printName.call(person_2, 'Haldia', 'West Bengal', 'India', ...);
   * - in 'apply' method, we can pass all other params as an arraylist
   * as a second param.const.
   * e.g.: name_2 = person_1.printName.call(person_2, ['Haldia', 'West Bengal', 'India', ...]);
   */
  const name_2 = person_1.printName.apply(person_2, ["Haldia"]);

  /**
   * bind method
   *
   * NOTE: instead of modifying original object 'bind' method
   * creates reference of that method we want to borrow which later
   * we can call as per situation demand.
   */
  const print_name_2_bind = person_1.printName.bind(person_2, "Haldia");
  const name_2_bind = print_name_2_bind();

  return (
    <div className="App">
      <h3>call, apply and bind method (JS Learning)</h3>
      <hr />
      <p>{name_1}</p>
      <p>...</p>
      <p>{name_2}</p>
      <p>...</p>
      <p>{name_2_bind}</p>
    </div>
  );
}
