
const Footer = () => {  
  return (  
      <footer className="bg-gray-900 text-white py-8">  
          <div className="container mx-auto px-4">  
              <div className="flex flex-col md:flex-row justify-between">  
                  <div className="mb-4 md:mb-0">  
                      <h1 className="text-2xl font-bold">TOP FIVE BEST RATED</h1>  
                      <p className="text-sm">Most Reliable Source To Find Industry Experts.</p>  
                      <p className="text-sm">Helpline - +91-8699490011</p>  
                      <p className="text-sm">Email - support@topfivebestrated.com</p>  
                  </div>  
                  <div className="mb-4 md:mb-0">  
                      <h2 className="font-semibold">Trending Categories</h2>  
                      <ul>  
                          <li><a href="#" className="hover:text-gray-400">Get In Touch</a></li>  
                          <li><a href="#" className="hover:text-gray-400">Get Listed</a></li>  
                      </ul>  
                  </div>  
                  <div>  
                      <h2 className="font-semibold">Useful Links</h2>  
                      <ul>  
                          <li><a href="#" className="hover:text-gray-400">About Us</a></li>  
                          <li><a href="#" className="hover:text-gray-400">Login</a></li>  
                          <li><a href="#" className="hover:text-gray-400">Term & Condition</a></li>  
                      </ul>  
                  </div>  
              </div>  
              <div className="border-t border-gray-700 mt-4 pt-4 text-center">  
                  <p className="text-sm">© Copyright Top Five Best Rated. All Rights Reserved.</p>  
                  <div className="flex justify-center space-x-4 mt-2">  
                      <a href="#" className="hover:text-gray-400">YouTube</a>  
                      <a href="#" className="hover:text-gray-400">Twitter</a>  
                      <a href="#" className="hover:text-gray-400">Facebook</a>  
                      <a href="#" className="hover:text-gray-400">Instagram</a>  
                      <a href="#" className="hover:text-gray-400">LinkedIn</a>  
                  </div>  
              </div>  
          </div>  
      </footer>  
  );  
};  

export default Footer;