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

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

export default function New() {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const { submitting, setSubmitting } = useSubmitting();

  const onSubmit = async (data) => {
    const { characterClass, code, description, images, roles, title } = data;
    try {
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
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout title="Create a new UI Post">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-20">
        <form className="flex flex-col p-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="w-full mb-3 form-input"
            name="title"
            ref={register}
            placeholder="Enter a title for your post"
            required
          />
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
            <input
              type="file"
              className="w-full form-input"
              multiple
              name="images"
              ref={register}
              accept="image/*"
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
