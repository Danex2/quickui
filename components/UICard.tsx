import Link from "next/link";
import ClassTag from "./ClassTag";

interface UIProps {
  id: string;
  image: string;
  characterClass: string;
  title: string;
  roles: string[];
}

export default function UICard({
  id,
  image,
  characterClass,
  title,
  roles,
}: UIProps) {
  return (
    <Link href={`/ui/${id}`}>
      <div className="flex flex-col w-full p-3 duration-150 rounded cursor-pointer hover:bg-gray-200">
        <img
          src={image}
          alt="ElvUI player interface"
          className="object-fill w-full h-full mb-3 rounded-md"
          height="485"
          width="776"
        />
        <div className="mt-auto">
          <p className="mb-3 text-xl font-semibold md:text-2xl">{title}</p>
          <div className="space-x-2 text-sm font-bold">
            <ClassTag characterClass={characterClass} />
            {roles.map((role) => (
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
    </Link>
  );
}
