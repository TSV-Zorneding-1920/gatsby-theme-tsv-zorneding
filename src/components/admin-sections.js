import BannerList from "./sections/banner-list";
import Banner from "./sections/banner";
import Contact from "./sections/contact";
import Body from "./sections/body";
import IFrame from "./sections/iframe";
import Carousel from "./sections/carousel";
import IconList from "./sections/icon-list";
import LinkList from "./sections/link-list";
import FileList from "./sections/file-list";
import ImageTextSmall from "./sections/image-text-small";
import Image from "./sections/image";
import TeaserList from "./sections/teaser-list";
import ImageText from "./sections/image-text";

export const adminBlocks = [
  new BannerList().admin(),
  new Banner().admin(),
  new Body().admin(),
  new Carousel().admin(),
  new Contact().admin(),
  new IconList().admin(),
  new LinkList().admin(),
  new FileList().admin(),
  new IFrame().admin(),
  new Image().admin(),
  new ImageText().admin(),
  new ImageTextSmall().admin(),
  new TeaserList().admin(),
];
