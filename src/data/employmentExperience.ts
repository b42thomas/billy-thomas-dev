import type { EmploymentExperience } from "$lib/types/employmentExperience";

const afterSchoolHQ: EmploymentExperience = {
    employer: "AfterSchool HQ",
    jobTitle: "Software Engineer",
    startDate: new Date(2020, 8),
    endDate: "Currently Employed",
    technologies: ["C#", ".NET", "React", "AWS", "Azure Devops", "YAML", "SQL"],
    bulletPoints: [
        "Managed a remote team of overseas developers with multiple projects",
        "Helped reduced total deployment pipeline time (commit to production) from ~40 min to ~15 min allowing a for a quick rollback recovery of 2 min",
        "Built and delivered code using mob/pair programming practices",
        "Optimized search page SQL query, bringing respone time from several seconds to milliseconds"
    ]
}

const developerTownStarts: EmploymentExperience = {
    employer: "DeveloperTown Starts",
    jobTitle: "Growth Engineer",
    startDate: new Date(2018, 0),
    endDate: new Date(2020, 5),
    technologies: ["SQL", "React", "React Native", "Python", "OpenCV", "Node.js", "C#", "AWS", "Azure Devops"],
    bulletPoints: [
        "Collaborated with a portfolio of startups to fulfill a variety of technical needs",
        "Created rapid iterative experiments to gather quick feedback",
        "Built a prototype for an image recognition app using react native + opencv",
    ]
}

const developertTownStartsIntern: EmploymentExperience = {
    employer: "Developer Town Starts",
    jobTitle: "Growth Engineer Intern",
    startDate: new Date(2017, 4),
    endDate: new Date(2017, 11),
    technologies: ["SQL", "React", "Python", "Node.js", "d3.js", "AWS", "Azure Devops"],
    bulletPoints: [
        "Collaborated with a portfolio of startups to fulfill a variety of technical needs",
        "Prototyped an org chart visualization using d3.js",
    ]
}

const employmentHistory: readonly EmploymentExperience[] = [
    afterSchoolHQ,
    developerTownStarts,
    developertTownStartsIntern
]

export default employmentHistory;