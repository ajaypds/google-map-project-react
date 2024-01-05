import './App.css'
// import MyMap from './MyMap'
import MyMap2 from './MyMap2'

function App() {


  return (
    <>
      <div className='map-component'>
        {/* <MyMap /> */}
        <MyMap2 center={{ lat: 23.29300, lng: 85.30000 }} zoom={16} />
        {/* <div className='testAnimate ping-animation'>

        </div> */}
      </div>
    </>
  )
}

export default App
