// Get the dependecies
const orm = require("../config/orm");

class Burger {

  constructor(burger_name) {
    this.burger_name = burger_name;
    this.devoured = false;
    // this.id = id;
  }

  static async allBurgers() {
    const rows = await orm.selectAll(`burgers`);
    return rows;
  }

  static async findById(id) {
    const rows = await orm.findById(`burgers`, `id`, `${parseInt(id)}`)
    

    let burger = null
    if (rows.length) {
      burger = new Burger(rows[0].burger_name)
      

      burger = Object.assign(burger, rows[0])
          }
    return burger
  }

  async insertBurger() {
    const result = await orm.insertOne(
      `burgers`,
      `burger_name`,
      `devoured`,
      this.burger_name,
      this.devoured
    );
    this.id = result.insertId;
    return this;
  }

  async save() {
    if (this.id) {
      return this.updateBurger();
    } else {
      return this.insertBurger();
    }
  }

  async updateBurger() {
    // ensure devoured is a valid Boolean
    this.devoured = fixBool(this.devoured);
    await orm.updateOne(
      `burgers`,
      { burger_name: this.burger_name, devoured: this.devoured },
      `id`,
      this.id
    );
   
    return this;
  }
}

function fixBool(prop) {
  if (prop === "false") prop = false;
  else if (prop === "0") prop = false;
  else if (prop === 0) prop = false;
  else if (prop === null) prop = false;
  else if (prop === undefined) prop = false;
  else prop = true;
  return prop;
}

module.exports = Burger;
