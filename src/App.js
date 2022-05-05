import Title from './Components/Title';
import './App.css';
import Upload from './Components/upload';
import ImageGrid from './Components/ImageGrid';
import { useState } from 'react';
import Modal from './Components/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div className="App">
      <Title/>
      <Upload/>
      <ImageGrid setSelectedImage = {setSelectedImage}/>
      {selectedImage && <Modal selectedImage = {selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
