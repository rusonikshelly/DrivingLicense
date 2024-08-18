import { FormInput } from "../FormInput/FormInput";
import "./form-display.css";

export const FormDisplay: React.FC = () => {
  return (
    <div className="form-border">
      <div className="form-display">
        <h1>Driving License Info:</h1>
        <FormInput placeholder="Name" />
        <FormInput placeholder="Last Name" />
        <FormInput placeholder="Date Of Birth" />
        <FormInput placeholder="ID" />
        <FormInput placeholder="Address" />
        <FormInput placeholder="License Number" />
        <FormInput placeholder="License Type" />
        <FormInput placeholder="License Creation Date" />

        <button className="form-display-submit">Submit</button>
      </div>
    </div>
  );
};
