import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Page() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return <div>Please sign in to view this page.</div>;
    }

    const user = await currentUser();

    return (
      <div>
        <h1>Welcome, {user?.firstName || 'User'}!</h1>
        <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>
        {/* Add user-specific data rendering here */}
      </div>
    );
  } catch (error) {
    console.error('Page Error:', error);
    return <div>Something went wrong. Please try again later.</div>;
  }
}
