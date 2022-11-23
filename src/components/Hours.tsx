import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { CaretLeft, CaretRight, Spinner } from "phosphor-react";
import "keen-slider/keen-slider.min.css";
import { hoursArray } from "../utils/hoursArray";
const adsPerView = 3;
const spacing = 24;

export default function Hours() {
  const [hoursData, setHoursData] = useState<string[]>([]);
  const [currentHour, setCurrentHour] = useState("");
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      spacing,
      perView: adsPerView,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setIsSliderLoaded(true);
    },
  });

  useEffect(() => {
    setHoursData(hoursArray);
  }, []);

  if (hoursData.length === 0) {
    return null;
  }
  function setOnLocalstorage(hour: string) {
    localStorage.setItem("currentHour", JSON.stringify(hour));
  }

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {hoursArray.map((hour, index) => (
          <button
            className={`card keen-slider__slide number-slide${index + 1}`}
            key={index}
            onClick={() => setOnLocalstorage(hour)}
          >
            {hour}
          </button>
        ))}
      </div>
      {isSliderLoaded && instanceRef.current && (
        <>
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-6"
            onClick={instanceRef.current.prev}
          >
            <CaretLeft size={20} />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-6"
            onClick={instanceRef.current.next}
          >
            <CaretRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}
