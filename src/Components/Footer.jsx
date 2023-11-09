import { Link } from "react-router-dom";
import MaxWidth from "./MaxWidth";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import Lottie from "lottie-react";
import logo from '../../public/weblogo.json'
const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
	<MaxWidth>
  <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<Link to='/' rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-16 h-16 rounded-full dark:bg-[#425CEC]">
				<Lottie animationData={logo}/>
				</div>
				<span className="self-center text-3xl font-bold">Local Tours and Guide</span>
        
			</Link>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Address</h3>
				<ul className="space-y-1">
				<li>
						<p className="text-md font-medium italic">Sreepur,Gazipur</p>
					</li>
					<li>
						<p className="text-md font-medium italic">Dhaka,Bangladesh</p>
					</li>
					
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50">Contact</h3>
				<ul className="space-y-1">
					<li>
						<p  className="text-md font-medium italic">+8801234567890</p>
					</li>
					<li>
						<p className="text-md font-medium italic">example@gmail.com</p>
					</li>
					<li>
						<p className="text-md font-medium italic">example@yahoo.com</p>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50">Terms & Conditions</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Plicy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Support</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3 flex justify-center">
				<div>
        <div className="uppercase dark:text-gray-50">Follow Us</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<BsFacebook className="text-3xl"/>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						<BsTwitter className="text-3xl"/>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<BsInstagram className="text-3xl"/>
					</a>
				</div>
        </div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">© 2023 Company All rights reserved</div>
  </MaxWidth>
</footer>
    </div>
  );
};

export default Footer;
