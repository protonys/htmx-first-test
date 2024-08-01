const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list">Show books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form>
            <input 
                type="text"
                name="title"
                placeholder="Title book"
            >
            <input 
                type="text"
                name="author"
                placeholder="Author Name"
            >            
            <button 
                hx-on::after-request="document.querySelector('form').reset()"
                hx-on:click="console.log('Новая книга добавлена', event)"
                hx-post="/books" 
                hx-target=".book-list ul" 
                hx-swap="beforeend">Add book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;