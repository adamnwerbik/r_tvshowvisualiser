export function Video() {
  return (
    <video
      loop
      autoPlay
      muted
      preload="none"
      className="border-gray-200 border mt-36 md:mt-24 rounded-lg w-5/6 md:w-3/5 lg:w-2/5 lg:mt-6 xl:w-3/12 xl:mt-32 "
    >
      <source src="./TVVisShowcase2.webm" type="video/webm" />
      <source src="./TVVisShowcase2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
