import NavigationBar from "@/features/NavigationBar";
import Home from "@/features/Home";

export default function Page() {
  return (
    <div className="w-screen min-h-screen">
      <NavigationBar />
      <main>
        <Home />
      </main>
    </div>
  );
}