import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="row">
          <div className="left-column">
            <h2>About the App:</h2>
            <p>
              Our meal sharing app is more than just a platform for hosting and
              sharing meals. Our primary objective is to{" "}
              <strong>bring people together </strong>
              and make the world a better place, one meal at a time. We believe
              that sharing food is not only a way to satisfy hunger but also an
              opportunity to <strong>connect with others</strong>, share
              cultures, and create lasting memories.{" "}
            </p>
            <p>
              {" "}
              By facilitating connections between hosts and guests, our app
              promotes cultural exchange and fosters a sense of community.
              Through the shared experience of a home-cooked meal, people can
              learn about different cuisines, traditions, and stories from
              around the world. We believe that these interactions contribute to
              a more inclusive and understanding society.{" "}
            </p>
            <p>
              Whether you're a traveler seeking an authentic local dining
              experience at an affordable price, a newcomer in town looking to
              meet new people, or simply someone who enjoys trying out different
              flavours, our Meal Sharing App is exactly what you need.
            </p>
            <p>
              Start sharing today, and{" "}
              <strong>make the world a better place.</strong>
            </p>
          </div>
          <div className="right-column">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/RvGnZENog5JYnS_rwpNDQgVS8VM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/09/30/698/n/47973216/tmp_HcFZ3H_14e8d87ddc1ad0c7_GettyImages-1173795388.jpg"
              alt="girls sharing food"
            />
          </div>
        </div>
        <div className="row">
          <div className="left-column">
            <img
              src="https://www.tastingtable.com/img/gallery/13-food-rules-that-can-get-lost-in-translation/intro-1667830490.webp"
              alt="girls sharing food"
            />
          </div>
          <div className="right-column">
            <h2>Why become a host?</h2>
            <p>
              Are you passionate about cooking and love sharing your culinary
              creations with others? Becoming a host on our Meal Sharing App
              offers you a unique opportunity to showcase your skills, open your
              home to new faces, and embark on a culinary adventure that
              transcends borders.
            </p>
            <p>
              {" "}
              By becoming a host, you can unlock a world of possibilities. Share
              your favorite recipes, create personalized dining experiences, and
              welcome guests from all walks of life into your kitchen. As a
              host, you'll not only earn an additional income but also gain the
              satisfaction of connecting with like-minded individuals and
              creating memorable dining moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
