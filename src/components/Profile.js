import PropTypes, { string } from 'prop-types';
const Profile =({fullName,bio,profession,handleNAlert,children}) =>{
  return(
      <div>
          {
                children
            }
      <h3 style={{color : 'red', textDecoration :'underline'}}>My name is {fullName}</h3>
      <h3>{bio}</h3>
      <h4>I'm an {profession}</h4>
      <button onClick={()=>handleNAlert(fullName)}>Click</button>

      </div>
      )
}

Profile.defaultProps={
    fullName : 'assad yahyawi',
    bio : 'I am a developper full stack js',
    profession : 'go my code',
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : string,
 }
 
export default Profile