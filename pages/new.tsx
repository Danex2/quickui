import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

export default function New() {
  return (
    <Layout title="Create a new UI Post">
      <Navbar />
      <div className="flex justify-center mt-20">
        <form className="flex flex-col w-full p-3 lg:w-1/2">
          <textarea
            rows={10}
            placeholder="Enter a description about your UI setup"
            className="form-textarea resize-none mb-3"
          />
          <div className="space-y-3">
            <select className="w-full form-select">
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
            </select>
            <select className="w-full form-select">
              <option value="" disabled selected>
                Select a role
              </option>
              <option value="DPS">DPS</option>
              <option value="TANK">TANK</option>
              <option value="HEALER">HEALER</option>
            </select>
            <input type="file" className="form-input w-full" multiple />
          </div>
        </form>
      </div>
    </Layout>
  );
}
