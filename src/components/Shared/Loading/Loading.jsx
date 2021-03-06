import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <div
        style={{ height: "400px" }}
        className="w-100 d-flex justify-content-center align-items-center"
      >
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    </div>
  );
};

export default Loading;