import React from "react";

const About = () => {
  return (
    <div id='page-content'>
      <div>
        <div className='font-giant break-before break-after'>About Ginny & Co.</div>
        <div className='about'>
          <img src="images/about-ginnyandme.png" />
          <div className='font-large extra-spacing left-align-with-indent padding-left'>
            At Ginny & Co., we believe that natural fibers are best for you, and your dog. There are many benefits to having them... listed below. what the heck do i talk about.
          </div>
        </div>
      </div>
      <br />
      <h1 className='break-before'>About Our Materials</h1>
      <h2>
        100% Irish Linen:
      </h2>
      <div className='font-large left-align-with-indent extra-spacing'>
        All of our products are made from Irish Linen, which is moisture-wicking, thermoregulating, and antibacterial, to can keep your dog healthier, cleaner, and smelling better for longer. It also lets go of stains and gets more durable when wet, making it perfect for summer fun!
      </div>
      <h2>
        Kapok Fill:
      </h2>
      <div className='font-large left-align-with-indent extra-spacing'>
        Our plush toys are filled with kapok fibers, which are organic and hypoallergenic, gathered from the seed pods of the kapok tree.
      </div>
      <h2>
        Rayon Embroidery Thread:
      </h2>
      <div className='font-large left-align-with-indent extra-spacing break-after'>
        A natural thread that comes from the tree fibers, made strong by cellulose.
      </div>
      <h1>Care</h1>
      <div className='font-large left-align-with-indent extra-spacing'>
        Machine wash on cold and hang dry to avoid shrinking. All fabrics have been pre-washed and should not shrink again unless subject to heat.
      </div>
    </div>
  );
};

export default About;