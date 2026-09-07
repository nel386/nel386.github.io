import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — Impostor Game",
  description: "Política de privacidad de la aplicación Impostor Game.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-32 text-[var(--text-primary)]">
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <h1>Política de privacidad de Impostor Game</h1>
        <p>Última actualización: 7 de septiembre de 2026</p>

        <h2>Responsable</h2>
        <p>
          El responsable de esta aplicación es <strong>Nelson González</strong>.
          Para consultas sobre privacidad puedes escribir a{" "}
          <strong>nel386@gmail.com</strong>.
        </p>

        <h2>Qué hace la aplicación</h2>
        <p>
          Impostor Game es un juego local para varios jugadores en el mismo
          dispositivo. No requiere crear una cuenta ni introducir nombres
          reales. La configuración y el progreso de una partida se almacenan
          localmente en el dispositivo cuando la aplicación los necesita.
        </p>

        <h2>Publicidad</h2>
        <p>
          La aplicación puede mostrar anuncios mediante Google AdMob. AdMob y
          sus proveedores pueden tratar identificadores de publicidad,
          información del dispositivo y datos de interacción con los anuncios
          para servir, medir y limitar la publicidad, de acuerdo con la
          configuración de consentimiento y las políticas de Google.
        </p>
        <p>
          En las regiones en las que sea necesario, la aplicación solicita
          consentimiento antes de pedir anuncios personalizados. Puedes
          consultar la información de Google sobre publicidad y privacidad en{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>

        <h2>Base y gestión del consentimiento</h2>
        <p>
          La publicidad personalizada solo se solicita cuando existe una base
          legal válida y el consentimiento requerido. Puedes retirar o
          modificar tu consentimiento desde las opciones que muestre el
          formulario de privacidad de la aplicación, cuando estén disponibles.
        </p>

        <h2>Con quién se comparte la información</h2>
        <p>
          La información relacionada con la publicidad puede compartirse con
          Google y sus proveedores tecnológicos para prestar el servicio
          publicitario, medir resultados, prevenir fraude y cumplir
          obligaciones legales. No vendemos los datos personales introducidos
          en la aplicación.
        </p>

        <h2>Conservación y seguridad</h2>
        <p>
          Los datos de la partida que se guarden localmente permanecen en el
          dispositivo hasta que se borren los datos de la aplicación o se
          desinstale. La conservación de datos tratados por proveedores
          publicitarios se rige por sus propias políticas y condiciones.
        </p>

        <h2>Menores</h2>
        <p>
          La aplicación no está dirigida específicamente a menores. No
          recopilamos conscientemente información personal de menores.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Según tu país, puedes tener derechos de acceso, rectificación,
          supresión, oposición, limitación o retirada del consentimiento. Para
          ejercerlos, contacta con <strong>nel386@gmail.com</strong>. También
          puedes presentar una reclamación ante la autoridad de protección de
          datos correspondiente.
        </p>

        <h2>Cambios</h2>
        <p>
          Podemos actualizar esta política cuando cambien la aplicación, los
          proveedores o las obligaciones legales. Publicaremos la versión
          vigente en esta misma página.
        </p>
      </article>
    </main>
  );
}
