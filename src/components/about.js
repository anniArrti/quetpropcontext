import React, {useContext} from 'react';
import noteContext from '../context/noteContext';
const About = () => {
  const a = useContext(noteContext)
  return (
    <>
      <h5>About Us</h5>
      <p>This is {a.state.value}</p>
      <p>This is {a.value}</p>
    </>
  )
}
export default About;