import InstaIcon from "@/assets/icons/insta.svg";
import XSocialIcon from "@/assets/icons/x-social.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

const socialIcons = [InstaIcon, XSocialIcon, TiktokIcon, YoutubeIcon];

export default function Footer() {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="text-center">
            &copy; {new Date().getFullYear()} Simreich, Inc. All rights reserved
          </div>

          {/* Socail Icon */}
          <div className="flex justify-center gap-2.5">
            {socialIcons.map((SocialIcon, idx) => (
                <a key={idx} href="#">
                  <SocialIcon />
                </a>
                
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
