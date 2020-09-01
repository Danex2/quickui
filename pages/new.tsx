import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";

export default function New() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Layout title="Create a new UI Post">
      <Navbar />
      <div className="mt-20 max-w-6xl mx-auto">
        <form className="flex flex-col p-3" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            rows={10}
            placeholder="Enter a description about your UI setup"
            className="form-textarea resize-none mb-3"
            ref={register}
            required
          />
          <div className="space-y-3 mb-3">
            <select className="w-full form-select" ref={register} required>
              <option value="" disabled selected>
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
            <select className="w-full form-select" ref={register} required>
              <option value="" disabled selected>
                Select a role
              </option>
              <option value="DPS">DPS</option>
              <option value="TANK">TANK</option>
              <option value="HEALER">HEALER</option>
            </select>
            <input type="file" className="form-input w-full" multiple />
            <textarea
              rows={10}
              placeholder="ElvUI import string"
              className="form-textarea resize-none mb-3 w-full"
              ref={register}
              required
            />
          </div>
          <button className="bg-gray-900 text-white w-1/3 py-3 rounded font-bold hover:bg-gray-800 duration-150">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
