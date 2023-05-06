"use client";

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";

interface ListingClientProps {
  reservations?: Reservation[];
  listing?: Listing & { user: SafeUser };
  //   listing: SafeListing & { user: SafeUser };
  // 위는 getListingById 랑 app/types에 수정 필요
  currentUser: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  reservations,
  listing,
  currentUser,
}) => {
  return <div></div>;
};

export default ListingClient;
