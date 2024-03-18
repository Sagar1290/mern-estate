import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 border-t bg-gray-200 flex flex-col md:flex-row justify-between items-center px-4">
      <div className=" flex p-4 space-x-8 text-sm whitespace-nowrap">
        <p className="flex gap-2 items-center hover:underline">
          <CiMail />
          <span>dev.sagar1290@gmail.com</span>
        </p>
        <p className="flex gap-2 items-center hover:underline">
          <IoCallOutline />
          <span>+91 798309449</span>
        </p>
      </div>
      <div className="text-center">&copy; 2024 Sagar Prajapati</div>
    </footer>
  );
};

export default Footer;
