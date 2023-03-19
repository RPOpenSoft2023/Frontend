import {Link} from "react-router-dom"

const Dashboard = () => {
  return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 h-screen pr-4 p-2">
        <div className="col-span-2">
          <div class="grid grid-rows-6 grid-flow-col gap-2 h-screen">
            <div className="row-span-2 grid grid-cols-2 gap-4 h-auto">
              <div className="bg-slate-100 opacity-80 rounded-lg hover:scale-102 p-1 overflow-auto [&::-webkit-scrollbar]:hidden">
              <h2 className="font-bold text-center">Banks Enrolled</h2>
              <div className="flex justify-between align-middle bg-gray-300 p-2 rounded-md ">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <Link to="/">
                <i class='bx bxs-send bx-sm' ></i>
                </Link>
              </div>
              <div className="flex justify-between align-middle p-2 rounded-md ">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <Link>
                <i class='bx bxs-send bx-sm' ></i>
                </Link>
              </div>
              <div className="flex justify-between align-middle bg-gray-300 p-2 rounded-md ">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <Link>
                <i class='bx bxs-send bx-sm' ></i>
                </Link>
              </div>
              <div className="flex justify-between align-middle p-2 rounded-md ">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <Link>
                <i class='bx bxs-send bx-sm' ></i>
                </Link>
              </div>
              <div className="flex justify-between align-middle bg-gray-300 p-2 rounded-md ">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <Link>
                <i class='bx bxs-send bx-sm' ></i>
                </Link>
              </div>
              <div className="flex justify-between align-middle p-2 rounded-md ">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <Link>
                <i class='bx bxs-send bx-sm' ></i>
                </Link>
              </div>
              </div>
              <div className="bg-slate-100 opacity-80 rounded-lg hover:scale-102">
                09
              </div>
            </div>
            <div className="row-span-4 bg-slate-100 opacity-80 h-auto rounded-lg hover:scale-100">
              Graph space
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 h-screen">
          <div class="grid grid-rows-5 grid-flow-col gap-4 min-h-full">
            <div className="row-span-3 bg-slate-100 opacity-80 rounded-lg hover:scale-102">
              Graph space
            </div>
            <div className="bg-slate-100 opacity-80 row-span-2 rounded-lg hover:scale-102">
              Graph space
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
