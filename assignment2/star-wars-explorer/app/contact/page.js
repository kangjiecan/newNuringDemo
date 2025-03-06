import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us | Star Wars Explorer',
  description: 'Get in touch with the Star Wars Explorer team',
};

export default function ContactPage() {
  return (
    <div className="container py-4">
      <h1 className="display-5 fw-bold text-warning mb-4">Contact Us</h1>
      
      <div className="row g-4">
        <div className="col-md-6">
          <h2 className="h4 fw-semibold mb-3 text-white">Get in Touch</h2>
          
          
          <div className="card bg-dark border-secondary mb-4">
            <div className="card-body">
              <p className="text-light mb-0">
                messaage will be logged to the console.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}