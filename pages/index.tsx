import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUIs as ListUIs } from "src/graphql/queries";
import Protected from "components/Protected";
import UICard from "@/components/UICard";

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
            <UICard
              title={post.title}
              id={post.id}
              characterClass={post.characterClass}
              roles={post.roles}
              image={post.images[0]}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Protected(Index);
