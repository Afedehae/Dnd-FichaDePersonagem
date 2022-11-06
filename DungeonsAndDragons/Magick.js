// Criação das variaves, são importantes para o projeto.

var Força = 8;
var ForçaMin = 8;
var ModForça = (-1);
var AcrescimoForça = 0;
var Destreza = 8;
var DestrezaMin = 8;
var ModDestreza = (-1);
var AcrescimoDestreza = 0;
var Constituiçao = 8;
var ConstituiçaoMin = 8;
var ModConstituiçao = (-1);
var AcrescimoConstituiçao = 0;
var Inteligencia = 8;
var InteligenciaMin = 8;
var ModInteligencia = (-1);
var AcrescimoInteligencia = 0;
var Sabedoria = 8;
var SabedoriaMin = 8;
var ModSabedoria = (-1);
var AcrescimoSabedoria = 0;
var Carisma = 8;
var CarismaMin = 8;
var ModCarisma = (-1);
var AcrescimoCarisma = 0;
var Extra = 24;
var ProfBonus = 2;
var Proficiencias = [];
var Caracteristicas = [];
var Idiomas = [];
var IdiomasExtra = [];
var Equipamentos = [];
var PericiasLimite = 0;
var LimiteIdiomas = 0;

// Vetores para comandos (Raças, Classes)

