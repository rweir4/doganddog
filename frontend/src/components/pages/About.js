import React from "react";
import ContactForm from "../ContactForm";

const About = () => {
  return (
    <div id='page-content'>
      <div>
        <div className='font-giant break-before break-after'>About Ginny & Co.</div>
        <div className='about'>
          <img src="images/about-ginnyandme.png" alt='Rebecca and Ginny'/>
          <div className='font-large extra-spacing left-align-with-indent padding-left'>
            <div>
              My name is Rebecca, and I live in East Tennessee with my long-haired miniature dachshund Ginny,
              aka Ginevra Anastasia. She's named after two strong women: Ginny Weasley, and Disney's Anastasia,
              and trust me, she has the personality and style to match.
            </div>
            <div>
              Ginny is my family, and my family deserves the best: all natural, sausage dog adapted designs.
            </div>
            <div className='break-before'>
              At Ginny & Co., we believe that natural fibers are best for dogs, just as they are for their humans.
              Our spring line is made from Irish Linen fabrics that have a tight weave and smooth finish.
              We believe in dotting all our i's and crossing all our t's, so all seams are finished with silk thread 
              and hidden away so that none of the fibers can fray with wear and tear.
            </div>
            <div>
              From the english garden, to the pyramids, to the beach, or simply the park, your pup should be ready 
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
      <h1 className='break-before'>About Our Materials</h1>
      <div className='flex break-before break-after'>
        <div>
          <h2>
            100% Irish Linen:
          </h2>
          <div className='font-large left-align-with-indent extra-spacing'>
            All of our products are made from Irish Linen, which is moisture-wicking, thermoregulating, 
            and antibacterial, to can keep your dog healthier, cleaner, and smelling better for longer. 
            It also lets go of stains and gets more durable when wet, making it perfect for summer fun!
          </div>
        </div>
        <img className='materials-img' src='images/linen-colors.png' alt='irish linen' />
      </div>
      <div className='flex break-after'>
        <img className='materials-img' src='images/linen-colors.png' alt='irish linen' />
        <div>
          <h2>
            Kapok Fill:
          </h2>
          <div className='font-large left-align-with-indent extra-spacing'>
            Our plush toys are filled with kapok fibers, which are organic and hypoallergenic, 
            gathered from the seed pods of the kapok tree.
          </div>
        </div>
      </div>
      <div className='flex break-after'>
        <div>
          <h2>
            Rayon Embroidery Thread:
          </h2>
          <div className='font-large left-align-with-indent extra-spacing break-after'>
            A natural thread that comes from the tree fibers, made strong by cellulose.
            We use this to give extra shine to our embroidery designs, which also 
            require a stronger thread than cotton or silk.
          </div>
        </div>
        <img className='materials-img' src='images/linen-colors.png' alt='irish linen' />
      </div>
      <h1>Care</h1>
      <div className='font-large left-align-with-indent extra-spacing break-after'>
        Machine wash on cold and hang dry to avoid shrinking. All fabrics have been pre-washed and should not shrink again unless subject to heat.
      </div>
      <i class="fa-brands fa-instagram"></i>

      <ContactForm />
    </div>
  );
};

export default About;