import Card from "@components/Card";

export default function Home()
{
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-7">
      <Card make="Toyota"
        model="Corolla"
        year={2019}
        price={"R$ 53.990"}
        imageUrl="/toyota.webp"
        km="50.000 km"
        version="2.0 XEI Flex 16V Aut."
        city="São Paulo"
      />
    </main>
  );
}
