import { getImageUrl } from "@/utils";

export default function Avatar({ person, size }) {
  return (
    <div>
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