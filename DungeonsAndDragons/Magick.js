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
var PericiasLimite = 0;

// Vetores para comandos (Raças, Classes)

var Raca = {
  AnaoColina: function() {
    //Atributos
    Constituiçao = 10;
    ConstituiçaoMin = 10;
    Sabedoria = 9;
    SabedoriaMin = 9;

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
    Constituiçao = 10;
    ConstituiçaoMin = 10;
    Força = 10;
    ForçaMin = 10;

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
    Destreza = 10;
    DestrezaMin = 10;
    Inteligencia = 9;
    InteligenciaMin = 9;

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
    Destreza = 10;
    DestrezaMin = 10;
    Sabedoria = 9;
    SabedoriaMin = 9;

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
    Destreza = 10;
    DestrezaMin = 10;
    Carisma = 9;
    CarismaMin = 9;

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
    Destreza = 10;
    DestrezaMin = 10;
    Carisma = 9;
    CarismaMin = 9;

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
    Destreza = 10;
    DestrezaMin = 10;
    Constituiçao = 9;
    ConstituiçaoMin = 9;

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
    Força = 9;
    ForçaMin = 9;
    Destreza = 9;
    DestrezaMin = 9;
    Constituiçao = 9;
    ConstituiçaoMin = 9;
    Inteligencia = 9;
    InteligenciaMin = 9;
    Sabedoria = 9;
    SabedoriaMin = 9;
    Carisma = 9;
    CarismaMin = 9;

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
    Força = 10;
    ForçaMin = 10;
    Carisma = 9;
    CarismaMin = 9;

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
    Inteligencia = 10;
    InteligenciaMin = 10;
    Destreza = 9;
    DestrezaMin = 9;

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
    Inteligencia = 10;
    InteligenciaMin = 10;
    Constituiçao = 9;
    ConstituiçaoMin = 9;

    //Proficiencias
    Proficiencias.push("Ferramentas_de_Artesão(Engenhoqueiro)");

    //Caracteristi Sobrevivência (Scas
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
    Carisma = 10;
    CarismaMin = 10;
    Extra = 26;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Ancestral_Feérico");
    Caracteristicas.push("Versatilidade_em_Pericia");

    //Idiomas
    var LinguaExtra = document.getElementById("ExtraIdioma").options[ExtraIdioma.selectedIndex].value;
    document.getElementById("IdiomaExtra").hidden = (false);
    Idiomas.push("Comum");
    Idiomas.push("Élfico");
    Idiomas.push(LinguaExtra);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Acrobacia']();
    ClassePericias['Arcanismo']();
    ClassePericias['Atletismo']();
    ClassePericias['Atuaçao']();
    ClassePericias['Blefar']();
    ClassePericias['Furtividade']();
    ClassePericias['Historia']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Intuiçao']();
    ClassePericias['Investigaçao']();
    ClassePericias['LidarAnimais']();
    ClassePericias['Medicina']();
    ClassePericias['Natureza']();
    ClassePericias['Persuasao']();
    ClassePericias['Percepçao']();
    ClassePericias['Prestidigitaçao']();
    ClassePericias['Religiao']();
    ClassePericias['Sobrevivencia']();
  },

  MeioOrc: function() {
    //Atributos
    Força = 10;
    ForçaMin = 10;
    Constituiçao = 9;
    ConstituiçaoMin = 9;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Ameaçador");
    Caracteristicas.push("Resistência_Implacável");
    Caracteristicas.push("Ataques_Selvagens");

    //Idiomas
    Idiomas.push("Comum");
    Idiomas.push("Orc");

    //Pericias
    document.getElementById("Intimidaçao").checked = (true);
    document.getElementById("Intimidaçao").disabled = (true);
    document.getElementById("Intimidaçao").classList.remove("PericiaAtivada");
    document.getElementById("Intimidaçao").classList.add("PericiaDesativada");
  },

  Tiefling: function() {
    //Atributos
    Carisma = 10;
    CarismaMin = 10;
    Inteligencia = 9;
    InteligenciaMin = 9;

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

var Classes = {
  Barbaro: function () {
    //Resistencias
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResCons").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Atletismo']();
    ClassePericias['Intimidaçao']();
    ClassePericias['LidarAnimais']();
    ClassePericias['Natureza']();
    ClassePericias['Percepçao']();
    ClassePericias['Sobrevivencia']();
  },
  Bardo: function () {
    //Resistencias
    document.getElementById("ResDes").checked = (true);
    document.getElementById("ResCar").checked = (true);

    //Pericias
    PericiasLimite += 3;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Acrobacia']();
    ClassePericias['Arcanismo']();
    ClassePericias['Atletismo']();
    ClassePericias['Atuaçao']();
    ClassePericias['Blefar']();
    ClassePericias['Furtividade']();
    ClassePericias['Historia']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Intuiçao']();
    ClassePericias['Investigaçao']();
    ClassePericias['LidarAnimais']();
    ClassePericias['Medicina']();
    ClassePericias['Natureza']();
    ClassePericias['Persuasao']();
    ClassePericias['Percepçao']();
    ClassePericias['Prestidigitaçao']();
    ClassePericias['Religiao']();
    ClassePericias['Sobrevivencia']();
  },
  Bruxo: function () {
    //Resistencias
    document.getElementById("ResSab").checked = (true);
    document.getElementById("ResCar").checked = (true);

    //PericiasClassePericias['']();
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Arcanismo']();
    ClassePericias['Blefar']();
    ClassePericias['Historia']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Investigaçao']();
    ClassePericias['Natureza']();
    ClassePericias['Religiao']();
  },
  Clerigo: function () {
    //Resistencias
    document.getElementById("ResSab").checked = (true);
    document.getElementById("ResCar").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Historia']();
    ClassePericias['Intuiçao']();
    ClassePericias['Medicina']();
    ClassePericias['Persuasao']();
    ClassePericias['Religiao']();
  },
  Druida: function () {
    //Resistencias
    document.getElementById("ResInt").checked = (true);
    document.getElementById("ResSab").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Arcanismo']();
    ClassePericias['LidarAnimais']();
    ClassePericias['Intuiçao']();
    ClassePericias['Medicina']();
    ClassePericias['Natureza']();
    ClassePericias['Percepçao']();
    ClassePericias['Religiao']();
    ClassePericias['Sobrevivencia']();
  },
  Feiticeiro: function () {
    //Resistencias
    document.getElementById("ResCons").checked = (true);
    document.getElementById("ResCar").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Arcanismo']();
    ClassePericias['Blefar']();
    ClassePericias['Intuiçao']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Persuasao']();
    ClassePericias['Religiao']();
  },
  Guerreiro: function () {
    //Resistencias
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResCons").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Acrobacia']();
    ClassePericias['LidarAnimais']();
    ClassePericias['Atletismo']();
    ClassePericias['Historia']();
    ClassePericias['Intuiçao']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Percepçao']();
    ClassePericias['Sobrevivencia']();
  },
  Ladino: function () {
    //Resistencias
    document.getElementById("ResDes").checked = (true);
    document.getElementById("ResInt").checked = (true);

    //Pericias
    PericiasLimite += 4;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Acrobacia']();
    ClassePericias['Atletismo']();
    ClassePericias['Atuaçao']();
    ClassePericias['Blefar']();
    ClassePericias['Furtividade']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Intuiçao']();
    ClassePericias['Investigaçao']();
    ClassePericias['Percepçao']();
    ClassePericias['Persuasao']();
    ClassePericias['Prestidigitaçao']();
  },
  Mago: function () {
    //Resistencias
    document.getElementById("ResInt").checked = (true);
    document.getElementById("ResSab").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Arcanismo']();
    ClassePericias['Historia']();
    ClassePericias['Intuiçao']();
    ClassePericias['Investigaçao']();
    ClassePericias['Medicina']();
    ClassePericias['Religiao']();
  },
  Monge: function () {
    //Resistencias
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResDes").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Acrobacia']();
    ClassePericias['Atletismo']();
    ClassePericias['Furtividade']();
    ClassePericias['Historia']();
    ClassePericias['Intuiçao']();
    ClassePericias['Religiao']();
  },
  Paladino: function () {
    //Resistencias
    document.getElementById("ResSab").checked = (true);
    document.getElementById("ResCar").checked = (true);

    //Pericias
    PericiasLimite += 2;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['Atletismo']();
    ClassePericias['Intuiçao']();
    ClassePericias['Intimidaçao']();
    ClassePericias['Medicina']();
    ClassePericias['Persuasao']();
    ClassePericias['Religiao']();
  },
  Patrulheiro: function () {
    //Resistencias
    document.getElementById("ResFor").checked = (true);
    document.getElementById("ResDes").checked = (true);

    //Pericias
    PericiasLimite += 3;
    document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+PericiasLimite);
    ClassePericias['LidarAnimais']();
    ClassePericias['Atletismo']();
    ClassePericias['Furtividade']();
    ClassePericias['Intuiçao']();
    ClassePericias['Investigaçao']();
    ClassePericias['Natureza']();
    ClassePericias['Percepçao']();
    ClassePericias['Sobrevivencia']();
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

function PrintModAtributo() {
  ModAtributos['ModFor']();
  ModAtributos['ModDes']();
  ModAtributos['ModCons']();
  ModAtributos['ModInt']();
  ModAtributos['ModSab']();
  ModAtributos['ModCar']();
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
    PericiasLimite = 0;
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
  //Draconico
  document.getElementById("AncestralidadeDraconica").hidden = (true);
  //Idiomas
  document.getElementById("IdiomaExtra").hidden = (true);
}

function ApagarIdioma() {
  Idiomas = [];
  document.getElementById("Lingua").value = ("");

}

function ApagarResistencia() {
  document.getElementById("ResFor").checked = (false);
  document.getElementById("ResDes").checked = (false);
  document.getElementById("ResCons").checked = (false);
  document.getElementById("ResInt").checked = (false);
  document.getElementById("ResSab").checked = (false);
  document.getElementById("ResCar").checked = (false);
}

function ApagarPericia() {
  var PericiasAtivadas = document.querySelectorAll("input[class='PericiaAtivada']");
  var PericiasAtivadasNumbers = PericiasAtivadas.length;
  var PericiasDesativadas = document.querySelectorAll("input[class='PericiaDesativada']");
  var PericiasDesativadasNumbers = PericiasDesativadas.length;
  PericiasLimite = 0;

  for (var i = 0; i < PericiasAtivadasNumbers; i++) {
    PericiasAtivadas[i].classList.remove("PericiaAtivada");
    PericiasAtivadas[i].classList.add("PericiaDesativada");
    PericiasAtivadas[i].disabled = (true);
    PericiasAtivadas[i].checked = (false);
  };

  for (var i = 0; i < PericiasDesativadasNumbers; i++) {
    PericiasDesativadas[i].disabled = (true);
    PericiasDesativadas[i].checked = (false);
  };

}

//Atributos,Pericias,Resistencias

var AtributosSelecao = {
  MenosForça: function() {
    if (Força != ForçaMin) {
      Força -= 1;
      Extra += 1;
      PrintAtributos();
      ModAtributos['ModFor']();
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
        ModAtributos['ModFor']();
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
      ModAtributos['ModDes']();
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
        ModAtributos['ModDes']();
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
      ModAtributos['ModCons']();
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
        ModAtributos['ModCons']();
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
      ModAtributos['ModInt']();
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
        ModAtributos['ModInt']();
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
      ModAtributos['ModSab']();
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
        ModAtributos['ModSab']();
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
      ModAtributos['ModCar']();
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
        ModAtributos['ModCar']();
      } else {
        alert("Acabou seus pontos!");
      }
    } else {
      alert("Não pode aumentar mais!");
    }
  }
}

var ClassePericias = {
  Acrobacia: function () {
    document.getElementById("Acrobacia").classList.remove("PericiaDesativada");
    document.getElementById("Acrobacia").classList.add("PericiaAtivada");
    document.getElementById("Acrobacia").disabled = (false);
  },
  Arcanismo: function () {
    document.getElementById("Arcanismo").classList.remove("PericiaDesativada");
    document.getElementById("Arcanismo").classList.add("PericiaAtivada");
    document.getElementById("Arcanismo").disabled = (false);
  },
  Atletismo: function () {
    document.getElementById("Atletismo").classList.remove("PericiaDesativada");
    document.getElementById("Atletismo").classList.add("PericiaAtivada");
    document.getElementById("Atletismo").disabled = (false);
  },
  Atuaçao: function () {
    document.getElementById("Atuaçao").classList.remove("PericiaDesativada");
    document.getElementById("Atuaçao").classList.add("PericiaAtivada");
    document.getElementById("Atuaçao").disabled = (false);
  },
  Blefar: function () {
    document.getElementById("Blefar").classList.remove("PericiaDesativada");
    document.getElementById("Blefar").classList.add("PericiaAtivada");
    document.getElementById("Blefar").disabled = (false);
  },
  Furtividade: function () {
    document.getElementById("Furtividade").classList.remove("PericiaDesativada");
    document.getElementById("Furtividade").classList.add("PericiaAtivada");
    document.getElementById("Furtividade").disabled = (false);
  },
  Historia: function () {
    document.getElementById("Historia").classList.remove("PericiaDesativada");
    document.getElementById("Historia").classList.add("PericiaAtivada");
    document.getElementById("Historia").disabled = (false);
  },
  Intimidaçao: function () {
    document.getElementById("Intimidaçao").classList.remove("PericiaDesativada");
    document.getElementById("Intimidaçao").classList.add("PericiaAtivada");
    document.getElementById("Intimidaçao").disabled = (false);
  },
  Intuiçao: function () {
    document.getElementById("Intuiçao").classList.remove("PericiaDesativada");
    document.getElementById("Intuiçao").classList.add("PericiaAtivada");
    document.getElementById("Intuiçao").disabled = (false);
  },
  Investigaçao: function () {
    document.getElementById("Investigaçao").classList.remove("PericiaDesativada");
    document.getElementById("Investigaçao").classList.add("PericiaAtivada");
    document.getElementById("Investigaçao").disabled = (false);
  },
  LidarAnimais: function () {
    document.getElementById("LidarAnimais").classList.remove("PericiaDesativada");
    document.getElementById("LidarAnimais").classList.add("PericiaAtivada");
    document.getElementById("LidarAnimais").disabled = (false);
  },
  Medicina: function () {
    document.getElementById("Medicina").classList.remove("PericiaDesativada");
    document.getElementById("Medicina").classList.add("PericiaAtivada");
    document.getElementById("Medicina").disabled = (false);
  },
  Natureza: function () {
    document.getElementById("Natureza").classList.remove("PericiaDesativada");
    document.getElementById("Natureza").classList.add("PericiaAtivada");
    document.getElementById("Natureza").disabled = (false);
  },
  Persuasao: function () {
    document.getElementById("Persuasao").classList.remove("PericiaDesativada");
    document.getElementById("Persuasao").classList.add("PericiaAtivada");
    document.getElementById("Persuasao").disabled = (false);
  },
  Percepçao: function () {
    document.getElementById("Percepçao").classList.remove("PericiaDesativada");
    document.getElementById("Percepçao").classList.add("PericiaAtivada");
    document.getElementById("Percepçao").disabled = (false);
  },
  Prestidigitaçao: function () {
    document.getElementById("Prestidigitaçao").classList.remove("PericiaDesativada");
    document.getElementById("Prestidigitaçao").classList.add("PericiaAtivada");
    document.getElementById("Prestidigitaçao").disabled = (false);
  },
  Religiao: function () {
    document.getElementById("Religiao").classList.remove("PericiaDesativada");
    document.getElementById("Religiao").classList.add("PericiaAtivada");
    document.getElementById("Religiao").disabled = (false);
  },
  Sobrevivencia: function () {
    document.getElementById("Sobrevivencia").classList.remove("PericiaDesativada");
    document.getElementById("Sobrevivencia").classList.add("PericiaAtivada");
    document.getElementById("Sobrevivencia").disabled = (false);
  }
}

var ModAtributos = {
  ModFor: function () {
    VarX = Força/2;
    VarY = Math.floor(VarX);
    VarZ = VarY-5;
    document.getElementById("ModFor").innerHTML = ("ModForça: " + VarZ);
    if (document.getElementById("ResFor").checked == true) {
      document.getElementById("ResForNum").innerHTML = ((VarZ+ProfBonus) + " Força");
    } else {
      document.getElementById("ResForNum").innerHTML = (VarZ + " Força");
    }
    if (document.getElementById("Atletismo").checked == true) {
      document.getElementById('AtletismoNum').innerHTML = ((VarZ + ProfBonus) + " Atletismo <i>(For)</i>");
    } else {
      document.getElementById('AtletismoNum').innerHTML = (VarZ + " Atletismo <i>(For)</i>");
    }
  },
  ModDes: function () {
    VarX = Destreza/2;
    VarY = Math.floor(VarX);
    VarZ = VarY-5;
    document.getElementById("ModDes").innerHTML = ("ModDestreza: " + VarZ);
    if (document.getElementById("ResDes").checked == true) {
      document.getElementById("ResDesNum").innerHTML = ((VarZ+ProfBonus) + " Destreza");
    } else {
      document.getElementById("ResDesNum").innerHTML = (VarZ + " Destreza");
    }
    if (document.getElementById("Acrobacia").checked == true) {
      document.getElementById('AcrobaciaNum').innerHTML = ((VarZ + ProfBonus) + " Acrobacia <i>(Des)</i>");
    } else {
      document.getElementById('AcrobaciaNum').innerHTML = (VarZ + " Acrobacia <i>(Des)</i>");
    }
    if (document.getElementById("Furtividade").checked == true) {
      document.getElementById('FurtividadeNum').innerHTML = ((VarZ + ProfBonus) + " Furtividade <i>(Des)</i>");
    } else {
      document.getElementById('FurtividadeNum').innerHTML = (VarZ + " Furtividade <i>(Des)</i>");
    }
    if (document.getElementById("Prestidigitaçao").checked == true) {
      document.getElementById('PrestidigitaçaoNum').innerHTML = ((VarZ + ProfBonus) + " Prestidigitação <i>(Des)</i>");
    } else {
      document.getElementById('PrestidigitaçaoNum').innerHTML = (VarZ + " Prestidigitação <i>(Des)</i>");
    }
  },
  ModCons: function () {
    VarX = Constituiçao/2;
    VarY = Math.floor(VarX);
    VarZ = VarY-5;
    document.getElementById("ModCons").innerHTML = ("ModConstituição: " + VarZ);
    if (document.getElementById("ResCons").checked == true) {
      document.getElementById("ResConsNum").innerHTML = ((VarZ+ProfBonus) + " Constituição");
    } else {
      document.getElementById("ResConsNum").innerHTML = (VarZ + " Constituição");
    }
  },
  ModInt: function () {
    VarX = Inteligencia/2;
    VarY = Math.floor(VarX);
    VarZ = VarY-5;
    document.getElementById("ModInt").innerHTML = ("ModInteligência: " + VarZ);
    if (document.getElementById("ResInt").checked == true) {
      document.getElementById("ResIntNum").innerHTML = ((VarZ+ProfBonus) + " Inteligência");
    } else {
      document.getElementById("ResIntNum").innerHTML = (VarZ + " Inteligência");
    }
    if (document.getElementById("Arcanismo").checked == true) {
      document.getElementById('ArcanismoNum').innerHTML = ((VarZ + ProfBonus) + " Arcanismo <i>(Int)</i>");
    } else {
      document.getElementById('ArcanismoNum').innerHTML = (VarZ + " Arcanismo <i>(Int)</i>");
    }
    if (document.getElementById("Historia").checked == true) {
      document.getElementById('HistoriaNum').innerHTML = ((VarZ + ProfBonus) + " História <i>(Int)</i>");
    } else {
      document.getElementById('HistoriaNum').innerHTML = (VarZ + " História <i>(Int)</i>");
    }
    if (document.getElementById("Investigaçao").checked == true) {
      document.getElementById('InvestigaçaoNum').innerHTML = ((VarZ + ProfBonus) + " Investigação <i>(Int)</i>");
    } else {
      document.getElementById('InvestigaçaoNum').innerHTML = (VarZ + " Investigação <i>(Int)</i>");
    }
    if (document.getElementById("Natureza").checked == true) {
      document.getElementById('NaturezaNum').innerHTML = ((VarZ + ProfBonus) + " Natureza <i>(Int)</i>");
    } else {
      document.getElementById('NaturezaNum').innerHTML = (VarZ + " Natureza <i>(Int)</i>");
    }
    if (document.getElementById("Religiao").checked == true) {
      document.getElementById('ReligiaoNum').innerHTML = ((VarZ + ProfBonus) + " Religião <i>(Int)</i>");
    } else {
      document.getElementById('ReligiaoNum').innerHTML = (VarZ + " Religião <i>(Int)</i>");
    }
  },
  ModSab: function () {
    VarX = Sabedoria/2;
    VarY = Math.floor(VarX);
    VarZ = VarY-5;
    document.getElementById("ModSab").innerHTML = ("ModSabedoria: " + VarZ);
    if (document.getElementById("ResSab").checked == true) {
      document.getElementById("ResSabNum").innerHTML = ((VarZ+ProfBonus) + " Sabedoria");
    } else {
      document.getElementById("ResSabNum").innerHTML = (VarZ + " Sabedoria");
    }
    if (document.getElementById("Intuiçao").checked == true) {
      document.getElementById("IntuiçaoNum").innerHTML = ((VarZ + ProfBonus) + " Intuição <i>(Sab)</i>");
    } else {
      document.getElementById("IntuiçaoNum").innerHTML = (VarZ + " Intuição <i>(Sab)</i>");
    }
    if (document.getElementById("LidarAnimais").checked == true) {
      document.getElementById("LidarAnimaisNum").innerHTML = ((VarZ + ProfBonus) + " Lidar_Com_Animais <i>(Sab)</i>");
    } else {
      document.getElementById("LidarAnimaisNum").innerHTML = (VarZ + " Lidar_Com_Animais <i>(Sab)</i>");
    }
    if (document.getElementById("Medicina").checked == true) {
      document.getElementById("MedicinaNum").innerHTML = ((VarZ + ProfBonus) + " Medicina <i>(Sab)</i>");
    } else {
      document.getElementById("MedicinaNum").innerHTML = (VarZ + " Medicina <i>(Sab)</i>");
    }
    if (document.getElementById("Percepçao").checked == true) {
      document.getElementById("PercepçaoNum").innerHTML = ((VarZ + ProfBonus) + " Percepção <i>(Sab)</i>");
    } else {
      document.getElementById("PercepçaoNum").innerHTML = (VarZ + " Percepção <i>(Sab)</i>");
    }
    if (document.getElementById("Sobrevivencia").checked == true) {
      document.getElementById("SobrevivenciaNum").innerHTML = ((VarZ + ProfBonus) + " Sobrevivência <i>(Sab)</i>");
    } else {
      document.getElementById("SobrevivenciaNum").innerHTML = (VarZ + " Sobrevivência <i>(Sab)</i>");
    }
  },
  ModCar: function () {
    VarX = Carisma/2;
    VarY = Math.floor(VarX);
    VarZ = VarY-5;
    document.getElementById("ModCar").innerHTML = ("ModCarisma: " + VarZ);
    if (document.getElementById("ResCar").checked == true) {
      document.getElementById("ResCarNum").innerHTML = ((VarZ+ProfBonus) + " Carisma");
    } else {
      document.getElementById("ResCarNum").innerHTML = (VarZ + " Carisma");
    }
    if (document.getElementById("Atuaçao").checked == true) {
      document.getElementById('AtuaçaoNum').innerHTML = ((VarZ + ProfBonus) + " Atuação <i>(Car)</i>");
    } else {
      document.getElementById('AtuaçaoNum').innerHTML = (VarZ + " Atuação <i>(Car)</i>");
    }
    if (document.getElementById("Blefar").checked == true) {
      document.getElementById('BlefarNum').innerHTML = ((VarZ + ProfBonus) + " Blefar <i>(Car)</i>");
    } else {
      document.getElementById('BlefarNum').innerHTML = (VarZ + " Blefar <i>(Car)</i>");
    }
    if (document.getElementById("Intimidaçao").checked == true) {
      document.getElementById('IntimidaçaoNum').innerHTML = ((VarZ + ProfBonus) + " Intimidação <i>(Car)</i>");
    } else {
      document.getElementById('IntimidaçaoNum').innerHTML = (VarZ + " Intimidação <i>(Car)</i>");
    }
    if (document.getElementById("Persuasao").checked == true) {
      document.getElementById('PersuasaoNum').innerHTML = ((VarZ + ProfBonus) + " Persuasão <i>(Car)</i>");
    } else {
      document.getElementById('PersuasaoNum').innerHTML = (VarZ + " Persuasão <i>(Car)</i>");
    }
  }
}

function DistribuirPontosAtributos() {
  AtributoBotaoClick = document.querySelectorAll("button[class='BotaoAtributo']:hover");
  AtributosSelecao[(AtributoBotaoClick[0].id)]();
}

function DistribuirPericias() {
  PericiasAtivadasChecked = document.querySelectorAll("input[class='PericiaAtivada']:checked")
  PericiasAtivadasUnchecked = document.querySelectorAll("input[class='PericiaAtivada']:not(:checked)")
  document.getElementById("PontosLivresPericia").innerHTML = ("Pontos Livres: "+(PericiasLimite-(PericiasAtivadasChecked.length)))
  if (PericiasAtivadasChecked.length == PericiasLimite) {
    for (var i = 0; i < PericiasAtivadasUnchecked.length; i++) {
      PericiasAtivadasUnchecked[i].disabled = (true);
    }
  } else {
    for (var i = 0; i < PericiasAtivadasUnchecked.length; i++) {
      PericiasAtivadasUnchecked[i].disabled = (false);
    }
  }
}

//Parte Principal

function RaçaMudanca() {
  var EscolhaRaca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  var EscolhaClasse = document.getElementById("Classe").options[Classe.selectedIndex].value;
  //Apagar
  ApagarAtributos();
  ApagarProficiencias();
  ApagarCaracteristicas();
  ApagarAbasEspeciais();
  ApagarPericia();
  ApagarIdioma();

  //Mudanças
  Classes[EscolhaClasse]();
  Raca[EscolhaRaca]();

  //Prints
  PrintAtributos();
  PrintProficiencias();
  PrintCaracteristicas();
  PrintIdioma();
  PrintModAtributo();
}

function ClasseMudanca() {
  var EscolhaClasse = document.getElementById("Classe").options[Classe.selectedIndex].value;
  var EscolhaRaca = document.getElementById("Raça").options[Raça.selectedIndex].value;
  //Apagar
  ApagarProficiencias();
  ApagarCaracteristicas();
  ApagarAbasEspeciais();
  ApagarIdioma();
  ApagarResistencia();
  ApagarPericia();

  //Mudanças
  Classes[EscolhaClasse]();
  Raca[EscolhaRaca]();

  //Prints
  PrintProficiencias();
  PrintCaracteristicas();
  PrintIdioma();
  PrintModAtributo();
}
