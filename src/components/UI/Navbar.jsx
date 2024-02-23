export default function Nav({ links }) {
    return (
      <nav>
        <h1>Antonio Johnson</h1>
        <div>
          {links.map((link) => link)}
        </div>
      </nav>
    );
  }