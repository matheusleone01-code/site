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
    "Carmen pode guardar objetos no inventário, e eles abrem caminhos extras.",
    "Algumas escolhas dão pontos de bônus em Persuasão, Sagacidade, Performance, Honestidade ou Humor.",
    "Cada arco concluído vale desconto no livro. Quanto mais longe Carmen chegar, maior o desconto.",
    "Na dúvida, consulte as fichas dos personagens."
  ],

  // Prêmio: desconto no livro
  "premio": {
    "instrucao": "Tire um print desta tela e mande por direct para @omatheusleone.",
    "instagram": "https://www.instagram.com/omatheusleone/"
  },

  // Desconto em reais ao concluir cada arco (o 1º número é o arco I). Vale o maior que a pessoa alcançou.
  "descontos": [
    5,
    10,
    15
  ],

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
        "Juramento: Não serei puta.",
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
        "Características: Não suporta ser desafiada: quando a filha bate de frente, aperta o cerco; quando a filha cede, relaxa. Conhece Carmen como a palma da mão.",
        "Sonho: Que Carmen siga os passos dela. Igual, não: melhor.",
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
      ],
      "segredo": [
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
      "titulo": "A Encantadora",
      "nome": "Persuasão",
      "texto": "Elogios na medida certa, argumentos na hora certa. Funciona com quem gosta de ouvir o que quer."
    },
    "astucia": {
      "titulo": "A Raposa",
      "nome": "Sagacidade",
      "texto": "Ler as pessoas depressa e fazer a pergunta certa na hora certa."
    },
    "performance": {
      "titulo": "A Atriz",
      "nome": "Performance",
      "texto": "Fingir com o corpo inteiro: um enjoo, uma submissão, uma Ilustre que nunca ouviu um não."
    },
    "honestidade": {
      "titulo": "A Sincera",
      "nome": "Honestidade",
      "texto": "Dizer a verdade, mesmo quando custa. Funciona com quem valoriza sinceridade, como Armando."
    },
    "humor": {
      "titulo": "A Espirituosa",
      "nome": "Humor",
      "texto": "Dizer a verdade rindo. Muita gente acha que é piada, e é aí que ela passa."
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
              "texto": "— Está bem… Me dói admitir, mas tem razão.",
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
              },
              "fala": "— Está bem… Me dói admitir, mas tem razão. Quando a hora chegar, farei o que diz."
            },
            {
              "texto": "— Prefiro morrer a virar o que você é, mãe. Nunca.",
              "resultado": [
                "O silêncio que se seguiu foi pior do que um tapa. Madalena largou a escova na penteadeira.",
                "— Então vai ser por mal.",
                "Naquela mesma noite, Gasparo passou a dormir no sofá da sala, de frente para a porta. Até o fim da semana, nunca mais fiquei um minuto sozinha."
              ]
            },
            {
              "texto": "— Eu só tenho medo, mãe. Ainda não estou pronta.",
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
          "com": "madalena",
          "cenario": "serra-verde"
        },
        {
          "titulo": "A desculpa",
          "texto": [
            "— Use esta noite para escolher com quem gostaria de ter sua primeira vez — disse Madalena.",
            "— Ninguém — seria minha resposta, mas era arriscado ser tão combativa."
          ],
          "pergunta": "Que desculpa me livraria do salão sem levantar suspeitas?",
          "opcoes": [
            {
              "texto": "Levar a mão à boca do estômago: — Estou enjoada. Acho que é do nervosismo.",
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
              "texto": "Fingir cólica, embora meu fluxo só viesse daqui a 2 semanas: — Estou naqueles dias, mãe.",
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
              "texto": "— Ninguém. Não quero ninguém.",
              "resultado": [
                "Madalena estreitou os olhos. — Ninguém? Pois bem. Se você não escolhe, eu escolho por você.",
                "Naquela mesma noite, ela me trancou no quarto e entregou a chave a Gasparo. Depois disso, nunca mais me deixou sozinha. Não houve fuga."
              ]
            }
          ],
          "quando": "6 dias antes do aniversário",
          "com": "madalena",
          "cenario": "serra-verde"
        },
        {
          "titulo": "A janela",
          "desbloqueia": [
            "armando"
          ],
          "texto": [
            "Do peitoril do meu quarto, vi uma charrete inusitada dobrar a rua: o tamanho de uma carruagem ilustre, mas puxada por burros de carga, com caixas e mais caixas empilhadas no topo.",
            "Armando, o mascate, tinha chegado antes do previsto. Em poucos dias partiria de novo, quem sabe rumo à Capital.",
            "Espera. Ele podia ser a chave para minha fuga!",
            "Ajeitei a postura e abri meu melhor sorriso. Ele se aproximou da janela.",
            "— Madalena está ocupada? — perguntou. E, ao ver meu sorriso, ergueu a sobrancelha. — O que você quer dessa vez? Chapéu, brinco, vestido?"
          ],
          "pergunta": "Pedir logo o que eu queria, ou ganhá-lo na conversa?",
          "opcoes": [
            {
              "texto": "— Hoje é diferente. Só quero que me conte como foi a viagem.",
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
              },
              "fala": "— Hoje é diferente. Só quero que me conte como foi a viagem até aqui; se as estradas estão seguras; se está vendendo muito…"
            },
            {
              "texto": "— Quero que me leve com você quando for embora.",
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
              "texto": "— Um vestido, claro. Aquele de renda que você trouxe da última vez.",
              "resultado": [
                "— Eu sabia. — Ele sorriu, satisfeito por ter acertado. — Vou pensar no seu caso.",
                "E entrou no bordel atrás de Madalena. Ganhei um vestido dias depois, mas nunca mais tive a atenção dele. Para Armando, eu continuava sendo só a menina que pedia presentes."
              ]
            }
          ],
          "quando": "4 dias antes do aniversário",
          "com": "armando",
          "cenario": "serra-verde"
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
              "texto": "— Não seja por isso. Uso minha beleza como isca: serei um manequim para você expor, atraindo as pessoas enquanto você faz sua mágica com a arte da venda.",
              "resultado": [
                "Armando estreitou os olhos. — E o que uma moça como você ganha andando em cima de uma carroça pelas vilas?",
                "— Conhecer a Capital, ora.",
                "— Tem coisa aí que você não está me contando. — Ele cruzou os braços. — Ou me conta tudo, ou eu entro e falo com a sua mãe.",
                "Com Armando, meia-verdade não ia colar."
              ],
              "desvio": true
            },
            {
              "texto": "— Eu pago a viagem. Tenho umas economias guardadas.",
              "resultado": [
                "Armando cruzou os braços. — Economias? Todo tostão que entra nesta casa passa pela mão da sua mãe. Se você tem dinheiro escondido, ele é dela.",
                "Ele entrou no bordel e contou tudo a Madalena. Naquela noite, ela revirou meu quarto atrás das economias que eu não tinha. E Gasparo passou a dormir na minha porta."
              ]
            },
            {
              "texto": "— Daqui a quatro dias, minha mãe vai me vender para o primeiro Ilustre que pagar. Me leva. Eu trabalho para você de graça até pagar a viagem.",
              "resultado": [
                "Armando ficou um bom tempo calado, olhando para a porta do bordel.",
                "— De graça, não. Ninguém trabalha de graça na minha loja. — Ele coçou a nuca. — Mas uma moça bonita lá em cima da loja talvez atraia mais freguesas do que as minhas rendas. Você ficaria em pé na boleia, como um manequim?",
                "— Fico onde você quiser. — Respirei fundo. — E então? Quando podemos partir?"
              ],
              "certa": true,
              "pontos": {
                "honestidade": 1
              },
              "marca": "franca-com-armando"
            }
          ],
          "quando": "4 dias antes, fim de tarde",
          "com": "armando",
          "cenario": "serra-verde"
        },
        {
          "titulo": "O segredo",
          "texto": [
            "— Calma, um passo de cada vez — disse Armando. — Primeiro eu tenho que falar com sua mãe. Madalena é uma mulher prática. Se eu explicar que você estaria trabalhando de maneira honesta, não tem por que negar."
          ],
          "pergunta": "Deixar que ele falasse com minha mãe, ou impedi-lo a qualquer custo?",
          "opcoes": [
            {
              "texto": "— Ela nunca aceitará que eu viva do meu jeito. Quer que eu siga os passos dela.",
              "certa": true,
              "resultado": [
                "Armando me encarou em silêncio por um tempo.",
                "— Uma filha conhece a mãe melhor do que eu. Mas, se eu te ajudar a fugir sem a permissão dela, vão achar que te sequestrei.",
                "Engoli em seco e ganhei tempo até encontrar uma saída.",
                "— Em Serra Verde, talvez. Nas próximas vilas, todo mundo vai ver que fui de bom grado.",
                "Sorri, limpando o suor frio das mãos no vestido."
              ],
              "pontos": {
                "honestidade": 1
              },
              "fala": "— Ela nunca aceitará que eu viva da minha própria maneira. Ela quer que eu siga os passos dela, e ponto."
            },
            {
              "texto": "— Ela até desconfia que eu quero ir embora. Pode falar com ela, mas com jeito.",
              "resultado": [
                "Ele falou com jeito. Madalena ouviu tudo com um sorriso educado, agradeceu a gentileza e, assim que ele saiu, mandou Gasparo vigiar a loja-carruagem até ela deixar a cidade.",
                "— Achou mesmo que eu não ia descobrir, pequena canção?"
              ]
            },
            {
              "texto": "— Se você contar a ela, eu digo que foi você quem me deu a ideia de fugir.",
              "resultado": [
                "O rosto de Armando endureceu como pedra. — Então não temos mais nada para conversar.",
                "Ele deu as costas. E eu entendi, tarde, o que tinha feito: ameaçar o único homem disposto a me ajudar.",
                "— Espera! Desculpa. Eu nunca diria isso. Eu só… tenho medo dela. — Ele parou, com a mão na porta. Respirei fundo e, dessa vez, confiei nele de verdade."
              ],
              "desvio": true
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando",
          "cenario": "serra-verde"
        },
        {
          "titulo": "A mãe",
          "texto": [
            "— Pode ser, mas… e quanto à sua mãe? Se ela quer tanto que você siga os passos dela, Madalena me mata se eu te ajudar."
          ],
          "pergunta": "Como tirar o medo de Madalena da cabeça dele?",
          "opcoes": [
            {
              "texto": "Abanar a mão no ar, fazendo pouco caso: — Mata nada. Você vai levar meses para voltar. Até lá, ela já vai ter te perdoado. Quem sabe até te agradeça, por eu não estar mais aqui para testar a paciência dela.",
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
              "texto": "Segurar o braço dele: — Ela não vai fazer nada contra você. Se alguém vai pagar por essa fuga, sou eu. Ela já me cobra por respirar nesta casa. Uma dívida a mais, uma a menos, que diferença faz?",
              "desvio": true,
              "resultado": [
                "O rosto de Armando se fechou. — Pagar o preço? É exatamente isso que me assusta, menina. Se ela é capaz disso com a própria filha, imagine com quem ajudar a filha a fugir.",
                "Eu tinha assustado o homem em vez de acalmá-lo. Tratei de rir, como se tivesse exagerado, e abanei a mão no ar."
              ]
            },
            {
              "texto": "Dar de ombros: — Ela nem vai saber que foi você. Saio antes do sol, sozinha, e deixo um bilhete dizendo que fugi com um cliente. Ela vai xingar o mundo inteiro, menos o mascate que trouxe as rendas dela.",
              "resultado": [
                "— E deixar sua mãe achar que você foi levada por qualquer um? — Armando balançou a cabeça. — Não. Isso eu não faço com ela.",
                "Ele entrou no bordel sem se despedir. Antes da meia-noite, Madalena sabia de tudo, e Gasparo dormia atravessado na minha porta."
              ]
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando",
          "cenario": "serra-verde"
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
              "texto": "— Se ela me ama de fato, uma hora vai entender o meu caminho.",
              "certa": true,
              "antes": [
                "Mas contrariá-lo era a escolha errada."
              ],
              "resultado": [
                "— Fizemos? Você fala como se eu já tivesse aceitado."
              ],
              "pontos": {
                "performance": 1
              },
              "fala": "— Se ela me ama de fato, uma hora vai entender que precisei escolher meu próprio caminho. E vai perdoar tanto a mim quanto a você pelo que fizemos."
            },
            {
              "texto": "— Orgulho? Ela me chama de pequena canção para me vender melhor. Isso não é amor, é propaganda.",
              "desvio": true,
              "resultado": [
                "Armando endureceu o queixo. — Cuidado com o que diz da sua mãe. Ela fez o que pôde, no mundo que tinha.",
                "Ele gostava dela. E eu precisava dele do meu lado, não do lado de Madalena. Engoli a revolta e tentei de novo, mais macia."
              ]
            },
            {
              "texto": "— Você tem razão. Talvez eu devesse conversar com ela antes de qualquer coisa.",
              "resultado": [
                "Armando sorriu, aliviado. — É isso. Converse com ela. Se ela concordar, eu te levo.",
                "Eu tinha dado a ele a saída que ele procurava. Madalena nunca concordou, e na véspera do meu aniversário a loja-carruagem partiu sem mim."
              ]
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando",
          "cenario": "serra-verde"
        },
        {
          "titulo": "O aceite",
          "texto": [
            "Ele ainda não tinha concordado, era verdade. Mas, se fosse recusar, bastaria ter dado as costas e entrado no bordel. No fundo, a permanência dele ali era prova do aceite."
          ],
          "pergunta": "Como arrancar dele o sim?",
          "opcoes": [
            {
              "texto": "— Você é um homem bom. Não tem opção além de me ajudar.",
              "certa": true,
              "resultado": [
                "— Não sou um homem bom — disse ele, ainda olhando nos meus olhos —, mas também não sou um homem péssimo. Então, sim, eu te ajudarei a fugir. Sairemos na véspera do seu aniversário, pela manhã."
              ],
              "pontos": {
                "persuasao": 1
              }
            },
            {
              "texto": "— Ainda não aceitou, mas já está fazendo as contas de quanto vai vender comigo na boleia.",
              "desvio": true,
              "resultado": [
                "Armando riu, mas não com os olhos. — Não reduza isso a dinheiro, menina. Se fosse só dinheiro, eu já tinha ido embora.",
                "Não era o lucro que o segurava ali. Era outra coisa, e eu sabia o nome dela."
              ]
            },
            {
              "texto": "— Já aceitou, sim. Minha mãe mesma disse que você me levaria.",
              "resultado": [
                "— Disse, é? — Armando ergueu as sobrancelhas. — Então vamos perguntar a ela juntos.",
                "Ele me pegou pelo braço e me levou para dentro. Madalena ouviu tudo, sorriu para ele e, quando ele saiu, me trancou no quarto até a loja-carruagem deixar Serra Verde."
              ]
            }
          ],
          "quando": "4 dias antes, ao anoitecer",
          "com": "armando",
          "cenario": "serra-verde"
        },
        {
          "titulo": "A vassoura",
          "texto": [
            "Um dia antes da fuga, varri o salão bem cedinho, cantarolando todas as cantigas que eu sabia.",
            "— Você parece feliz.",
            "Madalena estava recostada na porta da cozinha. Há quanto tempo me observava?",
            "— Acordou cedo por quê, mãe?",
            "— Fui resolver um negócio, mas não mude de assunto. Adoraria saber o motivo dessa felicidade toda."
          ],
          "pergunta": "Como explicar tanta alegria sem me entregar?",
          "opcoes": [
            {
              "texto": "— É puro nervosismo. Quem canta seus males espanta, não é?",
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
              },
              "fala": "— Na verdade, é puro nervosismo. Mas, como o povo diz: “quem canta seus males espanta”, então estou testando esse provérbio."
            },
            {
              "texto": "— Um cliente me deu uma gorjeta gorda ontem à noite, mãe.",
              "desvio": true,
              "resultado": [
                "— Gorjeta? — Madalena estendeu a mão aberta. — Então me mostre. Todo passarinho que entra nesta casa passa pela minha mão.",
                "Eu não tinha gorjeta nenhuma para mostrar. Ela estreitou os olhos, e eu ri, como quem confessa uma brincadeira."
              ]
            },
            {
              "texto": "— Porque daqui a pouco tudo isso acaba, mãe.",
              "resultado": [
                "— Acaba? — Madalena desencostou da porta. — O que é que acaba, pequena canção?",
                "Gaguejei qualquer coisa sobre a minha primeira vez, mas era tarde. Ela passou o dia inteiro de olho em mim, e à noite mandou Gasparo vigiar a porta dos fundos. A loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes do aniversário, de manhã",
          "com": "madalena",
          "cenario": "serra-verde"
        },
        {
          "titulo": "O sortudo",
          "texto": [
            "— Mas e então? — Ela repousou a mão gentilmente no meu antebraço. — Você já escolheu quem será o sortudo?",
            "— Nenhum deles, pode ter certeza — era o que eu queria dizer."
          ],
          "pergunta": "Dizer o que eu pensava, ou o que ela aguentava ouvir?",
          "opcoes": [
            {
              "texto": "— Ainda não. Nenhum deles “merece” ser minha primeira vez.",
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
              },
              "fala": "— Ainda não. Parece que nenhum deles “merece” ser minha primeira vez."
            },
            {
              "texto": "— Já escolhi, mas é segredo. A senhora vai saber na hora.",
              "desvio": true,
              "resultado": [
                "— Segredo, comigo? — Madalena riu. — Então diga um nome. Um só.",
                "Abri a boca e nenhum nome saiu. Ela riu mais alto. — Foi o que pensei.",
                "Mentira sem nome não para em pé. Encolhi os ombros e tentei de novo."
              ]
            },
            {
              "texto": "— Nenhum deles. Não vou me deitar com ninguém, mãe. Com ninguém.",
              "resultado": [
                "O sorriso de Madalena sumiu. — Vai, sim. Nem que eu tenha que decidir tudo por você.",
                "Desde aquela manhã, ela não me deixou sozinha nem para buscar água no poço. Na véspera do meu aniversário, a loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes do aniversário, de manhã",
          "com": "madalena",
          "cenario": "serra-verde"
        },
        {
          "titulo": "A escolha da mãe",
          "texto": [
            "Abaixei a cabeça, ciente de que não adiantaria nada discutir.",
            "— Pode ser… — murmurei.",
            "Madalena apoiou o indicador no meu queixo e levantou meu rosto.",
            "— Nós duas sabemos que você não escolherá ninguém. Então deixe a mamãe escolher por você.",
            "A primeira frase gelou minha espinha, porém a segunda acalmou meus nervos."
          ],
          "pergunta": "Como ganhar tempo sem levantar suspeitas?",
          "opcoes": [
            {
              "texto": "— Eu ainda tenho tempo. O combinado é só amanhã à noite.",
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
              "texto": "— Pode escolher, mãe. Eu confio na senhora.",
              "desvio": true,
              "resultado": [
                "Madalena estreitou os olhos. — Desde quando você confia em mim sem discutir?",
                "Docilidade demais era tão suspeita quanto rebeldia. Apertei o cabo da vassoura e emendei, com o tom de sempre:"
              ]
            },
            {
              "texto": "— Não. Quem escolhe sou eu, ou não vai ser ninguém.",
              "resultado": [
                "— Então vai ser quem eu mandar.",
                "Ela chamou Gasparo antes do almoço. Daquele dia em diante, ele passou a me seguir até a porta do lavabo. Na véspera do meu aniversário, a loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes do aniversário, de manhã",
          "com": "madalena",
          "cenario": "serra-verde"
        }
      ],
      "fecho": [
        "O resto do dia passou como qualquer outro. Madalena apontava defeitos na maneira como eu segurava a faca, no tamanho dos legumes, no sal do frango. Ainda assim, cozinhar com ela me lembrava tempos mais simples.",
        "Usei aquela manhã como minha despedida silenciosa."
      ],
      "cenario": "serra-verde",
      "imagem": {
        "arquivo": "img/espelho-cor.jpg",
        "descricao": "Madalena, de corpete vermelho, arruma Carmen diante do espelho da penteadeira."
      }
    },
    {
      "titulo": "A fuga",
      "abertura": [
        "Na última noite antes da fuga, o bordel de Madalena recebeu uma visita que ninguém esperava."
      ],
      "cenas": [
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
              "texto": "— Com licença, vou buscar mais vinho na cozinha.",
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
              "texto": "Ir até Armando e sussurrar: — Vá embora antes que ela desça. Ela vai escolher o Ilustre, e eu não quero te ver humilhado.",
              "desvio": true,
              "resultado": [
                "Armando nem olhou para mim. — Se eu sair agora, aí é que vão rir de mim.",
                "Ao lado dele, Jaime ergueu uma sobrancelha. — Segredinhos com o mascate, menina?",
                "— Só perguntando se ele queria mais vinho — ri, alto demais. Melhor sumir dali antes que alguém juntasse as peças."
              ]
            },
            {
              "texto": "— Senhor Jaime, minha mãe está indisposta hoje. Talvez seja melhor voltar amanhã.",
              "resultado": [
                "— Indisposta? A Mada? — Jaime gargalhou e encheu os pulmões. — MADA! Desce, que sua filha está dizendo que você morreu!",
                "Madalena desceu radiante e me lançou um olhar que valia mais que um tapa. Mais tarde, no corredor, sibilou: — Mentir para um Ilustre, na minha casa?",
                "Daquela noite em diante, Gasparo não saiu mais da minha porta. Na véspera do meu aniversário, a loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "jaime",
          "cenario": "serra-verde"
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
              "texto": "— Não estou pronta, mãe. Diga que estou com o fluxo.",
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
              },
              "fala": "— Não estou pronta, mãe. Diga que estou com o fluxo, por favor. Peça para voltar amanhã."
            },
            {
              "texto": "— Eu não quero, mãe. Não com ele, não hoje.",
              "desvio": true,
              "resultado": [
                "O sorriso de Madalena não se mexeu um milímetro; só a voz endureceu. — Fala baixo. Aqui ninguém quer nada. A gente trabalha.",
                "Os clientes olhavam. Recusar ali, na frente de todo mundo, era mexer com o ganha-pão da casa inteira. Engoli o *não quero* e procurei uma desculpa."
              ]
            },
            {
              "texto": "— Mãe… está tudo girando… — E fingir um desmaio no meio do salão.",
              "resultado": [
                "Caí com toda a graça que consegui. Ouvi gritinhos, cadeiras arrastando, e então a mão de Madalena estalou de leve no meu rosto.",
                "— Levanta. Todo mundo viu que você caiu de bunda primeiro.",
                "Jaime riu até tossir. Madalena não riu. Ela conhecia aquele truque porque tinha sido ela quem me ensinou, e a partir dali não tirou mais os olhos de mim. A loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "madalena",
          "cenario": "serra-verde"
        },
        {
          "titulo": "Os netinhos",
          "texto": [
            "— Por favor, mãe. Minha primeira vez não pode ser com ele.",
            "— Não só pode como vai. E, aliás, você deveria estar me agradecendo por isso. Estou dando exatamente o que você me pediu: uma chance de se deitar com um homem só pelo resto da vida.",
            "— Você quer que eu seja concubina daquilo lá?",
            "— Não só isso, mas quero também que vocês me deem vários netinhos. Essas Ilustres têm mil e um empregados, e você pode viver de madame. Alexandro ainda é muito novinho para ter noiva. Faça ele se apaixonar por você bem antes da hora, e, mesmo que se case com uma Ilustre por obrigação, você continuará a viver como a preferida."
          ],
          "pergunta": "Bater de frente com ela, ou deixar que achasse que tinha vencido?",
          "opcoes": [
            {
              "texto": "Assentir, hesitante: — Está bem, mãe.",
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
              "texto": "Sorrir: — Já pensei em tudo, mãe. Esse menino vai comer na minha mão.",
              "desvio": true,
              "resultado": [
                "Madalena riu pelo nariz. — Não precisa exagerar, pequena canção. Ninguém está pedindo que você goste. Só que não faça cena.",
                "Eu tinha passado do ponto. Baixei os olhos e respondi do jeito que ela esperava."
              ]
            },
            {
              "texto": "Recuar um passo: — Não. Não vou ser concubina de ninguém.",
              "resultado": [
                "Madalena tirou a mão do meu ombro. — Então você vai ser o que eu mandar.",
                "Ela me levou pelo braço até o meu quarto e trancou a porta por fora. Só abriu na manhã seguinte, quando a loja de Armando já ia longe."
              ]
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "madalena",
          "cenario": "serra-verde"
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
              "texto": "Sentar ao lado dele: — Você está nervoso, não está? Também estou.",
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
              },
              "fala": "Sentar ao lado dele, segurar sua mão e dizer: — Você está bem nervoso para sua primeira vez, não está? Também estou."
            },
            {
              "texto": "Abrir a porta: — Vou buscar vinho para nós dois. Volto já.",
              "resultado": [
                "Gasparo estava no pé da escada, como se me esperasse. — Vinho, a esta hora? A senhora Madalena mandou a menina ficar no quarto.",
                "Jaime levou o filho embora, ofendido, e Madalena me trancou sozinha no meu quarto. Só abriu na manhã seguinte.",
                "Da janela, vi a esquina vazia: a loja de Armando tinha partido sem mim."
              ]
            },
            {
              "texto": "Ir até a janela: — Só preciso de um pouco de ar.",
              "resultado": [
                "Abri a janela. Lá embaixo, os guardas de Jaime fumavam encostados na carruagem dos Barbosa, de olho na rua. A loja de Armando só chegaria pela manhã.",
                "Fechei a janela devagar. Alexandro continuava na beira da cama, me olhando como se eu fosse pular de verdade. Era ele quem eu precisava resolver primeiro."
              ],
              "desvio": true
            }
          ],
          "quando": "2 dias antes, à noite",
          "com": "alexandro",
          "cenario": "serra-verde"
        },
        {
          "titulo": "O despertar",
          "texto": [
            "Quando abri os olhos, ainda estava escuro. Alexandro dormia pesado. Passei por cima dele sem tocá-lo e fui na ponta dos pés até a janela: a carruagem dos Barbosa continuava na frente do bordel e, no fim da rua, estava a loja itinerante.",
            "Armando tinha cumprido a palavra!",
            "Mordi o lábio para não comemorar em voz alta. Os guardas de Jaime ainda estavam postados na entrada."
          ],
          "pergunta": "Pular a janela, ou passar bem debaixo do nariz deles?",
          "opcoes": [
            {
              "texto": "Esconder as roupas num balde e sair pela porta da frente.",
              "certa": true,
              "ganha": [
                "botao"
              ],
              "antes": [
                "Andei de um lado para o outro sobre o tapete. Só uma poção de invisibilidade resolveria. Até que a ideia veio: quem disse que eles não poderiam me ver?"
              ],
              "resultado": [
                "Abri o armário só até a metade, porque a porta estalava. Vesti uma roupa leve e peguei a saca com meus vestidos prediletos. No chão, perto da bota de Alexandro, brilhava um botão de punho de prata, com o brasão dos Barbosa. Guardei-o também.",
                "No lavabo, despejei tudo num balde de madeira, segurei a alça de ferro e caminhei confiante rumo à saída."
              ],
              "pontos": {
                "astucia": 1
              },
              "fala": "Esconder as roupas favoritas num balde de madeira e sair pela porta da frente, como quem vai lavar roupa."
            },
            {
              "texto": "Pular a janela e correr até a esquina, antes que clareie.",
              "desvio": true,
              "resultado": [
                "Passei uma perna pelo peitoril e olhei para baixo. Os guardas estavam bem ali, fumando encostados na carruagem. Se eu pulasse, cairia praticamente no colo deles, e eles viriam me interrogar.",
                "Recolhi a perna devagar. Eu não precisava sair escondida. Precisava sair de um jeito que ninguém estranhasse."
              ]
            },
            {
              "texto": "Acordar Alexandro e pedir que ele me acompanhe até a rua.",
              "resultado": [
                "Alexandro abriu um olho, depois o outro. — Passear? Agora? — Ele se sentou, de repente bem acordado. — Meu pai disse para eu não te deixar sair do quarto até ele voltar.",
                "Ele não era mau. Era só obediente. Quando Jaime bateu à porta, já com o sol alto, a loja de Armando tinha ido embora."
              ]
            }
          ],
          "quando": "Véspera do aniversário, madrugada",
          "cenario": "serra-verde"
        },
        {
          "titulo": "O balde",
          "texto": [
            "Assim que me aproximei da porta, o guarda mais alto e magro me barrou com o olhar.",
            "— Meio cedo para lavar roupas, não?"
          ],
          "pergunta": "O que dizer para ele me deixar passar?",
          "opcoes": [
            {
              "texto": "— Cedo para quem? Se me atrasarem, minha mãe come o fígado de vocês.",
              "certa": true,
              "resultado": [
                "— Pare de a atazanar e deixe-a ir logo — disse o outro guarda.",
                "Desci os degraus. Uma brisa matinal balançou a saia do meu vestido, e um arrepio libertador percorreu meus braços.",
                "Na esquina, Armando cochilava na boleia. Antes que a loja se afastasse, ergui o braço e lhe estendi o dedo do meio. Assim, os guardas achariam que eu o tinha mandado pastar, em vez de estar mancomunada com o mascate.",
                "Minutos depois, do outro lado da ponte do rio, subi na boleia ao lado dele. Serra Verde ficou para trás."
              ],
              "pontos": {
                "humor": 1
              },
              "fala": "— Cedo para quem? Quando eu voltar, ainda tenho que arrumar toda a bagunça lá dentro. E, se ficarem me atrasando, minha mãe vai comer o meu fígado e, logo depois, o de vocês."
            },
            {
              "texto": "— É que derramei vinho no vestido. Preciso lavar antes que manche.",
              "resultado": [
                "O guarda franziu a testa e espiou dentro do balde. — Isso aqui não parece um vestido sujo. Parece uma mudança inteira.",
                "Meu coração parou. Mas guarda nenhum gosta de parecer que manda menos do que manda. Endireitei os ombros e mudei o tom."
              ],
              "desvio": true
            },
            {
              "texto": "— Estou indo embora de Serra Verde. E vocês nunca me viram.",
              "resultado": [
                "O guarda mais alto riu e segurou meu braço. — Nunca vimos, é? Então vamos ver o que o patrão acha disso.",
                "Jaime acordou Madalena. Madalena acordou a casa inteira. A loja de Armando partiu sem mim."
              ]
            }
          ],
          "quando": "Véspera do aniversário, amanhecer",
          "com": {
            "nome": "Os guardas"
          },
          "cenario": "serra-verde"
        },
        {
          "titulo": "A feira",
          "texto": [
            "Nunca imaginei que sairia de Serra Verde em uma loja puxada por burros. Mas eu não podia reclamar.",
            "No primeiro vilarejo, vesti um conjunto roxo e me exibi do alto da loja, como um manequim. Uma pequena multidão se reuniu.",
            "O problema: os maridos babavam ao me encarar. Entre tapas, beliscões e reprimendas, as esposas desistiram da compra e saíram puxando os homens pelo braço.",
            "— Carmen, você está afastando a clientela! Vá bater as pernas enquanto eu vendo como de costume.",
            "Desci emburrada e caminhei pela feira. Três moças de roupas recatadas me mediram de cima a baixo.",
            "— Olha só como ela está vestida — murmurou uma baixinha rechonchuda.",
            "— Está querendo chamar atenção — sussurrou a despeitada.",
            "— Deve ser uma mulher da vida — concluiu a nariguda.",
            "*Puta, não!*"
          ],
          "pergunta": "Revidar, engolir, ou virar o jogo?",
          "opcoes": [
            {
              "texto": "Sorrir: — Sou assistente de um mascate. Venham ver as peças da Capital.",
              "certa": true,
              "resultado": [
                "A nariguda levou a mão aos lábios e corou. Isso bastou para mim.",
                "— N-não — disse a rechonchuda. — Obrigada, mas…",
                "— Que nada, não precisa ter vergonha.",
                "Puxei a nariguda pelo braço. Sem olhar para trás, eu sabia que as outras duas nos seguiam."
              ],
              "pontos": {
                "persuasao": 1
              },
              "fala": "Encarar a nariguda até ela corar e, depois, sorrir: — Essa roupa é mesmo demais para uma feira. É que sou assistente de um mascate. Trouxemos peças lindíssimas da Capital. Vamos lá conferir juntas."
            },
            {
              "texto": "Erguer o nariz: — Sou noiva de um Ilustre da Capital. Mais respeito comigo.",
              "resultado": [
                "A nariguda riu alto. — Noiva de Ilustre, em cima de uma carroça de mascate?",
                "A risada dela atraiu a feira inteira. Quando a história chegou ao chefe da guarda, já tinha virado “a meretriz que se diz noiva de Ilustre”. Em meia hora, ele pediu que Armando recolhesse a mercadoria e seguisse viagem.",
                "Na vila seguinte, Armando me deu algumas andorinhas e uma carona de volta para o sul. A parceria tinha durado um dia."
              ]
            },
            {
              "texto": "Dar as costas: — Só estou de passagem.",
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
          },
          "cenario": "estrada"
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
              "texto": "Erguer o queixo dela: — Seus olhos são de mulher poderosa. O vestido é que não combina.",
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
              },
              "fala": "Erguer o queixo dela: — Discordo. Nos seus olhos há uma mulher poderosa que sabe o que quer. O que não combina com você é o que está vestindo agora."
            },
            {
              "texto": "Fechar a cortina: — Temos uns mais discretos naquela caixa, mais o seu estilo.",
              "resultado": [
                "Ela olhou os vestidos fora de estação com um desânimo educado e já ia agradecer quando eu reparei no jeito como os dedos dela tinham alisado o tecido do decotado.",
                "— Esquece a caixa — eu disse, puxando-a de volta para o espelho."
              ],
              "desvio": true
            },
            {
              "texto": "Piscar: — Leve o mais decotado. Vai fazer os homens da vila babarem.",
              "resultado": [
                "Ela empalideceu, como se eu tivesse lido em voz alta os comentários que ela mesma tinha feito sobre mim minutos antes.",
                "— Eu não sou desse tipo — disse, e desceu da cabine às pressas. As amigas foram atrás. Na feira inteira, ninguém mais chegou perto da loja."
              ]
            }
          ],
          "com": {
            "nome": "A nariguda"
          },
          "cenario": "estrada"
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
              "texto": "Virar de costas para a praça e cantar baixinho a canção de ninar.",
              "certa": true,
              "pontos": {
                "performance": 1
              },
              "resultado": [
                "Comecei num fio de voz, de costas para todo mundo, como se ainda estivesse no meu quarto.",
                "Na segunda estrofe, ouvi passos. Na terceira, cochichos. Quando abri os olhos e me virei, havia uma roda de mulheres em volta da loja, e duas já tinham um xale na mão.",
                "— Viu? — disse Armando, embrulhando as compras. — Amanhã, de frente."
              ],
              "fala": "Virar de costas para a praça, fechar os olhos e cantar baixinho a canção de ninar de Madalena."
            },
            {
              "texto": "Recusar: — Eu sou manequim, Armando. Não sou cantora de praça.",
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
          "com": "armando",
          "cenario": "estrada"
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
              "texto": "Cantar a canção de ninar que Madalena cantava para mim.",
              "certa": true,
              "resultado": [
                "“Meu amor se foi / Mas jurou voltar / Na calada da noite / Sob a luz do luar…”",
                "Terminei de olhos fechados. Nada de aplausos. Armando encarava as chamas em silêncio e parecia limpar um olho que eu não conseguia enxergar.",
                "— Você pode cantar de novo?",
                "Cantei. Depois, ao erguer o copo, vi meu reflexo no suco escuro, iluminado pelo fogo, e entendi o que havia de familiar no perfil dele. Larguei o pão e toquei meu nariz."
              ],
              "pontos": {
                "performance": 1
              },
              "fala": "Cantar a canção de ninar que Madalena cantava para mim: “Sob a luz do luar”."
            },
            {
              "texto": "Cantar uma cantiga obscena do bordel, para fazê-lo rir.",
              "resultado": [
                "Armando, que nunca dizia um palavrão na minha frente, ficou vermelho até as orelhas e foi dormir mais cedo.",
                "Daquela noite em diante, ele me tratou como a moça do bordel que eu tinha sido. Em Pacentro, me deixou na porta da joalheria e seguiu viagem sem olhar para trás."
              ]
            },
            {
              "texto": "Recusar: só canto quando ninguém está olhando.",
              "resultado": [
                "A fogueira estalou em silêncio. Armando não insistiu; só ficou olhando as chamas, com cara de quem já tinha ouvido muitos nãos na vida.",
                "Foi essa cara que me venceu. — Está bem. Uma só. — E fechei os olhos."
              ],
              "desvio": true
            }
          ],
          "com": "armando",
          "cenario": "estrada"
        }
      ],
      "fecho": [
        "Juntos, viajamos de vilarejos a cidades maiores, coletando mais moedas do que cobradores de impostos. Na manhã seguinte à fogueira, avistamos Pacentro."
      ],
      "cenario": "serra-verde"
    },
    {
      "titulo": "A Capital",
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
            "Antes de me dar minha parte dos lucros, Armando me ajudaria a arranjar um emprego. Escolhi a joalheria da Dona Isolina, a que pagava melhor.",
            "— Ela tem beleza, bom gosto e muita lábia — disse Armando. — Por isso será uma ótima funcionária.",
            "Isolina recuou a mão.",
            "— Desculpa, mas não estou contratando. Tenho minha lojinha há décadas, e nunca precisei de ninguém."
          ],
          "pergunta": "Como fazer uma mulher que nunca precisou de ninguém precisar de mim?",
          "opcoes": [
            {
              "texto": "— A senhora trabalhou tanto esses anos. Não merece descansar um pouco?",
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
              },
              "fala": "— Pela beleza da loja, a senhora fez um trabalho excepcional esses anos todos. Não acha que, depois de tanto esforço, merece descansar um pouco?"
            },
            {
              "texto": "— Por favor, Dona Isolina. Acabei de chegar e não tenho para onde ir.",
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
          "com": "isolina",
          "cenario": "pacentro"
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
              "texto": "Entregar o brinco de bolinha: — É um clássico. Nunca sai de moda.",
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
              "texto": "Mostrar o de franja: — Este prateado valorizaria muito mais o seu rosto.",
              "resultado": [
                "O rosto rechonchudo se contorceu numa carranca. — Mudei de ideia. Quem sabe eu volte outro dia.",
                "Ela já tinha a mão na maçaneta. Engoli o meu palpite inteiro, sem mastigar. — Perdão, foi só uma ideia boba. A senhora tinha razão desde o começo."
              ],
              "desvio": true,
              "fala": "Explicar, com jeitinho, que um brinco de franja prateado valorizaria muito mais o rosto dela."
            },
            {
              "texto": "Fingir procurar: — O de bolinha acabou. Mas tenho um par mais bonito.",
              "resultado": [
                "Ela olhou por cima do meu ombro e apontou para a estante.",
                "— E aquele ali, o que é?",
                "Saiu da loja batendo a porta. Isolina, descendo a escada, ouviu a cliente me chamar de mentirosa. A chave sobressalente voltou para a gaveta dela."
              ]
            }
          ],
          "com": {
            "nome": "A cliente"
          },
          "cenario": "pacentro"
        },
        {
          "titulo": "A Ilustre de rosa",
          "desbloqueia": [
            "rosa"
          ],
          "texto": [
            "No fim da tarde, uma menina da minha idade, toda de rosa, entrou na loja como se fosse a dona e criticou cada peça da estante. Isolina a chamou de “donzela tão Ilustre”.",
            "Uma Ilustre! Comprando imitações. Pelo sotaque, devia ser do norte.",
            "Até que, para contar vantagem, ela soltou:",
            "— Recebemos cartas com o selo do rei. Vamos participar de uma avaliação para nos tornarmos Empregadas Reais. Assim, conseguirei um marido Ilustríssimo…",
            "*E se eu me infiltrar no palácio e participar dessa avaliação?*"
          ],
          "pergunta": "Perguntar direto, ou fazê-la falar sem perceber?",
          "opcoes": [
            {
              "texto": "— A competição deve ser acirrada… A senhorita sabe quantas candidatas são?",
              "certa": true,
              "resultado": [
                "Disparei as perguntas no ritmo dos pacentrenses. Ela ficou meio zonza.",
                "— Não faço ideia. O convite só falou em me convidar pela minha maioridade, e… o resto não te interessa.",
                "Bastava. Se uma Ilustre de terceira classe como ela tinha sido convidada, todas as Ilustres que acabavam de fazer a maioridade deviam ter sido também. Muitas candidatas, uma sem saber das outras. Dava para entrar no meio."
              ],
              "pontos": {
                "astucia": 1,
                "dinheiro": 2
              },
              "fala": "— Tenho certeza de que Vossa Ilustreza será aprovada. Mas as outras candidatas também são Ilustres, não são? A competição deve ser acirrada… A senhorita sabe quantas são?"
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
              "texto": "— Ouvi dizer na feira que essa avaliação foi cancelada. É verdade?",
              "resultado": [
                "— Cancelada? Quem te disse uma asneira dessas? — A menina de rosa largou as peças no balcão. — Vendedora que espalha boato não serve nem para embrulhar presente.",
                "Saiu sem comprar nada. Isolina não disse uma palavra. Só estendeu a mão aberta, esperando a chave sobressalente."
              ]
            }
          ],
          "com": "rosa",
          "cenario": "pacentro"
        },
        {
          "titulo": "A data",
          "texto": [
            "A menina pagou e já se dirigia à porta. Eu sabia quase tudo. Faltava o principal: quando seria a avaliação."
          ],
          "pergunta": "Como arrancar isso dela antes que saísse pela porta?",
          "opcoes": [
            {
              "texto": "Abrir a porta com uma mesura: — Rezarei pelo seu sucesso. É quando mesmo?",
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
              ],
              "fala": "Correr para abrir a porta com uma mesura: — Estarei rezando pelo seu sucesso. A avaliação será quando mesmo? Para eu saber quando acender as velas."
            },
            {
              "texto": "Suspirar: — Eu daria tudo para ver essa avaliação de perto. Quando vai ser?",
              "resultado": [
                "— Ver de perto? Que audácia.",
                "Ela me mediu dos pés à cabeça mais uma vez, demorada, como quem decora um rosto, e saiu sem responder."
              ]
            },
            {
              "texto": "Mostrar a vitrine: — Vai precisar de luvas novas para o grande dia. Ele é logo?",
              "resultado": [
                "— Logo o bastante — disse ela, já com a mão na porta. — Luvas eu tenho de sobra.",
                "Meia resposta para uma meia pergunta. Por sorte, a menina de rosa esqueceu as próprias luvas no balcão. Na manhã seguinte, voltou para buscá-las, e eu tive uma segunda chance."
              ],
              "desvio": true
            }
          ],
          "com": "rosa",
          "cenario": "pacentro"
        },
        {
          "titulo": "A taverna",
          "texto": [
            "Para juntar uns beija-flores a mais antes do domingo, passei a cantar à noite na taverna da esquina.",
            "Naquela noite, terminei a canção de ninar de Madalena, e um homem de casaca cor de vinho pôs um cartão no balcão.",
            "— Teatro Aurora, aqui mesmo em Pacentro — disse ele. — Procuro uma voz assim há dois anos. A vaga é sua, se começar comigo na segunda-feira."
          ],
          "pergunta": "Um palco de verdade. E o Palácio?",
          "opcoes": [
            {
              "texto": "— Agradeço, senhor. Mas já tenho outro palco em vista.",
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
              "texto": "— Eu? O senhor me confundiu com outra.",
              "desvio": true,
              "resultado": [
                "— Confundi? A senhorita acabou de cantar para trinta pessoas. — Ele riu e não tirou o cartão do balcão.",
                "Mentir para quem tinha acabado de me ouvir não ia colar. Respirei fundo e respondi como gente grande."
              ]
            },
            {
              "texto": "— Não posso. No domingo vou entrar no Palácio Real como Ilustre.",
              "resultado": [
                "O homem riu tão alto que a taverna inteira virou para nós. — Uma cantora de taverna, Ilustre? Essa eu conto no teatro!",
                "Contou. E não só no teatro. Até sexta, metade de Pacentro sabia da cantora que ia se fingir de Ilustre. No domingo, os Guardas Reais tinham a minha descrição."
              ]
            }
          ],
          "com": {
            "nome": "O empresário"
          },
          "cenario": "pacentro"
        },
        {
          "titulo": "A despedida",
          "texto": [
            "Na véspera do grande dia, Armando apareceu à minha porta todo arrumado e me entregou um saquinho de couro.",
            "— Você tem trabalhado duro e economizado bastante. Aqui está o seu dinheiro.",
            "Ele estava indo embora. Avancei e o abracei forte. Eu me sentia segura, como imaginava que uma filha se sentiria nos braços do pai.",
            "Desde a noite da fogueira, eu guardava uma suspeita a sete chaves. Agora não restavam dúvidas."
          ],
          "pergunta": "Dizer em voz alta, ou guardar para mim?",
          "opcoes": [
            {
              "texto": "Erguer o queixo: — Obrigada por tudo, pai.",
              "certa": true,
              "resultado": [
                "Ele empalideceu, e os braços dele afrouxaram.",
                "— Está tudo bem — continuei. — Não exigirei que você fique, nem te cobrarei nada por ser meu pai.",
                "— Eu não mereço ser chamado de pai. Eu não tirei sua mãe do bordel.",
                "— Quando eu mais precisava, você esteve lá por mim. É por isso que eu te perdoo, pai.",
                "Ele me esmagou num abraço, me agradecendo uma centena de vezes."
              ],
              "pontos": {
                "honestidade": 1
              }
            },
            {
              "texto": "Desviar o olhar: — Boa viagem.",
              "resultado": [
                "— Boa viagem — eu disse. Ele assentiu e se virou para a porta.",
                "As costas dele, o andar, o nariz de perfil contra a luz do corredor. Se ele saísse agora, eu passaria a vida inteira me perguntando. — Armando. Espera."
              ],
              "desvio": true
            },
            {
              "texto": "Cruzar os braços: — Não precisa voltar para me ver. Nunca precisei de ninguém.",
              "resultado": [
                "Armando saiu de cabeça baixa. Cedo demais: no livro, Carmen primeiro o perdoou. A raiva só veio quando ele contou por que nunca voltou."
              ]
            }
          ],
          "revela": [
            "armando"
          ],
          "com": "armando",
          "cenario": "pacentro"
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
              "texto": "— Você tem razão sobre o que me disse naquela noite. Você não é um homem bom.",
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
              "texto": "— Eu entendo, pai. Também teria vergonha.",
              "resultado": [
                "Carmen jamais diria isso. Entre o pai e a mãe, ela ficou do lado de Madalena. E foi essa briga que, meses depois, mandou Armando de volta a Serra Verde."
              ]
            },
            {
              "texto": "— Talvez ela ainda espere por você. Volte para Serra Verde e peça a mão dela.",
              "resultado": [
                "— Pedir a mão dela? — Armando riu sem alegria. — Depois de dezoito anos e de todos aqueles homens?",
                "E ali estava de novo, no rosto dele, o nojo. Não de si mesmo. Dela. De nós duas. A raiva subiu antes que eu pudesse engolir."
              ],
              "desvio": true
            }
          ],
          "com": "armando",
          "cenario": "pacentro"
        },
        {
          "titulo": "O mercado",
          "loja": true,
          "texto": [
            "Cheguei à joalheria atrasada, pingando de suor, e varri a loja enxugando lágrimas tímidas.",
            "Por que ele não mentiu para mim? Tinha sido bom imaginar que meu pai fosse uma boa pessoa.",
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
              "Abri o saquinho de couro que Armando me deu na despedida: a minha metade dos lucros da estrada."
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
          ],
          "cenario": "palacio"
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
              "texto": "Cortar os cabelos na altura dos ombros, como os da mãe.",
              "certa": true,
              "resultado": [
                "O cabeleireiro perguntou se eu tinha certeza. Engoli em seco e disse que sim.",
                "Para minha surpresa, sorri diante do resultado. A nuca exposta arrepiou com o ar. Cabelos curtos tinham muita personalidade. E, uma hora, cresceriam de novo.",
                "Depois, perfume de jasmim e almíscar, vestido azul-ciano, luvas bordadas e pérolas cultivadas idênticas às verdadeiras. Dona Isolina, sem saber de nada, me fez preço de custo."
              ],
              "pontos": {
                "astucia": 1
              },
              "fala": "Ir ao cabeleireiro e cortar os cabelos na altura dos ombros, como os da mãe."
            },
            {
              "texto": "Usar um chapéu de aba enorme, com véu cobrindo o rosto.",
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
          ],
          "cenario": "palacio"
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
              "texto": "— Vossa Ilustreza! O condutor de papai adoeceu. Leve-me ao Palácio, agora.",
              "certa": true,
              "resultado": [
                "O rosto dele corou profundamente. Fui até a porta da carruagem como quem nunca tinha ouvido um não na vida.",
                "— Entendido, Vossa Ilustreza. — Ele enfiou a garça no bolso. — Por sinal, como devo anunciá-la na entrada do Palácio Real?"
              ],
              "pontos": {
                "performance": 1
              },
              "fala": "— Senhorita, não: Vossa Ilustreza! O condutor que papai contratou está passando mal. Preciso que me leve agora para o Palácio Real. — E jogar uma garça de ouro no colo dele."
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
              "texto": "— Obrigada, mas prefiro caminhar até o Palácio. Faz bem à pele.",
              "resultado": [
                "A rotatória diante do palácio parecia interminável. Cheguei suada, com a barra do vestido cinza de poeira e os pés em carne viva dentro do scarpin.",
                "Os Guardas Reais nem me deixaram passar do portão. Ilustre nenhuma chegava a pé."
              ]
            },
            {
              "texto": "Mostrar a bolsinha de Madalena: — Pago o triplo, se me levar agora ao Palácio.",
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
              "texto": "Estender a mão enluvada ao cocheiro e esperar, sem dizer nada.",
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
          },
          "cenario": "palacio"
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
              "texto": "— Diga-lhes meu nome completo: Vivian Barbosa.",
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
              "texto": "— Carmen. Só Carmen.",
              "resultado": [
                "O cocheiro piscou, confuso. — Só Carmen, Vossa Ilustreza? De qual casa?",
                "Ilustre nenhuma tinha um nome só. Ri como se tivesse feito uma piada. — Carmen é como me chamam em casa. Para o palácio, use o nome completo."
              ],
              "desvio": true
            },
            {
              "texto": "— Carmen Barbosa. — Meu nome de verdade, com o sobrenome de outra.",
              "resultado": [
                "Funcionou com o cocheiro. Na mesa de entrada, a empregada procurou o nome na lista e ergueu os olhos.",
                "— Carmen Barbosa? Os Barbosa só têm uma filha, e ela não se chama Carmen.",
                "Eu não sabia responder nenhuma das perguntas que vieram depois."
              ]
            }
          ],
          "com": {
            "nome": "O cocheiro"
          },
          "cenario": "palacio"
        },
        {
          "titulo": "O convite",
          "desbloqueia": [
            "empregadas"
          ],
          "texto": [
            "O palácio era um edifício branco de quatro andares. No salão, Empregadas Reais conferiam as candidatas em uma mesa.",
            "— Convite — pediu a empregada da esquerda à Ilustre de amarelo, que tirou da bolsinha uma carta com o selo real.",
            "*Merda.*",
            "— Convite — pediu a empregada da direita, para mim.",
            "— E-eu deixei minha bolsa em casa… Não sabia que era para trazer.",
            "— Como assim você não sabia? — Ela abriu um sorriso de troça."
          ],
          "pergunta": "Engolir o deboche, ou devolvê-lo?",
          "opcoes": [
            {
              "texto": "— A carta não exigia o convite. Quem não foi chamada nem saberia do evento.",
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
              },
              "fala": "— A exigência de apresentação não estava prevista na carta. E só quem foi convidada apareceria aqui no dia exato, na hora exata. De que outra forma eu saberia de um evento tão discreto?"
            },
            {
              "texto": "— O convite? Entreguei a uma das suas colegas lá fora, agora mesmo.",
              "resultado": [
                "A empregada olhou para a porta, onde não havia colega nenhuma.",
                "— Guardas.",
                "Mentir sobre uma Empregada Real, dentro do Palácio Real, com a fila inteira ouvindo. Nem a Ilustre mais burra do reino faria isso."
              ]
            },
            {
              "texto": "— Eu não tenho o convite, mas meu nome deve estar na lista.",
              "resultado": [
                "— Então, senhorita, a saída é por ali.",
                "Dei dois passos pelo tapete vermelho antes de entender: se eu saísse, não voltaria. Dei meia-volta e encarei a empregada outra vez."
              ],
              "desvio": true
            },
            {
              "texto": "Pôr o botão dos Barbosa sobre a mesa: — Meu irmão esqueceu isto comigo. Serve?",
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
          "com": "empregadas",
          "cenario": "palacio"
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
              "texto": "Erguer a voz: — Isso é um absurdo! Exijo falar com a governanta.",
              "certa": true,
              "resultado": [
                "Minha voz ecoou sozinha pelo salão. As empregadas se entreolharam, aflitas, e só então repararam na fila que não parava de crescer.",
                "— Calma, não precisamos piorar a situação — sussurrou a “minha” empregada. — Se você não disser a ninguém a questão do nome, não diremos a ninguém a questão do convite. Estamos combinadas?",
                "Tive vontade de concordar na hora. Contei dois segundos inteiros antes de assentir.",
                "Ela pegou o bico de pena e acrescentou meu nome no fim da lista, com um visto de presença."
              ],
              "pontos": {
                "performance": 1
              },
              "fala": "Erguer a voz: — Isso é um absurdo! Exijo falar com a governanta. Se além de errarem os nomes vocês atrasarem o evento, ela vai comer o fígado de vocês."
            },
            {
              "texto": "Inclinar-se sobre a lista: — Às vezes erram meu nome. Veja se não está com W.",
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
              "texto": "Baixar a voz: — Talvez o meu nome nunca tenha estado aí.",
              "resultado": [
                "A empregada me encarou por um longo segundo. Depois ergueu dois dedos e chamou um guarda.",
                "Na lista dela, uma Ilustre sem nome era só uma plebeia bem vestida."
              ]
            }
          ],
          "com": "empregadas",
          "cenario": "palacio"
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
              "texto": "Dar uma piscadela: — Se tivesse me conhecido, não se esqueceria.",
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
              ],
              "fala": "Dar uma piscadela: — Se tivesse conhecido, você com certeza não se esqueceria de mim."
            },
            {
              "texto": "Dar de ombros: — Não. Duvido muito que já tenhamos nos visto.",
              "resultado": [
                "— Duvida? — Ela inclinou a cabeça e me examinou com calma. — Espera… essa voz…",
                "Antes que ela terminasse, abri o melhor sorriso que tinha aprendido no salão do bordel."
              ],
              "desvio": true
            },
            {
              "texto": "Rir: — Talvez da joalheria de Pacentro. Eu vendia brincos lá, sabia?",
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
              "texto": "Levar o lenço de Madalena ao nariz, entediada: — Conhecer, talvez. Lembrar, duvido.",
              "certa": true,
              "requer": "lenco",
              "resultado": [
                "Metade do meu rosto sumiu atrás do bordado. Só sobraram os olhos, e para os olhos da vendedora a menina de rosa nunca tinha olhado direito.",
                "Ela me analisou por alguns instantes, franziu o nariz como se eu tivesse ofendido o perfume dela e foi se posicionar bem longe de mim.",
                "Guardei o lenço. Pela primeira vez, Madalena tinha me salvado sem saber."
              ]
            },
            {
              "texto": "Abrir o leque diante do rosto: — Duvido. Eu me lembraria de um rosa tão… corajoso.",
              "requer": "leque",
              "certa": true,
              "resultado": [
                "Ela estreitou os olhos, tentando enxergar além das plumas. Só viu o leque, e uma Ilustre entediada.",
                "— Hum. Deve ter sido outra pessoa. — E voltou para perto das outras."
              ]
            }
          ],
          "com": "rosa",
          "cenario": "palacio"
        }
      ],
      "fecho": [
        "A entrada no palácio estava garantida.",
        "Agora, só faltava passar na avaliação."
      ],
      "cenario": "pacentro"
    }
  ],

  // Tela final
  "vitoria": [
    "Carmen chegou ao Palácio Real. Como Vivian Barbosa, filha de um Ilustre, no meio das donzelas mais prendadas do reino.",
    "Se ela vai passar na avaliação, se a farsa vai durar e quem ela vai encontrar lá dentro… isso o jogo não conta. O livro conta."
  ],

  "trocas": [
    {
      "marca": "franca-com-armando",
      "de": "— Quando eu mais precisava, você esteve lá por mim.",
      "por": "— Lá em Serra Verde, eu te contei a verdade e você acreditou em mim. Quando eu mais precisava, você esteve lá. É por isso que eu te perdoo, pai."
    },
    {
      "marca": "romances-para-valeria",
      "de": "— Não é verdade, Vivi?… Vivi?",
      "por": "— Não é verdade, Vivi?… Vivi? — Valéria me defendia no meio do salão. Depois, só para mim: — Nem os romances eram verdade, eram?"
    }
  ],

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
  }
};
