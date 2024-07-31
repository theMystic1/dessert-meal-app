import MainItems from "./_components/ui/MainItems";
import { getData } from "./services/fetch";

async function page() {
  const data = await getData();

  return <MainItems data={data} />;
}

export default page;
