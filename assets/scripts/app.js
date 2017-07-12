$(() => {
  $.get(`${BASE_URL}/book/all`, data => handlebars(data, "#bookList", "#book"));


  function handlebars(data, appendTo, sourceFrom) {
    const source = $(sourceFrom).html();
    const template = Handlebars.compile(source);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].authors.forEach(author => console.log(author)));
      const context = {
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
});
