import { FC, ReactNode } from "react";
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { PageLayout } from './common/components'
import { LAYOUT } from './constants';
import { useAuth } from './common/hooks';

interface RouterProps {
  path?: string;
  title?: string;
  layout?: any;
  permission?: any;
  action?: any;
  children?: ReactNode;
}

export const PublicRouter = ({ children, title }: RouterProps) => {
  const auth = useAuth();
  const location = useLocation();

  return !auth.user ? <PageLayout title={title}>{children}</PageLayout> : <Navigate to="/login" state={{ from: location }} replace />;
};

export const PrivateRouter: FC<RouterProps> = ({
  title,
  path,
  layout = LAYOUT.PAGE_LAYOUT,
  permission,
  action = "ACTIONS.VIEW",
}) => {

  let RenderLayout: JSX.Element;
  switch (layout) {
    case LAYOUT.ACCOUNT_LAYOUT:
      RenderLayout = <PageLayout title={title}><Outlet /></PageLayout>;
      break;
    default:
      RenderLayout = <PageLayout title={title}><Outlet /></PageLayout>;
      break;
  }

  return RenderLayout
};
