const Dashboard = () => {
    return (
        <div className=" p-2 pr-4">
            <div className="grid grid-cols-2 gap-4 h-screen md:grid-cols-3">
                <div className="col-span-2">
                    <div class="grid grid-rows-6 grid-flow-col gap-2 h-screen">
                        <div className="row-span-2 grid grid-cols-2 gap-4 h-auto">
                            <div className="bg-slate-100 opacity-80 rounded-lg hover:scale-105">01</div>
                            <div className="bg-slate-100 opacity-80 rounded-lg hover:scale-105">09</div>
                        </div>
                        <div className="row-span-4 bg-slate-100 opacity-80 h-auto rounded-lg hover:scale-100">Graph space 1</div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 h-screen">
                    <div class="grid grid-rows-5 grid-flow-col gap-4 min-h-full">
                        <div className="row-span-3 bg-slate-100 opacity-80 rounded-lg hover:scale-105">Transactions</div>
                        <div className="bg-slate-100 opacity-80 row-span-2 rounded-lg hover:scale-105">Graph space 2</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dashboard;