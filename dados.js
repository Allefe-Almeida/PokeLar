const tipos = {
    aco: "Aço",
    agua: "Água",
    dragao: "Dragão",
    eletrico: "Elétrico",
    fada: "Fada",
    fantasma: "Fantasma",
    fogo: "Fogo",
    gelo: "Gelo",
    inseto: "Inseto",
    lutador: "Lutador",
    normal: "Normal",
    pedra: "Pedra",
    planta: "Planta",
    psiquico: "Psíquico",
    sombrio: "Sombrio",
    terrestre: "Terrestre",
    venenoso: "Venenoso",
    voador: "Voador"
};

let dados = [
    {
        nome: "Bulbasaur",
        numero: "001",
        descricao: "Bulbasaur, o Pokémon semente, carrega uma semente nas costas desde que nasce. A semente cresce gradualmente com o Bulbasaur, e floresce quando ele evolui. Ele é conhecido por ser fácil de treinar, o que o torna um ótimo Pokémon inicial.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Ivysaur",
        numero: "002",
        descricao: "Ivysaur é a forma evoluída de Bulbasaur. À medida que evolui, a planta nas suas costas começa a desabrochar. Ivysaur é mais forte e mais resistente que sua forma anterior, mostrando sua ligação com a natureza e a energia solar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Venusaur",
        numero: "003",
        descricao: "Venusaur é a forma final de Bulbasaur, com uma enorme flor desabrochada nas costas. Essa flor absorve os raios solares para gerar energia e, quando recebe bastante sol, suas cores ficam mais vibrantes, exalando uma fragrância calmante.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Charmander",
        numero: "004",
        descricao: "Charmander tem uma chama queimando na ponta de sua cauda desde que nasce. Se a chama se apagar, isso significa que o Charmander está doente. Diz-se que a chama se torna mais forte com as emoções do Pokémon. Ele é conhecido por sua natureza curiosa e energia calorosa.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Charmeleon",
        numero: "005",
        descricao: "Charmeleon é a evolução de Charmander. Com uma personalidade mais agressiva, ele ataca seus oponentes com garras afiadas e poderosas rajadas de fogo. Sua chama fica ainda mais intensa quando ele está lutando.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Charizard",
        numero: "006",
        descricao: "Charizard é a forma final de Charmander. Charizard solta chamas intensas de sua boca para incinerar seus adversários. Diz-se que sua chama é tão quente que pode derreter até rochas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",
        tipo: [tipos.fogo, tipos.voador]
    },
    {
        nome: "Squirtle",
        numero: "007",
        descricao: "Squirtle se protege retraindo seu corpo dentro de sua carapaça. É capaz de nadar a grandes velocidades e usar jatos de água poderosos para atacar seus oponentes. Squirtle é conhecido por sua lealdade e determinação, sendo um excelente companheiro.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Wartortle",
        numero: "008",
        descricao: "Wartortle é a evolução de Squirtle e se destaca por sua longevidade e experiência. Sua cauda felpuda, que cresce à medida que envelhece e simboliza sabedoria. Ele usa suas orelhas e cauda para se mover rapidamente na água.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Blastoise",
        numero: "009",
        descricao: "Blastoise é a forma final de Squirtle. Ele possui dois canhões de água embutidos em sua carapaça, com os quais dispara jatos de água de alta pressão para derrubar seus oponentes. Sua resistência e poder defensivo o tornam um excelente defensor em batalhas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Caterpie",
        numero: "010",
        descricao: "Caterpie usa sua cor verde como camuflagem para se esconder de predadores. Ele é pequeno e lento, mas seus movimentos são simples e eficazes. Quando se sente ameaçado, libera um odor forte para afastar inimigos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png",
        tipo: [tipos.inseto]
    },
    {
        nome: "Metapod",
        numero: "011",
        descricao: "Metapod é a evolução de Caterpie. Seu corpo está em um estágio de transição, endurecido e imóvel dentro de um casulo. Embora não seja capaz de muitos movimentos, sua carapaça é extremamente resistente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png",
        tipo: [tipos.inseto]
    },
    {
        nome: "Butterfree",
        numero: "012",
        descricao: "Butterfree é a forma final de Caterpie. Suas asas estão cobertas por escamas que repelem água. Como resultado, este Pokémon pode voar mesmo em dias chuvosos. Além de voar grandes distâncias, Butterfree usa seu pólen para atacar e se defender de oponentes.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png",
        tipo: [tipos.inseto, tipos.voador]
    },
    {
        nome: "Weedle",
        numero: "013",
        descricao: "Weedle é um pequeno Pokémon com um ferrão venenoso em sua cabeça. Ele usa seu faro apurado para detectar folhas frescas, que são sua principal fonte de alimento.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png",
        tipo: [tipos.inseto, tipos.venenoso]
    },
    {
        nome: "Kakuna",
        numero: "014",
        descricao: "Kakuna é a evolução de Weedle. Embora sua aparência rígida e imóvel possa enganar, Kakuna está se preparando para sua próxima evolução. Ele endurece sua casca para se proteger de predadores.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png",
        tipo: [tipos.inseto, tipos.venenoso]
    },
    {
        nome: "Beedrill",
        numero: "015",
        descricao: "Beedrill é a forma final de Weedle. Com grandes ferrões em suas patas dianteiras e na cauda, ele é extremamente ágil e perigoso. Beedrill ataca em grupo para proteger seu território.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png",
        tipo: [tipos.inseto, tipos.venenoso]
    },
    {
        nome: "Pidgey",
        numero: "016",
        descricao: "Pidgey é extremamente dócil e prefere evitar conflitos. Usa suas asas para levantar poeira e desorientar seus inimigos, permitindo que fuja com facilidade.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png",
        tipo: [tipos.normal, tipos.voador]
    },
    {
        nome: "Pidgeotto",
        numero: "017",
        descricao: "Pidgeotto é a evolução de Pidgey. Ele possui uma incrível visão, que lhe permite detectar presas a grandes distâncias. É um Pokémon territorial que defende seu território com grande ferocidade.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
        tipo: [tipos.normal, tipos.voador]
    },
    {
        nome: "Pidgeot",
        numero: "018",
        descricao: "Pidgeot é a forma final de Pidgey, conhecido por sua grande envergadura e velocidade de voo impressionante. Com sua plumagem brilhante, ele é um símbolo de graça e poder no céu.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png",
        tipo: [tipos.normal, tipos.voador]
    },
    {
        nome: "Rattata",
        numero: "019",
        descricao: "Rattata é extremamente rápido e sempre alerta. Ele se adapta facilmente a qualquer ambiente, vivendo em grupos e se reproduzindo rapidamente, o que o torna comum em várias regiões.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Raticate",
        numero: "020",
        descricao: "Raticate é a evolução de Rattata. Seus dentes crescem constantemente, então ele precisa roer objetos duros para mantê-los afiados. É um Pokémon agressivo e determinado, sempre em busca de alimento.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Spearow",
        numero: "021",
        descricao: "Spearow é um Pokémon pequeno e agressivo, conhecido por sua natureza hostil. Ele se destaca pelo seu voo rápido e gritos altos, que usa para intimidar predadores e rivais.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png",
        tipo: [tipos.normal, tipos.voador]
    },
    {
        nome: "Fearow",
        numero: "022",
        descricao: "Fearow é a evolução de Spearow e é conhecido por sua impressionante velocidade e ferocidade em batalha. Com suas grandes asas, ele pode atacar rapidamente e causar danos significativos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png",
        tipo: [tipos.normal, tipos.voador]
    },
    {
        nome: "Ekans",
        numero: "023",
        descricao: "Ekans é um Pokémon serpente que se esconde em gramas e arbustos. Ele é um predador astuto que se move silenciosamente, surpreendendo suas presas com sua velocidade.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Arbok",
        numero: "024",
        descricao: "Arbok é a evolução de Ekans e possui um padrão de coloração em sua barriga que é usado para intimidar seus adversários. Ele é conhecido por sua habilidade em se infiltrar nas sombras e atacar de surpresa.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Pikachu",
        numero: "025",
        descricao: "Pikachu é conhecido por armazenar eletricidade em suas bochechas e liberá-la em forma de poderosos choques elétricos. É conhecido por sua personalidade brincalhona, mas protetora. Pikachu é um dos Pokémon mais reconhecidos e se tornou o mascote da franquia Pokémon.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
        tipo: [tipos.eletrico]
    },
    {
        nome: "Raichu",
        numero: "026",
        descricao: "Raichu é a evolução de Pikachu e possui uma carga elétrica ainda mais poderosa. Ele usa sua cauda como aterramento para descarregar energia acumulada, prevenindo sobrecargas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",
        tipo: [tipos.eletrico]
    },
    {
        nome: "Sandshrew",
        numero: "027",
        descricao: "Sandshrew possui uma pele dura e resistente que o protege contra ataques. Ele se enrola em uma bola para evitar danos e se enterrar rapidamente no solo.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png",
        tipo: [tipos.terrestre]
    },
    {
        nome: "Sandslash",
        numero: "028",
        descricao: "Sandslash, evolução de Sandshrew, é conhecido por seus espinhos afiados que usa para atacar e se defender. Ele cava com suas garras para se proteger e emboscar presas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png",
        tipo: [tipos.terrestre]
    },
    {
        nome: "Nidoran♀",
        numero: "029",
        descricao: "Nidoran♀ é um Pokémon pequeno e cauteloso, com espinhos venenosos que usa para se defender. Ele evita confrontos, mas está sempre pronto para proteger seu território.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Nidorina",
        numero: "030",
        descricao: "Nidorina é a evolução de Nidoran♀ e é ainda mais cuidadosa. Seus espinhos retráteis a ajudam a evitar conflitos desnecessários, especialmente em momentos de repouso.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Nidoqueen",
        numero: "031",
        descricao: "Nidoqueen é a forma final de Nidoran♀, conhecida por sua força e defesa. Ela usa seu corpo resistente para proteger aqueles que ama e seu território.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png",
        tipo: [tipos.venenoso, tipos.terrestre]
    },
    {
        nome: "Nidoran♂",
        numero: "032",
        descricao: "Nidoran♂ é um Pokémon que utiliza seus espinhos venenosos em combate. Ele é agressivo quando se sente ameaçado, mas também é leal aos seus aliados.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/032.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Nidorino",
        numero: "033",
        descricao: "Nidorino é a evolução de Nidoran♂. Ele possui chifres ainda mais venenosos, que utiliza para enfrentar adversários fortes e proteger seu grupo.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Nidoking",
        numero: "034",
        descricao: "Nidoking é a forma final de Nidoran♂, famoso por sua grande força e resistência. Ele usa sua cauda para destruir obstáculos e dominar adversários.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png",
        tipo: [tipos.venenoso, tipos.terrestre]
    },
    {
        nome: "Clefairy",
        numero: "035",
        descricao: "Clefairy é um Pokémon gentil e tímido, que acredita-se ter vindo da lua. Suas asas permitem flutuar brevemente, e é famoso por seu canto suave.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png",
        tipo: [tipos.fada]
    },
    {
        nome: "Clefable",
        numero: "036",
        descricao: "Clefable é a evolução de Clefairy, conhecido por sua graça e habilidades mágicas. Ele adora caminhar à noite e é raramente visto por humanos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png",
        tipo: [tipos.fada]
    },
    {
        nome: "Vulpix",
        numero: "037",
        descricao: "Vulpix é um Pokémon de fogo que nasce com uma única cauda, que se divide em várias conforme cresce. Ele controla o fogo para se proteger.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Ninetales",
        numero: "038",
        descricao: "Ninetales é a evolução de Vulpix e possui uma beleza misteriosa. Ele é cercado por lendas devido aos seus poderes místicos e longevidade.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Jigglypuff",
        numero: "039",
        descricao: "Jigglypuff é famoso por sua habilidade de fazer qualquer um dormir ao cantar. Seu canto suave é encantador e é usado como defesa.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png",
        tipo: [tipos.fada, tipos.normal]
    },
    {
        nome: "Wigglytuff",
        numero: "040",
        descricao: "Wigglytuff é a evolução de Jigglypuff e é conhecido por sua natureza carinhosa e pele macia. Ele infla seu corpo para assustar inimigos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/040.png",
        tipo: [tipos.fada, tipos.normal]
    },
    {
        nome: "Zubat",
        numero: "041",
        descricao: "Zubat é um Pokémon noturno que navega no escuro usando ecolocalização. Ele se esconde em cavernas durante o dia para evitar o sol.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png",
        tipo: [tipos.venenoso, tipos.voador]
    },
    {
        nome: "Golbat",
        numero: "042",
        descricao: "Golbat é a evolução de Zubat, com presas afiadas para sugar sangue. Ele caça em grupo, usando a escuridão para se mover em silêncio.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/042.png",
        tipo: [tipos.venenoso, tipos.voador]
    },
    {
        nome: "Oddish",
        numero: "043",
        descricao: "Oddish é um Pokémon planta que absorve nutrientes do solo. Ele se enterra durante o dia e emerge à noite para espalhar suas sementes.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/043.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Gloom",
        numero: "044",
        descricao: "Gloom, evolução de Oddish, é conhecido por seu aroma forte. Ele libera uma secreção malcheirosa que repele predadores.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/044.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Vileplume",
        numero: "045",
        descricao: "Vileplume, forma final de Oddish, possui uma flor gigante que espalha esporos venenosos. Ele é atraente, mas perigoso.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Paras",
        numero: "046",
        descricao: "Paras vive em florestas e possui fungos em seu corpo que o fortalecem. Ele consome nutrientes do solo para sustentar os fungos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png",
        tipo: [tipos.inseto, tipos.planta]
    },
    {
        nome: "Parasect",
        numero: "047",
        descricao: "Parasect, evolução de Paras, é controlado pelos fungos em seu corpo. Ele lança esporos para se defender e dominar o ambiente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/047.png",
        tipo: [tipos.inseto, tipos.planta]
    },
    {
        nome: "Venonat",
        numero: "048",
        descricao: "Venonat é coberto de pelos que o ajudam a sentir o ambiente. Ele caça insetos à noite e possui habilidades venenosas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/048.png",
        tipo: [tipos.inseto, tipos.venenoso]
    },
    {
        nome: "Venomoth",
        numero: "049",
        descricao: "Venomoth, evolução de Venonat, caça à noite usando suas asas para espalhar pó venenoso. Ele é ágil e difícil de capturar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/049.png",
        tipo: [tipos.inseto, tipos.venenoso]
    },
    {
        nome: "Diglett",
        numero: "050",
        descricao: "Diglett vive subterrâneo e é sensível à luz solar. Ele ajuda a cultivar solo fértil ao escavar túneis.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png",
        tipo: [tipos.terrestre]
    },
    {
        nome: "Dugtrio",
        numero: "051",
        descricao: "Dugtrio é uma trinca de Digletts que trabalha em conjunto para cavar túneis. Sua habilidade de escavação é impressionante.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/051.png",
        tipo: [tipos.terrestre]
    },
    {
        nome: "Meowth",
        numero: "052",
        descricao: "Meowth é um Pokémon curioso que ama objetos brilhantes. Ele é ágil e possui garras afiadas que usa para roubar e se defender.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Persian",
        numero: "053",
        descricao: "Persian, evolução de Meowth, é um Pokémon elegante e astuto. Ele caça silenciosamente, atraindo atenção por sua beleza e graça.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/053.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Psyduck",
        numero: "054",
        descricao: "Psyduck sofre de dores de cabeça frequentes, que aumentam seus poderes psíquicos. Ele libera energia psíquica de forma involuntária.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Golduck",
        numero: "055",
        descricao: "Golduck, evolução de Psyduck, é um nadador ágil com habilidades psíquicas. Ele é conhecido por sua velocidade e força na água.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/055.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Mankey",
        numero: "056",
        descricao: "Mankey é um Pokémon temperamental que se irrita facilmente. Ele se move em grupo e ataca ferozmente quando provocado.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/056.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Primeape",
        numero: "057",
        descricao: "Primeape, evolução de Mankey, é conhecido por sua raiva incontrolável. Ele luta com muita força e rapidez, atacando sem descanso.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/057.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Growlithe",
        numero: "058",
        descricao: "Growlithe é um Pokémon leal e corajoso que protege seu território com firmeza. Ele possui um forte instinto de proteção.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Arcanine",
        numero: "059",
        descricao: "Arcanine é um Pokémon poderoso e veloz, conhecido por sua bravura. Ele corre a grandes velocidades, sendo admirado como símbolo de coragem.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Poliwag",
        numero: "060",
        descricao: "Poliwag é um Pokémon aquático com uma pele lisa e translúcida. Ele nada com facilidade e usa sua cauda como leme.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Poliwhirl",
        numero: "061",
        descricao: "Poliwhirl, evolução de Poliwag, possui uma pele escorregadia e é um exímio nadador. Ele usa suas pernas fortes para se mover com agilidade na água.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/061.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Poliwrath",
        numero: "062",
        descricao: "Poliwrath, evolução de Poliwhirl, é um Pokémon forte e determinado. Ele usa seus músculos para nadar grandes distâncias com facilidade.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/062.png",
        tipo: [tipos.agua, tipos.lutador]
    },
    {
        nome: "Abra",
        numero: "063",
        descricao: "Abra é um Pokémon psíquico que dorme a maior parte do tempo. Ele é capaz de se teletransportar para fugir do perigo.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Kadabra",
        numero: "064",
        descricao: "Kadabra, evolução de Abra, possui poderes psíquicos mais desenvolvidos. Ele pode manipular objetos com sua mente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/064.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Alakazam",
        numero: "065",
        descricao: "Alakazam é a forma final de Abra, com um intelecto superior. Ele usa colheres para amplificar seus poderes psíquicos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Machop",
        numero: "066",
        descricao: "Machop é um Pokémon forte e determinado que treina constantemente. Ele é pequeno, mas possui muita força física.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Machoke",
        numero: "067",
        descricao: "Machoke, evolução de Machop, é extremamente musculoso. Ele treina diariamente para manter seu corpo forte e ágil.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Machamp",
        numero: "068",
        descricao: "Machamp é a forma final de Machop, conhecido por sua força extraordinária. Ele possui quatro braços que usa para dominar qualquer oponente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Bellsprout",
        numero: "069",
        descricao: "Bellsprout é um Pokémon planta que se adapta ao ambiente. Ele usa suas raízes para se firmar e absorver nutrientes.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Weepinbell",
        numero: "070",
        descricao: "Weepinbell, evolução de Bellsprout, usa um pó venenoso para se defender. Ele se pendura em árvores para descansar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/070.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Victreebel",
        numero: "071",
        descricao: "Victreebel, forma final de Bellsprout, atrai presas com seu aroma doce. Ele possui uma boca poderosa para capturar e digerir presas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/071.png",
        tipo: [tipos.planta, tipos.venenoso]
    },
    {
        nome: "Tentacool",
        numero: "072",
        descricao: "Tentacool vive nos oceanos e usa seus tentáculos venenosos para se defender. Ele se desidrata rapidamente se exposto ao sol.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/072.png",
        tipo: [tipos.agua, tipos.venenoso]
    },
    {
        nome: "Tentacruel",
        numero: "073",
        descricao: "Tentacruel é a evolução de Tentacool, com tentáculos venenosos longos e fortes. Ele pode controlar seus tentáculos com grande precisão.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/073.png",
        tipo: [tipos.agua, tipos.venenoso]
    },
    {
        nome: "Geodude",
        numero: "074",
        descricao: "Geodude é um Pokémon rochoso que vive nas montanhas. Ele possui um corpo duro que se confunde facilmente com pedras.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png",
        tipo: [tipos.pedra, tipos.terrestre]
    },
    {
        nome: "Graveler",
        numero: "075",
        descricao: "Graveler, evolução de Geodude, rola montanha abaixo para se mover. Ele consome pedras para fortalecer seu corpo.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/075.png",
        tipo: [tipos.pedra, tipos.terrestre]
    },
    {
        nome: "Golem",
        numero: "076",
        descricao: "Golem é a forma final de Geodude, com um corpo rochoso extremamente duro. Ele é capaz de explodir em combate para causar grandes danos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/076.png",
        tipo: [tipos.pedra, tipos.terrestre]
    },
    {
        nome: "Ponyta",
        numero: "077",
        descricao: "Ponyta é um Pokémon ágil e rápido com uma crina flamejante. Ele se torna cada vez mais rápido conforme treina.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/077.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Rapidash",
        numero: "078",
        descricao: "Rapidash, evolução de Ponyta, é extremamente veloz e conhecido por sua crina de fogo. Ele pode alcançar grandes velocidades em poucos segundos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/078.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Slowpoke",
        numero: "079",
        descricao: "Slowpoke é um Pokémon preguiçoso e lento. Ele frequentemente se perde em seus pensamentos, ignorando o ambiente ao redor.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/079.png",
        tipo: [tipos.agua, tipos.psiquico]
    },
    {
        nome: "Slowbro",
        numero: "080",
        descricao: "Slowbro, evolução de Slowpoke, ganha uma concha que o protege. Ele é mais atento e consegue lutar melhor que sua forma anterior.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/080.png",
        tipo: [tipos.agua, tipos.psiquico]
    },
    {
        nome: "Magnemite",
        numero: "081",
        descricao: "Magnemite é um Pokémon elétrico que flutua usando campos magnéticos. Ele é atraído por fontes de energia elétrica.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/081.png",
        tipo: [tipos.eletrico, tipos.aco]
    },
    {
        nome: "Magneton",
        numero: "082",
        descricao: "Magneton é uma união de três Magnemites, aumentando seu poder. Ele emite ondas que afetam dispositivos eletrônicos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/082.png",
        tipo: [tipos.eletrico, tipos.aco]
    },
    {
        "nome": "Farfetch´d",
        "numero": "083",
        "descricao": "Farfetch´d carrega um talo que usa como arma. Ele é ágil e protege seu talo com dedicação.",
        "imagem": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/083.png",
        "tipo": ["voador", "normal"]
    },
    {
        nome: "Doduo",
        numero: "084",
        descricao: "Doduo é um Pokémon de duas cabeças que corre rápido. Suas cabeças pensam de maneira independente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/084.png",
        tipo: [tipos.voador, tipos.normal]
    },
    {
        nome: "Dodrio",
        numero: "085",
        descricao: "Dodrio possui três cabeças que observam tudo ao redor. Ele é rápido e usa as cabeças para vigiar o ambiente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/085.png",
        tipo: [tipos.voador, tipos.normal]
    },
    {
        nome: "Seel",
        numero: "086",
        descricao: "Seel vive em ambientes frios e é um excelente nadador. Ele usa sua cauda para se locomover na água.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/086.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Dewgong",
        numero: "087",
        descricao: "Dewgong, evolução de Seel, é mais adaptado ao gelo. Ele nada rapidamente e é resistente a ambientes frios.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/087.png",
        tipo: [tipos.agua, tipos.gelo]
    },
    {
        nome: "Grimer",
        numero: "088",
        descricao: "Grimer é um Pokémon de lama tóxica. Ele se move lentamente, deixando um rastro de poluição.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/088.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Muk",
        numero: "089",
        descricao: "Muk, evolução de Grimer, é altamente tóxico. Ele libera um odor potente e contamina o solo ao redor.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/089.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Shellder",
        numero: "090",
        descricao: "Shellder é um Pokémon de concha que se fecha para se proteger. Ele vive no fundo do mar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/090.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Cloyster",
        numero: "091",
        descricao: "Cloyster, evolução de Shellder, possui uma concha resistente. Ele usa espinhos para se defender de ameaças.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/091.png",
        tipo: [tipos.agua, tipos.gelo]
    },
    {
        nome: "Gastly",
        numero: "092",
        descricao: "Gastly é um Pokémon gasoso que se move como uma névoa. Ele é intangível e pode atravessar paredes.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/092.png",
        tipo: [tipos.fantasma, tipos.venenoso]
    },
    {
        nome: "Haunter",
        numero: "093",
        descricao: "Haunter, evolução de Gastly, usa suas mãos para assustar. Ele é mais sólido, mas ainda pode atravessar objetos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/093.png",
        tipo: [tipos.fantasma, tipos.venenoso]
    },
    {
        nome: "Gengar",
        numero: "094",
        descricao: "Gengar é um Pokémon astuto e sorrateiro. Ele se esconde nas sombras, pronto para pregar peças.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png",
        tipo: [tipos.fantasma, tipos.venenoso]
    },
    {
        nome: "Onix",
        numero: "095",
        descricao: "Onix é um Pokémon serpente de pedra, grande e resistente. Ele cava túneis subterrâneos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/095.png",
        tipo: [tipos.pedra, tipos.terrestre]
    },
    {
        nome: "Drowzee",
        numero: "096",
        descricao: "Drowzee é um Pokémon psíquico que hipnotiza suas presas. Ele se alimenta dos sonhos alheios.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/096.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Hypno",
        numero: "097",
        descricao: "Hypno, evolução de Drowzee, usa um pêndulo para hipnotizar. Ele controla suas vítimas com precisão.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/097.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Krabby",
        numero: "098",
        descricao: "Krabby é um Pokémon caranguejo que vive na praia. Ele usa suas pinças para se defender e cavar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/098.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Kingler",
        numero: "099",
        descricao: "Kingler, evolução de Krabby, tem pinças poderosas que usa para esmagar rochas e caçar presas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/099.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Voltorb",
        numero: "100",
        descricao: "Voltorb é um Pokémon parecido com uma Pokébola. Ele pode explodir quando agitado.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/100.png",
        tipo: [tipos.eletrico]
    },
    {
        nome: "Electrode",
        numero: "101",
        descricao: "Electrode, evolução de Voltorb, armazena muita energia. Ele explode ao menor sinal de ameaça.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/101.png",
        tipo: [tipos.eletrico]
    },
    {
        nome: "Exeggcute",
        numero: "102",
        descricao: "Exeggcute é um grupo de ovos com consciência coletiva. Eles se comunicam entre si e são inseparáveis.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/102.png",
        tipo: [tipos.planta, tipos.psiquico]
    },
    {
        nome: "Exeggutor",
        numero: "103",
        descricao: "Exeggutor, evolução de Exeggcute, tem múltiplas cabeças que pensam de forma independente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/103.png",
        tipo: [tipos.planta, tipos.psiquico]
    },
    {
        nome: "Cubone",
        numero: "104",
        descricao: "Cubone usa o osso da mãe como arma. Ele é solitário e melancólico, mas luta com bravura.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/104.png",
        tipo: [tipos.terrestre]
    },
    {
        nome: "Marowak",
        numero: "105",
        descricao: "Marowak, evolução de Cubone, é mais forte e corajoso. Ele maneja seu osso com destreza em combate.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/105.png",
        tipo: [tipos.terrestre]
    },
    {
        nome: "Hitmonlee",
        numero: "106",
        descricao: "Hitmonlee é um lutador habilidoso com chutes poderosos. Suas pernas se esticam para alcançar o oponente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/106.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Hitmonchan",
        numero: "107",
        descricao: "Hitmonchan é um especialista em socos. Ele é rápido e ágil, capaz de lançar golpes velozes.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/107.png",
        tipo: [tipos.lutador]
    },
    {
        nome: "Lickitung",
        numero: "108",
        descricao: "Lickitung usa sua língua comprida para capturar e saborear tudo que encontra. Ele é curioso e ávido.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/108.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Koffing",
        numero: "109",
        descricao: "Koffing é um Pokémon gasoso que libera gases venenosos. Ele flutua e é atraído por áreas poluídas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/109.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Weezing",
        numero: "110",
        descricao: "Weezing, evolução de Koffing, possui dois corpos que liberam gás tóxico. Ele polui o ambiente ao seu redor.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/110.png",
        tipo: [tipos.venenoso]
    },
    {
        nome: "Rhyhorn",
        numero: "111",
        descricao: "Rhyhorn é incrivelmente resistente, com um corpo de pedra que o torna quase imbatível. Ele ataca com força bruta, esmagando tudo em seu caminho.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/111.png",
        tipo: [tipos.terrestre, tipos.pedra]
    },
    {
        nome: "Rhydon",
        numero: "112",
        descricao: "Rhydon é a evolução de Rhyhorn, ganhando uma postura bípede e maior inteligência. Ele é conhecido por resistir a erupções e nadar em lava.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/112.png",
        tipo: [tipos.terrestre, tipos.pedra]
    },
    {
        nome: "Chansey",
        numero: "113",
        descricao: "Chansey é um Pokémon raro e gentil que carrega um ovo que traz felicidade a quem o come. É famoso por cuidar dos feridos com dedicação.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/113.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Tangela",
        numero: "114",
        descricao: "Tangela é envolto por vinhas misteriosas que se regeneram rapidamente. Ele usa essas vinhas para se defender e capturar inimigos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/114.png",
        tipo: [tipos.planta]
    },
    {
        nome: "Kangaskhan",
        numero: "115",
        descricao: "Kangaskhan é extremamente protetora de seu filhote, carregando-o em sua bolsa. Ele luta com ferocidade para proteger sua cria.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/115.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Horsea",
        numero: "116",
        descricao: "Horsea vive em águas profundas e é um nadador ágil. Ele dispara jatos de tinta para confundir predadores e escapar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/116.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Seadra",
        numero: "117",
        descricao: "Seadra é a evolução de Horsea, com espinhos afiados e uma natureza territorial. Ele é rápido e preciso em seus ataques.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/117.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Goldeen",
        numero: "118",
        descricao: "Goldeen é um Pokémon gracioso que nada com elegância. Sua nadadeira dorsal é usada como uma espada para se defender.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/118.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Seaking",
        numero: "119",
        descricao: "Seaking, evolução de Goldeen, usa seu chifre afiado para defender seu território e cavar em busca de comida.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/119.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Staryu",
        numero: "120",
        descricao: "Staryu é um Pokémon estrela-do-mar que regenera seus membros perdidos. Seu núcleo brilha intensamente à noite.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/120.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Starmie",
        numero: "121",
        descricao: "Starmie, evolução de Staryu, possui um núcleo místico que pulsa com energia psíquica. Ele emite ondas que comunicam com o cosmos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/121.png",
        tipo: [tipos.agua, tipos.psiquico]
    },
    {
        nome: "Mr. Mime",
        numero: "122",
        descricao: "Mr. Mime cria barreiras invisíveis com suas mãos. Ele é um mestre da mímica, capaz de criar ilusões realistas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/122.png",
        tipo: [tipos.psiquico, tipos.fada]
    },
    {
        nome: "Scyther",
        numero: "123",
        descricao: "Scyther é um guerreiro ágil com lâminas afiadas nos braços. Ele ataca com precisão e velocidade inigualáveis.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/123.png",
        tipo: [tipos.inseto, tipos.voador]
    },
    {
        nome: "Jynx",
        numero: "124",
        descricao: "Jynx é um Pokémon exótico com movimentos de dança que encantam seus oponentes. Ela comunica-se através de expressões e ritmos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/124.png",
        tipo: [tipos.gelo, tipos.psiquico]
    },
    {
        nome: "Electabuzz",
        numero: "125",
        descricao: "Electabuzz gera eletricidade e atrai tempestades. Ele libera descargas elétricas quando agitado ou em perigo.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/125.png",
        tipo: [tipos.eletrico]
    },
    {
        nome: "Magmar",
        numero: "126",
        descricao: "Magmar é um Pokémon ardente que emite calor intenso. Ele habita vulcões e é capaz de derreter metal.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/126.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Pinsir",
        numero: "127",
        descricao: "Pinsir usa suas garras poderosas para esmagar inimigos. Ele é feroz e ataca com força implacável.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/127.png",
        tipo: [tipos.inseto]
    },
    {
        nome: "Tauros",
        numero: "128",
        descricao: "Tauros é um Pokémon valente que usa seus chifres para se defender. Ele corre em disparada com força incrível.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/128.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Magikarp",
        numero: "129",
        descricao: "Magikarp é um Pokémon fraco e inofensivo, mas sua persistência o leva a uma evolução surpreendente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/129.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Gyarados",
        numero: "130",
        descricao: "Gyarados é a poderosa evolução de Magikarp. Ele é temido por sua fúria e força devastadora.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/130.png",
        tipo: [tipos.agua, tipos.voador]
    },
    {
        nome: "Lapras",
        numero: "131",
        descricao: "Lapras é gentil e ajuda pessoas a atravessar mares. Sua inteligência é excepcional e ele é amigável com humanos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/131.png",
        tipo: [tipos.agua, tipos.gelo]
    },
    {
        nome: "Ditto",
        numero: "132",
        descricao: "Ditto é capaz de se transformar em qualquer coisa, copiando aparência e habilidades com perfeição.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/132.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Eevee",
        numero: "133",
        descricao: "Eevee possui uma genética especial que lhe permite evoluir em várias formas diferentes, adaptando-se ao ambiente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Vaporeon",
        numero: "134",
        descricao: "Vaporeon é a evolução aquática de Eevee. Ele se mistura na água, ficando quase invisível enquanto nada.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png",
        tipo: [tipos.agua]
    },
    {
        nome: "Jolteon",
        numero: "135",
        descricao: "Jolteon, a evolução elétrica de Eevee, é extremamente rápido. Ele pode liberar eletricidade ao arrepiar sua pelagem.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/135.png",
        tipo: [tipos.eletrico]
    },
    {
        nome: "Flareon",
        numero: "136",
        descricao: "Flareon, evolução de Eevee, possui uma chama intensa. Ele armazena calor em seu corpo, liberando-o em combate.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png",
        tipo: [tipos.fogo]
    },
    {
        nome: "Porygon",
        numero: "137",
        descricao: "Porygon é um Pokémon artificial, criado com tecnologia avançada. Ele pode se mover entre o mundo digital e real.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/137.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Omanyte",
        numero: "138",
        descricao: "Omanyte é um Pokémon fóssil que reviveu. Ele usa seus tentáculos para capturar comida e se proteger.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/138.png",
        tipo: [tipos.pedra, tipos.agua]
    },
    {
        nome: "Omastar",
        numero: "139",
        descricao: "Omastar, evolução de Omanyte, possui mandíbulas poderosas que usa para quebrar conchas e se alimentar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/139.png",
        tipo: [tipos.pedra, tipos.agua]
    },
    {
        nome: "Kabuto",
        numero: "140",
        descricao: "Kabuto é um Pokémon fóssil que reviveu. Ele se protege com sua casca e é ágil em ambientes aquáticos.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/140.png",
        tipo: [tipos.pedra, tipos.agua]
    },
    {
        nome: "Kabutops",
        numero: "141",
        descricao: "Kabutops, evolução de Kabuto, usa suas lâminas afiadas para cortar presas e nadar rapidamente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/141.png",
        tipo: [tipos.pedra, tipos.agua]
    },
    {
        nome: "Aerodactyl",
        numero: "142",
        descricao: "Aerodactyl é um Pokémon fóssil com um vôo agressivo. Ele caça com velocidade e intimida qualquer oponente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/142.png",
        tipo: [tipos.pedra, tipos.voador]
    },
    {
        nome: "Snorlax",
        numero: "143",
        descricao: "Snorlax é conhecido por seu apetite insaciável. Ele dorme a maior parte do tempo, mas é forte e resistente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png",
        tipo: [tipos.normal]
    },
    {
        nome: "Articuno",
        numero: "144",
        descricao: "Articuno é um Pokémon lendário de gelo. Ele voa em altas montanhas e é capaz de congelar o ambiente.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/144.png",
        tipo: [tipos.gelo, tipos.voador]
    },
    {
        nome: "Zapdos",
        numero: "145",
        descricao: "Zapdos é um Pokémon lendário elétrico. Ele controla tempestades e relâmpagos enquanto sobrevoa.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/145.png",
        tipo: [tipos.eletrico, tipos.voador]
    },
    {
        nome: "Moltres",
        numero: "146",
        descricao: "Moltres é um Pokémon lendário de fogo. Ele incendeia seu corpo para se curar e libera chamas ao voar.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/146.png",
        tipo: [tipos.fogo, tipos.voador]
    },
    {
        nome: "Dratini",
        numero: "147",
        descricao: "Dratini é um Pokémon raro e gracioso. Ele vive em rios profundos e cresce continuamente, mudando de pele.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/147.png",
        tipo: [tipos.dragao]
    },
    {
        nome: "Dragonair",
        numero: "148",
        descricao: "Dragonair, evolução de Dratini, possui uma aura mística e controla o clima. Ele é venerado por sua beleza.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/148.png",
        tipo: [tipos.dragao]
    },
    {
        nome: "Dragonite",
        numero: "149",
        descricao: "Dragonite é a poderosa evolução de Dragonair. Ele é gentil e protege humanos, voando por mares e montanhas.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png",
        tipo: [tipos.dragao, tipos.voador]
    },
    {
        nome: "Mewtwo",
        numero: "150",
        descricao: "Mewtwo é um Pokémon poderoso e raro que foi criado por meio de experimentos genéticos com o Mew. Ele possui habilidades psíquicas extremamente fortes e é conhecido por sua inteligência e força.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Mew",
        numero: "151",
        descricao: "Mew é um Pokémon misterioso e raro que pode transformar-se em qualquer outro Pokémon. Ele é conhecido por sua habilidade de aprender movimentos rapidamente e sua capacidade de se adaptar a diferentes situações.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png",
        tipo: [tipos.psiquico]
    },
    {
        nome: "Lucario",
        numero: "448",
        descricao: "Lucario é um Pokémon do tipo Lutador e Aço conhecido por sua habilidade de detectar auras. Ele é incrivelmente leal e combate com agilidade e precisão, usando sua habilidade Aura para ler movimentos de oponentes e se comunicar com outros. É um Pokémon confiável e respeitado por muitos treinadores.",
        imagem: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png",
        tipo: [tipos.lutador, tipos.aco]
    }

];
