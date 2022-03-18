import React, { FC } from "react";
import { GetStaticProps } from "next";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import About from './components/About'

type User = {
  id: number;
  name: string;
}

type Props = {
  users: User[];
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <h2>Userの一覧</h2>
      <table>
	{props.users.map((user) =>
	  <tr>
	    <td>{user.id}.</td>
	    <td>{user.name}</td>
	  </tr>
        )}
      </table>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("http://api:3000/users", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      users: json
    },
  };
}

export default Home;
