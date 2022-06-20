import './App.css';
import Profile from './components/Profile' ;
 
function App() {
  var fullName = 'assad yahyawi'
  var bio = 'I am a developper full stack js'
  var profession ='go my code'
  const handleNAlert=(a)=>{
    return alert(`Hello ${a}`)
  }
  return (
    <div>
     <h1> Profile assad</h1>
     <Profile fullName={fullName} bio={bio}  profession={profession} handleNAlert={handleNAlert}>
     
     </Profile>
   </div>
  );
}

export default App;
