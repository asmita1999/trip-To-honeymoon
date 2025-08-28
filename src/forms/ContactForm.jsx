import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = 'First name cannot contain numbers';
    }

   if (formData.lastName.trim() && /\d/.test(formData.lastName)) {
      newErrors.lastName = 'Last name cannot contain numbers';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Swal.fire({
        title: 'Success!',
        text: 'Form submitted successfully.',
        icon: 'success',
        confirmButtonColor: '#16a34a',
      });

      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        description: '',
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please correct the highlighted fields.',
        icon: 'error',
        confirmButtonColor: '#dc2626',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl text-pink-700 font-bold text-center mb-6">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>

        {/* Row 1: First Name | Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="First name"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="Last name"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Row 2: Phone | Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">Phone *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="10-digit phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row 3: Message*/}
        <div>
          <label className="block text-sm font-medium text-pink-700 mb-2">Message *</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border outline-none ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none`}
            placeholder="Here write ...."
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Submit Button */}
        <div className='flex justify-center'>
          <button
            type="submit"
            className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
