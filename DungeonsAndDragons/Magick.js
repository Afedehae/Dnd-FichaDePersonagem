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
var CaracteristitruecasRaca = [];
var ProficienciasRaca = [];
var EquipamentosClasses = [];
var Lingua = [];

function TabelasGeral() {
  

}

function Tudo() {
  ApagarAtributos();
  ApagarProficienciasRaca();
  ApagarCaracteristicasRaca();
  ApagarPericiaClasse();
  ApagarEscolhaPericiaClasse();
  MudarSubRaça();
  Idioma();
  RaçaAtributos();
  ClasseResistencia();
  PericiasClasse();
  ModAtributo();
  RaçaCaracteristicas();
  HabilidadesClasse();
  RaçaProficiências();
  ProficienciasClasse();
  PrintProficienciasRaca();
  PrintCaracteristicasRaca();
  PrintAtributos();
}
function ClasseTudo() {
  ApagarProficienciasRaca();
  ApagarCaracteristicasRaca();
  ApagarPericiaClasse();
  ApagarEscolhaPericiaClasse();
  ApagarEscolhaExtraClasse();
  ApagarEquipamentosClasse();
  EscolhaEquipamentosClasse();
  Idioma();
  ClasseResistencia();
  RaçaCaracteristicas();
  PericiasClasse();
  ModAtributo();
  HabilidadesClasse();
  PrintCaracteristicasRaca();
  RaçaProficiências();
  ProficienciasClasse();
  PrintProficienciasRaca();
  EquipamentosDeClasse();
  PrintEquipamentosClasse();
}
function RaçaTudo() {
  ApagarProficienciasRaca();
  ApagarCaracteristicasRaca();
  ApagarAtributos();
  ApagarPericiaClasse();
  MudarSubRaça();
  Idioma();
  RaçaAtributos();
  PrintAtributos();
  RaçaCaracteristicas();
  PericiasClasse();
  ModAtributo();
  HabilidadesClasse();
  RaçaProficiências();
  ProficienciasClasse();
  PrintProficienciasRaca();
  PrintCaracteristicasRaca();
}

function RaçaProficiências() {
  var Raca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  var SubRacaAnao = document.getElementById("SubAnao").options[SubAnao.selectedIndex].value;
  var SubRacaElfo = document.getElementById("SubElfo").options[SubElfo.selectedIndex].value;
  var SubRacaHalfling = document.getElementById("SubHalfling").options[SubHalfling.selectedIndex].value;
  var SubRacaGnomo = document.getElementById("SubGnomo").options[SubGnomo.selectedIndex].value;
  var EscolhaFer = document.getElementById("FerramentasAnao").options[FerramentasAnao.selectedIndex].value;
  if (Raca == "Anao") {
    if (SubRacaAnao == "AnaoColina") {
      document.getElementById("EscolhaFerramentasAnao").hidden = (true);
      ProficienciasRaca.push("Machados_de_Batalha");
      ProficienciasRaca.push("Machadinhas");
      ProficienciasRaca.push("Martelos_Leves");
      ProficienciasRaca.push("Martelos_de_Guerra");
      ProficienciasRaca.push("Ferramentas_de_Artesão");
    } else if (SubRacaAnao == "AnaoMontanha") {
      document.getElementById("EscolhaFerramentasAnao").hidden = (false);
      ProficienciasRaca.push("Machados_de_Batalha");
      ProficienciasRaca.push("Machadinhas");
      ProficienciasRaca.push("Martelos_Leves");
      ProficienciasRaca.push("Martelos_de_Guerra");
      ProficienciasRaca.push("Ferramentas_de_Artesão" + "("+ EscolhaFer +")");
      ProficienciasRaca.push("Armadura_leve");
      ProficienciasRaca.push("Armadura_Média");
    } else {
      document.getElementById("EscolhaFerramentasAnao").hidden = (true);
    }
  } else if (Raca == "Elfo") {
    document.getElementById("EscolhaFerramentasAnao").hidden = (true);
    if (SubRacaElfo == "AltoElfo") {
      ProficienciasRaca.push("Espadas_Longas");
      ProficienciasRaca.push("Espadas_Curtas");
      ProficienciasRaca.push("Arcos_Longos");
      ProficienciasRaca.push("Arcos_Curtos");
    }
    if (SubRacaElfo == "ElfoFloresta") {
      ProficienciasRaca.push("Espadas_Longas");
      ProficienciasRaca.push("Espadas_Curtas");
      ProficienciasRaca.push("Arcos_Longos");
      ProficienciasRaca.push("Arcos_Curtos");
    }
    if (SubRacaElfo = "ElfoNegro") {
      ProficienciasRaca.push("Rapieiras");
      ProficienciasRaca.push("Espadas_Curtas");
      ProficienciasRaca.push("Bestas_de_Uma_Mão");
    }
  } else if (Raca == "Gnomo") {
    document.getElementById("EscolhaFerramentasAnao").hidden = (true);
    if (SubRacaGnomo == "GnomoRocha") {
      ProficienciasRaca.push("Ferramentas_de_Artesão(Engenhoqueiro)");
}
} else {
  document.getElementById("EscolhaFerramentasAnao").hidden = (true);
}
}

function RaçaCaracteristicas() {
  var Raca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  var SubRacaAnao = document.getElementById("SubAnao").options[SubAnao.selectedIndex].value;
  var SubRacaElfo = document.getElementById("SubElfo").options[SubElfo.selectedIndex].value;
  var SubRacaHalfling = document.getElementById("SubHalfling").options[SubHalfling.selectedIndex].value;
  var SubRacaGnomo = document.getElementById("SubGnomo").options[SubGnomo.selectedIndex].value;
  var PerMeioElfo1 = document.getElementById("PericiaExtraMeioElfo1").options[PericiaExtraMeioElfo1.selectedIndex].value;
  var PerMeioElfo2 = document.getElementById("PericiaExtraMeioElfo2").options[PericiaExtraMeioElfo2.selectedIndex].value;
  document.getElementById("EscolhaPericiaExtraMeioElfo").hidden = (true);
  if (Raca == "Anao") {
    if (SubRacaAnao == "AnaoColina") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Resiliência_Anã");
      CaracteristicasRaca.push("Treinamento_Anão_em_Combate");
      CaracteristicasRaca.push("Proficiência_com_Ferramentas");
      CaracteristicasRaca.push("Especialização_em_Rochas");
      CaracteristicasRaca.push("Tenacidade_Anã");
    }
    if (SubRacaAnao == "AnaoMontanha") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Resiliência_Anã");
      CaracteristicasRaca.push("Treinamento_Anão_em_Combate");
      CaracteristicasRaca.push("Proficiência_com_Ferramentas");
      CaracteristicasRaca.push("Especialização_em_Rochas");
      CaracteristicasRaca.push("Treinamento_Anão_com_Armaduras");
    }
  }
  if (Raca == "Elfo") {
    document.getElementById("Percepçao").checked = (true);
    if (SubRacaElfo == "AltoElfo") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Sentidos_Aguçados");
      CaracteristicasRaca.push("Ancestral_Feérico");
      CaracteristicasRaca.push("Transe");
      CaracteristicasRaca.push("Treinamento_Élfico_com_Armas");
    }
    if (SubRacaElfo == "ElfoFloresta") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Sentidos_Aguçados");
      CaracteristicasRaca.push("Ancestral_Feérico");
      CaracteristicasRaca.push("Transe");
      CaracteristicasRaca.push("Treinamento_Élfico_com_Armas");
      CaracteristicasRaca.push("Pés_Ligeiros");
      CaracteristicasRaca.push("Máscara_da_Natureza");
    }
    if (SubRacaElfo == "ElfoNegro") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Sentidos_Aguçados");
      CaracteristicasRaca.push("Ancestral_Feérico");
      CaracteristicasRaca.push("Transe");
      CaracteristicasRaca.push("Visão_no_Escuro_Superior");
      CaracteristicasRaca.push("Sensibilidade_à_Luz_Solar");
      CaracteristicasRaca.push("Magia_Drow");
      CaracteristicasRaca.push("Treinamento_Drow_com_Armas");
    }
  }
  if (Raca == "Halfling") {
    if (SubRacaHalfling == "HalflingPesLeves") {
      CaracteristicasRaca.push("Sortudo");
      CaracteristicasRaca.push("Bravura");
      CaracteristicasRaca.push("Agilidade_Halfling");
      CaracteristicasRaca.push("Furtividade_Natural");
    }
    if (SubRacaHalfling == "HalflingRobusto") {
      CaracteristicasRaca.push("Sortudo");
      CaracteristicasRaca.push("Bravura");
      CaracteristicasRaca.push("Agilidade_Halfling");
      CaracteristicasRaca.push("Resiliência_dos_Robustos");
    }
  }
  if (Raca == "Humano") {
  }
  if (Raca == "Draconato") {
    CaracteristicasRaca.push("Ancestral_Dracônico");
    CaracteristicasRaca.push("Resistência_a_Dano");
  }
  if (Raca == "Gnomo") {
    if (SubRacaGnomo == "GnomoFloresta") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Esperteza_Gnômica");
      CaracteristicasRaca.push("Falar_com_Bestas_Pequenas");
    }
    if (SubRacaGnomo == "GnomoRocha") {
      CaracteristicasRaca.push("Visão_no_Escuro");
      CaracteristicasRaca.push("Esperteza_Gnômica");
      CaracteristicasRaca.push("Conhecimento_de_Artifice");
      CaracteristicasRaca.push("Engenhoqueiro");
    }
  }
  if (Raca == "MeioElfo") {
    document.getElementById("EscolhaPericiaExtraMeioElfo").hidden = (false);
    document.getElementById(PerMeioElfo1).checked = (true);
    document.getElementById(PerMeioElfo2).checked = (true);
    CaracteristicasRaca.push("Visão_no_Escuro");
    CaracteristicasRaca.push("Ancestral_Feérico");
    CaracteristicasRaca.push("Versatilidade_em_Pericia");
  }
  if (Raca == "MeioOrc") {
    document.getElementById("Intimidaçao").checked = (true);
    CaracteristicasRaca.push("Visão_no_Escuro");
    CaracteristicasRaca.push("Ameaçador");
    CaracteristicasRaca.push("Resistência_Implacável");
    CaracteristicasRaca.push("Ataques_Selvagens");
  }
  if (Raca == "Tiefling") {
    CaracteristicasRaca.push("Visão_no_Escuro");
    CaracteristicasRaca.push("Resistência_Infernal");
    CaracteristicasRaca.push("Legado_Infernal");
  }
}

