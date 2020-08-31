import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";

const posts = [
  {
    id: 1,
    image:
      "https://media.wago.io/screenshots/SJ39l2nif/5c12b8523f1bba608f2d980a.jpg",
    title: "My Mage UI",
    class: "Mage",
    roles: ["DPS"],
    description:
      "This is my mage ui for shadowlands, copy the ui string and enjoy!",
  },
  {
    id: 2,
    image:
      "https://media.wago.io/screenshots/SJ39l2nif/5c12b8523f1bba608f2d980a.jpg",
    title: "My Mage UI",
    class: "Mage",
    roles: ["DPS"],
    description:
      "This is my mage ui for shadowlands, copy the ui string and enjoy!",
  },
  {
    id: 3,
    image:
      "https://media.wago.io/screenshots/SJ39l2nif/5c12b8523f1bba608f2d980a.jpg",
    title: "My Mage UI",
    class: "Mage",
    roles: ["HEALER"],
    description:
      "This is my mage ui for shadowlands, copy the ui string and enjoy!",
  },
  {
    id: 4,
    image:
      "https://media.wago.io/screenshots/SJ39l2nif/5c12b8523f1bba608f2d980a.jpg",
    title: "My Mage UI",
    class: "Mage",
    roles: ["DPS"],
    description:
      "This is my mage ui for shadowlands, copy the ui string and enjoy!",
  },
  {
    id: 5,
    image:
      "https://media.wago.io/screenshots/SJ39l2nif/5c12b8523f1bba608f2d980a.jpg",
    title: "My Mage UI",
    class: "Mage",
    roles: ["DPS"],
    description:
      "This is my mage ui for shadowlands, copy the ui string and enjoy!",
  },
  {
    id: 6,
    image:
      "https://media.wago.io/screenshots/SJ39l2nif/5c12b8523f1bba608f2d980a.jpg",
    title: "My Mage UI",
    class: "Mage",
    roles: ["TANK"],
    description:
      "This is my mage ui for shadowlands, copy the ui string and enjoy!",
  },
];

const Index = () => (
  <Layout title="Home">
    <Navbar />
    <div className="flex flex-col mt-10 py-4 lg:py-0 px-5 lg:px-10">
      <div className="flex space-x-3 mb-3 hidden">
        <select className="w-auto form-select">
          <option value="" disabled selected>
            Filter by class
          </option>
          <option value="MAGE">MAGE</option>
          <option value="DRUID">DRUID</option>
          <option value="MONK">MONK</option>
          <option value="PRIEST">PRIEST</option>
          <option value="HUNTER">HUNTER</option>
          <option value="DEATH KNIGHT">DEATH KNIGHT</option>
          <option value="WARRIOR">WARRIOR</option>
          <option value="DEMON HUNTER">DEMON HUNTER</option>
          <option value="WARLOCK">WARLOCK</option>
          <option value="SHAMAN">SHAMAN</option>
          <option value="ROGUE">ROGUE</option>
          <option value="PALADIN">PALADIN</option>
        </select>
        <select className="w-auto form-select">
          <option value="" disabled selected>
            Filter by role
          </option>
          <option value="DPS">DPS</option>
          <option value="TANK">TANK</option>
          <option value="HEALER">HEALER</option>
        </select>
      </div>
      <div className="grid gap-x-10 gap-y-5 lg:gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full hover:bg-gray-200 p-3 rounded duration-150 cursor-pointer"
          >
            <img
              src={post.image}
              alt="ElvUI player interface"
              className="mb-3 w-full rounded-md"
            />
            <p className="text-xl md:text-2xl font-semibold mb-3">
              {post.title}
            </p>
            <div className="space-x-2 font-bold text-sm">
              <span className="inline-block bg-blue-300 py-1 px-3 rounded text-blue-900 uppercase">
                {post.class}
              </span>
              {post.roles.map((role) =>
                role === "DPS" ? (
                  <span className="inline-block bg-red-300 text-red-900 py-1 px-3 rounded">
                    {role}
                  </span>
                ) : role === "TANK" ? (
                  <span className="inline-block bg-gray-300 text-gray-900 py-1 px-3 rounded">
                    {role}
                  </span>
                ) : role === "HEALER" ? (
                  <span className="inline-block bg-green-300 text-green-900 py-1 px-3 rounded">
                    {role}
                  </span>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Index;
