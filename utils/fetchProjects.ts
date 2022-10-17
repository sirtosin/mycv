import { Project, Skill } from "../types";

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  const data = await res.json();
  const Projects: Project[] = data.Projects;
  return Projects;
};
