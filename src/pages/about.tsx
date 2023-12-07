// src/pages/about.tsx
import Footer from "@/components/footer";
import { Menu } from "../components/menu";
import AboutCard from "@/components/card";
import RootLayout from "@/app/layout";

const About: React.FC = () => {
  return (
    <RootLayout>
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <AboutCard description="Hi, I'm [Your Name]. I'm a [Your Profession] based in [Your Location].
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* Additional Information */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>Email: gabrielcalaca@hotmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/gabriel-teixeira-05787919a/" target="_blank" className="hover:text-gray-300 hover:underline underline-offset-2">Gabriel Teixeira</a></p>
          {/* Add more information as needed */}
        </div>
      </div>
    </div>
    </RootLayout>
  );
};

export default About;
