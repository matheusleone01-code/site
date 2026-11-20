/* =====================================================================
   CENAS DO JOGO "CARMEN: A ESTRADA ATÉ O PALÁCIO"
   ---------------------------------------------------------------------
   Este é o único arquivo do jogo que você precisa editar.

   Como funciona:
   - O jogo tem ARCOS. Cada arco tem CENAS. Cada cena termina numa
     ENCRUZILHADA (pergunta) com OPÇÕES de fala ou de ação.
   - A opção com  "certa": true  continua a história.
   - A opção com  "desvio": true  é um erro com conserto: o jogo mostra o
     "resultado" dela (a consequência) e depois a fala certa, e a história
     segue. Conta como um desvio no placar final.
   - As outras opções levam a um final de derrota (o texto de "resultado")
     e o jogador volta ao início do arco (checkpoint).
   - Bolsa: "ganha": ["moedas"] põe o item na bolsa, "perde" tira, e
     "requer": "moedas" faz a opção só aparecer para quem tem o item.
     Os itens ficam descritos em "itens".
   - Se todas as opções de uma cena forem certas, é uma escolha livre.
   - A ordem das opções é embaralhada a cada partida, então pode escrever
     a certa em qualquer posição.
   - Cada texto é uma lista de parágrafos entre aspas, separados por vírgula.
     Falas começam com "— ". Para itálico, use *asteriscos*.
   - Use aspas curvas “assim” dentro dos textos (as retas " quebram o arquivo).
   - "desbloqueia" abre a ficha de um personagem quando a cena aparece.
   ===================================================================== */

