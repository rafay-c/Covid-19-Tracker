import React from "react";
import { Cards, Chart, Countries } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>COVID-19 Tracker</h1>
        <h5>Created utelizing <a href='https://github.com/mathdroid/covid-19-api'> mathdroid's API</a>  utelizing data from John Hopkins Univeristy (CSSE)</h5>
        <br />
        <br />
        <h1>Basic Safety Measures</h1>
        <ul>
          <li> <b>Wash your hands frequently:</b> Clean your hands thoroughly with hand sanitizer(>63% alcohol) or wash them with soap and water. </li>
          <li> <b>Practice social distancing:</b> Maintain at least 6 feet distance between yourself and anyone.</li>
          <li> <b>Avoid touching your eyes, nose and mouth:</b>  Hands touch many surfaces and can pick up many microbes. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</li>
          <li> <b>Practice respiratory hygiene:</b> Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</li>
          <li> <b>If you have fever, cough and difficulty breathing, seek medical care early:</b> Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</li>
          <li> <b>Stay informed and follow advice given by your healthcare provider:</b> Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.</li>
        </ul>
        Resources: <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'>American CDC</a> <a href='https://systems.jhu.edu/research/public-health/ncov/'>John Hopkins CSSE</a>
        <br />
        <br />
        <Cards data={this.state.data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
        <br />
        <br />
        <br />
        <h5>Created by Rafay Chaudhary with guidance from GitHub and JavaScript Documentation</h5>
      </div>
    );
  }
}

export default App;