function RaçaAtributos() {
  var Raca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  var SubRacaAnao = document.getElementById("SubAnao").options[SubAnao.selectedIndex].value;
  var SubRacaElfo = document.getElementById("SubElfo").options[SubElfo.selectedIndex].value;
  var SubRacaHalfling = document.getElementById("SubHalfling").options[SubHalfling.selectedIndex].value;
  var SubRacaGnomo = document.getElementById("SubGnomo").options[SubGnomo.selectedIndex].value;
  if (Raca == "Anao") {
    if (SubRacaAnao == "AnaoColina") {
      Constituiçao += 2;
      ConstituiçaoMin += 2;
      Sabedoria += 1;
      SabedoriaMin += 1;
    }
    if (SubRacaAnao == "AnaoMontanha") {
      Constituiçao += 2;
      ConstituiçaoMin += 2;
      Força += 2;
      ForçaMin += 2;
    }
  }
  if (Raca == "Elfo") {
    if (SubRacaElfo == "AltoElfo") {
      Destreza += 2;
      DestrezaMin += 2;
      Inteligencia += 1;
      InteligenciaMin += 1;
    }
    if (SubRacaElfo == "ElfoFloresta") {
      Destreza += 2;
      DestrezaMin += 2;
      Sabedoria += 1;
      SabedoriaMin += 1;
    }
    if (SubRacaElfo == "ElfoNegro") {
      Destreza += 2;
      DestrezaMin += 2;
      Carisma += 1;
      CarismaMin += 1;
    }
  }
  if (Raca == "Halfling") {
    if (SubRacaHalfling == "HalflingPesLeves") {
      Destreza += 2;
      DestrezaMin += 2;
      Carisma += 1;
      CarismaMin += 1;
    }
    if (SubRacaHalfling == "HalflingRobusto") {
      Destreza += 2;
      DestrezaMin += 2;
      Constituiçao += 1;
      ConstituiçaoMin += 1;
    }
  }
  if (Raca == "Humano") {
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
  }
  if (Raca == "Draconato") {
    Força += 2;
    ForçaMin += 2;
    Carisma += 1;
    CarismaMin += 1;
  }
  if (Raca == "Gnomo") {
    if (SubRacaGnomo == "GnomoFloresta") {
      Inteligencia += 2;
      InteligenciaMin += 2;
      Destreza += 1;
      DestrezaMin += 1;
    }
    if (SubRacaGnomo == "GnomoRocha") {
      Inteligencia += 2;
      InteligenciaMin += 2;
      Constituiçao += 1;
      ConstituiçaoMin += 1;
    }
  }
  if (Raca == "MeioElfo") {
    Carisma += 2;
    CarismaMin += 2;
    Extra += 2;
  }
  if (Raca == "MeioOrc") {
    Força += 2;
    ForçaMin += 2;
    Constituiçao += 1;
    ConstituiçaoMin += 1;
  }
  if (Raca == "Tiefling") {
    Carisma += 2;
    CarismaMin += 2;
    Inteligencia += 1;
    InteligenciaMin += 1;
  }
}

function MudarSubRaça() {
  var Raca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  if (Raca == "Elfo") {
    ApagarSubRaça();
    document.getElementById("SubRaçaElfo").hidden = (false);
  } else {
    ApagarSubRaça();
  }
  if (Raca == "Halfling") {
    ApagarSubRaça();
    document.getElementById("SubRaçaHalfling").hidden = (false);
  }
  if (Raca == "Draconato") {
    ApagarSubRaça();
    document.getElementById("AncestralidadeDraconica").hidden = (false);
  }
  if (Raca == "Gnomo") {
    ApagarSubRaça();
    document.getElementById("SubRaçaGnomo").hidden = (false);
  }
  if (Raca == "Anao") {
    ApagarSubRaça();
    document.getElementById("SubRaçaAnao").hidden = (false);
  }
  }

function ApagarSubRaça() {
    document.getElementById("SubRaçaElfo").hidden = (true);
    document.getElementById("SubRaçaHalfling").hidden = (true);
    document.getElementById("AncestralidadeDraconica").hidden = (true);
    document.getElementById("SubRaçaGnomo").hidden = (true);
    document.getElementById("SubRaçaAnao").hidden = (true);
  }

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

function PrintAtributos() {
    document.getElementById("For").innerHTML = ("Força: " + Força);
    document.getElementById("Des").innerHTML = ("Destreza: " + Destreza);
    document.getElementById("Cons").innerHTML = ("Constituição: " + Constituiçao);
    document.getElementById("Int").innerHTML = ("Inteligência: " + Inteligencia);
    document.getElementById("Sab").innerHTML = ("Sabedoria: " + Sabedoria);
    document.getElementById("Car").innerHTML = ("Carisma: " + Carisma);
    document.getElementById("Extra").innerHTML = ("Pontos livres: " + Extra);
  }

function PrintCaracteristicasRaca() {
    for (var i = 0; i < CaracteristicasRaca.length; i++) {
      var Printf = CaracteristicasRaca[i];
      document.getElementById("Caracter").value += (Printf + "\n");
    }
  }

function ApagarCaracteristicasRaca() {
  CaracteristicasRaca = [];
  document.getElementById("Caracter").value = ("");
}

function PrintProficienciasRaca() {
  for (var i = 0; i < ProficienciasRaca.length; i++) {
    var Printf = ProficienciasRaca[i];
    document.getElementById("Prof").value += (Printf + "\n");
  }
}

function ApagarProficienciasRaca() {
  ProficienciasRaca = [];
  document.getElementById("Prof").value = ("");
}

function Idioma() {
  var Raca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  var LinguaExtra = document.getElementById("ExtraIdioma").options[ExtraIdioma.selectedIndex].value;
  var SubRacaElfo = document.getElementById("SubElfo").options[SubElfo.selectedIndex].value;
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  ApagarIdioma();
  document.getElementById("IdiomaExtra").hidden = (true);
  if (Raca == "Anao") {
    document.getElementById("IdiomaExtra").hidden = (true);
    Lingua.push("Comum");
    Lingua.push("Anão")
  }
  if (Raca == "Elfo") {
    if (SubRacaElfo == "AltoElfo") {
      document.getElementById("IdiomaExtra").hidden = (false);
      Lingua.push("Comum");
      Lingua.push("Élfico");
      Lingua.push(LinguaExtra);
    } else {
      Lingua.push("Comum");
      Lingua.push("Élfico");
    }
  }
  if (Raca == "Halfling") {
    Lingua.push("Comum");
    Lingua.push("Halfling");
  }
  if (Raca == "Humano") {
    document.getElementById("IdiomaExtra").hidden = (false);
    Lingua.push("Comum");
    Lingua.push(LinguaExtra);
  }
  if (Raca == "Draconato") {
    Lingua.push("Comum");
    Lingua.push("Draconato");
  }
  if (Raca == "Gnomo") {
    Lingua.push("Comum");
    Lingua.push("Gnômico")
  }
  if (Raca == "MeioElfo") {
    document.getElementById("IdiomaExtra").hidden = (false);
    Lingua.push("Comum");
    Lingua.push("Élfico");
    Lingua.push(LinguaExtra);
  }
  if (Raca == "MeioOrc") {
    Lingua.push("Comum");
    Lingua.push("Orc");
  }
  if (Raca == "Tiefling") {
    Lingua.push("Comum");
    Lingua.push("Infernal");
  }
  if (Classes == "Ladino") {
    Lingua.push("Gíria_de_Ladrão");
  }
  if (Classes == "Druida") {
    Lingua.push("Druidico");
  }
  PrintIdioma();

}

function PrintIdioma() {
  for (var i = 0; i < Lingua.length; i++) {
    var Printf = Lingua[i]
    document.getElementById("Lingua").value += (Printf + "\n");
  }

}

function ApagarIdioma() {
  Lingua = [];
  document.getElementById("Lingua").value = ("");

}

function DiminuirFor() {
  if (Força != ForçaMin) {
    Força -= 1;
    Extra += 1;
    PrintAtributos();
    ModAtributo();
  } else {
    alert("Não pode diminuir mais!")
  }
}

function AumentarFor() {
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
}

function DiminuirDes() {
  if (Destreza != DestrezaMin) {
    Destreza -= 1;
    Extra += 1;
    PrintAtributos();
    ModAtributo();
  } else {
    alert("Não pode diminuir mais!")
  }
}

function AumentarDes() {
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
}

function DiminuirCons() {
  if (Constituiçao != ConstituiçaoMin) {
    Constituiçao -= 1;
    Extra += 1;
    PrintAtributos()
    ModAtributo();
  } else {
    alert("Não pode diminuir mais!")
  }
}

function AumentarCons() {
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
}

function DiminuirInt() {
  if (Inteligencia != InteligenciaMin) {
    Inteligencia -= 1;
    Extra += 1;
    PrintAtributos();
    ModAtributo();
  } else {
    alert("Não pode diminuir mais!")
  }
}

function AumentarInt() {
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
}

function DiminuirSab() {
  if (Sabedoria != SabedoriaMin) {
    Sabedoria -= 1;
    Extra += 1;
    PrintAtributos();
    ModAtributo();
  } else {
    alert("Não pode diminuir mais!")
  }
}

function AumentarSab() {
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
}

function DiminuirCar() {
  if (Carisma != CarismaMin) {
    Carisma -= 1;
    Extra += 1;
    PrintAtributos();
    ModAtributo();
  } else {
    alert("Não pode diminuir mais!")
  }
}

