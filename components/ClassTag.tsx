export default function ClassTag({ characterClass }) {
  const classStyles = {
    MAGE: "text-blue-900  bg-blue-300",
    PRIEST: "text-black  bg-white",
    WARLOCK: "text-purple-900  bg-purple-300",
    PALADIN: "text-pink-900  bg-pink-300",
    "DEMON HUNTER": "text-purple-900  bg-purple-300",
    WARRIOR: "text-orange-900  bg-orange-300",
    MONK: "text-teal-900  bg-teal-300",
    DRUID: "text-orange-900  bg-orange-300",
    HUNTER: "text-green-900  bg-green-300",
    "DEATH KNIGHT": "text-red-900  bg-red-300",
    SHAMAN: "text-blue-900  bg-blue-300",
    ROGUE: "text-yellow-900  bg-yellow-300",
  };

  return (
    <span
      className={`inline-block px-3 py-1 uppercase rounded ${classStyles[characterClass]}`}
    >
      {characterClass}
    </span>
  );
}
