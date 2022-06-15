import type { WorkExperience } from "$lib/types/workExperience";

const afterSchoolHQ: WorkExperience = {
    employer: "AfterSchool HQ",
    jobTitle: "Software Engineer",
    technologies: ["C#", ".NET", "React", "AWS", "Azure Devops", "YAML", "SQL"],
    bulletPoints: [
        "Managed a remote team of overseas developers with multiple projects",
        "Helped reduced total deployment pipeline time (commit to production) from ~40 min to ~15 min allowing a for a quick rollback recovery of 2 min",
        "Built and delivered code using mob/pair programming practices",
    ]
}

const developerTownStarts: WorkExperience = {
    employer: "DeveloperTown Starts",
    jobTitle: "Growth Engineer",
    technologies: ["SQL", "React", "React Native", "Python", "OpenCV", "Node.js", "C#", "AWS", "Azure Devops"],
    bulletPoints: [
        "Collaborated with a portfolio of startups to fulfill a variety of technical needs",
        "Created rapid iterative experiments to gather quick feedback",
        "Built a prototype for an image recognition app using react native + opencv",
    ]
}

const developertTownStartsIntern: WorkExperience = {
    employer: "Developer Town Starts",
    jobTitle: "Growth Engineer Intern",
    technologies: ["SQL", "React", "Python", "Node.js", "d3.js", "AWS", "Azure Devops"],
    bulletPoints: [
        "Collaborated with a portfolio of startups to fulfill a variety of technical needs",
        "Prototyped an org chart visualization using d3.js",
    ]
}

const workExperiences: readonly WorkExperience[] = [
    afterSchoolHQ,
    developerTownStarts,
    developertTownStartsIntern
]

export default workExperiences;