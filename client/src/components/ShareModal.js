import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  // InstapaperShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareModal = ({ url, theme }) => {
  return (
    <div
      className="d-flex justify-content-between px-4 py-2"
      style={{ filter: theme ? "invert(1)" : "invert(0)" }}
    >
      <FacebookShareButton url={url}>
        <FacebookIcon round={true} size={32} />
      </FacebookShareButton>
      <EmailShareButton>
        <EmailIcon round={true} size={32} />
      </EmailShareButton>
      <WhatsappShareButton>
        <WhatsappIcon round={true} size={32} />
      </WhatsappShareButton>
      <TelegramShareButton>
        <TelegramIcon round={true} size={32} />
      </TelegramShareButton>
      <LinkedinShareButton>
        <LinkedinIcon round={true} size={32} />
      </LinkedinShareButton>
      <PinterestShareButton>
        <PinterestIcon round={true} size={32} />
      </PinterestShareButton>
      <TwitterShareButton>
        <TwitterIcon round={true} size={32} />
      </TwitterShareButton>
    </div>
  );
};

export default ShareModal;
