import banner from "../../../assets/banner/banner.jpg";
const Banner = () => {
  return (
    <>
      <div
        className="hero h-[calc(100vh-103px)]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5  text-5xl font-bold">
              Fun for the Whole Family
            </h1>
            <p className="mb-5">
              Toys are more than just a way to pass the time. They can also be a
              powerful tool for inspiring creativity, imagination, and learning.
              The right toys can help children explore their interests, develop
              their skills, and reach their full potential.
            </p>
            <button className="btn ">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
