function ImageCard({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative rounded-md overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="h-full w-full object-cover group-hover:scale-[105%] transition-transform"
      />

      {/* overlay  */}
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25 group-hover:opacity-0 transition-opacity"></div>
      <h4 className="absolute bottom-5 left-2 md:left-4 font-bold uppercase">{name}</h4>
    </div>
  );
}

export default ImageCard;
