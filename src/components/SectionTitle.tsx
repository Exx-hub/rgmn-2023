function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xl md:text-2xl relative w-fit font-bold  lg:self-start">
      {title}
      <span
        className="absolute -bottom-2 lg:-bottom-4 bg-white left-[15%] lg:left-0 right-[15%] h-[3px]"
        style={{
          backgroundColor: "#b8c6db",
          backgroundImage: "linear-gradient(315deg, #91b1e2 0%, #f5f7fa 74%)",
        }}
      ></span>
    </h2>
  );
}

export default SectionTitle;
