"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type Session = {
  user: {
    id: string;
    name: string;
  };
  //   accessToken: string;
  //   refreshToken: string;
};

const encodedKey = new TextEncoder().encode(process.env.SECRET_KEY);
export async function createSession(payload: Session) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  cookies().set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const sessionCookie = cookies().get("session")?.value;
  if (!sessionCookie) return null;
  try {
    const { payload } = await jwtVerify(sessionCookie, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as Session;
  } catch (error) {
    console.log(error);
    redirect("/auth/signin");
  }
}

export async function deleteSession() {
  await cookies().delete("session");
}
