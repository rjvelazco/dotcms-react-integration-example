function Banner(contentlet) {
  const { title, caption, image, link, buttonText } = contentlet;
  const imagePath = `${import.meta.env.VITE_DOTCMS_HOST_KEY}/dA/${image}`;

  return (
    <div className="relative w-full p-4 bg-gray-200 h-96">
      {image && (
        <img
          src={imagePath}
          className="object-cover w-full h-full"
          alt={title}
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
        <h2 className="mb-2 text-6xl font-bold text-shadow">
          {contentlet.title}
        </h2>
        <p className="mb-4 text-xl text-shadow">{caption}</p>
        <a
          className="p-4 text-xl transition duration-300 bg-purple-500 rounded hover:bg-purple-600"
          href={link || "#"}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Banner;
