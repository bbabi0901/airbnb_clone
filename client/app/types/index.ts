// 서버 컴포넌트에서 클라이언트 컴포넌트로 데이터 이동시 데이트 타입 등에 의해 에러가 발생한다.
// 따라서 타입을 바꿔줄 필요가 있음. (이거는 actions 등에서 실행됨.)
// 여기서는 props에 타입 지정할때 쓸 타입을 정의해줘야함.
import { User, Listing, Reservation } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};
