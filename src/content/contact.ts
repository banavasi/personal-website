export const contactContent = {
  header: {
    title: {
      line1: "LET'S",
      line2: "CONNECT",
    },
    description: "Interested in collaborating on a project or discussing complex architectural challenges? Drop me a line.",
  },
  contactInfo: [
    {
      icon: "Mail",
      label: "Email",
      value: "contact@shashankshandilya.me",
      href: "mailto:contact@shashankshandilya.me",
      accentColor: "blue" as const,
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      value: "in/shashankshandilya",
      href: "https://linkedin.com/in/shashankshandilya",
      accentColor: "green" as const,
    },
    {
      icon: "Github",
      label: "GitHub",
      value: "github.com/banavasi",
      href: "https://github.com/banavasi",
      accentColor: "none" as const,
    },
  ],
  location: {
    text: "Based in Scottsdale, Arizona, US",
  },
  form: {
    title: "SEND A MESSAGE",
    fields: {
      name: {
        label: "Name",
        placeholder: "JOHN DOE",
      },
      email: {
        label: "Email",
        placeholder: "JOHN@EXAMPLE.COM",
        type: "email",
      },
      subject: {
        label: "Subject",
        placeholder: "PROJECT INQUIRY",
      },
      message: {
        label: "Message",
        placeholder: "TELL ME ABOUT YOUR PROJECT...",
      },
    },
    submitButton: {
      text: "SEND MESSAGE",
    },
  },
};
