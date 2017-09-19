import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
// import promise from 'promise';

const DataTable = (props) => {
  return(
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.city}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}

let data = [
    {
        "fname": "Rakesh",
        "lname": "Taverna",
        "city": "Westwood"
    },
    {
        "fname": "Timothy",
        "lname": "Arias",
        "city": "Chambersburg"
    },
    {
        "fname": "Renita",
        "lname": "Shapiro",
        "city": "Gettysburg"
    },
    {
        "fname": "Esperanza",
        "lname": "Gerhard",
        "city": "Woodlawn"
    },
    {
        "fname": "Nirmal",
        "lname": "Rehnke",
        "city": "Lakewood"
    },
    {
        "fname": "Miyanda",
        "lname": "Burrs",
        "city": "Blacksburg"
    },
    {
        "fname": "Teresa",
        "lname": "Imholtz",
        "city": "Elizabethton"
    },
    {
        "fname": "Francesca",
        "lname": "Borrego",
        "city": "Hillsboro"
    },
    {
        "fname": "Arnitra",
        "lname": "Almanza",
        "city": "Warsaw"
    },
    {
        "fname": "Kadie",
        "lname": "Bert",
        "city": "New Millport"
    },
    {
        "fname": "Adreta",
        "lname": "Lallemont",
        "city": "Beltsville"
    },
    {
        "fname": "Maureen",
        "lname": "Meaney",
        "city": "Bellefonte"
    },
    {
        "fname": "Kenyatta",
        "lname": "Suchland",
        "city": "Covington"
    },
    {
        "fname": "Maki",
        "lname": "Bamommy",
        "city": "Waterford"
    },
    {
        "fname": "Whitney",
        "lname": "Millegan",
        "city": "Woodlawn"
    },
    {
        "fname": "Atif",
        "lname": "Eschenbacher",
        "city": "Columbia"
    },
    {
        "fname": "Shihong",
        "lname": "Hencmann",
        "city": "Chambersburg"
    },
    {
        "fname": "Eden",
        "lname": "Dewolfe",
        "city": "York"
    },
    {
        "fname": "Janice",
        "lname": "Gunn",
        "city": "Denton"
    },
    {
        "fname": "Melissa",
        "lname": "Shiffman",
        "city": "Central Valley"
    },
    {
        "fname": "Esmeralda",
        "lname": "Krugel",
        "city": "Winona Lake"
    },
    {
        "fname": "Renardo",
        "lname": "Ortega",
        "city": "Eagle Pass"
    },
    {
        "fname": "Rupa",
        "lname": "Wyatt",
        "city": "San Francisco"
    },
    {
        "fname": "Edith",
        "lname": "Hathcock",
        "city": "Hattiesburg"
    },
    {
        "fname": "Nichelle",
        "lname": "Bettencourt",
        "city": "Faribault"
    },
    {
        "fname": "Ira",
        "lname": "Shauna",
        "city": "Montreal"
    },
    {
        "fname": "Seth",
        "lname": "Flanagan",
        "city": "Thomaston"
    },
    {
        "fname": "Marcus",
        "lname": "Arivett",
        "city": "Modesto"
    },
    {
        "fname": "Felix",
        "lname": "Haynes",
        "city": "El Dorado"
    },
    {
        "fname": "Raymond",
        "lname": "Hancock",
        "city": "Guelph"
    },
    {
        "fname": "Richelle",
        "lname": "Gage",
        "city": "Tinley Park"
    },
    {
        "fname": "Cynthia",
        "lname": "Tupper",
        "city": "Zionsville"
    },
    {
        "fname": "Chassaing",
        "lname": "Franklin",
        "city": "Berlin"
    },
    {
        "fname": "Trinelveli",
        "lname": "Laventure",
        "city": "Ogden"
    },
    {
        "fname": "Lyubov",
        "lname": "Blankenship",
        "city": "Riverview"
    },
    {
        "fname": "Lynn",
        "lname": "Ptacek",
        "city": "Roanoke"
    },
    {
        "fname": "KaShaun",
        "lname": "Sobel",
        "city": "Bessemer City"
    },
    {
        "fname": "Sherrell",
        "lname": "Popsikle",
        "city": "Concord"
    },
    {
        "fname": "Twyonna",
        "lname": "Salter",
        "city": "Sacramento"
    },
    {
        "fname": "Jeri",
        "lname": "Stroll",
        "city": "Rural"
    },
    {
        "fname": "Jerome",
        "lname": "Kleb",
        "city": "South Denver"
    },
    {
        "fname": "Anli",
        "lname": "Mathis",
        "city": "El Paso"
    },
    {
        "fname": "Jaime",
        "lname": "Najanick",
        "city": "Fort Myers"
    },
    {
        "fname": "Vivian",
        "lname": "Paluszek",
        "city": "Moreno Valley"
    },
    {
        "fname": "Terry",
        "lname": "Caffrey",
        "city": "Chester Springs"
    },
    {
        "fname": "Shelly",
        "lname": "Seymour",
        "city": "Bridgewater"
    },
    {
        "fname": "Lucious",
        "lname": "Tubbytelly",
        "city": "Vacaville"
    },
    {
        "fname": "Hanne",
        "lname": "Lewis",
        "city": "Winamac"
    },
    {
        "fname": "Kasey",
        "lname": "Siflinger",
        "city": "Rogersville"
    },
    {
        "fname": "Ilona",
        "lname": "Bommi",
        "city": "Issaquah"
    },
    {
        "fname": "Janine",
        "lname": "Altar",
        "city": "Kyle"
    },
    {
        "fname": "Gill",
        "lname": "Cahill",
        "city": "Fort Wayne"
    },
    {
        "fname": "Phyllis",
        "lname": "Ruback",
        "city": "Honolulu"
    },
    {
        "fname": "Adreta",
        "lname": "Cripps",
        "city": "Orlando"
    },
    {
        "fname": "LaJeania",
        "lname": "Bonita",
        "city": "Huntsville"
    },
    {
        "fname": "Takisha",
        "lname": "Kerkemeyer",
        "city": "Whitman"
    },
    {
        "fname": "Verlinda",
        "lname": "Kehr",
        "city": "Richmond"
    },
    {
        "fname": "John",
        "lname": "Komppa",
        "city": "Pleasant Grove"
    },
    {
        "fname": "Ayanna",
        "lname": "Dixon",
        "city": "Salt Lake City"
    },
    {
        "fname": "Esther",
        "lname": "Bachmeier",
        "city": "Massillon"
    },
    {
        "fname": "Maxime",
        "lname": "Madjid",
        "city": "Rexburg"
    },
    {
        "fname": "Bridgette",
        "lname": "Antunes",
        "city": "Billerica"
    },
    {
        "fname": "Lidia",
        "lname": "Gardenhour",
        "city": "Winchester"
    },
    {
        "fname": "Steven",
        "lname": "Davis",
        "city": "Santa Clarita"
    },
    {
        "fname": "Jeremiah",
        "lname": "Halligan",
        "city": "Lacey"
    },
    {
        "fname": "Elba",
        "lname": "Paluszek",
        "city": "Williamstown"
    },
    {
        "fname": "Susen",
        "lname": "Brittin",
        "city": "Albuquerque"
    },
    {
        "fname": "Romeo",
        "lname": "Linville",
        "city": "Lockport"
    },
    {
        "fname": "Robbin",
        "lname": "Mcdonald",
        "city": "Conehatta"
    },
    {
        "fname": "Gene",
        "lname": "Koehn",
        "city": "Fargo"
    },
    {
        "fname": "Stephen",
        "lname": "Buikema",
        "city": "Ogden"
    },
    {
        "fname": "Gabriela",
        "lname": "Culaciati",
        "city": "Liberty"
    },
    {
        "fname": "Kevin",
        "lname": "Anderes",
        "city": "Rogersville"
    },
    {
        "fname": "Yong",
        "lname": "Allshouse",
        "city": "Grand Rapids"
    },
    {
        "fname": "Shivkumar",
        "lname": "Platt",
        "city": "Lafayette"
    },
    {
        "fname": "Barbara",
        "lname": "Oliver",
        "city": "Indy"
    },
    {
        "fname": "Shaneka",
        "lname": "Ekekwe",
        "city": "Jackson Heights"
    },
    {
        "fname": "KaShaun",
        "lname": "Hoepner",
        "city": "Strongsville"
    },
    {
        "fname": "Svetlana",
        "lname": "Halligan",
        "city": "Chester Springs"
    },
    {
        "fname": "Val",
        "lname": "Marashi",
        "city": "Ft Myers"
    },
    {
        "fname": "Jody",
        "lname": "Landau",
        "city": "Rolling Meadows"
    },
    {
        "fname": "Janice",
        "lname": "Peacock",
        "city": "Mount Morris"
    },
    {
        "fname": "Theresia",
        "lname": "Houston",
        "city": "Clearwater"
    },
    {
        "fname": "Lawrence",
        "lname": "Mcdow",
        "city": "Greensboro"
    },
    {
        "fname": "Sally",
        "lname": "Collier",
        "city": "State College"
    },
    {
        "fname": "Jacalyn",
        "lname": "Goodwin",
        "city": "Charlotte"
    },
    {
        "fname": "Karl",
        "lname": "Buikema",
        "city": "Santa Clarita"
    },
    {
        "fname": "Allen",
        "lname": "Mcdow",
        "city": "Killeen"
    },
    {
        "fname": "Toni",
        "lname": "Primavera",
        "city": "The Woodlands"
    },
    {
        "fname": "Roseline",
        "lname": "Clagg",
        "city": "Big Bear"
    },
    {
        "fname": "Angelique",
        "lname": "Gray",
        "city": "Blue Springs"
    },
    {
        "fname": "Marcedia",
        "lname": "Jouglard",
        "city": "Semarang"
    },
    {
        "fname": "Mihai",
        "lname": "Sweet",
        "city": "Sioux Falls"
    },
    {
        "fname": "Halina",
        "lname": "Sundell",
        "city": "Arvada"
    },
    {
        "fname": "Xin",
        "lname": "Zanatta",
        "city": "Elizabethton"
    },
    {
        "fname": "Marcellous",
        "lname": "Powers",
        "city": "Mcdonough"
    },
    {
        "fname": "Minnita",
        "lname": "Garner",
        "city": "Albany"
    },
    {
        "fname": "Tanita",
        "lname": "Blankenship",
        "city": "Birmingham"
    },
    {
        "fname": "Coty",
        "lname": "Gladue",
        "city": "Riverview"
    },
    {
        "fname": "Linnette",
        "lname": "Doll",
        "city": "Carolina Beach"
    }
]

const Table = (props) => {
  return(
    <div>
      {props.cards.map(card => <DataTable { ...card }/>)}
    </div>
  )
}

// class HandleAxiosGet extends Component {
//   handleSubmit = (event) => {
//     axios.get("http://www.filltext.com/?rows=100&fname=%7BfirstName%7D&lname=%7BlastName%7D&city=%7Bcity%7D&pretty=true")
//       .then((response) => {
//         console.log(response);
//       })
//   };
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          React Web App
        </p>
        <Table cards={data} />
      </div>
    );
  }
}

export default App;
