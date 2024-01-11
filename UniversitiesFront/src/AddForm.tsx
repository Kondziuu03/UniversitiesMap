import "./AddForm.css";
import useForm from "./useForm";

interface AddFormProps {
  endpoint: string;
}

export default function AddForm(props: AddFormProps) {
  const { endpoint } = props;
  const { handleSubmit, status, message } = useForm();

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }
  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <div className="form">
      <h2>Add university</h2>
      <form
        className="add-form"
        action={endpoint}
        onSubmit={handleSubmit}
        method="POST"
      >
        <h4>Details</h4>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
          </div>
          <div>
            <label htmlFor="latitude">Latitude</label>
            <input type="text" name="latitude" id="latitude" />
          </div>
          <div>
            <label htmlFor="longitude">Longitude</label>
            <input type="text" name="longitude" id="longitude" />
          </div>
        </div>
        <h4>Address</h4>
        <div>
          <div>
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="street" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
          <div>
            <label htmlFor="zip">Zip</label>
            <input type="text" name="zip" id="zip" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              value="Poland"
              disabled
            />
          </div>
        </div>
        <h4>Info</h4>
        <div>
          <div>
            <label htmlFor="website">Website</label>
            <input type="text" name="website" id="website" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
        </div>

        {status !== "loading" ? (
          <button type="submit">Add</button>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </form>
    </div>
  );
}
