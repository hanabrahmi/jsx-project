import logo from './logo.svg';
import './App.css';
import './style.css';
import video from './video.mp4';
import imageInsrc from './imageInsrc.png';
function App() {
  return (
    <>
     <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
      <h1 className="title red">Your name here</h1>
      <br />
      <h4>image in src</h4>
      <img src={imageInsrc} alt="Image in src" className="image" />
      <br />
      <h4>image in public</h4>
      <img src="/imageInpublic.png" alt="Image in public" className="image" />
      <br />
      
      <video width="640" height="360" controls>
        <source src={video} type="video/mp4" />
        
      </video>
      
    </div>
    </>
  );
}

export default App;
