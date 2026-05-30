import { GraduationCap, Briefcase, BookOpen, Building2, Globe } from "lucide-react";

export default function Experience() {
  const education = [
    {
      institution: "Põlva Riigigümnaasium",
      description: "Secondary education",
      icon: <GraduationCap size={24} />,
    },
    {
      institution: "Tartu Rakenduslik Kolledž (VOCO)",
      description: "Studies in Software Development",
      icon: <GraduationCap size={24} />,
    },
  ];

  const workExperience = [
    {
      role: "Construction worker",
      description: "Physical work, teamwork, and responsibility",
      icon: <Briefcase size={24} />,
    },
    {
      role: "Production worker",
      description: "Precision and adherence to processes",
      icon: <Briefcase size={24} />,
    },
    {
      role: "Security guard",
      description: "Responsibility, vigilance, and decision-making",
      icon: <Briefcase size={24} />,
    },
  ];

  const courses = [
    "Bootstrap 5 - Net Ninja",
    "Sass - Net Ninja",
    "Node.js - Net Ninja",
    "Express - Net Ninja",
    "WooCommerce",
  ];

  const languages = [
    { language: "Estonian", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Russian", level: "Beginner" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes staggerFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .section-title {
          position: relative;
          display: inline-block;
          animation: fadeInUp 0.8s ease-out;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFB000, transparent);
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .card-item {
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        .glow-border:hover {
          box-shadow: 0 0 20px rgba(255, 176, 0, 0.6), inset 0 0 20px rgba(255, 176, 0, 0.05);
        }
      `}</style>

      {/* Education Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Education'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
                animation: `staggerFadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
              className="card-item p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 glow-border rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div style={{ color: '#FFB000' }} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  {edu.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="text-lg font-bold mb-2"
                  >
                    {edu.institution}
                  </h3>
                  <p style={{ color: '#888888' }} className="text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Work Experience'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm mb-4 glow-border rounded-lg transition-all duration-300"
        >
          <p style={{ color: '#888888' }} className="mb-6 text-sm md:text-base leading-relaxed">
            A foundation of hard work and discipline
          </p>
          <div className="space-y-4">
            {workExperience.map((job, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                  borderBottom: index !== workExperience.length - 1 ? '1px solid #FFB000' : 'none',
                }}
                className="flex items-start gap-4 pb-4"
              >
                <div style={{ color: '#FFB000' }} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  {job.icon}
                </div>
                <div className="flex-1">
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="mb-1 font-semibold"
                  >
                    {job.role}
                  </h3>
                  <p style={{ color: '#888888' }} className="text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Online Courses'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm glow-border rounded-lg transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #FFB000',
                  animation: `staggerFadeIn 0.6s ease-out ${index * 0.1}s both`,
                }}
                className="flex items-center gap-3 p-3 rounded transition-all duration-300 hover:bg-yellow-500/10"
              >
                <BookOpen size={20} style={{ color: '#FFB000' }} />
                <span
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Space Mono, monospace',
                  }}
                  className="text-sm font-medium"
                >
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Visits Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Study Visits'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 backdrop-blur-sm glow-border rounded-lg transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div style={{ color: '#FFB000' }} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
              <Building2 size={24} />
            </div>
            <div>
              <h3
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-lg font-bold mb-2"
              >
                Tartu Inforegister
              </h3>
              <p style={{ color: '#888888' }} className="text-sm leading-relaxed">
                A visit to the company to learn about the work environment and practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section>
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Languages'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
                animation: `staggerFadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
              className="p-6 backdrop-blur-sm glow-border rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-3 mb-3">
                <Globe size={20} style={{ color: '#FFB000' }} className="flex-shrink-0 transition-transform duration-300 hover:rotate-180" />
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Space Mono, monospace',
                  }}
                  className="font-bold"
                >
                  {lang.language}
                </h3>
              </div>
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="inline-block px-3 py-1 text-sm font-semibold rounded transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
              >
                {lang.level}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
