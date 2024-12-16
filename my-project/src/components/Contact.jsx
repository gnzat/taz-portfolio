import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-stone-200 pb-20">
      <h2 className="my-10 text-center text-2xl ">Get in Touch</h2>
      <div className="text-center tracking-tight">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
