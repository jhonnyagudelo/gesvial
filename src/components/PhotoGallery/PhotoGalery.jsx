import { Comment, Container, Photo, PhotoCard } from './styled-components';
import recreacion from '../../assets/images/recreacion.jpeg';

export const PhotoGallery = () => {
  const photosWithComments = [
    {
      id: 1,
      photoUrl: { recreacion },
      title: 'Asistencia Tecnica y representacion legal',
      comment:
        'Asistencia técnica y representación legal en  derivados de accidentes de tránsito',
    },
    {
      id: 2,
      photoUrl: { recreacion },
      title: 'Reconstrucción 3D',
      comment:
        'Investigación y reconstrucción técnica en 3D de siniestros viales, utilizando tecnología TRIMBLE FORENSICS REVEAL',
    },
    {
      id: 3,
      photoUrl: { recreacion },
      title: 'Planes de seguridad vial',
      comment:
        'Diseño, implementación y ejecución de planes locales y estratégicos en seguridad vial en el sector público y privado',
    },
    {
      id: 4,
      photoUrl: { recreacion },
      title: 'Capacitaciones',
      comment:
        'Campañas, capacitaciones y seminarios en seguridad vial para el cumplimiento de la ley en empresas',
    },
    {
      id: 5,
      photoUrl: { recreacion },
      title: 'Acompañamiento vial',
      comment:
        'Acompañamiento vial a cargas, extradimensionadas, peligrosas,extrapesadas entre otras',
    },
    // Agrega más objetos para más fotos y comentarios
  ];

  return (
    <Container>
      {photosWithComments.map((photo) => (
        <PhotoCard key={photo.id}>
          <Photo
            src={photo.photoUrl.recreacion}
            alt={`Foto ${photo.id}`}
            width={600}
          />
          <Comment>
            <h2>{photo.title}</h2>
            <spam>{photo.comment}</spam>
          </Comment>
        </PhotoCard>
      ))}
    </Container>
  );
};