function AumentarCar() {
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

function ModAtributoForça() {
  if (Força == 20) {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 6;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 6;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  } else if (Força >= 18) {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 5;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 5;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  } else if (Força >= 16) {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 4;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 4;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  } else if (Força >= 14) {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 3;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 3;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  } else if (Força >= 12) {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 2;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 2;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  } else if (Força >= 10) {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 1;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 1;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  } else {
    if (document.getElementById("ResFor").checked == true) {
      ModForça += 0;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = ((ModForça + ProfBonus) + " Força");
    } else {
      ModForça += 0;
      document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
      document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((ModForça + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
    }
  }
}

function ModAtributoDestreza() {
  if (Destreza == 20) {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 6;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 6;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  } else if (Destreza >= 18) {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 5;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 5;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  } else if (Destreza >= 16) {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 4;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 4;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  } else if (Destreza >= 14) {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 3;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 3;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  } else if (Destreza >= 12) {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 2;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 2;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  } else if (Destreza >= 10) {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 1;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 1;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  } else {
    if (document.getElementById("ResDes").checked == true) {
      ModDestreza += 0;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = ((ModDestreza + ProfBonus) + " Destreza");
    } else {
      ModDestreza += 0;
      document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
      document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((ModDestreza  + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((ModDestreza + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((ModDestreza + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
    }
  }

}

function ModAtributoConstituiçao() {
  if (Constituiçao == 20) {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 6;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 6;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  } else if (Constituiçao >= 18) {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 5;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 5;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  } else if (Constituiçao >= 16) {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 4;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 4;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  } else if (Constituiçao >= 14) {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 3;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 3;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  } else if (Constituiçao >= 12) {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 2;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 2;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  } else if (Constituiçao >= 10) {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 1;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 1;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  } else {
    if (document.getElementById("ResCons").checked == true) {
      ModConstituiçao += 0;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = ((ModConstituiçao + ProfBonus) + " Constituição");
    } else {
      ModConstituiçao += 0;
      document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
      document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
    }
  }

}

function ModAtributoInteligencia() {
  if (Inteligencia == 20) {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 6;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 6;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  } else if (Inteligencia >= 18) {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 5;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 5;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  } else if (Inteligencia >= 16) {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 4;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 4;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  } else if (Inteligencia >= 14) {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 3;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 3;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  } else if (Inteligencia >= 12) {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 2;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 2;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  } else if (Inteligencia >= 10) {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 1;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 1;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  } else {
    if (document.getElementById("ResInt").checked == true) {
      ModInteligencia += 0;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = ((ModInteligencia + ProfBonus) + " Inteligência");
    } else {
      ModInteligencia += 0;
      document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
      document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((ModInteligencia + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((ModInteligencia + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((ModInteligencia + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
    }
  }

}

function ModAtributoSabedoria() {
  if (Sabedoria == 20) {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 6;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 6;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  } else if (Sabedoria >= 18) {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 5;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 5;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  } else if (Sabedoria >= 16) {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 4;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 4;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  } else if (Sabedoria >= 14) {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 3;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 3;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  } else if (Sabedoria >= 12) {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 2;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 2;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  } else if (Sabedoria >= 10) {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 1;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 1;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  } else {
    if (document.getElementById("ResSab").checked == true) {
      ModSabedoria += 0;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = ((ModSabedoria + ProfBonus) + " Sabedoria");
    } else {
      ModSabedoria += 0;
      document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
      document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((ModSabedoria + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((ModSabedoria + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((ModSabedoria + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
    }
  }

}

function ModAtributoCarisma() {
  if (Carisma == 20) {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 6;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 6;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  } else if (Carisma >= 18) {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 5;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 5;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  } else if (Carisma >= 16) {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 4;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 4;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  } else if (Carisma >= 14) {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 3;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 3;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  } else if (Carisma >= 12) {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 2;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 2;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  } else if (Carisma >= 10) {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 1;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 1;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  } else {
    if (document.getElementById("ResCar").checked == true) {
      ModCarisma += 0;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = ((ModCarisma + ProfBonus) + " Carisma");
    } else {
      ModCarisma += 0;
      document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
      document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((ModCarisma + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((ModCarisma + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
    }
  }
}

function ApagarModAtributo() {
  ModForça = (-1);
  ModDestreza = (-1);
  ModConstituiçao = (-1);
  ModInteligencia = (-1);
  ModSabedoria = (-1);
  ModCarisma = (-1);
}

function PrintModAtributo() {
  document.getElementById("ModFor").innerHTML = ("ModForça: " + ModForça);
  document.getElementById("ModDes").innerHTML = ("ModDestreza: " + ModDestreza);
  document.getElementById("ModCons").innerHTML = ("ModConstituição: " + ModConstituiçao);
  document.getElementById("ModInt").innerHTML = ("ModInteligência: " + ModInteligencia);
  document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + ModSabedoria);
  document.getElementById("ModCar").innerHTML = ("ModCarisma: " + ModCarisma);
  document.getElementById('ResForNum').innerHTML = (ModForça + " Força");
  document.getElementById('ResDesNum').innerHTML = (ModDestreza + " Destreza");
  document.getElementById('ResConsNum').innerHTML = (ModConstituiçao + " Constituição");
  document.getElementById('ResIntNum').innerHTML = (ModInteligencia + " Inteligência");
  document.getElementById('ResSabNum').innerHTML = (ModSabedoria + " Sabedoria");
  document.getElementById('ResCarNum').innerHTML = (ModCarisma + " Carisma");
  document.getElementById('AcrobaciaNum').innerHTML = (ModDestreza + " Acrobacia <i>(Des)</i>");
  document.getElementById('ArcanismoNum').innerHTML = (ModInteligencia + " Arcanismo <i>(Int)</i>");
  document.getElementById('AtletismoNum').innerHTML = (ModForça + " Atletismo <i>(For)</i>");
  document.getElementById('AtuaçaoNum').innerHTML = (ModCarisma + " Atuação <i>(Car)</i>");
  document.getElementById('BlefarNum').innerHTML = (ModCarisma + " Blefar <i>(Car)</i>");
  document.getElementById('FurtividadeNum').innerHTML = (ModDestreza + " Furtividade <i>(Des)</i>");
  document.getElementById('HistoriaNum').innerHTML = (ModInteligencia + " História <i>(Int)</i>");
  document.getElementById('IntimidaçaoNum').innerHTML = (ModCarisma + " Intimidação <i>(Car)</i>");
  document.getElementById('IntuiçaoNum').innerHTML = (ModSabedoria + " Intuição <i>(Sab)</i>");
  document.getElementById('InvestigaçaoNum').innerHTML = (ModInteligencia + " Investigação <i>(Int)</i>");
  document.getElementById('LidarAnimaisNum').innerHTML = (ModSabedoria + " Lidar_Com_Animais <i>(Sab)</i>");
  document.getElementById('MedicinaNum').innerHTML = (ModSabedoria + " Medicina <i>(Sab)</i>");
  document.getElementById('NaturezaNum').innerHTML = (ModInteligencia + " Natureza <i>(Int)</i>");
  document.getElementById('PercepçaoNum').innerHTML = (ModSabedoria + " Percepção <i>(Sab)</i>");
  document.getElementById('PersuasaoNum').innerHTML = (ModCarisma + " Persuasão <i>(Car)</i>");
  document.getElementById('PrestidigitaçaoNum').innerHTML = (ModDestreza + " Prestidigitação <i>(Des)</i>");
  document.getElementById('ReligiaoNum').innerHTML = (ModInteligencia + " Religião <i>(Int)</i>");
  document.getElementById('SobrevivenciaNum').innerHTML = (ModSabedoria + " Sobrevivência <i>(Sab)</i>");
}

function ModAtributo() {
  ApagarModAtributo();
  ModAtributoForça();
  ModAtributoDestreza();
  ModAtributoConstituiçao();
  ModAtributoInteligencia();
  ModAtributoSabedoria();
  ModAtributoCarisma();
}

function ApagarResistencia() {
  document.getElementById("ResFor").checked = (false);
  document.getElementById("ResDes").checked = (false);
  document.getElementById("ResCons").checked = (false);
  document.getElementById("ResInt").checked = (false);
  document.getElementById("ResSab").checked = (false);
  document.getElementById("ResCar").checked = (false);
}

function ClasseResistencia() {
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  ApagarResistencia();
  if (Classes == "Barbaro") {
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResCons").checked = (true);
  }
  if (Classes == "Bardo") {
    document.getElementById("ResDes").checked = (true);
    document.getElementById("ResCar").checked = (true);
  }
  if (Classes == "Bruxo") {
    document.getElementById("ResSab").checked = (true);
    document.getElementById("ResCar").checked = (true);
  }
  if (Classes == "Clerigo") {
    document.getElementById("ResSab").checked = (true);
    document.getElementById("ResCar").checked = (true);
  }
  if (Classes == "Druida") {
    document.getElementById("ResInt").checked = (true);
    document.getElementById("ResSab").checked = (true);
  }
  if (Classes == "Feiticeiro") {
    document.getElementById("ResCons").checked = (true);
    document.getElementById("ResCar").checked = (true);
  }
  if (Classes == "Guerreiro") {
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResCons").checked = (true);
  }
  if (Classes == "Ladino") {
    document.getElementById("ResDes").checked = (true);
    document.getElementById("ResInt").checked = (true);
  }
  if (Classes == "Mago") {
    document.getElementById("ResInt").checked = (true);
    document.getElementById("ResSab").checked = (true);
  }
  if (Classes == "Monge") {
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResDes").checked = (true);
  }
  if (Classes == "Paladino") {
    document.getElementById("ResSab").checked = (true);
    document.getElementById("ResCar").checked = (true);
  }
  if (Classes == "Patrulheiro") {
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResDes").checked = (true);
  }
}

function ProficienciasClasse() {
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  var Inst1 = document.getElementById("InstrumentoBardo1").options[InstrumentoBardo1.selectedIndex].value;
  var Inst2 = document.getElementById("InstrumentoBardo2").options[InstrumentoBardo2.selectedIndex].value;
  var Inst3 = document.getElementById("InstrumentoBardo3").options[InstrumentoBardo3.selectedIndex].value;
  var MongeProf = document.getElementById("EscolhaMonge").options[EscolhaMonge.selectedIndex].value;
  document.getElementById("EscolhaInstrumentoBardo").hidden = (true);
  document.getElementById("EscolhaFerramentasMonge").hidden = (true);
  if (Classes == "Barbaro") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armadura_Média");
    ProficienciasRaca.push("Escudos");
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Armas_Marciais");
  }
  if (Classes == "Bardo") {
    document.getElementById("EscolhaInstrumentoBardo").hidden = (false);
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Bestas_de_Uma_Mão");
    ProficienciasRaca.push("Espadas_Longas");
    ProficienciasRaca.push("Rapieiras");
    ProficienciasRaca.push("Espadas_Curtas");
    ProficienciasRaca.push(Inst1);
    ProficienciasRaca.push(Inst2);
    ProficienciasRaca.push(Inst3);
  }
  if (Classes == "Bruxo") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armas_Simples");
  }
  if (Classes == "Clerigo") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armadura_Média");
    ProficienciasRaca.push("Escudos");
    ProficienciasRaca.push("Armas_Simples");
  }
  if (Classes == "Druida") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armadura_Média");
    ProficienciasRaca.push("Escudos");
    ProficienciasRaca.push("Clavas");
    ProficienciasRaca.push("Adagas");
    ProficienciasRaca.push("Dardos");
    ProficienciasRaca.push("Azagaias");
    ProficienciasRaca.push("Maças");
    ProficienciasRaca.push("Bordões");
    ProficienciasRaca.push("Cimitarras");
    ProficienciasRaca.push("Foices");
    ProficienciasRaca.push("Fundas");
    ProficienciasRaca.push("Lanças");
    ProficienciasRaca.push("Kit_de_Herbalismo");
  }
  if (Classes == "Feiticeiro") {
    ProficienciasRaca.push("Adagas");
    ProficienciasRaca.push("Dardos");
    ProficienciasRaca.push("Fundas");
    ProficienciasRaca.push("Bordões");
    ProficienciasRaca.push("Bestas_Leves");
  }
  if (Classes == "Guerreiro") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armadura_Média");
    ProficienciasRaca.push("Armadura_Pesada");
    ProficienciasRaca.push("Escudos");
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Armas_Marciais");
  }
  if (Classes == "Ladino") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Bestas_de_Uma_Mão");
    ProficienciasRaca.push("Espadas_Longas");
    ProficienciasRaca.push("Rapieiras");
    ProficienciasRaca.push("Espadas_Curtas");
    ProficienciasRaca.push("Ferramentas_de_Ladrão");
  }
  if (Classes == "Mago") {
    ProficienciasRaca.push("Adagas");
    ProficienciasRaca.push("Dardos");
    ProficienciasRaca.push("Fundas");
    ProficienciasRaca.push("Bordões");
    ProficienciasRaca.push("Bestas_Leves");
  }
  if (Classes == "Monge") {
    document.getElementById("EscolhaFerramentasMonge").hidden = (false);
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Espadas_Curtas");
    ProficienciasRaca.push(MongeProf);
  }
  if (Classes == "Paladino") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armadura_Média");
    ProficienciasRaca.push("Armadura_Pesada");
    ProficienciasRaca.push("Escudos");
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Armas_Marciais");
  }
  if (Classes == "Patrulheiro") {
    ProficienciasRaca.push("Armadura_leve");
    ProficienciasRaca.push("Armadura_Média");
    ProficienciasRaca.push("Armas_Simples");
    ProficienciasRaca.push("Armas_Marciais");
  }
}

function PericiasClasse(){
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  var Raca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  var PerBarbaro1 = document.getElementById("PericiaBarbaro1").options[PericiaBarbaro1.selectedIndex].value;
  var PerBarbaro2 = document.getElementById("PericiaBarbaro2").options[PericiaBarbaro2.selectedIndex].value;
  var PerBardo1 = document.getElementById("PericiaBardo1").options[PericiaBardo1.selectedIndex].value;
  var PerBardo2 = document.getElementById("PericiaBardo2").options[PericiaBardo2.selectedIndex].value;
  var PerBardo3 = document.getElementById("PericiaBardo3").options[PericiaBardo3.selectedIndex].value;
  var PerBruxo1 = document.getElementById("PericiaBruxo1").options[PericiaBruxo1.selectedIndex].value;
  var PerBruxo2 = document.getElementById("PericiaBruxo2").options[PericiaBruxo2.selectedIndex].value;
  var PerClerigo1 = document.getElementById("PericiaClerigo1").options[PericiaClerigo1.selectedIndex].value;
  var PerClerigo2 = document.getElementById("PericiaClerigo2").options[PericiaClerigo2.selectedIndex].value;
  var PerDruida1 = document.getElementById("PericiaDruida1").options[PericiaDruida1.selectedIndex].value;
  var PerDruida2 = document.getElementById("PericiaDruida2").options[PericiaDruida2.selectedIndex].value;
  var PerFeiticeiro1 = document.getElementById("PericiaFeiticeiro1").options[PericiaFeiticeiro1.selectedIndex].value;
  var PerFeiticeiro2 = document.getElementById("PericiaFeiticeiro2").options[PericiaFeiticeiro2.selectedIndex].value;
  var PerGuerreiro1 = document.getElementById("PericiaGuerreiro1").options[PericiaGuerreiro1.selectedIndex].value;
  var PerGuerreiro2 = document.getElementById("PericiaGuerreiro2").options[PericiaGuerreiro2.selectedIndex].value;
  var PerLadino1 = document.getElementById("PericiaLadino1").options[PericiaLadino1.selectedIndex].value;
  var PerLadino2 = document.getElementById("PericiaLadino2").options[PericiaLadino2.selectedIndex].value;
  var Perladino3 = document.getElementById("PericiaLadino3").options[PericiaLadino3.selectedIndex].value;
  var PerLadino4 = document.getElementById("PericiaLadino4").options[PericiaLadino4.selectedIndex].value;
  var PerMago1 = document.getElementById("PericiaMago1").options[PericiaMago1.selectedIndex].value;
  var PerMago2 = document.getElementById("PericiaMago2").options[PericiaMago2.selectedIndex].value;
  var PerMonge1 = document.getElementById("PericiaMonge1").options[PericiaMonge1.selectedIndex].value;
  var PerMonge2 = document.getElementById("PericiaMonge2").options[PericiaMonge2.selectedIndex].value;
  var PerPaladino1 = document.getElementById("PericiaPaladino1").options[PericiaPaladino1.selectedIndex].value;
  var PerPaladino2 = document.getElementById("PericiaPaladino2").options[PericiaPaladino2.selectedIndex].value;
  var PerPatrulheiro1 = document.getElementById("PericiaPatrulheiro1").options[PericiaPatrulheiro1.selectedIndex].value;
  var PerPatrulheiro2 = document.getElementById("PericiaPatrulheiro2").options[PericiaPatrulheiro2.selectedIndex].value;
  var PerPatrulheiro3 = document.getElementById("PericiaPatrulheiro3").options[PericiaPatrulheiro3.selectedIndex].value;
  if (Classes == "Barbaro") {
    document.getElementById("PericiaClasseBarbaro").hidden = (false);
    document.getElementById(PerBarbaro1).checked = (true);
    document.getElementById(PerBarbaro2).checked = (true);
  }
  if (Classes == "Bardo") {
    document.getElementById("PericiaClasseBardo").hidden = (false);
    document.getElementById(PerBardo1).checked = (true);
    document.getElementById(PerBardo2).checked = (true);
    document.getElementById(PerBardo3).checked = (true);
  }
  if (Classes == "Bruxo") {
    document.getElementById("PericiaClasseBruxo").hidden = (false);
    document.getElementById(PerBruxo1).checked = (true);
    document.getElementById(PerBruxo2).checked = (true);
  }
  if (Classes == "Clerigo") {
    document.getElementById("PericiaClasseClerigo").hidden = (false);
    document.getElementById(PerClerigo1).checked = (true);
    document.getElementById(PerClerigo2).checked = (true);
  }
  if (Classes == "Druida") {
    document.getElementById("PericiaClasseDruida").hidden = (false);
    document.getElementById(PerDruida1).checked = (true);
    document.getElementById(PerDruida2).checked = (true);
  }
  if (Classes == "Feiticeiro") {
    document.getElementById("PericiaClasseFeiticeiro").hidden = (false);
    document.getElementById(PerFeiticeiro1).checked = (true);
    document.getElementById(PerFeiticeiro2).checked = (true);
  }
  if (Classes == "Guerreiro") {
    document.getElementById("PericiaClasseGuerreiro").hidden = (false);
    document.getElementById(PerGuerreiro1).checked = (true);
    document.getElementById(PerGuerreiro2).checked = (true);
  }
  if (Classes == "Ladino") {
    document.getElementById("PericiaClasseLadino").hidden = (false);
    document.getElementById(PerLadino1).checked = (true);
    document.getElementById(PerLadino2).checked = (true);
    document.getElementById(Perladino3).checked = (true);
    document.getElementById(PerLadino4).checked = (true);
  }
  if (Classes == "Mago") {
    document.getElementById("PericiaClasseMago").hidden = (false);
    document.getElementById(PerMago1).checked = (true);
    document.getElementById(PerMago2).checked = (true);
  }
  if (Classes == "Monge") {
    document.getElementById("PericiaClasseMonge").hidden = (false);
    document.getElementById(PerMonge1).checked = (true);
    document.getElementById(PerMonge2).checked = (true);
  }
  if (Classes == "Paladino") {
    document.getElementById("PericiaClassePaladino").hidden = (false);
    document.getElementById(PerPaladino1).checked = (true);
    document.getElementById(PerPaladino2).checked = (true);
  }
  if (Classes == "Patrulheiro") {
    document.getElementById("PericiaClassePatrulheiro").hidden = (false);
    document.getElementById(PerPatrulheiro1).checked = (true);
    document.getElementById(PerPatrulheiro2).checked = (true);
    document.getElementById(PerPatrulheiro3).checked = (true);
  }
}

function ApagarEscolhaPericiaClasse() {
  document.getElementById("PericiaClasseBarbaro").hidden = (true);
  document.getElementById("PericiaClasseBardo").hidden = (true);
  document.getElementById("PericiaClasseBruxo").hidden = (true);
  document.getElementById("PericiaClasseClerigo").hidden = (true);
  document.getElementById("PericiaClasseDruida").hidden = (true);
  document.getElementById("PericiaClasseFeiticeiro").hidden = (true);
  document.getElementById("PericiaClasseGuerreiro").hidden = (true);
  document.getElementById("PericiaClasseLadino").hidden = (true);
  document.getElementById("PericiaClasseMago").hidden = (true);
  document.getElementById("PericiaClasseMonge").hidden = (true);
  document.getElementById("PericiaClassePaladino").hidden = (true);
  document.getElementById("PericiaClassePatrulheiro").hidden = (true);
}

function ApagarPericiaClasse() {
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

function HabilidadesClasse() {
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  var BruxoPatrono = document.getElementById("EscolhaPatronoTranscendental").options[EscolhaPatronoTranscendental.selectedIndex].value;
  var ClerigoDominio = document.getElementById("EscolhaDominioDivino").options[EscolhaDominioDivino.selectedIndex].value;
  var FeiticeiroOrigem = document.getElementById("EscolhaOrigemMagia").options[EscolhaOrigemMagia.selectedIndex].value;
  var FeiticeiroOrigemAncestral = document.getElementById("EscolhaAncestralDraconico").options[EscolhaAncestralDraconico.selectedIndex].value;
  var GuerreiroEstilo = document.getElementById("EscolhaEstiloLuta").options[EscolhaEstiloLuta.selectedIndex].value;
  var PatrulheiroInimigo = document.getElementById("EscolhaInimigoFavorito").options[EscolhaInimigoFavorito.selectedIndex].value;
  var IProfLadino = document.getElementById("EscolhaEspecializaçao1");
  var IIProfLadino = document.getElementById("EscolhaEspecializaçao2");
  var PerLadino1 = document.getElementById("PericiaLadino1").options[PericiaLadino1.selectedIndex].value;
  var PerLadino2 = document.getElementById("PericiaLadino2").options[PericiaLadino2.selectedIndex].value;
  var Perladino3 = document.getElementById("PericiaLadino3").options[PericiaLadino3.selectedIndex].value;
  var PerLadino4 = document.getElementById("PericiaLadino4").options[PericiaLadino4.selectedIndex].value;

  if (Classes == "Barbaro") {
    CaracteristicasRaca.push("Fúria");
    CaracteristicasRaca.push("Defesa_Sem_Armadura");
  }
  if (Classes == "Bardo") {
    CaracteristicasRaca.push("Conjuração");
    CaracteristicasRaca.push("Inspiração_de_Bardo(1d6)");
  }
  if (Classes == "Bruxo") {
    document.getElementById("BruxoEscolhaPatrono").hidden = (false);
    if (BruxoPatrono == "Arquifada") {
      CaracteristicasRaca.push("Patrono_Transcendental(Arquifada)");
    }
    if (BruxoPatrono == "Corruptor") {
      CaracteristicasRaca.push("Patrono_Transcendental(Corruptor)");
    }
    if (BruxoPatrono == "GrandeAntigo") {
      CaracteristicasRaca.push("Patrono_Transcendental(GrandeAntigo)");
    }
    CaracteristicasRaca.push("Magia_de_Pacto");
  }
  if (Classes == "Clerigo") {
    document.getElementById("ClerigoEscolhaDominio").hidden = (false);
    if (ClerigoDominio == "Conhecimento") {
      CaracteristicasRaca.push("Domínio_Divino(Conhecimento)");
    }
    if (ClerigoDominio == "Enganaçao") {
      CaracteristicasRaca.push("Domínio_Divino(Enganação)");
    }
    if (ClerigoDominio == "Guerra") {
      CaracteristicasRaca.push("Domínio_Divino(Guerra)");
    }
    if (ClerigoDominio == "Luz") {
      CaracteristicasRaca.push("Domínio_Divino(Luz)");
    }
    if (ClerigoDominio == "Natureza") {
      CaracteristicasRaca.push("Domínio_Divino(Natureza)");
    }
    if (ClerigoDominio == "Tempestade") {
      CaracteristicasRaca.push("Domínio_Divino(Tempestade)");
    }
    if (ClerigoDominio == "Vida") {
      CaracteristicasRaca.push("Domínio_Divino(Vida)");
    }
    CaracteristicasRaca.push("Conjuração");
  }
  if (Classes == "Druida") {
    CaracteristicasRaca.push("Druidico");
    CaracteristicasRaca.push("Conjuração");
  }
  if (Classes == "Feiticeiro") {
    document.getElementById("FeiticeiroEscolhaOrigem").hidden = (false);
    if (FeiticeiroOrigem == "Draconica") {
      document.getElementById("EscolhaAncestralDraconico").hidden = (false);
      if (FeiticeiroOrigemAncestral == "Azul") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Azul)");
      }
      if (FeiticeiroOrigemAncestral == "Branco") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Branco)");
      }
      if (FeiticeiroOrigemAncestral == "Bronze") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Bronze)");
      }
      if (FeiticeiroOrigemAncestral == "Cobre") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Cobre)");
      }
      if (FeiticeiroOrigemAncestral == "Latao") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Latão)");
      }
      if (FeiticeiroOrigemAncestral == "Negro") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Negro)");
      }
      if (FeiticeiroOrigemAncestral == "Ouro") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Ouro)");
      }
      if (FeiticeiroOrigemAncestral == "Prata") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Prata)");
      }
      if (FeiticeiroOrigemAncestral == "Verde") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Verde)");
      }
      if (FeiticeiroOrigemAncestral == "Vermelho") {
        CaracteristicasRaca.push("Origem_de_Feitiçaria(Dragão_Vermelho)");
      }
    }
    if (FeiticeiroOrigem == "Selvagem") {
      CaracteristicasRaca.push("Origem_de_Feitiçaria(Selvagem)");
    }
    CaracteristicasRaca.push("Conjuração");
  }
  if (Classes == "Guerreiro") {
    document.getElementById("GuerreiroEscolhaEstilo").hidden = (false);
    if (GuerreiroEstilo == "Arquearia") {
      CaracteristicasRaca.push("Estilo_de_luta(Arquearia)");
    }
    if (GuerreiroEstilo == "CombateArmasGrandes") {
      CaracteristicasRaca.push("Estilo_de_luta(Combate_com_Armas_Grandes)");
    }
    if (GuerreiroEstilo == "CombateDuasArmas") {
      CaracteristicasRaca.push("Estilo_de_luta(Combate_com_Duas_Armas)");
    }
    if (GuerreiroEstilo == "Defesa") {
      CaracteristicasRaca.push("Estilo_de_luta(Defesa)");
    }
    if (GuerreiroEstilo == "Duelismo") {
      CaracteristicasRaca.push("Estilo_de_luta(Duelismo)");
    }
    if (GuerreiroEstilo == "Proteçao") {
      CaracteristicasRaca.push("Estilo_de_luta(Proteção)");
    }
    CaracteristicasRaca.push("Retomar_o_Fôlego");
  }
  if (Classes == "Ladino") {
    document.getElementById("LadinoEscolhaEspecializaçao").hidden = (false);
    IProfLadino = document.getElementById("EscolhaEspecializaçao1").innerHTML = ("<option value='"+PerLadino1+"'>"+PerLadino1+"</option> <option value='"+PerLadino2+"'>"+PerLadino2+"</option> <option value='"+Perladino3+"'>"+Perladino3+"</option> <option value='"+PerLadino4+"'>"+PerLadino4+"</option>");
    IIProfLadino = document.getElementById("EscolhaEspecializaçao2").innerHTML = ("<option value='"+PerLadino1+"'>"+PerLadino1+"</option> <option value='"+PerLadino2+"'>"+PerLadino2+"</option> <option value='"+Perladino3+"'>"+Perladino3+"</option> <option value='"+PerLadino4+"'>"+PerLadino4+"</option>");
    CaracteristicasRaca.push("Especialização");
    CaracteristicasRaca.push("Ataque_Furtivo");
    CaracteristicasRaca.push("Gíria_de_Ladrão");
  }
  if (Classes == "Mago") {
    CaracteristicasRaca.push("Conjuração");
    CaracteristicasRaca.push("Recuperação_Arcana");
  }
  if (Classes == "Monge") {
    CaracteristicasRaca.push("Defesa_Sem_Armadura");
    CaracteristicasRaca.push("Artes_Marciais");
  }
  if (Classes == "Paladino") {
    CaracteristicasRaca.push("Sentido_Divino");
    CaracteristicasRaca.push("Cura_pelas_Mãos");
  }
  if (Classes == "Patrulheiro") {
    document.getElementById("PatrulheiroEscolhaInimigo").hidden = (false);
    if (PatrulheiroInimigo == "Bestas") {
      CaracteristicasRaca.push("Inimigo_Favorito(Bestas)");
    }
    if (PatrulheiroInimigo == "Fadas") {
      CaracteristicasRaca.push("Inimigo_Favorito(Fadas)");
    }
    if (PatrulheiroInimigo == "Humanoide") {
      CaracteristicasRaca.push("Inimigo_Favorito(Humanoides)");
    }
    if (PatrulheiroInimigo == "Monstruosidades") {
      CaracteristicasRaca.push("Inimigo_Favorito(Monstruosidades)");
    }
    if (PatrulheiroInimigo == "MortoVivo") {
      CaracteristicasRaca.push("Inimigo_Favorito(MortoVivo)");
    }
    CaracteristicasRaca.push("Explorador_Natural");
  }

}

