export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 flex justify-center p-4">
      <p className="text-sm text-gray-300">
        Projetado e Desenvolvido por{" "}
        <a
          className="font-bold text-emerald-500 hover:text-emerald-600 duration-300"
          href="https://www.linkedin.com/in/erick-rian/"
        >
          Erick Rian
        </a>{" "}
        2023
      </p>
    </footer>
  );
}
