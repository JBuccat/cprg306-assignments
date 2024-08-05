"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <header>
        <h1 className="text-3xl">Login Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>Welcome {user.displayName}</p>
            <p>Your user ID is: {user.uid}</p>
            <img className="w-8 h-8" src={user.photoURL} />
            <Link href="/week-10/shopping-list/">Shopping List</Link>
            <br />
            <button onClick={handleSignOut} className="text-lg m-2 hover:underline">
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button onClick={handleSignIn} className="text-lg m-2 hover:underline">
              Sign In
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
