$(document).ready(function () {
  //When the user clicks on the submit button
  $("#burgerSbt").on("click", function () {
    let newBurgerdata = {
      burger_name: $("#burgerTxtBox").val().trim()
    };

    //to then send a post request
    $.ajax(`/api/burgers`, {
      type: "POST",
      data: JSON.stringify(newBurgerdata),
    }).then((response) => {
      if (response.ok) location.reload();
    });
  });
  });

