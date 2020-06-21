document.querySelectorAll("notDevouredBtn").forEach((button) => {
    button.addEventListener("click", function(event) {
        const id = this.getAttribute("data-id");
    const devourBurger = this.getAttribute("data-newdevour");
    const name = this.getAttribute("name");

    fetch(`/api/burgers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ burger_name: name, devoured: devourBurger }),
    }).then((response) => {
      if (response.ok) location.reload();
    });
  });
});
    