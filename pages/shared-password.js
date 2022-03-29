import Sidebar from "../Components/sidebar";
import Table from "../Components/Table";
import { useAppContext } from "../context/state";

function SharedPassword() {
  const data = useAppContext();
  return (
    <div className="flex w-screen">
      <Sidebar />
      <Table title={"Shared Password"} />
    </div>
  );
}

export default SharedPassword;
