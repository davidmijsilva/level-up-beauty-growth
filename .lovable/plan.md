# Level Up — Landing page de recrutamento

Uma página única, elegante e 100% responsiva (pensada primeiro para telemóvel), em português, para atrair novas pessoas para a equipa.

## Identidade visual

- Rosa principal #F472B6 para botões e destaques, #F9A8D4 em fundos suaves e detalhes.
- Fundo branco quente (off-white muito subtil), texto em cinzento-escuro quase preto.
- Títulos em Playfair Display, texto em Inter, apoios/etiquetas em Montserrat.
- Logótipo criado por mim: monograma "SP" minimalista dentro de um contorno fino, com "Sara Pereira · Level Up" ao lado, no topo.
- Cantos suaves, sombras muito leves, bastante espaço em branco, animações discretas ao deslizar.

## Secções

1. **Topo (Hero)** — duas colunas no computador, empilhadas no telemóvel: título "Level Up: O teu próximo nível começa quando decides explorar novas possibilidades.", sub-título indicado, botão rosa "Quero saber mais pelo WhatsApp" com ícone, e a tua fotografia com o mostruário de perfumes num enquadramento elegante.
2. **Como te vamos ajudar a crescer** — texto introdutório + 3 cartões com ícones finos: Descoberta da Oportunidade, Acompanhamento e Orientação, Comunidade e Crescimento.
3. **Ambiente de trabalho** — faixa com a tua segunda fotografia e 2 espaços reservados claramente marcados para carregares mais fotos com os produtos.
4. **O que diz quem já trabalha connosco** — 4 testemunhos (Ana T., Jéssica, Ana S., Margarida Saraiva) com os textos que enviaste; carrossel deslizante no telemóvel e grelha no computador, cada cartão com um círculo reservado para a foto da pessoa.
5. **Contacto e rodapé** — "Pronta para dar o próximo passo? Fala comigo diretamente.", botão WhatsApp (967 871 181) e formulário simples (Nome, Email, Telemóvel, Mensagem). Rodapé com zona de atuação Coimbra (sem morada), telefones 238 579 972 e 967 871 181, email saarap08@gmail.com e Instagram @_saarapereira_.

## Formulário de contacto

Sem base de dados nesta primeira versão: ao enviar, a mensagem é preparada e aberta no WhatsApp já preenchida, com confirmação no ecrã. Se preferires receber os contactos guardados e por email, digo-te e ativo isso depois.

## Notas técnicas

- Página em `src/routes/index.tsx` com componentes por secção em `src/components/`.
- Fontes carregadas por `<link>` no `__root.tsx`; cores e tipografia como tokens em `src/styles.css`.
- Fotografias enviadas publicadas via Lovable Assets; logótipo em SVG inline.
- Título e descrição próprios da página para partilha e pesquisa; imagens com texto alternativo.
