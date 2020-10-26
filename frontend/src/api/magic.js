const url = {
  magic: "https://api.magicthegathering.io/v1",
};

const type = {
  cards: "/cards",
};

const montarFiltro = (filtro) => {
  let filtros = "?";

  if (filtro.nome) filtros = filtros + `name=${filtro.nome}`;

  return filtros;
};

const getCards = (filtro) => {
  const filtroFormatado = montarFiltro(filtro);
  return fetch(`${url.magic}${type.cards}${filtro && filtroFormatado}`);
};

export { getCards };
