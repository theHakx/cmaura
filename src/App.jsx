import LenisProvider from "./app/LenisProvider";
import AppRouter from "./app/Router";

export default function App() {
  return (
    <LenisProvider>
      <AppRouter />
    </LenisProvider>
  );
}
