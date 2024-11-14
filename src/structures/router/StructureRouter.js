import express from 'express';
import fs from 'fs/promises';
import structureService from './../application/StructureService.js'

const router = express.Router();

const getMockData = async (filename) => {
    const data = await fs.readFile(new URL(`./../mock/${filename}`, import.meta.url));
    return JSON.parse(data);
};

router.get('', async (req, res) => {
    const mock = await structureService.getStructure();
    res.json(mock);
});

router.get('/about', async (req, res) => {
    const mock = await structureService.getAbout();
    res.json(mock); 
})

router.get('/education', async (req, res) => {
    const mock = await structureService.getEducation();
    res.json(mock); 
})

router.get('/experience', async (req, res) => {
    const mock = await structureService.getExperience();
    res.json(mock)
})

router.get('/skills', async (req, res) => {
    const mock = await structureService.getSkills();
    res.json(mock); 
})

router.get('/portfolio' ,async (req, res) => {
    const mock = await structureService.getPortfolio();
    res.json(mock); 
})

router.get('/achievements' ,async (req, res) => {
    const mock = await structureService.getAchievements();
    res.json(mock); 
})

router.get('/updates' ,async (req, res) => {
    const mock = await structureService.getUpdates();
    res.json(mock); 
})

router.get('/contact' ,async (req, res) => {
    const mock = await structureService.getContact();
    res.json(mock); 
})

export default router;