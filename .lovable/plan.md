# Informação legal da página Level Up

Uma única página legal, em português, com três secções: Privacidade, Termos e Cookies. Sem inventar dados: apenas o nome "Sara Pereira", o email e o telemóvel já usados na página.

## Página legal (`/legal`)

Mesmo estilo visual da página principal (tons de rosa, tipografia atual), texto tranquilo e legível, com um índice curto no topo.

### 1. Política de Privacidade
- Responsável pelo tratamento: Sara Pereira, contactável por saarap08@gmail.com e 967 871 181.
- Que dados são recolhidos: só os do formulário (nome, email, telemóvel, mensagem).
- Finalidade: responder ao contacto e dar a conhecer o projeto. Não há venda nem cedência de dados.
- Como são enviados: o formulário é processado por um serviço externo de envio de emails (Web3Forms), que reencaminha a mensagem para o email da Sara.
- Conservação: apenas o tempo necessário para responder e manter o contacto; podes pedir a eliminação a qualquer momento.
- Direitos do RGPD: acesso, correção, eliminação, oposição e portabilidade, por email; direito de reclamação à CNPD.

### 2. Termos e Condições
- A página é informativa: apresenta o projeto e permite manifestar interesse. Não se vende nada nem se celebra contrato aqui.
- Não há promessas de rendimentos: os resultados dependem de cada pessoa.
- Conteúdos e imagens são propriedade da Sara Pereira; não podem ser reutilizados sem autorização.
- Links externos: o site pode encaminhar para sites de terceiros, com regras próprias, fora do controlo desta página. Frase discreta a esclarecer que alguns desses links são de referência/afiliação, sem nomear a marca e sem destaque.
- Lei portuguesa aplicável.

### 3. Cookies
- A página não usa cookies de estatísticas, publicidade nem seguimento; apenas o estritamente necessário ao funcionamento.
- Por isso não existe banner de consentimento.
- Nota de que, se isso mudar, o texto será atualizado e será pedido consentimento.

## Ligações no site
- Rodapé passa a ter um link discreto "Informação legal" para a nova página.
- Junto ao botão de envio do formulário, uma linha pequena: ao enviar, aceitas a política de privacidade (com link).
- A nova página tem link de regresso ao início.

## Notas técnicas
- Nova rota `src/routes/legal.tsx` com `head()` próprio (título, descrição, og, canonical) e `robots` normal.
- Conteúdo em componentes/secções simples; reutiliza os dados de `src/components/level-up/contact-info.ts`.
- Rodapé (`Footer.tsx`) e `ContactSection.tsx` recebem os links.
- Data de última atualização gerada estaticamente no texto.
