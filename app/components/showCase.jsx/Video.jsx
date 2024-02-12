export function Video() {
  return (
    <video
      loop
      autoPlay
      muted
      preload="none"
      className="border-gray-200 border rounded-lg w-2/3 mt-36 md:w-3/5 lg:w-2/5 xl:w-2/12 "
    >
      <source src="./TVVisShowcase2.webm" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srclang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
