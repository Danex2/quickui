import React from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { createUi as CreateUI } from "src/graphql/mutations";
import { v4 as uuid } from "uuid";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { useRouter } from "next/router";
import config from "src/aws-exports";
import { useSubmitting } from "hooks/useSubmitting";
import Protected from "components/Protected";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

function New() {
  const { register, handleSubmit } = useForm();

  const [error, setError] = React.useState(null);

  const router = useRouter();

  const { submitting, setSubmitting } = useSubmitting();

  const onSubmit = async (data) => {
    const { characterClass, code, description, images, roles, title } = data;
    try {
      if (images.length > 3) {
        throw new Error("You can only a maximum of 3 images");
      } else {
        setSubmitting(!submitting);
        const imagestoS3 = Array.from(images).map(async (image) => {
          const { type: mimeType } = image;
          const key = `images/${uuid()}${image.name}`;
          const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;

          await Storage.put(key, image, {
            contentType: mimeType,
          });

          return url;
        });
        Promise.all(imagestoS3)
          .then(
            async (uploadedImages) =>
              await API.graphql(
                graphqlOperation(CreateUI, {
                  input: {
                    title,
                    characterClass,
                    roles,
                    code,
                    description,
                    images: uploadedImages,
                  },
                })
              )
          )
          .then(() => setSubmitting(false))
          .then(() => router.push("/"));
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Layout title="Create a new UI Post">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-20">
        <form className="flex flex-col p-3" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="absolute bottom-0 max-w-sm p-5 mb-20 text-red-800 bg-red-300 rounded">
              <p>{error.message}</p>
            </div>
          )}
          <label htmlFor="title">Enter a title for post</label>
          <input
            type="text"
            className="w-full mb-3 form-input"
            name="title"
            ref={register}
            placeholder="Mage ElvUI layout"
            required
            maxLength={100}
          />
          <label htmlFor="description">Description</label>
          <textarea
            rows={10}
            placeholder="Addons: recount, bigwigs, _cursor"
            className="mb-3 resize-none form-textarea"
            ref={register}
            required
            name="description"
            maxLength={300}
          />
          <div className="mb-3 space-y-3">
            <select
              className="w-full form-select"
              ref={register}
              required
              name="characterClass"
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
            <label htmlFor="roles" className="block">
              Select roles
            </label>
            <span className="inline-block mt-3 text-sm text-gray-600">
              <kbd>Ctrl</kbd> + click to select multiple roles
            </span>
            <select
              className="w-full"
              ref={register}
              required
              name="roles"
              defaultValue={["DEFAULT"]}
              multiple
            >
              <option value="DEFAULT" disabled>
                Select role(s)
              </option>
              <option value="DPS">DPS</option>
              <option value="TANK">TANK</option>
              <option value="HEALER">HEALER</option>
            </select>
            <label htmlFor="images" className="block">
              Select images (up to 3)
            </label>
            <input
              type="file"
              className="w-full form-input"
              multiple
              name="images"
              ref={register}
              accept="image/*"
            />
            <label htmlFor="code" className="block">
              ElvUI import string
            </label>
            <textarea
              rows={10}
              className="w-full mb-3 resize-none form-textarea"
              ref={register}
              required
              name="code"
            />
          </div>
          <button
            disabled={submitting ? true : false}
            className="w-1/3 py-3 font-bold text-white duration-150 bg-gray-900 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
export default Protected(New);
