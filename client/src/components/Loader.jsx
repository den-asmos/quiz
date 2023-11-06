const Loader = () => {
  return (
    <p
      type="button"
      className="py-2 px-4 text-2xl flex flex-col justify-center items-center gap-4 rounded-md"
    >
      <svg
        className="animate-spin h-10 w-10 border-4 border-[--color-green] border-r-0 rounded-full"
        viewBox="0 0 24 24"
      ></svg>
      Загрузка...
    </p>
  );
};

export default Loader;
