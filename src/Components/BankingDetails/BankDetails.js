import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Typography } from "antd";
import { useLocation } from "react-router";
const BankDetails = ({ user }) => {
  const location = useLocation();
  //account_no = location.state
  if (!user.loading) {
    return (
      <div className="flex flex-wrap">
        <Avatar
          style={{
            backgroundColor: "red",
            verticalAlign: "middle",
            margin: "2.5em",
          }}
          className="w-44 h-44"
          gap={4}
        >
          <div className="h-44 flex items-center">
            <div className="w-full text-center text-7xl">
              {user.first_name ? user.first_name[0] : "A"}
            </div>
          </div>
        </Avatar>
        <div className="flex flex-col" style={{ margin: "2.5rem" }}>
          <div className="flex">
            <Typography.Title level={4} style={{ margin: "0.5rem" }}>
              {/* Name svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <path
                  fill="currentColor"
                  d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z"
                />
              </svg>
            </Typography.Title>

            <Typography.Title
              level={4}
              className=""
              style={{ margin: "0.3rem" }}
            >
              {user.first_name} {user.last_name}
            </Typography.Title>
          </div>
          <div className="flex">
            <Typography.Title level={4} style={{ margin: "0.5rem" }}>
              {/* Email svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                />
              </svg>
            </Typography.Title>
            <Typography.Title
              level={4}
              className=""
              style={{ margin: "0.3rem" }}
            >
              {user.email}
            </Typography.Title>
          </div>
          <div className="flex">
            <Typography.Title level={4} style={{ margin: "0.5rem" }}>
              {/* Phone svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.5 20h3q.2 0 .35-.15q.15-.15.15-.35q0-.2-.15-.35q-.15-.15-.35-.15h-3q-.2 0-.35.15q-.15.15-.15.35q0 .2.15.35q.15.15.35.15ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-7h10V6H7Z"
                />
              </svg>
            </Typography.Title>
            <Typography.Title
              level={4}
              className=""
              style={{ margin: "0.3rem" }}
            >
              {user.phone_number}
            </Typography.Title>
          </div>
          <div className="flex">
            <Typography.Title level={4} style={{ margin: "0.5rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                />
              </svg>
            </Typography.Title>
            <Typography.Title
              level={4}
              className=""
              style={{ margin: "0.3rem" }}
            >
              {user.city}, {user.state}
            </Typography.Title>
          </div>
        </div>
      </div>
    );
  }
};

BankDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default BankDetails;
