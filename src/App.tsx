import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainScreen from "./page/mainScreen"
import PostPage from "./page/postPage"
import Dashboard from "./page/dashBoard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
