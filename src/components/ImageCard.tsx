function ImageCard({ image, name, sport }: { image: string; name: string; sport?: boolean }) {
  return (
    <a
      href={sport ? "#level" : undefined}
      className="group relative h-full cursor-pointer overflow-hidden rounded-md"
    >
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="h-full w-full object-cover transition-transform group-hover:scale-[105%]"
      />

      {/* overlay  */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-25 transition-opacity group-hover:opacity-0"></div>
      <h4 className="absolute bottom-5 left-2 font-bold uppercase md:left-4">{name}</h4>
    </a>
  );
}

export default ImageCard;
