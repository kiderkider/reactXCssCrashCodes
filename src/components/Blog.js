import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <h1>Title</h1>
      <p className="hello">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="box-model">this is a box model, margin is outside</p>
      <header id="main-header">
        <div className="container">
          <h1>CSS Beginners Website</h1>
        </div>
      </header>
      <nav id="main-nav">
        <div className="container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="jumbo">
        <div className="container">
          <h1>Lorem ipsum dolor sit amet, csicing elit. Atque, sapiente?</h1>
        </div>
      </section>
      <div className="container left-align">
        <aside id="sidebar">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            laboriosm fugiat eaque! Total aliquid voluptas amet debitis,
          </p>
        </aside>
        <section id="main">
          <h2>Section Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            laboriosm labore voluptates fugiat eaque! Total aliquid voluptas
            amet debitis, nulla sequi impedit corporis? Excepturi, perferendis
            distinctio odio ad optio numquam!
          </p>
        </section>
      </div>
      <div id="pExample">
        <span>Span 1</span>
        <span>Span Two 1em spacing</span>
      </div>
      <footer id="main-footer">
        <p>Copyright &copy; 2021 React X Css crash code Website</p>
      </footer>
    </div>
  );
};
export default Blog;
