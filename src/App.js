import './App.css'
import Component from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="bg-container">
    <div className="center-container">
      <h1>Learn 4.0 Technologies</h1>
      <p>
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm etc.. Learn directly from professionals involved
        in Product Development.
      </p>
    </div>
    <ul className="list-prop">
      <div>
        <li className={cardsList[0].className}>
          <Component value={cardsList[0]} key={cardsList[0].id} />
        </li>
        <li className={cardsList[1].className}>
          <Component value={cardsList[1]} key={cardsList[1].id} />
        </li>
      </div>
      <div>
        <li className={cardsList[2].className}>
          <Component value={cardsList[2]} key={cardsList[2].id} />
        </li>
        <li className={cardsList[3].className}>
          <Component value={cardsList[3]} key={cardsList[3].id} />
        </li>
      </div>
    </ul>
  </div>
)

export default App
