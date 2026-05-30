import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export default function Root() {
  return (
    <div className="app-shell min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="star-background" aria-hidden="true">
        <div className="stars stars-small" />
        <div className="stars stars-medium" />
        <div className="stars stars-large" />
      </div>
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
