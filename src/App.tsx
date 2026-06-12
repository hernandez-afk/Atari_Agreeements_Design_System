import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import { AppHeader } from '@/pages/components/AppHeader'
import { PageSubHeader } from '@/pages/components/PageSubHeader'
import { AgreementsPage } from '@/pages/AgreementsPage'
import { FilesPage } from '@/pages/FilesPage'
import { SharedPage } from '@/pages/SharedPage'
import { TypePage } from '@/pages/TypePage'
import { CounterpartyPage } from '@/pages/CounterpartyPage'
import { TagsPage } from '@/pages/TagsPage'
import { FolderPage } from '@/pages/FolderPage'

// Layout with tab navigation
function AppLayout() {
  return (
    <div className="min-h-screen bg-surface-background flex flex-col">
      <AppHeader />
      <PageSubHeader />
      <Outlet />
    </div>
  )
}

// Layout without tab navigation (folder drill-down)
function BareLayout() {
  return (
    <div className="min-h-screen bg-surface-background flex flex-col">
      <AppHeader />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true,       element: <AgreementsPage /> },
      { path: 'files',     element: <FilesPage /> },
      { path: 'shared',    element: <SharedPage /> },
      { path: 'type',      element: <TypePage /> },
      { path: 'counterparty', element: <CounterpartyPage /> },
      { path: 'tags',      element: <TagsPage /> },
    ],
  },
  {
    element: <BareLayout />,
    children: [
      { path: 'folder/:id', element: <FolderPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
