import { type auth } from "@/lib/auth";
type Session = typeof auth.$Infer.Session;

interface DashboardOverviewProps {
  session: Session;
}

const dashboardOverview = ({ session }: DashboardOverviewProps) => {
  return <div>this is dashboard overview</div>;
};

export default dashboardOverview;
