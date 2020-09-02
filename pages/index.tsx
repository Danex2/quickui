import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUIs as ListUIs, listUIs } from "src/graphql/queries";

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
    roles: ["DPS", "TANK", "HEALER"],
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

const Index = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getUIList();
  }, []);

  async function getUIList() {
    const uiData = await API.graphql(graphqlOperation(ListUIs));
    setData(uiData.data.listUIs.items);
  }

  return (
    <Layout title="Home">
      <Navbar />
      <div className="flex flex-col px-2 py-4 mt-10 lg:py-0 lg:px-10">
        <div className="flex hidden mb-3 space-x-3">
          <select className="w-auto form-select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
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
          <select className="w-auto form-select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Filter by role
            </option>
            <option value="DPS">DPS</option>
            <option value="TANK">TANK</option>
            <option value="HEALER">HEALER</option>
          </select>
        </div>
        <div className="grid gap-x-10 gap-y-5 lg:gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((post) => (
            <div
              key={post.id}
              className="flex flex-col w-full p-3 duration-150 rounded cursor-pointer hover:bg-gray-200"
            >
              <img
                src={post.images[0]}
                alt="ElvUI player interface"
                className="object-fill w-full h-full mb-3 rounded-md"
              />
              <div className="mt-auto">
                <p className="mb-3 text-xl font-semibold md:text-2xl">
                  {post.title}
                </p>
                <div className="space-x-2 text-sm font-bold">
                  <span className="inline-block px-3 py-1 text-blue-900 uppercase bg-blue-300 rounded">
                    {post.characterClass}
                  </span>
                  {post.roles.map((role) => (
                    <span key={role}>
                      {role === "DPS" ? (
                        <span className="inline-block px-3 py-1 text-red-900 bg-red-300 rounded">
                          {role}
                        </span>
                      ) : role === "TANK" ? (
                        <span className="inline-block px-3 py-1 text-gray-900 bg-gray-300 rounded">
                          {role}
                        </span>
                      ) : role === "HEALER" ? (
                        <span className="inline-block px-3 py-1 text-green-900 bg-green-300 rounded">
                          {role}
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
