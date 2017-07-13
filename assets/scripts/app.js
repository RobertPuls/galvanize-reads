$(() => {
  let route = "all";

  if(currentURL.includes("?")) {
    route = `${currentURL.substring(currentURL.indexOf("=")+1)}`;
  }

  $.get(`${BASE_URL}/book/${route}`, data => handlebars(data, "#bookList", "#book"))
  .then(() => {
    $(".removeBtn").on("click", function() {
      $.ajax({
        method: "DELETE",
        url: `${BASE_URL}/book/${this.value}`,
      }).done(() => {
        alert("Deleted");
        window.location.href = "https://galvanize-reads-db00e.firebaseapp.com/books.html";
      });
    });
  });
});

function handlebars(data, appendTo, sourceFrom) {
  const source = $(sourceFrom).html();
  const template = Handlebars.compile(source);
  for (let i = 0; i < data.length; i++) {
    const context = {
      "book_id": data[i].book_id,
      "book_title": data[i].book_name,
      "book_genre": data[i].book_genre,
      "book_desc": data[i].book_desc,
      "book_cover": data[i].book_cover,
      "authors": data[i].authors
    };
    const html = template(context);
    $(appendTo).append(html);
  }
}
