import Dado from "./Dado";

export default function Profile() {
  return (
    <div>
      <Dado
        valor={{ 
          name: 'face', 
          imageId: 'face1',
        }}
      />
    </div>
  );
}