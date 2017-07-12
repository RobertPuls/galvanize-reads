$(() => {
  $("#formSubmit").on("click", () => {
    console.log("button");
    let newBook = {
      "title": $("#book_title").val(),
      "genre": $("#book_genre").val(),
      "desc": $("#book_desc").val(),
      "cover_url": $("#book_cover").val()
    };

    $.post(`${BASE_URL}/book/create`, newBook).done(console.log("done"));
  });
});
