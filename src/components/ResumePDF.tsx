import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer';
import type { ResumeData, Project } from '@/types/content';

// Type declaration for Node.js process in this context
declare const process:
  | {
      env?: {
        PUBLIC_URL?: string;
        SITE_URL?: string;
      };
    }
  | undefined;

interface ResumePDFProps {
  resumeData: ResumeData;
  projects: Project[];
}

const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  container: {
    border: '4px solid #000000',
    margin: '16px',
    backgroundColor: '#FFFFFF',
  },
  header: {
    borderBottom: '4px solid #000000',
    padding: '16px',
    backgroundColor: '#00FF41',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
  },
  profileImageContainer: {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    border: '4px solid #000000',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#000000',
  },
  title: {
    fontSize: '13px',
    marginBottom: '6px',
    color: '#000000',
    fontFamily: 'Courier',
  },
  bio: {
    fontSize: '9px',
    lineHeight: '1.4',
    marginBottom: '8px',
    color: '#000000',
  },
  bioHighlight: {
    fontSize: '9px',
    fontWeight: 'bold',
    color: '#000000',
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4px',
    marginTop: '4px',
    marginBottom: '6px',
  },
  expertiseBadge: {
    backgroundColor: '#000000',
    padding: '3px 6px',
    border: '2px solid #000000',
  },
  expertiseBadgeText: {
    color: '#FFFFFF',
    fontSize: '7px',
    fontFamily: 'Courier',
  },
  contactContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '6px',
  },
  contactBadge: {
    backgroundColor: '#000000',
    padding: '4px 8px',
    border: '2px solid #000000',
  },
  contactBadgeText: {
    color: '#00FF41',
    fontSize: '8px',
    fontFamily: 'Courier',
  },
  // TWO COLUMN LAYOUT
  twoColumn: {
    flexDirection: 'row',
    flex: 1,
  },
  leftColumn: {
    flex: 2.5,
    padding: '16px',
    borderRight: '4px solid #000000',
  },
  rightColumn: {
    flex: 1,
    padding: '16px',
    backgroundColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#00FF41',
    padding: '6px 8px',
    border: '3px solid #000000',
    color: '#000000',
  },
  sectionTitleBlue: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#00D9FF',
    padding: '6px 8px',
    border: '3px solid #000000',
    color: '#000000',
  },
  sectionTitleRed: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#FF3333',
    padding: '6px 8px',
    border: '3px solid #000000',
    color: '#000000',
  },
  experienceItem: {
    marginBottom: '8px',
    paddingLeft: '10px',
    borderLeft: '3px solid #000000',
  },
  experiencePeriod: {
    fontSize: '8px',
    fontFamily: 'Courier',
    backgroundColor: '#000000',
    color: '#00FF41',
    padding: '2px 6px',
    marginBottom: '3px',
  },
  experienceTitle: {
    fontSize: '11px',
    fontWeight: 'bold',
    marginBottom: '2px',
    color: '#000000',
  },
  experienceCompany: {
    fontSize: '9px',
    fontFamily: 'Courier',
    marginBottom: '3px',
    color: '#000000',
  },
  highlightList: {
    marginTop: '3px',
  },
  highlightItem: {
    fontSize: '8px',
    marginBottom: '1px',
    flexDirection: 'row',
    gap: '3px',
  },
  bullet: {
    color: '#00FF41',
    fontWeight: 'bold',
  },
  educationItem: {
    border: '3px solid #000000',
    padding: '6px',
    marginBottom: '6px',
    backgroundColor: '#E6F7FF',
  },
  educationPeriod: {
    fontSize: '8px',
    fontFamily: 'Courier',
    backgroundColor: '#000000',
    color: '#00D9FF',
    padding: '2px 5px',
    marginBottom: '3px',
  },
  educationTitle: {
    fontSize: '10px',
    fontWeight: 'bold',
    marginTop: '3px',
    color: '#000000',
  },
  educationInstitution: {
    fontSize: '8px',
    fontFamily: 'Courier',
    color: '#000000',
  },
  // Technical Skills Section
  skillsSection: {
    padding: '16px',
    borderTop: '4px solid #000000',
  },
  skillsGrid: {
    flexDirection: 'row',
    gap: '12px',
    marginBottom: '8px',
  },
  skillColumn: {
    flex: 1,
  },
  skillCategory: {
    fontSize: '9px',
    fontFamily: 'Courier',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#000000',
  },
  skillBadgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#000000',
    padding: '3px 6px',
    fontSize: '7px',
    fontFamily: 'Courier',
    border: '2px solid #000000',
    marginRight: '3px',
    marginBottom: '3px',
  },
  skillBadgeText: {
    color: '#FFFFFF',
  },
  // Projects (Page 2)
  projectItem: {
    marginBottom: '8px',
    border: '3px solid #000000',
    padding: '8px',
    backgroundColor: '#FFFFFF',
  },
  projectTitle: {
    fontSize: '11px',
    fontWeight: 'bold',
    marginBottom: '3px',
    color: '#000000',
  },
  projectDescription: {
    fontSize: '8px',
    marginBottom: '4px',
    color: '#000000',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4px',
  },
  projectTag: {
    backgroundColor: '#00FF41',
    padding: '2px 6px',
    border: '2px solid #000000',
  },
  projectTagText: {
    fontSize: '7px',
    fontFamily: 'Courier',
    color: '#000000',
  },
  // Achievements
  achievementCard: {
    border: '3px solid #000000',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#FFFFFF',
  },
  achievementValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  achievementLabel: {
    fontSize: '9px',
    fontFamily: 'Courier',
    textTransform: 'uppercase',
    color: '#000000',
  },
  // Expertise
  expertiseCard: {
    border: '3px solid #000000',
    padding: '6px',
    marginBottom: '6px',
    backgroundColor: '#FFFFFF',
  },
  expertiseTitle: {
    fontSize: '10px',
    fontFamily: 'Courier',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#00D9FF',
  },
  expertiseItem: {
    fontSize: '8px',
    fontFamily: 'Courier',
    marginBottom: '2px',
    flexDirection: 'row',
    gap: '4px',
  },
  // Skill Section (for right column)
  skillSection: {
    marginBottom: '6px',
  },
});

