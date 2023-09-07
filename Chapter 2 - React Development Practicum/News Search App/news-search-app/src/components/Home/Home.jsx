import { useState } from "react";

import Grid from "@mui/material/Grid";
import Header from "../Header/Header";

import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import DisplayResults from "../display-results/DisplayResults";

function App() {
  const [keyword, setKeyword] = useState("");

  function handleSetKeyword(e) {
    setKeyword(e.target.value);
  }

  // TODO: store the search result
  const [searchResult, setSearchResult] = useState([]);

  // TODO: get from local storage and store in this state
  const [myFavourites, setMyFavourites] = useState([]);

  function clearMyFavourites() {
    // Clear the favourite state and the local storage
  }

  return (
    <Grid container direction="column">
      <Grid item lg={1} style={{ maxHeight: "10vh" }}>
        <Header keyword={keyword} handleSetKeyword={handleSetKeyword} />
      </Grid>

      <Grid item lg={11} className="content-container">
        <Grid container direction="row" style={{ height: "100%" }}>
          <Grid item className="left-panel-container" lg={2.5}>
            <MyFavouritesPanel
              style={{ overflowY: "scroll" }}
              handleSetKeyword={handleSetKeyword}
              myFavourites={myFavourites}
              clearMyFavourites={clearMyFavourites}
            />
          </Grid>
          <Grid item className="right-panel-container" lg={9.5}>
            <DisplayResults keyword={keyword} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
