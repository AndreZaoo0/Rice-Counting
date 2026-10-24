import { Grao } from "./types/rices/grao";

export default function Home() {
  const graos: Grao[] = [
    { id: ["1"], name: ["Grao 1"] },
    { id: ["2"], name: ["Grao 2"] },
    { id: ["3"], name: ["Grao 3"] },
  ];

  return (
    <div>
      <h1>Rice Counter</h1>
      <ul>
        {graos.map((grao) => (
          <li key={grao.id[0]}>{grao.name[0]}</li>
        ))}
      </ul>
    </div>
  );
}
