import fs from 'fs/promises';

const getMockData = async (filename) => {
    const data = await fs.readFile(new URL(`./../mock/${filename}`, import.meta.url));
    return JSON.parse(data);
};

const getStructure = async () => {
    return await getMockData('StructureMock.json');
}

const getAbout = async () => {
    return await getMockData('cover.json');
}

const getEducation = async () => {
    return await getMockData('education.json');
}

const getSkills = async () => {
    return await getMockData('skills.json');
}

const getExperience = async () => {
    return await getMockData('experience.json');
}

const getPortfolio = async () => {
    return await getMockData('portfolio.json');
}

const getAchievements = async () => {
    return await getMockData('achievements.json');
}

const getUpdates = async () => {
    return await getMockData('updates.json');
}

const getContact = async () => {
    return await getMockData('contact.json');
}

const method = {
    getStructure,
    getAbout,
    getEducation,
    getSkills,
    getExperience,
    getPortfolio,
    getAchievements,
    getUpdates,
    getContact
}
export default method;