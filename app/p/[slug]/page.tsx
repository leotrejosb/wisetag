import ClientImage from '@/app/components/ClientImage'; // <-- Ruta de alias

// --- 1. Definimos la "forma" de tu perfil ---
// (Define la estructura de datos que esperas de tu API de Django)
interface Profile {
  name: string;
  slug: string;
  title: string;
  bio: string;
  profile_picture_url: string;
  whatsapp_number: string;
  instagram_username: string;
  linkedin_url: string;
  email: string;
  website_url: string;
  is_active: boolean;
}

// --- 2. Definimos la "forma" de los props de la página ---
// ¡CAMBIO AQUÍ! Le decimos a TypeScript que `params` es una Promesa.
type ProfilePageProps = {
  params: Promise<{ // <-- Es una Promesa
    slug: string;
  }>;
};

// --- 3. Tipamos la función `getProfile` ---
// (Esta función se ejecuta en el servidor para llamar a tu API)
async function getProfile(slug: string): Promise<Profile | null> {
  // Obtiene la URL de tu API desde las variables de entorno
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    // Error si olvidaste configurar la variable de entorno
    console.error("Error: NEXT_PUBLIC_API_URL no está configurada.");
    return null;
  }

  try {
    // Llama a tu API de Django
    // (Asegúrate de que tu API local o de Render esté funcionando)
    const res = await fetch(`${apiUrl}/api/profiles/${slug}/`);

    if (!res.ok) {
      // Si el perfil no se encuentra (404) o hay error de servidor (500)
      console.error(`Error al buscar el perfil ${slug}: ${res.statusText}`);
      return null;
    }

    // Convierte la respuesta a JSON
    const data: Profile = await res.json();
    return data;

  } catch (error) {
    // Error si el 'fetch' falla (ej. el servidor de Django está apagado)
    console.error("Error de red o al parsear el JSON:", error);
    return null;
  }
}

// --- 4. Tipamos el componente de la página ---
// (Este es tu componente de página principal, es un Componente de Servidor)

// ¡CAMBIO AQUÍ! Renombramos `params` a `paramsPromise`
export default async function ProfilePage({ params: paramsPromise }: ProfilePageProps) {
  
  // ¡CAMBIO AQUÍ! Primero esperamos (await) a que la promesa de params se resuelva.
  const params = await paramsPromise;
  
  // Ahora sí usamos el `params.slug` resuelto
  const profile = await getProfile(params.slug);

  // Si no se encuentra el perfil, muestra un mensaje
  if (!profile) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-8 text-white">
        <h1 className="text-2xl font-bold">Perfil no encontrado</h1>
        <p className="text-gray-400">El enlace puede estar roto o el perfil ha sido eliminado.</p>
      </main>
    );
  }

  // --- Si todo sale bien, muestra la plantilla del perfil ---
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-8 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg">
        
        {/* Foto de Perfil */}
        {profile.profile_picture_url && (
          <ClientImage
            src={profile.profile_picture_url}
            alt={`Foto de ${profile.name}`}
            className="mx-auto h-32 w-32 rounded-full object-cover shadow-md"
          />
        )}

        {/* Info Principal */}
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-lg text-blue-400">{profile.title}</p>
          <p className="mt-2 text-sm text-gray-300">{profile.bio}</p>
        </div>

        {/* Links de Contacto */}
        <div className="mt-6 flex flex-col space-y-3">
          {profile.whatsapp_number && (
            <a
              href={`https://wa.me/${profile.whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 p-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Contactar por WhatsApp
            </a>
          )}
          {profile.linkedin_url && (
            <a
              href={profile.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-700 p-3 text-center font-semibold text-white transition hover:bg-blue-800"
            >
              LinkedIn
            </a>
          )}
          {profile.instagram_username && (
            <a
              href={`https://instagram.com/${profile.instagram_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-600 p-3 text-center font-semibold text-white transition hover:bg-pink-700"
            >
              Instagram
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-gray-600 p-3 text-center font-semibold text-white transition hover:bg-gray-700"
            >
              Enviar Email
            </a>
          )}
        </div>
        
      </div>
    </main>
  );
}
