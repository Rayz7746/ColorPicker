import React,{ useState, useEffect } from 'react'
import './App.css'

function App() {

  const [bgColor, setbgColor] = useState('#ffffff')
  const [textColor, setTextColor] = useState('#333')
  const colors = ['#ff00ff','#ff0000','#fec0cb','#00ff00','#0000ff','#00ffff']

  const getContrastColor = (hexColor) => {
    if (!hexColor) return '#333';
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    // http://www.w3.org/TR/AERT#color-contrast
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness > 128 ? '#333' : '#fff';
  };

  useEffect(() => {
    setTextColor(getContrastColor(bgColor));
  }, [bgColor]);

  const handleColor = (color) =>{
    setbgColor(color);
  }

  return (
    <div style={{backgroundColor:bgColor}} className='App'>
      <h1 style={{ color: textColor }}>color picker</h1>
      <div className='colorArray'>
        {colors.map( (color,index) => (
          <div key={index} style={{backgroundColor:color}} className='color-box' 
          onClick={() => handleColor(color)}></div>
        )
        )}
      </div>

      <div className='color-picker'>
        <input type="color" value={bgColor}
        onChange={(e) => handleColor(e.target.value)}/>
      </div>
    </div>
  )
}

export default App
