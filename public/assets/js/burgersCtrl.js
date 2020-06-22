$(document).ready(function () {
  //When the user clicks on the submit button
  $("#burgerSbt").on("click", function () {
    let newBurgerdata = {
      burger_name: $("#burgerTxtBox").val().trim(),
    };

    //to then send a post request
    $.ajax(`/api/burgers`, {
      type: "POST",
      data: newBurgerdata,
    }).then(function () {
      console.log("A new burger was created");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //when the user clicks the devour button

  $(".devourBtn").on("click", function (event) {
    // update burger name and devoured using id parameter
    const id = this.getAttribute("data-id");
    const devourData = this.getAttribute("data-devour");
    const name = this.getAttribute("name");

    console.log(name)
    // console.log(devourData)
    $.ajax(`/api/burger/${id}`, {
      type: "PATCH",
      data: { burger_name: name, devoured: 1 }
    }).then(function () {
      console.log("A new burger was created");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
