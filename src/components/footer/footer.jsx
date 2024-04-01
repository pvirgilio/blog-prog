export default function Footer() {
  return (
    <footer className="w-full mt-10">
      <div className="w-full bg-gray-900 h-[50px]"></div>

      <article className=" bg-black w-full mx-auto py-6 ">
        <div className="container  w-full flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl ac tincidunt lacinia, tellus ex tincidunt mauris, id
              lacinia nunc mauris et metus.
            </p>
          </div>
          <div className="w-full max-w-[200px] md:w-1/3 lg:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">
              Categories
            </h3>
            <ul className="text-gray-400">
              <li>Technology</li>
              <li>Programming</li>
              <li>Web Development</li>
              <li>Data Science</li>
            </ul>
          </div>
          <div className="w-full max-w-[200px]  md:w-1/3 lg:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: 123-456-7890</p>
          </div>
          <div className="w-full  md:w-1/3 lg:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 10.5H13V15H11V10.5H8.5V8H11V6H13V8H15.5V10.5Z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 9H15.5C14.67 9 14 9.67 14 10.5V13.5C14 14.33 14.67 15 15.5 15H17C17.83 15 18.5 14.33 18.5 13.5V10.5C18.5 9.67 17.83 9 17 9ZM9 9H10.5V15H9V9ZM11 4.5C11 3.67 10.33 3 9.5 3H7C6.17 3 5.5 3.67 5.5 4.5V7.5C5.5 8.33 6.17 9 7 9H9.5C10.33 9 11 8.33 11 7.5V4.5ZM7 5H9V7H7V5ZM7 15H9V17H7V15Z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.5 9.5C17.5 9.5 17.53 10.5 17.5 10.5C17.47 11.33 17.33 12.17 17 13C16.86 13.5 16.5 14.5 15.5 14.5H14V9.5H15.5C16.5 9.5 16.86 10.5 17 11C17.33 11.83 17.47 12.67 17.5 13.5C17.53 13.5 17.5 14.5 17.5 14.5H19V16H17.5V19H15.5V16H14V14.5H15.5C16.5 14.5 16.86 13.5 17 13C17.33 12.17 17.47 11.33 17.5 10.5C17.53 10.5 17.5 9.5 17.5 9.5ZM12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </footer>
  );
}
