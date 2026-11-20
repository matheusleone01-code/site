/* =====================================================================
   CENAS DA VERSÃO COMPLETA (para quem já leu "Carmen")
   ---------------------------------------------------------------------
   Mesmo formato do cenas.js da versão sem spoilers. A opção com
   "certa": true é a que Carmen escolheu no livro. Edite os textos entre
   aspas; use aspas curvas “assim” dentro deles.
   ===================================================================== */
window.JOGO = {
  "titulo": "Carmen",
  "subtitulo": "Versão completa, para quem já leu",
  "aviso": "Contém spoilers do livro inteiro: é só para quem já terminou Carmen. Também tem linguagem e temas adultos (maiores de 16 anos).",
  "abertura": [],
  "comoJogar": [
    "A fala certa é sempre a que Carmen escolheu no livro, mesmo quando não foi a mais sensata.",
    "Algumas falas erradas têm conserto; outras não.",
    "Carmen pode guardar objetos no inventário, e eles abrem caminhos extras.",
    "Algumas escolhas dão pontos de bônus em Persuasão, Sagacidade, Performance, Honestidade ou Humor.",
    "Algumas escolhas levam a finais alternativos, fora da história do livro. O jogo avisa antes.",
    "Cada arco concluído vale desconto no livro. Quanto mais longe Carmen chegar, maior o desconto.",
    "Na dúvida, consulte as fichas dos personagens."
  ],
  "premio": {
    "instrucao": "Tire um print desta tela e mande por direct para @omatheusleone.",
    "instagram": "https://www.instagram.com/omatheusleone/"
  },
  "descontos": [
    2,
    4,
    6,
    8,
    10,
    12,
    13,
    14,
    15
  ],
  "linkLivro": "https://a.co/d/0dUY5sYb",
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
        "Histórico: Mascate. Viaja de vila em vila numa loja-carruagem puxada por dois burros. Um dos clientes favoritos de Madalena.",
        "Características: Nunca diz palavrões na frente de Carmen.",
        "Segredo: É o pai de Carmen. Prometeu tirar Madalena do bordel e nunca cumpriu: no fundo, sentia vergonha do ofício dela.",
        "Revelação: Quando Carmen cantou a canção de ninar da mãe junto à fogueira, ele chorou. Ali, com o perfil recortado contra o fogo, o nariz o denunciou: era igual ao dela."
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
    },
    "valeria": {
      "nome": "Valéria Castro",
      "papel": "A melhor amiga",
      "texto": [
        "Descrição: Cabelos pretos cacheados, olhos escuros, perfume de laranja.",
        "Histórico: Primeira colocada na avaliação. Conhece a política do reino de cor: o pai contou tudo sobre as batalhas pelo trono.",
        "Características: Nervosa, insegura, cheia de “acho que”. Não suporta mentiras.",
        "Talentos: Cozinha, toca violino e faz crochê como ninguém.",
        "Segredo: Lê romances água com açúcar às escondidas.",
        "Tipo ideal: Ramiro, o Guarda Real feio."
      ]
    },
    "sebastiana": {
      "nome": "Sebastiana",
      "papel": "A Governanta Real",
      "texto": [
        "Descrição: Costas eretas, olhar crítico, óculos de correntinha.",
        "Características: Passa o dedo nos vasos procurando poeira. Despreza Ilustres mimadas que nunca tocaram numa panela. Respeita quem trabalha e não desiste."
      ]
    },
    "humberto": {
      "nome": "Humberto Macedo",
      "papel": "O Conselheiro Real",
      "texto": [
        "Descrição: Ruivo, sardento, de bigode e olhos verdes. Alto, musculoso, perfume amadeirado de sândalo e cedro.",
        "Histórico: Irmão da rainha Úrsula. Foi o rosto da Facção Real nas batalhas pelo trono. Dizem que matou o próprio pai, Octávio.",
        "Características: Galanteador: toda donzela que ele corteja fica vermelha e agradece os elogios. Por isso mesmo, ele não esquece quem não agradece. Por trás das frases prontas, quer ser levado a sério.",
        "Livro favorito: “Confissões”, de Martino Aurélio, o general que matou o pai e virou o Paladino da Alvorada. Lê e relê.",
        "Segredo: Bebe vinho de taça cheia quando ninguém está olhando."
      ],
      "retrato": "img/retratos/humberto.png"
    },
    "ursula": {
      "nome": "Úrsula",
      "papel": "A rainha",
      "texto": [
        "Descrição: Altíssima, ruiva, a mulher mais bela do reino.",
        "Histórico: Saúde frágil desde menina. Aos treze anos, percebeu sozinha que o jovem Ferdinando manipulava os conselheiros.",
        "Características: Gentil e encantadora, até alguém ameaçar o irmão."
      ]
    },
    "ferdinando": {
      "nome": "Ferdinando",
      "papel": "O rei",
      "texto": [
        "Descrição: Baixo, calmo, frio.",
        "Histórico: Coroou a si mesmo ainda adolescente.",
        "Características: Olha para as pessoas como peças de um tabuleiro. Faz planos para décadas. Raramente levanta a voz."
      ]
    },
    "paloma": {
      "nome": "Paloma Torres",
      "papel": "A rival",
      "texto": [
        "Descrição: Cabelos castanho-claros, olhos azul-acinzentados.",
        "Histórico: Empregada pessoal da rainha, primeira filha de um Arqui-ilustre. Por muito tempo, foi a favorita para se casar com Humberto. Tem uma prima casada com um Ilustre das bandas de Serra Verde.",
        "Características: Não ataca de frente: manda as subordinadas e escreve cartas."
      ]
    },
    "eusebio": {
      "nome": "Eusébio",
      "papel": "O Iluminado",
      "texto": [
        "Descrição: Pele escura, cabelos grisalhos, barba branca longa.",
        "Histórico: O Iluminado. Faz milagres sem dizer uma palavra.",
        "Características: Sagaz: descobre tudo fazendo perguntas.",
        "Apelidos: Trata Humberto por “Betinho” e a rainha por “Ursinha”."
      ]
    },
    "ramiro": {
      "nome": "Ramiro",
      "papel": "O Guarda Real",
      "texto": [
        "Descrição: Juba desgrenhada, cicatriz que atravessa a bochecha, nariz torto.",
        "Histórico: Bastardo, sem título. Salvou a vida do pai de Valéria nas batalhas pelo trono.",
        "Características: Luta sujo, mas é efetivo."
      ]
    }
  },
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
    },
    "perfume": {
      "nome": "Perfume de flor de laranjeira",
      "preco": 4,
      "texto": [
        "O mesmo cheiro do lenço de Madalena, em frasco de cristal. Carmen não soube explicar por que escolheu esse."
      ]
    }
  },
  "atributos": {
    "persuasao": {
      "nome": "Persuasão",
      "texto": "Elogios na medida certa, argumentos na hora certa. Funciona com quem gosta de ouvir o que quer."
    },
    "astucia": {
      "nome": "Sagacidade",
      "texto": "Ler as pessoas depressa e fazer a pergunta certa na hora certa."
    },
    "performance": {
      "nome": "Performance",
      "texto": "Fingir com o corpo inteiro: um enjoo, uma submissão, uma Ilustre que nunca ouviu um não."
    },
    "honestidade": {
      "nome": "Honestidade",
      "texto": "Dizer a verdade, mesmo quando custa. Funciona com quem valoriza sinceridade, como Armando."
    },
    "humor": {
      "nome": "Humor",
      "texto": "Dizer a verdade rindo. Muita gente acha que é piada, e é aí que ela passa."
    }
  },
  "moeda": {
    "singular": "beija-flor",
    "plural": "beija-flores",
    "texto": "Moedas de prata. Dá para juntar trabalhando, ou pegando o que não é seu."
  },
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
              "antes": [
                "Eu não precisava que Madalena concordasse comigo. Livre desse peso, fingir uma submissão relutante foi fácil."
              ],
              "resultado": [
                "Deixei os ombros caírem um centímetro, simulando derrota. O espelho não mentia: a expressão sisuda dela se aliviou em um sorriso largo.",
                "— Boa menina…"
              ],
              "pontos": {
                "performance": 1
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
                "Madalena apertou a escova. — Medo passa. E você está pronta sim; te treinei a vida inteira para isso.",
                "Ela me encarou pelo espelho, desconfiada. Medo era só metade da verdade, e ela sabia ler a outra metade nos meus olhos.",
                "Engoli o resto. Eu precisava que ela baixasse a guarda, não que a erguesse."
              ],
              "desvio": true,
              "pontos": {
                "honestidade": 1
              }
            }
          ],
          "quando": "7 dias antes do aniversário",
          "com": "madalena"
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
                "— De gravidez é que não é. — Ela riu alto. — Está bem, pode ir para o seu quarto. Mas, se esse tal enjoo ficar se repetindo, decidirei tudo por você."
              ],
              "pontos": {
                "performance": 1
              },
              "antes": [
                "As melhores desculpas eram aquelas que tinham um fundo de verdade. E meu estômago estava mesmo embrulhado."
              ]
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
                  "performance": 1
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
          "quando": "6 dias antes do aniversário",
          "com": "madalena"
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
          "quando": "4 dias antes do aniversário",
          "com": "armando"
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
          "quando": "4 dias antes, fim de tarde",
          "com": "armando"
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
                "Sorri para transmitir confiança, enquanto limpava o suor frio das mãos no vestido."
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
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando"
        },
        {
          "titulo": "A mãe",
          "texto": [
            "— Pode ser, mas… e quanto à sua mãe? Se ela quer tanto que você siga os passos dela, Madalena me mata se eu te ajudar."
          ],
          "pergunta": "Como tirar o medo de Madalena da cabeça dele?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Abanar a mão no ar, fazendo pouco caso: — Mata nada. Você vai levar meses para voltar. Até lá, ela já vai ter te perdoado. Quem sabe até te agradeça, por eu não estar mais aqui para testar a paciência dela.",
              "certa": true,
              "resultado": [
                "Minha voz saiu em falsete, mas a piada ficou no ar.",
                "Em vez de tranquilizado, Armando franziu o cenho."
              ],
              "pontos": {
                "humor": 1
              }
            },
            {
              "texto": "Verdade: — Ela não vai fazer nada contra você. Quem vai pagar o preço sou eu, e eu prefiro pagar longe daqui.",
              "desvio": true,
              "resultado": [
                "O rosto de Armando se fechou. — Pagar o preço? É exatamente isso que me assusta, menina. Se ela é capaz disso com a própria filha, imagine com quem ajudar a filha a fugir.",
                "Eu tinha assustado o homem em vez de acalmá-lo. Tratei de rir, como se tivesse exagerado, e abanei a mão no ar."
              ]
            },
            {
              "texto": "Mentira: — Ela nem vai saber que foi você. Vou dizer a todo mundo que fugi com um cliente.",
              "resultado": [
                "— E deixar sua mãe achar que você foi levada por qualquer um? — Armando balançou a cabeça. — Não. Isso eu não faço com ela.",
                "Ele entrou no bordel sem se despedir. Antes da meia-noite, Madalena sabia de tudo, e Gasparo dormia atravessado na minha porta."
              ]
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando"
        },
        {
          "titulo": "A pequena canção",
          "texto": [
            "— Você acha que Madalena não te ama?",
            "A pergunta direta me pegou de saia arriada. Sem saber o que ele queria ouvir, respondi com sinceridade:",
            "— Eu acho que ela ama ter uma filha, mas não a filha que tem.",
            "Armando me encarou no fundo dos olhos e meneou a cabeça.",
            "— Ela te ama, Carmen. Nas conversas que tivemos, ela sempre falou com orgulho da sua pequena canção.",
            "Envolver meu nome em conversas de cama com clientes, ainda mais com aquele apelido deplorável, era motivo de revolta."
          ],
          "pergunta": "Contrariá-lo, ou engolir a revolta?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Se ela me ama de fato, uma hora vai entender que precisei escolher meu próprio caminho. E vai perdoar tanto a mim quanto a você pelo que fizemos.",
              "certa": true,
              "antes": [
                "Mas contrariá-lo era a escolha errada."
              ],
              "resultado": [
                "— Fizemos? Você fala como se eu já tivesse aceitado."
              ],
              "pontos": {
                "performance": 1
              }
            },
            {
              "texto": "Verdade: — Orgulho? Ela me chama de pequena canção para me vender melhor. Isso não é amor, é propaganda.",
              "desvio": true,
              "resultado": [
                "Armando endureceu o queixo. — Cuidado com o que diz da sua mãe. Ela fez o que pôde, no mundo que tinha.",
                "Ele gostava dela. E eu precisava dele do meu lado, não do lado de Madalena. Engoli a revolta e tentei de novo, mais macia."
              ]
            },
            {
              "texto": "Mentira: — Você tem razão. Talvez eu devesse conversar com ela antes de qualquer coisa.",
              "resultado": [
                "Armando sorriu, aliviado. — É isso. Converse com ela. Se ela concordar, eu te levo.",
                "Eu tinha dado a ele a saída que ele procurava. Madalena nunca concordou, e na véspera do meu aniversário a loja-carruagem partiu sem mim."
              ]
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando"
        },
        {
          "titulo": "O aceite",
          "texto": [
            "Ele ainda não tinha concordado, era verdade. Mas, se fosse recusar, bastaria ter dado as costas e entrado no bordel. No fundo, a permanência dele ali era prova do aceite."
          ],
          "pergunta": "Como arrancar dele o sim?",
          "opcoes": [
            {
              "texto": "Verdade: — Você é um homem bom. Não tem opção além de me ajudar.",
              "certa": true,
              "resultado": [
                "— Não sou um homem bom — disse ele, ainda olhando nos meus olhos —, mas também não sou um homem péssimo. Então, sim, eu te ajudarei a fugir. Sairemos na véspera do seu aniversário, pela manhã."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Meia-verdade: — Ainda não aceitou, mas já está fazendo as contas de quanto vai vender comigo na boleia.",
              "desvio": true,
              "resultado": [
                "Armando riu, mas não com os olhos. — Não reduza isso a dinheiro, menina. Se fosse só dinheiro, eu já tinha ido embora.",
                "Não era o lucro que o segurava ali. Era outra coisa, e eu sabia o nome dela."
              ]
            },
            {
              "texto": "Mentira: — Já aceitou, sim. Minha mãe mesma disse que você me levaria.",
              "resultado": [
                "— Disse, é? — Armando ergueu as sobrancelhas. — Então vamos perguntar a ela juntos.",
                "Ele me pegou pelo braço e me levou para dentro. Madalena ouviu tudo, sorriu para ele e, quando ele saiu, me trancou no quarto até a loja-carruagem deixar Serra Verde."
              ]
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando"
        }
      ],
      "fecho": [
        "Armando tinha dito sim. Faltavam quatro dias para o meu aniversário, três para a fuga, e eu tinha que passar por todos eles como se nada tivesse mudado."
      ],
      "cenario": "serra-verde",
      "imagem": {
        "arquivo": "img/espelho-cor.jpg",
        "descricao": "Madalena, de corpete vermelho, arruma Carmen diante do espelho da penteadeira."
      }
    },
    {
      "titulo": "A véspera",
      "abertura": [
        "Dois dias antes do aniversário, Serra Verde acordou como em qualquer outra manhã. Só Carmen sabia que era uma das últimas."
      ],
      "cenas": [
        {
          "titulo": "A vassoura",
          "texto": [
            "Um dia antes da fuga, acordei bem cedinho para cumprir minhas obrigações. Acompanhada apenas por vassoura e pá, cantarolei todas as cantigas do meu repertório enquanto varria minuciosamente o salão, a cozinha e o lavabo.",
            "— Você parece feliz.",
            "A voz de Madalena interrompeu minha cantoria. Ela estava recostada na porta da cozinha, provavelmente me assistindo varrer por algum tempo.",
            "Demorei um segundo para reagir.",
            "— Acordou cedo por quê, mãe?",
            "— Fui resolver um negócio, mas não mude de assunto. Adoraria saber o motivo dessa felicidade toda."
          ],
          "pergunta": "Como explicar tanta alegria sem me entregar?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Na verdade, é puro nervosismo. Mas, como o povo diz: “quem canta seus males espanta”, então estou testando esse provérbio.",
              "certa": true,
              "antes": [
                "E agora? Como eu poderia me explicar? As melhores desculpas eram aquelas que tinham um fundo de verdade."
              ],
              "resultado": [
                "Madalena abriu um sorriso caloroso e se aproximou de mim.",
                "— Entendo que esteja ansiosa com a sua primeira vez, mas será uma boa experiência. Até porque você não está indo às cegas; mamãe já te ensinou tudo o que você precisa saber. Agora só falta a prática.",
                "— Eu sei, eu sei…",
                "Suspirei resignada, apoiando os braços no topo da vassoura. Uma parte minha a ressentia por ter me ensinado coisas de adulta quando pequena; outra parte era grata por ela ter me passado esses conhecimentos úteis."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Mentira: — Um cliente me deu uma gorjeta gorda ontem à noite.",
              "desvio": true,
              "resultado": [
                "— Gorjeta? — Madalena estendeu a mão aberta. — Então me mostre. Todo passarinho que entra nesta casa passa pela minha mão.",
                "Eu não tinha gorjeta nenhuma para mostrar. Ela estreitou os olhos, e eu ri, como quem confessa uma brincadeira."
              ]
            },
            {
              "texto": "Verdade: — Porque daqui a pouco tudo isso acaba.",
              "resultado": [
                "— Acaba? — Madalena desencostou da porta. — O que é que acaba, pequena canção?",
                "Gaguejei qualquer coisa sobre a minha primeira vez, mas era tarde. Ela passou o dia inteiro de olho em mim, e à noite mandou Gasparo vigiar a porta dos fundos. A loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes do aniversário, de manhã",
          "com": "madalena"
        },
        {
          "titulo": "O sortudo",
          "texto": [
            "— Mas e então? — Ela repousou a mão gentilmente no meu antebraço. — Você já escolheu quem será o sortudo?",
            "“Nenhum deles, pode ter certeza”, era o que eu queria dizer."
          ],
          "pergunta": "Dizer o que eu pensava, ou o que ela aguentava ouvir?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Ainda não. Parece que nenhum deles “merece” ser minha primeira vez.",
              "certa": true,
              "resultado": [
                "— Seu problema é valorizar demais o sexo. Depois da primeira transa, você perceberá que não tem nada de mágico nisso tudo. No fundo, somos animais iguais aos passarinhos que copulam nas árvores e os cachorros que trepam na rua. A única diferença é que montamos um no outro de portas fechadas, em vez de ao ar livre.",
                "Recuei os braços do topo e segurei a vassoura pelo cabo.",
                "— Nossa, Madalena!",
                "— Que foi? Não é nada que eu já não tenha te dito antes.",
                "— Mas não de maneira tão direta assim.",
                "Ela deu de ombros.",
                "— Eu só disse a verdade. Você confirmará depois de amanhã."
              ],
              "pontos": {
                "performance": 1
              }
            },
            {
              "texto": "Mentira: — Já escolhi, mas é segredo. A senhora vai saber na hora.",
              "desvio": true,
              "resultado": [
                "— Segredo, comigo? — Madalena riu. — Então diga um nome. Um só.",
                "Abri a boca e nenhum nome saiu. Ela riu mais alto. — Foi o que pensei.",
                "Mentira sem nome não para em pé. Encolhi os ombros e tentei de novo."
              ]
            },
            {
              "texto": "Verdade: — Nenhum deles. Não vou me deitar com ninguém, mãe.",
              "resultado": [
                "O sorriso de Madalena sumiu. — Vai, sim. Nem que eu tenha que escolher o homem e trancar a porta por fora.",
                "Desde aquela manhã, ela não me deixou sozinha nem para buscar água no poço. Na véspera do meu aniversário, a loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes do aniversário, de manhã",
          "com": "madalena"
        },
        {
          "titulo": "A escolha da mãe",
          "texto": [
            "Abaixei a cabeça e murmurei um “pode ser…”, ciente de que não adiantaria nada discutir. Madalena apoiou o indicador no meu queixo e levantou meu rosto.",
            "— Nós duas sabemos que você não escolherá ninguém. Então deixe a mamãe escolher por você.",
            "A primeira frase gelou minha espinha, porém a segunda acalmou meus nervos."
          ],
          "pergunta": "Como ganhar tempo sem levantar suspeitas?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Eu ainda tenho tempo. O combinado é só amanhã à noite.",
              "certa": true,
              "resultado": [
                "Madalena retirou a mão.",
                "— Está bem. Cumprirei a minha parte do trato, mas nada de choradeiras quando você tiver que cumprir a sua.",
                "*Pois pode esperar sentada*, pensei, mas assenti.",
                "Como se pensamentos tivessem poder, Madalena sentou-se para me assistir varrer. Continuei com meus afazeres cantarolando, como se ela nem estivesse ali."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — Pode escolher, mãe. Eu confio na senhora.",
              "desvio": true,
              "resultado": [
                "Madalena estreitou os olhos. — Desde quando você confia em mim sem discutir?",
                "Docilidade demais era tão suspeita quanto rebeldia. Apertei o cabo da vassoura e emendei, com o tom de sempre:"
              ]
            },
            {
              "texto": "Verdade: — Não. Quem escolhe sou eu, ou não vai ser ninguém.",
              "resultado": [
                "— Então vai ser quem eu mandar. E hoje mesmo.",
                "Ela chamou Gasparo antes do almoço. Daquele dia em diante, ele passou a me seguir até a porta do lavabo. Na véspera do meu aniversário, a loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes do aniversário, de manhã",
          "com": "madalena"
        },
        {
          "titulo": "A chegada",
          "desbloqueia": [
            "jaime"
          ],
          "texto": [
            "Uma hora a noite chegou, e com ela meus “pretendentes”. Armando aguardava Madalena no sofá, batendo o pé no chão, quando a carruagem dos Barbosa parou em frente ao bordel.",
            "Meu estômago revirou. Por mais que Madalena privilegiasse Armando, ele não se comparava a um Ilustre.",
            "Jaime subiu os degraus com os guardas e sentou-se ao lado de Armando, de pernas bem abertas. Atrás dele vinha o filho, a imagem cuspida e escarrada do pai, sem saber se admirava o teto ou as paredes.",
            "— Sente-se aqui, Alexandro. A espera é chata, mas valerá a pena.",
            "Um Ilustre trazendo o filho ao bordel tão perto do meu aniversário só podia significar uma coisa: Madalena tinha dedo nisso."
          ],
          "pergunta": "Ficar ali, à vista de todos, ou sumir antes que alguém lesse meu rosto?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Com licença, vou buscar mais vinho na cozinha.",
              "certa": true,
              "antes": [
                "Suei frio. Precisava sair dali antes que alguém lesse no meu rosto o que eu estava pensando."
              ],
              "resultado": [
                "Na cozinha, bebi um copo d’água em goles apressados, abanando o pescoço, inspirando fundo e expirando devagar. Não era hora de me desesperar.",
                "— Mada!",
                "— Jaime!",
                "Coloquei a cabeça para fora da porta. Madalena caminhava rumo ao Ilustre, que a esperava de braços abertos. Enquanto ela era envolvida pelo abraço de Jaime, o mascate saiu pisando duro, como se realmente nutrisse a esperança de que o resultado fosse diferente.",
                "*Homens são tão estúpidos…*, pensei, limpando uma lágrima besta que escapou dos meus olhos. Eu não tinha tempo a perder sofrendo pelos outros; minha situação acabava de piorar.",
                "Não demorou muito para que a voz de Madalena me chamasse. Tive que me apresentar para o abate."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Verdade: Ir até Armando e sussurrar: — Vá embora antes que ela desça. Ela vai escolher o Ilustre, e eu não quero te ver humilhado.",
              "desvio": true,
              "resultado": [
                "Armando nem olhou para mim. — Se eu sair agora, aí é que vão rir de mim.",
                "Ao lado dele, Jaime ergueu uma sobrancelha. — Segredinhos com o mascate, menina?",
                "— Só perguntando se ele queria mais vinho — ri, alto demais. Melhor sumir dali antes que alguém juntasse as peças."
              ]
            },
            {
              "texto": "Mentira: — Senhor Jaime, minha mãe está indisposta hoje. Talvez seja melhor voltar amanhã.",
              "resultado": [
                "— Indisposta? A Mada? — Jaime gargalhou e encheu os pulmões. — MADA! Desce, que sua filha está dizendo que você morreu!",
                "Madalena desceu radiante e me lançou um olhar que valia mais que um tapa. Mais tarde, no corredor, sibilou: — Mentir para um Ilustre, na minha casa?",
                "Daquela noite em diante, Gasparo não saiu mais da minha porta. Na véspera do meu aniversário, a loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "jaime"
        },
        {
          "titulo": "A fruta madura",
          "texto": [
            "Sem querer dar o braço a torcer, fiz-me de desentendida.",
            "— O que foi?",
            "— Seu pretendente está aqui.",
            "Ela virou o rosto e acenou para os clientes Ilustres, que devolveram o gesto.",
            "— Meu prazo ainda não acabou — murmurei, mantendo um falso sorriso. — O combinado era até amanhã à noite.",
            "— Sei disso — respondeu ela, tão atriz quanto eu. — Hoje de manhã, mandei uma carta sugerindo que ele trouxesse o menino no seu aniversário. Mas Jaime gostou tanto da ideia que veio colher a fruta antes de ficar madura."
          ],
          "pergunta": "Como ganhar mais um dia?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Não estou pronta, mãe. Diga que estou com o fluxo, por favor. Peça para voltar amanhã.",
              "certa": true,
              "antes": [
                "Minha vontade era de espernear, porém eu estava lidando com o ganha-pão de todas ali. Eu não podia simplesmente me recusar a cumprir com o serviço."
              ],
              "resultado": [
                "— Para de frescura, Carmen. Que diferença faz um dia só?",
                "*Toda diferença do mundo*, queria responder, mas não podia. A demora causou suspeitas em Jaime, que se aproximou.",
                "— Algum problema, Mada?",
                "— Nenhum, só estou acertando os últimos detalhes com minha filha. Quero que essa seja uma noite especial para o seu menino.",
                "— Menino, não. Alexandro está prestes a virar homem!",
                "Jaime gargalhou bem alto, e vários clientes deram tapinhas nas costas de Alexandro, que parecia verde de tão nervoso. Madalena mandou os dois se adiantarem: o quarto de Carmen ficava no final do corredor, à esquerda."
              ],
              "pontos": {
                "performance": 1
              }
            },
            {
              "texto": "Verdade: — Eu não quero, mãe. Não com ele, não hoje.",
              "desvio": true,
              "resultado": [
                "O sorriso de Madalena não se mexeu um milímetro; só a voz endureceu. — Fala baixo. Aqui ninguém quer nada. A gente trabalha.",
                "Os clientes olhavam. Recusar ali, na frente de todo mundo, era mexer com o ganha-pão da casa inteira. Engoli o *não quero* e procurei uma desculpa."
              ]
            },
            {
              "texto": "Mentira: Fingir um desmaio ali mesmo, no meio do salão.",
              "resultado": [
                "Caí com toda a graça que consegui. Ouvi gritinhos, cadeiras arrastando, e então a mão de Madalena estalou de leve no meu rosto.",
                "— Levanta. Todo mundo viu que você caiu de bunda primeiro.",
                "Jaime riu até tossir. Madalena não riu. Ela conhecia aquele truque porque tinha sido ela quem me ensinou, e a partir dali não tirou mais os olhos de mim. A loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "madalena"
        },
        {
          "titulo": "Os netinhos",
          "texto": [
            "— Por favor, mãe. Minha primeira vez não pode ser com ele.",
            "— Não só pode como vai. E, aliás, você deveria estar me agradecendo por isso. Estou dando exatamente o que você me pediu: uma chance de se deitar com um homem só pelo resto da vida.",
            "— Você quer que eu seja concubina daquilo lá?",
            "— Não só isso, mas quero também que vocês me deem vários netinhos. Essas Ilustres têm mil e um empregados, e você pode viver de madame. Alexandro ainda é muito novinho para ter noiva. Faça ele se apaixonar por você bem antes da hora, e, mesmo que se case com uma Ilustre por obrigação, você continuará a viver como a preferida.",
            "Fiquei sem palavras. Por mais insano que soasse, eu não conseguia enxergar nenhuma falha na lógica dela. O único ponto faltante seria o amor. Mas será que esse sentimento não poderia ser comprado?",
            "— Filha. — Madalena apertou gentilmente o meu ombro. — Por uma única vez na vida, escute a sua mãe. Tenho certeza de que dará tudo certo. Você só precisa me ouvir."
          ],
          "pergunta": "Bater de frente com ela, ou deixar que achasse que tinha vencido?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Assentir, embora hesitante. — Está bem, mãe.",
              "certa": true,
              "resultado": [
                "— Boa menina… — Ela acariciou minha bochecha com a ponta dos dedos. — Você é linda demais; tenho certeza de que me dará netinhos belíssimos. Claro que vou fazê-los me chamarem de titia, mas serei uma boa avó para eles.",
                "Uma família normal: isso era tudo o que eu queria ter tido na infância. Agora era tarde demais para mim, mas eu poderia proporcionar isso aos meus filhos. Só precisava sacrificar minha escolha de marido.",
                "Forçar um sorriso não foi tão difícil quanto eu esperava. Madalena me guiou pelo corredor até o quarto dela e, antes de abrir a porta, sorriu.",
                "— Tome as rédeas de tudo. Você sabe o que fazer.",
                "Ela abriu o quarto, revelando a figura obesa de Jaime nua do tronco para cima, ocupando grande parte da cama, e bateu a porta rápido. Tremeliquei o pescoço e segui rumo ao meu destino, tentando apagar a imagem da memória."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — Já pensei em tudo isso, mãe. Esse menino vai comer na minha mão.",
              "desvio": true,
              "resultado": [
                "Madalena riu pelo nariz. — Não precisa exagerar, pequena canção. Ninguém está pedindo que você goste. Só que não faça cena.",
                "Eu tinha passado do ponto. Baixei os olhos e respondi do jeito que ela esperava."
              ]
            },
            {
              "texto": "Verdade: — Não. Eu não vou ser concubina de ninguém. Nem dele, nem de Ilustre nenhum.",
              "resultado": [
                "Madalena tirou a mão do meu ombro. — Então você vai ser o que eu mandar.",
                "Ela me levou pelo braço até o quarto, me empurrou para dentro com Alexandro e trancou a porta por fora. Só abriu na manhã seguinte, quando a loja de Armando já ia longe."
              ]
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "madalena"
        },
        {
          "titulo": "O pretendente",
          "desbloqueia": [
            "alexandro"
          ],
          "texto": [
            "Pelo corredor, perguntei a mim mesma o que eu queria e, sendo sincera, já não sabia a resposta. Parte de mim ainda desejava seguir com o plano, ser livre de verdade. Mas e se Armando não aparecesse? E se simplesmente me deixasse para trás?",
            "Diante de tantas incertezas, deixei que a vida decidisse por mim.",
            "No quarto, Alexandro estava sentado na beira da cama, felizmente vestido. Não tinha coragem de me encarar nos olhos.",
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
          "quando": "2 dias antes, à noite",
          "com": "alexandro"
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
                "A caixinha ficava na segunda gaveta, embaixo das meias, como sempre. Contei as moedas no escuro e enfiei a bolsinha no decote."
              ],
              "pontos": {
                "astucia": 1,
                "dinheiro": 4
              },
              "antes": [
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
                "Estava pendurado no espelho da penteadeira, onde sempre esteve. Cheirava a ela: talco, vinho e flor de laranjeira.",
                "Dobrei o lenço e o guardei junto ao peito."
              ],
              "antes": [
                "O lenço não valia uma andorinha. Mas, se eu nunca mais ia ver Madalena, que pelo menos levasse a voz dela comigo."
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
                "humor": 1
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
          "quando": "Véspera do aniversário, amanhecer",
          "com": {
            "nome": "Os guardas"
          }
        }
      ],
      "fecho": [
        "No horizonte, o sol nascia e tingia o céu de dourado. Desde pequena, eu me imaginava uma princesa resgatada por um príncipe num cavalo branco.",
        "Nem nos meus dias mais criativos imaginei que sairia de Serra Verde numa loja itinerante, puxada por burros e conduzida por um cinquentão. Mas eu não podia reclamar."
      ],
      "cenario": "serra-verde",
      "metadeDe": "Serra Verde"
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
          ],
          "com": {
            "nome": "As moças da feira"
          }
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
                "humor": 1
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
          ],
          "com": {
            "nome": "A nariguda"
          }
        },
        {
          "titulo": "A cantoria",
          "texto": [
            "Na terceira vila, a praça estava cheia, mas ninguém olhava para a loja. Nem para mim, empoleirada na boleia feito manequim.",
            "— Manequim parado ninguém vê — disse Armando, coçando a barba. — Você não cantarolava o tempo todo lá em Serra Verde? Canta alguma coisa. Gente vai para onde tem música.",
            "Eu cantava, sim. Sozinha, no quarto, de porta fechada."
          ],
          "pergunta": "Cantar ali, na frente da praça inteira?",
          "opcoes": [
            {
              "texto": "Virar de costas para a praça, fechar os olhos e cantar baixinho a canção de ninar de Madalena.",
              "certa": true,
              "pontos": {
                "performance": 1
              },
              "resultado": [
                "Comecei num fio de voz, de costas para todo mundo, como se ainda estivesse no meu quarto.",
                "Na segunda estrofe, ouvi passos. Na terceira, cochichos. Quando abri os olhos e me virei, havia uma roda de mulheres em volta da loja, e duas já tinham um xale na mão.",
                "— Viu? — disse Armando, embrulhando as compras. — Amanhã, de frente."
              ]
            },
            {
              "texto": "Recusar: — Eu sou manequim, Armando. Não sou cantora.",
              "desvio": true,
              "resultado": [
                "— E eu sou mascate, não sou padre, e mesmo assim rezo para vender alguma coisa — resmungou ele.",
                "A praça continuava passando reto. Engoli a vergonha. Se era para ser isca, que fosse uma isca que fizesse barulho."
              ]
            },
            {
              "texto": "Cantar e passar o chapéu, pedindo uma moeda a cada mulher que parasse para ouvir.",
              "resultado": [
                "— Cantora de praça, cobrando das senhoras? Isso tem outro nome — disse uma delas, alto o bastante para a vila inteira ouvir.",
                "A palavra correu a praça mais depressa que a minha voz. Antes do almoço, o guarda pediu que a loja seguisse viagem. Na vila seguinte, Armando me deu algumas andorinhas e uma carona de volta para o sul."
              ]
            }
          ],
          "com": "armando"
        },
        {
          "titulo": "A fogueira",
          "texto": [
            "Na última noite de estrada, acampamos numa clareira. Armando acendeu a fogueira; servi pão dormido, vinho para ele e suco de uva para mim.",
            "— Você nunca me disse por que não bebe.",
            "— É um motivo meio bobo. Álcool resseca a voz. E eu sempre gostei de cantar.",
            "— Então cante alguma coisa para mim."
          ],
          "pergunta": "O que eu cantaria para ele?",
          "opcoes": [
            {
              "texto": "A canção de ninar que Madalena cantava para ela: “Sob a luz do luar”.",
              "certa": true,
              "resultado": [
                "“Meu amor se foi / Mas jurou voltar / Na calada da noite / Sob a luz do luar…”",
                "Terminei de olhos fechados. Nada de aplausos. Armando encarava as chamas em silêncio e parecia limpar um olho que eu não conseguia enxergar.",
                "— Você pode cantar de novo?",
                "Cantei. Depois, ao erguer o copo, vi meu reflexo no suco escuro, iluminado pelo fogo, e entendi o que havia de familiar no perfil dele. Larguei o pão e toquei meu nariz."
              ],
              "pontos": {
                "performance": 1
              }
            },
            {
              "texto": "Uma das cantigas obscenas que aprendeu no bordel, para fazê-lo rir.",
              "resultado": [
                "Armando, que nunca dizia um palavrão na minha frente, ficou vermelho até as orelhas e foi dormir mais cedo.",
                "Não foi essa a noite que Carmen viveu no livro. Sem a canção da mãe, ela nunca teria reparado no nariz dele."
              ]
            },
            {
              "texto": "Recusar: ela só canta quando ninguém está olhando.",
              "resultado": [
                "A fogueira estalou em silêncio. Armando não insistiu; só ficou olhando as chamas, com cara de quem já tinha ouvido muitos nãos na vida.",
                "Foi essa cara que me venceu. — Está bem. Uma só. — E fechei os olhos."
              ],
              "desvio": true
            },
            {
              "texto": "Tirar o lenço de Madalena da bolsa e cantar a canção de ninar segurando-o.",
              "certa": true,
              "requer": "lenco",
              "resultado": [
                "“Meu amor se foi / Mas jurou voltar / Na calada da noite / Sob a luz do luar…”",
                "Terminei de olhos fechados, o lenço apertado entre os dedos. Quando os abri, Armando não olhava para as chamas. Olhava para o lenço.",
                "— Onde você arrumou isso? — Era da minha mãe. — Ele engoliu em seco e não perguntou mais nada.",
                "Depois, ao erguer o copo, vi meu reflexo no suco escuro, iluminado pelo fogo, e entendi o que havia de familiar no perfil dele. Larguei o pão e toquei meu nariz."
              ]
            }
          ],
          "com": "armando"
        }
      ],
      "fecho": [
        "Juntos, viajamos de vilarejos a cidades maiores, coletando mais moedas do que cobradores de impostos. Na manhã seguinte à fogueira, avistamos Pacentro."
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
                  "persuasao": 2
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
          ],
          "com": "isolina"
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
              "texto": "Verdade: Explicar, com jeitinho, que um brinco de franja prateado valorizaria muito mais o rosto dela.",
              "certa": true,
              "resultado": [
                "Apliquei minha tática de cabo a rabo: críticas construtivas entre elogios, e a solução de bandeja numa simples comprinha.",
                "O rosto rechonchudo se contorceu numa carranca. — Mudei de ideia. Quem sabe eu volte outro dia.",
                "— Você estava certíssima — disse Isolina, recém-desperta. — Mas não somos pagas para estar certas; somos pagas para vender o que a cliente quer.",
                "Depois desse puxão de orelha, aprendi a lição."
              ],
              "pontos": {
                "dinheiro": 2
              }
            },
            {
              "texto": "Meia-verdade: Entregar o brinco de bolinha dourado com um sorriso: — É um clássico. Nunca sai de moda.",
              "resultado": [
                "Ela saiu satisfeita, prometendo voltar. Sensato. Sensato demais para mim.",
                "Quando a cliente seguinte pediu um brinco que não combinava com nada no rosto dela, não aguentei e abri a boca."
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
          ],
          "com": {
            "nome": "A cliente"
          }
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
          ],
          "com": "rosa"
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
                "— No domingo, ao meio-dia.",
                "Dei tchauzinhos para ela. Seis dias: tempo para os ajustes finais do plano e para a Ilustre esquecer os detalhes do meu rosto."
              ],
              "pontos": {
                "performance": 1,
                "dinheiro": 1
              },
              "antes": [
                "Eu precisava de uma resposta sincera. Colocar a Resplandecente no meio seria golpe baixo. Mas funcionaria."
              ]
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
          ],
          "com": "rosa"
        },
        {
          "titulo": "A taverna",
          "texto": [
            "Para juntar uns beija-flores a mais antes do domingo, passei a cantar à noite na taverna da esquina. O dono pagava em sopa e moedas; os fregueses, em silêncio, o que já era muito.",
            "Naquela noite, terminei a canção de ninar de Madalena e um homem de casaca cor de vinho se levantou da mesa do canto. Pôs um cartão no balcão, ao lado do meu copo de água.",
            "— Teatro Aurora, na Capital — disse ele. — Procuro uma voz assim há dois anos. A vaga é sua, se partir comigo na segunda-feira."
          ],
          "pergunta": "Um palco na Capital. E o Palácio?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Agradeço, senhor. Mas já tenho outro palco em vista.",
              "certa": true,
              "pontos": {
                "performance": 1,
                "dinheiro": 1
              },
              "resultado": [
                "Ele ergueu as sobrancelhas e deixou o cartão onde estava. — Se o outro palco não der certo, a senhorita sabe onde me achar.",
                "Guardei o cartão no fundo da bolsa. Um Ilustre não se conquista cantando em taverna. Mas era bom saber que existia uma porta dos fundos."
              ]
            },
            {
              "texto": "Mentira: — Eu? O senhor me confundiu com outra.",
              "desvio": true,
              "resultado": [
                "— Confundi? A senhorita acabou de cantar para trinta pessoas. — Ele riu e não tirou o cartão do balcão.",
                "Mentir para quem tinha acabado de me ouvir não ia colar. Respirei fundo e respondi como gente grande."
              ]
            },
            {
              "texto": "Verdade: — Não posso. No domingo vou entrar no Palácio Real como Ilustre.",
              "resultado": [
                "O homem riu tão alto que a taverna inteira virou para nós. — Uma cantora de taverna, Ilustre? Essa eu conto no teatro!",
                "Contou. E não só no teatro. Até sexta, metade de Pacentro sabia da cantora que ia se fingir de Ilustre. No domingo, os Guardas Reais tinham a minha descrição."
              ]
            },
            {
              "texto": "Aceitar o cartão e partir para a Capital na segunda-feira.",
              "final": "cantora",
              "requerAtributo": {
                "performance": 3
              },
              "resultado": [
                "Peguei o cartão. Minhas mãos tremiam. Mas a voz, quando eu disse “aceito”, saiu firme como nunca."
              ]
            }
          ],
          "com": {
            "nome": "O empresário"
          }
        },
        {
          "titulo": "A despedida",
          "texto": [
            "Na véspera do grande dia, Armando apareceu à minha porta todo arrumado e me entregou um saquinho de couro.",
            "— Você tem trabalhado duro e economizado bastante. Aqui está o seu dinheiro.",
            "Ele estava indo embora. Avancei e o abracei forte. Apoiei o rosto no peito dele, inspirando o cheiro de loção pós-barba. Não havia segundas intenções naquele abraço; eu me sentia segura, como imaginava que uma filha se sentiria nos braços do pai.",
            "Desde a noite da fogueira, eu guardava uma suspeita a sete chaves. Agora não restavam dúvidas."
          ],
          "pergunta": "Dizer em voz alta, ou guardar para mim?",
          "opcoes": [
            {
              "texto": "Verdade: Erguer o queixo: — Obrigada por tudo, pai.",
              "certa": true,
              "resultado": [
                "Ele empalideceu, e os braços dele afrouxaram.",
                "— Está tudo bem — continuei. — Não exigirei que você fique, nem te cobrarei nada por ser meu pai.",
                "— Eu não mereço ser chamado de pai. Eu não tirei sua mãe do bordel.",
                "— Quando eu mais precisava, você esteve lá por mim. É por isso que eu te perdoo, pai.",
                "Ele me esmagou num abraço, repetindo “obrigado” uma centena de vezes."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Meia-verdade: — Boa viagem. — E guardar a suspeita só para mim.",
              "resultado": [
                "— Boa viagem — eu disse. Ele assentiu e se virou para a porta.",
                "As costas dele, o andar, o nariz de perfil contra a luz do corredor. Se ele saísse agora, eu passaria a vida inteira me perguntando. — Armando. Espera."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: — Não precisa voltar para me ver. Eu nunca precisei de ninguém.",
              "resultado": [
                "Armando saiu de cabeça baixa. Cedo demais: no livro, Carmen primeiro o perdoou. A raiva só veio quando ele contou por que nunca voltou."
              ]
            }
          ],
          "com": "armando"
        },
        {
          "titulo": "A verdade de Armando",
          "texto": [
            "— Por que você não cumpriu sua promessa para Madalena? — perguntei, quando ele já segurava a maçaneta.",
            "Ele falou do sonho de abrir uma loja em Pacentro, do roubo, da falência do reino. E então admitiu o verdadeiro motivo, em um murmúrio:",
            "— Você faz ideia de como é torturante saber que centenas de outros homens dormiram com sua mulher? Que usaram ela como se fosse… como se fosse…",
            "— Uma puta.",
            "— … Uma puta.",
            "Ele ergueu para mim olhos esperançosos, em busca de compreensão."
          ],
          "pergunta": "Dar a ele o perdão que buscava?",
          "opcoes": [
            {
              "texto": "Verdade: — Você tem razão sobre o que me disse naquela noite. Você não é um homem bom.",
              "certa": true,
              "resultado": [
                "As pernas de Armando bambearam. Ele caiu de joelhos, chorando, implorando perdão.",
                "— Agradeço por tudo o que me fez nas últimas semanas. Agora vá embora, que eu já estou atrasada.",
                "— Antes de eu partir, só me diga: você ainda me considera como pai?",
                "— Adeus, Armando.",
                "— … Adeus, filha.",
                "Foi assim que me despedi dele. Decidida a nunca mais vê-lo."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: — Eu entendo, pai. Também teria vergonha.",
              "resultado": [
                "Carmen jamais diria isso. Entre o pai e a mãe, ela ficou do lado de Madalena. E foi essa briga que, meses depois, mandou Armando de volta a Serra Verde."
              ]
            },
            {
              "texto": "Meia-verdade: — Talvez ela ainda espere por você. Volte para Serra Verde e peça a mão dela.",
              "resultado": [
                "— Pedir a mão dela? — Armando riu sem alegria. — Depois de dezoito anos e de todos aqueles homens?",
                "E ali estava de novo, no rosto dele, o nojo. Não de si mesmo. Dela. De nós duas. A raiva subiu antes que eu pudesse engolir."
              ],
              "desvio": true
            }
          ],
          "com": "armando"
        }
      ],
      "fecho": [
        "Cheguei à joalheria atrasada, pingando de suor, e varri a loja enxugando lágrimas tímidas.",
        "Por que ele não mentiu para mim? Tinha sido bom imaginar que meu pai fosse uma boa pessoa."
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
            "valor": 11,
            "valorItem": 5,
            "texto": [
              "Abri o saquinho de couro que Armando me deu na despedida: a minha metade dos lucros da estrada, e um pouco mais."
            ],
            "textoItem": [
              "Abri o saquinho de couro que Armando me deu na despedida. Bem mais leve do que eu esperava, com um bilhete: “Eu vi a bolsinha de veludo na estrada. Conheço as coisas da sua mãe. A parte dela, eu devolvo a ela.”"
            ]
          },
          "produtos": [
            "luvas",
            "leque",
            "colar",
            "perfume"
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
                "performance": 1
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
          ],
          "com": {
            "nome": "O cocheiro"
          }
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
          ],
          "com": {
            "nome": "O cocheiro"
          }
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
          ],
          "com": "empregadas"
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
                "performance": 1
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
                  "astucia": 3
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
          ],
          "com": "empregadas"
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
                "A menina me analisou por alguns instantes. Então olhou em volta, como se de repente percebesse quão estranha estava parecendo para as outras.",
                "— Perdão, acho que te confundi.",
                "E foi se posicionar bem longe de mim."
              ],
              "pontos": {
                "humor": 1
              },
              "antes": [
                "Uma plebeia gaguejaria e baixaria os olhos. Uma Ilustre responderia com a arrogância de quem nunca é esquecida."
              ]
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
              "texto": "Verdade: Rir: — Talvez da joalheria de Pacentro. Eu vendia brincos lá, sabia?",
              "resultado": [
                "A menina não riu. — Pacentro… — Os olhos dela se arregalaram. — A vendedora da joalheria! Empregadas! Essa daqui é uma plebeia!"
              ],
              "sucesso": {
                "requerAtributo": {
                  "humor": 2
                },
                "resultado": [
                  "A menina de rosa me encarou. Depois soltou uma gargalhada aguda. — Vendedora! Você? Com esse vestido?",
                  "As outras riram junto, sem saber de quê.",
                  "— Perdão, acho que te confundi — disse ela, ainda rindo, e foi se posicionar bem longe de mim.",
                  "Ninguém acredita numa verdade dita rindo."
                ]
              }
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
          ],
          "com": "rosa"
        }
      ],
      "fecho": [
        "A entrada no palácio estava garantida.",
        "Agora, só faltava passar na avaliação."
      ],
      "cenario": "palacio"
    },
    {
      "titulo": "Empregada Real",
      "abertura": [
        "Décima segunda colocada, Vivian Barbosa. Uma plebeia de Serra Verde agora servia no Palácio Real."
      ],
      "cenas": [
        {
          "titulo": "A governanta",
          "desbloqueia": [
            "valeria",
            "sebastiana"
          ],
          "texto": [
            "Aprovada! Fomos dispensadas até o dia seguinte. Eu era a última da fila quando senti o olhar de Sebastiana pousar em mim.",
            "— Você, fique onde está. Eu conheço seu tipo muito bem, menina. Todo ano aparecem aqui Ilustres mimadas como você, que nunca tocaram em uma panela. Você desistirá na primeira semana. Aliás, se fosse por mim, você nem teria sido aprovada."
          ],
          "pergunta": "Baixar a cabeça, ou provar que ela estava errada?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Respeitosamente, a senhora está enganada sobre mim. A Vivian de antigamente até podia ser assim, mas a de agora está determinada a mudar. Não desistirei. Custe o que custar.",
              "certa": true,
              "resultado": [
                "— É o que veremos.",
                "Ao me virar, sorri. Mas uma frase dela não saía da minha cabeça: “Se fosse por mim, você nem teria sido aprovada.” A decisão não deveria ser só dela?",
                "Só havia uma explicação: alguém queria que eu entrasse no Palácio Real."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — A senhora sabe com quem está falando? Sou uma Barbosa.",
              "resultado": [
                "— Sei: com uma empregada. Por enquanto — disse Sebastiana, sem piscar.",
                "Arrogância não ia funcionar com uma mulher que já tinha domado cem Ilustres mimadas. Baixei o tom, mas não os olhos."
              ],
              "desvio": true
            },
            {
              "texto": "Verdade: — A senhora tem razão: eu não sou o que pareço.",
              "resultado": [
                "Sebastiana estreitou os olhos. — Então é o quê?",
                "Não soube responder. Meu nome foi riscado da lista antes do primeiro turno."
              ]
            }
          ],
          "com": "sebastiana"
        },
        {
          "titulo": "A biblioteca",
          "texto": [
            "Dias depois, eu espanava a estante de cinco andares da Biblioteca Real, no alto da escada deslizante. Valéria tinha me avisado: o Conselheiro Real estava vindo para cá.",
            "— Nunca pensei que fosse tão perigoso ser uma Empregada Real — disse uma voz masculina, discreta a ponto de quase ser sedutora, atrás de mim. — Cair daí seria uma queda e tanto."
          ],
          "pergunta": "Responder de costas mesmo. Mas com que tom?",
          "opcoes": [
            {
              "texto": "Mentira: — Se eu caísse, tenho certeza de que Vossa Arqui-ilustreza seria capaz de me segurar.",
              "certa": true,
              "desbloqueia": [
                "humberto"
              ],
              "resultado": [
                "— Como sabe quem sou?",
                "Droga. Eu estava de costas e nunca tinha ouvido a voz dele.",
                "— Não sabia. Só usei o título mais alto que eu conhecia; a governanta diz que é melhor pecar pelo excesso de formalidades.",
                "Desci e me virei: peitoral marcando a camisa, cabelos ruivos, olhos verdes penetrantes. Humberto Macedo. E foi ele, descobri, quem garantiu minha aprovação. “Assim que te vislumbrei por uma janela, decidi que você entraria no palácio.”"
              ],
              "pontos": {
                "humor": 1
              }
            },
            {
              "texto": "Verdade: — Pode deixar, senhor, tomo cuidado.",
              "resultado": [
                "Ele seguiu até a estante sem dizer mais nada. Para ele, eu era mais uma empregada qualquer.",
                "Não. Eu não tinha cortado o cabelo e mentido para o reino inteiro para ser qualquer uma. Antes que ele chegasse à estante, falei de novo, ainda de costas."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Perdão, senhor, eu já estava descendo. — E descer depressa.",
              "resultado": [
                "Desci tão depressa que errei um degrau. O conselheiro me segurou, sim, e riu. Uma desastrada, não uma mulher memorável."
              ]
            }
          ],
          "com": {
            "nome": "Uma voz",
            "inicial": "?"
          }
        },
        {
          "titulo": "Os elogios",
          "imagem": {
            "arquivo": "img/biblioteca-cor.jpg",
            "descricao": "Na biblioteca do palácio, Humberto beija a mão de Carmen, vestida de empregada."
          },
          "texto": [
            "Humberto beijou minha mão e inspirou meu perfume.",
            "— Se à distância você já era deslumbrante, de perto é a mais linda que há. É difícil não me perder nos mares dos seus olhos, e seus cabelos dourados são mais valiosos do que qualquer ouro que me pertence.",
            "Toda donzela cortejada por ele ficava vermelha e agradecia."
          ],
          "pergunta": "Eu seria só mais uma?",
          "opcoes": [
            {
              "texto": "Verdade: Retirar a mão: — Seus elogios tocaram meu coração. Talvez você tenha sido apenas o milésimo homem a elogiar meus olhos e cabelos. Uma verdadeira raridade.",
              "certa": true,
              "resultado": [
                "Ele ficou sem reação. Para equilibrar a mordida com um sopro, quando ele se inclinou para a estante, eu disse:",
                "— A vida de uma mulher também melhora quando há figuras belas ao redor. E, se me permite dizer, seu traseiro é uma bela figura.",
                "Humberto deixou o livro cair, vermelho do pescoço à testa."
              ],
              "pontos": {
                "humor": 1
              }
            },
            {
              "texto": "Mentira: Corar e agradecer: — Vossa Arqui-ilustreza é gentil demais.",
              "resultado": [
                "Ele sorriu, satisfeito, com a cara de quem já tinha ouvido aquele agradecimento mil vezes.",
                "Igualzinha a todas as outras. Antes que ele soltasse a minha mão, eu mesma a puxei."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Se pensa assim, devia me pedir em casamento.",
              "resultado": [
                "Humberto riu alto, achando ótima a piada. A partir dali, eu era a empregada engraçadinha. Ninguém se casa com a engraçadinha."
              ]
            },
            {
              "texto": "Deixar que ele sinta o perfume e responder: — É flor de laranjeira. Mas não se acostume: hoje é só a minha mão.",
              "requer": "perfume",
              "certa": true,
              "resultado": [
                "— Flor de laranjeira — repetiu ele, como quem guarda um segredo.",
                "Retirei a mão devagar. Ele ficou olhando para ela, e depois para mim, como se fosse a primeira vez que alguém lhe negava alguma coisa com um sorriso."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "O livro caído",
          "texto": [
            "— Qual o seu nome, senhorita?",
            "— Vivian Barbosa.",
            "— Muito bem, Vivian. Poderia, por gentileza, ajudar-me a pegar este livro? Tenho que planejar o momento perfeito para nossas mãos se tocarem, como nos romances clássicos.",
            "O livro no chão era “Confissões”, de Martino Aurélio."
          ],
          "pergunta": "Fazer o papel da mocinha do romance, ou mudar o roteiro dele?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Não dessa vez. Um homem tão forte como você pode usar alguns desses músculos para pegar um simples livro.",
              "certa": true,
              "resultado": [
                "— Quem sabe em uma próxima ocasião, então.",
                "Fiz uma reverência e saí, guardando o título na memória. Da próxima vez que nos encontrássemos, eu teria lido aquela obra quantas vezes fosse preciso."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Verdade: — Eu pego. É o meu trabalho. — E abaixar junto com ele.",
              "resultado": [
                "Abaixei. Nossas mãos quase se tocaram, como ele queria. Fácil demais.",
                "Puxei a mão no último instante e me levantei, deixando o livro no chão entre nós."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: — Nem hoje, nem nunca.",
              "resultado": [
                "O sorriso dele morreu. Eu tinha mordido sem assoprar."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A pergunta de Valéria",
          "texto": [
            "No corredor, Valéria me puxou pelo braço, escandalizada. Expliquei a tática do morde e assopra.",
            "— Vivian, você é uma gênia! Mas como é que você aprendeu isso tudo?"
          ],
          "pergunta": "A verdade inteira estava fora de questão. Quanto dela eu podia contar?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Contar que já fugiu de casa algumas vezes, frequentou tavernas e conversou com mulheres da vida. Aprendeu com elas.",
              "certa": true,
              "resultado": [
                "Valéria arquejou. — Você não tem medo dessas pessoas?",
                "— Pobreza de recursos não é o mesmo que pobreza de caráter.",
                "Ela engoliu mais essa camada da mentira. E pediu que eu a ajudasse a arranjar um homem também. Ter uma amiga não era tão ruim assim."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Verdade: — Com a minha mãe.",
              "resultado": [
                "— A senhora Barbosa? Ensinando isso à filha? — Valéria me olhou como se eu tivesse duas cabeças. A pergunta seguinte eu não soube responder."
              ]
            },
            {
              "texto": "Mentira: — Nos romances que eu leio.",
              "resultado": [
                "Os olhos de Valéria brilharam. — Quais? — Eu não sabia o nome de um único romance. Ela sabia todos.",
                "— Bobagem, Val. Romance nenhum ensina isso. — Respirei fundo. Se era para mentir, que fosse com um fundo de verdade."
              ],
              "desvio": true
            }
          ],
          "com": "valeria"
        },
        {
          "titulo": "O convite",
          "texto": [
            "Semanas de presentes depois, Humberto me abordou com um convite.",
            "— Vi que você tem um dos meus livros favoritos na sua mesa de cabeceira. Pensei em fazermos um piquenique no seu próximo dia livre, para conversarmos a fundo sobre cada confissão de Martino Aurélio.",
            "Eu ainda nem tinha aberto o livro."
          ],
          "pergunta": "Aceitar, recusar, ou ganhar tempo?",
          "opcoes": [
            {
              "texto": "Mentira: — Para que fique em nossas memórias, um primeiro encontro deve ser mais emocionante do que isso. Talvez seja melhor guardar a discussão para um segundo ou terceiro encontro.",
              "certa": true,
              "resultado": [
                "Ele abriu um sorriso atrevido. — Se emoção é o que quer, emoção é o que terá.",
                "Naquela noite, abri “Confissões”. Virei a madrugada sem perceber."
              ],
              "pontos": {
                "persuasao": 1
              },
              "antes": [
                "Eu precisava de tempo para ler. E de um motivo bonito para ele esperar."
              ]
            },
            {
              "texto": "Meia-verdade: — Aceito. O livro está na minha cabeceira. — E improvisar sobre ele na hora.",
              "resultado": [
                "Na segunda pergunta sobre Martino Aurélio, Humberto percebeu que eu não tinha lido uma página. E entendeu por que eu tinha o livro na cabeceira."
              ]
            },
            {
              "texto": "Verdade: Confessar que pegou o livro mas ainda não leu.",
              "resultado": [
                "— Então por que o pegou? — A pergunta ficou no ar.",
                "Humberto não era burro. Eu precisava de tempo para ler, e de um motivo para ele esperar. Sorri como quem guarda um segredo."
              ],
              "desvio": true,
              "pontos": {
                "honestidade": 1
              }
            }
          ],
          "com": "humberto"
        }
      ],
      "fecho": [
        "“Se emoção é o que quer, emoção é o que terá.” Remoí a frase por dias."
      ],
      "cenario": "empregada"
    },
    {
      "titulo": "O duelo",
      "abertura": [
        "No dia de folga, Humberto bateu à porta. Não disse aonde iriam."
      ],
      "cenas": [
        {
          "titulo": "A surpresa",
          "texto": [
            "— Chegou a hora do primeiro encontro emocionante que lhe prometi. E não direi do que se trata. A surpresa é metade da graça.",
            "Sem saber o plano, eu não podia montar minha estratégia de batalha."
          ],
          "pergunta": "Ir às cegas, ou impor minhas próprias regras?",
          "opcoes": [
            {
              "texto": "Verdade: — Aceito o seu convite, mas com uma condição: Valéria irá conosco.",
              "certa": true,
              "resultado": [
                "— Sem problemas, quanto mais, melhor.",
                "Ergui uma sobrancelha. Ele se enrolou todo para explicar que não era nada daquilo. Ri e toquei a bochecha dele: — Às vezes você é uma gracinha, sabia?",
                "O destino era o pátio de entrada, onde Guardas Reais treinavam. Ele não tinha me trazido para vê-los, e sim para vê-lo duelar com eles."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Mentira: — Sem saber o destino, eu não vou.",
              "resultado": [
                "Humberto deu de ombros. — Que pena. Outra vai aceitar sem perguntar.",
                "E alguma aceitaria mesmo. — Pensando bem… — eu disse, antes que ele se afastasse."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Adoro surpresas. — E ir sozinha com ele, sem pensar duas vezes.",
              "resultado": [
                "Sem Valéria ao meu lado, ninguém me contou quem era Humberto de verdade nem quem era o homem que o enfrentaria. Fui para aquele pátio cega."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A facção real",
          "texto": [
            "No banco de mármore, Valéria contou que Humberto era o cavaleiro mais habilidoso que o pai dela já tinha visto em batalha.",
            "— Espera, você nunca ouviu sobre as batalhas pelo trono? Se não me engano, os Barbosa também eram da facção real. Seu pai nunca lhe contou nada?"
          ],
          "pergunta": "Eu não sabia nada sobre aquilo. Como esconder isso de Valéria?",
          "opcoes": [
            {
              "texto": "Mentira: — Lembro-me de perguntar, mas meus pais sempre diziam que era algo para adultos se preocuparem.",
              "certa": true,
              "desbloqueia": [
                "ramiro"
              ],
              "resultado": [
                "— Engraçado, comigo foi justamente o contrário. Mas cada família é de um jeito.",
                "E Valéria contou tudo: o golpe da maioridade, a facção arqui-ilustral de Octávio Macedo contra a facção real de Humberto. Pai contra filho. E que Humberto, dizem, matou o pai com as próprias mãos.",
                "Depois apontou, discretamente, o tipo ideal dela: Ramiro, o guarda de cicatriz na bochecha."
              ],
              "pontos": {
                "astucia": 1
              }
            },
            {
              "texto": "Meia-verdade: — Papai prefere que eu ouça a versão de quem esteve lá. Como o seu pai conta essas batalhas?",
              "resultado": [
                "Valéria franziu a testa. — Meu pai? Ele não fala disso nem bêbado. Mas o seu esteve lá, não esteve? Em qual batalha?",
                "Eu não sabia o nome de nenhuma. Fingi uma tosse, tomei um gole de água e consertei a história antes que ela repetisse a pergunta."
              ],
              "desvio": true,
              "sucesso": {
                "requerAtributo": {
                  "astucia": 5
                },
                "resultado": [
                  "Valéria se iluminou. Ninguém nunca perguntava a ela sobre o pai.",
                  "E contou tudo: o golpe da maioridade, a facção arqui-ilustral de Octávio Macedo contra a facção real de Humberto. Pai contra filho. E que Humberto, dizem, matou o pai com as próprias mãos.",
                  "Eu não tinha dito uma única mentira. Só tinha feito uma pergunta no lugar certo.",
                  "Depois ela apontou, discretamente, o tipo ideal dela: Ramiro, o guarda de cicatriz na bochecha."
                ]
              }
            },
            {
              "texto": "Verdade: — Para ser sincera, não sei quase nada sobre isso.",
              "resultado": [
                "Valéria me olhou estranho. Uma Barbosa que não sabia de que lado a própria família lutou. Ela não esqueceu."
              ]
            }
          ],
          "com": "valeria"
        },
        {
          "titulo": "O duelo",
          "texto": [
            "Humberto derrotou um guarda atrás do outro, até que Ramiro entrou no centro. Golpe por golpe, os dois em pé de igualdade.",
            "Então Ramiro chutou a coxa de Humberto. Depois, de novo. Humberto mancava, mas não desistia. Ramiro passou a defender com uma mão nas costas, zombando dele."
          ],
          "pergunta": "Assistir calada, ou mudar o rumo da luta?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Levantar-se e gritar: — Se você vencer esse duelo, ganhará um beijo!",
              "certa": true,
              "desbloqueia": [
                "eusebio",
                "ursula",
                "paloma"
              ],
              "resultado": [
                "— Cobrarei sua promessa!",
                "O Guarda-Mor interrompeu: empate. E, com as espadas já abaixadas, Ramiro socou Humberto. O nariz estalou.",
                "Na enfermaria, o Iluminado Eusébio colocou o nariz no lugar com um crec, e ainda brigou comigo pelas “propostas indecentes”. Logo depois chegou a rainha Úrsula, e com ela uma empregada pessoal de cara amarrada: Paloma Torres."
              ],
              "pontos": {
                "humor": 1
              }
            },
            {
              "texto": "Verdade: Correr até o Guarda-Mor: — Pare a luta! Ele vai se machucar.",
              "resultado": [
                "O Guarda-Mor parou. Humberto saiu do pátio humilhado, na frente dos guardas, por causa de uma empregada. Não me olhou mais nos olhos."
              ]
            },
            {
              "texto": "Mentira: Cochichar para Valéria: — Ele está só brincando com o Ramiro.",
              "resultado": [
                "— Brincando? — Valéria cobriu a boca. A espada de Ramiro passou a um palmo do pescoço de Humberto.",
                "Fingir que estava tudo bem não ia ajudar ninguém. Levantei antes de pensar."
              ],
              "desvio": true
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "Os bailes",
          "texto": [
            "Quando a rainha e Humberto saíram da enfermaria, Paloma parou na minha frente.",
            "— Barbosa, não é? Uma prima de terceiro grau minha se casou com um Ilustre daquelas bandas, e passei um verão inteiro por lá quando menina. — Ela analisou meu rosto como quem procura defeito em uma joia. — Não me lembro de você em nenhum dos bailes."
          ],
          "pergunta": "Como explicar uma Barbosa que ninguém nunca viu?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Mamãe morre de ciúmes de outras Ilustres, então evita bailes com meu pai. Se sua prima conhece minha família como sugere, deve saber disso.",
              "certa": true,
              "resultado": [
                "Paloma estreitou os olhos e sorriu de canto.",
                "— Ciúmes fazem mulheres bonitas agirem como loucas por homens não tão… belos assim.",
                "Valéria a enfrentou. Paloma foi embora. Mas agora tinha um assunto para escrever à prima."
              ],
              "pontos": {
                "astucia": 1
              },
              "antes": [
                "Lembrei de Alexandro, naquela noite em Serra Verde, falando da mãe e dos ciúmes dela. Era verdade, só não era a minha."
              ]
            },
            {
              "texto": "Mentira: — Estive no baile de verão, sim. Você deve ter esquecido.",
              "resultado": [
                "— Que curioso. Nesse eu estava. — Paloma sorriu. Ela não tinha esquecido nada."
              ]
            },
            {
              "texto": "Verdade: — Nunca fui a nenhum desses bailes.",
              "resultado": [
                "— Nenhum? — Paloma inclinou a cabeça. — Uma Barbosa em idade de casar, escondida em casa?",
                "Ela esperava que eu gaguejasse. Lembrei de Alexandro, naquela noite em Serra Verde, falando da mãe e dos ciúmes dela."
              ],
              "desvio": true
            }
          ],
          "com": "paloma"
        }
      ],
      "fecho": [
        "Se eu já irritava Paloma sem nenhum esforço, agora lhe dera um assunto para escrever à prima."
      ],
      "cenario": "duelo"
    },
    {
      "titulo": "Confissões",
      "abertura": [
        "Um piquenique no pomar, cada um com o seu exemplar de “Confissões”. E, à noite, um jantar à luz da lua."
      ],
      "cenas": [
        {
          "titulo": "As empregadas",
          "texto": [
            "Humberto assobiou, e duas empregadas vieram com leque e sombrinha para mim. Duas Ilustres me servindo. Recusei.",
            "— Por ser uma Ilustre de baixo grau, no fundo você se enxerga como inferior a elas — disse ele. — Aceite que, enquanto estiver comigo, seu grau é de Ilustríssima. Cada ordem que você der é uma ordem minha."
          ],
          "pergunta": "O que fazer com esse poder?",
          "opcoes": [
            {
              "texto": "Verdade: — Pedirei o que eu precisar; negarei o que soar excessivo.",
              "certa": true,
              "resultado": [
                "— Nada mais justo."
              ],
              "pontos": {
                "honestidade": 1
              },
              "antes": [
                "Era tentador mandá-las me servir uvas na boca. Mas, no dia seguinte, eu voltaria ao meu grau normal, e elas não esqueceriam."
              ]
            },
            {
              "texto": "Mentira: — Nasci para ser servida. — E mandar as duas abanarem e servirem uvas na boca, uma a uma.",
              "resultado": [
                "No dia seguinte, eu era só uma empregada de novo. Elas não esqueceram. Ninguém da ala delas esqueceu."
              ]
            },
            {
              "texto": "Meia-verdade: — Não quero poder nenhum. Sou só uma empregada.",
              "resultado": [
                "Humberto pareceu decepcionado. — Que pena. Pensei que você fosse diferente.",
                "Quem se põe abaixo das outras não vira esposa de Conselheiro Real. Mas quem pisa nelas também não. Pensei melhor."
              ],
              "desvio": true,
              "pontos": {
                "honestidade": 1
              }
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "O beijo devido",
          "texto": [
            "Embaixo da macieira, Humberto me serviu torta de maçã e suco de laranja.",
            "— Você disse que, se dependesse de você, a vitória teria sido minha. Se reconhece que ganhei, então está me devendo um beijo."
          ],
          "pergunta": "Pagar agora, ou fazê-lo esperar?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Como sou mulher de palavra, cumprirei minha promessa. Mas eu não disse quando o beijaria. Então continue me tratando bem.",
              "certa": true,
              "resultado": [
                "Ele assentiu, o olhar fixo na minha boca. Umedeci os lábios só para provocá-lo.",
                "— Quero ouvir suas confissões. Suas opiniões sobre “Confissões”, digo.",
                "— Ah, sim… é que ouvi errado."
              ],
              "pontos": {
                "humor": 1
              }
            },
            {
              "texto": "Verdade: — Eu também estava louca por isso. — E beijá-lo ali mesmo, sob a macieira.",
              "resultado": [
                "Foi bom. Foi fácil. E Humberto nunca valorizou o que vinha fácil."
              ]
            },
            {
              "texto": "Mentira: — Eu nunca prometi nada.",
              "resultado": [
                "Humberto ergueu as sobrancelhas. Meia dúzia de Guardas Reais tinham ouvido a promessa no pátio.",
                "— Brincadeira — eu disse, antes que ele respondesse."
              ],
              "desvio": true
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A máscara",
          "texto": [
            "Ele leu a passagem favorita em voz alta, com os olhos úmidos. Por um instante, foi sincero. Depois, voltou às frases de efeito.",
            "— Eu vim para me encontrar com você. A discussão sobre o livro é uma consequência.",
            "Uma fala bonita no papel, mas que me irritava. Quantas vezes ele já tinha dito isso a outras mulheres?"
          ],
          "pergunta": "Deixar passar, ou mostrar que eu não era mais uma?",
          "opcoes": [
            {
              "texto": "Meia-verdade: Levantar-se e ir embora: — Busque-me hoje à noite para o jantar. Mas aviso logo que não beberei, nem pode ser tarde demais.",
              "certa": true,
              "resultado": [
                "Humberto concordou, com um “o que eu fiz de errado?” estampado no rosto. Dei as costas sem olhar para trás.",
                "No quarto, Valéria perguntou: — E você não coloca uma máscara também? — E eu fiquei sem chão."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: Sorrir: — Que coisa linda de se ouvir.",
              "resultado": [
                "Sorri e deixei passar. O piquenique seguiu lindo e vazio, e a máscara dele ficou exatamente onde estava.",
                "Na hora de recolher a toalha, não aguentei mais."
              ],
              "desvio": true
            },
            {
              "texto": "Verdade: — Quantas vezes você já disse isso a outras mulheres?",
              "resultado": [
                "Humberto riu, ofendido. — Se é isso que pensa de mim, não sei o que estamos fazendo aqui.",
                "Ele não voltou a bater à minha porta."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A prova do vinho",
          "texto": [
            "À noite, as gêmeas nos levaram ao Salão de Bailes. Humberto ao piano, Valéria ao violino, a lua cheia pelas janelas. Ele pediu desculpas, e eu já o tinha perdoado.",
            "Serviram-lhe um dedo de vinho.",
            "— Longe de mim sugerir que lhe falte etiqueta, mas, como não bebe: você sabe a maneira correta de se fazer a “prova”?"
          ],
          "pergunta": "O que uma Ilustre responderia?",
          "opcoes": [
            {
              "texto": "Mentira: — Saber, eu sei. Mas meu pai não é do tipo que faz provas antes de beber. Então fique à vontade se quiser me explicar.",
              "certa": true,
              "resultado": [
                "Pelo sorriso pueril, era tudo o que ele queria ouvir. Cor, aroma, gole. De olhos fechados, adivinhei uva, madeira, terra molhada e trufas.",
                "— Você tem o nariz melhor do que o meu."
              ],
              "pontos": {
                "performance": 1
              }
            },
            {
              "texto": "Verdade: — Não. Nunca me ensinaram.",
              "resultado": [
                "Humberto ergueu uma sobrancelha. Uma Ilustre, mesmo de baixo grau, que nunca viu uma prova de vinho?",
                "— Quer dizer… — emendei, rindo. — Ensinar, ensinaram."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Acho que me lembro. — E pegar a taça para fazer a prova sozinha.",
              "resultado": [
                "Carmen não bebia. No livro, o primeiro gole dela ainda estava muito longe, e não foi nada bonito."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A pergunta",
          "texto": [
            "Depois do cordeiro, o rubor subia às bochechas dele.",
            "— E então, já está bêbado o suficiente para confessar seus pecados?",
            "— Quem dera. Mas eu sou um homem de palavra. Pergunte o que quiser."
          ],
          "pergunta": "Que pergunta valia a única resposta sincera dele?",
          "opcoes": [
            {
              "texto": "Verdade: — É verdade que matou o seu pai?",
              "certa": true,
              "desbloqueia": [
                "ferdinando"
              ],
              "resultado": [
                "— O que você acha? — sussurrou ele.",
                "— Eu acho que sim. E gosto de ouvir a pessoa antes de julgar.",
                "Ele contou tudo: Úrsula aos treze anos enxergando a farsa de Ferdinando, o casamento que ele exigiu, a invasão ao castelo da própria família. E as últimas palavras do pai: “Eu sei, filho. Estou orgulhoso de você.”",
                "Pela primeira vez, me senti suja por esconder tanto."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Meia-verdade: — Quantas mulheres você já trouxe a este salão?",
              "resultado": [
                "Ele riu e respondeu com uma galanteria. A máscara voltou ao rosto num piscar de olhos.",
                "Pergunta errada. Eu não queria saber das outras; queria saber dele. Esperei o garçom se afastar e tentei de novo."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: — Não tenho nenhuma pergunta. — E pedir a sobremesa.",
              "resultado": [
                "Humberto pareceu quase aliviado. Ninguém nunca tinha tido coragem de perguntar, e eu também não tive."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A valsa",
          "texto": [
            "Dançamos uma valsa até o salão vazio se encher de vida. Nos últimos acordes, apoiei o rosto no peito dele.",
            "Os olhos dele desceram até os meus lábios, e ele se inclinou devagar, como quem pedia permissão. Eu também queria."
          ],
          "pergunta": "Mas era a hora?",
          "opcoes": [
            {
              "texto": "Meia-verdade: — Ainda não. É só nosso terceiro encontro. Preciso de mais tempo.",
              "certa": true,
              "resultado": [
                "— Por você, eu espero.",
                "No dia em que matasse Carmen, eu finalmente estaria livre para viver como Vivian."
              ],
              "pontos": {
                "honestidade": 1
              },
              "antes": [
                "Eu também queria. Mas manter a postura de donzela era a desculpa perfeita: era Vivian que ele queria beijar, não Carmen."
              ]
            },
            {
              "texto": "Mentira: — Sou toda sua, Humberto. — E erguer o rosto para beijá-lo.",
              "resultado": [
                "Ergui o rosto. Nossos lábios estavam a um suspiro de distância quando vi, por cima do ombro dele, uma das gêmeas parada na porta do salão.",
                "Virei o rosto no último segundo."
              ],
              "desvio": true
            },
            {
              "texto": "Verdade: — Humberto, eu não sou quem você pensa.",
              "resultado": [
                "Humberto, meio bêbado, riu da “brincadeira”. No dia seguinte, contou a piada à irmã. Úrsula não riu."
              ]
            }
          ],
          "com": "humberto"
        }
      ],
      "fecho": [
        "As semanas seguintes foram ótimas. Trabalho, amizade, amor. Só faltava Paloma sumir do mapa."
      ],
      "cenario": "confissoes"
    },
    {
      "titulo": "A farsa",
      "abertura": [
        "Lá embaixo, no pátio, Paloma entregou a um mensageiro um envelope com lacre vermelho. Uma carta qualquer, disse a mim mesma."
      ],
      "cenas": [
        {
          "titulo": "A denúncia",
          "texto": [
            "Na troca de turno, as cadelinhas de Paloma sussurraram no meu ouvido: “Espero que tenha tido um bom turno. Até porque será seu último.”",
            "No fim dos reportes, Paloma entregou a Sebastiana uma certidão.",
            "— Vivian Barbosa existe e é filha de Jaime Barbosa. Porém, como Vossa Senhoria pode ver pela data de registro, a verdadeira Vivian é uma garotinha de apenas sete anos. Aquela que está entre nós é uma impostora."
          ],
          "pergunta": "Eu tinha segundos antes que todas se virassem para mim. O que fazer?",
          "opcoes": [
            {
              "texto": "Verdade: Recuar até a porta dos fundos e correr até a Câmara: Humberto tinha de ouvir a verdade da minha boca, antes de todos.",
              "certa": true,
              "resultado": [
                "— Não é verdade, Vivi?… Vivi? — Valéria me defendia no meio do salão.",
                "— Sinto muito, Val.",
                "Corri pelos corredores até a Câmara. Paloma veio atrás, gritando pelos guardas. As portas se abriram: Humberto, a rainha Úrsula e o rei Ferdinando."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: Negar tudo e exigir que provem.",
              "resultado": [
                "— Isso é uma calúnia. Provem! — Sebastiana ergueu um papel com data e selo.",
                "A prova estava na mão dela. Negar só ia me enterrar mais fundo. Enquanto todas olhavam para o papel, recuei um passo."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Eu posso explicar. Não é o que parece.",
              "resultado": [
                "Sebastiana me expulsou antes que eu terminasse a frase. Nunca cheguei a ver Humberto de novo."
              ]
            }
          ],
          "com": "sebastiana"
        },
        {
          "titulo": "Diante do rei",
          "texto": [
            "Paloma leu a certidão em voz alta: local, linhagem, data de nascimento. O papel tremia nas mãos dela.",
            "— Você nega a veracidade dessa certidão? — perguntou Humberto."
          ],
          "pergunta": "Negar, implorar, ou ganhar tempo?",
          "opcoes": [
            {
              "texto": "Verdade: — Não. Mas, se me permitir conversar com você em particular, posso explicar a situação.",
              "certa": true,
              "resultado": [
                "— Você cometeu uma fraude para entrar no palácio e seduzir meu irmão — disse Úrsula. — Nos livramos de uma interesseira.",
                "— Eu quero escutá-la — disse Humberto.",
                "— A vida do seu irmão não é a sua, amor — disse Ferdinando, com a mão no ombro da esposa. — Deixe-o fazer como bem entender."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "Mentira: — É mentira! Paloma forjou esse papel por ciúmes.",
              "resultado": [
                "Humberto leu a data com os próprios olhos. Depois daquela mentira, nenhuma verdade minha valeria mais nada."
              ]
            },
            {
              "texto": "Meia-verdade: Ajoelhar-se diante da rainha: — Eu nunca quis fazer mal a ninguém.",
              "resultado": [
                "Meus joelhos tocaram o mármore. — Víbora — disse Úrsula, lá de cima.",
                "Do chão, vi Humberto. Ele não me olhava com raiva; olhava como quem espera uma explicação. Levantei-me."
              ],
              "desvio": true
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "Quem é você?",
          "texto": [
            "Na Câmara, Humberto virou uma taça cheia de vinho de uma vez só.",
            "— Nunca vi o propósito dessa frescura de bebericar. Naquele jantar, eu tinha que impressionar a belíssima Ilustre que fisgou meu coração. Ambos fingimos ser quem não somos. Mas eu ainda sou Humberto. Já você… Abri meu coração para uma farsante. O mínimo que eu preciso saber é: quem é você?"
          ],
          "pergunta": "Mais uma mentira, ou a verdade?",
          "opcoes": [
            {
              "texto": "Verdade: — Meu nome verdadeiro é Carmen. Só Carmen.",
              "certa": true,
              "resultado": [
                "— É um belo nome. Em Celestial, significa canção.",
                "— Não combina nada comigo. Canções estão na boca do povo e são tocadas pelos dedos de estranhos.",
                "Contei da minha mãe, do bordel, de tudo que aprendi sobre Ilustres pelas noites dela com Jaime."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Meia-verdade: — Sou Vivian. Para você, sempre fui.",
              "resultado": [
                "Humberto pousou a taça. — Então não temos mais nada a conversar.",
                "Era a resposta bonita. Não era a verdadeira, e ele merecia a verdadeira. — Espera. Não é isso."
              ],
              "desvio": true
            },
            {
              "texto": "Mentira: Inventar outra família Ilustre, de uma província distante.",
              "resultado": [
                "Uma mentira para cobrir outra. Humberto passou anos entre espiões: percebeu antes de eu terminar o sobrenome."
              ]
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A pergunta de Humberto",
          "texto": [
            "— E só ela dormia com Jaime? Você nunca “aprendeu” com ele diretamente?"
          ],
          "pergunta": "Como responder a isso sem perdê-lo?",
          "opcoes": [
            {
              "texto": "Verdade: — Nunca me deitei com nenhum homem. E tenho como provar.",
              "certa": true,
              "resultado": [
                "— Tudo bem, não precisamos perder tempo com isso. Falemos de nós dois. Conte-me sobre o que você planejou."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: — Algumas vezes. Fazia parte do aprendizado. — Só para ver a cara dele.",
              "resultado": [
                "A cara dele eu vi: Humberto se levantou e chamou os guardas.",
                "Uma provocação, na hora mais errada da minha vida."
              ]
            },
            {
              "texto": "Meia-verdade: — E que diferença faria?",
              "resultado": [
                "— Para mim, faz — disse ele, frio.",
                "E eu entendi que o silêncio ia soar como um sim. Ergui o queixo."
              ],
              "desvio": true
            }
          ],
          "com": "humberto"
        },
        {
          "titulo": "A declaração",
          "texto": [
            "Admiti tudo: peguei “Confissões” só por ser o livro favorito dele; recusei os presentes para que ele se esforçasse mais.",
            "— Muito inteligente da sua parte — disse ele, já abrindo outra garrafa.",
            "Declarações eram oceanos tempestuosos. Eu precisava mergulhar."
          ],
          "pergunta": "Mas com quais palavras?",
          "opcoes": [
            {
              "texto": "Verdade: Fechar os olhos e dizer tudo de uma vez: — Você é o único que faz meu coração palpitar, o único que me faz rir sozinha no meio do trabalho. Em outras palavras, eu amo você.",
              "certa": true,
              "resultado": [
                "Humberto circundou a mesa devagar e recapitulou: a fraude, a sedução, a declaração. Depois ergueu meu queixo com o dedo.",
                "— Se fosse só dissimulada, você não teria agido impulsivamente em nossos primeiros encontros. Se fosse só sagaz, não se embolaria com as palavras como está fazendo.",
                "— Então você acredita em mim?",
                "— Se tolice for, considere-me um tolo. Pois estou tolamente, estupidamente, perdidamente apaixonado por você.",
                "E nossos lábios se encontraram."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Mentira: — Nada disso foi plano. Foi amor desde o primeiro dia.",
              "resultado": [
                "Humberto riu sem humor. Ele tinha acabado de ouvir a confissão do plano inteiro.",
                "Mais uma mentira e ele não ia acreditar em mais nada. Fechei os olhos. Se era para dizer, que fosse tudo."
              ],
              "desvio": true
            },
            {
              "texto": "Meia-verdade: — Planejei tudo, sim. E faria de novo.",
              "resultado": [
                "Era verdade, mas não era a verdade inteira. Humberto ouviu só a primeira parte e chamou os guardas."
              ]
            }
          ],
          "com": "humberto"
        }
      ],
      "fecho": [
        "— Pelo que entendi, você não gosta de seu nome original. Devo continuar chamando-a de Vivian?",
        "— Sim, por favor. Prefiro reiniciar minha vida como Vivian Barbosa.",
        "— O único problema é que Vivian Barbosa já existe. Então que tal Vivian Macedo?",
        "Sorri tão radiante quanto o sol da manhã."
      ],
      "cenario": "farsa"
    }
  ],
  "vitoria": [
    "Carmen entrou no palácio como Vivian Barbosa e saiu da Câmara como a futura Vivian Macedo. Você lembrou de cada escolha dela.",
    "Mas você sabe que a história não termina aí: ainda há o epílogo, três anos depois, e as cartas de Madalena. A continuação, “Uma Canção Desnaturada”, sai em 2027."
  ],
  "finais": {
    "cantora": {
      "titulo": "A cantora",
      "texto": [
        "Na segunda-feira, em vez de um vestido azul-ciano, embarquei numa diligência com um baú emprestado e o cartão do Teatro Aurora no decote.",
        "Na Capital, ninguém me perguntou de que casa eu vinha. Só perguntaram se eu cantava de novo amanhã.",
        "Em um ano, meu nome estava nos cartazes. Não um nome emprestado. Não Ilustre de coisa nenhuma. Só Carmen, em letras douradas.",
        "Nunca entrei no Palácio Real. Mas, numa noite de casa cheia, um Ilustre da primeira fila me jogou uma rosa. Agradeci com uma mesura e não desci do palco. Pela primeira vez, quem escolhia era eu."
      ],
      "nota": "No livro, Carmen segue para o Palácio. Esta é outra vida que ela poderia ter tido."
    }
  },
  "finalPalacio": "O Palácio Real",
  "sons": {
    "tema": "tema",
    "temaSempre": true,
    "ambiente": {},
    "cenas": {},
    "efeitos": {},
    "arquivos": {
      "tema": "sons/tema-violao-dedilhado.mp3"
    },
    "creditos": [
      "Warm Fingerpicked Guitar (Pixabay)"
    ]
  },
  "chave": "carmen-jogo-completo-v1",
  "outraVersao": {
    "texto": "Ainda não leu o livro? Jogue a versão sem spoilers.",
    "link": "./"
  },
  "tituloVitoria": "Carmen virou Vivian Macedo"
};
