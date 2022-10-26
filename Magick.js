// Criação das variaves, são importantes para o projeto.

var Força = 8;
var ForçaMin = 8;
var ModForça = (-1);
var Destreza = 8;
var DestrezaMin = 8;
var ModDestreza = (-1);
var Constituiçao = 8;
var ConstituiçaoMin = 8;
var ModConstituiçao = (-1);
var Inteligencia = 8;
var InteligenciaMin = 8;
var ModInteligencia = (-1);
var Sabedoria = 8;
var SabedoriaMin = 8;
var ModSabedoria = (-1);
var Carisma = 8;
var CarismaMin = 8;
var ModCarisma = (-1);
var Extra = 24;
var ProfBonus = 2;
var Proficiencias = [];
var Caracteristicas = [];
var Idiomas = [];
var Equipamentos = [];
var PericiasLimite = 2;

// Vetores para comandos (Raças, Classes, Atributos)

var Raca = {
  AnaoColina: function() {
    //Atributos
    Constituiçao += 2;
    ConstituiçaoMin += 2;
    Sabedoria += 1;
    SabedoriaMin += 1;

    //Proficiencias
    Proficiencias.push("Machados_de_Batalha");
    Proficiencias.push("Machadinhas");
    Proficiencias.push("Martelos_Leves");
    Proficiencias.push("Martelos_de_Guerra");
    Proficiencias.push("Ferramentas_de_Artesão");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Resiliência_Anã");
    Caracteristicas.push("Treinamento_Anão_em_Combate");
    Caracteristicas.push("Proficiência_com_Ferramentas");
    Caracteristicas.push("Especialização_em_Rochas");
    Caracteristicas.push("Tenacidade_Anã");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Anão")
  },

  AnaoMontanha: function() {
    //Atributos
    Constituiçao += 2;
    ConstituiçaoMin += 2;
    Força += 2;
    ForçaMin += 2;

    //Proficiencias
    document.getElementById("EscolhaFerramentasAnao").hidden = (false);
    var EscolhaFer = document.getElementById("FerramentasAnao").options[FerramentasAnao.selectedIndex].value;
    Proficiencias.push("Machados_de_Batalha");
    Proficiencias.push("Machadinhas");
    Proficiencias.push("Martelos_Leves");
    Proficiencias.push("Martelos_de_Guerra");
    Proficiencias.push("Armadura_leve");
    Proficiencias.push("Armadura_Média");
    Proficiencias.push("Ferramentas_de_Artesão" + "("+ EscolhaFer +")");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Resiliência_Anã");
    Caracteristicas.push("Treinamento_Anão_em_Combate");
    Caracteristicas.push("Proficiência_com_Ferramentas");
    Caracteristicas.push("Especialização_em_Rochas");
    Caracteristicas.push("Treinamento_Anão_com_Armaduras");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Anão")
  },

  AltoElfo: function() {
    //Atributos
    Destreza += 2;
    DestrezaMin += 2;
    Inteligencia += 1;
    InteligenciaMin += 1;

    //Proficiencias
    Proficiencias.push("Espadas_Longas");
    Proficiencias.push("Espadas_Curtas");
    Proficiencias.push("Arcos_Curtos");
    Proficiencias.push("Arcos_Longos");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Sentidos_Aguçados");
    Caracteristicas.push("Ancestral_Feérico");
    Caracteristicas.push("Transe");
    Caracteristicas.push("Treinamento_Élfico_com_Armas");

    //Idiomas
    document.getElementById("IdiomaExtra").hidden = (false);
    var LinguaExtra = document.getElementById("ExtraIdioma").options[ExtraIdioma.selectedIndex].value;
    Idiomas.push("Comum");
    Idiomas.push("Élfico");
    Idiomas.push(LinguaExtra);
  },

  ElfoFloresta: function() {
    //Atributos
    Destreza += 2;
    DestrezaMin += 2;
    Sabedoria += 1;
    SabedoriaMin += 1;

    //Proficiencias
    Proficiencias.push("Espadas_Longas");
    Proficiencias.push("Espadas_Curtas");
    Proficiencias.push("Arcos_Longos");
    Proficiencias.push("Arcos_Curtos");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Sentidos_Aguçados");
    Caracteristicas.push("Ancestral_Feérico");
    Caracteristicas.push("Transe");
    Caracteristicas.push("Treinamento_Élfico_com_Armas");
    Caracteristicas.push("Pés_Ligeiros");
    Caracteristicas.push("Máscara_da_Natureza");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Élfico");
  },

  ElfoNegro: function() {
    //Atributos
    Destreza += 2;
    DestrezaMin += 2;
    Carisma += 1;
    CarismaMin += 1;

    //Proficiencias
    Proficiencias.push("Rapieiras");
    Proficiencias.push("Espadas_Curtas");
    Proficiencias.push("Bestas_de_Uma_Mão");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Sentidos_Aguçados");
    Caracteristicas.push("Ancestral_Feérico");
    Caracteristicas.push("Transe");
    Caracteristicas.push("Visão_no_Escuro_Superior");
    Caracteristicas.push("Sensibilidade_à_Luz_Solar");
    Caracteristicas.push("Magia_Drow");
    Caracteristicas.push("Treinamento_Drow_com_Armas");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Élfico");
  },

  HalflingPesLeves: function() {
    //Atributos
    Destreza += 2;
    DestrezaMin += 2;
    Carisma += 1;
    CarismaMin += 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Sortudo");
    Caracteristicas.push("Bravura");
    Caracteristicas.push("Agilidade_Halfling");
    Caracteristicas.push("Furtividade_Natural");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Halfling");
  },

  HalflingRobusto: function() {
    //Atributos
    Destreza += 2;
    DestrezaMin += 2;
    Constituiçao += 1;
    ConstituiçaoMin += 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Sortudo");
    Caracteristicas.push("Bravura");
    Caracteristicas.push("Agilidade_Halfling");
    Caracteristicas.push("Resiliência_dos_Robustos");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Halfling");
  },

  Humano: function() {
    //Atributos
    Força += 1;
    ForçaMin += 1;
    Destreza += 1;
    DestrezaMin += 1;
    Constituiçao += 1;
    ConstituiçaoMin += 1;
    Inteligencia += 1;
    InteligenciaMin += 1;
    Sabedoria += 1;
    SabedoriaMin += 1;
    Carisma += 1;
    CarismaMin += 1;

    //Proficiencias

    //Caracteristicas

    //Idiomas
    var LinguaExtra = document.getElementById("ExtraIdioma").options[ExtraIdioma.selectedIndex].value;
    document.getElementById("IdiomaExtra").hidden = (false);
    Idiomas.push("Comum");
    Idiomas.push(LinguaExtra);
  },

  Draconato: function() {
    //Atributos
    Força += 2;
    ForçaMin += 2;
    Carisma += 1;
    CarismaMin += 1;

    //Proficiencias

    //Caracteristicas
    document.getElementById("AncestralidadeDraconica").hidden = (false);

    Caracteristicas.push("Ancestral_Dracônico");
    Caracteristicas.push("Resistência_a_Dano");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Draconato");
  },

  GnomoFloresta: function() {
    //Atributos
    Inteligencia += 2;
    InteligenciaMin += 2;
    Destreza += 1;
    DestrezaMin += 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Esperteza_Gnômica");
    Caracteristicas.push("Falar_com_Bestas_Pequenas");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Gnômico")
  },

  GnomoRocha: function() {
    //Atributos
    Inteligencia += 2;
    InteligenciaMin += 2;
    Constituiçao += 1;
    ConstituiçaoMin += 1;

    //Proficiencias
    Proficiencias.push("Ferramentas_de_Artesão(Engenhoqueiro)");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Esperteza_Gnômica");
    Caracteristicas.push("Conhecimento_de_Artifice");
    Caracteristicas.push("Engenhoqueiro");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Gnômico")
  },

  MeioElfo: function() {
    //Atributos
    Carisma += 2;
    CarismaMin += 2;
    Extra += 2;

    //Proficiencias

    //Caracteristicas
    document.getElementById("EscolhaPericiaExtraMeioElfo").hidden = (false);
    var PerMeioElfo1 = document.getElementById("PericiaExtraMeioElfo1").options[PericiaExtraMeioElfo1.selectedIndex].value;
    var PerMeioElfo2 = document.getElementById("PericiaExtraMeioElfo2").options[PericiaExtraMeioElfo2.selectedIndex].value;
    document.getElementById(PerMeioElfo1).checked = (true);
    document.getElementById(PerMeioElfo2).checked = (true);
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Ancestral_Feérico");
    Caracteristicas.push("Versatilidade_em_Pericia");

    //Idiomas
    var LinguaExtra = document.getElementById("ExtraIdioma").options[ExtraIdioma.selectedIndex].value;
    document.getElementById("IdiomaExtra").hidden = (false);
    Idiomas.push("Comum");
    Idiomas.push("Élfico");
    Idiomas.push(LinguaExtra);
  },

  MeioOrc: function() {
    //Atributos
    Força += 2;
    ForçaMin += 2;
    Constituiçao += 1;
    ConstituiçaoMin += 1;

    //Proficiencias

    //Caracteristicas
    document.getElementById("Intimidaçao").checked = (true);
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Ameaçador");
    Caracteristicas.push("Resistência_Implacável");
    Caracteristicas.push("Ataques_Selvagens");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Orc");
  },

  Tiefling: function() {
    //Atributos
    Carisma += 2;
    CarismaMin += 2;
    Inteligencia += 1;
    InteligenciaMin += 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Resistência_Infernal");
    Caracteristicas.push("Legado_Infernal");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Infernal");
  }
}

