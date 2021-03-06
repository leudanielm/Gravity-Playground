//Vector data from NASA JPL's Horizon API
//Units used are years for time, astronomical units for distance and solar masses for mass

const scenarios = {
  "The Inner Solar System": {
    name: "The Inner Solar System",
    image: "scenarios/innersolarsystem.jpg",
    info: "Simulation of the Sun, inner planets, asteroids, short-period comets and mighty Jupiter. Tip: try adding a brown dwarf to the asteroid belt!", 
    g: 39.5,
    law: 1.5,
    dt: 0.0005,
    scale: 40,
    distMax: 27,
    distMin: -27,
    distStep: 0.0045,
    velMax: 0.15,
    velMin: -0.15,
    velStep: 0.000049999999999999996,
    masses: [{
      name: "Sun",
      type: "star",
      color: "yellow",
      m: 1,
      x: -3.275742722765288E-03,
      y: -1.294009525973403E-03,
      z: -1.740371259237203E-07,
      vx: 4.199782232096930E-06 * 365.25,
      vy: -4.711557399097310E-06 * 365.25,
      vz: -8.274227811407398E-08 * 365.25,
      radius: 10
    }, {
      name: "Mercury",
      m: 1.652e-7,
      color: "beige",
      x: -3.863494714883755E-01,
      y: 1.162476541246314E-02,
      z: 3.620406996784811E-02,
      vx: -6.795262845798420E-03 * 365.25,
      vy: -2.691320934721866E-02 * 365.25,
      vz: -1.574773933035284E-03 * 365.25,
      radius: 1.5
    }, {
      name: "Venus",
      m: 0.000002447,
      color: "beige",
      x: 7.116078293356433E-01,
      y: -1.270451665512418E-01,
      z: -4.298134919061446E-02,
      vx: 3.410430235501218E-03 * 365.25,
      vy: 1.982482347506726E-02 * 365.25,
      vz: 7.501247848341107E-05 * 365.25,
      radius: 2.5
    }, {
      name: "Earth",
      m: 0.000003003,
      color: "grey",
      x: -3.138210218063926E-02,
      y: 9.819517659399580E-01,
      z: -2.901746397172942E-05,
      vx: -1.748061320030476E-02 * 365.25,
      vy: -5.595484629942925E-04 * 365.25,
      vz: -7.211993615836117E-07 * 365.25,
      radius: 2.5
    }, {
      name: "Mars",
      m: 3.213e-7,
      color: "grey",
      x: -1.116729335519629E+00,
      y: 1.217509462651037E+00,
      z: 5.287731306632439E-02,
      vx: -9.798040804969087E-03 * 365.25,
      vy: -8.251366339921072E-03 * 365.25,
      vz: 6.780827397745568E-05 * 365.25,
      radius: 2.5
    }, {
      name: "Ceres",
      m: 4.504e-10,
      color: "grey",
      x: 2.818544104386714E+00,
      y: 6.011264561456042E-01,
      z: -5.011120676815859E-01,
      vx: -2.406366372989141E-03 * 365.25,
      vy: 9.419517227231812E-03 * 365.25,
      vz: 7.389465043764037E-04 * 365.25,
      radius: 2
    }, {
      name: "Vesta",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 2.335269709197501E+00,
      y: -3.110628663797054E-01,
      z: -2.748182352479512E-01,
      vx: 2.366353656193624E-03 * 365.25,
      vy: 1.085505784560236E-02 * 365.25,
      vz: -6.136560026801635E-04 * 365.25,
      radius: 1
    }, {
      name: "Pallas",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 2.641375026241751E+00,
      y: -1.809058914883251E+00,
      z: 1.029006185243513E+00,
      vx: 4.507987524520841E-03 * 365.25,
      vy: 5.562325297451178E-03 * 365.25,
      vz: -4.222724509612887E-03 * 365.25,
      radius: 1
    }, {
      name: "Palma",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 1.522523935499147E+00,
      y: 1.611230260957908E+00,
      z: 9.630351899142495E-01,
      vx: -1.002650881446959E-02 * 365.25,
      vy: 7.063273201443612E-03 * 365.25,
      vz: 2.444135909764614E-04 * 365.25,
      radius: 1
    }, {
      name: "Psyche",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -2.774807544786342E+00,
      y: 1.530842983493214E+00,
      z: 2.292173121444284E-03,
      vx: -5.320138120791329E-03 * 365.25,
      vy: -7.553579614221151E-03 * 365.25,
      vz: 4.977751802558036E-04 * 365.25,
      radius: 1
    }, {
      name: "Fortuna",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -1.072718617373066E+00,
      y: -2.526267800718620E+00,
      z: 4.407090991818013E-02,
      vx: 9.296236540141946E-03 * 365.25,
      vy: -2.880893010096105E-03 * 365.25,
      vz: 1.998042227061304E-04 * 365.25,
      radius: 1
    }, {
      name: "Interamnia",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 2.259163689598827E+00,
      y: -1.347171516725470E+00,
      z: 6.177283026034428E-01,
      vx: 4.193081504442795E-03 * 365.25,
      vy: 1.005452752299008E-02 * 365.25,
      vz: 1.846010915942590E-03 * 365.25,
      radius: 1
    }, {
      name: "Thisbe",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -2.595122264290846E+00,
      y: 1.882014219750193E+00,
      z: -2.148684956505997E-01,
      vx: -4.850843765625622E-03 * 365.25,
      vy: -7.320935064281777E-03 * 365.25,
      vz: -5.180862435738225E-04 * 365.25,
      radius: 1
    }, {
      name: "Eunomia",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 6.048014234001470E-01,
      y: 2.134171735489524E+00,
      z: 2.909172549976145E-01,
      vx: -1.120199560176522E-02 * 365.25,
      vy: 4.866773035788313E-03 * 365.25,
      vz: -1.741334561110075E-03 * 365.25,
      radius: 1
    }, {
      name: "Doris",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 2.852252215585072E+00,
      y: 8.791424805295340E-01,
      z: -7.954359775394572E-02,
      vx: -3.608181534639075E-03 * 365.25,
      vy: 9.409895829088711E-03 * 365.25,
      vz: -1.106611956606076E-03 * 365.25,
      radius: 1
    }, {
      name: "Herculina",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 2.605930935279552E+00,
      y: -1.647669650349872E+00,
      z: -5.823694301111420E-01,
      vx: 5.270110242681403E-03 * 365.25,
      vy: 7.036435205436930E-03 * 365.25,
      vz: -2.092076528978551E-03 * 365.25,
      radius: 1
    }, {
      name: "Iris",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -2.665281881724039E+00,
      y: -1.027296737063025E+00,
      z: -2.353871932664804E-01,
      vx: 2.216981828728913E-03 * 365.25,
      vy: -8.820588527430695E-03 * 365.25,
      vz: 3.636529809179307E-04 * 365.25,
      radius: 1
    }, {
      name: "Davida",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 1.623514847928207E+00,
      y: -3.248756938553920E+00,
      z: -1.618198474934109E-01,
      vx: 6.648382686404153E-03 * 365.25,
      vy: 4.499066818495604E-03 * 365.25,
      vz: -2.198823105077569E-03 * 365.25,
      radius: 1
    }, {
      name: "Europa",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -1.842453403273505E+00,
      y: -2.647073240285926E+00,
      z: 4.057433392538244E-01,
      vx: 7.082316163649303E-03 * 365.25,
      vy: -6.049634567839820E-03 * 365.25,
      vz: -2.283338292279948E-04 * 365.25,
      radius: 1
    }, {
      name: "Juno",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -2.551151704657425E+00,
      y: -2.007249124205245E+00,
      z: 5.581391675788510E-01,
      vx: 4.515596974313035E-03 * 365.25,
      vy: -6.849490810763584E-03 * 365.25,
      vz: 1.371000051634744E-03 * 365.25,
      radius: 1
    }, {
      name: "Cybele",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -5.454318286424623E-01,
      y: 3.728237217019927E+00,
      z: -1.976456948964355E-01,
      vx: -8.241594585220018E-03 * 365.25,
      vy: -1.540226113241689E-03 * 365.25,
      vz: 2.986840575078883E-04 * 365.25,
      radius: 1
    }, {
      name: "Sylvia",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: 2.791451360570806E+00,
      y: 1.698446017739455E+00,
      z: -4.191537799873290E-01,
      vx: -4.333003871032695E-03 * 365.25,
      vy: 8.621599100110395E-03 * 365.25,
      vz: 1.275561956014285E-03 * 365.25,
      radius: 1
    }, {
      name: "Hektor",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -2.246291898044689E+00,
      y: 4.489596807086940E+00,
      z: 1.191152607253963E+00,
      vx: -6.776990291860237E-03 * 365.25,
      vy: -3.106494590156754E-03 * 365.25,
      vz: -1.631453412593465E-03 * 365.25,
      radius: 1
    }, {
      name: "Bamberga",
      type: 'asteroid',
      m: 0,
      color: "grey",
      x: -3.096719214647424E+00,
      y: -1.586132814391714E+00,
      z: -5.855751637952110E-01,
      vx: 4.418018136216500E-03 * 365.25,
      vy: -6.163508579752093E-03 * 365.25,
      vz: -5.653146446342563E-04 * 365.25,
      radius: 1
    }, {
      name: "Jupiter",
      m: 9.543E-4,
      color: "grey",
      x: 3.792621210986713E+00,
      y: 3.207470594228434E+00,
      z: -9.826992732586218E-02,
      vx: -4.963309641352442E-03  * 365.25,
      vy: 6.122896499755928E-03 * 365.25,
      vz: 8.562717235368848E-05 * 365.25,
      radius: 4
    }]
  },
  "The Earth and Moon System": {
    name: "The Earth and Moon System",
    image: "scenarios/earth.jpg",
    info: "Gaze upon Earth from the Moon, much like Neil Armstrong did all those years ago.",
    g: 39.5,
    law: 1.5,
    dt: 5E-5,
    scale: 30E3,
    distMax: .00713911058,
    distMin: -.00713911058,
    distStep: 0.0000023797035266666667,
    velMax: 0.5,
    velMin: -0.5,
    velStep: 0.000005,
    masses: [{
      name: "Earth",
      color: "blue",
      m: 3.003E-6,
      x: 1.043591486380968E-5,
      y: 3.059138136390815E-5,
      z: -2.826521814957728E-6,
      vx: -.0024226117305340064,
      vy: 7.375908917082205E-4,
      vz: -1.1098789795317313E-5,
      radius: 5
    }, {
      name: "Moon",
      m: 3.69396868E-8,
      color: "grey",
      x: -8.484458172375313E-4,
      y: -.002487096713651323,
      z: 2.297978320566774E-4,
      vx: .1969597123382245,
      vy: -.05996655923981807,
      vz: 9.023379263941209E-4,
      radius: 2
    }]
  },
  "The Martian System": {
    name: "The Martian System",
    image: "scenarios/mars.jpg",
    info: "Explore Mars and its two moons Phobos and Deimos. Nobody knows for sure how Mars ended up with these two moons, but it is known, with a fair degree of certainty, that the innermost of the two, Phobos, is on an orbit that will eventually bring it within the Roche limit of Mars, thus causing it to break up and for the briefest of moments in cosmic time endow Mars with a dazzling set of circumferential rings.",
    g: 39.5,
    law: 1.5,
    dt: 1E-6,
    scale: 6E5,
    distMax: 3.13640827776E-4,
    distMin: -3.13640827776E-4,
    distStep: 1.04546942592e-7,
    velMax: 0.3,
    velMin: -0.3,
    velStep: 0.00009999999999999999,
    masses: [{
      name: "Mars",
      color: "red",
      m: 3.213E-7,
      x: -7.271348740754375E-13,
      y: -1.083642189517581E-12,
      z: 3.031438004349422E-13,
      vx: 5.14551856846127E-9,
      vy: -5.2600010192653995E-9,
      vz: -2.9485550104693984E-9,
      radius: 15
    }, {
      name: "Phobos",
      type: "asteroid",
      color: "yellow",
      m: 5.359189909029E-15,
      x: 4.069917237674072E-5,
      y: 4.446602532828204E-5,
      z: -1.877325900108688E-5,
      vx: -.2764288604222645,
      vy: .3128880676075151,
      vz: .16141007317846987,
      radius: 1
    }, {
      name: "Deimos",
      type: "asteroid",
      color: "green",
      m: 7.422118532422E-16,
      x: 2.38808332018988E-5,
      y: 1.549063946942934E-4,
      z: 3.3537051424833E-6,
      vx: -.25431632623960987,
      vy: .03657016414059837,
      vz: .12356712220964088,
      radius: 1
    }]
  },
  "The Jovian System": {
    name: "The Jovian System",
    image: "scenarios/jupiter.jpg",
    info: "Get to know Jupiter and its four moons Io, Europa, Ganymede and Callisto.",
    distMax: .010068057744,
    distMin: -.010068057744,
    distStep: 0.000007551043308,
    velMax: 3,
    velMin: -3,
    velStep: 2.2222222222222222e-7,
    g: 39.5,
    law: 1.5,
    dt: 5E-6,
    scale: 2E4,
    masses: [{
      name: "Jupiter",
      color: "orange",
      m: 9.543E-4,
      x: 1.15381547654147E-7,
      y: -2.825829528058125E-7,
      z: -1.026380510182193E-8,
      vx: 2.323772216727277E-4,
      vy: -1.9278823141662403E-4,
      vz: -4.8520175792329084E-6,
      radius: 15
    }, {
      name: "Io",
      color: "yellow",
      m: 4.490848296995278E-8,
      x: .001442311664783252,
      y: .002430208180941323,
      z: 1.070503477219546E-4,
      vx: -3.1303045669209757,
      vy: 1.8681926293839302,
      vz: .020263027057311096,
      radius: 1.5
    }, {
      name: "Europa",
      color: "white",
      m: 2.413291634272764E-8,
      x: .004411816157655347,
      y: -8.832659609845252E-4,
      z: 3.309453987723511E-5,
      vx: .541084429236681,
      vy: 2.8358127214530073,
      vz: .1336090034387642,
      radius: 1.5
    }, {
      name: "Ganymede",
      color: "lightblue",
      m: 7.450777301989E-8,
      x: .00503832086509401,
      y: .005075422930054247,
      z: 2.580309616194139E-4,
      vx: -1.6253541453491054,
      vy: 1.61960980016203,
      vz: .03982820289396613,
      radius: 2.5
    }, {
      name: "Callisto",
      color: "grey",
      m: 5.40965639150398E-17,
      x: -.012140647315155,
      y: -.003627162778641445,
      z: -2.778945822104307E-4,
      vx: .49532316844675955,
      vy: -1.6447349197084598,
      vz: -.04566305221767575,
      radius: 2
    }]
  }
};

export default scenarios;