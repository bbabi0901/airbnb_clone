import getCurrentUser from "./actions/getCurrentUser";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { SafeUser } from "./types";

// Home is server component.
// Thus, we can call DB directly without api call using axios.
export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid
            grid-cols-1
            sm:grid-col-2
            md:grid-col-3
            lg:grid-col-4
            xl:grid-col-5
            2xl:grid-col-6
            gap-8
          "
        >
          {listings.map((listing: any) => {
            return (
              <ListingCard
                currentUser={currentUser as SafeUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
