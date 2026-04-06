
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <ContactLeft />
          <ContactRight />
        </div>

      </div>
    </section>
  );
};

export default Contact;