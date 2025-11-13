import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AddNewUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    permissions: {
      addProduct: true,
      updateProduct: false,
      deleteProduct: true,
      applyDiscount: false,
      createCoupon: false,
    },
  });

  const handlePermissionToggle = (permission) => {
    setFormData({
      ...formData,
      permissions: {
        ...formData.permissions,
        [permission]: !formData.permissions[permission],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="add-new-user">
      <div className="page-header">
        <h1 className="page-title">Add New User</h1>
        <div className="breadcrumb">
          <span>Dashboard</span>
          <span className="separator">›</span>
          <span>User</span>
          <span className="separator">›</span>
          <span className="current">Add New User</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-section">
          <h2 className="section-title">Account</h2>
          <p className="section-description">Fill in the information below to add a new account</p>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Permission</h2>
          <p className="section-description">Items that the account is allowed to edit</p>

          <div className="permissions-grid">
            <div className="permission-item">
              <label>Add product</label>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${formData.permissions.addProduct ? 'active allow' : ''}`}
                  onClick={() => handlePermissionToggle('addProduct')}
                >
                  Allow
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!formData.permissions.addProduct ? 'active deny' : ''}`}
                  onClick={() => handlePermissionToggle('addProduct')}
                >
                  Deny
                </button>
              </div>
            </div>

            <div className="permission-item">
              <label>Update product</label>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${formData.permissions.updateProduct ? 'active allow' : ''}`}
                  onClick={() => handlePermissionToggle('updateProduct')}
                >
                  Allow
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!formData.permissions.updateProduct ? 'active deny' : ''}`}
                  onClick={() => handlePermissionToggle('updateProduct')}
                >
                  Deny
                </button>
              </div>
            </div>

            <div className="permission-item">
              <label>Delete product</label>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${formData.permissions.deleteProduct ? 'active allow' : ''}`}
                  onClick={() => handlePermissionToggle('deleteProduct')}
                >
                  Allow
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!formData.permissions.deleteProduct ? 'active deny' : ''}`}
                  onClick={() => handlePermissionToggle('deleteProduct')}
                >
                  Deny
                </button>
              </div>
            </div>

            <div className="permission-item">
              <label>Apply discount</label>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${formData.permissions.applyDiscount ? 'active allow' : ''}`}
                  onClick={() => handlePermissionToggle('applyDiscount')}
                >
                  Allow
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!formData.permissions.applyDiscount ? 'active deny' : ''}`}
                  onClick={() => handlePermissionToggle('applyDiscount')}
                >
                  Deny
                </button>
              </div>
            </div>

            <div className="permission-item">
              <label>Create coupon</label>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${formData.permissions.createCoupon ? 'active allow' : ''}`}
                  onClick={() => handlePermissionToggle('createCoupon')}
                >
                  Allow
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!formData.permissions.createCoupon ? 'active deny' : ''}`}
                  onClick={() => handlePermissionToggle('createCoupon')}
                >
                  Deny
                </button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
