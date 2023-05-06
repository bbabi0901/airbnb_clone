// this is server component that calls getListingId()
// So we can not use hooks, router but we can use actions

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingId from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import { SafeUser } from "@/app/types";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingId(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
