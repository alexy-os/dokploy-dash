# Dokploy Administrative Dashboard - Educational Setup Project

An educational project demonstrating the installation, configuration, and management of **Dokploy** - a comprehensive Docker application management platform for deploying and monitoring containerized applications across single and multi-node Docker Swarm clusters.

## 📋 Project Overview

This project serves as a learning resource for setting up Dokploy as a centralized administrative dashboard to manage Docker containers, applications, and services. It includes installation scripts, configuration guides, and best practices for beginners.

### 🎯 Project Goals

- **Learn Docker Swarm Management**: Understand Docker Swarm concepts and single/multi-node cluster operations
- **Master Dokploy Dashboard**: Configure and use the Dokploy web interface for application management
- **Implement Monitoring & Logging**: Set up system monitoring, application logging, and alerting
- **Backup & Disaster Recovery**: Learn backup strategies and how to migrate Dokploy instances between hosts
- **Security Best Practices**: Implement SSL/TLS certificates, firewall rules, and access controls
- **Infrastructure as Code**: Manage Docker services and configurations through scripts and automation

## 📁 Project Structure

```
.
├── README.md                          # This file - Project overview
├── install_dokploy.sh                 # Automated installation script
├── .project/
│   └── dashboard/
│       └── DOKPLOY_GUIDE_101.md      # Comprehensive beginner's guide
├── .gitignore                         # Git ignore rules
└── .cursorignore                      # Cursor editor ignore rules
```

## 🚀 Quick Start

### Prerequisites

- **OS**: Ubuntu 24.04 LTS (or compatible Linux distribution)
- **Hardware**: Minimum 2 CPU cores, 4GB RAM, 50GB NVMe storage
- **Access**: Root or sudo privileges on the host
- **Network**: Open ports 80 (HTTP), 443 (HTTPS), 3000 (Dokploy UI)

### Installation Methods

#### Method 1: Automated Installation (Recommended for Beginners)

The quickest way to get started using our installation script:

```bash
# Download and run the installation script
cd /root
curl -o install_dokploy.sh https://raw.githubusercontent.com/your-repo/dokploy-setup/main/install_dokploy.sh
chmod +x install_dokploy.sh
./install_dokploy.sh
```

Or directly from this project:

```bash
# If cloned locally
./install_dokploy.sh
```

**What the script does:**
- Installs Docker Engine
- Initializes Docker Swarm
- Creates overlay network for Dokploy
- Sets up PostgreSQL database (for Dokploy data)
- Sets up Redis cache
- Deploys Dokploy service
- Configures Traefik reverse proxy with SSL support

**After installation:**
- Access Dokploy UI at: `http://your-server-ip:3000`
- Wait 15-30 seconds for services to fully start
- Default credentials are generated automatically

#### Method 2: Manual Installation

For a deeper understanding of each step, follow the official manual installation guide:

