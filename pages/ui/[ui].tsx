import Layout from "@/components/Layout";
import React from "react";
import Navbar from "@/components/Navbar";
import { getUi as GetUI } from "src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useRouter } from "next/router";
import ClassTag from "@/components/ClassTag";

export default function UI() {
  const router = useRouter();

  const [data, setData] = React.useState<{
    id: string;
    images: string[];
    title: string;
    characterClass: string;
    description: string;
    roles: string[];
    code: string;
  }>({
    id: "",
    images: [],
    title: "",
    characterClass: "",
    description: "",
    code: "",
    roles: [],
  });

  const [copied, setCopied] = React.useState<boolean>(false);

  async function getUIData() {
    try {
      const uiData = await API.graphql(
        graphqlOperation(GetUI, { id: router.query?.ui })
      );

      setData(uiData.data?.getUI);
    } catch (e) {}
  }

  React.useEffect(() => {
    getUIData();
  }, [router.query?.ui]);

  return (
    <Layout title={data.title}>
      <Navbar />
      <div className="flex justify-center p-3 mt-20">
        {data && (
          <div
            key={data?.id}
            className="flex flex-col w-full p-3 duration-150 rounded lg:w-1/2"
          >
            <img
              src={data?.images[0]}
              alt="ElvUI player interface"
              className="object-fill w-full mb-3 rounded-md"
              height="485"
              width="776"
            />
            <div className="mt-auto">
              <p className="mb-3 text-xl font-semibold md:text-2xl">
                {data?.title}
              </p>
              <div className="flex text-sm font-bold">
                <ClassTag characterClass={data?.characterClass} />
                {data?.roles.map((role) => (
                  <div key={role}>
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
                  </div>
                ))}
                <span
                  className="px-3 py-1 ml-auto text-white uppercase duration-150 bg-gray-800 rounded cursor-pointer hover:bg-gray-700"
                  onClick={() =>
                    navigator.clipboard
                      .writeText(data?.code)
                      .then(() => setCopied(!copied))
                      .then(() =>
                        setTimeout(() => {
                          setCopied(false);
                        }, 2000)
                      )
                  }
                >
                  {copied ? "copied to clipboard!" : "copy elvui import string"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
