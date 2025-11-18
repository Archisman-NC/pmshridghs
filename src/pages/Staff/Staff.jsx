import React from 'react';
import StaffCard from '../../components/StaffCard/StaffCard';
import './Staff.css';

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: 'SMT SUPARNA GHOSH (AHM, HO & DDO)',
      phone: '7085587947'
    },
    {
      id: 2,
      name: 'SMT ANITA DHAR (TR) (PGT)',
      phone: '6033031504'
    },
    {
      id: 3,
      name: 'SMT BORNALI NATH (PGT)',
      phone: '9612473375'
    },
    {
      id: 4,
      name: 'SMT CHAMPA NATH (PGT)',
      phone: '9774446132'
    },
    {
      id: 5,
      name: 'SMT JAYANTI BHATTACHARJEE (PGT)',
      phone: '9436479277'
    },
    {
      id: 6,
      name: 'SMT MAMATA NATH (PGT)',
      phone: '9862352796'
    },
    {
      id: 7,
      name: 'SMT MANIMALA CHAKRABORTY (PGT)',
      phone: '9436476044'
    },
    {
      id: 8,
      name: 'SMT NAMRATA BHATTACHARJEE (GT)',
      phone: '7005144747'
    },
    {
      id: 9,
      name: 'SMT DR. NANDITA CHAKRABORTY (PGT)',
      phone: '8119036493'
    },
    {
      id: 10,
      name: 'SMT NIRUPAMA SEN (PGT)',
      phone: '9774209778'
    },
    {
      id: 11,
      name: 'SMT PALLABI GOSWAMI (GT)',
      phone: '7005453667'
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
                  phone={staff.phone}
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