function ApagarEscolhaExtraClasse() {
  document.getElementById("BruxoEscolhaPatrono").hidden = (true);
  document.getElementById("ClerigoEscolhaDominio").hidden = (true);
  document.getElementById("FeiticeiroEscolhaOrigem").hidden = (true);
  document.getElementById("EscolhaAncestralDraconico").hidden = (true);
  document.getElementById("GuerreiroEscolhaEstilo").hidden = (true);
  document.getElementById("LadinoEscolhaEspecializaçao").hidden = (true);
  document.getElementById("PatrulheiroEscolhaInimigo").hidden = (true);
}

function EscolhaEquipamentosClasse() {
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  ApagarEscolhaEquipamentosClasse();
  if (Classes == "Barbaro") {
    document.getElementById("EscolhaEquipamentosBarbaro").hidden = (false);
  }
  if (Classes == "Bardo") {
    document.getElementById("EscolhaEquipamentosBardo").hidden = (false);
  }
  if (Classes == "Bruxo") {
    document.getElementById("EscolhaEquipamentosBruxo").hidden = (false);
  }
  if (Classes == "Clerigo") {
    document.getElementById("EscolhaEquipamentosClerigo").hidden = (false);
  }
  if (Classes == "Druida") {
    document.getElementById("EscolhaEquipamentosDruida").hidden = (false);
  }
  if (Classes == "Feiticeiro") {
    document.getElementById("EscolhaEquipamentosFeiticeiro").hidden = (false);
  }
  if (Classes == "Guerreiro") {
    document.getElementById("EscolhaEquipamentosGuerreiro").hidden = (false);
  }
  if (Classes == "Ladino") {
    document.getElementById("EscolhaEquipamentosLadino").hidden = (false);
  }
  if (Classes == "Mago") {
    document.getElementById("EscolhaEquipamentosMago").hidden = (false);
  }
  if (Classes == "Monge") {
    document.getElementById("EscolhaEquipamentosMonge").hidden = (false);
  }
  if (Classes == "Paladino") {
    document.getElementById("EscolhaEquipamentosPaladino").hidden = (false);
  }
  if (Classes == "Patrulheiro") {
    document.getElementById("EscolhaEquipamentosPatrulheiro").hidden = (false);
  }
}

