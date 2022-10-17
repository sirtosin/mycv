interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: string;
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
  backgroundInformation: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
export interface Project extends SanityBody {
  image: Image;
  _type: "project";
  title: string;
  summary: string;
  linkToBuild: string;
  technologies: Technology[];
}
export interface Experience extends SanityBody {
  isCurrentlyWorkingHere: boolean;
  _type: "experience";
  jobTitle: string;
  points: string[];
  companyImage: string;
  dateStarted: string;
  dateEnded: string;
  linkToBuild: string;
  technologies: Technology[];
}
