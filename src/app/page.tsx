import SelfCard from "@/components/card/self-card";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="absolute top-[17%] cursor-default text-[40px] font-bold lg:top-[13%]">
        Welcome to Koriのせかい
      </h1>
      <SelfCard className="" />
    </main>
  );
};

export default Home;
