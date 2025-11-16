import React from 'react';
import StaffCard from '../../components/StaffCard/StaffCard';
import './Staff.css';

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Smita Sharma',
      designation: 'Principal',
      qualification: 'M.Sc., Ph.D. (Education)',
      email: 'principal@dghs-school.edu.in',
      phone: '+91-3822-234567',
      image: '/assets/images/staff/principal.jpg'
    },
    {
      id: 2,
      name: 'Mrs. Anjali Dutta',
      designation: 'Vice Principal',
      qualification: 'M.A. (English), B.Ed.',
      email: 'viceprincipal@dghs-school.edu.in',
      phone: '+91-3822-234568',
      image: '/assets/images/staff/vice-principal.jpg'
    },
    {
      id: 3,
      name: 'Mrs. Rekha Chakraborty',
      designation: 'Senior Teacher (Science)',
      qualification: 'M.Sc. (Physics), B.Ed.',
      email: 'rekha.c@dghs-school.edu.in',
      phone: '+91-3822-234569',
      image: '/assets/images/staff/science-teacher.jpg'
    },
    {
      id: 4,
      name: 'Mrs. Sushmita Pal',
      designation: 'Senior Teacher (Mathematics)',
      qualification: 'M.Sc. (Mathematics), B.Ed.',
      email: 'sushmita.p@dghs-school.edu.in',
      phone: '+91-3822-234570',
      image: '/assets/images/staff/math-teacher.jpg'
    },
    {
      id: 5,
      name: 'Mrs. Kavita Roy',
      designation: 'Senior Teacher (English)',
      qualification: 'M.A. (English), B.Ed.',
      email: 'kavita.r@dghs-school.edu.in',
      phone: '+91-3822-234571',
      image: '/assets/images/staff/english-teacher.jpg'
    },
    {
      id: 6,
      name: 'Mrs. Priti Sarkar',
      designation: 'Senior Teacher (Social Science)',
      qualification: 'M.A. (History), B.Ed.',
      email: 'priti.s@dghs-school.edu.in',
      phone: '+91-3822-234572',
      image: '/assets/images/staff/social-teacher.jpg'
    },
    {
      id: 7,
      name: 'Mrs. Rina Das',
      designation: 'Senior Teacher (Bengali)',
      qualification: 'M.A. (Bengali), B.Ed.',
      email: 'rina.d@dghs-school.edu.in',
      phone: '+91-3822-234573',
      image: '/assets/images/staff/bengali-teacher.jpg'
    },
    {
      id: 8,
      name: 'Mrs. Meena Ghosh',
      designation: 'Physical Education Teacher',
      qualification: 'B.P.Ed., M.P.Ed.',
      email: 'meena.g@dghs-school.edu.in',
      phone: '+91-3822-234574',
      image: '/assets/images/staff/pe-teacher.jpg'
    },
    {
      id: 9,
      name: 'Mrs. Shanti Devi',
      designation: 'Computer Science Teacher',
      qualification: 'MCA, B.Ed.',
      email: 'shanti.d@dghs-school.edu.in',
      phone: '+91-3822-234575',
      image: '/assets/images/staff/cs-teacher.jpg'
    },
    {
      id: 10,
      name: 'Mrs. Lata Bhowmik',
      designation: 'Librarian',
      qualification: 'M.L.I.Sc.',
      email: 'lata.b@dghs-school.edu.in',
      phone: '+91-3822-234576',
      image: '/assets/images/staff/librarian.jpg'
    },
    {
      id: 11,
      name: 'Mrs. Gita Deb',
      designation: 'Laboratory Assistant',
      qualification: 'B.Sc. (Chemistry)',
      email: 'gita.d@dghs-school.edu.in',
      phone: '+91-3822-234577',
      image: '/assets/images/staff/lab-assistant.jpg'
    },
    {
      id: 12,
      name: 'Mrs. Anita Singh',
      designation: 'Office Assistant',
      qualification: 'B.Com.',
      email: 'anita.s@dghs-school.edu.in',
      phone: '+91-3822-234578',
      image: '/assets/images/staff/office-assistant.jpg'
    }
  ];

  return (
    <>
      <div className="staff">
        {/* Hero Section */}
        <section className="staff-hero">
          <div className="container">
            <div className="staff-hero-content">
              <h1>Our Staff</h1>
              <p>Meet our dedicated team of educators and staff members</p>
            </div>
          </div>
        </section>

        {/* Staff Content */}
        <section className="staff-content">
          <div className="container">
            <div className="staff-intro">
              <h2>Our Dedicated Teaching Staff</h2>
              <p>
                Our school is proud to have a team of highly qualified and experienced educators 
                who are committed to providing quality education and nurturing the growth of our 
                students. Each staff member brings unique expertise and dedication to create a 
                conducive learning environment.
              </p>
            </div>

            <div className="staff-grid">
              {staffMembers.map((staff) => (
                <StaffCard
                  key={staff.id}
                  name={staff.name}
                  designation={staff.designation}
                  qualification={staff.qualification}
                  email={staff.email}
                  phone={staff.phone}
                  image={staff.image}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Staff;
