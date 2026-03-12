import { getImageUrl } from "@/utils";

export default function Avatar({ person, size }) {
  return (
    <div className="flex flex-col items-center">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <p>{person.bio}</p>
    </div>
  );
}