function ApagarEscolhaEquipamentosClasse() {
    document.getElementById("EscolhaEquipamentosBarbaro").hidden = (true);
    document.getElementById("EscolhaEquipamentosBardo").hidden = (true);
    document.getElementById("EscolhaEquipamentosBruxo").hidden = (true);
    document.getElementById("EscolhaEquipamentosClerigo").hidden = (true);
    document.getElementById("EscolhaEquipamentosDruida").hidden = (true);
    document.getElementById("EscolhaEquipamentosFeiticeiro").hidden = (true);
    document.getElementById("EscolhaEquipamentosGuerreiro").hidden = (true);
    document.getElementById("EscolhaEquipamentosLadino").hidden = (true);
    document.getElementById("EscolhaEquipamentosMago").hidden = (true);
    document.getElementById("EscolhaEquipamentosMonge").hidden = (true);
    document.getElementById("EscolhaEquipamentosPaladino").hidden = (true);
    document.getElementById("EscolhaEquipamentosPatrulheiro").hidden = (true);
}

function EquipamentosDeClasse() {
  var Classes = document.getElementById("Classe").options[Classe.selectedIndex].value;
  var EquipBarbaro1 = document.getElementById("EquipamentoBarbaro1").options[EquipamentoBarbaro1.selectedIndex].value;
  var EquipBarbaro2 = document.getElementById("EquipamentoBarbaro2").options[EquipamentoBarbaro2.selectedIndex].value;
  var EquipBardo1 = document.getElementById("EquipamentoBardo1").options[EquipamentoBardo1.selectedIndex].value;
  var EquipBardo2 = document.getElementById("EquipamentoBardo2").options[EquipamentoBardo2.selectedIndex].value;
  var EquipBardo3 = document.getElementById("EquipamentoBardo3").options[EquipamentoBardo3.selectedIndex].value;
  var EquipBruxo1 = document.getElementById("EquipamentoBruxo1").options[EquipamentoBruxo1.selectedIndex].value;
  var EquipBruxo2 = document.getElementById("EquipamentoBruxo2").options[EquipamentoBruxo2.selectedIndex].value;
  var EquipBruxo3 = document.getElementById("EquipamentoBruxo3").options[EquipamentoBruxo3.selectedIndex].value;
  var EquipBruxo4 = document.getElementById("EquipamentoBruxo4").options[EquipamentoBruxo4.selectedIndex].value;
  var EquipClerigo1 = document.getElementById("EquipamentoClerigo1").options[EquipamentoClerigo1.selectedIndex].value;
  var EquipClerigo2 = document.getElementById("EquipamentoClerigo2").options[EquipamentoClerigo2.selectedIndex].value;
  var EquipClerigo3 = document.getElementById("EquipamentoClerigo3").options[EquipamentoClerigo3.selectedIndex].value;
  var EquipClerigo4 = document.getElementById("EquipamentoClerigo4").options[EquipamentoClerigo4.selectedIndex].value;
  var EquipDruida1 = document.getElementById("EquipamentoDruida1").options[EquipamentoDruida1.selectedIndex].value;
  var EquipDruida2 = document.getElementById("EquipamentoDruida2").options[EquipamentoDruida2.selectedIndex].value;
  var EquipDruida3 = document.getElementById("EquipamentoDruida3").options[EquipamentoDruida3.selectedIndex].value;
  var EquipFeiticeiro1 = document.getElementById("EquipamentoFeiticeiro1").options[EquipamentoFeiticeiro1.selectedIndex].value;
  var EquipFeiticeiro2 = document.getElementById("EquipamentoFeiticeiro2").options[EquipamentoFeiticeiro2.selectedIndex].value;
  var EquipFeiticeiro3 = document.getElementById("EquipamentoFeiticeiro3").options[EquipamentoFeiticeiro3.selectedIndex].value;
  var EquipGuerreiro1 = document.getElementById("EquipamentoGuerreiro1").options[EquipamentoGuerreiro1.selectedIndex].value;
  var EquipGuerreiro2 = document.getElementById("EquipamentoGuerreiro2").options[EquipamentoGuerreiro2.selectedIndex].value;
  var EquipGuerreiro3 = document.getElementById("EquipamentoGuerreiro3").options[EquipamentoGuerreiro3.selectedIndex].value;
  var EquipGuerreiro4 = document.getElementById("EquipamentoGuerreiro4").options[EquipamentoGuerreiro4.selectedIndex].value;
  var EquipGuerreiro5 = document.getElementById("EquipamentoGuerreiro5").options[EquipamentoGuerreiro5.selectedIndex].value;
  var EquipLadino1 = document.getElementById("EquipamentoLadino1").options[EquipamentoLadino1.selectedIndex].value;
  var EquipLadino2 = document.getElementById("EquipamentoLadino2").options[EquipamentoLadino2.selectedIndex].value;
  var EquipLadino3 = document.getElementById("EquipamentoLadino3").options[EquipamentoLadino3.selectedIndex].value;
  var EquipMago1 = document.getElementById("EquipamentoMago1").options[EquipamentoMago1.selectedIndex].value;
  var EquipMago2 = document.getElementById("EquipamentoMago2").options[EquipamentoMago2.selectedIndex].value;
  var EquipMago3 = document.getElementById("EquipamentoMago3").options[EquipamentoMago3.selectedIndex].value;
  var EquipMonge1 = document.getElementById("EquipamentoMonge1").options[EquipamentoMonge1.selectedIndex].value;
  var EquipMonge2 = document.getElementById("EquipamentoMonge2").options[EquipamentoMonge2.selectedIndex].value;
  var EquipPaladino1 = document.getElementById("EquipamentoPaladino1").options[EquipamentoPaladino1.selectedIndex].value;
  var EquipPaladino2 = document.getElementById("EquipamentoPaladino2").options[EquipamentoPaladino2.selectedIndex].value;
  var EquipPaladino3 = document.getElementById("EquipamentoPaladino3").options[EquipamentoPaladino3.selectedIndex].value;
  var EquipPaladino4 = document.getElementById("EquipamentoPaladino4").options[EquipamentoPaladino4.selectedIndex].value;
  var EquipPatrulheiro1 = document.getElementById("EquipamentoPatrulheiro1").options[EquipamentoPatrulheiro1.selectedIndex].value;
  var EquipPatrulheiro2 = document.getElementById("EquipamentoPatrulheiro2").options[EquipamentoPatrulheiro2.selectedIndex].value;
  var EquipPatrulheiro3 = document.getElementById("EquipamentoPatrulheiro3").options[EquipamentoPatrulheiro3.selectedIndex].value;

  if (Classes == "Barbaro") {
    EquipamentosClasses.push("Pacote_de_Aventureiro");
    EquipamentosClasses.push("Quatro_Azagaias");
    if (EquipBarbaro1 == "MachadoGrande") {
      EquipamentosClasses.push("Machado_Grande");
    }
    if (EquipBarbaro1 == "Alabarda") {
      EquipamentosClasses.push("Alabarda");
    }
    if (EquipBarbaro1 == "Cimitarra") {
      EquipamentosClasses.push("Cimitarra");
    }
    if (EquipBarbaro1 == "Chicote") {
      EquipamentosClasses.push("Chicote");
    }
    if (EquipBarbaro1 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipBarbaro1 == "EspadaGrande") {
      EquipamentosClasses.push("Espada_Grande");
    }
    if (EquipBarbaro1 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipBarbaro1 == "Glaive") {
      EquipamentosClasses.push("Glaive");
    }
    if (EquipBarbaro1 == "LançaMontaria") {
      EquipamentosClasses.push("Lança_de_Montaria");
    }
    if (EquipBarbaro1 == "LançaLonga") {
      EquipamentosClasses.push("Lança_Longa");
    }
    if (EquipBarbaro1 == "MaçaEstrela") {
      EquipamentosClasses.push("Maça_Estrela");
    }
    if (EquipBarbaro1 == "MachadoBatalha") {
      EquipamentosClasses.push("Machado_de_Batalha");
    }
    if (EquipBarbaro1 == "Malho") {
      EquipamentosClasses.push("Malho");
    }
    if (EquipBarbaro1 == "Mangual") {
      EquipamentosClasses.push("Mangual");
    }
    if (EquipBarbaro1 == "MarteloGuerra") {
      EquipamentosClasses.push("Martelo_de_Guerra");
    }
    if (EquipBarbaro1 == "PicaretaGuerra") {
      EquipamentosClasses.push("Picareta_de_Guerra");
    }
    if (EquipBarbaro1 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipBarbaro1 == "Tridente") {
      EquipamentosClasses.push("Tridente");
    }
    if (EquipBarbaro2 == "DuasMachadinhas") {
      EquipamentosClasses.push("Duas_Machadinhas");
    }
    if (EquipBarbaro2 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipBarbaro2 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipBarbaro2 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipBarbaro2 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipBarbaro2 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipBarbaro2 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipBarbaro2 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipBarbaro2 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipBarbaro2 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipBarbaro2 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipBarbaro2 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipBarbaro2 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipBarbaro2 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
  }
  if (Classes == "Bardo") {
    EquipamentosClasses.push("Armadura_de_Couro");
    EquipamentosClasses.push("Adaga");
    if (EquipBardo1 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipBardo1 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipBardo1 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipBardo1 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipBardo1 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipBardo1 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipBardo1 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipBardo1 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipBardo1 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipBardo1 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipBardo1 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipBardo1 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipBardo1 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipBardo1 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipBardo1 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
    if (EquipBardo1 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipBardo2 == "PacoteDiplomata") {
      EquipamentosClasses.push("Pacote_de_Diplomata");
    }
    if (EquipBardo2 == "PacoteArtista") {
      EquipamentosClasses.push("Pacote_de_Artista");
    }
    if (EquipBardo3 == "Alaude") {
      EquipamentosClasses.push("Alaúde");
    }
    if (EquipBardo3 == "Flauta") {
      EquipamentosClasses.push("Flauta");
    }
    if (EquipBardo3 == "FlautaPa") {
      EquipamentosClasses.push("Flauta_de_Pã");
    }
    if (EquipBardo3 == "GaitaFoles") {
      EquipamentosClasses.push("Gaita_de_Foles");
    }
    if (EquipBardo3 == "Lira") {
      EquipamentosClasses.push("Lira");
    }
    if (EquipBardo3 == "Oboe") {
      EquipamentosClasses.push("Oboé");
    }
    if (EquipBardo3 == "Tambor") {
      EquipamentosClasses.push("Tambor");
    }
    if (EquipBardo3 == "Trombeta") {
      EquipamentosClasses.push("Trombeta");
    }
    if (EquipBardo3 == "Violino") {
      EquipamentosClasses.push("Violino");
    }
    if (EquipBardo3 == "Xilofone") {
      EquipamentosClasses.push("Xilofone");
    }
  }
  if (Classes == "Bruxo") {
    EquipamentosClasses.push("Armadura_de_Couro");
    EquipamentosClasses.push("Adagas");
    EquipamentosClasses.push("Adagas");
    if (EquipBruxo1 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipBruxo1 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipBruxo1 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipBruxo1 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipBruxo1 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipBruxo1 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipBruxo1 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipBruxo1 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipBruxo1 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipBruxo1 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipBruxo1 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipBruxo1 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipBruxo1 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
    if (EquipBruxo1 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipBruxo2 == "BolsaComponentes") {
      EquipamentosClasses.push("Bolsa_de_Componentes");
    }
    if (EquipBruxo2 == "FocoArcano") {
      EquipamentosClasses.push("Foco_Arcano");
    }
    if (EquipBruxo3 == "PacoteEstudioso") {
      EquipamentosClasses.push("Pacote_de_Estudioso");
    }
    if (EquipBruxo3 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
    if (EquipBruxo4 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipBruxo4 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipBruxo4 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipBruxo4 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipBruxo4 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipBruxo4 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipBruxo4 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipBruxo4 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipBruxo4 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipBruxo4 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipBruxo4 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipBruxo4 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipBruxo4 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
    if (EquipBruxo4 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
  }
  if (Classes == "Clerigo") {
    EquipamentosClasses.push("Escudo");
    EquipamentosClasses.push("Símbolo_Sagrado");
    if (EquipClerigo1 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipClerigo1 == "MarteloGuerra") {
      EquipamentosClasses.push("Martelo_de_Guerra");
    }
    if (EquipClerigo2 == "Brunea") {
      EquipamentosClasses.push("Brunea");
    }
    if (EquipClerigo2 == "ArmaduraCouro") {
      EquipamentosClasses.push("Armadura_de_Couro");
    }
    if (EquipClerigo2 == "CotaMalha") {
      EquipamentosClasses.push("Cota_de_Malha");
    }
    if (EquipClerigo3 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipClerigo3 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipClerigo3 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipClerigo3 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipClerigo3 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipClerigo3 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipClerigo3 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipClerigo3 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipClerigo3 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipClerigo3 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipClerigo3 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipClerigo3 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipClerigo3 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
    if (EquipClerigo3 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipClerigo4 == "PacoteSacerdote") {
      EquipamentosClasses.push("Pacote_de_Sacerdote");
    }
    if (EquipClerigo4 == "PacoteAventureiro") {
      EquipamentosClasses.push("Pacote_de_Aventureiro");
    }
  }
  if (Classes == "Druida") {
    EquipamentosClasses.push("Armadura_de_Couro");
    EquipamentosClasses.push("Pacote_de_Aventureiro");
    EquipamentosClasses.push("Foco_Druídico");
    if (EquipDruida1 == "EscudoMadeira") {
      EquipamentosClasses.push("Escudo_de_Madeira");
    }
    if (EquipDruida1 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipDruida1 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipDruida1 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipDruida1 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipDruida1 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipDruida1 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipDruida1 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipDruida1 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipDruida1 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipDruida1 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipDruida1 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipDruida1 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipDruida1 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
    if (EquipDruida1 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipDruida2 == "Cimitarra") {
      EquipamentosClasses.push("Cimitarra");
    }
    if (EquipDruida2 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipDruida2 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipDruida2 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipDruida2 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipDruida2 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipDruida2 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipDruida2 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipDruida2 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipDruida2 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipDruida2 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipDruida3 == "PacoteEstudioso") {
      EquipamentosClasses.push("Pacote_de_Estudioso");
    }
    if (EquipDruida3 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
  }
  if (Classes == "Feiticeiro") {
    if (EquipFeiticeiro1 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipFeiticeiro1 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipFeiticeiro1 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipFeiticeiro1 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipFeiticeiro1 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipFeiticeiro1 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipFeiticeiro1 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipFeiticeiro1 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipFeiticeiro1 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipFeiticeiro1 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipFeiticeiro2 == "BolsaComponentes") {
      EquipamentosClasses.push("Bolsa_de_Componentes");
    }
    if (EquipFeiticeiro2 == "FocoArcano") {
      EquipamentosClasses.push("Foco_Arcano");
    }
    if (EquipFeiticeiro3 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
    if (EquipFeiticeiro3 == "PacoteAventureiro") {
      EquipamentosClasses.push("Pacote_de_Aventureiro");
    }
  }
  if (Classes == "Guerreiro") {
    if (EquipGuerreiro1 == "CotaMalha") {
      EquipamentosClasses.push("Cota_de_Malha");
    }
    if (EquipGuerreiro1 == "GibaoPeleEArcoLongo") {
      EquipamentosClasses.push("Gibão_de_Pele");
      EquipamentosClasses.push("Arco_Longo");
    }
    if (EquipGuerreiro2 == "MachadoGrande") {
      EquipamentosClasses.push("MachadoGrande");
    }
    if (EquipGuerreiro2 == "Alabarda") {
      EquipamentosClasses.push("Alabarda");
    }
    if (EquipGuerreiro2 == "Cimitarra") {
      EquipamentosClasses.push("Cimitarra");
    }
    if (EquipGuerreiro2 == "Chicote") {
      EquipamentosClasses.push("Chicote");
    }
    if (EquipGuerreiro2 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipGuerreiro2 == "EspadaGrande") {
      EquipamentosClasses.push("Espada_Grande");
    }
    if (EquipGuerreiro2 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipGuerreiro2 == "Glaive") {
      EquipamentosClasses.push("Glaive");
    }
    if (EquipGuerreiro2 == "LançaMontaria") {
      EquipamentosClasses.push("Lança_de_Montaria");
    }
    if (EquipGuerreiro2 == "LançaLonga") {
      EquipamentosClasses.push("Lança_Longa");
    }
    if (EquipGuerreiro2 == "MaçaEstrela") {
      EquipamentosClasses.push("Maça_Estrela");
    }
    if (EquipGuerreiro2 == "MachadoBatalha") {
      EquipamentosClasses.push("Machado_de_Batalha");
    }
    if (EquipGuerreiro2 == "Malho") {
      EquipamentosClasses.push("Malho");
    }
    if (EquipGuerreiro2 == "Mangual") {
      EquipamentosClasses.push("Mangual");
    }
    if (EquipGuerreiro2 == "MarteloGuerra") {
      EquipamentosClasses.push("Martelo_de_Guerra");
    }
    if (EquipGuerreiro2 == "PicaretaGuerra") {
      EquipamentosClasses.push("Picareta_de_Guerra");
    }
    if (EquipGuerreiro2 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipGuerreiro2 == "Tridente") {
      EquipamentosClasses.push("Tridente");
    }
    if (EquipGuerreiro2 == "Escudo") {
      EquipamentosClasses.push("Escudo")
    }
    if (EquipGuerreiro3 == "MachadoGrande") {
      EquipamentosClasses.push("MachadoGrande");
    }
    if (EquipGuerreiro3 == "Alabarda") {
      EquipamentosClasses.push("Alabarda");
    }
    if (EquipGuerreiro3 == "Cimitarra") {
      EquipamentosClasses.push("Cimitarra");
    }
    if (EquipGuerreiro3 == "Chicote") {
      EquipamentosClasses.push("Chicote");
    }
    if (EquipGuerreiro3 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipGuerreiro3 == "EspadaGrande") {
      EquipamentosClasses.push("Espada_Grande");
    }
    if (EquipGuerreiro3 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipGuerreiro3 == "Glaive") {
      EquipamentosClasses.push("Glaive");
    }
    if (EquipGuerreiro3 == "LançaMontaria") {
      EquipamentosClasses.push("Lança_de_Montaria");
    }
    if (EquipGuerreiro3 == "LançaLonga") {
      EquipamentosClasses.push("Lança_Longa");
    }
    if (EquipGuerreiro3 == "MaçaEstrela") {
      EquipamentosClasses.push("Maça_Estrela");
    }
    if (EquipGuerreiro3 == "MachadoBatalha") {
      EquipamentosClasses.push("Machado_de_Batalha");
    }
    if (EquipGuerreiro3 == "Malho") {
      EquipamentosClasses.push("Malho");
    }
    if (EquipGuerreiro3 == "Mangual") {
      EquipamentosClasses.push("Mangual");
    }
    if (EquipGuerreiro3 == "MarteloGuerra") {
      EquipamentosClasses.push("Martelo_de_Guerra");
    }
    if (EquipGuerreiro3 == "PicaretaGuerra") {
      EquipamentosClasses.push("Picareta_de_Guerra");
    }
    if (EquipGuerreiro3 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipGuerreiro3 == "Tridente") {
      EquipamentosClasses.push("Tridente");
    }
    if (EquipGuerreiro3 == "Escudo") {
      EquipamentosClasses.push("Escudo");
    }
    if (EquipGuerreiro4 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipGuerreiro4 == "MachadosArremesso") {
      EquipamentosClasses.push("Dois_Machados_de_Arremesso");
    }
    if (EquipGuerreiro5 == "PacoteAventureiro") {
      EquipamentosClasses.push("Pacote_de_Aventureiro");
    }
    if (EquipGuerreiro5 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
  }
  if (Classes == "Ladino") {
    EquipamentosClasses.push("Armadura_de_Couro");
    EquipamentosClasses.push("Adaga");
    EquipamentosClasses.push("Adaga");
    EquipamentosClasses.push("Ferramentas_de_Ladrão");
    if (EquipLadino1 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipLadino1 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipLadino2 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipLadino2 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipLadino3 == "PacoteAssaltante") {
      EquipamentosClasses.push("Pacote_de_Assaltante");
    }
    if (EquipLadino3 == "PacoteAventureiro") {
      EquipamentosClasses.push("Pacote_de_Aventureiro");
    }
    if (EquipLadino3 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
  }
  if (Classes == "Mago") {
    EquipamentosClasses.push("Grimório");
    if (EquipMago1 == "Bordao") {
      EquipamentosClasses.push("Bordão");
    }
    if (EquipMago1 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipMago2 == "BolsaComponentes") {
      EquipamentosClasses.push("BolsaComponentes");
    }
    if (EquipMago2 == "FocoArcano") {
      EquipamentosClasses.push("Foco_Arcano");
    }
    if (EquipMago3 == "PacoteEstudioso") {
      EquipamentosClasses.push("Pacote_de_Estudioso");
    }
    if (EquipMago3 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
  }
  if (Classes == "Monge") {
    EquipamentosClasses.push("Dez_Dardos");
    if (EquipMonge1 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta")
    }
    if (EquipMonge1 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipMonge1 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipMonge1 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipMonge1 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipMonge1 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipMonge1 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipMonge1 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipMonge1 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipMonge1 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipMonge1 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipMonge1 == "ArcoCurto") {
      EquipamentosClasses.push("Arco_Curto");
    }
    if (EquipMonge1 == "BestaLeve") {
      EquipamentosClasses.push("Besta_Leve");
    }
    if (EquipMonge1 == "Dardo") {
      EquipamentosClasses.push("Dardo");
    }
    if (EquipMonge1 == "Funda") {
      EquipamentosClasses.push("Funda");
    }
    if (EquipMonge2 == "PacoteExplorador") {
      EquipamentosClasses.push("Pacote_de_Explorador");
    }
    if (EquipMonge2 == "PacoteAventureiro") {
      EquipamentosClasses.push("Pacote_de_Aventureiro");
    }
  }
  if (Classes == "Paladino") {
    EquipamentosClasses.push("Cota_de_Malha");
    EquipamentosClasses.push("Símbolo_Sagrado");
    if (EquipPaladino1 == "MachadoGrande") {
      EquipamentosClasses.push("MachadoGrande");
    }
    if (EquipPaladino1 == "Alabarda") {
      EquipamentosClasses.push("Alabarda");
    }
    if (EquipPaladino1 == "Cimitarra") {
      EquipamentosClasses.push("Cimitarra");
    }
    if (EquipPaladino1 == "Chicote") {
      EquipamentosClasses.push("Chicote");
    }
    if (EquipPaladino1 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipPaladino1 == "EspadaGrande") {
      EquipamentosClasses.push("Espada_Grande");
    }
    if (EquipPaladino1 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipPaladino1 == "Glaive") {
      EquipamentosClasses.push("Glaive");
    }
    if (EquipPaladino1 == "LançaMontaria") {
      EquipamentosClasses.push("Lança_de_Montaria");
    }
    if (EquipPaladino1 == "LançaLonga") {
      EquipamentosClasses.push("Lança_Longa");
    }
    if (EquipPaladino1 == "MaçaEstrela") {
      EquipamentosClasses.push("Maça_Estrela");
    }
    if (EquipPaladino1 == "MachadoBatalha") {
      EquipamentosClasses.push("Machado_de_Batalha");
    }
    if (EquipPaladino1 == "Malho") {
      EquipamentosClasses.push("Malho");
    }
    if (EquipPaladino1 == "Mangual") {
      EquipamentosClasses.push("Mangual");
    }
    if (EquipPaladino1 == "MarteloGuerra") {
      EquipamentosClasses.push("Martelo_de_Guerra");
    }
    if (EquipPaladino1 == "PicaretaGuerra") {
      EquipamentosClasses.push("Picareta_de_Guerra");
    }
    if (EquipPaladino1 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipPaladino1 == "Tridente") {
      EquipamentosClasses.push("Tridente");
    }
    if (EquipPaladino1 == "Escudo") {
      EquipamentosClasses.push("Escudo");
    }
    if (EquipPaladino2 == "MachadoGrande") {
      EquipamentosClasses.push("MachadoGrande");
    }
    if (EquipPaladino2 == "Alabarda") {
      EquipamentosClasses.push("Alabarda");
    }
    if (EquipPaladino2 == "Cimitarra") {
      EquipamentosClasses.push("Cimitarra");
    }
    if (EquipPaladino2 == "Chicote") {
      EquipamentosClasses.push("Chicote");
    }
    if (EquipPaladino2 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipPaladino2 == "EspadaGrande") {
      EquipamentosClasses.push("Espada_Grande");
    }
    if (EquipPaladino2 == "EspadaLonga") {
      EquipamentosClasses.push("Espada_Longa");
    }
    if (EquipPaladino2 == "Glaive") {
      EquipamentosClasses.push("Glaive");
    }
    if (EquipPaladino2 == "LançaMontaria") {
      EquipamentosClasses.push("Lança_de_Montaria");
    }
    if (EquipPaladino2 == "LançaLonga") {
      EquipamentosClasses.push("Lança_Longa");
    }
    if (EquipPaladino2 == "MaçaEstrela") {
      EquipamentosClasses.push("Maça_Estrela");
    }
    if (EquipPaladino2 == "MachadoBatalha") {
      EquipamentosClasses.push("Machado_de_Batalha");
    }
    if (EquipPaladino2 == "Malho") {
      EquipamentosClasses.push("Malho");
    }
    if (EquipPaladino2 == "Mangual") {
      EquipamentosClasses.push("Mangual");
    }
    if (EquipPaladino2 == "MarteloGuerra") {
      EquipamentosClasses.push("Martelo_de_Guerra");
    }
    if (EquipPaladino2 == "PicaretaGuerra") {
      EquipamentosClasses.push("Picareta_de_Guerra");
    }
    if (EquipPaladino2 == "Rapieira") {
      EquipamentosClasses.push("Rapieira");
    }
    if (EquipPaladino2 == "Tridente") {
      EquipamentosClasses.push("Tridente");
    }
    if (EquipPaladino2 == "Escudo") {
      EquipamentosClasses.push("Escudo");
    }
    if (EquipPaladino3 == "CincoAzagaias") {
      EquipamentosClasses.push("Cinco_Azagaias");
    }
    if (EquipPaladino3 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipPaladino3 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipPaladino3 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipPaladino3 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipPaladino3 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipPaladino3 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipPaladino3 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipPaladino3 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipPaladino3 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipPaladino3 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipPaladino4 == "PacoteSacerdote") {
      EquipamentosClasses.push("PacoteSacerdote");
    }
    if (EquipPaladino4 == "PacoteAventureiro") {
      EquipamentosClasses.push("PacoteAventureiro");
    }
  }
  if (Classes == "Patrulheiro") {
    EquipamentosClasses.push("Arco_Longo");
    if (EquipPatrulheiro1 == "Brunea") {
      EquipamentosClasses.push("Brunea");
    }
    if (EquipPatrulheiro1 == "ArmaduraCouro") {
      EquipamentosClasses.push("Armadura_de_Couro");
    }
    if (EquipPatrulheiro2 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipPatrulheiro2 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipPatrulheiro2 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipPatrulheiro2 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipPatrulheiro2 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipPatrulheiro2 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipPatrulheiro2 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipPatrulheiro2 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipPatrulheiro2 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipPatrulheiro2 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipPatrulheiro2 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    if (EquipPatrulheiro3 == "EspadaCurta") {
      EquipamentosClasses.push("Espada_Curta");
    }
    if (EquipPatrulheiro3 == "Adaga") {
      EquipamentosClasses.push("Adaga");
    }
    if (EquipPatrulheiro3 == "Azagaia") {
      EquipamentosClasses.push("Azagaia");
    }
    if (EquipPatrulheiro3 == "Bordao") {
      EquipamentosClasses.push("Bordao");
    }
    if (EquipPatrulheiro3 == "ClavaGrande") {
      EquipamentosClasses.push("Clava_Grande");
    }
    if (EquipPatrulheiro3 == "FoiceCurta") {
      EquipamentosClasses.push("Foice_Curta");
    }
    if (EquipPatrulheiro3 == "Lança") {
      EquipamentosClasses.push("Lança");
    }
    if (EquipPatrulheiro3 == "Maça") {
      EquipamentosClasses.push("Maça");
    }
    if (EquipPatrulheiro3 == "MarteloLeve") {
      EquipamentosClasses.push("Martelo_Leve");
    }
    if (EquipPatrulheiro3 == "Porrete") {
      EquipamentosClasses.push("Porrete");
    }
    if (EquipPatrulheiro3 == "Machadinha") {
      EquipamentosClasses.push("Machadinha");
    }
    }
  }

function PrintEquipamentosClasse() {
  for (var i = 0; i < EquipamentosClasses.length; i++) {
    var Printf = EquipamentosClasses[i]
    document.getElementById("Equipamentos").value += (Printf + "\n");
  }
}

function ApagarEquipamentosClasse() {
  EquipamentosClasses = [];
  document.getElementById("Equipamentos").value = ("");

}
