export function Footer() {
  return (
    <footer className="bg-white w-full flex flex-col justify-center items-center gap-5">
      <div className=" flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center h-[500px]">
        <div className="text-center mt-4">
          <h1 className="font-bold text-[20px] sm:text-lg">Aonde nos Encontrar?</h1>
          <p className="text-[20px] sm:text-lg">
            Av. São Paulo, 205 - Alvinópolis, Atibaia-SP, 12942-520
          </p>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-[20px] sm:text-lg">Horários de Funcionamento</h1>
          <p className="text-[20px] sm:text-lg ">
            De Segunda à Sexta das 8:00h as 12:00h e 13:00h as 20:00h
          </p>
        </div>

        <div className="flex items-center justify-center sm:col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.33819154186003!2d-46.570482979348434!3d-23.118645376954223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec139a23b6d49%3A0xb9d846323db3b638!2sSullivan%20Cabeleireiro!5e0!3m2!1spt-BR!2sbr!4v1665939720138!5m2!1spt-BR!2sbr"
            height="300"
            className="border:0 w-[300px] sm:w-[500px] lg:w-[900px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <p>Todos os Direitos Reservados © 2022</p>
      </div>
    </footer>
  );
}
