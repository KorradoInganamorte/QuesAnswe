function Home() {
  return (
    <div className="flex flex-col m-auto max-w-[1440px] px-[2.5rem]">
      <div className="flex justify-between mb-[2rem]">
        <div className="flex items-end">
          <h2 className="filter__active">Опросы</h2>
          <h2 className="filter">Вопросы</h2>
          <h2 className="filter">Викторины</h2>
          <h2 className="filter">Все</h2>
        </div>

        <div className="flex items-center">

          <div className="mr-[1.25rem]">
            <div className="card-position__active mb-[.5rem]"></div>
            <div className="card-position__active mb-[.5rem]"></div>
            <div className="card-position__active "></div>
          </div>

          <div className="rotate-90">
            <div className="card-position__horizontal mb-[.5rem]"></div>
            <div className="card-position__horizontal mb-[.5rem]"></div>
            <div className="card-position__horizontal"></div>
          </div>

        </div>
      </div>

      <div className="flex flex-col">
        <div className="card"></div>
      </div>
    </div>
  );
}

export default Home;
