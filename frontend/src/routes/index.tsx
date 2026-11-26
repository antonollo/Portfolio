import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/HomePage'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
