import React from "react";
import { Card } from "antd";

function DashboardTabs() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 flex my-4">
            <div className="col-span-1 md:col-span-3 flex justify-start">
                <Card
                    style={{
                        width: 300,
                    }}
                    className="bg-inherit border-0"
                >
                    <div className="text-center tracking-wide">
                        <p className="font-bold text-2xl">Hello, User</p>
                        <p className="text-xl">COMPANY NAME</p>
                        <p className="font-semibold">19th March</p>
                    </div>
                </Card>
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-start">
                <Card
                    style={{
                        width: 300,
                    }}
                    className="rounded-3xl bg-orange-300"
                >
                    <div className="grid grid-cols-3 gap-2 flex items-center">
                        <div className="col-span-2 text-center mr-2 pr-4 border-r-2">
                            <p>Reports Created</p>
                            <p className="font-semibold text-xl mt-2">2</p>
                        </div>
                        <div className="col-span-1 flex justify-center">Icon</div>
                    </div>
                </Card>
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-end">
                <Card
                    style={{
                        width: 300,
                    }}
                    className="rounded-3xl bg-orange-300"
                >
                    <div className="grid grid-cols-3 gap-2 flex items-center">
                        <div className="col-span-2 text-center mr-2 pr-4 border-r-2">
                            <p>Banks Analysed</p>
                            <p className="font-semibold text-xl mt-2">1</p>
                        </div>
                        <div className="col-span-1 flex justify-center">Icon</div>
                    </div>
                </Card>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-start"><Card
                style={{
                    width: 300,
                }}
                className="rounded-3xl bg-orange-300"
            >
                    <div className="grid grid-cols-3 gap-2 flex items-center">
                        <div className="col-span-2 text-center mr-2 pr-4 mt-4">
                            <p>Average Balance</p>
                            <p className="font-semibold text-xl mt-2">$450 </p>
                        </div>
                        <div className="col-span-1 text-center mt-4">
                            <p className="text-2xl text-green-500 tracking-wide">+250</p>
                            <p>Icon</p>
                        </div>
                    </div>
            </Card>
            </div>
        </div>
    );
}

export default DashboardTabs