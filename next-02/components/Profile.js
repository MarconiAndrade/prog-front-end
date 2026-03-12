import Avatar from "./Avatar";

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Marconi Andrade', 
          imageId: 'imagem',
          bio: 'Sou estudante de Sistemas para Internet na UNICAP e atualmente estou no 3º período da faculdade. Estou aprendendo sobre React nesse momento na disciplina de Front-End'
        }}
      />
    </div>
  );
}