'use client'; // Esta línea mágica le dice a Next.js: "Este es un Componente de Cliente"

type ClientImageProps = {
  src: string;
  alt: string;
  className: string;
};

/**
 * Este componente se renderiza en el navegador y puede manejar
 * eventos interactivos como 'onError'.
 */
export default function ClientImage({ src, alt, className }: ClientImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      // Ahora que estamos en un 'Client Component', este 'onError' es 100% válido.
      onError={(e) => {
        // Si la URL de la foto de perfil falla, la reemplazamos con un placeholder.
        e.currentTarget.src = 'https://placehold.co/128x128/374151/FFF?text=?';
      }}
    />
  );
}
