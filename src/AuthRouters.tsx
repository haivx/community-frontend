import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { PageLayout } from './common/components'
import { LAYOUT } from './constants'
import { useAuth } from './common/hooks'

interface RouterProps {
  path?: string
  title?: string
  layout?: any
  permission?: any
  action?: any
  children?: ReactNode
}

export const PublicRouter = ({ children, title }: RouterProps) => {
  const auth = useAuth()
  if (auth.user) return <Navigate to="/admin" replace={true} />

  return  <PageLayout title={title}>{children}</PageLayout>
}

export const PrivateRouter: FC<RouterProps> = ({ title, children, layout = LAYOUT.PAGE_LAYOUT, permission, action = 'ACTIONS.VIEW' }) => {
  const auth = useAuth()
  const location = useLocation()
  if (!auth.user) return <Navigate to="/sign-in" state={{ from: location }} />

  let RenderLayout: JSX.Element = <div />;
  switch (layout) {
    case LAYOUT.ACCOUNT_LAYOUT:
      RenderLayout = (
        <PageLayout title={title}>
          {children}
        </PageLayout>
      )
      break
    default:
      RenderLayout = (
        <PageLayout title={title}>
          {children}
        </PageLayout>
      )
      break
  }

  return RenderLayout
}
