import Navbar from "../Navbar";
import './styles.scss';

function Contact() {
  return (
    <div className="p-center">
      <Navbar />
      <div className="center">
        <p className="p-contact"> Pour prendre contact !</p>
        <form className="form-center" action="https://getform.io/f/6bb0d0e1-0d9a-4f11-88d8-60cf3247ff64" method="POST">
          <p className="contact-name"> Nom </p>
          <input className="contact-input" type="text" name="name" />
          <p className="contact-name"> Email </p>
          <input className="contact-input" type="email" name="email" />
          <p className="contact-name"> Numéro de téléphone </p>
          <input className="contact-input" type="text" name="téléphone" />
          <p className="contact-name">  Message  </p>
          <textarea className="contact-input-telephone" type="text" name="message" />
          <button className="button-contact" type="submit">Envoyer le message !</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
