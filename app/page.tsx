import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="text-center">
          Welcome to the Social Media Campaign Visualization Tool
        </p>
      </div>

      {/* Add your content here */}
    </main>
  );
}
