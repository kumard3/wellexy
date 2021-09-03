import { Collapse } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function Help() {
  return (
    <div className="w-[60%] min-h-[60vh] mx-auto my-10">
      <Collapse accordion>
        <Panel header="How to contact with Customer Service?" key="1">
          <p>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </p>
        </Panel>
        <Panel
          header="App installation failed, how to update system information?"
          key="2"
        >
          <p>
            Please read the documentation carefully . We also have some online
            video tutorials regarding this issue . If the problem remains,
            Please Open a ticket in the support forum
          </p>
        </Panel>
        <Panel header="Website reponse taking time, how to improve?" key="3">
          <p>
            At first, Please check your internet connection . We also have some
            online video tutorials regarding this issue . If the problem
            remains, Please Open a ticket in the support forum .
          </p>
        </Panel>
        <Panel header="How do I create a account?" key="4">
          <p>
            If you want to open an account for personal use you can do it over
            the phone or online. Opening an account online should only take a
            few minutes.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}