window.JOGO = {
  "titulo": "Carmen",

  "subtitulo": "A estrada até o Palácio Real",

  "aviso": "Este jogo se passa num bordel e tem linguagem e temas adultos. Recomendado para maiores de 16 anos.",

  "abertura": [
    "No Reino dos Burgos, a plebe sempre será plebe. Os nobres, chamados de Ilustres, casam-se entre si. As plebeias bonitas, no máximo, tornam-se concubinas.",
    "Carmen cresceu em Serra Verde, uma cidade pequena. Madalena, mãe dela, é a cortesã mais disputada do bordel onde moram. De manhã, Carmen varre o salão; à noite, conversa com os clientes. Só conversa, por enquanto.",
    "Faltam 7 dias para Carmen atingir a maioridade. E Madalena já decidiu o destino da filha.",
    "Carmen prefere morrer a se prostituir. Você irá guiá-la para uma vida melhor.",
    "Minta. Engane. Oculte. Faça o que for necessário para que Carmen suba de vida.",
    "Mas não se esqueça que, por trás até mesmo de uma farsante, bate um coração."
  ],

  // Caixa "Como jogar", abaixo da introdução
  "comoJogar": [
    "Algumas falas erradas têm conserto; outras acabam com a história ali, e você recomeça do início do arco.",
    "Em certos momentos, Carmen pode guardar objetos na bolsa, e eles abrem caminhos extras mais adiante.",
    "As fichas dos personagens guardam pistas."
  ],

  // Prêmio para quem chega ao Palácio Real
  "premio": {
    "valor": "R$ 10 de desconto",
    "instrucao": "Tire um print desta tela e mande por direct para @omatheusleone.",
    "instagram": "https://www.instagram.com/omatheusleone/"
  },

  // Link para comprar o livro (aparece na vitória e na derrota)
  "linkLivro": "https://a.co/d/0dUY5sYb",

  // Fichas dos personagens. "inicial: true" = disponível desde o começo. As outras abrem pelas cenas.
  "fichas": {
    "carmen": {
      "nome": "Carmen",
      "retrato": "img/retratos/carmen.png",
      "papel": "A protagonista",
      "inicial": true,
      "texto": [
        "Quase maior de idade. Loira, cabelos ondulados e cheios, olhos azuis. Nasceu e cresceu no bordel de Serra Verde e nunca saiu da cidade.",
        "Mente bem, e sabe que as melhores desculpas são as que têm um fundo de verdade.",
        "Seu talento é lidar com gente: conquista as pessoas fazendo-as falar de si mesmas, com elogios na medida certa.",
        "Quando é preciso, finge submissão. Quando alguém a trata com deboche, inverte os papéis.",
        "Jurou a si mesma uma única coisa: não seria puta.",
        "Sonha com um casamento por amor, uma família de verdade e um mundo maior do que Serra Verde. Não bebe vinho, porque resseca a voz: canta escondido quando ninguém está olhando."
      ]
    },
    "madalena": {
      "nome": "Madalena",
      "retrato": "img/retratos/madalena.png",
      "papel": "A mãe",
      "inicial": true,
      "texto": [
        "Quarenta e dois anos (diz trinta e dois aos clientes). A cortesã mais requisitada de Serra Verde. O cafetão, Gasparo, praticamente a deixa controlar tudo.",
        "Cabelos loiros na altura dos ombros, perfume de especiarias, cremes de chocolate e baunilha. Chama a filha de “minha pequena canção”.",
        "Acredita que o melhor futuro para Carmen é seguir seus passos. “Igual, não. Melhor.”",
        "Não suporta desobediência aberta: quando a filha bate de frente, ela aperta o cerco. Quando a filha cede, ela relaxa.",
        "Conhece Carmen como a palma da mão. Inclusive o calendário dela."
      ]
    },
    "mundo": {
      "nome": "O reino dos Burgos",
      "papel": "Glossário",
      "inicial": true,
      "texto": [
        "*Ilustres*: a nobreza. Uma Ilustre é chamada de “Vossa Ilustreza”.",
        "*Passarinhos*: o dinheiro. Andorinhas são moedas de bronze, beija-flores valem mais, e garças são de ouro.",
        "*Pacentro*: a Capital, uma cidade-fortaleza cercada por muralhas. No coração dela fica o Palácio Real.",
        "*A Deusa* e *a Luz*: a fé do reino. A Deusa também é chamada de Resplandecente."
      ]
    },
    "armando": {
      "nome": "Armando",
      "papel": "O mascate",
      "texto": [
        "Cinquentão de barba aparada e cabelos grisalhos penteados para trás. Perfume amadeirado.",
        "Viaja de vila em vila numa loja-carruagem puxada por dois burros, vendendo roupas e acessórios femininos. Este ano, a temporada de vendas vai mal.",
        "É um dos clientes favoritos de Madalena e enxerga Carmen como uma garotinha.",
        "Adora contar histórias das viagens e do reino. Nunca diz palavrões na frente de Carmen.",
        "Desconfia de quem só se aproxima por interesse. Tem bom coração, mas não gosta de ser encurralado."
      ]
    },
    "jaime": {
      "nome": "Jaime Barbosa",
      "papel": "O Ilustre de Serra Verde",
      "texto": [
        "O nobre local, dono do castelo no alto do morro. Cliente assíduo de Madalena, banca o luxo do bordel.",
        "Gosta de ser o centro das atenções. Anda sempre com dois guardas, que ficam postados na porta enquanto ele se diverte."
      ]
    },
    "alexandro": {
      "nome": "Alexandro Barbosa",
      "papel": "O filho do Ilustre",
      "texto": [
        "Filho de Jaime, a cara do pai, só que menos alto e menos roliço. Tímido e nervoso: foi levado ao bordel pelo pai, contra a vontade.",
        "Quer perder a virgindade com alguém que ame de verdade.",
        "Fala muito da família: da mãe, que só não perdoaria Jaime se ele se deitasse com outra Ilustre, e da irmã caçula, Vivian, que mal tem vida entre aulas de costura, postura, dança e línguas, e quase nunca sai do castelo."
      ]
    },
    "isolina": {
      "nome": "Dona Isolina",
      "papel": "A joalheira",
      "texto": [
        "Senhorinha de cabelos brancos e óculos de corrente. Cheira a sabonete de ervas. Tem uma joalheria de semijoias em Pacentro há décadas e nunca precisou de funcionária.",
        "Casca dura, coração mole. Diz que bajulação não funciona com ela, mas sabe que funciona com as clientes.",
        "Vende há tempo suficiente para saber que, em Pacentro, ninguém gosta de receber conselho de uma moça do interior."
      ]
    },
    "rosa": {
      "nome": "A Ilustre de rosa",
      "papel": "Uma cliente",
      "texto": [
        "Magricela, toda de rosa: chapéu com penas de flamingo, vestido de frufrus, joias de morganita. Perfume doce demais.",
        "Tem sotaque do norte, a região mais caipira do reino. Entre os Ilustres, deve ser de terceira classe, por isso contava vantagem para cima da plebe.",
        "Destrata quem considera inferior. Mas adora plateia: com bajulação suficiente, fala mais do que deveria."
      ]
    },
    "empregadas": {
      "nome": "As Empregadas Reais",
      "papel": "Na entrada do palácio",
      "texto": [
        "Uniformes sóbrios, tons escuros, fala mansa e miúda.",
        "Passaram a vida inteira entre castelos e palácios. Sabem lidar com Ilustres, mas não com gente que fala grosso e alto.",
        "Acima delas está a governanta, Sebastiana. Ninguém quer ser repreendida por ela."
      ]
    }
  },

  // Itens da bolsa. Uma opção com "ganha" coloca o item na bolsa; "perde" tira; "requer" só mostra a opção se o item estiver na bolsa.
  "itens": {
    "moedas": {
      "nome": "Moedas de Madalena",
      "texto": [
        "Uma bolsinha de veludo com as economias que Madalena guardava na caixinha de joias, embaixo das meias.",
        "Carmen diz a si mesma que não foi roubo: eram dezessete anos de salão varrido. A consciência discorda."
      ]
    },
    "lenco": {
      "nome": "Lenço de Madalena",
      "texto": [
        "Lenço de seda bordado com flores de laranjeira. Madalena o amarrava no pescoço quando cantava para Carmen dormir.",
        "Não vale uma andorinha. Ainda tem o cheiro dela."
      ]
    },
    "botao": {
      "nome": "Botão de punho dos Barbosa",
      "texto": [
        "Botão de prata com o brasão dos Barbosa. Alexandro o perdeu no quarto de Carmen, na noite em que não aconteceu nada.",
        "Pequeno demais para fazer falta a ele. Talvez grande o bastante para abrir uma porta."
      ]
    }
  },

  // Arcos e cenas
  "arcos": [
    {
      "titulo": "Serra Verde",
      "cenario": "serra-verde",
      "abertura": [
        "Trancada no camarim do prostíbulo, Carmen só tinha uma certeza na vida: que não ia ser puta."
      ],
      "cenas": [
        {
          "titulo": "O camarim",
          "imagem": { "arquivo": "img/espelho-cor.jpg", "descricao": "Madalena, de corpete vermelho, arruma Carmen diante do espelho da penteadeira." },
          "texto": [
            "Madalena escovava meus cabelos diante do espelho, como fazia quando eu era criança. Eu tinha acabado de pedir mais alguns meses: sair, circular pelas ruas, quem sabe conquistar um bom partido. Quem sabe até um Ilustre.",
            "— Só de dizer uma coisa dessas, já mostra como você é infantil — interrompeu ela. — Ilustres nunca se casarão com uma plebeia; no máximo, eles te farão uma concubina. É por isso que, por bem ou por mal, você fará o que digo. E acabou a discussão.",
            "Olhei para baixo. Por mais que eu insistisse, ela nunca daria o braço a torcer. Só me restava uma opção.",
            "Eu fugiria do bordel.",
            "Mas, antes, precisava responder à minha mãe."
          ],
          "pergunta": "O que Carmen diz a Madalena?",
          "opcoes": [
            {
              "texto": "— Está bem… Me dói admitir, mas tem razão. Quando a hora chegar, farei o que diz.",
              "certa": true,
              "resultado": [
                "Deixei os ombros caírem um centímetro, simulando derrota. O espelho não mentia: a expressão sisuda dela se aliviou em um sorriso largo.",
                "— Boa menina…",
                "Eu não precisava que Madalena concordasse comigo. Livre desse peso, fingir uma submissão relutante foi fácil."
              ]
            },
            {
              "texto": "— Prefiro morrer a virar o que você é.",
              "resultado": [
                "O silêncio que se seguiu foi pior do que um tapa. Madalena largou a escova na penteadeira.",
                "— Então vai ser por mal.",
                "Naquela mesma noite, Gasparo passou a dormir no sofá da sala, de frente para a porta. Até o fim da semana, nunca mais fiquei um minuto sozinha."
              ]
            },
            {
              "texto": "— Então eu vou embora daqui, mãe. Nem que seja a pé.",
              "resultado": [
                "Madalena riu, mas os olhos dela não riram. — Vai, é? Pois vá. A estrada está ali, e a fome também.",
                "Ela voltou a escovar meu cabelo, esperando. Engoli o orgulho. Ameaçar Madalena era o jeito mais rápido de ter Gasparo vigiando a minha porta. Eu precisava que ela baixasse a guarda, não que a erguesse."
              ],
              "desvio": true
            }
          ]
        },
        {
          "titulo": "A desculpa",
          "texto": [
            "— Estava dizendo que você já deveria usar essa noite para ir escolhendo com quem gostaria de ter sua primeira vez — continuou Madalena. — Permitirei que você escolha, dessa vez.",
            "Nossa, obrigada por me dar essa liberdade toda, pensei. Mas, se eu fingisse estar satisfeita, teria que passar a noite inteira flertando com os clientes. E eu precisava de tempo sozinha para planejar a fuga."
          ],
          "pergunta": "Como Carmen escapa da noite no salão?",
          "opcoes": [
            {
              "texto": "Levar a mão à boca do estômago: “Estou meio indisposta. Enjoo. Acho que é do nervosismo.”",
              "certa": true,
              "resultado": [
                "A suspeita sumiu do rosto de Madalena.",
                "— De gravidez é que não é. — Ela riu alto. — Está bem, pode ir para o seu quarto. Mas, se esse tal enjoo ficar se repetindo, decidirei tudo por você.",
                "As melhores desculpas eram aquelas que tinham um fundo de verdade. Meu estômago estava mesmo embrulhado."
              ]
            },
            {
              "texto": "Levar a mão ao ventre: “Estou com cólica.”",
              "resultado": [
                "Madalena ergueu uma sobrancelha. — Cólica? A sua só vem daqui a duas semanas.",
                "*Merda.* Ela sabia o meu calendário melhor do que eu. — Não é cólica… — emendei, depressa. — É outra coisa. Aqui, mais em cima."
              ],
              "desvio": true
            },
            {
              "texto": "Concordar e descer para o salão, para não levantar suspeitas.",
              "resultado": [
                "Passei a noite inteira no salão, sob os olhos de Madalena, sorrindo para homens que eu não queria e sem um minuto para pensar.",
                "Quando o único cliente que poderia me tirar dali chegou, minha mãe foi direto até ele. Eu nunca tive a chance de falar com ele a sós."
              ]
            }
          ]
        },
        {
          "titulo": "A janela",
          "desbloqueia": [
            "armando"
          ],
          "texto": [
            "Do peitoril do meu quarto, vi uma charrete inusitada dobrar a rua: o tamanho de uma carruagem ilustre, mas puxada por burros de carga, com caixas e mais caixas empilhadas no topo.",
            "Armando, o mascate, tinha chegado semanas antes do previsto. Em poucos dias estaria de saída novamente, rumo a outras vilas, quem sabe à Capital.",
            "Espera. Ele podia ser a chave para minha fuga!",
            "Balancei o cabelo, ajeitei a postura e coloquei meu melhor sorriso no rosto. Ele se aproximou da janela trazendo seu perfume amadeirado.",
            "— Madalena está ocupada? — perguntou. E, ao ver meu sorriso, ergueu a sobrancelha. — O que você quer dessa vez? Chapéu, brinco, vestido?"
          ],
          "pergunta": "Como Carmen puxa conversa?",
          "opcoes": [
            {
              "texto": "— Hoje é diferente. Só quero que me conte como foi a viagem até aqui; se as estradas estão seguras; se está vendendo muito…",
              "certa": true,
              "resultado": [
                "A suspeita no rosto dele se desfez em desalento.",
                "— Sinceramente, não vai nada bem. A safra fraca empobreceu as vilas ao sul. Desisti desses pães-duros e estou subindo rumo ao norte mais cedo.",
                "— É, eu percebi. Você costuma aparecer no meio do mês nono, não no final do sétimo.",
                "Ele sorriu e corou. — Você reparou nisso?",
                "Claro que eu tinha reparado. E Armando falou, falou, falou: das estradas, do jovem rei, da Capital. Até que a conversa chegou exatamente onde eu queria."
              ]
            },
            {
              "texto": "— Quero que me leve com você quando for embora.",
              "resultado": [
                "Armando soltou uma gargalhada. — E eu quero ser o rei dos Burgos. — Ele balançou a cabeça. — Vou fingir que não ouvi isso.",
                "Ele já se virava para a porta do bordel. Tola: ninguém faz um favor desses a quem começa pelo fim. Segurei a manga dele, com o meu sorriso mais inocente. — Era brincadeira. Fica um pouco."
              ],
              "desvio": true
            },
            {
              "texto": "— Um vestido, claro. Aquele de renda que você trouxe da última vez.",
              "resultado": [
                "— Eu sabia. — Ele sorriu, satisfeito por ter acertado. — Vou pensar no seu caso.",
                "E entrou no bordel atrás de Madalena. Ganhei um vestido dias depois, mas nunca mais tive a atenção dele. Para Armando, eu continuava sendo só a menina que pedia presentes."
              ]
            }
          ]
        },
        {
          "titulo": "A proposta",
          "texto": [
            "— Que inveja eu tenho por não poder conhecer a Capital — suspirei, encarando meus próprios pés. — Em vez disso, viverei e morrerei como uma prostituta aqui em Serra Verde.",
            "— Isso é injusto, de verdade — disse Armando, gravemente. — Tão injusto que eu me disporia a te levar de graça à Capital, se eu não estivesse vendendo o almoço para pagar a janta.",
            "Era a brecha que eu esperava."
          ],
          "pergunta": "Como Carmen convence Armando?",
          "opcoes": [
            {
              "texto": "— Não seja por isso. Uso minha beleza como isca: serei um manequim para você expor, atraindo as pessoas enquanto você faz sua mágica com a arte da venda.",
              "certa": true,
              "resultado": [
                "Agora, sim, ele sorriu.",
                "— Essa é uma ótima ideia. Pode muito bem funcionar.",
                "— E então? Quando podemos partir?"
              ]
            },
            {
              "texto": "— Eu pago a viagem. Tenho umas economias guardadas.",
              "resultado": [
                "Armando cruzou os braços. — Economias? Todo tostão que entra nesta casa passa pela mão da sua mãe. Se você tem dinheiro escondido, ele é dela.",
                "Ele tinha razão, e eu não tinha economia nenhuma. Mas, enquanto ele reclamava das vendas magras, percebi que ele não precisava de dinheiro. Precisava de clientes."
              ],
              "desvio": true
            },
            {
              "texto": "— Então me empresta o dinheiro. Eu te pago quando arrumar trabalho na Capital.",
              "resultado": [
                "— Menina, eu acabei de dizer que não tenho nem para mim.",
                "Ele suspirou, cansado, e entrou no bordel. Eu tinha pedido dinheiro a um homem que tinha acabado de dizer que estava sem nenhum."
              ]
            }
          ]
        },
        {
          "titulo": "O segredo",
          "texto": [
            "— Calma, um passo de cada vez — disse Armando. — Primeiro eu tenho que falar com sua mãe. Madalena é uma mulher prática. Se eu explicar que você estaria trabalhando de maneira honesta, não tem por que negar."
          ],
          "pergunta": "O que Carmen responde?",
          "opcoes": [
            {
              "texto": "— Ela nunca aceitará que eu viva da minha própria maneira. Se ela me ama de fato, uma hora entenderá que precisei escolher meu caminho. E perdoará a nós dois.",
              "certa": true,
              "resultado": [
                "Armando me encarou em silêncio por um bom tempo.",
                "— Eu queria argumentar que não, mas uma filha conhece melhor a mãe do que eu.",
                "— Você é um homem bom. Não tem opção além de me ajudar.",
                "— Não sou um homem bom, mas também não sou um homem péssimo. Então, sim, eu te ajudarei a fugir. Sairemos na véspera do seu aniversário, pela manhã."
              ]
            },
            {
              "texto": "— Tudo bem, fale com ela. Mas fale com jeito.",
              "resultado": [
                "Ele falou com jeito. Madalena ouviu tudo com um sorriso educado, agradeceu a gentileza e, assim que ele saiu, mandou Gasparo vigiar a loja-carruagem até ela deixar a cidade.",
                "— Achou mesmo que eu não ia descobrir, pequena canção?"
              ]
            },
            {
              "texto": "— Se você contar a ela, eu digo que você tentou me levar para a cama.",
              "resultado": [
                "O rosto de Armando endureceu como pedra. — Então não temos mais nada para conversar.",
                "Ele deu as costas. E eu entendi, tarde, o que tinha feito: ameaçar o único homem disposto a me ajudar.",
                "— Espera! Desculpa. Eu nunca diria isso. Eu só… tenho medo dela. — Ele parou, com a mão na porta. Respirei fundo e, dessa vez, confiei nele de verdade."
              ],
              "desvio": true
            }
          ]
        },
        {
          "titulo": "O pretendente",
          "desbloqueia": [
            "jaime",
            "alexandro"
          ],
          "texto": [
            "Na véspera da fuga, a carruagem dos Barbosa parou na frente do bordel. Jaime, o Ilustre local, subiu os degraus com os guardas. Atrás dele vinha o filho, Alexandro, sem saber se admirava o teto ou as paredes.",
            "Madalena tinha dedo nisso.",
            "— Tome as rédeas de tudo — disse ela, à porta do meu quarto. — Você sabe o que fazer.",
            "Lá dentro, Alexandro estava sentado na beira da cama, felizmente vestido. Não tinha coragem de me encarar nos olhos.",
            "*Tire a roupa peça por peça. Seja sedutora. Peça e distribua elogios.* Essas seriam as instruções da minha mãe."
          ],
          "pergunta": "O que Carmen faz?",
          "opcoes": [
            {
              "texto": "Sentar ao lado dele, segurar sua mão e dizer: “Você está bem nervoso para sua primeira vez, não está? Também estou.”",
              "certa": true,
              "resultado": [
                "Ele finalmente me olhou, com aqueles olhos amedrontados.",
                "— É que eu gostaria de perder a virgindade com alguém que amo de verdade — confessou. — E, apesar de você ser linda demais, nem te conheço direito.",
                "Meu sorriso se alargou. — Não me ofendeu nem um pouco. Minha primeira vez tem que ser mágica, com o amor da minha vida.",
                "Passamos horas conversando sobre passado, presente e futuro. Ele me contou tudo sobre a rotina de um jovem Ilustre, sobre a mãe, sobre a irmã caçula. Quando já eram altas horas, ele adormeceu roncando baixinho.",
                "No final de tudo, dormimos juntos. Só não da forma que Madalena e Jaime queriam."
              ]
            },
            {
              "texto": "Seguir as instruções da mãe. Uma noite só, e amanhã estaria livre.",
              "resultado": [
                "Fiz tudo o que Madalena tinha me ensinado. Funcionou, como ela sempre disse que funcionaria.",
                "Quando abri os olhos, o sol já ia alto. Da janela, vi a esquina vazia: a loja de Armando tinha partido sem mim.",
                "Eu tinha jurado uma única coisa a mim mesma. E não cumpri."
              ]
            },
            {
              "texto": "Pedir licença, ir até a janela e fugir agora mesmo, no escuro.",
              "resultado": [
                "Abri a janela. Lá embaixo, os guardas de Jaime fumavam encostados na carruagem dos Barbosa, de olho na rua. A loja de Armando só chegaria pela manhã.",
                "Fechei a janela devagar. Alexandro continuava na beira da cama, me olhando como se eu fosse pular de verdade. Era ele quem eu precisava resolver primeiro."
              ],
              "desvio": true
            }
          ]
        },
        {
          "titulo": "O quarto de Madalena",
          "texto": [
            "Quando abri os olhos, ainda estava escuro. Alexandro dormia pesado. Da janela, vi a carruagem dos Barbosa na frente do bordel e, na esquina, a loja itinerante.",
            "Armando tinha cumprido a palavra!",
            "No fim do corredor, a porta do quarto de Madalena estava entreaberta. Ela tinha passado a noite no quarto de Jaime, como sempre que ele vinha. A caixinha de joias, o espelho, o cheiro dela: tudo ali, sem ninguém para vigiar.",
            "No chão do meu quarto, perto da bota de Alexandro, brilhava um botão de punho de prata.",
            "Eu tinha tempo para uma coisa só."
          ],
          "pergunta": "O que Carmen leva consigo?",
          "opcoes": [
            {
              "texto": "Entrar no quarto da mãe e pegar as moedas da caixinha de joias.",
              "certa": true,
              "ganha": [
                "moedas"
              ],
              "resultado": [
                "A caixinha ficava na segunda gaveta, embaixo das meias, como sempre. Contei as moedas no escuro e enfiei a bolsinha no decote.",
                "Não era roubo, disse a mim mesma. Eram dezessete anos de salão varrido. A consciência não concordou, mas a consciência não ia pagar meu pão na estrada."
              ]
            },
            {
              "texto": "Entrar no quarto da mãe e pegar o lenço bordado que ela usava quando cantava para Carmen dormir.",
              "certa": true,
              "ganha": [
                "lenco"
              ],
              "resultado": [
                "O lenço estava pendurado no espelho da penteadeira, onde sempre esteve. Cheirava a ela: talco, vinho e flor de laranjeira.",
                "Não valia uma andorinha. Dobrei e guardei junto ao peito mesmo assim. Se eu nunca mais ia ver Madalena, que pelo menos levasse a voz dela comigo."
              ]
            },
            {
              "texto": "Passar longe do quarto da mãe. Pegar só o botão de punho que Alexandro deixou cair.",
              "certa": true,
              "ganha": [
                "botao"
              ],
              "resultado": [
                "Passei longe da porta de Madalena. Se eu entrasse, talvez não tivesse coragem de sair.",
                "Recolhi o botão do chão e o girei entre os dedos: prata de verdade, com o brasão dos Barbosa. Alexandro tinha outros dez iguais. Eu tinha um pressentimento."
              ]
            }
          ]
        },
        {
          "titulo": "O balde",
          "texto": [
            "Mas os guardas de Jaime continuavam na entrada. Então tive uma ideia: quem disse que eles não poderiam me ver?",
            "Despejei minhas roupas favoritas num balde de madeira, segurei a alça e caminhei confiante rumo à saída. O guarda mais alto e magro me barrou com o olhar.",
            "— Meio cedo para lavar roupas, não?"
          ],
          "pergunta": "Como Carmen responde ao guarda?",
          "opcoes": [
            {
              "texto": "— Cedo para quem? Quando eu voltar, ainda tenho que arrumar toda a bagunça lá dentro. E, se ficarem me atrasando, minha mãe vai comer o meu fígado e, logo depois, o de vocês.",
              "certa": true,
              "resultado": [
                "— Pare de a atazanar e deixe-a ir logo — disse o outro guarda.",
                "Desci os degraus. Uma brisa matinal balançou a saia do meu vestido, e um arrepio libertador percorreu meus braços.",
                "Na esquina, Armando cochilava na boleia. Antes que a loja se afastasse, ergui o braço e lhe estendi o dedo do meio. Assim, os guardas achariam que eu o tinha mandado pastar, em vez de estar mancomunada com o mascate.",
                "Minutos depois, do outro lado da ponte do rio, subi na boleia ao lado dele. Serra Verde ficou para trás."
              ]
            },
            {
              "texto": "— É que… derramei vinho no meu vestido. Preciso lavar antes que manche.",
              "resultado": [
                "O guarda franziu a testa e espiou dentro do balde. — Isso aqui não parece um vestido sujo. Parece uma mudança inteira.",
                "Meu coração parou. Mas guarda nenhum gosta de parecer que manda menos do que manda. Endireitei os ombros e mudei o tom."
              ],
              "desvio": true
            },
            {
              "texto": "— Se está com tanta pressa de ver roupa lavada, por que não vem me ajudar a esfregar?",
              "resultado": [
                "O guarda sorriu de um jeito que eu não gostei e veio atrás de mim.",
                "Ele me acompanhou até o rio. E, do rio, viu muito bem a loja de Armando parada na outra margem, esperando por mim."
              ]
            }
          ]
        }
      ],
      "fecho": [
        "No horizonte, o sol nascia e tingia o céu de dourado. Desde pequena, eu me imaginava uma princesa resgatada por um príncipe num cavalo branco.",
        "Nem nos meus dias mais criativos imaginei que sairia de Serra Verde numa loja itinerante, puxada por burros e conduzida por um cinquentão. Mas eu não podia reclamar."
      ]
    },
    {
      "titulo": "A estrada",
      "cenario": "estrada",
      "abertura": [
        "Agora, Carmen era a assistente de um mascate. Restava provar que valia a viagem."
      ],
      "cenas": [
        {
          "titulo": "A feira",
          "texto": [
            "No primeiro vilarejo, vesti um conjunto roxo glamuroso e me exibi do alto da loja, imóvel e sorridente como um manequim. Uma pequena multidão se reuniu.",
            "O problema: os maridos babavam ao me encarar. Entre tapas, beliscões e reprimendas, as esposas desistiram da compra e saíram puxando os homens pelo braço.",
            "— Carmen, você está afastando a clientela! Vá bater as pernas enquanto eu vendo como de costume.",
            "Desci emburrada e caminhei pela feira. Três moças de roupas recatadas me mediram de cima a baixo.",
            "“Olha só como ela está vestida”, murmurou uma baixinha rechonchuda. “Está querendo chamar atenção”, sussurrou a despeitada. “Deve ser uma mulher da vida”, concluiu a nariguda.",
            "*Puta, não!*"
          ],
          "pergunta": "O que Carmen faz?",
          "opcoes": [
            {
              "texto": "Encarar a nariguda até ela corar e, depois, sorrir: “Essa roupa é mesmo demais para uma feira. É que sou assistente de um mascate. Trouxemos peças lindíssimas da Capital. Vamos lá conferir juntas.”",
              "certa": true,
              "resultado": [
                "A nariguda levou a mão aos lábios e corou. Isso bastou para mim.",
                "— N-não — disse a rechonchuda. — Obrigada, mas…",
                "— Que nada, não precisa ter vergonha.",
                "Puxei a nariguda pelo braço. Sem olhar para trás, eu sabia que as outras duas nos seguiam."
              ]
            },
            {
              "texto": "— Mulher da vida é a senhora sua mãe.",
              "resultado": [
                "A feira inteira parou para ver o escândalo. Em meia hora, o chefe da guarda do vilarejo pediu que Armando recolhesse a mercadoria e seguisse viagem.",
                "Na vila seguinte, ele me deu algumas andorinhas e uma carona de volta para o sul. A parceria tinha durado um dia."
              ]
            },
            {
              "texto": "Ignorar as três e voltar para a loja de Armando.",
              "resultado": [
                "Voltei para os degraus da loja. Armando, entre um freguês e outro, me viu ali de braços cruzados. — Veio ajudar ou veio emburrar?",
                "Ele tinha razão. Eu tinha prometido ser isca, e isca não fica sentada. Voltei para a feira. As três moças ainda estavam lá, cochichando."
              ],
              "desvio": true
            },
            {
              "texto": "Comprar três sonhos de creme na barraca ao lado e oferecer um a cada uma: — Para adoçar a língua.",
              "certa": true,
              "requer": "moedas",
              "resultado": [
                "A rechonchuda aceitou primeiro; doce nenhum fica sem dono perto dela. A despeitada demorou mais. A nariguda corou até as orelhas.",
                "— Sou assistente de um mascate — expliquei, enquanto elas lambiam o creme dos dedos. — Trouxemos peças lindíssimas da Capital. Vamos conferir juntas?",
                "As moedas de Madalena adoçaram a tarde. Puxei a nariguda pelo braço e, sem olhar para trás, eu sabia que as outras duas nos seguiam."
              ]
            }
          ]
        },
        {
          "titulo": "A cabine",
          "texto": [
            "A despeitada foi a primeira a subir na cabine. Ela passou as mãos pelos tecidos com os olhos brilhando, mas recuou.",
            "— Tem várias peças bonitas, mas é tudo meio… demais para mim, não acha?",
            "Eram mesmo peças chamativas para quem escondia as poucas curvas num vestido bege mal ajustado. Mas a curiosidade continuava acesa nos olhos dela."
          ],
          "pergunta": "Como Carmen faz a venda?",
          "opcoes": [
            {
              "texto": "Erguer o queixo dela: “Discordo. Nos seus olhos há uma mulher poderosa que sabe o que quer. O que não combina com você é o que está vestindo agora.”",
              "certa": true,
              "resultado": [
                "Ela ficou vermelha. — Você só está dizendo isso porque quer vender…",
                "— Esse é um dos motivos, sim. Mas, se fosse só por isso, eu empurraria um dos vestidos sem graça para você.",
                "Escolhi um amarelo-claro, com bordado florido no busto. Quando ela finalmente tirou as mãos da frente do decote, perguntei:",
                "— Uau… Quem é essa peituda que entrou na minha loja?",
                "Ela gargalhou tanto que deixou escapar um ronco. A transformação dela atraiu as amigas, e as amigas atraíram a feira inteira. De vendedor principal, Armando foi rebaixado a segurança de grife na porta da cabine, sem reclamar."
              ]
            },
            {
              "texto": "— Você tem razão. Temos uns mais discretos ali naquela caixa, mais o seu estilo.",
              "resultado": [
                "Ela olhou os vestidos fora de estação com um desânimo educado e já ia agradecer quando eu reparei no jeito como os dedos dela tinham alisado o tecido do decotado.",
                "— Esquece a caixa — eu disse, puxando-a de volta para o espelho."
              ],
              "desvio": true
            },
            {
              "texto": "— Leve o mais decotado. Vai fazer os homens da vila babarem por você.",
              "resultado": [
                "Ela empalideceu, como se eu tivesse lido em voz alta os comentários que ela mesma tinha feito sobre mim minutos antes.",
                "— Eu não sou desse tipo — disse, e desceu da cabine às pressas. As amigas foram atrás. Na feira inteira, ninguém mais chegou perto da loja."
              ]
            }
          ]
        }
      ],
      "fecho": [
        "Juntos, viajamos de vilarejos a cidades maiores, coletando mais moedas do que cobradores de impostos. Sem mais o que vender, partimos para a Capital.",
        "Na última noite de estrada, junto à fogueira, Armando me pediu que cantasse. Cantei a canção de ninar que minha mãe cantava para mim. Ele ficou em silêncio, encarando as chamas, e pediu que eu cantasse de novo.",
        "Ali, recortado contra o fogo, o perfil dele tinha algo de familiar. Eu só não sabia dizer o quê."
      ]
    },
    {
      "titulo": "Pacentro",
      "cenario": "pacentro",
      "abertura": [
        "A Capital era maior, mais rápida e mais cara do que Carmen sonhava. Ao longe, um borrão branco: o Palácio Real."
      ],
      "cenas": [
        {
          "titulo": "A joalheria",
          "desbloqueia": [
            "isolina"
          ],
          "texto": [
            "Armando prometeu me dar minha metade dos lucros, mas só depois que eu provasse que sabia lidar com quantias menores. Antes, me ajudaria a arranjar um emprego. Escolhi a joalheria da Dona Isolina, a que pagava melhor.",
            "— Ela tem beleza, bom gosto e muita lábia — disse Armando. — Por isso será uma ótima funcionária.",
            "Isolina recuou a mão.",
            "— Desculpa, mas não estou contratando. Tenho minha lojinha há décadas, e nunca precisei de ninguém."
          ],
          "pergunta": "Como Carmen consegue a vaga?",
          "opcoes": [
            {
              "texto": "— Pela beleza da loja, a senhora fez um trabalho excepcional esses anos todos. Não acha que, depois de tanto esforço, merece descansar um pouco?",
              "certa": true,
              "resultado": [
                "— Bajulações não funcionam comigo, menina — disse ela, franzindo o rosto. — Mas reconheço que podem funcionar com certas clientes. Desde que você saiba o suficiente sobre joias para não falar nenhuma besteira.",
                "— Sei, sim. E posso provar.",
                "Acertei quase tudo o que ela me perguntou sobre pedras e banhos. Uma vida inteira de bordel ensina muita coisa.",
                "— Você sabe menos do que acredita saber, mas mais do que eu esperava. Contratada. Por um dia teste."
              ]
            },
            {
              "texto": "— Por favor, Dona Isolina. Eu acabei de chegar e não tenho para onde ir.",
              "resultado": [
                "— Minha filha, aqui é uma joalheria, não um convento.",
                "Ela nos acompanhou educadamente até a porta. Nas outras lojas parceiras de Armando, a resposta foi parecida: ninguém em Pacentro contratava uma caipira por pena."
              ]
            },
            {
              "texto": "— Eu esgotei o estoque inteiro do Armando em poucas semanas. Posso fazer o mesmo aqui.",
              "resultado": [
                "— Vender vestido para camponesa é uma coisa. Vender para madame de Pacentro é outra — disse Isolina, já voltando para o banquinho.",
                "Armando me lançou um olhar que dizia tudo: eu tinha soado como a menina convencida que ela achava que eu era. Antes que ela se sentasse, olhei para a loja de verdade, prateleira por prateleira."
              ],
              "desvio": true
            }
          ]
        },
        {
          "titulo": "A primeira cliente",
          "texto": [
            "Na manhã do dia teste, abri a loja sozinha. Antes de Isolina descer, o sininho fez blim-blim: uma senhora rechonchuda, de rosto redondo, cheirando a glicerina de sabonete florido.",
            "— Queria um brinco dourado, daqueles de bolinha. Vocês têm?",
            "Encontrei o par na estante. Mas, sinceramente, um brinco de bolinha deixaria aquele rosto ainda mais redondo. E o dourado não combinava com o tom frio da pele dela."
          ],
          "pergunta": "O que Carmen faz?",
          "opcoes": [
            {
              "texto": "Entregar o brinco de bolinha dourado com um sorriso e elogiar a escolha.",
              "certa": true,
              "resultado": [
                "Ela saiu satisfeita, com o embrulho na mão, prometendo voltar.",
                "Quando Isolina desceu a escada, recém-desperta, encontrou a primeira venda do dia anotada no caderno.",
                "— Não somos pagas para estar certas — disse ela, quando contei o que tinha pensado em fazer. — Somos pagas para vender o que a cliente quer.",
                "Era difícil assistir calada a certos crimes da moda. Mas, ao fim do dia, a chave sobressalente era minha."
              ]
            },
            {
              "texto": "Explicar, com jeitinho, que um brinco de franja prateado valorizaria muito mais o rosto dela.",
              "resultado": [
                "O rosto rechonchudo se contorceu numa carranca. — Mudei de ideia. Quem sabe eu volte outro dia.",
                "Ela já tinha a mão na maçaneta. Engoli o meu palpite inteiro, sem mastigar. — Perdão, foi só uma ideia boba. A senhora tinha razão desde o começo."
              ],
              "desvio": true
            },
            {
              "texto": "Dizer que o de bolinha acabou e oferecer um par mais caro.",
              "resultado": [
                "Ela olhou por cima do meu ombro e apontou para a estante.",
                "— E aquele ali, o que é?",
                "Saiu da loja batendo a porta. Isolina, descendo a escada, ouviu a última frase da cliente: “mentirosa”. A chave sobressalente voltou para a gaveta dela."
              ]
            }
          ]
        },
        {
          "titulo": "A Ilustre de rosa",
          "desbloqueia": [
            "rosa"
          ],
          "texto": [
            "No fim da tarde, uma menina toda de rosa entrou na loja como se fosse a dona. Tinha a minha idade. Destratou-me na primeira frase e passou a criticar cada peça da estante. Isolina, puxando o saco dela, a chamou de “donzela tão Ilustre”.",
            "Uma Ilustre! Comprando imitações. Pelo sotaque, devia ser do norte.",
            "Até que, para contar vantagem, ela soltou:",
            "— Recebemos cartas individuais, com o selo do rei. Vamos participar de uma avaliação para nos tornarmos Empregadas Reais. O que eu quero mesmo é o reconhecimento de ser uma das donzelas mais prendadas do reino. Assim, conseguirei um marido Ilustríssimo…",
            "*E se eu me infiltrar no palácio e participar dessa avaliação?*",
            "Para saber se era possível, eu precisava de mais informações."
          ],
          "pergunta": "Como Carmen arranca informações dela?",
          "opcoes": [
            {
              "texto": "— Tenho certeza de que Vossa Ilustreza será aprovada. Mas as outras candidatas também são Ilustres, não são? A competição deve ser acirrada… A senhorita sabe quantas são?",
              "certa": true,
              "resultado": [
                "Disparei as perguntas no ritmo dos pacentrenses. Ela ficou meio zonza.",
                "— Não faço ideia. O convite só falou em me convidar pela minha maioridade, e… o resto não te interessa.",
                "Bastava. Se uma Ilustre de terceira classe como ela tinha sido convidada, todas as Ilustres que acabavam de fazer a maioridade deviam ter sido também. Muitas candidatas, uma sem saber das outras. Dava para entrar no meio."
              ]
            },
            {
              "texto": "— Que interessante. E como uma moça faz para participar dessa avaliação?",
              "resultado": [
                "Ela gargalhou. — Plebeias? Nem em sonho. Só por convite, com o selo do rei.",
                "E me olhou de um jeito que eu não gostei. Mordi a língua: perguntar por mim era burrice. Eu precisava fazê-la falar dela mesma. Sorri, inclinei a cabeça e recomecei."
              ],
              "desvio": true
            },
            {
              "texto": "— Com essas joias, nem se fosse para ser empregada da cozinha.",
              "resultado": [
                "A menina de rosa largou as peças no balcão e saiu sem comprar nada.",
                "Isolina não disse uma palavra. Só estendeu a mão aberta, esperando a chave sobressalente."
              ]
            }
          ]
        },
        {
          "titulo": "A data",
          "texto": [
            "A menina pagou e já se dirigia à porta. Eu sabia quase tudo. Faltava o principal: quando seria a avaliação."
          ],
          "pergunta": "Como Carmen descobre a data?",
          "opcoes": [
            {
              "texto": "Correr para abrir a porta com uma mesura: “Estarei rezando pelo seu sucesso. A avaliação será quando mesmo? Para eu saber quando acender as velas.”",
              "certa": true,
              "resultado": [
                "Colocar a Resplandecente no meio foi golpe baixo, mas eu precisava de uma resposta sincera.",
                "— No domingo, ao meio-dia.",
                "Dei tchauzinhos para ela. Seis dias: tempo para os ajustes finais do plano e para a Ilustre esquecer os detalhes do meu rosto."
              ]
            },
            {
              "texto": "— Vossa Ilustreza me deixaria assistir à avaliação? Seria a maior honra da minha vida.",
              "resultado": [
                "— Assistir? Que audácia.",
                "Ela me mediu dos pés à cabeça mais uma vez, demorada, como quem decora um rosto, e saiu sem responder."
              ]
            },
            {
              "texto": "Deixar a loja assim que ela sair e seguir a carruagem dela pela cidade.",
              "resultado": [
                "Corri três quarteirões atrás da carruagem até perdê-la de vista numa avenida cheia. Voltei sem fôlego e sem resposta.",
                "Por sorte, a menina de rosa tinha esquecido as luvas no balcão. Na manhã seguinte, voltou para buscá-las, e eu tive uma segunda chance."
              ],
              "desvio": true
            }
          ]
        }
      ],
      "fecho": [
        "Na véspera do grande dia, Armando partiu. Deixou comigo minha parte dos lucros, e a nossa despedida foi mais difícil do que eu imaginava.",
        "O que aconteceu naquele quarto de pousada fica para quem ler o livro."
      ]
    },
    {
      "titulo": "O Palácio Real",
      "cenario": "palacio",
      "abertura": [
        "Domingo. Meio-dia. Uma plebeia de Serra Verde contra a nobreza inteira do reino."
      ],
      "cenas": [
        {
          "titulo": "O disfarce",
          "texto": [
            "Acordei cedo e escondi o saquinho de moedas no decote. Comprar o vestido e as joias era a parte fácil.",
            "A difícil era outra: a menina de rosa tinha visto meu rosto, e estaria lá. Se me reconhecesse, era o fim."
          ],
          "pergunta": "Como Carmen muda a aparência?",
          "opcoes": [
            {
              "texto": "Ir ao cabeleireiro e cortar os cabelos na altura dos ombros, como os da mãe.",
              "certa": true,
              "resultado": [
                "O cabeleireiro perguntou se eu tinha certeza. Engoli em seco e disse “sim”.",
                "Para minha surpresa, sorri diante do resultado. A nuca exposta arrepiou com o ar. Cabelos curtos tinham muita personalidade. E, uma hora, cresceriam de novo.",
                "Depois, perfume de jasmim e almíscar, vestido azul-ciano, luvas bordadas e pérolas cultivadas idênticas às verdadeiras. Dona Isolina, sem saber de nada, me fez preço de custo."
              ]
            },
            {
              "texto": "Usar um chapéu de aba enorme com véu, cobrindo o rosto.",
              "resultado": [
                "O chapeleiro me ofereceu o maior que tinha, com véu de renda. No espelho, eu parecia uma viúva escondendo um crime.",
                "— As candidatas tiram o chapéu na entrada — comentou ele, sem malícia. — Minha sobrinha foi no ano passado. Devolvi o chapéu à prateleira. Eu precisava de uma mudança que não saísse com o vento."
              ],
              "desvio": true
            },
            {
              "texto": "Escurecer os cabelos com uma tinta barata comprada no mercado.",
              "resultado": [
                "O sol do meio-dia de Pacentro não perdoou. Na fila do palácio, um fio escuro de tinta escorreu pela minha testa até a gola do vestido azul.",
                "As empregadas trocaram um olhar. Ilustre nenhuma pintava o cabelo com carvão."
              ]
            }
          ]
        },
        {
          "titulo": "A carruagem",
          "texto": [
            "Pronta, deslumbrante, cheguei à avenida principal. Faltava uma Ilustre chegar ao palácio como uma Ilustre.",
            "À beira da estrada estava parada uma carruagem vermelha e lustrosa, com adornos dourados e cavalos de raça. Na boleia, um cavalheiro de terno preto tirou a cartola.",
            "— Senhorita."
          ],
          "pergunta": "Como Carmen consegue a carruagem?",
          "opcoes": [
            {
              "texto": "— Senhorita, não: Vossa Ilustreza! O condutor que papai contratou está passando mal. Preciso que me leve agora para o Palácio Real. — E jogar uma garça de ouro no colo dele.",
              "certa": true,
              "resultado": [
                "O rosto dele corou profundamente. Fui até a porta da carruagem como quem nunca tinha ouvido um não na vida.",
                "— Entendido, Vossa Ilustreza. — Ele enfiou a garça no bolso. — Por sinal, como devo anunciá-la na entrada do Palácio Real?"
              ]
            },
            {
              "texto": "— Bom dia, senhor. Quanto custaria uma corrida até o Palácio Real?",
              "resultado": [
                "Ele me mediu com um sorriso educado. — Esta carruagem serve a uma casa Ilustre, senhorita. Não é de aluguel.",
                "*Senhorita.* Ilustre nenhuma pergunta preço. Ergui o queixo, troquei a voz e tentei de novo, como se a primeira frase nunca tivesse existido."
              ],
              "desvio": true
            },
            {
              "texto": "Agradecer o cumprimento e ir a pé, para economizar as moedas.",
              "resultado": [
                "A rotatória diante do palácio parecia interminável. Cheguei suada, com a barra do vestido cinza de poeira e os pés em carne viva dentro do scarpin.",
                "Os Guardas Reais nem me deixaram passar do portão. Ilustre nenhuma chegava a pé."
              ]
            },
            {
              "texto": "Mostrar a bolsinha de Madalena: — Pago o triplo do que a sua casa paga, se me levar agora ao Palácio Real.",
              "certa": true,
              "requer": "moedas",
              "perde": [
                "moedas"
              ],
              "resultado": [
                "O cocheiro olhou a bolsinha, olhou a rua vazia, olhou de novo a bolsinha. A casa dele só precisaria da carruagem à tarde.",
                "— Entendido, Vossa Ilustreza. — Ele guardou as moedas no bolso do terno. Lá se ia a última coisa de Madalena que eu carregava.",
                "— Por sinal, como devo anunciá-la na entrada do Palácio Real?"
              ]
            }
          ]
        },
        {
          "titulo": "O nome",
          "texto": [
            "— Como devo anunciá-la, Vossa Ilustreza?",
            "Saboreei a pergunta. Eu precisava do nome de uma Ilustre de verdade. Uma que acabasse de fazer a maioridade, que ninguém em Pacentro conhecesse de vista, e de quem eu soubesse o bastante para responder a qualquer pergunta."
          ],
          "pergunta": "Que nome Carmen dá?",
          "opcoes": [
            {
              "texto": "— Diga-lhes meu nome completo: Vivian Barbosa.",
              "certa": true,
              "resultado": [
                "A irmã caçula de Alexandro, que quase nunca saía do castelo de Serra Verde. Ele tinha me contado tudo sobre a família naquela noite.",
                "No ritmo acelerado dos alazões, avançamos rumo ao palácio."
              ]
            },
            {
              "texto": "— Carmen. Só Carmen.",
              "resultado": [
                "O cocheiro piscou, confuso. — Só Carmen, Vossa Ilustreza? De qual casa?",
                "Ilustre nenhuma tinha um nome só. Ri como se tivesse feito uma piada. — Carmen é como me chamam em casa. Para o palácio, use o nome completo."
              ],
              "desvio": true
            },
            {
              "texto": "Inventar um nome de peso: — Carmelita de Floresse.",
              "resultado": [
                "Funcionou com o cocheiro. Na mesa de entrada, a empregada procurou o nome na lista e ergueu os olhos.",
                "— De Floresse? De qual ramo da família? Quem é o seu pai?",
                "Eu não sabia responder nenhuma das perguntas que vieram depois."
              ]
            }
          ]
        },
        {
          "titulo": "O convite",
          "desbloqueia": [
            "empregadas"
          ],
          "texto": [
            "O palácio era um edifício branco de quatro andares, com centenas de janelas. Uns vinte Guardas Reais ladeavam um tapete vermelho até o salão, onde Empregadas Reais conferiam as candidatas numa mesa.",
            "— Convite — pediu a empregada da esquerda à Ilustre de amarelo, que tirou da bolsinha uma carta com o selo real.",
            "*Merda.*",
            "— Convite — pediu a empregada da direita, para mim.",
            "— E-eu deixei minha bolsa em casa… Não sabia que era para trazer.",
            "— Como assim você não sabia? — Ela abriu um sorriso de troça."
          ],
          "pergunta": "Como Carmen reage ao deboche?",
          "opcoes": [
            {
              "texto": "— A exigência de apresentação não estava prevista na carta. E só quem foi convidada apareceria aqui no dia exato, na hora exata. De que outra forma eu saberia de um evento tão discreto?",
              "certa": true,
              "resultado": [
                "Dessa vez, foi ela quem ficou sem palavras. Contrariada, baixou os olhos para os papéis.",
                "— Nome e sobrenome.",
                "— Vivian Barbosa.",
                "Ela passou o dedo em cada nome iniciado por V. Então levantou o rosto.",
                "— Não está aqui. Desculpe-me, senhorita, mas sem isso não posso te deixar entrar."
              ]
            },
            {
              "texto": "Abrir o saquinho e deslizar uma moeda pela mesa: — Talvez isso ajude a resolver o mal-entendido.",
              "resultado": [
                "A empregada olhou a moeda como quem olha uma barata.",
                "— Guardas.",
                "Tentar subornar uma Empregada Real, dentro do Palácio Real. Nem a Ilustre mais burra do reino faria isso."
              ]
            },
            {
              "texto": "Pedir desculpas e prometer voltar com o convite em uma hora.",
              "resultado": [
                "— Claro, senhorita. A avaliação começa ao meio-dia em ponto.",
                "Dei dois passos pelo tapete vermelho antes de entender: não havia convite nenhum para buscar. Se eu saísse, não voltaria. Dei meia-volta e encarei a empregada outra vez."
              ],
              "desvio": true
            },
            {
              "texto": "Pôr sobre a mesa o botão de punho com o brasão dos Barbosa: — Meu irmão esqueceu isto comigo. Serve como apresentação?",
              "certa": true,
              "requer": "botao",
              "resultado": [
                "A empregada pegou o botão e o virou contra a luz. Prata de verdade, brasão de verdade. O sorriso de troça sumiu.",
                "— Perdão, Vossa Ilustreza. Nome e sobrenome, por favor.",
                "— Vivian Barbosa.",
                "Ela passou o dedo em cada nome iniciado por V. Então levantou o rosto, sem graça.",
                "— Não está aqui. Desculpe-me, senhorita, mas sem o nome na lista não posso te deixar entrar."
              ]
            }
          ]
        },
        {
          "titulo": "A lista",
          "texto": [
            "Para minha surpresa, ela estava sendo educada. Acreditava em mim; só me barrava por burocracia. Talvez temesse as consequências de me deixar passar.",
            "Atrás de mim, passos ecoavam no mármore: novas Ilustres chegavam, e a fila crescia."
          ],
          "pergunta": "O que Carmen faz?",
          "opcoes": [
            {
              "texto": "Erguer a voz: — Isso é um absurdo! Exijo falar com a governanta. Se além de errarem os nomes vocês atrasarem o evento, ela vai comer o fígado de vocês.",
              "certa": true,
              "resultado": [
                "Minha voz ecoou sozinha pelo salão. As empregadas se entreolharam, aflitas, e só então repararam na fila que não parava de crescer.",
                "— Calma, não precisamos piorar a situação — sussurrou a “minha” empregada. — Se você não disser a ninguém a questão do nome, não diremos a ninguém a questão do convite. Estamos combinadas?",
                "Tive vontade de concordar na hora. Contei dois segundos inteiros antes de assentir.",
                "Ela pegou o bico de pena e acrescentou meu nome no fim da lista, com um visto de presença."
              ]
            },
            {
              "texto": "— Será que não estou como Maria Vivian? Ou Ana Vivian? Às vezes erram meu nome.",
              "resultado": [
                "Ela conferiu de novo, com toda a calma do mundo, e a dúvida foi mudando de lugar no rosto dela. — Uma Ilustre que não sabe o próprio nome?",
                "Ela ergueu dois dedos para chamar um guarda. Eu tinha um segundo antes de os dedos se abrirem."
              ],
              "desvio": true
            },
            {
              "texto": "Agradecer a gentileza e dizer que voltará quando o erro for corrigido.",
              "resultado": [
                "— Claro, senhorita. Mandaremos avisar a sua casa.",
                "Saí pelo tapete vermelho sabendo que nenhum aviso chegaria. E que, se chegasse, iria parar nas mãos da verdadeira Vivian Barbosa."
              ]
            }
          ]
        },
        {
          "titulo": "A menina de rosa",
          "texto": [
            "No saguão, uma dúzia de Ilustres aguardava em vestidos monocromáticos, tão coloridas juntas quanto um arco-íris. Ao lado da de verde, acrescentei o meu azul-claro.",
            "Novas cores chegaram. Uma delas reconheci de longe: a menina da joalheria, no mesmo rosa de sempre.",
            "Ela olhou para mim. Desviei o olhar. Os saltos dela estalaram no mármore, cada vez mais perto.",
            "— Eu não te conheço de algum lugar?"
          ],
          "pergunta": "O que Carmen responde?",
          "opcoes": [
            {
              "texto": "Dar uma piscadela: — Se tivesse conhecido, você com certeza não se esqueceria de mim.",
              "certa": true,
              "resultado": [
                "Era uma resposta que nenhuma plebeia daria.",
                "A menina me analisou por alguns instantes. Então olhou em volta, como se de repente percebesse quão estranha estava parecendo para as outras.",
                "— Perdão, acho que te confundi.",
                "E foi se posicionar bem longe de mim."
              ]
            },
            {
              "texto": "— Não. Duvido muito.",
              "resultado": [
                "— Duvida? — Ela inclinou a cabeça e me examinou com calma. — Espera… essa voz…",
                "Antes que ela terminasse, abri o melhor sorriso que tinha aprendido no salão do bordel."
              ],
              "desvio": true
            },
            {
              "texto": "Fingir que não ouviu e se afastar para o outro lado do saguão.",
              "resultado": [
                "Ela me seguiu. Quem foge, deve.",
                "— Estou falando com você. — Os olhos dela se arregalaram. — A vendedora da joalheria! Empregadas! Essa daqui é uma plebeia!"
              ]
            },
            {
              "texto": "Levar o lenço de Madalena ao nariz, como uma Ilustre entediada com o perfume alheio: — Conhecer, talvez. Lembrar, duvido.",
              "certa": true,
              "requer": "lenco",
              "resultado": [
                "Metade do meu rosto sumiu atrás do bordado. Só sobraram os olhos, e para os olhos da vendedora a menina de rosa nunca tinha olhado direito.",
                "Ela me analisou por alguns instantes, franziu o nariz como se eu tivesse ofendido o perfume dela e foi se posicionar bem longe de mim.",
                "Guardei o lenço. Pela primeira vez, Madalena tinha me salvado sem saber."
              ]
            }
          ]
        }
      ],
      "fecho": [
        "A entrada no palácio estava garantida.",
        "Agora, só faltava passar na avaliação."
      ]
    }
  ],

  // Tela final
  "vitoria": [
    "Carmen chegou ao Palácio Real. Como Vivian Barbosa, filha de um Ilustre, no meio das donzelas mais prendadas do reino.",
    "Se ela vai passar na avaliação, se a farsa vai durar e quem ela vai encontrar lá dentro… isso o jogo não conta. O livro conta."
  ],

  // Link para a outra versão, na tela inicial
  "outraVersao": {
    "texto": "Já leu o livro inteiro? Jogue a versão completa (com spoilers).",
    "link": "completo.html"
  }
};
