import { Link } from "react-router-dom";
import  logo  from "../../assets/logoIcon.png"; 
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-100 border-t-2 text-base-content p-10">
        <nav>
        <Link to="/" className="flex items-center justify-center ">
          <img src={logo} className="w-12" alt="" />
          <a className="text-2xl text-gray-700 font-bold">Hire<span className="text-[#704597] italic">Co</span></a>
          </Link>
          <div className="flex items-center justify-center gap-4 text-xl">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
          </div>
          
</nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
       
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#704597] join-item text-white hover:text-black">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
