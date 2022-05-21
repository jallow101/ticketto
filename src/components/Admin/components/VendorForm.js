const VendorForm = ({ vendor,handleToggle, checked }) => {
  return (
    <div className="row flex gap-4">
      <div className="tick">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={checked}
          onClick={handleToggle}
        />
      </div>
      <div className="vendor_name font-sans text-md">
        <h4>{vendor.name}</h4>
      </div>
    </div>
  );
};

export default VendorForm;
