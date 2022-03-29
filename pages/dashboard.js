import Sidebar from "../Components/sidebar";
import Table from "../Components/Table";
import { useAppContext } from "../context/state";

function Dashboard() {
  const data = useAppContext();
  return (
    <div className="flex w-screen">
      <Sidebar />
      <Table title={"All Password"} />
    </div>
  );
}

export default Dashboard;
