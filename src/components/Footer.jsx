import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <section id="footer">
      <div className="w-full">
        <div className="container py-16 grid items-center lg:grid-cols-3 gap-8 text-gray-300 ">
          <div className="">
            <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <p className="py-">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
              id dolores reprehenderit nesciunt quas vero odit provident
              reiciendis sint, labore ducimus molestiae est amet delectus
              officia sunt sequi atque! Laboriosam.
            </p>
            <div className="flex md:w-[75%] my-6 justify-between ">
              <FaFacebookSquare size={30} />
              <FaInstagramSquare size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
            </div>
          </div>
          <div className="lg:col-span-2 text-center sm:text-left sm:grid-cols-2 md:grid-cols-4 grid grid-cols-1 ">
            <div>
              <h6 className="font-medium text-gray-400">Solutions</h6>
              <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Support</h6>
              <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Company</h6>
              <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Legal</h6>
              <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
