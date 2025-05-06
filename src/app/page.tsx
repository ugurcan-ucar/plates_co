import Container from "@/components/Container/Container";
import Products from "@/features/Products/Products"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <section className="min-h-[50vh]">
        <Container>
        Hero Section
        </Container>
      </section>

      <Products />
    </div>
  );
}