var Raca = {
  AnaoColina: function() {
    //Atributos
    Constituiçao = 10;
    ConstituiçaoMin = 10;
    AcrescimoConstituiçao = 2;
    Sabedoria = 9;
    SabedoriaMin = 9;
    AcrescimoSabedoria = 1;

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
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Anao']();
  },

  AnaoMontanha: function() {
    //Atributos
    Constituiçao = 10;
    ConstituiçaoMin = 10;
    AcrescimoConstituiçao = 2;
    Força = 10;
    ForçaMin = 10;
    AcrescimoForça = 2;

    //Proficiencias
    Proficiencias.push("Machados_de_Batalha");
    Proficiencias.push("Machadinhas");
    Proficiencias.push("Martelos_Leves");
    Proficiencias.push("Martelos_de_Guerra");
    Proficiencias.push("Armadura_leve");
    Proficiencias.push("Armadura_Média");
    Proficiencias.push("Ferramentas_de_Artesão" + "(A Escolher)");

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Resiliência_Anã");
    Caracteristicas.push("Treinamento_Anão_em_Combate");
    Caracteristicas.push("Proficiência_com_Ferramentas");
    Caracteristicas.push("Especialização_em_Rochas");
    Caracteristicas.push("Treinamento_Anão_com_Armaduras");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Anao']();
  },

  AltoElfo: function() {
    //Atributos
    Destreza = 10;
    DestrezaMin = 10;
    AcrescimoDestreza = 2;
    Inteligencia = 9;
    InteligenciaMin = 9;
    AcrescimoInteligencia = 1;

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
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Elfico']();
  },

  ElfoFloresta: function() {
    //Atributos
    Destreza = 10;
    DestrezaMin = 10;
    AcrescimoDestreza = 2;
    Sabedoria = 9;
    SabedoriaMin = 9;
    AcrescimoSabedoria = 1;

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
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Elfico']();
  },

  ElfoNegro: function() {
    //Atributos
    Destreza = 10;
    DestrezaMin = 10;
    AcrescimoDestreza = 2;
    Carisma = 9;
    CarismaMin = 9;
    AcrescimoCarisma = 1;

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
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Elfico']();
  },

  HalflingPesLeves: function() {
    //Atributos
    Destreza = 10;
    DestrezaMin = 10;
    AcrescimoDestreza = 2;
    Carisma = 9;
    CarismaMin = 9;
    AcrescimoCarisma = 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Sortudo");
    Caracteristicas.push("Bravura");
    Caracteristicas.push("Agilidade_Halfling");
    Caracteristicas.push("Furtividade_Natural");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Halfling']();
  },

  HalflingRobusto: function() {
    //Atributos
    Destreza = 10;
    DestrezaMin = 10;
    AcrescimoDestreza = 2;
    Constituiçao = 9;
    ConstituiçaoMin = 9;
    AcrescimoConstituiçao = 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Sortudo");
    Caracteristicas.push("Bravura");
    Caracteristicas.push("Agilidade_Halfling");
    Caracteristicas.push("Resiliência_dos_Robustos");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Halfling']();
  },

  Humano: function() {
    //Atributos
    Força = 9;
    ForçaMin = 9;
    AcrescimoForça = 1;
    Destreza = 9;
    DestrezaMin = 9;
    AcrescimoDestreza = 1;
    Constituiçao = 9;
    ConstituiçaoMin = 9;
    AcrescimoConstituiçao = 1;
    Inteligencia = 9;
    InteligenciaMin = 9;
    AcrescimoInteligencia = 1;
    Sabedoria = 9;
    SabedoriaMin = 9;
    AcrescimoSabedoria = 1;
    Carisma = 9;
    CarismaMin = 9;
    AcrescimoCarisma = 1;

    //Proficiencias

    //Caracteristicas

    //Idiomas
    LimiteIdiomas = 1;
    IdiomasEscolha['Anao']();
    IdiomasEscolha['Comum']();
    IdiomasEscolha['Elfico']();
    IdiomasEscolha['Gigante']();
    IdiomasEscolha['Gnomico']();
    IdiomasEscolha['Goblin']();
    IdiomasEscolha['Halfling']();
    IdiomasEscolha['Orc']();
    IdiomasEscolha['Abissal']();
    IdiomasEscolha['Celestial']();
    IdiomasEscolha['DialetoSubterraneo']();
    IdiomasEscolha['Draconico']();
    IdiomasEscolha['Infernal']();
    IdiomasEscolha['Primordial']();
    IdiomasEscolha['Silvestre']();
    IdiomasEscolha['Subcomum']();

    //document.getElementById("IdiomaExtra").hidden = (false);
    IdiomasInerentes['Comum']();
  },

  Draconato: function() {
    //Atributos
    Força = 10;
    ForçaMin = 10;
    AcrescimoForça = 2;
    Carisma = 9;
    CarismaMin = 9;
    AcrescimoCarisma = 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Ancestral_Dracônico");
    Caracteristicas.push("Resistência_a_Dano");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Draconico']();
  },

  GnomoFloresta: function() {
    //Atributos
    Inteligencia = 10;
    InteligenciaMin = 10;
    AcrescimoInteligencia = 2;
    Destreza = 9;
    DestrezaMin = 9;
    AcrescimoDestreza = 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Esperteza_Gnômica");
    Caracteristicas.push("Falar_com_Bestas_Pequenas");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Gnomico']();
  },

  GnomoRocha: function() {
    //Atributos
    Inteligencia = 10;
    InteligenciaMin = 10;
    AcrescimoInteligencia = 2;
    Constituiçao = 9;
    ConstituiçaoMin = 9;
    AcrescimoConstituiçao = 1;

    //Proficiencias
    Proficiencias.push("Ferramentas_de_Artesão(Engenhoqueiro)");

    //Caracteristi Sobrevivência (Scas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Esperteza_Gnômica");
    Caracteristicas.push("Conhecimento_de_Artifice");
    Caracteristicas.push("Engenhoqueiro");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Gnomico']();
  },

  MeioElfo: function() {
    //Atributos
    Carisma = 10;
    CarismaMin = 10;
    AcrescimoCarisma = 2;
    Extra = 26;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Ancestral_Feérico");
    Caracteristicas.push("Versatilidade_em_Pericia");

    //Idiomas
    //Idioma Extra
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Elfico']();

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
    AcrescimoForça = 2;
    Constituiçao = 9;
    ConstituiçaoMin = 9;
    AcrescimoConstituiçao = 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Ameaçador");
    Caracteristicas.push("Resistência_Implacável");
    Caracteristicas.push("Ataques_Selvagens");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Orc']();

    //Pericias
    PericiasInerentes['Intimidaçao']();
  },

  Tiefling: function() {
    //Atributos
    Carisma = 10;
    CarismaMin = 10;
    AcrescimoCarisma = 2;
    Inteligencia = 9;
    InteligenciaMin = 9;
    AcrescimoInteligencia = 1;

    //Proficiencias

    //Caracteristicas
    Caracteristicas.push("Visão_no_Escuro");
    Caracteristicas.push("Resistência_Infernal");
    Caracteristicas.push("Legado_Infernal");

    //Idiomas
    IdiomasInerentes['Comum']();
    IdiomasInerentes['Infernal']();
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
    document.getElementById("For").innerHTML = ("Força: " + Força  + "(&uarr;" + AcrescimoForça + ")");
    document.getElementById("Des").innerHTML = ("Destreza: " + Destreza + "(&uarr;" + AcrescimoDestreza + ")");
    document.getElementById("Cons").innerHTML = ("Constituição: " + Constituiçao + "(&uarr;" + AcrescimoConstituiçao + ")");
    document.getElementById("Int").innerHTML = ("Inteligência: " + Inteligencia + "(&uarr;" + AcrescimoInteligencia + ")");
    document.getElementById("Sab").innerHTML = ("Sabedoria: " + Sabedoria + "(&uarr;" + AcrescimoSabedoria + ")");
    document.getElementById("Car").innerHTML = ("Carisma: " + Carisma + "(&uarr;" + AcrescimoCarisma + ")");
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
  if (0 != IdiomasExtra.length) {
    for (var i = 0; i < IdiomasExtra.length; i++) {
      var Printf = IdiomasExtra[i]
      document.getElementById("Lingua").value += (Printf + "\n");
    }
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
    AcrescimoForça = 0;
    Destreza = 8;
    DestrezaMin = 8;
    AcrescimoDestreza = 0;
    Constituiçao = 8;
    ConstituiçaoMin = 8;
    AcrescimoConstituiçao = 0;
    Inteligencia = 8;
    InteligenciaMin = 8;
    AcrescimoInteligencia = 0;
    Sabedoria = 8;
    SabedoriaMin = 8;
    AcrescimoSabedoria = 0;
    Carisma = 8;
    CarismaMin = 8;
    AcrescimoCarisma = 0;
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

function ApagarIdioma() {
  Idiomas = [];
  document.getElementById("Lingua").value = ("");
  LimiteIdiomas = 0;

  var IdiomasAtivados = document.querySelectorAll("input[class='IdiomaAtivado']");
  var IdiomasAtivadosNumbers = IdiomasAtivados.length;
  var IdiomasDesativados = document.querySelectorAll("input[class='IdiomaDesativado']");
  var IdiomasDesativadosNumbers = IdiomasDesativados.length;

  for (var i = 0; i < IdiomasAtivadosNumbers; i++) {
    IdiomasAtivados[i].classList.remove("IdiomaAtivado");
    IdiomasAtivados[i].classList.add("IdiomaDesativado");
    IdiomasAtivados[i].disabled = (true);
    IdiomasAtivados[i].checked = (false);
  };

  for (var i = 0; i < IdiomasDesativadosNumbers; i++) {
    IdiomasDesativados[i].disabled = (true);
    IdiomasDesativados[i].checked = (false);
  };
}

//Atributos,Pericias,Resistencias, Idiomas

var AtributosSelecao = {
  MenosForça: function() {
    if (Força != ForçaMin) {
      Força -= 1;
      AcrescimoForça -= 1;
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
        AcrescimoForça += 1;
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
      AcrescimoDestreza -= 1;
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
        AcrescimoDestreza += 1;
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
      AcrescimoConstituiçao -= 1;
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
        AcrescimoConstituiçao += 1;
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
      AcrescimoInteligencia -= 1;
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
        AcrescimoInteligencia += 1;
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
      AcrescimoSabedoria -= 1;
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
        AcrescimoSabedoria += 1;
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
      AcrescimoCarisma -= 1;
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
        AcrescimoCarisma += 1;
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

var PericiasInerentes = {
  Acrobacia: function () {
    document.getElementById("Acrobacia").checked = (true);
    document.getElementById("Acrobacia").disabled = (true);
    document.getElementById("Acrobacia").classList.remove("PericiaAtivada");
    document.getElementById("Acrobacia").classList.add("PericiaDesativada");
  },
  Arcanismo: function () {
    document.getElementById("Arcanismo").checked = (true);
    document.getElementById("Arcanismo").disabled = (true);
    document.getElementById("Arcanismo").classList.remove("PericiaAtivada");
    document.getElementById("Arcanismo").classList.add("PericiaDesativada");
  },
  Atletismo: function () {
    document.getElementById("Atletismo").checked = (true);
    document.getElementById("Atletismo").disabled = (true);
    document.getElementById("Atletismo").classList.remove("PericiaAtivada");
    document.getElementById("Atletismo").classList.add("PericiaDesativada");
  },
  Atuaçao: function () {
    document.getElementById("Atuacao").checked = (true);
    document.getElementById("Atuacao").disabled = (true);
    document.getElementById("Atuacao").classList.remove("PericiaAtivada");
    document.getElementById("Atuacao").classList.add("PericiaDesativada");
  },
  Blefar: function () {
    document.getElementById("Blefar").checked = (true);
    document.getElementById("Blefar").disabled = (true);
    document.getElementById("Blefar").classList.remove("PericiaAtivada");
    document.getElementById("Blefar").classList.add("PericiaDesativada");
  },
  Furtividade: function () {
    document.getElementById("Furtividade").checked = (true);
    document.getElementById("Furtividade").disabled = (true);
    document.getElementById("Furtividade").classList.remove("PericiaAtivada");
    document.getElementById("Furtividade").classList.add("PericiaDesativada");
  },
  Historia: function () {
    document.getElementById("Historia").checked = (true);
    document.getElementById("Historia").disabled = (true);
    document.getElementById("Historia").classList.remove("PericiaAtivada");
    document.getElementById("Historia").classList.add("PericiaDesativada");
  },
  Intimidaçao: function () {
    document.getElementById("Intimidaçao").checked = (true);
    document.getElementById("Intimidaçao").disabled = (true);
    document.getElementById("Intimidaçao").classList.remove("PericiaAtivada");
    document.getElementById("Intimidaçao").classList.add("PericiaDesativada");
  },
  Intuiçao: function () {
    document.getElementById("Intuiçao").checked = (true);
    document.getElementById("Intuiçao").disabled = (true);
    document.getElementById("Intuiçao").classList.remove("PericiaAtivada");
    document.getElementById("Intuiçao").classList.add("PericiaDesativada");
  },
  Investigaçao: function () {
    document.getElementById("Investigaçao").checked = (true);
    document.getElementById("Investigaçao").disabled = (true);
    document.getElementById("Investigaçao").classList.remove("PericiaAtivada");
    document.getElementById("Investigaçao").classList.add("PericiaDesativada");
  },
  LidarAnimais: function () {
    document.getElementById("LidarAnimais").checked = (true);
    document.getElementById("LidarAnimais").disabled = (true);
    document.getElementById("LidarAnimais").classList.remove("PericiaAtivada");
    document.getElementById("LidarAnimais").classList.add("PericiaDesativada");
  },
  Medicina: function () {
    document.getElementById("Medicina").checked = (true);
    document.getElementById("Medicina").disabled = (true);
    document.getElementById("Medicina").classList.remove("PericiaAtivada");
    document.getElementById("Medicina").classList.add("PericiaDesativada");
  },
  Natureza: function () {
    document.getElementById("Natureza").checked = (true);
    document.getElementById("Natureza").disabled = (true);
    document.getElementById("Natureza").classList.remove("PericiaAtivada");
    document.getElementById("Natureza").classList.add("PericiaDesativada");
  },
  Persuasao: function () {
    document.getElementById("Persuasao").checked = (true);
    document.getElementById("Persuasao").disabled = (true);
    document.getElementById("Persuasao").classList.remove("PericiaAtivada");
    document.getElementById("Persuasao").classList.add("PericiaDesativada");
  },
  Percepçao: function () {
    document.getElementById("Percepçao").checked = (true);
    document.getElementById("Percepçao").disabled = (true);
    document.getElementById("Percepçao").classList.remove("PericiaAtivada");
    document.getElementById("Percepçao").classList.add("PericiaDesativada");
  },
  Prestidigitaçao: function () {
    document.getElementById("Prestidigitaçao").checked = (true);
    document.getElementById("Prestidigitaçao").disabled = (true);
    document.getElementById("Prestidigitaçao").classList.remove("PericiaAtivada");
    document.getElementById("Prestidigitaçao").classList.add("PericiaDesativada");
  },
  Religiao: function () {
    document.getElementById("Religiao").checked = (true);
    document.getElementById("Religiao").disabled = (true);
    document.getElementById("Religiao").classList.remove("PericiaAtivada");
    document.getElementById("Religiao").classList.add("PericiaDesativada");
  },
  Sobrevivencia: function () {
    document.getElementById("Sobrevivencia").checked = (true);
    document.getElementById("Sobrevivencia").disabled = (true);
    document.getElementById("Sobrevivencia").classList.remove("PericiaAtivada");
    document.getElementById("Sobrevivencia").classList.add("PericiaDesativada");
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

var IdiomasEscolha = {
  Anao: function () {
    document.getElementById("Anao").classList.remove("IdiomaDesativado");
    document.getElementById("Anao").classList.add("IdiomaAtivado");
    document.getElementById("Anao").disabled = (false);
  },
  Comum: function () {
    document.getElementById("Comum").classList.remove("IdiomaDesativado");
    document.getElementById("Comum").classList.add("IdiomaAtivado");
    document.getElementById("Comum").disabled = (false);
  },
  Elfico: function () {
    document.getElementById("Elfico").classList.remove("IdiomaDesativado");
    document.getElementById("Elfico").classList.add("IdiomaAtivado");
    document.getElementById("Elfico").disabled = (false);
  },
  Gigante: function () {
    document.getElementById("Gigante").classList.remove("IdiomaDesativado");
    document.getElementById("Gigante").classList.add("IdiomaAtivado");
    document.getElementById("Gigante").disabled = (false);
  },
  Gnomico: function () {
    document.getElementById("Gnomico").classList.remove("IdiomaDesativado");
    document.getElementById("Gnomico").classList.add("IdiomaAtivado");
    document.getElementById("Gnomico").disabled = (false);
  },
  Goblin: function () {
    document.getElementById("Goblin").classList.remove("IdiomaDesativado");
    document.getElementById("Goblin").classList.add("IdiomaAtivado");
    document.getElementById("Goblin").disabled = (false);
  },
  Halfling: function () {
    document.getElementById("Halfling").classList.remove("IdiomaDesativado");
    document.getElementById("Halfling").classList.add("IdiomaAtivado");
    document.getElementById("Halfling").disabled = (false);
  },
  Orc: function () {
    document.getElementById("Orc").classList.remove("IdiomaDesativado");
    document.getElementById("Orc").classList.add("IdiomaAtivado");
    document.getElementById("Orc").disabled = (false);
  },
  Abissal: function () {
    document.getElementById("Abissal").classList.remove("IdiomaDesativado");
    document.getElementById("Abissal").classList.add("IdiomaAtivado");
    document.getElementById("Abissal").disabled = (false);
  },
  Celestial: function () {
    document.getElementById("Celestial").classList.remove("IdiomaDesativado");
    document.getElementById("Celestial").classList.add("IdiomaAtivado");
    document.getElementById("Celestial").disabled = (false);
  },
  DialetoSubterraneo: function () {
    document.getElementById("DialetoSubterraneo").classList.remove("IdiomaDesativado");
    document.getElementById("DialetoSubterraneo").classList.add("IdiomaAtivado");
    document.getElementById("DialetoSubterraneo").disabled = (false);
  },
  Draconico: function () {
    document.getElementById("Draconico").classList.remove("IdiomaDesativado");
    document.getElementById("Draconico").classList.add("IdiomaAtivado");
    document.getElementById("Draconico").disabled = (false);
  },
  Infernal: function () {
    document.getElementById("Infernal").classList.remove("IdiomaDesativado");
    document.getElementById("Infernal").classList.add("IdiomaAtivado");
    document.getElementById("Infernal").disabled = (false);
  },
  Primordial: function () {
    document.getElementById("Primordial").classList.remove("IdiomaDesativado");
    document.getElementById("Primordial").classList.add("IdiomaAtivado");
    document.getElementById("Primordial").disabled = (false);
  },
  Silvestre: function () {
    document.getElementById("Silvestre").classList.remove("IdiomaDesativado");
    document.getElementById("Silvestre").classList.add("IdiomaAtivado");
    document.getElementById("Silvestre").disabled = (false);
  },
  Subcomum: function () {
    document.getElementById("Subcomum").classList.remove("IdiomaDesativado");
    document.getElementById("Subcomum").classList.add("IdiomaAtivado");
    document.getElementById("Subcomum").disabled = (false);
  }
}

var IdiomasInerentes = {
  Anao: function () {
    document.getElementById("Anao").checked = (true);
    document.getElementById("Anao").disabled = (true);
    document.getElementById("Anao").classList.remove("IdiomaAtivado");
    document.getElementById("Anao").classList.add("IdiomaDesativado");
    Idiomas.push("Anão");
  },

  Comum: function () {
    document.getElementById("Comum").checked = (true);
    document.getElementById("Comum").disabled = (true);
    document.getElementById("Comum").classList.remove("IdiomaAtivado");
    document.getElementById("Comum").classList.add("IdiomaDesativado");
    Idiomas.push("Comum");
  },

  Elfico: function () {
    document.getElementById("Elfico").checked = (true);
    document.getElementById("Elfico").disabled = (true);
    document.getElementById("Elfico").classList.remove("IdiomaAtivado");
    document.getElementById("Elfico").classList.add("IdiomaDesativado");
    Idiomas.push("Élfico");
  },

  Gigante: function () {
    document.getElementById("Gigante").checked = (true);
    document.getElementById("Gigante").disabled = (true);
    document.getElementById("Gigante").classList.remove("IdiomaAtivado");
    document.getElementById("Gigante").classList.add("IdiomaDesativado");
    Idiomas.push("Gigante");
  },

  Gnomico: function () {
    document.getElementById("Gnomico").checked = (true);
    document.getElementById("Gnomico").disabled = (true);
    document.getElementById("Gnomico").classList.remove("IdiomaAtivado");
    document.getElementById("Gnomico").classList.add("IdiomaDesativado");
    Idiomas.push("Gnômico");
  },

  Goblin: function () {
    document.getElementById("Goblin").checked = (true);
    document.getElementById("Goblin").disabled = (true);
    document.getElementById("Goblin").classList.remove("IdiomaAtivado");
    document.getElementById("Goblin").classList.add("IdiomaDesativado");
    Idiomas.push("Goblin");
  },

  Halfling: function () {
    document.getElementById("Halfling").checked = (true);
    document.getElementById("Halfling").disabled = (true);
    document.getElementById("Halfling").classList.remove("IdiomaAtivado");
    document.getElementById("Halfling").classList.add("IdiomaDesativado");
    Idiomas.push("Halfling");
  },

  Orc: function () {
    document.getElementById("Orc").checked = (true);
    document.getElementById("Orc").disabled = (true);
    document.getElementById("Orc").classList.remove("IdiomaAtivado");
    document.getElementById("Orc").classList.add("IdiomaDesativado");
    Idiomas.push("Orc");
  },

  Abissal: function () {
    document.getElementById("Abissal").checked = (true);
    document.getElementById("Abissal").disabled = (true);
    document.getElementById("Abissal").classList.remove("IdiomaAtivado");
    document.getElementById("Abissal").classList.add("IdiomaDesativado");
    Idiomas.push("Abissal");
  },

  Celestial: function () {
    document.getElementById("Celestial").checked = (true);
    document.getElementById("Celestial").disabled = (true);
    document.getElementById("Celestial").classList.remove("IdiomaAtivado");
    document.getElementById("Celestial").classList.add("IdiomaDesativado");
    Idiomas.push("Celestial");
  },

  DialetoSubterraneo: function () {
    document.getElementById("DialetoSubterraneo").checked = (true);
    document.getElementById("DialetoSubterraneo").disabled = (true);
    document.getElementById("DialetoSubterraneo").classList.remove("IdiomaAtivado");
    document.getElementById("DialetoSubterraneo").classList.add("IdiomaDesativado");
    Idiomas.push("Dialeto Subterrâneo");
  },

  Draconico: function () {
    document.getElementById("Draconico").checked = (true);
    document.getElementById("Draconico").disabled = (true);
    document.getElementById("Draconico").classList.remove("IdiomaAtivado");
    document.getElementById("Draconico").classList.add("IdiomaDesativado");
    Idiomas.push("Dracônico");
  },

  Infernal: function () {
    document.getElementById("Infernal").checked = (true);
    document.getElementById("Infernal").disabled = (true);
    document.getElementById("Infernal").classList.remove("IdiomaAtivado");
    document.getElementById("Infernal").classList.add("IdiomaDesativado");
    Idiomas.push("Infernal");
  },

  Primordial: function () {
    document.getElementById("Primordial").checked = (true);
    document.getElementById("Primordial").disabled = (true);
    document.getElementById("Primordial").classList.remove("IdiomaAtivado");
    document.getElementById("Primordial").classList.add("IdiomaDesativado");
    Idiomas.push("Primordial");
  },

  Silvestre: function () {
    document.getElementById("Silvestre").checked = (true);
    document.getElementById("Silvestre").disabled = (true);
    document.getElementById("Silvestre").classList.remove("IdiomaAtivado");
    document.getElementById("Silvestre").classList.add("IdiomaDesativado");
    Idiomas.push("Silvestre");
  },

  Subcomum: function () {
    document.getElementById("Subcomum").checked = (true);
    document.getElementById("Subcomum").disabled = (true);
    document.getElementById("Subcomum").classList.remove("IdiomaAtivado");
    document.getElementById("Subcomum").classList.add("IdiomaDesativado");
    Idiomas.push("Subcomum");
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
  PrintModAtributo();
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

function DistribuirIdiomas() {
  IdiomasAtivadosChecked = document.querySelectorAll("input[class='IdiomaAtivado']:checked");
  IdiomasAtivadosUnchecked = document.querySelectorAll("input[class='IdiomaAtivado']:not(:checked)");
  if (IdiomasAtivadosChecked.length == LimiteIdiomas) {
    for (var i = 0; i < IdiomasAtivadosUnchecked.length; i++) {
      IdiomasAtivadosUnchecked[i].disabled = (true);
    }
  } else {
    for (var i = 0; i < IdiomasAtivadosUnchecked.length; i++) {
      IdiomasAtivadosUnchecked[i].disabled = (false);
    }
  }
  IdiomasExtra = [];
  document.getElementById("Lingua").value = ("");
  if (IdiomasAtivadosChecked.length != 0) {
    IdiomasExtra.push(IdiomasAtivadosChecked[0].id);
  }
  PrintIdioma();
}


//Parte Principal

function RaçaMudanca() {
  var EscolhaRaca = document.querySelectorAll("input[name='Raca']:checked");
  var EscolhaClasse = document.querySelectorAll("input[name='Classe']:checked");
  //Apagar
  ApagarAtributos();
  ApagarProficiencias();
  ApagarCaracteristicas();
  ApagarPericia();
  ApagarIdioma();

  //Mudanças
  Classes[EscolhaClasse[0].id]();
  Raca[EscolhaRaca[0].id]();

  //Prints
  PrintAtributos();
  PrintProficiencias();
  PrintCaracteristicas();
  PrintIdioma();
  PrintModAtributo();
}

function ClasseMudanca() {
  var EscolhaRaca = document.querySelectorAll("input[name='Raca']:checked");
  var EscolhaClasse = document.querySelectorAll("input[name='Classe']:checked");
  //Apagar
  ApagarProficiencias();
  ApagarCaracteristicas();
  ApagarIdioma();
  ApagarResistencia();
  ApagarPericia();

  //Mudanças
  Classes[EscolhaClasse[0].id]();
  Raca[EscolhaRaca[0].id]();

  //Prints
  PrintProficiencias();
  PrintCaracteristicas();
  PrintIdioma();
  PrintModAtributo();
}

//Design

function MostrarRaça() {
  document.getElementById("MenuDeClasse").hidden = (true);
  document.getElementById("MenuDeAntecedentes").hidden = (true);
  document.getElementById("MenuIdiomas").hidden = (true);
  document.getElementById("MenuDeRaca").hidden = (false);
}

function MostrarClasse() {
  document.getElementById("MenuDeRaca").hidden = (true);
  document.getElementById("MenuDeAntecedentes").hidden = (true);
  document.getElementById("MenuIdiomas").hidden = (true);
  document.getElementById("MenuDeClasse").hidden = (false);
}

function MostrarAntecedente() {
  document.getElementById("MenuDeRaca").hidden = (true);
  document.getElementById("MenuDeClasse").hidden = (true);
  document.getElementById("MenuIdiomas").hidden = (true);
  document.getElementById("MenuDeAntecedentes").hidden = (false);
}

function MostrarIdiomas() {
  document.getElementById("MenuDeRaca").hidden = (true);
  document.getElementById("MenuDeClasse").hidden = (true);
  document.getElementById("MenuDeAntecedentes").hidden = (true);
  document.getElementById("MenuIdiomas").hidden = (false);
}
