const plants = 
            [
            {bn: "Acer palmatum", cn: "Japanese Maple", img: "001.jpeg", gimgs: ["001a","001b","001c","001d","001e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.sijcv6asnk6s"},  
            {bn: "Cercis occidentalis", cn: "Western Redbud", img:"002.jpeg", gimgs: ["002a","002b","002c","002d","002e","002f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.7gmkqlasi0ru"},
            {bn: "Corylus avellana 'Contorta'", cn: "Harry Lauder's Walking Stick", img:"003.jpeg", gimgs: ["003a"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.2xhs6bovfn47"},  
            {bn: "Fraxinus angustifolia 'Raywood'", cn: "Raywood Ash", img:"004.jpeg", gimgs: ["004a","004b","004c","004d","004e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.9t0jl4btm83y"},  
            {bn: "Ginkgo biloba", cn: "Maidenhair Tree / Ginkgo Tree", img:"005.jpeg", gimgs: ["005a","005b","005c","005d","005e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.yc7uni4uxrim"},  
            {bn: "Koelreuteria paniculata", cn: "Golden Rain Tree", img:"006.jpeg", gimgs: ["006a","006b","006c","006d","006e","006f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.bcowhhsdt5ij"},  
            {bn: "Lagerstroemia indica cvs.", cn: "Crape Myrtle", img:"007.jpeg", gimgs: ["007a","007b","007c","007d","007e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.tip0txol5qed"},  
            {bn: "Morus alba 'Fruitless'", cn: "Fruitless Mulberry", img:"008.jpeg", gimgs: ["008a","008b","008c","008d","008e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.c6l2uivy50cx"},  
            {bn: "Pistacia chinensis", cn: "Chinese Pistache", img:"009.jpeg", gimgs: ["009a"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.6rqjrvoonbex"},  
            {bn: "Pyrus calleryana cvs.", cn: "Flowering Pear / Callery Pear", img:"010.jpeg", gimgs: ["010a","010b","010c","010d","010e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-1#h.o0p19z64p8wd"},  
            {bn: "Aesculus x carnea", cn: "Red Horsechestnut", img:"011.jpeg", gimgs: ["011a","011b","011c","011d","011e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.5epmd9704uhd"},  
            {bn: "Betula pendula", cn: "European White Birch", img:"012.jpeg", gimgs: ["012a","012b","012c","012d","012e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.eax22uexpzxh"},  
            {bn: "Gleditsia triacanthos 'Sunburst'", cn: "Sunburst Honey Locust", img:"013.jpeg", gimgs: ["013a","013b","013c","013d","013e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.pdiulmykq1gc"},  
            {bn: "Liquidambar styraciflua", cn: "Liquidambar / American Sweet Gum", img:"014.jpeg", gimgs: ["014a","014b","014c","014d","014e","014f"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.ghgzwxe2msf1"},  
            {bn: "Liriodendron tulipifera", cn: "Tulip Tree", img:"015.jpeg", gimgs: ["015a","015b","015c","015d","015e"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.1ahoiqwudgv7"},  
            {bn:"Parthenocissus tricuspidata", cn:"Boston Ivy", img:"016.jpeg", gimgs: ["016%20(1)","016%20(2)","016%20(3)","016%20(4)","016%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.qxa16d1xdd01"},  
            {bn:"Platanus racemosa", cn:"California Sycamore", img:"017.jpeg", gimgs: ["017%20(1)","017%20(2)","017%20(3)","017%20(4)","017%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.1seir63hwmm8"},  
            {bn:"Quercus douglasii", cn:"Blue Oak", img:"018.jpeg", gimgs: ["018a"], collectionurl: "https://sites.google.com/view/horticulture006/collection-2#h.4wl8r79wdl10"},  
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
            {bn:"Rosa spp. 'White Flower Carpet'",cn:"White Carpet Rose", img:"029.jpeg", gimgs: ["029%20(1)","029%20(2)","029%20(3)","029%20(4)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-3#h.6a0psynfptee"},  
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
            {bn:"Olea europaea cvs.",cn:"Olive", img:"040.jpeg", gimgs: ["040%20(1)","040%20(2)","040%20(3)","040%20(4)","040%20(5)"], collectionurl: "https://sites.google.com/view/horticulture006/collection-4#h.dvxkfkypqjse"}
            ];

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
    console.log("At top of constructor");
    this.plantList = this.getrandomplants(true,true,true);
    console.log(this.plantList)
    this.state = {
      userInput: '',
      plantDex: 0,
      plantList: this.plantList,
      currentPlant: plants[this.plantList[0]-1].cn,
      correctAnswer: plants[this.plantList[0]-1].bn,
      response: "",
      collection1: true,
      collection2: true,
      collection3: true,
      hints: true,
      streak: 0
    }
    this.guess = this.guess.bind(this);
    this.newplant = this.newplant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHints = this.handleHints.bind(this);
        this.handleBox1 = this.handleBox1.bind(this);
            this.handleBox2 = this.handleBox2.bind(this);
                this.handleBox3 = this.handleBox3.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    console.log("Made it to bottom of constructor");
  }

  getrandomplants(col1, col2, col3) {
    let array = []
    if(col1){
      array.push(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
    }
    if(col2){
      array.push(21,22,23,24,25,26,27,28,29,30)
    }
    if(col3){
      array.push(31,32,33,34,35,36,37,38,39,40)
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
    console.log("guess is called with "+this.state.userInput+" as the userInput");
    if (this.state.userInput !== '') {
      let distance = levenshteinDistance(this.state.correctAnswer, this.state.userInput.replace("’","'").replace("‘","'"));
      if (distance == 0){
        this.setState({response: "You're correct! Press ENTER or 'Next Plant'!", streak: this.state.streak + 1});
      } else {
        this.setState({response: "You're "+distance+" letters away from being correct.",  streak: 0});
      }
    }
  }
  
  handleChange(event) {
    console.log("In handle change");
    this.setState({
      userInput: event.target.value
    });
  }

  handleHints(event){
    this.setState({
      hints: !this.state.hints
    }); 
  }

  handleBox1(event) {
    if(!this.state.collection2 && !this.state.collection3) return;
    let newplantlist = this.getrandomplants(!this.state.collection1,this.state.collection2,this.state.collection3);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      collection1: !this.state.collection1
    });
  }

  handleBox2(event) {
    if(!this.state.collection1 && !this.state.collection3) return;
    let newplantlist = this.getrandomplants(this.state.collection1,!this.state.collection2,this.state.collection3);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      collection2: !this.state.collection2
    });
  }

  handleBox3(event) {
    if(!this.state.collection1 && !this.state.collection2) return;
    let newplantlist = this.getrandomplants(this.state.collection1,this.state.collection2,!this.state.collection3);
    this.setState({
      userInput: '',
      plantDex: 0,
      plantList: newplantlist,
      currentPlant: plants[newplantlist[0]-1].cn,
      correctAnswer: plants[newplantlist[0]-1].bn,
      response: "",
      collection3: !this.state.collection3
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

    console.log("Trying to render!");
    const answer = this.state.response;
    
    return (
      <div>
        <table><tr><td>
        <div className="question-container">
          <p className="prompt-label">What is the botanical name for this plant?</p>
          { (this.state.hints) ?
              <p className="prompt-label">Hint: its common name is {this.state.currentPlant}.</p>
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

            <div className="collection-container">
                <label htmlFor="collection1">
                   <input className="checkbox" type="checkbox" id="collection1" name="col1" checked={this.state.collection1} onChange={this.handleBox1}/> Oldies (1-20) 
                </label>
                <label htmlFor="collection2">
                   <input className="checkbox" type="checkbox" id="collection2" name="col2" checked={this.state.collection2} onChange={this.handleBox2}/> 2 Weeks Ago (21-30) 
                </label>
                <label htmlFor="collection3">
                   <input className="checkbox" type="checkbox" id="collection3" name="col3" checked={this.state.collection3} onChange={this.handleBox3}/> Last Week (31-40) 
                </label>
            </div>
            <div>
                <label htmlFor="hints">
                   <input className="checkbox" type="checkbox" id="hints" name="hints" checked={this.state.hints} onChange={this.handleHints}/> Show Common Name 
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
