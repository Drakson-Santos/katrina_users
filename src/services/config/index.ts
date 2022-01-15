import { services } from "./package.json";
const { katrina_users, katrina_projects } = services;

export const KATRINA_USERS = {
    hostname: katrina_users.api.hostname,
    port: katrina_users.api.port,
    paths: katrina_users.api.paths
}

export const KATRINA_PROJECTS = {
    hostname: katrina_projects.api.hostname,
    port: katrina_projects.api.port,
    paths: katrina_projects.api.paths
}