export function Footer() {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <div className="container-footer grid grid-cols-2 place-items-center h-[500px] items-center">
        <div className="item-footer">
          <h1 className="font-bold">Aonde nos Encontrar?</h1>
          <p className="w-[28ch]">
            Av. São Paulo, 205 Jardim - Alvinópolis, Atibaia - SP, 12942-520
          </p>
        </div>

        <div>
          <h1 className="font-bold">Horários de Funcionamento</h1>
          <p className="w-[20ch]">Segunda à Sexta das 8h as 12h e 13h as 18h</p>
        </div>

        <div className="flex items-center justify-center col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.33819154186003!2d-46.570482979348434!3d-23.118645376954223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec139a23b6d49%3A0xb9d846323db3b638!2sSullivan%20Cabeleireiro!5e0!3m2!1spt-BR!2sbr!4v1665939720138!5m2!1spt-BR!2sbr"
            width="700"
            height="300"
            className="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <p>Todos os Direitos Reservados © 2022</p>
      </div>
    </div>
  );
}
