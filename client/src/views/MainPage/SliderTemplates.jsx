import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TemplateCard from "./TemplateCard";
import images from "../../assets/images.png";

function SliderTemplates({ templates, title }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      <Slider {...settings}>
        {templates.map((template) => (
          <div key={template.templateId}>
            <TemplateCard title={template.title} image={images} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderTemplates;
