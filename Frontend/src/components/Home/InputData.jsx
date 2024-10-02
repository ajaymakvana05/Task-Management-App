import 'bootstrap/dist/css/bootstrap.min.css';

const InputData = () => {
    return (
        <div>
            <h4 className="card-title mb-4">Submit Your Data</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputField" className="form-label">Input Field</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputField"
                        placeholder="Enter text here"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="textArea" className="form-label">Textarea</label>
                    <textarea
                        className="form-control"
                        id="textArea"
                        rows="4"
                        placeholder="Enter your message here"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InputData;
