import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, Fa, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RamprakashRP" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ramprakashrp2004/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ramprakash.rp_2004" },
  { icon: <FaEnvelope />, path: "mailto:ramprakashraja1@gmail.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default Social;
  