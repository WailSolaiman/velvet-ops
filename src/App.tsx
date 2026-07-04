import { Routes, Route } from 'react-router-dom'

import { BackToTop } from '@/components/layout/back-to-top'
import { Home } from '@/pages/home'

function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <BackToTop />
    </div>
  )
}

export default App
