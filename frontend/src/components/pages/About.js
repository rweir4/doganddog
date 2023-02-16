import React from "react";
import ContactForm from "../ContactForm";
import Sizing from "../Sizing";

const About = () => {
  return (
    <div id='page-content' className='about-page'>
      <div>
        <div className='font-title space-before space-after'>About Ginny & Co.</div>
        <div className='about font-large space-after padding-bottom'>
          <img src="images/ginny-and-me.png" alt='Rebecca and Ginny'/>
          <div className='extra-spacing left-align-with-indent padding-left'>
            <div>
              My name is Rebecca, and I live in East Tennessee with my long-haired miniature dachshund Ginny,
              aka Ginevra Anastasia. She's named after two strong women: Ginny Weasley, and Disney's Anastasia,
              and trust me, she has the personality and style to match.
            </div>
            <div>
              Ginny is my family, and my family deserves the best: all natural, sausage dog adapted designs.
            </div>
            <div className='space-before'>
              At Ginny & Co., we believe that natural fibers are best for dogs, just as they are for their humans.
              Our spring line is made from Irish Linen, one of the highest quality linens available.
            </div>
            <div>
              From the english garden, to the pyramids, the beach, or simply the park, your pup should be ready 
              for any adventure, and we aim to make sure of just that.
            </div>
            <div>
              We plan to expand our human and pet geared products, and introduce sizing for other breeds, 
              so keep an eye out for more!
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='materials'>
        <div className='font-title space-after'>About Our Materials</div>
        <div className='flex-evenly space-before space-after'>
          <div>
            <div className='font-giant space-after space-before'>
              100% Irish Linen
            </div>
            <div className='font-large left-align-with-indent extra-spacing'>
              All of our products are made from Irish Linen, which is moisture-wicking, thermoregulating, 
              and antibacterial, so you can keep your dog healthier, cleaner, and smelling better for longer. 
              It also lets go of stains and gets more durable when wet, making it perfect for summer fun!
            </div>
          </div>
          {/* <img className='materials-img' src='images/linen-colors.png' alt='irish linen' /> */}
        </div>
        <div className='flex-evenly space-after'>
          <div>
            <div className='font-giant space-after space-before'>
              100% Lambswool Fill
            </div>
            <div className='font-large left-align-with-indent extra-spacing'>
              Our plush toys are filled with lambswool fibers, which is sheered off of lambs instead of adult sheep,
              and results in a softer fiber. It's also absorbant and moisture-wicking, hypoallergenic, strong, and of course
              biodegradable.
            </div>
          </div>
          {/* <img className='materials-img' src='images/linen-colors.png' alt='irish linen' /> */}
        </div>
        <div className='flex-evenly space-after'>
          <div>
            <div className='font-giant space-after space-before'>
              Embroidery
            </div>
            <div className='font-large left-align-with-indent extra-spacing space-after'>
              We use Rayon, a natural thread, made strong by the cellulose in tree fibers.
              We use this to give extra shine to our embroidery designs, which also 
              require a stronger thread than cotton or silk.
              We also use a poly stabilizer as the backing for the embroidery.
              We're in search of a natural alterative, but haven't found one yet!
            </div>
          </div>
          {/* <img className='materials-img' src='images/linen-colors.png' alt='irish linen' /> */}
        </div>
        <div className='font-giant space-after space-before'>Care</div>
        <div className='font-large left-align-with-indent extra-spacing care'>
          Machine wash on cold and hang dry to avoid shrinking. 
          All fabrics have been pre-washed and should not shrink again unless subject to heat to dry.
          Iron at medium to medium-high settings depending on how hot your iron gets.
        </div>
      </div>
      <Sizing />
      <ContactForm />
    </div>
  );
};

export default About;