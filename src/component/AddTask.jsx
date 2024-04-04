function AddTask() {
  return (
    <div className="row input_area mt-3">
      <div className="col-6">
        <div className="task_data">
          <p>My task 1</p>
        </div>
      </div>

      <div className="col-4">
        <div className="date_data">
          <p>My date 1</p>
        </div>
      </div>

      <div className="col-2">
        <div className="action_button">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTask;
