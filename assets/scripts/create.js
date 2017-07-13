$(() => {
  let method = "POST";
  let route = "create";

  if(currentURL.includes("?")) {
    route = `${currentURL.substring(currentURL.indexOf("=")+1)}`;
    method = "PUT"
  }

  console.log(method);

  $("#formSubmit").on("click", () => {
    let newBook = {
      "title": $("#book_title").val(),
      "genre": $("#book_genre").val(),
      "desc": $("#book_desc").val(),
      "cover_url": $("#book_cover").val()
    };

    $.ajax({
      url: `${BASE_URL}/book/${route}`,
      method: method,
      data: newBook
    }).done(console.log("done"));
  });
});
