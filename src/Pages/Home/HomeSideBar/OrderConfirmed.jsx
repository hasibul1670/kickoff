import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import animationlottie2 from "../../assets/animation/orderConfirmed.json";

const questions = [
  {
    title: "What is the E-Medicine Shop?",
    content:
      "The E-Medicine Shop is an online platform that offers a wide range of medical products and healthcare supplies. It provides a convenient and accessible way to purchase essential health-related items from the comfort of your home.",
  },
  {
    title: "How do I browse and find products on the E-Medicine Shop?",
    content:
      "You can easily browse and find products on the E-Medicine Shop by visiting our website. Use the search bar or navigate through different categories to discover a variety of medical supplies, medicines, equipment, and wellness products.",
  },
  {
    title: "How can I place an order?",
    content:
      "To place an order on the E-Medicine Shop, follow these steps:\n\n1. Browse the website and add desired products to your cart.\n2. Review your cart to ensure all selected items are accurate.\n3. Proceed to checkout, where you'll provide shipping and payment details.\n4. Review your order summary and confirm the purchase.\n\nOnce your order is placed, you'll receive a confirmation email with tracking information.",
  },
  {
    title: "What payment methods are accepted?",
    content:
      "We accept a variety of payment methods, including major credit and debit cards, as well as digital payment platforms. You can choose the option that's most convenient for you during the checkout process.",
  },
  {
    title: "Is my personal and payment information secure?",
    content:
      "Yes, we prioritize the security of your personal and payment information. Our website uses industry-standard encryption and security measures to protect your data. Your information is handled securely and will not be shared with third parties.",
  },
  {
    title: "Can I track the status of my order?",
    content:
      "Absolutely. Once your order is confirmed, you'll receive a tracking number via email. You can use this tracking number to monitor the status and delivery progress of your order through our website or the designated courier's tracking service.",
  },
  {
    title: "What if I have an issue with my order or need assistance?",
    content:
      "If you encounter any issues with your order or need assistance, our customer support team is here to help. You can reach out to us through the contact information provided on our website. We strive to provide timely and effective support to ensure a positive shopping experience.",
  },
  {
    title: "Can I request a specific product that is not currently listed?",
    content:
      "Yes, we value your feedback and needs. If you're looking for a specific medical product that is not currently available on our shop, you can submit a product request through our website. Our team will review your request and make efforts to expand our product offerings.",
  },
];

const OrderConfirmed = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" flex  py-20 bg-base-300 ">
      <div className=" mt-10  p-10 mx-auto">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className=" w-96 mb-10"
        >
          <Lottie animationData={animationlottie2} loop={true} />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-full mb-10 md:mb-0 mx-auto"
        >
          <Link to="/dashboard">
            <button className="btn capitalize btn-sm btn-info">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default OrderConfirmed;
