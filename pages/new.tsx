import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";

export default function New() {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    router.push("/");
  }

  const onSubmit = (data) => console.log(data);

  return (
    <Layout title="Create a new UI Post">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-20">
        <form className="flex flex-col p-3" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            rows={10}
            placeholder="Enter a description about your UI setup"
            className="mb-3 resize-none form-textarea"
            ref={register}
            required
            name="description"
          />
          <div className="mb-3 space-y-3">
            <select
              className="w-full form-select"
              ref={register}
              required
              name="class"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select a class
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
            <select
              className="w-full form-select"
              ref={register}
              required
              name="role"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Select a role
              </option>
              <option value="DPS">DPS</option>
              <option value="TANK">TANK</option>
              <option value="HEALER">HEALER</option>
            </select>
            <input
              type="file"
              className="w-full form-input"
              multiple
              name="images"
            />
            <textarea
              rows={10}
              placeholder="ElvUI import string"
              className="w-full mb-3 resize-none form-textarea"
              ref={register}
              required
              name="code"
            />
          </div>
          <button className="w-1/3 py-3 font-bold text-white duration-150 bg-gray-900 rounded hover:bg-gray-800">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
