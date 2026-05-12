Architecture Overview
Your PC
   ↓ git push
GitHub Repository
   ↓ triggers workflow
GitHub Actions
   ↓ sends job
AWS EC2 Self-Hosted Runner
   ↓
npm install
npm run build
****************************************************************************************************************************************

commands:
on EC2:

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/AWS
$ ssh -i ST-Key-Dev001.pem ubuntu@16.171.238.255
The authenticity of host '16.171.238.255 (16.171.238.255)' can't be established.
ED25519 key fingerprint is: SHA256:+T1AHSoN7ds2u2IqqPhSTm2aRl4wtyMfulRESxq8fjo
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '16.171.238.255' (ED25519) to the list of known hosts.
Welcome to Ubuntu 24.04.4 LTS (GNU/Linux 6.17.0-1012-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Tue May 12 15:02:30 UTC 2026

  System load:  0.0               Temperature:           -273.1 C
  Usage of /:   26.5% of 6.71GB   Processes:             116
  Memory usage: 6%                Users logged in:       0
  Swap usage:   0%                IPv4 address for ens5: 10.0.4.46

Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update


The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@ip-10-0-4-46:~$ sudo apt update
Hit:1 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble InRelease
Get:2 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
Get:3 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:4 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
Get:5 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/universe amd64 Packages [15.0 MB]
Get:6 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/universe Translation-en [5982 kB]
Get:7 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages [1668 kB]
Get:8 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/universe amd64 Components [3871 kB]
Get:9 http://security.ubuntu.com/ubuntu noble-security/main Translation-en [264 kB]
Get:10 http://security.ubuntu.com/ubuntu noble-security/main amd64 Components [21.9 kB]
Get:11 http://security.ubuntu.com/ubuntu noble-security/main amd64 c-n-f Metadata [11.0 kB]
Get:12 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1187 kB]
Get:13 http://security.ubuntu.com/ubuntu noble-security/universe Translation-en [229 kB]
Get:14 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/universe amd64 c-n-f Metadata [301 kB]
Get:15 http://security.ubuntu.com/ubuntu noble-security/universe amd64 Components [74.2 kB]
Get:16 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/multiverse amd64 Packages [269 kB]
Get:17 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/multiverse Translation-en [118 kB]
Get:18 http://security.ubuntu.com/ubuntu noble-security/universe amd64 c-n-f Metadata [23.1 kB]
Get:19 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/multiverse amd64 Components [35.0 kB]
Get:20 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble/multiverse amd64 c-n-f Metadata [8328 B]
Get:21 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [1969 kB]
Get:22 http://security.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [2943 kB]
Get:23 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main Translation-en [351 kB]
Get:24 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main amd64 Components [177 kB]
Get:25 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main amd64 c-n-f Metadata [17.1 kB]
Get:26 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1689 kB]
Get:27 http://security.ubuntu.com/ubuntu noble-security/restricted Translation-en [685 kB]
Get:28 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/universe Translation-en [328 kB]
Get:29 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Components [386 kB]
Get:30 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [28.8 kB]
Get:31 http://security.ubuntu.com/ubuntu noble-security/multiverse Translation-en [7656 B]
Get:32 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 Components [208 B]
Get:33 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/universe amd64 c-n-f Metadata [34.5 kB]
Get:34 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [3124 kB]
Get:35 http://security.ubuntu.com/ubuntu noble-security/multiverse amd64 c-n-f Metadata [396 B]
Get:36 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/restricted Translation-en [721 kB]
Get:37 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 c-n-f Metadata [480 B]
Get:38 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [44.4 kB]
Get:39 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/multiverse Translation-en [10.7 kB]
Get:40 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Components [940 B]
Get:41 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 c-n-f Metadata [656 B]
Get:42 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/main amd64 Packages [40.6 kB]
Get:43 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/main Translation-en [9172 B]
Get:44 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/main amd64 Components [5740 B]
Get:45 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/main amd64 c-n-f Metadata [368 B]
Get:46 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [31.0 kB]
Get:47 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/universe Translation-en [18.6 kB]
Get:48 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/universe amd64 Components [10.5 kB]
Get:49 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/universe amd64 c-n-f Metadata [1484 B]
Get:50 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/restricted amd64 Components [212 B]
Get:51 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/restricted amd64 c-n-f Metadata [116 B]
Get:52 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/multiverse amd64 Packages [748 B]
Get:53 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/multiverse Translation-en [340 B]
Get:54 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/multiverse amd64 Components [212 B]
Get:55 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports/multiverse amd64 c-n-f Metadata [116 B]
Fetched 42.1 MB in 7s (6353 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
24 packages can be upgraded. Run 'apt list --upgradable' to see them.
ubuntu@ip-10-0-4-46:~$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
2026-05-12 15:09:01 - Installing pre-requisites
Hit:1 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble InRelease
Hit:2 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates InRelease
Hit:3 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu noble-security InRelease
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
24 packages can be upgraded. Run 'apt list --upgradable' to see them.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
ca-certificates is already the newest version (20240203).
ca-certificates set to manually installed.
gnupg is already the newest version (2.4.4-2ubuntu17.4).
gnupg set to manually installed.
The following NEW packages will be installed:
  apt-transport-https
The following packages will be upgraded:
  curl libcurl3t64-gnutls libcurl4t64
3 upgraded, 1 newly installed, 0 to remove and 21 not upgraded.
Need to get 907 kB of archives.
After this operation, 39.9 kB of additional disk space will be used.
Get:1 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/universe amd64 apt-transport-https all 2.8.3 [3970 B]
Get:2 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main amd64 curl amd64 8.5.0-2ubuntu10.9 [227 kB]
Get:3 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main amd64 libcurl4t64 amd64 8.5.0-2ubuntu10.9 [342 kB]
Get:4 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates/main amd64 libcurl3t64-gnutls amd64 8.5.0-2ubuntu10.9 [334 kB]
Fetched 907 kB in 0s (26.1 MB/s)
Selecting previously unselected package apt-transport-https.
(Reading database ... 72559 files and directories currently installed.)
Preparing to unpack .../apt-transport-https_2.8.3_all.deb ...
Unpacking apt-transport-https (2.8.3) ...
Preparing to unpack .../curl_8.5.0-2ubuntu10.9_amd64.deb ...
Unpacking curl (8.5.0-2ubuntu10.9) over (8.5.0-2ubuntu10.8) ...
Preparing to unpack .../libcurl4t64_8.5.0-2ubuntu10.9_amd64.deb ...
Unpacking libcurl4t64:amd64 (8.5.0-2ubuntu10.9) over (8.5.0-2ubuntu10.8) ...
Preparing to unpack .../libcurl3t64-gnutls_8.5.0-2ubuntu10.9_amd64.deb ...
Unpacking libcurl3t64-gnutls:amd64 (8.5.0-2ubuntu10.9) over (8.5.0-2ubuntu10.8) ...
Setting up apt-transport-https (2.8.3) ...
Setting up libcurl4t64:amd64 (8.5.0-2ubuntu10.9) ...
Setting up libcurl3t64-gnutls:amd64 (8.5.0-2ubuntu10.9) ...
Setting up curl (8.5.0-2ubuntu10.9) ...
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.7) ...
Scanning processes...
Scanning candidates...
Scanning linux images...

