import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="card p-4 shadow-lg border-0" style={{ width: '100%', maxWidth: '450px', borderRadius: '15px', backgroundColor: '#ffffff' }}>
        <h3 className="card-title mb-4 text-center" style={{ color: '#000000', fontWeight: 'bold' }}>Sign In</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#000000' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '12px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onFocus={(e) => e.target.style.borderColor = '#000000'}
              onBlur={(e) => e.target.style.borderColor = '#cccccc'}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: '#000000' }}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              style={{
                borderColor: '#cccccc',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '12px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onFocus={(e) => e.target.style.borderColor = '#000000'}
              onBlur={(e) => e.target.style.borderColor = '#cccccc'}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: 'bold',
              padding: '10px',
              fontSize: '16px',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#333333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#000000'}
            onFocus={(e) => e.target.style.transform = 'scale(1.02)'}
            onBlur={(e) => e.target.style.transform = 'scale(1)'}
          >
            Sign In
          </button>
        </form>
        <p className="mt-3 text-center" style={{ color: '#000000' }}>
          Don&apos;t have an account? <a href="/signup" style={{ color: '#000000', fontWeight: 'bold' }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
