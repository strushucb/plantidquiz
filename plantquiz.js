const plants = 
            [
            {bn: "Acer palmatum", cn: "Japanese Maple", img: "001.jpeg", gimgs: ["001a","001b","001c","001d","001e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.sijcv6asnk6s"},  
            {bn: "Cercis occidentalis", cn: "Western Redbud", img:"002.jpeg", gimgs: ["002a","002b","002c","002d","002e","002f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.7gmkqlasi0ru"},
            {bn: "Corylus avellana 'Contorta'", cn: "Harry Lauder's Walking Stick", img:"003.jpeg", gimgs: ["003%20(1)","003%20(2)","003%20(3)","003%20(4)","003%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.2xhs6bovfn47"},  
            {bn: "Fraxinus angustifolia 'Raywood'", cn: "Raywood Ash", img:"004.jpeg", gimgs: ["004f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.9t0jl4btm83y"},  
            {bn: "Ginkgo biloba", cn: "Maidenhair Tree / Ginkgo Tree", img:"005.jpeg", gimgs: ["005a","005b","005c","005d","005e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.yc7uni4uxrim"},  
            {bn: "Koelreuteria paniculata", cn: "Golden Rain Tree", img:"006.jpeg", gimgs: ["006a","006b","006c","006d","006e","006f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.bcowhhsdt5ij"},  
            {bn: "Lagerstroemia indica cvs.", cn: "Crape Myrtle", img:"007.jpeg", gimgs: ["007a","007b","007c","007d","007e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.tip0txol5qed"},  
            {bn: "Morus alba 'Fruitless'", cn: "Fruitless Mulberry", img:"008.jpeg", gimgs: ["008a","008b","008c","008d","008e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.c6l2uivy50cx"},  
            {bn: "Pistacia chinensis", cn: "Chinese Pistache", img:"009.jpeg", gimgs: ["009%20(1)","009%20(2)","009%20(3)","009%20(4)","009%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.6rqjrvoonbex"},  
            {bn: "Pyrus calleryana cvs.", cn: "Flowering Pear / Callery Pear", img:"010.jpeg", gimgs: ["010a","010b","010c","010d","010e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.o0p19z64p8wd"},  

            {bn: "Aesculus x carnea", cn: "Red Horsechestnut", img:"011.jpeg", gimgs: ["011a","011b","011c","011d","011e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.5epmd9704uhd"},  
            {bn: "Betula pendula", cn: "European White Birch", img:"012.jpeg", gimgs: ["012a","012b","012c","012d","012e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.eax22uexpzxh"},  
            {bn: "Gleditsia triacanthos 'Sunburst'", cn: "Sunburst Honey Locust", img:"013.jpeg", gimgs: ["013a","013b","013c","013d","013e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.pdiulmykq1gc"},  
            {bn: "Liquidambar styraciflua", cn: "Liquidambar / American Sweet Gum", img:"014.jpeg", gimgs: ["014a","014b","014c","014d","014e","014f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.ghgzwxe2msf1"},  
            {bn: "Liriodendron tulipifera", cn: "Tulip Tree", img:"015.jpeg", gimgs: ["015a","015b","015c","015d","015e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.1ahoiqwudgv7"},  
            {bn:"Parthenocissus tricuspidata", cn:"Boston Ivy", img:"016.jpeg", gimgs: ["016%20(1)","016%20(2)","016%20(3)","016%20(4)","016%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.qxa16d1xdd01"},  
            {bn:"Platanus racemosa", cn:"California Sycamore", img:"017.jpeg", gimgs: ["017%20(1)","017%20(2)","017%20(3)","017%20(4)","017%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.1seir63hwmm8"},  
            {bn:"Quercus douglasii", cn:"Blue Oak", img:"018.jpeg", gimgs: ["018%20(1)","018%20(2)","018%20(3)","018%20(4)","018%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.4wl8r79wdl10"},  
            {bn:"Quercus palustris", cn:"Pin Oak / Swamp Oak", img:"019.jpeg", gimgs: ["019%20(1)","019%20(2)","019%20(3)","019%20(4)","019%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.1lssoc7az6a"},  
            {bn:"Ulmus parvifolia", cn:"Chinese Elm", img:"020.jpeg", gimgs: ["020%20(1)","020%20(2)","020%20(3)","020%20(4)","020%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.b3b03o4kosnq"},  

            {bn:"Agapanthus praecox orientalis cvs.",cn:"Lily of the Nile", img:"021.jpeg", gimgs: ["021%20(1)","021%20(2)","021%20(3)","021%20(4)","021%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.dmq7qec9ypy0"},  
            {bn:"Dodonaea viscosa 'Purpurea'",cn:"Purple Hopseed Bush", img:"022.jpeg", gimgs: ["022%20(1)","022%20(2)","022%20(3)","022%20(4)","022%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.vjubqqhqumqa"},  
            {bn:"Eucalyptus sideroxylon",cn:"Red Iron Bark Eucalyptus", img:"023.jpeg", gimgs: ["023%20(1)","023%20(2)","023%20(3)","023%20(4)","023%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.u3cr4u4z2xng"},  
            {bn:"Fatsia japonica",cn:"Japanese Aralia", img:"024.jpeg", gimgs: ["024%20(1)","024%20(2)","024%20(3)","024%20(4)","024%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.7exkt93ryvil"},  
            {bn:"Loropetalum chinense 'Razzleberri'",cn:"Razzleberri Fringe Flower", img:"025.jpeg", gimgs: ["025%20(1)","025%20(2)","025%20(3)","025%20(4)","025%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.g895e6i0t15"},  
            {bn:"Phormium hybrids 'Yellow Wave'",cn:"Yellow Wave Phormium / Yellow Wave New Zealand Flax", img:"026.jpeg", gimgs: ["026%20(1)","026%20(2)","026%20(3)","026%20(4)","026%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.4c6hs833mw03"},  
            {bn:"Prunus ilicifolia ilicifolia",cn:"Hollyleaf Cherry", img:"027.jpeg", gimgs: ["027%20(1)","027%20(2)","027%20(3)","027%20(4)","027%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.e7yktskvdg"},  
            {bn:"Rhus lancea",cn:"African Sumac", img:"028.jpeg", gimgs: ["028%20(1)","028%20(2)","028%20(3)","028%20(4)","028%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.q3n96j6u5mw"},  
            {bn:"Rosa hybrids 'White Flower Carpet'",cn:"White Carpet Rose", img:"029.jpeg", gimgs: ["029%20(1)","029%20(2)","029%20(3)","029%20(4)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.6a0psynfptee"},  
            {bn:"Salvia leucantha cvs.",cn:"Mexican Bush Sage / Velvet Sage", img:"030.jpeg", gimgs: ["030%20(1)","030%20(2)","030%20(3)","030%20(4)","030%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.833i6i3n4e5g"},  

            {bn:"Abelia x grandiflora cvs.",cn:"Glossy Abelia", img:"031.jpeg", gimgs: ["031b"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.oog0h9wtevv9"},  
            {bn:"Dietes bi-color",cn:"Yellow Fortnight Lily", img:"032.jpeg", gimgs: ["032%20(1)","032%20(2)","032%20(3)","032%20(4)","032%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.7i6n7jcsnjoj"},  
            {bn:"Dietes iridioides",cn:"Fortnight Lily", img:"033.jpeg", gimgs: ["033%20(1)","033%20(2)","033%20(3)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.7xm6vldiaane"},  
            {bn:"Lantana montevidensis cvs.",cn:"Trailing Lantana", img:"034.jpeg", gimgs: ["034b"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.1be2l3tywcmb"},  
            {bn:"Lavandula angustifolia cvs.",cn:"English Lavender", img:"035.jpeg", gimgs: ["035%20(1)","035%20(2)","035%20(3)","035%20(4)","035%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.9ro3vso3bu6"},  
            {bn:"Lavatera maritima",cn:"Maritime Lavatera", img:"036.jpeg", gimgs: ["036%20(1)","036%20(2)","036%20(3)","036%20(4)","036%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.d70kz6fkdkwt"},  
            {bn:"Ligustrum japonicum 'Texanum'",cn:"Texas Privet", img:"037.jpeg", gimgs: ["037%20(1)","037%20(2)","037%20(3)","037%20(4)","037%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.2wdbs58m60cd"},  
            {bn:"Myoporum parvifolium cvs.",cn:"Prostrate Myoporum", img:"038.jpeg", gimgs: ["038b"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.hkmjkuh66zc5"},  
            {bn:"Nandina domestica cvs.",cn:"Heavenly Bamboo", img:"039.jpeg", gimgs: ["039%20(1)","039%20(2)","039%20(3)","039%20(4)","039%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.bcb49h77k9sa"},  
            {bn:"Olea europaea cvs.",cn:"Olive", img:"040.jpeg", gimgs: ["040%20(1)","040%20(2)","040%20(3)","040%20(4)","040%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.dvxkfkypqjse"},

            {bn:"Achillea millefolium cvs.",cn:"Yarrow", img:"041.jpeg", gimgs: ["041%20(1)","041%20(2)","041%20(3)","041%20(4)","041%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.rqltzfhxun58"},
            {bn:"Anemone x hybrida",cn:"Japanese Anemone", img:"042.jpeg", gimgs: ["042%20(1)","042%20(2)","042%20(3)","042%20(4)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.asy4i8vqvv4j"},
            {bn:"Chondropetalum elephantium",cn:"Cape Rush", img:"043.jpeg", gimgs: ["043%20(1)","043%20(2)","043%20(3)","043%20(4)","043%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.aa5gkwl0wf34"},
            {bn:"Leymus arenarius 'Blue Dune'",cn:"Blue Dune Lyme Grass", img:"044.jpeg", gimgs: ["044%20(1)","044%20(2)","044%20(3)","044%20(4)","044%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.4183mij3emoj"},
            {bn:"Lomandra longifolia 'Platinum Beauty'",cn:"Platinum Beauty Mat Rush", img:"045.jpeg", gimgs: ["045%20(1)","045%20(2)","045%20(3)","045%20(4)","045%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.mlxes7yy8bqa"},
            {bn:"Salvia yangii",cn:"Russian Sage", img:"046.jpeg", gimgs: ["046%20(1)","046%20(2)","046%20(3)","046%20(4)","046%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.tx23m8x3p33m"},
            {bn:"Pyracantha coccinea 'Kasan'",cn:"Firethorn", img:"047.jpeg", gimgs: ["047%20(1)","047%20(2)","047%20(3)","047%20(4)","047%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.nzeowsxmnqsg"},
            {bn:"Erigeron karvinskianus",cn:"Santa Barbara Daisy", img:"048.jpeg", gimgs: ["048%20(1)","048%20(2)","048%20(3)","048%20(4)","048%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.g542jcrktai"},
            {bn:"Salvia clevelandii cvs.",cn:"Cleveland Sage / California Blue Sage", img:"049.jpeg", gimgs: ["049%20(1)","049%20(2)","049%20(3)","049%20(4)","049%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.ysqyjjg23g3f"},
            {bn:"Westringia fruticosa 'Morning Light'",cn:"Variegated Coast Rosemary / Morning Light Coast Rosemary", img:"050.jpeg", gimgs: ["050%20(1)","050%20(2)","050%20(3)","050%20(4)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-5#h.fjkuwu58fsc7"},

            {bn:"Buxus microphylla japonica cvs.",cn:"Japanese Boxwood", img:"051.jpeg", gimgs: ["051%20(1)","051%20(2)","051%20(3)","051%20(4)","051%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.cy0ks4guqvyv"},
            {bn:"Cotoneaster dammeri cvs.",cn:"Bearberry Cotoneaster", img:"052.jpeg", gimgs: ["052%20(1)","052%20(2)","052%20(3)","052%20(4)","052%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.wzslwoz6eax7"},
            {bn:"Leptospermum scoparium cvs.",cn:"New Zealand Tea Tree / Manuk", img:"053.jpeg", gimgs: ["053%20(1)","053%20(2)","053%20(3)","053%20(4)","053%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.qg2hqn6696w9"},
            {bn:"Hypericum calycinum",cn:"Aarons Beard / Creeping St. Johnswort", img:"054.jpeg", gimgs: ["054%20(1)","054%20(2)","054%20(3)","054%20(4)","054%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.5dd7aspk0s5d"},
            {bn:"Juniperus horizontalis 'Bar Harbor'",cn:"Bar Harbor Juniper", img:"055.jpeg", gimgs: ["055%20(1)","055%20(2)","055%20(3)","055%20(4)","055%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.satua8gjrgbn"},
            {bn:"Miscanthus sinensis",cn:"Eulalia / Japanese Silver Grass", img:"056.jpeg", gimgs: ["056%20(1)","056%20(2)","056%20(3)","056%20(4)","056%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.ce5gjo4r2ick"},
            {bn:"Muhlenbergia rigens",cn:"Deer Grass", img:"057.jpeg", gimgs: ["057%20(1)","057%20(2)","057%20(3)","057%20(4)","057%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.ctgd6u3egem"},
            {bn:"Podocarpus gracilior",cn:"Fern Pine", img:"058.jpeg", gimgs: ["058%20(1)","058%20(2)","058%20(3)","058%20(4)","058%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.5rtac4pjp5s5"},
            {bn:"Quercus agrifolia",cn:"Coast Live Oak", img:"059.jpeg", gimgs: ["059%20(1)","059%20(2)","059%20(3)","059%20(4)","059%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.37xcqsq3eyfp"},
            {bn:"Trachelospermum jasminoides",cn:"Star Jasmine", img:"060.jpeg", gimgs: ["060%20(1)","060%20(2)","060%20(3)","060%20(4)","060%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-6#h.3jswnnjf2y7a"},

            {bn:"Arctostaphylos 'Emerald Carpet'",cn:"Emerald Carpet Manzanita", img:"061.jpeg", gimgs: ["061%20(1)","061%20(2)","061%20(3)","061%20(4)","061%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.uawfpiz5wtcb"},
            {bn:"Berberis thunbergii atropurpurea cvs.",cn:"Red Leaf Japanese Barberry", img:"062.jpeg", gimgs: ["062%20(1)","062%20(2)","062%20(3)","062%20(4)","062%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.snt1zz1wwzcw"},
            {bn:"Callistemon viminalis 'Little John'",cn:"Little John Bottlebrush", img:"063.jpeg", gimgs: ["063%20(1)","063%20(2)","063%20(3)","063%20(4)","063%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.h8rg95omtvna"},
            {bn:"Coleonema pulchellum 'Sunset Gold'",cn:"Golden Breath of Heaven", img:"064.jpeg", gimgs: ["064%20(1)","064%20(2)","064%20(3)","064%20(4)","064%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.grc4xvxa8mug"},
            {bn:"Hemerocallis hybrids",cn:"Daylily", img:"065.jpeg", gimgs: ["065%20(1)","065%20(2)","065%20(3)","065%20(4)","065%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.5e1fk7qr03pp"},
            {bn:"Juniperus chinensis 'Blue Point'",cn:"Blue Point Juniper", img:"066.jpeg", gimgs: ["066%20(1)","066%20(2)","066%20(3)","066%20(4)","066%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.yzxh9om37frx"},
            {bn:"Pennisetum setaceum 'Rubrum'",cn:"Rubrum Fountain Grass / Red Fountain Grass", img:"067.jpeg", gimgs: ["067%20(1)","067%20(2)","067%20(3)","067%20(4)","067%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.5mqscd306tam"},
            {bn:"Acer buergerianum",cn:"Trident Maple", img:"068.jpeg", gimgs: ["068%20(1)","068%20(2)","068%20(3)","068%20(4)","068%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.8gfnw7zh3c9f"},
            {bn:"Punica granatum 'Nana'",cn:"Dwarf Flowering Pomegranate", img:"069.jpeg", gimgs: ["069%20(1)","069%20(2)","069%20(3)","069%20(4)","069%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.2nrome5f6k9l"},
            {bn:"Rhaphiolepis indica cvs.",cn:"Indian Hawthorne", img:"070.jpeg", gimgs: ["070%20(1)","070%20(2)","070%20(3)","070%20(4)","070%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-7#h.ql2d6lig2dxa"},

            {bn:"Cedrus atlantica 'Glauca'",cn:"Blue Atlas Cedar", img:"071.jpeg", gimgs: ["071b%20(1)","071b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Cedrus deodara",cn:"Deodar Cedar", img:"072.jpeg", gimgs: ["072b%20(1)","072b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Cupressus sempervirens",cn:"Italian Cypress", img:"073.jpeg", gimgs: ["073b%20(1)","073b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Juniperus chinensis 'Spartan'",cn:"Spartan Columnar Juniper", img:"074.jpeg", gimgs: ["074b%20(1)","074b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Juniperus x pfitzeriana 'Aurea'",cn:"Golden Pfitzer Juniper", img:"075.jpeg", gimgs: ["075b%20(1)","075b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Pinus canariensis",cn:"Canary Island Pine", img:"076.jpeg", gimgs: ["076b%20(1)","076b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Pinus pinea",cn:"Italian Stone Pine", img:"077.jpeg", gimgs: ["077b%20(1)","077b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Pinus thunbergii",cn:"Japanese Black Pine", img:"078.jpeg", gimgs: ["078b%20(1)","078b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Sequoia sempervirens cvs.",cn:"Coast Redwood", img:"079.jpeg", gimgs: ["079b%20(1)","079b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"},
            {bn:"Sequoiadendron giganteum",cn:"Giant Sequoia", img:"080.jpeg", gimgs: ["080b%20(1)","080b%20(2)"], collectionurl: "https://sites.google.com/view/horticulture006/"}
            ];

const totalPlants = 80;

const levenshteinDistance = (str1 = '', str2 = '') => {
     const track = Array(str2.length + 1).fill(null).map(() =>
     Array(str1.length + 1).fill(null));
     for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
     }
     for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
     }
     for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
           const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
           track[j][i] = Math.min(
              track[j][i - 1] + 1, // deletion
              track[j - 1][i] + 1, // insertion
              track[j - 1][i - 1] + indicator, // substitution
           );
        }
     }
     return track[str2.length][str1.length];
  };

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

class MagicEightBall extends React.Component {
  
  constructor(props) {
    super(props);
    //console.log("At top of constructor");
    this.plantList = this.getrandomplants(1, totalPlants);
    //console.log(this.plantList)
    this.state = {
      userInput: '',
      plantDex: 0,
      plantList: this.plantList,
      currentPlant: plants[this.plantList[0]-1].cn,
      correctAnswer: plants[this.plantList[0]-1].bn,
      response: "",
      hints: true,
      minPlant: 1,
      maxPlant: totalPlants,
      streak: 0
    }
    this.slideleft = this.slideleft.bind(this);
    this.blank = this.blank.bind(this);
    this.slideright = this.slideright.bind(this);
    this.guess = this.guess.bind(this);
    this.newplant = this.newplant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHints = this.handleHints.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    //console.log("Made it to bottom of constructor");
  }

  getrandomplants(firstplant, lastplant) {
    let array = []
    for (let i = firstplant; i <= lastplant; i++) {
      array.push(i)
    }
    return shuffle(array);
  }

  newplant() {
    let nextDex = (this.state.plantDex + 1 < this.state.plantList.length) ? this.state.plantDex + 1 : 0;
    this.setState({
      plantDex: nextDex,
      currentPlant: plants[this.state.plantList[nextDex]-1].cn,
      correctAnswer: plants[this.state.plantList[nextDex]-1].bn,  
      userInput: '',
      response: ""
    });
  }


  guess() {
    //console.log("guess is called with "+this.state.userInput+" as the userInput");
    if (this.state.userInput !== '') {
      let distance = levenshteinDistance(this.state.correctAnswer, this.state.userInput.replace("’","'").replace("‘","'"));
      if (distance == 0){
        this.setState({response: "You're correct! Press ENTER or 'Next Plant'!", streak: this.state.streak + 1});
      } else {
        this.setState({response: "You're "+distance+" characters away from being correct.",  streak: 0});
      }
    }
  }

  slideleft(event) {
    //console.log("Slide left");
    if(isNaN(parseInt(event.target.value))) return;
    let newmin = 0;
    if(event.target.value >= this.state.maxPlant) { newmin = this.state.maxPlant - 9; if(newmin < 1) newmin = 1;}
    else if(event.target.value < 1){ newmin = 1; }
    else{
      newmin = parseInt(event.target.value);
    }
    if(newmin == this.state.minPlant) return;
    let newplantlist = this.getrandomplants(newmin, this.state.maxPlant);
        console.log(newplantlist);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      minPlant: newmin
    });

  }

  slideright(event) {
    //console.log("Slide right");
    if(isNaN(parseInt(event.target.value))) return;
    let newmax = 0;
    if(event.target.value <= this.state.minPlant) { newmax = this.state.minPlant + 9; if(newmax > totalPlants) newmax = totalPlants; }
    else if(event.target.value > totalPlants){ newmax = totalPlants; }
    else{
      newmax = parseInt(event.target.value);
    }

    if(newmax == this.state.maxPlant) return;
    let newplantlist = this.getrandomplants(this.state.minPlant, newmax);

            console.log(newplantlist);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      maxPlant: newmax
    });
  }

  blank(event){}
  
  handleChange(event) {
    //console.log("In handle change");
    this.setState({
      userInput: event.target.value
    });
  }

  handleHints(event){
    this.setState({
      hints: !this.state.hints
    }); 
  }


  handleKeypress(event){
    if (event.key === "Enter" && this.state.response === "You're correct! Press ENTER or 'Next Plant'!") {
      //console.log("Do a new plant!");      
      this.newplant();
    } else if (event.key === "Enter") {      
      this.guess();
    } 
  }
  
  render() {

    //console.log("Trying to render!");
    const answer = this.state.response;
    
    return (
      <div>
        <table><tr><td>
        <div className="question-container">
          <p className="prompt-label">What is the botanical name for this plant?</p>
          { (this.state.hints) ?
              <p className="prompt-label">Hint: {this.state.currentPlant}.</p>
              :
              <p className="prompt-label"> ... </p>
          }

          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            onKeyPress={this.handleKeypress}
            />
          <div className="butt-container"> <button onClick={this.guess}>
            Submit Answer (or press ENTER)!
          </button>
          <table><tr><td><p className="streak-label"> Streak:</p></td></tr>
          <tr><td><p className="streak-label">{this.state.streak}</p></td></tr>
          </table>
          <button onClick={this.newplant}>
            Next Plant!
          </button>
          </div>
        <div className="ball-container">
            <div className="ball-black-outer">
                <div>
                  { (answer !== '') ?
                    <div><p className="prompt-label">{answer}</p></div>
                   :
                    <div className='eight'>🤐</div>
                  }
                </div>
            </div>
            <div><p className="streak-label"> Select Plant Range to Quiz:</p></div>
            <div className="collection-container">


              <label htmlFor="leftnum">
                Oldest Plant: #<b>{this.state.minPlant}</b> 
                <input className="slidenum" id="leftnum" type="range"  list="tickmarks1" value={this.state.minPlant} max={totalPlants} min="1" step="10" onChange={(event)=>this.slideleft(event)} onInput={(event)=>this.slideleft(event)}/> 
<datalist id="tickmarks1">
<option value="0"></option>
<option value="10"></option>
<option value="20" label = "20"></option>
<option value="30" ></option>
<option value="40" label = "40"></option>
<option value="50" ></option>
<option value="60" label = "60"></option>
</datalist>
              </label>
  <label htmlFor="rightnum">
     Newest Plant: #<b>{this.state.maxPlant}</b> <input className="slidenum" id="rightnum" type="range" list="tickmarks2" value={this.state.maxPlant} max={totalPlants} min="0" step="10" onChange={(event)=>this.slideright(event)} onInput={(event)=>this.slideright(event)}/>
<datalist id="tickmarks2">
<option value="0"></option>
<option value="10"></option>
<option value="20" label = "20"></option>
<option value="30" ></option>
<option value="40" label = "40"></option>
<option value="50" ></option>
<option value="60" label = "60"></option>
</datalist>
  </label>

            </div>
            <div><label htmlFor="hints">
                Show Common Name: <input className="checkbox" type="checkbox" id="hints" name="hints" checked={this.state.hints} onChange={this.handleHints}/> 
                </label>
            </div>
        </div>
        </div>
        </td><td>
            <div className="pic-container">
                      <img src={"images/"+plants[this.state.plantList[this.state.plantDex]-1].img+""}/>
              <img src={"images/"+
              plants[this.state.plantList[this.state.plantDex]-1].gimgs[Math.floor(Math.random() * plants[this.state.plantList[this.state.plantDex]-1].gimgs.length)]
              +".jpg"}/>
              <a href={plants[this.state.plantList[this.state.plantDex]-1].collectionurl} target="_blank">View Botanical Name and All Photos</a>
            </div>
        </td></tr></table>
        </div>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <MagicEightBall/>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));