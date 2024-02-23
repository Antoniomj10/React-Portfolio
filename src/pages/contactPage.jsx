export default function ContactPage() {
    return (
      <div className="Contact-Main-Container">
      <h2>Contact</h2>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email Address:</label>
        <input type="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="Message" id="Message" cols="30" rows="10"></textarea>
      </div>
      <button>Submit</button>
      </div>
    )
  }