import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUIs, listUIs as ListUIs } from "src/graphql/queries";
import Protected from "components/Protected";
import UICard from "@/components/UICard";
import Select from "@/components/Select";

const Index = () => {
  const [UIList, setUIList] = React.useState([]);

  React.useEffect(() => {
    getUIList();
  }, []);

  async function getUIList() {
    const uiData: any = await API.graphql(graphqlOperation(ListUIs));
    setUIList(uiData.data?.listUIs.items);
  }

  return (
    <Layout title="Home">
      <Navbar />
      <div className="flex flex-col px-2 py-4 mt-10 lg:py-0 lg:px-10">
        <div className="flex px-3 mb-3 space-x-3">
          <Select
            onChange={async (e) => {
              const uiFilteredByClass: any = await API.graphql(
                graphqlOperation(listUIs, {
                  filter: { characterClass: { eq: e.target.value } },
                })
              );
              setUIList(uiFilteredByClass.data?.listUIs.items);
            }}
            disabledOption="Filter by class"
            options={[
              "MAGE",
              "DRUID",
              "PRIEST",
              "HUNTER",
              "DEATH KNIGHT",
              "WARRIOR",
              "DEMON HUNTER",
              "WARLOCK",
              "SHAMAN",
              "ROGUE",
              "PALADIN",
            ]}
          />
          <Select
            onChange={async (e) => {
              const uiFilteredByRole: any = await API.graphql(
                graphqlOperation(listUIs, {
                  filter: { roles: { contains: e.target.value } },
                })
              );
              setUIList(uiFilteredByRole.data?.listUIs.items);
            }}
            disabledOption="Filter by role"
            options={["DPS", "TANK", "HEALER"]}
          />
          <button
            className="px-5 text-sm font-bold text-white uppercase duration-150 bg-gray-900 rounded hover:bg-gray-700"
            onClick={() => getUIList()}
          >
            reset
          </button>
        </div>
        <div className="grid pb-5 gap-x-10 gap-y-5 lg:gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
          {UIList.map((post) => (
            <UICard
              key={post.id}
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
