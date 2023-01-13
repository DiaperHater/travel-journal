import Header from './components/Header'
import Cards from './components/Cards'
import cardsData from './data'

export default function App() {


  return (
    <div>
      <Header icon="icon-globe.svg" title="my travel journal."/>
      <Cards data={cardsData}/>
    </div>
  )
}