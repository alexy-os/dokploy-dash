import { Admin } from './resources/Admin';
import { Docker } from './resources/Docker';
import { Project } from './resources/Project';
import { Application } from './resources/Application';
import { MySQL } from './resources/MySQL';
import { Postgres } from './resources/Postgres';
import { Redis } from './resources/Redis';
import { Mongo } from './resources/Mongo';
import { MariaDB } from './resources/MariaDB';
import { Compose } from './resources/Compose';
import { User } from './resources/User';
import { Domain } from './resources/Domain';
import { Destination } from './resources/Destination';
import { Backup } from './resources/Backup';
import { Deployment } from './resources/Deployment';
import { PreviewDeployment } from './resources/PreviewDeployment';
import { Mounts } from './resources/Mounts';
import { Certificates } from './resources/Certificates';
import { Settings } from './resources/Settings';
import { Security } from './resources/Security';
import { Redirects } from './resources/Redirects';
import { Port } from './resources/Port';
import { Registry } from './resources/Registry';
import { Cluster } from './resources/Cluster';
import { Notification } from './resources/Notification';
import { SSHKey } from './resources/SSHKey';
import { GitProvider } from './resources/GitProvider';
import { Gitea } from './resources/Gitea';
import { Bitbucket } from './resources/Bitbucket';
import { Gitlab } from './resources/Gitlab';
import { Github } from './resources/Github';
import { Server } from './resources/Server';
import { Stripe } from './resources/Stripe';
import { Swarm } from './resources/Swarm';
import { AI } from './resources/AI';
import { Organization } from './resources/Organization';
import { Schedule } from './resources/Schedule';
import { Rollback } from './resources/Rollback';
import { VolumeBackups } from './resources/VolumeBackups';
import { Environment } from './resources/Environment';
import { DokployError } from './error';

export { DokployError };

/**
 * Dokploy API Client
 */
export class Dokploy {
  public readonly admin: Admin;
  public readonly docker: Docker;
  public readonly project: Project;
  public readonly application: Application;
  public readonly mysql: MySQL;
  public readonly postgres: Postgres;
  public readonly redis: Redis;
  public readonly mongo: Mongo;
  public readonly mariadb: MariaDB;
  public readonly compose: Compose;
  public readonly user: User;
  public readonly domain: Domain;
  public readonly destination: Destination;
  public readonly backup: Backup;
  public readonly deployment: Deployment;
  public readonly previewDeployment: PreviewDeployment;
  public readonly mounts: Mounts;
  public readonly certificates: Certificates;
  public readonly settings: Settings;
  public readonly security: Security;
  public readonly redirects: Redirects;
  public readonly port: Port;
  public readonly registry: Registry;
  public readonly cluster: Cluster;
  public readonly notification: Notification;
  public readonly sshKey: SSHKey;
  public readonly gitProvider: GitProvider;
  public readonly gitea: Gitea;
  public readonly bitbucket: Bitbucket;
  public readonly gitlab: Gitlab;
  public readonly github: Github;
  public readonly server: Server;
  public readonly stripe: Stripe;
  public readonly swarm: Swarm;
  public readonly ai: AI;
  public readonly organization: Organization;
  public readonly schedule: Schedule;
  public readonly rollback: Rollback;
  public readonly volumeBackups: VolumeBackups;
  public readonly environment: Environment;

  constructor(
    private readonly baseUrl: string,
    private readonly apiToken: string
  ) {
    this.admin = new Admin(baseUrl, apiToken);
    this.docker = new Docker(baseUrl, apiToken);
    this.project = new Project(baseUrl, apiToken);
    this.application = new Application(baseUrl, apiToken);
    this.mysql = new MySQL(baseUrl, apiToken);
    this.postgres = new Postgres(baseUrl, apiToken);
    this.redis = new Redis(baseUrl, apiToken);
    this.mongo = new Mongo(baseUrl, apiToken);
    this.mariadb = new MariaDB(baseUrl, apiToken);
    this.compose = new Compose(baseUrl, apiToken);
    this.user = new User(baseUrl, apiToken);
    this.domain = new Domain(baseUrl, apiToken);
    this.destination = new Destination(baseUrl, apiToken);
    this.backup = new Backup(baseUrl, apiToken);
    this.deployment = new Deployment(baseUrl, apiToken);
    this.previewDeployment = new PreviewDeployment(baseUrl, apiToken);
    this.mounts = new Mounts(baseUrl, apiToken);
    this.certificates = new Certificates(baseUrl, apiToken);
    this.settings = new Settings(baseUrl, apiToken);
    this.security = new Security(baseUrl, apiToken);
    this.redirects = new Redirects(baseUrl, apiToken);
    this.port = new Port(baseUrl, apiToken);
    this.registry = new Registry(baseUrl, apiToken);
    this.cluster = new Cluster(baseUrl, apiToken);
    this.notification = new Notification(baseUrl, apiToken);
    this.sshKey = new SSHKey(baseUrl, apiToken);
    this.gitProvider = new GitProvider(baseUrl, apiToken);
    this.gitea = new Gitea(baseUrl, apiToken);
    this.bitbucket = new Bitbucket(baseUrl, apiToken);
    this.gitlab = new Gitlab(baseUrl, apiToken);
    this.github = new Github(baseUrl, apiToken);
    this.server = new Server(baseUrl, apiToken);
    this.stripe = new Stripe(baseUrl, apiToken);
    this.swarm = new Swarm(baseUrl, apiToken);
    this.ai = new AI(baseUrl, apiToken);
    this.organization = new Organization(baseUrl, apiToken);
    this.schedule = new Schedule(baseUrl, apiToken);
    this.rollback = new Rollback(baseUrl, apiToken);
    this.volumeBackups = new VolumeBackups(baseUrl, apiToken);
    this.environment = new Environment(baseUrl, apiToken);
  }
}

export default Dokploy;