[Dokploy Manual Installation Guide](https://docs.dokploy.com/docs/core/manual-installation)

This approach allows you to:
- Understand each component separately
- Customize the installation for your needs
- Troubleshoot specific steps
- Learn Docker and Docker Swarm commands

## 📚 Learning Resources

### Getting Started with Dokploy

Start with the included comprehensive beginner's guide:

**[→ Read: DOKPLOY_GUIDE_101.md](./project/dashboard/DOKPLOY_GUIDE_101.md)**

This guide covers:

1. **File Structure & Storage Locations**
   - Where Dokploy stores configuration files
   - Docker volumes for persistent data
   - Project and application directories

2. **Essential Bash Commands**
   - Docker service management
   - Volume inspection and backup
   - System monitoring and logs

3. **Dokploy Web Interface**
   - Dashboard overview
   - Projects and applications management
   - Database management
   - Settings and integrations
   - Monitoring and alerts

4. **Backup & Recovery**
   - Automatic backup strategies with S3
   - Manual backup procedures
   - Database export/import
   - Full system recovery

5. **Migration & High Availability**
   - Moving Dokploy to a new host
   - Data preservation during migration
   - Volume and configuration transfer

6. **Monitoring & Logs**
   - Real-time system monitoring
   - Application logging
   - Error detection and troubleshooting
   - Performance metrics

7. **Best Practices**
   - Security hardening
   - Performance optimization
   - Maintenance schedules
   - Common issues and solutions

## 🔧 Installation Script Details

### Script Location
- **Local**: `./install_dokploy.sh`
- **GitHub**: Reference the [install script](./install_dokploy.sh)

### What Gets Installed

| Component | Version | Purpose |
|-----------|---------|---------|
| Docker Engine | Latest | Container runtime and orchestration |
| Docker Swarm | Native | Container orchestration system |
| PostgreSQL | 16 | Dokploy database backend |
| Redis | 7 | Caching and session management |
| Dokploy | Latest | Web UI for Docker management |
| Traefik | 3.6.1 | Reverse proxy and SSL termination |

### Configuration

The script automatically:
- Detects your server's public IP address (IPv4/IPv6)
- Creates Docker Swarm cluster
- Establishes overlay network (`dokploy-network`)
- Sets up persistent volumes for data
- Configures Traefik for SSL/TLS certificates
- Initializes PostgreSQL with default credentials

**Security Note**: The script sets a default PostgreSQL password. For production, change this in `/etc/dokploy/` after installation.

### Troubleshooting Installation

If installation gets stuck or fails:

```bash
# Check service status
docker service ls
docker service ps dokploy

# View logs
docker service logs dokploy -f

# Check resources
docker stats
df -h
free -h

# For detailed troubleshooting, see DOKPLOY_GUIDE_101.md
```

## 📖 Documentation

### Included Documentation

1. **DOKPLOY_GUIDE_101.md** - Complete beginner's guide
   - Directory structure
   - Command reference
   - UI walkthrough
   - Backup procedures
   - Migration guide
   - Troubleshooting

### External Resources

- **Official Dokploy Docs**: https://docs.dokploy.com/
- **Docker Documentation**: https://docs.docker.com/
- **Docker Swarm Guide**: https://docs.docker.com/engine/swarm/
- **Traefik Documentation**: https://doc.traefik.io/

## 🔐 Security Considerations

### Initial Setup

1. **Change Default Passwords**
   ```bash
   # Update PostgreSQL password in the installation
   # Edit /etc/dokploy/ configuration files
   ```

2. **Enable SSL/TLS**
   - Dokploy integrates with Let's Encrypt via Traefik
   - Configure domain settings in Dokploy UI
   - Certificates auto-renew

3. **Firewall Configuration**
   ```bash
   ufw enable
   ufw allow 22/tcp    # SSH
   ufw allow 80/tcp    # HTTP
   ufw allow 443/tcp   # HTTPS
   # Keep port 3000 (Dokploy UI) internal or behind reverse proxy
   ```

4. **SSH Key Authentication**
   ```bash
   ssh-keygen -t ed25519 -C "server-key"
   # Disable password authentication
   # Restrict root access
   ```

### Production Hardening

- Place Dokploy UI behind a VPN or reverse proxy
- Implement 2FA in Dokploy settings
- Regular security updates: `apt update && apt upgrade`
- Monitor logs for suspicious activity
- Implement rate limiting on ingress points

## 💾 Backup Strategy

### Automated Backups

Configure automatic backups through Dokploy UI:

```
Settings → Backups → Create Backup → S3 Integration
```

### Critical Data to Backup

```
Daily:
  - /etc/dokploy/                          # Configurations
  - PostgreSQL database volume              # Dokploy metadata
  - Redis volume                            # Cache data
  - SSL certificates                        # Traefik config

Weekly:
  - /opt/dokploy-projects/                 # Your applications
  - Docker registry credentials             # For private registries
```

### Backup Locations

- **Local**: `/var/lib/docker/volumes/`
- **Remote**: S3-compatible storage (AWS S3, MinIO, DigitalOcean Spaces)
- **Off-site**: Regular download of S3 backups to secure location

## 🚀 Use Cases

### 1. Learning Container Orchestration
Learn Docker, Docker Swarm, and container management fundamentals through hands-on practice.

### 2. Single-Server Application Hub
Deploy multiple containerized applications on one server with centralized management.

### 3. Multi-Server Management
Extend to multiple servers:
- Manager nodes for orchestration (this server)
- Worker nodes for application hosting
- Centralized dashboard for all servers

### 4. Development Environment
Quick deployment and testing of applications with live monitoring.

### 5. Production Infrastructure
Enterprise-grade application management with:
- High availability and failover
- Automated backups
- SSL/TLS encryption
- Performance monitoring

## 📊 System Monitoring

After setup, monitor your Dokploy instance:

```bash
# Real-time resource usage
docker stats

# Service status
docker service ls
docker service ps dokploy

# Logs monitoring
docker service logs dokploy -f

# Disk usage
du -sh /var/lib/docker/volumes/*

# System overview
docker system df
```

## 🔄 Maintenance

### Regular Tasks

**Daily**
- Check Dashboard for errors
- Review application logs
- Verify backup completion

**Weekly**
- Check resource usage (CPU, RAM, Disk)
- Update Docker images
- Review security logs

**Monthly**
- Update system packages
- Test backup restoration
- Clean up unused Docker objects
- Review performance metrics

### Updates

```bash
# Update Docker images
docker pull dokploy/dokploy:latest
docker service update --image dokploy/dokploy:latest dokploy

# Update system
apt update && apt upgrade -y

# Restart services if needed
docker service update --force dokploy
```

## 🤝 Contributing

This is an educational project. To contribute:

1. Test on a clean Ubuntu 24.04 instance
2. Document any changes clearly
3. Update guides with new information
4. Submit improvements via pull request

## 📝 License

This educational project is provided as-is for learning purposes.

## ❓ Troubleshooting

### Service won't start

```bash
# Check logs
docker service logs dokploy -f

# Restart service
docker service update --force dokploy

# Or recreate it
docker service rm dokploy
# Re-run installation script
```

### No access to Dokploy UI

```bash
# Verify port is open
ss -tulnp | grep 3000

# Check firewall
ufw status
sudo ufw allow 3000/tcp

# Verify Docker network
docker network ls | grep dokploy-network
```

### Database connection issues

```bash
# Check PostgreSQL service
docker service ps dokploy-postgres

# View database logs
docker service logs dokploy-postgres -f

# Check volume
docker volume inspect dokploy-postgres-database
```

For more detailed troubleshooting, see [DOKPLOY_GUIDE_101.md](./project/dashboard/DOKPLOY_GUIDE_101.md#solving-problems).

## 📞 Support

- **Official Documentation**: https://docs.dokploy.com/
- **GitHub Issues**: Check Dokploy official repository
- **Community**: Dokploy Discord/GitHub discussions

## 🎓 Next Steps After Installation

1. ✅ Access Dokploy UI at `http://your-ip:3000`
2. ✅ Verify all services are green on Dashboard
3. ✅ Configure S3 integration for backups (already done in this setup)
4. ✅ Set up SSL certificates for your domain
5. ✅ Create your first test project
6. ✅ Deploy a simple application (nginx, hello-world)
7. ✅ Monitor logs and resource usage
8. ✅ Test backup and restoration process
9. ✅ Create firewall rules for production
10. ✅ Document your infrastructure

## 📚 Learning Path

**Beginner** → Start with the [installation script](./install_dokploy.sh) and [DOKPLOY_GUIDE_101.md](./project/dashboard/DOKPLOY_GUIDE_101.md)

**Intermediate** → Explore [manual installation](https://docs.dokploy.com/docs/core/manual-installation), create projects, deploy applications

**Advanced** → Multi-node clusters, monitoring, security hardening, disaster recovery

---

**Last Updated**: November 2025

**Version**: 1.0.0

**Status**: Educational Project - Production Ready

