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

  "abertura": [],

  "comoJogar": [
    "Algumas falas erradas têm conserto; outras não.",
    "Carmen pode guardar objetos na bolsa, e eles abrem caminhos extras.",
    "Algumas escolhas dão pontos de Persuasão, Honestidade ou Astúcia.",
    "Na dúvida, consulte as fichas dos personagens."
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
      "papel": "A protagonista",
      "inicial": true,
      "texto": [
        "Idade: 17 para 18 anos.",
        "Descrição: Loira, cabelos ondulados e cheios, olhos azuis.",
        "Histórico: Nasceu e cresceu no bordel de Serra Verde. Nunca saiu da cidade.",
        "Características: Mente bem. Sabe conquistar as pessoas. Finge submissão quando é preciso, impõe-se quando pode.",
        "Juramento: “Não serei puta”",
        "Sonho: Casamento por amor. Uma família de verdade. Um mundo maior do que Serra Verde.",
        "Talentos secretos: Gosta de cantar, mas só quando ninguém está olhando."
      ],
      "retrato": "img/retratos/carmen.png"
    },
    "madalena": {
      "nome": "Madalena",
      "papel": "A mãe",
      "inicial": true,
      "texto": [
        "Idade: 42 anos (diz 32 aos clientes).",
        "Descrição: Cabelos loiros na altura dos ombros. Perfume de especiarias, cremes de chocolate e baunilha.",
        "Histórico: A cortesã mais requisitada de Serra Verde. Gasparo, o cafetão, deixa quase tudo nas mãos dela.",
        "Características: Não suporta ser desafiada: quando a filha bate de frente, aperta o cerco; quando a filha cede, relaxa. Conhece Carmen como a palma da mão. Sabe de cor até o ciclo dela.",
        "Sonho: Que Carmen siga os passos dela. “Igual, não. Melhor.”",
        "Apelido: Chama a filha de “minha pequena canção”."
      ],
      "retrato": "img/retratos/madalena.png"
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
        "Idade: Cinquentão.",
        "Descrição: Barba aparada, cabelos grisalhos penteados para trás. Perfume amadeirado.",
        "Histórico: Viaja de vila em vila numa loja-carruagem puxada por dois burros, vendendo roupas e acessórios femininos. Este ano, a temporada de vendas vai mal. É um dos clientes favoritos de Madalena e ainda vê Carmen como uma garotinha.",
        "Características: Adora contar histórias das viagens e do reino. Nunca diz palavrões na frente de Carmen. Tem bom coração, mas não gosta de ser pressionado.",
        "Ponto fraco: Desconfia de quem só se aproxima por interesse."
      ]
    },
    "jaime": {
      "nome": "Jaime Barbosa",
      "papel": "O Ilustre de Serra Verde",
      "texto": [
        "Descrição: Anda sempre com dois guardas, que ficam postados na porta enquanto ele se diverte.",
        "Histórico: O nobre local, dono do castelo no alto do morro. Cliente assíduo de Madalena, banca o luxo do bordel.",
        "Características: Gosta de ser o centro das atenções."
      ]
    },
    "alexandro": {
      "nome": "Alexandro Barbosa",
      "papel": "O filho do Ilustre",
      "texto": [
        "Descrição: A cara do pai, só que mais baixo e menos roliço.",
        "Histórico: Filho de Jaime. Foi levado ao bordel pelo pai, contra a vontade.",
        "Características: Tímido e nervoso. Fala muito da família.",
        "Sonho: Perder a virgindade com alguém que ame de verdade.",
        "Família: A mãe perdoa as escapadas de Jaime, desde que não sejam com outra Ilustre. A irmã caçula, Vivian, vive entre aulas de costura, postura, dança e línguas, e quase nunca sai do castelo."
      ]
    },
    "isolina": {
      "nome": "Dona Isolina",
      "papel": "A joalheira",
      "texto": [
        "Descrição: Senhorinha de cabelos brancos e óculos de corrente. Cheira a sabonete de ervas.",
        "Histórico: Vende semijoias em Pacentro há décadas e nunca precisou de funcionária.",
        "Características: Casca dura, coração mole. Diz que bajulação não funciona com ela, mas sabe que funciona com as clientes.",
        "Experiência: Depois de décadas de balcão, sabe que ninguém em Pacentro gosta de receber conselho de uma moça do interior."
      ]
    },
    "rosa": {
      "nome": "A Ilustre de rosa",
      "papel": "Uma cliente",
      "texto": [
        "Descrição: Magricela, toda de rosa: chapéu com penas de flamingo, vestido de frufrus, joias de morganita. Perfume doce demais.",
        "Histórico: Tem sotaque do norte, a região mais caipira do reino. Entre os Ilustres, deve ser de terceira classe. Por isso conta vantagem para cima da plebe.",
        "Características: Destrata quem considera inferior.",
        "Ponto fraco: Adora plateia. Com bajulação suficiente, fala mais do que deveria."
      ]
    },
    "empregadas": {
      "nome": "As Empregadas Reais",
      "papel": "Na entrada do palácio",
      "texto": [
        "Descrição: Uniformes sóbrios, tons escuros, voz baixa e mansa.",
        "Histórico: Passaram a vida inteira entre castelos e palácios.",
        "Características: Sabem lidar com Ilustres, mas não com quem levanta a voz.",
        "Medo: Acima delas está a governanta, Sebastiana. Nenhuma quer levar uma bronca dela."
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
    },
    "luvas": {
      "nome": "Luvas de cetim",
      "preco": 3,
      "texto": [
        "Brancas, até o cotovelo. Mão de Ilustre não pega em nada sozinha."
      ]
    },
    "leque": {
      "nome": "Leque de plumas",
      "preco": 4,
      "texto": [
        "Plumas de avestruz e cabo de madrepérola. Serve para abanar, e para esconder o rosto."
      ]
    },
    "colar": {
      "nome": "Colar de pérolas",
      "preco": 7,
      "texto": [
        "Pérolas verdadeiras, pequenas, mas verdadeiras. A peça mais cara que Carmen já tocou."
      ]
    }
  },

  // Atributos de Carmen. "pontos" numa opção soma pontos; "requerAtributo" só mostra a opção com pontos suficientes.
  "atributos": {
    "persuasao": {
      "nome": "Persuasão",
      "texto": "Elogios na medida certa, argumentos na hora certa. Funciona com quem gosta de ouvir o que quer, como Madalena."
    },
    "honestidade": {
      "nome": "Honestidade",
      "texto": "Dizer a verdade, mesmo quando custa. Funciona com quem valoriza sinceridade, como Armando."
    },
    "astucia": {
      "nome": "Astúcia",
      "texto": "Mentir bem, enganar, ocultar. Toda farsa precisa dela."
    }
  },

  "moeda": {
    "singular": "beija-flor",
    "plural": "beija-flores",
    "texto": "Moedas de prata. Dá para juntar trabalhando, ou pegando o que não é seu."
  },

  // Arcos e cenas
  "arcos": [
    {
      "titulo": "Serra Verde",
      "abertura": [
        "Trancada no camarim do prostíbulo, Carmen só tinha uma certeza na vida: que não ia ser puta."
      ],
      "cenas": [
        {
          "titulo": "O camarim",
          "texto": [
            "Madalena escovava meus cabelos diante do espelho, como fazia quando eu era criança. Eu tinha acabado de pedir mais alguns meses antes de ter que trabalhar no bordel. Quem sabe, assim, conquistaria um Ilustre nesse meio-tempo.",
            "— Só de dizer uma coisa dessas, já mostra como você é infantil — respondeu Madalena. — Ilustres nunca se casarão com uma plebeia; no máximo, eles te farão uma concubina. É por isso que, por bem ou por mal, fará o que digo. E acabou a discussão.",
            "Olhei para baixo. Por mais que eu insistisse, ela nunca daria o braço a torcer. Só me restava uma opção.",
            "Eu fugiria do bordel. Mas, antes, precisava responder à minha mãe."
          ],
          "pergunta": "Enfrentá-la agora, ou fingir submissão?",
          "opcoes": [
            {
              "texto": "Mentira: — Está bem… Me dói admitir, mas tem razão. Quando a hora chegar, farei o que diz.",
              "certa": true,
              "resultado": [
                "Deixei os ombros caírem um centímetro, simulando derrota. O espelho não mentia: a expressão sisuda dela se aliviou em um sorriso largo.",
                "— Boa menina…",
                "Eu não precisava que Madalena concordasse comigo. Livre desse peso, fingir uma submissão relutante foi fácil."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Verdade: — Prefiro morrer a virar o que você é.",
              "resultado": [
                "O silêncio que se seguiu foi pior do que um tapa. Madalena largou a escova na penteadeira.",
                "— Então vai ser por mal.",
                "Naquela mesma noite, Gasparo passou a dormir no sofá da sala, de frente para a porta. Até o fim da semana, nunca mais fiquei um minuto sozinha."
              ]
            },
            {
              "texto": "Meia-verdade: — Eu só tenho medo, mãe. Não estou pronta.",
              "resultado": [
                "Madalena apertou a escova. — Medo passa. Pronta, ninguém fica.",
                "Ela me encarou pelo espelho, desconfiada. Medo era só metade da verdade, e ela sabia ler a outra metade nos meus olhos.",
                "Engoli o resto. Eu precisava que ela baixasse a guarda, não que a erguesse."
              ],
              "desvio": true,
              "pontos": {
                "honestidade": 1
              }
            }
          ],
          "quando": "7 dias antes do aniversário"
        },
        {
          "titulo": "A desculpa",
          "texto": [
            "— Use esta noite para escolher com quem gostaria de ter sua primeira vez — disse Madalena.",
            "“Ninguém”, seria minha resposta, mas era arriscado ser tão combativa."
          ],
          "pergunta": "Que desculpa me livraria do salão sem levantar suspeitas?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Levar a mão à boca do estômago: “Estou enjoada. Acho que é do nervosismo.”",
              "certa": true,
              "resultado": [
                "A suspeita sumiu do rosto de Madalena.",
                "— De gravidez é que não é. — Ela riu alto. — Está bem, pode ir para o seu quarto. Mas, se esse tal enjoo ficar se repetindo, decidirei tudo por você.",
                "As melhores desculpas eram aquelas que tinham um fundo de verdade. Meu estômago estava mesmo embrulhado."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Mentira: Fingir cólica: “Estou naqueles dias, mãe”, embora meu fluxo só viesse daqui a 2 semanas.",
              "resultado": [
                "Madalena ergueu uma sobrancelha. — Naqueles dias? Os seus só vêm daqui a duas semanas.",
                "*Merda.* Ela sabia o meu calendário melhor do que eu. — Não é isso… — emendei, depressa. — É outra coisa. Aqui, mais em cima."
              ],
              "desvio": true,
              "sucesso": {
                "requerAtributo": {
                  "persuasao": 1
                },
                "resultado": [
                  "Madalena ergueu uma sobrancelha. — Naqueles dias? Os seus só vêm daqui a duas semanas.",
                  "— Vieram adiantados — eu disse, sem piscar, com a mão no ventre e a cara mais sofrida do mundo. — Deve ser o nervoso.",
                  "Ela me olhou por um tempo. Depois suspirou. — Está bem. Vá se deitar. Mas, se isso virar costume, decidirei tudo por você."
                ]
              }
            },
            {
              "texto": "Verdade: — Ninguém. Não quero ninguém.",
              "resultado": [
                "Madalena estreitou os olhos. — Ninguém? Pois bem. Se você não escolhe, eu escolho por você.",
                "Ela desceu as escadas e voltou com o cliente mais rico da noite. Depois disso, nunca mais me deixou sozinha. Não houve fuga."
              ]
            }
          ],
          "quando": "6 dias antes do aniversário"
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
          "pergunta": "Pedir logo o que eu queria, ou ganhá-lo na conversa?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Hoje é diferente. Só quero que me conte como foi a viagem até aqui; se as estradas estão seguras; se está vendendo muito…",
              "certa": true,
              "resultado": [
                "A suspeita no rosto dele se desfez em desalento.",
                "— Sinceramente, não vai nada bem. A safra fraca empobreceu as vilas ao sul. Desisti desses pães-duros e estou subindo rumo ao norte mais cedo.",
                "— É, eu percebi. Você costuma aparecer no meio do mês nono, não no final do sétimo.",
                "Ele sorriu e corou. — Você reparou nisso?",
                "Claro que eu tinha reparado. E Armando falou, falou, falou: das estradas, do jovem rei, da Capital. Até que a conversa chegou exatamente onde eu queria."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Verdade: — Quero que me leve com você quando for embora.",
              "resultado": [
                "Armando soltou uma gargalhada. — E eu quero ser o rei dos Burgos. — Ele balançou a cabeça. — Vou fingir que não ouvi isso.",
                "Ele já se virava para a porta do bordel. Tola: ninguém faz um favor desses a quem começa pelo fim. Segurei a manga dele, com o meu sorriso mais inocente. — Era brincadeira. Fica um pouco."
              ],
              "desvio": true,
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: — Um vestido, claro. Aquele de renda que você trouxe da última vez.",
              "resultado": [
                "— Eu sabia. — Ele sorriu, satisfeito por ter acertado. — Vou pensar no seu caso.",
                "E entrou no bordel atrás de Madalena. Ganhei um vestido dias depois, mas nunca mais tive a atenção dele. Para Armando, eu continuava sendo só a menina que pedia presentes."
              ]
            }
          ],
          "quando": "4 dias antes do aniversário"
        },
        {
          "titulo": "A proposta",
          "texto": [
            "— Que inveja eu tenho por não poder conhecer a Capital — suspirei, encarando meus próprios pés. — Em vez disso, viverei e morrerei como uma prostituta aqui em Serra Verde.",
            "— Isso é injusto, de verdade — disse Armando, gravemente. — Tão injusto que eu me disporia a te levar de graça à Capital, se eu não estivesse vendendo o almoço para pagar a janta.",
            "Era a brecha que eu esperava."
          ],
          "pergunta": "Como fazer valer a pena me levar?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Não seja por isso. Uso minha beleza como isca: serei um manequim para você expor, atraindo as pessoas enquanto você faz sua mágica com a arte da venda.",
              "resultado": [
                "Armando estreitou os olhos. — E o que uma moça como você ganha andando em cima de uma carroça pelas vilas?",
                "— Conhecer a Capital, ora.",
                "— Tem coisa aí que você não está me contando. — Ele cruzou os braços. — Ou me conta tudo, ou eu entro e falo com a sua mãe.",
                "Com Armando, meia-verdade não ia colar."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: — Eu pago a viagem. Tenho umas economias guardadas.",
              "resultado": [
                "Armando cruzou os braços. — Economias? Todo tostão que entra nesta casa passa pela mão da sua mãe. Se você tem dinheiro escondido, ele é dela.",
                "Ele entrou no bordel e contou tudo a Madalena. Naquela noite, ela revirou meu quarto atrás das economias que eu não tinha. E Gasparo passou a dormir na minha porta."
              ]
            },
            {
              "texto": "Verdade: — Daqui a quatro dias, minha mãe vai me vender para o primeiro Ilustre que pagar. Me leva. Eu trabalho para você de graça até pagar a viagem.",
              "resultado": [
                "Armando ficou um bom tempo calado, olhando para a porta do bordel.",
                "— De graça, não. Ninguém trabalha de graça na minha loja. — Ele coçou a nuca. — Mas uma moça bonita lá em cima da loja talvez atraia mais freguesas do que as minhas rendas. Você ficaria em pé na boleia, como um manequim?",
                "— Fico onde você quiser. — Respirei fundo. — E então? Quando podemos partir?"
              ],
              "certa": true,
              "pontos": {
                "honestidade": 1
              }
            }
          ],
          "quando": "4 dias antes, fim de tarde"
        },
        {
          "titulo": "O segredo",
          "texto": [
            "— Calma, um passo de cada vez — disse Armando. — Primeiro eu tenho que falar com sua mãe. Madalena é uma mulher prática. Se eu explicar que você estaria trabalhando de maneira honesta, não tem por que negar."
          ],
          "pergunta": "Deixar que ele falasse com minha mãe, ou impedi-lo a qualquer custo?",
          "opcoes": [
            {
              "texto": "Verdade: — Ela nunca aceitará que eu viva da minha própria maneira. Ela quer que eu siga os passos dela, e ponto.",
              "certa": true,
              "resultado": [
                "Armando me encarou em silêncio por um tempo.",
                "— Eu queria argumentar que não, mas uma filha conhece melhor a mãe do que eu. O complicado é que eu fico de mãos atadas sem a permissão dela. Se eu te ajudar a fugir, as pessoas vão achar que eu sequestrei você.",
                "Engoli em seco e ganhei tempo até encontrar uma saída.",
                "— O povo de Serra Verde pode achar isso. Mas, nas próximas vilas, todo mundo vai ver que eu fui de bom grado, e que estamos trabalhando juntos. A verdade prevalecerá no final.",
                "Sorri para transmitir confiança, enquanto limpava o suor frio das mãos no vestido.",
                "— Pode ser, mas… e quanto à sua mãe? Se ela quer tanto que você siga os passos dela, Madalena me mata se eu te ajudar.",
                "— Mata nada. — Minha voz saiu em falsete, e abanei a mão no ar, fazendo pouco caso. — Você vai levar meses para voltar. Até lá, ela já vai ter te perdoado. Quem sabe até te agradeça, por eu não estar mais aqui para testar a paciência dela.",
                "Em vez de tranquilizado, Armando franziu o cenho.",
                "— Você acha que Madalena não te ama?",
                "A pergunta direta me pegou de saia arriada. Sem saber o que ele queria ouvir, respondi com sinceridade:",
                "— Eu acho que ela ama ter uma filha, mas não a filha que tem.",
                "Armando me encarou no fundo dos olhos e meneou a cabeça.",
                "— Ela te ama, Carmen. Nas conversas que tivemos, ela sempre falou com orgulho da sua pequena canção.",
                "Envolver meu nome em conversas de cama com clientes, ainda mais com aquele apelido deplorável, era motivo de revolta. Mas contrariá-lo era a escolha errada.",
                "— Se ela me ama de fato, uma hora vai entender que precisei escolher meu próprio caminho. E vai perdoar tanto a mim quanto a você pelo que fizemos.",
                "— Fizemos? Você fala como se eu já tivesse aceitado.",
                "Ele ainda não tinha concordado, era verdade. Mas, se fosse recusar, bastaria ter dado as costas e entrado no bordel. No fundo, a permanência dele ali era prova do aceite.",
                "— Você é um homem bom. Não tem opção além de me ajudar.",
                "— Não sou um homem bom — disse ele, ainda olhando nos meus olhos —, mas também não sou um homem péssimo. Então, sim, eu te ajudarei a fugir. Sairemos na véspera do seu aniversário, pela manhã."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Meia-verdade: — Ela até desconfia que eu quero ir embora. Pode falar com ela, mas com jeito.",
              "resultado": [
                "Ele falou com jeito. Madalena ouviu tudo com um sorriso educado, agradeceu a gentileza e, assim que ele saiu, mandou Gasparo vigiar a loja-carruagem até ela deixar a cidade.",
                "— Achou mesmo que eu não ia descobrir, pequena canção?"
              ]
            },
            {
              "texto": "Mentira: — Se você contar a ela, eu digo que você tentou me levar para a cama.",
              "resultado": [
                "O rosto de Armando endureceu como pedra. — Então não temos mais nada para conversar.",
                "Ele deu as costas. E eu entendi, tarde, o que tinha feito: ameaçar o único homem disposto a me ajudar.",
                "— Espera! Desculpa. Eu nunca diria isso. Eu só… tenho medo dela. — Ele parou, com a mão na porta. Respirei fundo e, dessa vez, confiei nele de verdade."
              ],
              "desvio": true
            }
          ],
          "quando": "4 dias antes, ao anoitecer"
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
          "pergunta": "Obedecer, ou encontrar outro jeito de passar a noite?",
          "opcoes": [
            {
              "texto": "Verdade: Sentar ao lado dele, segurar sua mão e dizer: “Você está bem nervoso para sua primeira vez, não está? Também estou.”",
              "certa": true,
              "resultado": [
                "Ele finalmente me olhou, com aqueles olhos amedrontados.",
                "— É que eu gostaria de perder a virgindade com alguém que amo de verdade — confessou. — E, apesar de você ser linda demais, nem te conheço direito.",
                "Meu sorriso se alargou. — Não me ofendeu nem um pouco. Minha primeira vez tem que ser mágica, com o amor da minha vida.",
                "Passamos horas conversando sobre passado, presente e futuro. Ele me contou tudo sobre a rotina de um jovem Ilustre, sobre a mãe, sobre a irmã caçula. Quando já eram altas horas, ele adormeceu roncando baixinho.",
                "No final de tudo, dormimos juntos. Só não da forma que Madalena e Jaime queriam."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: Fingir desejo e seguir as instruções da mãe. Uma noite só, e amanhã estaria livre.",
              "resultado": [
                "Fiz tudo o que Madalena tinha me ensinado. Funcionou, como ela sempre disse que funcionaria.",
                "Quando abri os olhos, o sol já ia alto. Da janela, vi a esquina vazia: a loja de Armando tinha partido sem mim.",
                "Eu tinha jurado uma única coisa a mim mesma. E não cumpri."
              ]
            },
            {
              "texto": "Meia-verdade: — Só preciso de um pouco de ar. — E ir até a janela, pensando em fugir agora mesmo, no escuro.",
              "resultado": [
                "Abri a janela. Lá embaixo, os guardas de Jaime fumavam encostados na carruagem dos Barbosa, de olho na rua. A loja de Armando só chegaria pela manhã.",
                "Fechei a janela devagar. Alexandro continuava na beira da cama, me olhando como se eu fosse pular de verdade. Era ele quem eu precisava resolver primeiro."
              ],
              "desvio": true
            }
          ],
          "quando": "2 dias antes do aniversário"
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
          "pergunta": "O que eu levaria comigo?",
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
              ],
              "pontos": {
                "astucia": 1,
                "dinheiro": 4
              }
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
          ],
          "quando": "Véspera do aniversário, madrugada"
        },
        {
          "titulo": "O balde",
          "texto": [
            "Mas os guardas de Jaime continuavam na entrada. Então tive uma ideia: quem disse que eles não poderiam me ver?",
            "Despejei minhas roupas favoritas num balde de madeira, segurei a alça e caminhei confiante rumo à saída. O guarda mais alto e magro me barrou com o olhar.",
            "— Meio cedo para lavar roupas, não?"
          ],
          "pergunta": "O que dizer para ele me deixar passar?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Cedo para quem? Quando eu voltar, ainda tenho que arrumar toda a bagunça lá dentro. E, se ficarem me atrasando, minha mãe vai comer o meu fígado e, logo depois, o de vocês.",
              "certa": true,
              "resultado": [
                "— Pare de a atazanar e deixe-a ir logo — disse o outro guarda.",
                "Desci os degraus. Uma brisa matinal balançou a saia do meu vestido, e um arrepio libertador percorreu meus braços.",
                "Na esquina, Armando cochilava na boleia. Antes que a loja se afastasse, ergui o braço e lhe estendi o dedo do meio. Assim, os guardas achariam que eu o tinha mandado pastar, em vez de estar mancomunada com o mascate.",
                "Minutos depois, do outro lado da ponte do rio, subi na boleia ao lado dele. Serra Verde ficou para trás."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Mentira: — É que… derramei vinho no meu vestido. Preciso lavar antes que manche.",
              "resultado": [
                "O guarda franziu a testa e espiou dentro do balde. — Isso aqui não parece um vestido sujo. Parece uma mudança inteira.",
                "Meu coração parou. Mas guarda nenhum gosta de parecer que manda menos do que manda. Endireitei os ombros e mudei o tom."
              ],
              "desvio": true
            },
            {
              "texto": "Verdade: — Estou indo embora de Serra Verde. E vocês nunca me viram.",
              "resultado": [
                "O guarda mais alto riu e segurou meu braço. — Nunca vimos, é? Então vamos ver o que o patrão acha disso.",
                "Jaime acordou Madalena. Madalena acordou a casa inteira. A loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "Véspera do aniversário, amanhecer"
        }
      ],
      "fecho": [
        "No horizonte, o sol nascia e tingia o céu de dourado. Desde pequena, eu me imaginava uma princesa resgatada por um príncipe num cavalo branco.",
        "Nem nos meus dias mais criativos imaginei que sairia de Serra Verde numa loja itinerante, puxada por burros e conduzida por um cinquentão. Mas eu não podia reclamar."
      ],
      "cenario": "serra-verde",
      "imagem": {
        "arquivo": "img/espelho-cor.jpg",
        "descricao": "Madalena, de corpete vermelho, arruma Carmen diante do espelho da penteadeira."
      },
      "apresenta": [
        "carmen",
        "madalena"
      ]
    },
    {
      "titulo": "A estrada",
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
          "pergunta": "Revidar, engolir, ou virar o jogo?",
          "opcoes": [
            {
              "texto": "Verdade: Encarar a nariguda até ela corar e, depois, sorrir: “Essa roupa é mesmo demais para uma feira. É que sou assistente de um mascate. Trouxemos peças lindíssimas da Capital. Vamos lá conferir juntas.”",
              "certa": true,
              "resultado": [
                "A nariguda levou a mão aos lábios e corou. Isso bastou para mim.",
                "— N-não — disse a rechonchuda. — Obrigada, mas…",
                "— Que nada, não precisa ter vergonha.",
                "Puxei a nariguda pelo braço. Sem olhar para trás, eu sabia que as outras duas nos seguiam."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — Sou noiva de um Ilustre da Capital. Mais respeito comigo.",
              "resultado": [
                "A nariguda riu alto. — Noiva de Ilustre, em cima de uma carroça de mascate?",
                "A risada dela atraiu a feira inteira. Quando a história chegou ao chefe da guarda, já tinha virado “a meretriz que se diz noiva de Ilustre”. Em meia hora, ele pediu que Armando recolhesse a mercadoria e seguisse viagem.",
                "Na vila seguinte, Armando me deu algumas andorinhas e uma carona de volta para o sul. A parceria tinha durado um dia."
              ]
            },
            {
              "texto": "Meia-verdade: — Só estou de passagem. — E voltar para a loja de Armando sem explicar mais nada.",
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
          "pergunta": "Concordar com ela, ou mostrar o que ela não enxergava?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Erguer o queixo dela: “Discordo. Nos seus olhos há uma mulher poderosa que sabe o que quer. O que não combina com você é o que está vestindo agora.”",
              "certa": true,
              "resultado": [
                "Ela ficou vermelha. — Você só está dizendo isso porque quer vender…",
                "— Esse é um dos motivos, sim. Mas, se fosse só por isso, eu empurraria um dos vestidos sem graça para você.",
                "Escolhi um amarelo-claro, com bordado florido no busto. Quando ela finalmente tirou as mãos da frente do decote, perguntei:",
                "— Uau… Quem é essa peituda que entrou na minha loja?",
                "Ela gargalhou tanto que deixou escapar um ronco. A transformação dela atraiu as amigas, e as amigas atraíram a feira inteira. De vendedor principal, Armando foi rebaixado a segurança de grife na porta da cabine, sem reclamar."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — Você tem razão. Temos uns mais discretos ali naquela caixa, mais o seu estilo.",
              "resultado": [
                "Ela olhou os vestidos fora de estação com um desânimo educado e já ia agradecer quando eu reparei no jeito como os dedos dela tinham alisado o tecido do decotado.",
                "— Esquece a caixa — eu disse, puxando-a de volta para o espelho."
              ],
              "desvio": true
            },
            {
              "texto": "Verdade: — Leve o mais decotado. Vai fazer os homens da vila babarem por você.",
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
      ],
      "cenario": "estrada"
    },
    {
      "titulo": "Pacentro",
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
          "pergunta": "Como fazer uma mulher que nunca precisou de ninguém precisar de mim?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Pela beleza da loja, a senhora fez um trabalho excepcional esses anos todos. Não acha que, depois de tanto esforço, merece descansar um pouco?",
              "certa": true,
              "resultado": [
                "— Bajulações não funcionam comigo, menina — disse ela, franzindo o rosto. — Mas reconheço que podem funcionar com certas clientes. Desde que você saiba o suficiente sobre joias para não falar nenhuma besteira.",
                "— Sei, sim. E posso provar.",
                "Acertei quase tudo o que ela me perguntou sobre pedras e banhos. Uma vida inteira de bordel ensina muita coisa.",
                "— Você sabe menos do que acredita saber, mas mais do que eu esperava. Contratada. Por um dia teste."
              ],
              "pontos": {
                "persuasao": 1,
                "dinheiro": 2
              }
            },
            {
              "texto": "Verdade: — Por favor, Dona Isolina. Eu acabei de chegar e não tenho para onde ir.",
              "resultado": [
                "— Minha filha, aqui é uma joalheria, não um convento.",
                "Ela nos acompanhou educadamente até a porta. Nas outras lojas parceiras de Armando, a resposta foi parecida: ninguém em Pacentro contratava uma caipira por pena."
              ]
            },
            {
              "texto": "Mentira: — Eu esgotei o estoque inteiro do Armando em poucas semanas. Posso fazer o mesmo aqui.",
              "resultado": [
                "— Vender vestido para camponesa é uma coisa. Vender para madame de Pacentro é outra — disse Isolina, já voltando para o banquinho.",
                "Armando me lançou um olhar que dizia tudo: eu tinha soado como a menina convencida que ela achava que eu era. Antes que ela se sentasse, olhei para a loja de verdade, prateleira por prateleira."
              ],
              "desvio": true,
              "sucesso": {
                "requerAtributo": {
                  "persuasao": 3
                },
                "pontos": {
                  "dinheiro": 2
                },
                "resultado": [
                  "Antes que ela respondesse, peguei um brinco da vitrine e prendi na orelha dela. — Olhe no espelho. Agora imagine uma moça dizendo isso a cada cliente que entra.",
                  "Isolina se olhou no espelho do balcão. Virou o rosto para a esquerda, para a direita. A pedra combinava com os olhos dela, e ela sabia disso.",
                  "— Bajulações não funcionam comigo, menina — disse, sem tirar o brinco. — Mas reconheço que podem funcionar com certas clientes.",
                  "Ela me fez meia dúzia de perguntas sobre pedras e banhos. Acertei quase todas.",
                  "— Contratada. Por um dia teste."
                ]
              }
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
          "pergunta": "Vender o que ela pediu, ou o que ficaria melhor nela?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Entregar o brinco de bolinha dourado com um sorriso: — É um clássico. Nunca sai de moda.",
              "certa": true,
              "resultado": [
                "Ela saiu satisfeita, com o embrulho na mão, prometendo voltar.",
                "Quando Isolina desceu a escada, recém-desperta, encontrou a primeira venda do dia anotada no caderno.",
                "— Não somos pagas para estar certas — disse ela, quando contei o que tinha pensado em fazer. — Somos pagas para vender o que a cliente quer.",
                "Era difícil assistir calada a certos crimes da moda. Mas, ao fim do dia, a chave sobressalente era minha."
              ],
              "pontos": {
                "dinheiro": 2
              }
            },
            {
              "texto": "Verdade: Explicar, com jeitinho, que um brinco de franja prateado valorizaria muito mais o rosto dela.",
              "resultado": [
                "O rosto rechonchudo se contorceu numa carranca. — Mudei de ideia. Quem sabe eu volte outro dia.",
                "Ela já tinha a mão na maçaneta. Engoli o meu palpite inteiro, sem mastigar. — Perdão, foi só uma ideia boba. A senhora tinha razão desde o começo."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: Dizer que o de bolinha acabou e oferecer um par mais caro.",
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
          "pergunta": "Perguntar direto, ou fazê-la falar sem perceber?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Tenho certeza de que Vossa Ilustreza será aprovada. Mas as outras candidatas também são Ilustres, não são? A competição deve ser acirrada… A senhorita sabe quantas são?",
              "certa": true,
              "resultado": [
                "Disparei as perguntas no ritmo dos pacentrenses. Ela ficou meio zonza.",
                "— Não faço ideia. O convite só falou em me convidar pela minha maioridade, e… o resto não te interessa.",
                "Bastava. Se uma Ilustre de terceira classe como ela tinha sido convidada, todas as Ilustres que acabavam de fazer a maioridade deviam ter sido também. Muitas candidatas, uma sem saber das outras. Dava para entrar no meio."
              ],
              "pontos": {
                "astucia": 1,
                "dinheiro": 2
              }
            },
            {
              "texto": "Verdade: — Que interessante. E como uma moça faz para participar dessa avaliação?",
              "resultado": [
                "Ela gargalhou. — Plebeias? Nem em sonho. Só por convite, com o selo do rei.",
                "E me olhou de um jeito que eu não gostei. Mordi a língua: perguntar por mim era burrice. Eu precisava fazê-la falar dela mesma. Sorri, inclinei a cabeça e recomecei."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: — Ouvi dizer que essa avaliação foi cancelada. É verdade?",
              "resultado": [
                "— Cancelada? Quem te disse uma asneira dessas? — A menina de rosa largou as peças no balcão. — Vendedora que espalha boato não serve nem para embrulhar presente.",
                "Saiu sem comprar nada. Isolina não disse uma palavra. Só estendeu a mão aberta, esperando a chave sobressalente."
              ]
            }
          ]
        },
        {
          "titulo": "A data",
          "texto": [
            "A menina pagou e já se dirigia à porta. Eu sabia quase tudo. Faltava o principal: quando seria a avaliação."
          ],
          "pergunta": "Como arrancar isso dela antes que saísse pela porta?",
          "opcoes": [
            {
              "texto": "Mentira: Correr para abrir a porta com uma mesura: “Estarei rezando pelo seu sucesso. A avaliação será quando mesmo? Para eu saber quando acender as velas.”",
              "certa": true,
              "resultado": [
                "Colocar a Resplandecente no meio foi golpe baixo, mas eu precisava de uma resposta sincera.",
                "— No domingo, ao meio-dia.",
                "Dei tchauzinhos para ela. Seis dias: tempo para os ajustes finais do plano e para a Ilustre esquecer os detalhes do meu rosto."
              ],
              "pontos": {
                "astucia": 1,
                "dinheiro": 1
              }
            },
            {
              "texto": "Verdade: — Eu daria tudo para ver essa avaliação de perto. Quando vai ser?",
              "resultado": [
                "— Ver de perto? Que audácia.",
                "Ela me mediu dos pés à cabeça mais uma vez, demorada, como quem decora um rosto, e saiu sem responder."
              ]
            },
            {
              "texto": "Meia-verdade: — Vossa Ilustreza vai precisar de luvas novas para o grande dia. Ele é logo?",
              "resultado": [
                "— Logo o bastante — disse ela, já com a mão na porta. — Luvas eu tenho de sobra.",
                "Meia resposta para uma meia pergunta. Por sorte, a menina de rosa esqueceu as próprias luvas no balcão. Na manhã seguinte, voltou para buscá-las, e eu tive uma segunda chance."
              ],
              "desvio": true
            }
          ]
        }
      ],
      "fecho": [
        "Na véspera do grande dia, Armando partiu. Deixou comigo minha parte dos lucros, e a nossa despedida foi mais difícil do que eu imaginava.",
        "O que aconteceu naquele quarto de pousada fica para quem ler o livro."
      ],
      "cenario": "pacentro"
    },
    {
      "titulo": "O Palácio Real",
      "abertura": [
        "Domingo. Meio-dia. Uma plebeia de Serra Verde contra a nobreza inteira do reino."
      ],
      "cenas": [
        {
          "titulo": "O mercado",
          "loja": true,
          "texto": [
            "Juntei tudo o que tinha e fui ao mercado de Pacentro. Um vestido de seda de segunda mão eu já tinha garantido.",
            "Faltava o resto: os detalhes que separam uma moça bonita de uma Ilustre."
          ],
          "pergunta": "O que eu compraria?",
          "opcoes": [],
          "pagamento": {
            "item": "moedas",
            "valor": 8,
            "valorItem": 2,
            "texto": [
              "Na véspera da avaliação, Armando passou na joalheria e me entregou um saquinho de couro: a minha metade dos lucros da estrada.",
              "— Você mereceu cada moeda — disse ele."
            ],
            "textoItem": [
              "Na véspera da avaliação, Armando passou na joalheria e me entregou um saquinho de couro. Bem mais leve do que eu esperava.",
              "— Eu vi a bolsinha de veludo na estrada — disse ele, sem desviar os olhos. — Conheço as coisas da sua mãe. A parte dela, eu devolvo a ela."
            ]
          },
          "produtos": [
            "luvas",
            "leque",
            "colar"
          ]
        },
        {
          "titulo": "O disfarce",
          "texto": [
            "Acordei cedo, vesti o que tinha comprado e escondi no decote o que sobrou das moedas. Me arrumar era a parte fácil.",
            "A difícil era outra: a menina de rosa tinha visto meu rosto, e estaria lá. Se me reconhecesse, era o fim."
          ],
          "pergunta": "Como mudar meu rosto sem chamar ainda mais atenção?",
          "opcoes": [
            {
              "texto": "Ir ao cabeleireiro e cortar os cabelos na altura dos ombros, como os da mãe.",
              "certa": true,
              "resultado": [
                "O cabeleireiro perguntou se eu tinha certeza. Engoli em seco e disse “sim”.",
                "Para minha surpresa, sorri diante do resultado. A nuca exposta arrepiou com o ar. Cabelos curtos tinham muita personalidade. E, uma hora, cresceriam de novo.",
                "Depois, perfume de jasmim e almíscar, vestido azul-ciano, luvas bordadas e pérolas cultivadas idênticas às verdadeiras. Dona Isolina, sem saber de nada, me fez preço de custo."
              ],
              "pontos": {
                "astucia": 1
              }
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
          "pergunta": "Como fazer aquela carruagem me levar ao palácio?",
          "opcoes": [
            {
              "texto": "Mentira: — Senhorita, não: Vossa Ilustreza! O condutor que papai contratou está passando mal. Preciso que me leve agora para o Palácio Real. — E jogar uma garça de ouro no colo dele.",
              "certa": true,
              "resultado": [
                "O rosto dele corou profundamente. Fui até a porta da carruagem como quem nunca tinha ouvido um não na vida.",
                "— Entendido, Vossa Ilustreza. — Ele enfiou a garça no bolso. — Por sinal, como devo anunciá-la na entrada do Palácio Real?"
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Verdade: — Bom dia, senhor. Quanto custaria uma corrida até o Palácio Real?",
              "resultado": [
                "Ele me mediu com um sorriso educado. — Esta carruagem serve a uma casa Ilustre, senhorita. Não é de aluguel.",
                "*Senhorita.* Ilustre nenhuma pergunta preço. Ergui o queixo, troquei a voz e tentei de novo, como se a primeira frase nunca tivesse existido."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Obrigada, mas prefiro caminhar. Faz bem à pele. — E ir a pé, para economizar.",
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
            },
            {
              "texto": "Estender a mão enluvada ao cocheiro, sem dizer nada, e esperar que ele me ajude a subir.",
              "requer": "luvas",
              "certa": true,
              "resultado": [
                "Ele hesitou um instante. Depois desceu da boleia, tirou a cartola e me deu a mão.",
                "Nenhuma plebeia espera ser ajudada a subir. Uma Ilustre nem pergunta.",
                "— Ao Palácio Real — eu disse, ajeitando a saia no banco de veludo. — E depressa."
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
          "pergunta": "Que nome eu daria?",
          "opcoes": [
            {
              "texto": "Mentira: — Diga-lhes meu nome completo: Vivian Barbosa.",
              "certa": true,
              "resultado": [
                "A irmã caçula de Alexandro, que quase nunca saía do castelo de Serra Verde. Ele tinha me contado tudo sobre a família naquela noite.",
                "No ritmo acelerado dos alazões, avançamos rumo ao palácio."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Verdade: — Carmen. Só Carmen.",
              "resultado": [
                "O cocheiro piscou, confuso. — Só Carmen, Vossa Ilustreza? De qual casa?",
                "Ilustre nenhuma tinha um nome só. Ri como se tivesse feito uma piada. — Carmen é como me chamam em casa. Para o palácio, use o nome completo."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Carmen Barbosa. — Meu nome de verdade, com o sobrenome de outra.",
              "resultado": [
                "Funcionou com o cocheiro. Na mesa de entrada, a empregada procurou o nome na lista e ergueu os olhos.",
                "— Carmen Barbosa? Os Barbosa só têm uma filha, e ela não se chama Carmen.",
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
          "pergunta": "Engolir o deboche, ou devolvê-lo?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — A exigência de apresentação não estava prevista na carta. E só quem foi convidada apareceria aqui no dia exato, na hora exata. De que outra forma eu saberia de um evento tão discreto?",
              "certa": true,
              "resultado": [
                "Dessa vez, foi ela quem ficou sem palavras. Contrariada, baixou os olhos para os papéis.",
                "— Nome e sobrenome.",
                "— Vivian Barbosa.",
                "Ela passou o dedo em cada nome iniciado por V. Então levantou o rosto.",
                "— Não está aqui. Desculpe-me, senhorita, mas sem isso não posso te deixar entrar."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — O convite? Entreguei a uma das suas colegas lá fora, agora mesmo.",
              "resultado": [
                "A empregada olhou para a porta, onde não havia colega nenhuma.",
                "— Guardas.",
                "Mentir sobre uma Empregada Real, dentro do Palácio Real, com a fila inteira ouvindo. Nem a Ilustre mais burra do reino faria isso."
              ]
            },
            {
              "texto": "Verdade: — Eu não tenho o convite.",
              "resultado": [
                "— Então, senhorita, a saída é por ali.",
                "Dei dois passos pelo tapete vermelho antes de entender: se eu saísse, não voltaria. Dei meia-volta e encarei a empregada outra vez."
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
            },
            {
              "texto": "Tocar o colar de pérolas: — Uma Barbosa não anda com papéis. Anda com isto.",
              "requer": "colar",
              "certa": true,
              "resultado": [
                "A empregada olhou as pérolas. Eram verdadeiras, e ela sabia.",
                "O sorriso de troça murchou. — Perdão, Vossa Ilustreza. Vou procurar seu nome na lista."
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
          "pergunta": "Como passar daquela lista?",
          "opcoes": [
            {
              "texto": "Mentira: Erguer a voz: — Isso é um absurdo! Exijo falar com a governanta. Se além de errarem os nomes vocês atrasarem o evento, ela vai comer o fígado de vocês.",
              "certa": true,
              "resultado": [
                "Minha voz ecoou sozinha pelo salão. As empregadas se entreolharam, aflitas, e só então repararam na fila que não parava de crescer.",
                "— Calma, não precisamos piorar a situação — sussurrou a “minha” empregada. — Se você não disser a ninguém a questão do nome, não diremos a ninguém a questão do convite. Estamos combinadas?",
                "Tive vontade de concordar na hora. Contei dois segundos inteiros antes de assentir.",
                "Ela pegou o bico de pena e acrescentou meu nome no fim da lista, com um visto de presença."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Meia-verdade: — Às vezes erram meu nome. Será que não estou como Maria Vivian? Ou Vivian com W? Mamãe sempre escreve com W.",
              "resultado": [
                "Ela conferiu de novo, com toda a calma do mundo, e a dúvida foi mudando de lugar no rosto dela. — Uma Ilustre que não sabe o próprio nome?",
                "Ela ergueu dois dedos para chamar um guarda. Eu tinha um segundo antes de os dedos se abrirem."
              ],
              "desvio": true,
              "sucesso": {
                "requerAtributo": {
                  "astucia": 4
                },
                "resultado": [
                  "A empregada conferiu as Marias e depois foi, obediente, até o fim da lista. Não havia nenhum W.",
                  "— Também não está aqui, Vossa Ilustreza… — sussurrou, já sem cor no rosto. Atrás de mim, a fila crescia, e ela sabia que a culpa ia cair nela.",
                  "— Então acrescente, antes que alguém perceba que vocês perderam o meu nome — sussurrei de volta, com o meu sorriso mais doce.",
                  "Ela pegou o bico de pena e escreveu meu nome no fim da lista, com um visto de presença."
                ]
              }
            },
            {
              "texto": "Verdade: Baixar a voz: — Talvez o meu nome nunca tenha estado aí.",
              "resultado": [
                "A empregada me encarou por um longo segundo. Depois ergueu dois dedos e chamou um guarda.",
                "Na lista dela, uma Ilustre sem nome era só uma plebeia bem vestida."
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
          "pergunta": "Como sustentar o olhar dela sem ser reconhecida?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Dar uma piscadela: — Se tivesse conhecido, você com certeza não se esqueceria de mim.",
              "certa": true,
              "resultado": [
                "Era uma resposta que nenhuma plebeia daria.",
                "A menina me analisou por alguns instantes. Então olhou em volta, como se de repente percebesse quão estranha estava parecendo para as outras.",
                "— Perdão, acho que te confundi.",
                "E foi se posicionar bem longe de mim."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Mentira: — Não. Duvido muito.",
              "resultado": [
                "— Duvida? — Ela inclinou a cabeça e me examinou com calma. — Espera… essa voz…",
                "Antes que ela terminasse, abri o melhor sorriso que tinha aprendido no salão do bordel."
              ],
              "desvio": true
            },
            {
              "texto": "Verdade: — Pode ser. Passei uns dias em Pacentro.",
              "resultado": [
                "— Pacentro… — Os olhos dela se arregalaram. — A vendedora da joalheria! Empregadas! Essa daqui é uma plebeia!"
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
            },
            {
              "texto": "Abrir o leque diante do rosto e responder por trás das plumas: — Duvido. Eu me lembraria de um rosa tão… corajoso.",
              "requer": "leque",
              "certa": true,
              "resultado": [
                "Ela estreitou os olhos, tentando enxergar além das plumas. Só viu o leque, e uma Ilustre entediada.",
                "— Hum. Deve ter sido outra pessoa. — E voltou para perto das outras."
              ]
            }
          ]
        }
      ],
      "fecho": [
        "A entrada no palácio estava garantida.",
        "Agora, só faltava passar na avaliação."
      ],
      "cenario": "palacio"
    }
  ],

  // Tela final
  "vitoria": [
    "Carmen chegou ao Palácio Real. Como Vivian Barbosa, filha de um Ilustre, no meio das donzelas mais prendadas do reino.",
    "Se ela vai passar na avaliação, se a farsa vai durar e quem ela vai encontrar lá dentro… isso o jogo não conta. O livro conta."
  ]
};
