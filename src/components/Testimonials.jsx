import React from "react";
import Card from "./Card";
import Slider from "react-slick";

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    };
    return (
      <div className='w-full bg-[#DBEAFA] py-10'>
        <div className='md:max-w-[1400px] grid md:grid-cols-2 m-auto max-w-[520px] pl-8 gap-20'>
          <Card
            feedback="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, qui! 
                      Quia eligendi modi illo incidunt, animi, ex nobis est dignissimos quo, 
                      dolorum eos quam nesciunt totam suscipit dicta harum vitae!"
            nome="Dr Marcelo Brasil"
            clinica="Odontocamp"
          />
          <div className="hidden md:flex">
            <Card
              feedback="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, qui! 
                        Quia eligendi modi illo incidunt, animi, ex nobis est dignissimos quo, 
                        dolorum eos quam nesciunt totam suscipit dicta harum vitae!"
              nome="Livido"
              clinica="Odontocamp"
            />
          </div> 
        </div>
      </div>
    )
}

export default Testimonials