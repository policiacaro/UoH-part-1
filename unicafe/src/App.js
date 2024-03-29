import './App.css';
import { useState } from 'react';


const Header = ({ text }) => <h1 className="center">{text}</h1>;

const Text = ({ type, text }) => <p className="center">{text}{type}</p>

const Button = ({ text, handleClick }) => <button className="spaceAround" onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = (props) => {
  if (props.stats.all === 0) {
    return (
      < Text text="No feedback given yet" />
    )
  }
    return (
    <table className="center">
      <tbody>
      < StatisticLine text="Good" value={props.stats.good} />
      < StatisticLine text="Neutral" value={props.stats.neutral} />
      < StatisticLine text="Bad" value={props.stats.bad} />
      < StatisticLine text="Total feedback" value={props.stats.all} />
    
      < StatisticLine text="Average percent of feedback" value={(props.stats.average).toPrecision(4)} />
      < StatisticLine text="Percent of positive feedback" value={((props.stats.positive * 100).toPrecision(4)) + "%"} />
      </tbody>
    </table>
    
    )
  
}

const App = () => {
  //Save clicks of each button to its own state
  const [stats, setStats] = useState({
    good: 0, neutral: 0, bad: 0, all: 0, average: 0, positive: 0
  });
  
let updatedGood = 0;
let updatedNeutral = 0;
let updatedBad = 0;
let updatedAll = 0;
  
  const handleGoodClick = () => {
    updatedGood = stats.good + 1;
    updatedNeutral = stats.neutral;
    updatedBad = stats.bad;
    updatedAll = (updatedGood + updatedNeutral + updatedBad);
    setStats({
      ...stats, 
      good: stats.good + 1,
      all: updatedAll,
      average: ((updatedGood)-updatedBad)/(updatedAll),
      positive: (updatedGood/updatedAll)
    });
  }
  const handleNeutralClick = () => {
    updatedGood = stats.good;
    updatedNeutral = stats.neutral + 1;
    updatedBad = stats.bad;
    updatedAll = (updatedGood + updatedNeutral + updatedBad);
    setStats({
      ...stats,
      neutral: updatedNeutral,
      all: updatedAll,
      average: ((updatedGood)-updatedBad)/(updatedAll),
      positive: (updatedGood/updatedAll)
    });
  }
  const handleBadClick = () => {
    updatedGood = stats.good;
    updatedNeutral = stats.neutral;
    updatedBad = stats.bad + 1;
    updatedAll = (updatedGood + updatedNeutral + updatedBad);
    setStats({
      ...stats,
      bad: updatedBad,
      all: updatedAll,
      average: ((updatedGood)-updatedBad)/(updatedAll),
      positive: (updatedGood/updatedAll)
    });
  }
  
  return (
    <div>
      < Header text="University of" />
      <div className="flexbox">
        <svg viewBox="0 20 329.3127441 143.4199524" width="200px" height="100px">
          <path d="M291.6929626,37.4918823v71.3209381c0,13.5752792-11.2046814,24.6202393-24.9774475,24.6202393H189.138031    c-9.1574554,0-17.8042603,3.3218231-24.5565033,9.3974152c-6.7506561-6.0740204-15.3990631-9.3974152-24.5565033-9.3974152    H62.2468987c-13.6618195,0-24.7768021-11.04496-24.7768021-24.6202393V37.4918823H291.6929626z M168.6209106,149.581131    c5.4807739-5.4595337,12.7672424-8.4666443,20.5171204-8.4666443h77.5774841    c18.0080566,0,32.659668-14.4910965,32.659668-32.3016663V29.8104496H29.7878723v79.0023727    c0,17.8105698,14.5611267,32.3016663,32.4590263,32.3016663h77.7781219c7.7498779,0,15.0363464,3.0071106,20.5155487,8.4658661    l4.0409546,4.0291443L168.6209106,149.581131z"/>
          <path d="M262.4124146,69.9492493c0,2.4044342-1.8812256,4.1290817-4.2848511,4.1290817    c-2.4044342,0-4.2856598-1.7246475-4.2856598-4.1290817c0-2.4036407,1.8812256-4.1282883,4.2856598-4.1282883    C260.531189,65.820961,262.4124146,67.5456085,262.4124146,69.9492493 M254.4170532,103.552269h7.4210205V77.2136841h-7.4210205    V103.552269z M240.0801544,87.6654053l9.6681061,15.8868637h-8.0480804l-6.4800262-10.556366l-3.5012054,4.442215v6.114151    h-7.3690643V65.7163162h7.3690643V83.171257c0,3.2399979-0.3658447,6.4800034-0.3658447,6.4800034h0.1565704    c0,0,1.7246399-2.8741455,3.1880493-4.9127197l5.6436462-7.5248566h8.6232452L240.0801544,87.6654053z M216.9021301,86.6724701    c0-6.5327148-3.1880798-10.0858612-8.25737-10.0858612c-4.3375702,0-6.5846405,2.5602188-7.8907166,4.964653h-0.1573639    l0.36586-4.3375778h-7.3682861v26.3385849h7.3682861V87.9266205c0-3.0307159,1.777359-5.1212234,4.5468597-5.1212234    c2.769516,0,3.9717255,1.8292923,3.9717255,5.3305054v15.4163666h7.4210052V86.6724701z M186.4281769,69.9492493    c0,2.4044342-1.8812256,4.1290817-4.2856598,4.1290817c-2.4036255,0-4.2848511-1.7246475-4.2848511-4.1290817    c0-2.4036407,1.8812256-4.1282883,4.2848511-4.1282883C184.5469513,65.820961,186.4281769,67.5456085,186.4281769,69.9492493     M178.4320374,103.552269h7.42099V77.2136841h-7.42099V103.552269z M165.0259094,96.2359085    c0-2.0904999-2.9268494-2.5610046-6.3234253-3.5012131c-3.9717255-1.0456467-8.9363708-3.0315018-8.9363708-8.0480804    c0-4.9646454,4.7553711-8.1000061,10.3997955-8.1000061c5.2258606,0,10.0339355,2.5082932,12.0717163,6.0095062    l-6.3234253,3.5539246c-0.6270752-2.3517075-2.6129303-4.1809921-5.4870758-4.1809921    c-1.8812256,0-3.449295,0.8363495-3.449295,2.3517075c0,1.9858627,3.449295,2.1951523,7.3683014,3.449295    c4.1290741,1.3060684,7.8914948,3.1880646,7.8914948,7.9953537c0,5.2785721-4.9127197,8.4139328-10.6090698,8.4139328    c-6.1660767,0-11.0260773-2.6129303-13.1692963-6.7939224l6.4280701-3.6058655    c0.8363647,2.8741455,3.1353607,5.0173645,6.6373749,5.0173645    C163.5624847,98.7969131,165.0259094,97.9086227,165.0259094,96.2359085 M140.6629639,65.9775314h-7.4210052v30.3103027    c0,2.7175751,0.5830078,4.6955643,1.7505951,5.9316101c1.1668091,1.2376175,3.0220642,1.8552551,5.5657501,1.8552551    c0.8701935,0,1.7584839-0.095993,2.6648712-0.287178c0.9055939-0.1919785,1.6372986-0.4610596,2.1951447-0.8104019    l0.6270599-4.9646378c-0.5924377,0.2092819-1.1062164,0.3579865-1.5413208,0.4445343    c-0.4366608,0.0873337-0.949646,0.1306076-1.542099,0.1306076c-0.9756165,0-1.3847504-0.2431183-1.7506104-0.7317123    c-0.36586-0.48703-0.5483856-1.3587875-0.5483856-2.6129303V65.9775314z M115.4770279,81.9171143    c-2.7175751,0-4.9127197,1.9331436-5.4870834,5.5390015h10.3990097    C120.3889542,84.2688293,118.3511658,81.9171143,115.4770279,81.9171143 M126.8697433,92.3688354h-17.0371552    c0.3139343,4.2856445,2.7175751,6.3753586,5.8010025,6.3753586c2.7695007,0,4.6515045-1.8284988,5.0692902-4.3375702    l6.2187881,3.5019989c-1.8292847,3.3446503-5.8010025,6.2707138-11.2880783,6.2707138    c-7.3682861,0-12.751503-5.1212082-12.751503-13.7963562c0-8.5705109,5.4878616-13.7963715,12.5949402-13.7963715    c7.0551376,0,11.7585754,5.0165787,11.7585754,12.1763611C127.2356033,90.9054108,126.8697433,92.3688354,126.8697433,92.3688354     M89.3508759,103.552269h7.6822128V67.3890305h-7.6822128v14.3188019h-14.423439V67.3890305h-7.6822205v36.1632385h7.6822205    V88.553688h14.423439V103.552269z"/>
        </svg>
      </div>
      < Header text="Cafe Feedback" />
      < Text text="Please rate our cafe by clicking one of the buttons!" />
      <div className="flexbox">
      </div>
      <div className="flexbox">
        < Button text="Good" handleClick={handleGoodClick} />
        < Button text="Neutral" handleClick={handleNeutralClick} />
        < Button text="Bad" handleClick={handleBadClick} />
      </div>
      < Header text="Current Feedback Statistics" />
      < Statistics stats={stats} />
    </div>
  )
}

export default App;
