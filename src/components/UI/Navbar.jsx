export default function Nav({ links }) {
    return (
      <nav>
        <h1>Nazir</h1>
        <div>
          {links.map((link) => link)}
        </div>
      </nav>
    );
  }