import React from 'react';

import {
	  BrowserRouter as Router,
	  Routes,
	  Route,
} from "react-router-dom";

import FileUploader from './components/fileUpload.js';
import InvalidUrl from './components/InvalidUrl.js';


function App(props) {
	  return (
		  <div className="App">
		  	<Router>
		      <Routes>
		        <Route exact path="/" element={<FileUploader/>}/>
		        <Route path="*" element={<InvalidUrl/>}/>
		      </Routes>
		  	</Router>
		  </div>
		    );
}

export default App;
