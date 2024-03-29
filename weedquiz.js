const plants = 
            [
            {bn: "Sonchus oleraceus", cn: ["Annual Sow Thistle","Sow Thistle"], imgs: ["001a","001b","001c","001d","001e", "001f", "001g", "001h", "001i"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/annual_sowthistle.html"},  
            {bn: "Gnaphalium luteo-album", cn: ["Cudweed"], imgs: ["002a","002b","002c","002d","002e", "002f", "002g"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/cudweeds.html"},
            {bn: "Cardamine oligosperma", cn: ["Little Bittercress"], imgs: ["003a","003b","003c","003d","003e", "003f", "003g", "003h", "003i", "003j"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/bittercress.html"},  
            {bn: "Picris echioides", cn: ["Bristly Oxtongue"], imgs: ["004a","004b","004c","004d","004e", "004f", "004g", "004h", "004i"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/bristly_oxtongue.html"},  
            {bn: "Plantago lanceolata", cn: ["Buckhorn Plantain"], imgs: ["005a","005b","005c","005d","005e", "005f", "005g", "005h", "005i", "005j"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/buckhorn_plantain.html"},  
            {bn: "Bromus diandrus", cn: ["Ripgut Brome"], imgs: ["006a","006b","006c","006d","006e", "006f", "006g", "006h", "006i", "006j"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/ripgut_brome.html"},  
            {bn: "Malva parviflora", cn: ["Cheeseweed","Little Mallow"], imgs: ["007a","007b","007c","007d","007e", "007f", "007g", "007h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/little_mallow.html"},  
            {bn: "Senecio vulgaris", cn: ["Groundsel","Common Groundsel"], imgs: ["008a","008b","008c","008d","008e", "008f", "008g"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/common_groundsel.html"},  
            {bn: "Conyza canadensis", cn: ["Horseweed", "Mare's Tail"], imgs: ["009a","009b","009c","009d","009e", "009f", "009g", "009h", "009i", "009j", "009k"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/horseweed.html"},  

            {bn: "Euphorbia peplus", cn: ["Petty Spurge"], imgs: ["010a","010b","010c","010d","010e", "010f", "010g"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/petty_spurge.html"},  
            {bn: "Erodium moschatum", cn: ["White-Stem Filaree","Filaree","Whitestem Filaree","White Stem Filaree"], imgs: ["011a","011b","011c","011d","011e", "011f", "011g", "011h", "011i", "011j", "011k"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/whitestem_filaree.html"},  
            {bn: "Avena fatua", cn: ["Wild Oats", "Wild Oat"], imgs: ["012a","012b","012c","012d","012e", "012f", "012g", "012h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/wild_oat.html"},

            {bn: "Medicago polymorpha", cn: ["California Bur Clover", "California Burclover"], imgs: ["013a","013b","013c","013d","013e", "013f", "013g"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/california_burclover.html"},  
            {bn: "Rumex crispus", cn: ["Curly Dock", "Sour Dock"], imgs: ["014a","014b","014c","014d","014e", "014f", "014g", "014h", "014i", "014j"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/curly_dock.html"},  
            {bn: "Geranium dissectum", cn: ["Cutleaf Geranium"], imgs: ["015a","015b","015c","015d","015e", "015f", "015g"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/cutleaf_geranium.html"},

            {bn: "Cichorium intybus", cn: ["Chicory"], imgs: ["016a","016b","016c","016d","016e", "016f"], collectionurl: "https://wric.ucdavis.edu/information/natural%20areas/wr_C/Cichorium.pdf"},  
            {bn: "Triticum spp.", cn: ["Volunteer Wheat"], imgs: ["017a","017b","017c","017d","017e", "017f"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/volunteer_wheat.html"},  
            {bn: "Raphanus sativus", cn: ["Wild Radish"], imgs: ["018a","018b","018c","018d","018e", "018f", "018g", "018h", "018i"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/wild_radish.html"},

            {bn: "Poa annua", cn: ["Annual Bluegrass"], imgs: ["019a","019b","019c","019d","019e", "019f", "019g", "019h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/annual_bluegrass.html"},  
            {bn: "Lamium aplexicaule", cn: ["Henbit"], imgs: ["020a","020b","020c","020d","020e", "020f", "020g", "020h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/henbit.html"},  
            {bn: "Vicia americana", cn: ["Purple Vetch"], imgs: ["021a","021b","021c","021d","021e", "021f", "021g","021h","021i"], collectionurl: "https://ucanr.edu/sites/ucceventura/files/43463.pdf"},
 
            {bn: "Oxalis pes-caprae", cn: ["Bermuda Buttercup"], imgs: ["022a","022b","022c","022d","022e", "022f", "022g","022h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/bermuda_buttercup.html"},  
            {bn: "Foeniculum vulgare", cn: ["Fennel"], imgs: ["023a","023b","023c","023d","023e", "023f", "023g","023h","023i"], collectionurl: "https://wric.ucdavis.edu/information/natural%20areas/wr_F/Foeniculum.pdf"},  
            {bn: "Bromus ramosus", cn: ["Hairy Brome"], imgs: ["024a","024b","024c","024d","024e", "024f", "024g","024h"], collectionurl: "https://en.wikipedia.org/wiki/Bromus_ramosus"},
  
            {bn: "Carduus pycnocephalus", cn: ["Italian Thistle"], imgs: ["025a","025b","025c","025d","025e", "025f", "025g","025h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/italian_thistle.html"},  
            {bn: "Epilobium paniculatum", cn: ["Panicle Willow", "Panicle Willowherb"], imgs: ["026a","026b","026c","026d","026e", "026f", "026g","026h"], collectionurl: "https://ucanr.edu/sites/ucceventura/files/43362.pdf"},  
            {bn: "Trifolium repens", cn: ["White Clover"], imgs: ["027a","027b","027c","027d","027e", "027f"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/white_clover.html"},

            {bn: "Galium aparine", cn: ["Catchweed","Bedstraw","Cleaver","Cleavers","Sticky Willy"], imgs: ["028a","028b","028c","028d","028e", "028f", "028g","028h","028i"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/catchweed_bedstraw.html"},  
            {bn: "Brassica rapa", cn: ["Mustard","California Mustard"], imgs: ["029a","029b","029c","029d","029e", "029f", "029g","029h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/mustards.html"},  
            {bn: "Anagallis arvensis", cn: ["Scarlet Pimpernel"], imgs: ["030a","030b","030c","030d","030e", "030f","030g","030h", "030i"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/scarlet_pimpernel.html"},

            {bn: "Convolvulus arvensis", cn: ["Bindweed","Field Bindweed"], imgs: ["031a","031b","031c","031d","031e", "031f", "031g"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/field_bindweed.html"},  
            {bn: "Lolium multiflorum", cn: ["Italian Ryegrass","Annual Ryegrass", "Italian Rye"], imgs: ["032a","032b","032c","032d","032e", "032f", "032g","032h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/italian_ryegrass.html"},  
            {bn: "Toxicodendron diversilobum", cn: ["Poison Oak"], imgs: ["033a","033b","033c","033d","033e", "033f","033g", "033h"], collectionurl: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7431.html"},


            {bn: "Rubus spp.", cn: ["California Blackberry","Wild Blackberry","Blackberry","Wild Blackberries"], imgs: ["034a","034b","034c","034d","034e", "034f"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/wild_blackberry.html"},  
            {bn: "Melilotus officinalis", cn: ["Yellow Sweet Clover", "Yellow Sweetclover"], imgs: ["035a","035b","035c","035d","035e", "035f", "035g","035h"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/yellow_sweetclover.html"},  
            {bn: "Cyperus esculentus", cn: ["Yellow Nutsedge"], imgs: ["036a","036b","036c","036d","036e", "036f"], collectionurl: "https://ipm.ucanr.edu/PMG/WEEDS/yellow_nutsedge.html"}  
            ];

const totalPlants = 36;

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
      currentPlant: plants[this.plantList[0]-1].bn,
      correctAnswer: plants[this.plantList[0]-1].cn,
      response: "",
      hints: false,
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
      currentPlant: plants[this.state.plantList[nextDex]-1].bn,
      correctAnswer: plants[this.state.plantList[nextDex]-1].cn,  
      userInput: '',
      response: ""
    });
  }


  guess() {
    //console.log("guess is called with "+this.state.userInput+" as the userInput");
    if (this.state.userInput !== '' && !(this.state.response === "You're correct! Press ENTER or 'Next Weed'!")) {
      let correct = false;
      let distance = 99999;
      for (let i = 0; i < this.state.correctAnswer.length; i += 1) {
          console.log(this.state.correctAnswer);
         let tempdistance = levenshteinDistance(this.state.correctAnswer[i].toLowerCase(), this.state.userInput.replace("’","'").replace("‘","'").toLowerCase());
         if (tempdistance < distance) distance = tempdistance;
      }
      if (distance == 0){
        this.setState({response: "You're correct! Press ENTER or 'Next Weed'!", streak: this.state.streak + 1});
      } else {
        this.setState({response: "You're "+distance+" characters away from being correct.",  streak: 0});
      }
    }
  }

  slideleft(event) {
    //console.log("Slide left");
    if(isNaN(parseInt(event.target.value))) return;
    let newmin = 0;
    if(event.target.value >= this.state.maxPlant) { newmin = this.state.maxPlant - 1; if(newmin < 1) newmin = 1;}
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
      currentPlant: plants[newplantlist[0]-1].bn,
      correctAnswer: plants[newplantlist[0]-1].cn,
      response: "",
      minPlant: newmin
    });

  }

  slideright(event) {
    //console.log("Slide right");
    if(isNaN(parseInt(event.target.value))) return;
    let newmax = 0;
    if(event.target.value <= this.state.minPlant) { newmax = this.state.minPlant + 1; if(newmax > totalPlants) newmax = totalPlants; }
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
      currentPlant: plants[newplantlist[0]-1].bn,
      correctAnswer: plants[newplantlist[0]-1].cn,
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
    if (event.key === "Enter" && this.state.response === "You're correct! Press ENTER or 'Next Weed'!") {
      //console.log("Do a new plant!");      
      this.newplant();
    } else if (event.key === "Enter") {      
      this.guess();
    } 
  }
  
  render() {
//                      // <img src={"weeds/"+plants[this.state.plantList[this.state.plantDex]-1].imgs[0]+".png"}/> 
    //console.log("Trying to render!");
    const answer = this.state.response;
    
    return (
      <div>
        <table><tr><td>
        <div className="question-container">
          <p className="prompt-label">What is the common name for this weed?</p>
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
            Next Weed!
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
            <div><p className="streak-label"> Select Weed Range to Quiz:</p></div>
            <div className="collection-container">


              <label htmlFor="leftnum">
                Oldest Weed: #<b>{this.state.minPlant}</b> 
                <input className="slidenum" id="leftnum" type="range"  list="tickmarks1" value={this.state.minPlant} max={totalPlants} min="1" step="1" onChange={(event)=>this.slideleft(event)} onInput={(event)=>this.slideleft(event)}/> 
              </label>

  <label htmlFor="rightnum">
     Newest Weed: #<b>{this.state.maxPlant}</b> <input className="slidenum" id="rightnum" type="range" value={this.state.maxPlant} max={totalPlants} min="0" step="1" onChange={(event)=>this.slideright(event)} onInput={(event)=>this.slideright(event)}/>
  </label>

            </div>
            <div><label htmlFor="hints">
                Show Botanical Name: <input className="checkbox" type="checkbox" id="hints" name="hints" checked={this.state.hints} onChange={this.handleHints}/> 
                </label>
            </div>
        </div>
        </div>
        </td><td>
            <div className="pic-container">

              <img src={"weeds/"+
              plants[this.state.plantList[this.state.plantDex]-1].imgs[Math.floor(Math.random() * (plants[this.state.plantList[this.state.plantDex]-1].imgs.length))]
              +".png"}/>
              <a href={plants[this.state.plantList[this.state.plantDex]-1].collectionurl} target="_blank">View Weed Information</a>
              <p className="streak-label">All photos are fair use as educational non-commercial use.</p>
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