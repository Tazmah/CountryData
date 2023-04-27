import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Feed from "./Feed"
import SpecificCountry from "./SpecificCountry"
import SearchFeed from "./SearchFeed"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="/search/:id" element={<SearchFeed />} />
        <Route path="/country/:id" element={<SpecificCountry />} />
      </Route>
    </Routes>
  )
}

export default App
