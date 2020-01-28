import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
/*
you can nest compenents or other content in each other it then gets passed as a prop
it can be accessed as prop.children on the parent comonent
*/
const App = () => {
  return (
    <div className="ui container comments">
      {/* Parent Component */}
      <ApprovalCard>
        {/* Child Compenont */}
        <CommentDetail
          author="Faron"
          time="Today at 9:00PM"
          comment="Learning React"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dean"
          time="Today at 4:00PM"
          comment="Im getting better"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Meryl"
          time="Today at 11:00AM"
          comment="Learning is fun"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
