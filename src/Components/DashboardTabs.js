import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function DashboardTabs({ user }) {
  const [userData, setUserData] = useState(user);
  useEffect(() => {
    setUserData(user);
  }, [user]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-4 flex my-4">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-start">
        <Card
          style={{
            width: 300,
          }}
          className="bg-inherit border-0"
        >
          <div className="text-center tracking-wide">
            <p className="font-bold text-2xl">
              {(userData && userData.first_name && userData.first_name) ||
                "User Name"}
            </p>
            <p className="text-xl">
              {(userData && userData.email) || "User Email"}
            </p>
            <p className="font-semibold">
              {(userData && userData.phone_number) || "User Phone"}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DashboardTabs;
