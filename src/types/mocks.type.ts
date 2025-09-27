export type MockUser = {
    id: number;
    role: string;
    company: string | null;
    position: string | null;
    title: string | null;
    skills: string[];
    experienceYears: number | null;
    summary: string | null;
    pastProjects: string[];
    interests: string[];
};

export type MockProfile = MockUser;

export type MockProject = {
    id: number;
    name: string;
    description: string;
    requiredSkills: string[];
    preferredExperience: string;
    domain: string;
    ownerId: number;
};

export type MockAction = {
    id: number;
    userId: number;
    projectId: number;
    action: string;
    targetUserId: number | null;
};

export type MockData = {
    users: MockUser[];
    profiles: MockProfile[];
    projects: MockProject[];
    actions: MockAction[];
};


