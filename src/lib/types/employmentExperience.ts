export type EmploymentExperience = {
    employer: string,
    jobTitle: string,
    startDate: Date,
    endDate: Date | "current",
    technologies: string[]
    bulletPoints: string[]
}