var AtributosSelecao = {
  MenosForça: function() {
    if (Força != ForçaMin) {
      Força -= 1;
      Extra += 1;
      PrintAtributos();
      ModAtributo();
    } else {
      alert("Não pode diminuir mais!")
    }
  },
  MaisForça: function() {
    if (Força != 20) {
      if (Extra != 0) {
        Força += 1;
        Extra -= 1;
        PrintAtributos();
        ModAtributo();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  },
  MenosDestreza: function() {
    if (Destreza != DestrezaMin) {
      Destreza -= 1;
      Extra += 1;
      PrintAtributos();
      ModAtributo();
    } else {
      alert("Não pode diminuir mais!")
    }
  },
  MaisDestreza: function() {
    if (Destreza != 20) {
      if (Extra != 0) {
        Destreza += 1;
        Extra -= 1;
        PrintAtributos();
        ModAtributo();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  },
  MenosConstituiçao: function() {
    if (Constituiçao != ConstituiçaoMin) {
      Constituiçao -= 1;
      Extra += 1;
      PrintAtributos()
      ModAtributo();
    } else {
      alert("Não pode diminuir mais!")
    }
  },
  MaisConstituiçao: function() {
    if (Constituiçao != 20) {
      if (Extra != 0) {
        Constituiçao += 1;
        Extra -= 1;
        PrintAtributos();
        ModAtributo();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  },
  MenosInteligencia: function() {
    if (Inteligencia != InteligenciaMin) {
      Inteligencia -= 1;
      Extra += 1;
      PrintAtributos();
      ModAtributo();
    } else {
      alert("Não pode diminuir mais!")
    }
  },
  MaisInteligencia: function() {
    if (Inteligencia != 20) {
      if (Extra != 0) {
        Inteligencia += 1;
        Extra -= 1;
        PrintAtributos();
        ModAtributo();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  },
  MenosSabedoria: function() {
    if (Sabedoria != SabedoriaMin) {
      Sabedoria -= 1;
      Extra += 1;
      PrintAtributos();
      ModAtributo();
    } else {
      alert("Não pode diminuir mais!")
    }
  },
  MaisSabedoria: function() {
    if (Sabedoria != 20) {
      if (Extra != 0) {
        Sabedoria += 1;
        Extra -= 1;
        PrintAtributos();
        ModAtributo();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  },
  MenosCarisma: function() {
    if (Carisma != CarismaMin) {
      Carisma -= 1;
      Extra += 1;
      PrintAtributos();
      ModAtributo();
    } else {
      alert("Não pode diminuir mais!")
    }
  },
  MaisCarisma: function() {
    if (Carisma != 20) {
      if (Extra != 0) {
        Carisma += 1;
        Extra -= 1;
        PrintAtributos();
        ModAtributo();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  }
}

// Prints

function PrintAtributos() {
    document.getElementById("For").innerHTML = ("Força: " + Força);
    document.getElementById("Des").innerHTML = ("Destreza: " + Destreza);
    document.getElementById("Cons").innerHTML = ("Constituição: " + Constituiçao);
    document.getElementById("Int").innerHTML = ("Inteligência: " + Inteligencia);
    document.getElementById("Sab").innerHTML = ("Sabedoria: " + Sabedoria);
    document.getElementById("Car").innerHTML = ("Carisma: " + Carisma);
    document.getElementById("Extra").innerHTML = ("Pontos livres: " + Extra);
  }

function PrintProficiencias() {
  for (var i = 0; i < Proficiencias.length; i++) {
    var Printf = Proficiencias[i];
    document.getElementById("Prof").value += (Printf + "\n");
  }
}

function PrintCaracteristicas() {
  for (var i = 0; i < Caracteristicas.length; i++) {
    var Printf = Caracteristicas[i];
    document.getElementById("Caracter").value += (Printf + "\n");
  }
}

function PrintIdioma() {
  for (var i = 0; i < Idiomas.length; i++) {
    var Printf = Idiomas[i]
    document.getElementById("Lingua").value += (Printf + "\n");
  }

}

//Apagar

function ApagarAtributos() {
    Força = 8;
    ForçaMin = 8;
    Destreza = 8;
    DestrezaMin = 8;
    Constituiçao = 8;
    ConstituiçaoMin = 8;
    Inteligencia = 8;
    InteligenciaMin = 8;
    Sabedoria = 8;
    SabedoriaMin = 8;
    Carisma = 8;
    CarismaMin = 8;
    Extra = 24;
  }

function ApagarProficiencias() {
  Proficiencias = [];
  document.getElementById("Prof").value = ("");
 }

function ApagarCaracteristicas() {
 Caracteristicas = [];
 document.getElementById("Caracter").value = ("");
}

function ApagarAbasEspeciais() {
  //Anão da AnaoMontanha
  document.getElementById("EscolhaFerramentasAnao").hidden = (true);
  //Meio Elfo
  document.getElementById("EscolhaPericiaExtraMeioElfo").hidden = (true);
  //Draconico
  document.getElementById("AncestralidadeDraconica").hidden = (true);
  //Idiomas
  document.getElementById("IdiomaExtra").hidden = (true);
}

function ApagarPericia() {
  document.getElementById("Acrobacia").checked = (false);
  document.getElementById("Arcanismo").checked = (false);
  document.getElementById("Atletismo").checked = (false);
  document.getElementById("Atuaçao").checked = (false);
  document.getElementById("Blefar").checked = (false);
  document.getElementById("Furtividade").checked = (false);
  document.getElementById("Historia").checked = (false);
  document.getElementById("Intimidaçao").checked = (false);
  document.getElementById("Intuiçao").checked = (false);
  document.getElementById("Investigaçao").checked = (false);
  document.getElementById("LidarAnimais").checked = (false);
  document.getElementById("Medicina").checked = (false);
  document.getElementById("Natureza").checked = (false);
  document.getElementById("Percepçao").checked = (false);
  document.getElementById("Persuasao").checked = (false);
  document.getElementById("Prestidigitaçao").checked = (false);
  document.getElementById("Religiao").checked = (false);
  document.getElementById("Sobrevivencia").checked = (false);
}

function ApagarIdioma() {
  Idiomas = [];
  document.getElementById("Lingua").value = ("");

}

//Atributos,Pericias,Resistencias

function DistribuirPontosAtributos() {
  AtributoBotaoClick = document.querySelectorAll("button[class='BotaoAtributo']:hover");
  AtributosSelecao[(AtributoBotaoClick[0].id)]();
}

//Parte Principal

function RaçaMudanca() {
  var Escolha = document.getElementById("Raça").options[Raça.selectedIndex].value;
  //Apagar
  ApagarAtributos();
  ApagarProficiencias();
  ApagarCaracteristicas();
  ApagarAbasEspeciais();
  ApagarPericia();
  ApagarIdioma();

  //Mudanças
  Raca[Escolha]();

  //Prints
  PrintAtributos();
  PrintProficiencias();
  PrintCaracteristicas();
  PrintIdioma();
}
