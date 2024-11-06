import { Business, Businesscard } from "../Import/imprt";
import CardCarousel from "./CardCarousel";
import Carousel from "./Carousel";

const LocalBusiness = () => {
  return (
    <>
      <div className="flex flex-col">
        <Carousel />
        <CardCarousel/>
        <div className="relative">
          <Business />
        </div>
        <Businesscard/>
      </div>
    </>
  );
};

export default LocalBusiness;
