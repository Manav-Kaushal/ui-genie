import { SubscriptionEntitlementQuery } from "@/lib/convex/query.config";
import { navigation } from "@/lib/routes";
import { combinedSlug } from "@/lib/utils";
import { redirect } from "next/navigation";

const DashboardHomePage = async () => {
  const { entitlement, profileName } = await SubscriptionEntitlementQuery();

  if (!entitlement._valueJSON) {
    redirect(`${navigation.dashboard.home}/${combinedSlug(profileName!)}`);
  }

  redirect(`${navigation.dashboard.home}/${combinedSlug(profileName!)}`);
};

export default DashboardHomePage;
