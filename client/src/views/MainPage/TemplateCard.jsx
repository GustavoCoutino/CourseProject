function TemplateCard({ title, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <img className="w-full h-48 object-contain" src={image} alt={title}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
}

export default TemplateCard;
