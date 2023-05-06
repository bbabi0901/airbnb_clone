"use client";

import { useMemo } from "react";
import { Reservation } from "@prisma/client";

import { SafeUser, SafeListing } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  //   listing: SafeListing & { user: SafeUser };
  // 위는 getListingById 랑 app/types에 수정 필요
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  reservations = [],
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => {
      item.label === listing.category;
    });
  }, [listing.category]);
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
