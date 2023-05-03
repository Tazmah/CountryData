import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Feed from "./Feed"
import SpecificCountry from "./SpecificCountry"
import { ThemeProviderWrapper } from "./ThemeProvider"


function App() {


  return (
    <ThemeProviderWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/country/:id" element={<SpecificCountry />} />
        </Route>
      </Routes>
    </ThemeProviderWrapper>
  )
}

export default App
