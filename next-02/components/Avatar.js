import { getImageUrl } from "@/utils";

export default function Avatar({ person, size }) {
  return (
    <div>
      <h3>{person.name}</h3>
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