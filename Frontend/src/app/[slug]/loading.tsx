export default function loading() {
  return (
    <div className="ml-4">
      <p>Cargando...</p>
      <div className="mt-1 flex flex-wrap gap-4">
        {[...Array(10).keys()].map((i) => (
          <div
            key={i}
            className="w-40 h-44 rounded-lg shadow-card px-2 pt-2 mb-5"
          >
            <div className="animate-pulse rounded-lg w-36 h-28 bg-lightgrey" />
            <div className="animate-pulse mt-1 w-36 h-5 rounded-md bg-lightgrey" />
            <div className="animate-pulse mt-1 w-10 h-5 rounded-md bg-lightgrey" />
          </div>
        ))}
      </div>
    </div>
  );
}
