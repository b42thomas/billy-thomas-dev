export type EmploymentExperience = {
    employer: string,
    jobTitle: string,
    startDate: Date,
    endDate: Date | "Currently Employed",
    technologies: string[]
    bulletPoints: string[]
}