export const ResumePDF: React.FC<ResumePDFProps> = ({ resumeData, projects }) => {
  // Guard against undefined data
  if (!resumeData || !resumeData.personal || !resumeData.experience) {
    return null;
  }

  const getImageSrc = (imagePath: string) => {
    if (imagePath.startsWith('/')) {
      const baseUrl = process?.env?.PUBLIC_URL || process?.env?.SITE_URL || 'http://localhost:4321';
      return `${baseUrl}${imagePath}`;
    }
    return imagePath;
  };

  // Split experience: First 4 on Page 1 (includes Software Engineer 2018-2020), rest on Page 2
  const page1Experience = (resumeData.experience || []).slice(0, 4);
  const page2Experience = (resumeData.experience || []).slice(4);

  // Ensure we have projects data
  const projectsList = projects || [];

  // Ensure we have all required nested data
  const personal = resumeData.personal || {};
  const education = resumeData.education || [];
  const certifications = resumeData.certifications || [];
  const skills = resumeData.skills || {};
  const expertise = resumeData.expertise || [];

  return (
    <Document>
      {/* PAGE 1: Header, Experience (first 3), Tech Skills (Languages, Infrastructure, Data & AI) */}
      <Page size="LETTER" style={styles.page} wrap={false}>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View style={styles.profileImageContainer}>
                <Image
                  src={getImageSrc(personal.image || '')}
                  style={styles.profileImage}
                  cache={false}
                />
              </View>
              <View style={styles.headerText}>
                <Text style={styles.name}>{personal.name || ''}</Text>
                <Text style={styles.title}>{personal.title || ''}</Text>

                {/* Enhanced Bio with Impact */}
                <View style={{ marginBottom: '6px' }}>
                  <Text style={styles.bio}>
                    {personal.bio ? personal.bio.split('.')[0] : ''}. Delivered{' '}
                    <Text style={styles.bioHighlight}>40% faster releases</Text>,{' '}
                    <Text style={styles.bioHighlight}>60% reduced operations</Text>, serving{' '}
                    <Text style={styles.bioHighlight}>50K+ users</Text> with{' '}
                    <Text style={styles.bioHighlight}>99.9% uptime</Text> while mentoring{' '}
                    <Text style={styles.bioHighlight}>10+ engineers</Text>.
                  </Text>
                </View>

                {/* Core Expertise Badges */}
                <View style={styles.expertiseContainer}>
                  {expertise.map((area, index) => (
                    <View key={index} style={styles.expertiseBadge}>
                      <Text style={styles.expertiseBadgeText}>{area.title}</Text>
                    </View>
                  ))}
                </View>

                <View style={styles.contactContainer}>
                  {(personal.contact || []).map((contact, index) => (
                    <View key={index} style={styles.contactBadge}>
                      <Text style={styles.contactBadgeText}>{contact.value}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Two Column: Experience | Tech Skills */}
          <View style={styles.twoColumn}>
            {/* Left Column - Experience (First 3) */}
            <View style={styles.leftColumn}>
              <Text style={styles.sectionTitle}>EXPERIENCE</Text>
              {page1Experience.map((job, index) => (
                <View key={index} style={styles.experienceItem}>
                  <Text style={styles.experiencePeriod}>{job.period}</Text>
                  <Text style={styles.experienceTitle}>{job.title}</Text>
                  <Text style={styles.experienceCompany}>
                    {job.company} • {job.location}
                  </Text>
                  <View style={styles.highlightList}>
                    {job.highlights.slice(0, 3).map((highlight, hIndex) => (
                      <View key={hIndex} style={styles.highlightItem}>
                        <Text style={styles.bullet}>●</Text>
                        <Text>{highlight}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {/* Right Column - Education → Certifications → Technical Skills → Core Expertise */}
            <View style={styles.rightColumn}>
              {/* Education */}
              <Text style={styles.sectionTitleBlue}>EDUCATION</Text>
              {education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.educationPeriod}>{edu.period}</Text>
                  <Text style={styles.educationTitle}>{edu.degree}</Text>
                  <Text style={styles.educationInstitution}>{edu.institution}</Text>
                  {edu.gpa && (
                    <Text
                      style={[
                        styles.educationInstitution,
                        { color: '#00D9FF', fontWeight: 'bold', marginTop: '2px' },
                      ]}
                    >
                      {edu.gpa}
                    </Text>
                  )}
                </View>
              ))}

              {/* Certifications */}
              <Text style={[styles.sectionTitle, { marginTop: '8px' }]}>CERTIFICATIONS</Text>
              {certifications.slice(0, 2).map((cert, index) => (
                <View
                  key={`cert-${index}`}
                  style={[styles.educationItem, { backgroundColor: '#E6FFE6' }]}
                >
                  <Text style={[styles.educationPeriod, { color: '#00FF41' }]}>{cert.date}</Text>
                  <Text style={styles.educationTitle}>{cert.title}</Text>
                  <Text style={styles.educationInstitution}>{cert.issuer}</Text>
                </View>
              ))}

              {/* Technical Skills - Languages and Frameworks on Page 1 */}
              <Text style={[styles.sectionTitleRed, { marginTop: '8px' }]}>TECHNICAL SKILLS</Text>

              <View style={styles.skillSection}>
                <Text style={[styles.skillCategory, { color: '#00FF41' }]}>LANGUAGES</Text>
                <View style={styles.skillBadgeContainer}>
                  {(skills.languages || []).map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text style={styles.skillBadgeText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.skillSection}>
                <Text style={styles.skillCategory}>FRAMEWORKS</Text>
                <View style={styles.skillBadgeContainer}>
                  {(skills.frameworks || []).map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text style={styles.skillBadgeText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* PAGE 2: Experience continued + Projects | Tech Skills continued */}
      <Page size="LETTER" style={styles.page} wrap={false}>
        <View style={styles.container}>
          {/* Two Column: Experience + Projects | Tech Skills continued */}
          <View style={styles.twoColumn}>
            {/* Left Column - Experience Continued + Projects */}
            <View style={styles.leftColumn}>
              {/* Experience Continued */}
              {page2Experience.length > 0 && (
                <>
                  <Text style={styles.sectionTitle}>EXPERIENCE (CONTINUED)</Text>
                  {page2Experience.map((job, index) => (
                    <View key={index} style={styles.experienceItem}>
                      <Text style={styles.experiencePeriod}>{job.period}</Text>
                      <Text style={styles.experienceTitle}>{job.title}</Text>
                      <Text style={styles.experienceCompany}>
                        {job.company} • {job.location}
                      </Text>
                      <View style={styles.highlightList}>
                        {job.highlights.slice(0, 3).map((highlight, hIndex) => (
                          <View key={hIndex} style={styles.highlightItem}>
                            <Text style={styles.bullet}>●</Text>
                            <Text>{highlight}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </>
              )}

              {/* Projects */}
              <Text style={[styles.sectionTitle, { marginTop: '12px' }]}>PROJECTS</Text>
              {projectsList.slice(0, 4).map((project, index) => (
                <View key={index} style={styles.projectItem}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectDescription}>{project.description}</Text>
                  <View style={styles.tagContainer}>
                    {(project.tags || []).slice(0, 4).map((tag, tIndex) => (
                      <View key={tIndex} style={styles.projectTag}>
                        <Text style={styles.projectTagText}>{tag}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            {/* Right Column - Certifications (Continued) → Technical Skills (Continued) → Core Expertise */}
            <View style={styles.rightColumn}>
              {/* Certifications Continued */}
              {certifications.length > 2 && (
                <>
                  <Text style={styles.sectionTitle}>CERTIFICATIONS (CONTINUED)</Text>
                  {certifications.slice(2).map((cert, index) => (
                    <View
                      key={`cert-${index}`}
                      style={[styles.educationItem, { backgroundColor: '#E6FFE6' }]}
                    >
                      <Text style={[styles.educationPeriod, { color: '#00FF41' }]}>
                        {cert.date}
                      </Text>
                      <Text style={styles.educationTitle}>{cert.title}</Text>
                      <Text style={styles.educationInstitution}>{cert.issuer}</Text>
                    </View>
                  ))}
                </>
              )}

              {/* Technical Skills Continued - Infrastructure, Data & AI, DevOps, Architecture */}
              <Text
                style={[
                  styles.sectionTitleRed,
                  { marginTop: certifications.length > 2 ? '8px' : '0px' },
                ]}
              >
                TECHNICAL SKILLS (CONTINUED)
              </Text>

              <View style={styles.skillSection}>
                <Text style={[styles.skillCategory, { color: '#00D9FF' }]}>INFRASTRUCTURE</Text>
                <View style={styles.skillBadgeContainer}>
                  {(skills.infrastructure || []).map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text style={styles.skillBadgeText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.skillSection}>
                <Text style={[styles.skillCategory, { color: '#FF3333' }]}>DATA & AI</Text>
                <View style={styles.skillBadgeContainer}>
                  {(skills.dataAI || []).map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text style={styles.skillBadgeText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.skillSection}>
                <Text style={[styles.skillCategory, { color: '#00FF41' }]}>DEVOPS</Text>
                <View style={styles.skillBadgeContainer}>
                  {(skills.devops || []).map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text style={styles.skillBadgeText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.skillSection}>
                <Text style={[styles.skillCategory, { color: '#00D9FF' }]}>ARCHITECTURE</Text>
                <View style={styles.skillBadgeContainer}>
                  {(skills.architecture || []).map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                      <Text style={styles.skillBadgeText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
