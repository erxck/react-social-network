import Layout from "./layout/Layout";
import Feed from "./components/Feed";
import FeedProfile from "./components/FeedProfile";
import FeedNewFriends from "./components/FeedNewFriends";

export default function App(): JSX.Element {
  return (
    <Layout>
      <div className="flex justify-center py-20 px-4">
        <div className="w-full max-w-6xl md:flex md:justify-between md:gap-6">
          {/* Profile Information */}
          <FeedProfile />

          {/* Feed */}
          <Feed />

          {/* New Friends */}
          <FeedNewFriends />
        </div>
      </div>
    </Layout>
  );
}
