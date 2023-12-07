
import Footer from "@/components/footer";
import { Menu } from "../components/menu";
import RootLayout from "@/app/layout";

// Path: src/app/index.tsx

export default function App () {
  return (
    <RootLayout>
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <h1 className="font-extrabold">App</h1>
      </div>
    </div>
    </RootLayout>
  );
};    