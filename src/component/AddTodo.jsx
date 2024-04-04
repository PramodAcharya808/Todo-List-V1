function AddTodo() {
  return (
    <div className="row header_row">
      <div className="col-6">
        <div className="task_section">
          <input type="text" placeholder="Enter your task" />
        </div>
      </div>

      <div className="col-4">
        <div className="date_section">
          <input type="date" />
        </div>
      </div>

      <div className="col-2">
        <div className="action_section">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