Running kernel seems to be up-to-date.

Restarting services...
 systemctl restart fwupd.service packagekit.service

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
Hit:1 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble InRelease
Hit:2 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-updates InRelease
Hit:3 http://eu-north-1.ec2.archive.ubuntu.com/ubuntu noble-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu noble-security InRelease
Get:5 https://deb.nodesource.com/node_20.x nodistro InRelease [12.1 kB]
Get:6 https://deb.nodesource.com/node_20.x nodistro/main amd64 Packages [14.4 kB]
Fetched 26.6 kB in 1s (48.2 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
21 packages can be upgraded. Run 'apt list --upgradable' to see them.
2026-05-12 15:09:11 - Repository configured successfully.
2026-05-12 15:09:11 - To install Node.js, run: apt install nodejs -y
2026-05-12 15:09:11 - You can use N|solid Runtime as a node.js alternative
2026-05-12 15:09:11 - To install N|solid Runtime, run: apt install nsolid -y

ubuntu@ip-10-0-4-46:~$ sudo apt install -y nodejs
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  nodejs
0 upgraded, 1 newly installed, 0 to remove and 21 not upgraded.
Need to get 32.2 MB of archives.
After this operation, 196 MB of additional disk space will be used.
Get:1 https://deb.nodesource.com/node_20.x nodistro/main amd64 nodejs amd64 20.20.2-1nodesource1 [32.2 MB]
Fetched 32.2 MB in 1s (35.2 MB/s)
Selecting previously unselected package nodejs.
(Reading database ... 72563 files and directories currently installed.)
Preparing to unpack .../nodejs_20.20.2-1nodesource1_amd64.deb ...
Unpacking nodejs (20.20.2-1nodesource1) ...
Setting up nodejs (20.20.2-1nodesource1) ...
Processing triggers for man-db (2.12.0-4build2) ...
Scanning processes...
Scanning linux images...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
ubuntu@ip-10-0-4-46:~$ node -v
v20.20.2
ubuntu@ip-10-0-4-46:~$ npm -v
10.8.2
ubuntu@ip-10-0-4-46:~$ sudo apt install git -y
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
git is already the newest version (1:2.43.0-1ubuntu7.3).
git set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 21 not upgraded.
ubuntu@ip-10-0-4-46:~$ git --version
git version 2.43.0
ubuntu@ip-10-0-4-46:~$ mkdir actions-runner && cd actions-runner
ubuntu@ip-10-0-4-46:~/actions-runner$ curl -o actions-runner-linux-x64-2.334.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.334.0/actions-runner-linux-x64-2.334.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100  214M  100  214M    0     0   292M      0 --:--:-- --:--:-- --:--:--  338M
ubuntu@ip-10-0-4-46:~/actions-runner$ echo "048024cd2c848eb6f14d5646d56c13a4def2ae7ee3ad12122bee960c56f3d271  actions-runner-linux-x64-2.334.0.tar.gz" | shasum -a 256 -c
actions-runner-linux-x64-2.334.0.tar.gz: OK
ubuntu@ip-10-0-4-46:~/actions-runner$ tar xzf ./actions-runner-linux-x64-2.334.0.tar.gz
ubuntu@ip-10-0-4-46:~/actions-runner$ ./config.sh --url https://github.com/shajedultonmoy/Ostad-Assignment05 --token BF64Y7QQ6S7L5HOLD3PYUJTKANJB4

--------------------------------------------------------------------------------
|        ____ _ _   _   _       _          _        _   _                      |
|       / ___(_) |_| | | |_   _| |__      / \   ___| |_(_) ___  _ __  ___      |
|      | |  _| | __| |_| | | | | '_ \    / _ \ / __| __| |/ _ \| '_ \/ __|     |
|      | |_| | | |_|  _  | |_| | |_) |  / ___ \ (__| |_| | (_) | | | \__ \     |
|       \____|_|\__|_| |_|\__,_|_.__/  /_/   \_\___|\__|_|\___/|_| |_|___/     |
|                                                                              |
|                       Self-hosted runner registration                        |
|                                                                              |
--------------------------------------------------------------------------------

# Authentication


√ Connected to GitHub

# Runner Registration

Enter the name of the runner group to add this runner to: [press Enter for Default]

Enter the name of runner: [press Enter for ip-10-0-4-46]

This runner will have the following labels: 'self-hosted', 'Linux', 'X64'
Enter any additional labels (ex. label-1,label-2): [press Enter to skip]

√ Runner successfully added

# Runner settings

Enter name of work folder: [press Enter for _work]

√ Settings Saved.

ubuntu@ip-10-0-4-46:~/actions-runner$ ./run.sh

√ Connected to GitHub

Current runner version: '2.334.0'
2026-05-12 15:20:46Z: Listening for Jobs
*************************************************************************************************************************************

GIT Repo Part :

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (main)
$ git checkout -b development
Switched to a new branch 'development'

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ git push -u origin development
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote:
remote: Create a pull request for 'development' on GitHub by visiting:
remote:      https://github.com/shajedultonmoy/Ostad-Assignment05/pull/new/development
remote:
To https://github.com/shajedultonmoy/Ostad-Assignment05.git
 * [new branch]      development -> development
branch 'development' set up to track 'origin/development'.

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ mkdir -p .github/workflows

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ touch .github/workflows/react-ci.yml

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ .github/workflows/react-ci.yml

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ vi react-ci.yml

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ git checkout -b development
fatal: a branch named 'development' already exists

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ git add .
warning: in the working copy of 'react-ci.yml', LF will be replaced by CRLF the next time Git touches it

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ git commit -m "Added GitHub Actions CI pipeline"
[development 3efb374] Added GitHub Actions CI pipeline
 2 files changed, 23 insertions(+)
 create mode 100644 .github/workflows/react-ci.yml
 create mode 100644 react-ci.yml

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$ git push -u origin development
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 638 bytes | 319.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/shajedultonmoy/Ostad-Assignment05.git
   01f4ea1..3efb374  development -> development
branch 'development' set up to track 'origin/development'.

tonmo@GHOST MINGW64 /d/DEVOPS WORKS/Moonlight Coffee (development)
$
**************************************************************************************************************************************

What is CI/CD?

CI/CD automates software build, test, and deployment processes.

CI (Continuous Integration)

Automatically builds/tests code after push.

CD (Continuous Delivery/Deployment)

Automatically deploys application after successful build.

Benefits:

Faster development
Reduced manual work
Early bug detection
Better software quality

What is Self-Hosted Runner?

A self-hosted runner is your own machine/server that executes GitHub Actions workflows.

In your assignment:

AWS EC2 Ubuntu server acts as self-hosted runner
GitHub sends jobs to this server

***************************************************************************************************************************************


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
