const Contact = () => {
  return (
    <div className="mt-40">
      <h2 className="text-lg font-bold">Contact Us</h2>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Name"
          className="m-2 p-2 rounded-md border border-gray"
        />
        <input
          type="email"
          placeholder="email@something.com"
          className="m-2 p-2 rounded-md border border-gray"
        />
        <button className="border border-gray mx-4 my-2 p-2 rounded-md bg-gray-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
