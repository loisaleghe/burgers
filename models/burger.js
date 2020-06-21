// Get the dependecies
const orm = require("../config/orm");

class Burger {
  constructor({ burgerName, isDevoured = false, id }) {
    this.burgerName = burgerName;
    this.isDevoured = isDevoured;
    this.id = id;
  }

  static async selectAll() {
    const [rows] = await orm.selectAll(`burgers`);
    return rows;
  }

  async insertBurger() {
    const result = await orm.insertOne(
      `burgers`,
      `burger_name`,
      `devoured`,
      this.burgerName,
      this.isDevoured
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
    // ensure isDevoured is a valid Boolean
    this.isDevoured = fixBool(this.isDevoured);
    const burger = await orm.updateOne(
      `burgers`,
      { burger_name: this.burgerName, devoured: this.isDevoured },
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
