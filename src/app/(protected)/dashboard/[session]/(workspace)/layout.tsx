import { SubscriptionEntitlementQuery } from "@/lib/convex/query.config";
import Navbar from "../../_components/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  const { entitlement, profileName } = await SubscriptionEntitlementQuery();

  // if (!entitlement._valueJSON) {
  //   redirect(`${navigation.dashboard.home}/${combinedSlug(profileName!)}`);
  // }

  return (
    <div className="grid grid-cols-1">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
