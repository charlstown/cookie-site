# Cookie Site

[![mkdocs](https://img.shields.io/badge/mkdocs-1.4-blue)](https://www.mkdocs.org/)
[![template](https://img.shields.io/badge/template-material-dd2e57)](https://squidfunk.github.io/mkdocs-material/)
[![license](https://img.shields.io/badge/license-MIT-green.svg?logo=cachet&style=flat&logoColor=green)](https://opensource.org/licenses/MIT)
[![My Site](https://img.shields.io/badge/about%20me-carlosgrande.me-red?style=flat&logo=aboutdotme&logoColor=red)](https://carlosgrande.me/)

This is a 🍪 cookiecutter multipurpose template for creating a wide range of websites, from personal sites and blogs to corporate sites and online communities. With this template, you can easily get started on your project and have a professional-looking website up and running in no time.

![Logo](docs/assets/images/logo.png)

Features:

- Modern and clean design
- Fully responsive and mobile-friendly
- Easy to customize and extend
- Built with the latest web technologies
- Compatible with a wide range of browsers
- Cross-platform support


This template includes all the essential features you need to create a website that meets your specific needs. Whether you're a developer, designer, blogger, entrepreneur, or someone who just wants to have an online presence, this template has got you covered.

</br>

<details><summary><b>Readme contents</b></summary>

- [Cookie Site](#cookie-site)
  - [1. What is Cookie Site](#1-what-is-cookie-site)
  - [1.1 What is cookiecutter](#11-what-is-cookiecutter)
  - [1.2 Repository contents](#12-repository-contents)
- [2. Installation](#2-installation)
  - [Requirements](#requirements)
  - [2.1 Install cookiecutter](#21-install-cookiecutter)
  - [2.2 Download the custom template](#22-download-the-custom-template)
- [3. Usage](#3-usage)
  - [3.1 Install the requirements](#31-install-the-requirements)
  - [3.2 Test run](#32-test-run)
  - [3.3 Starting to code your project](#33-starting-to-code-your-project)
- [4. Troubleshooting](#4-troubleshooting)
- [5. Disclaimer](#5-disclaimer)
- [6. Help Wanted](#6-help-wanted)
- [7. Other links](#7-other-links)

</details>

</br>

---

## 1. What is Cookie Site

This is a modern and clean template for MkDocs, built using the Material Design framework. The template is fully responsive and mobile-friendly, making it easy to view your content on any device. It's also easy to customize and extend, so you can make it your own.

Built with the latest web technologies, this template is compatible with a wide range of browsers and has cross-platform support. Whether you're creating a personal site, a blog, documentation, or a corporate site, the MkDocs Material Template is the perfect choice for your project.


## 1.1 What is cookiecutter

A command-line utility that creates projects from cookiecutters (project templates), e.g. creating a Python package project from a Python package project template.

Visit these links to learn more about cookiecutter.
Documentation: https://cookiecutter.readthedocs.io/
GitHub: https://github.com/cookiecutter/cookiecutter


## 1.2 Repository contents

```
cookie-site                           -> Project directory.
├── cookiecutter.json                   -> Cookiecutter values.
├── {{cookiecutter.repository_name}}    -> Cookiecutter template.
│   └── ...
├── mkdocs.yml                          -> mkdocs configuration file.
├── docs                                -> Project documentation.
│   └── ...
├── README.md                           -> README file.
├── code_of_conduct.md                  -> Code of conduct file.
├── contributing.md                     -> Contributing file.
├── LICENSE                             -> LICENSE file.
└── requirements.txt                    -> Requirements to run the project.
```

</br>

# 2. Installation

To create the project from the template you need to install cookiecutter and follow these instructions.

> **Note**  
> It is recommended to create and activate a virtual environment to install the libraries


## Prerequisites

Before installing Cookiecutter, please make sure you have the following software installed on your machine/environment:
- [Python](https://www.python.org/downloads/)
- [Pip](https://pip.pypa.io/en/stable/installation/)

To Verify the installation you can follow this steps.

- Check **Python** installation:

  To check if Python is installed on a machine, open a terminal or command prompt like `git bash` and type:

  ```bash
  python --version
  ```
  This will display the version number of Python, if it is installed.

- Check **Pip** installation:

  To check if pip is installed, you can run the following command in the terminal or command prompt:
  ```bash
  pip --version
  ```
  If pip is installed, this command will display the version number. If pip is not installed, you will receive an error message.


## 2.1 Install cookiecutter

- **Install cookiecutter:**

  Installing cookiecutter package is very easy, you can simply run the next command to install it.
  ```bash
  python -m pip install cookiecutter
  ```

- **(optional) Follow this step if you don't have pypi as trusted host permanently:**

  If you don't have access to pypi, you can install cookiecutter with the following flags:
  ```bash
  pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org cookiecutter
  ```

  Or set the repositories as trusted in the global configuration parameters with the following command and then do the installation.

  ```bash
  pip config set global.trusted-host "pypi.org files.pythonhosted.org pypi.python.org"
  ```


Visit the link to the cookiecutter documentation to learn more about the installation:  
[Install cookiecutter](https://cookiecutter.readthedocs.io/en/stable/installation.html#install-cookiecutter)


## 2.2 Download the custom template

To generate a custom project from the template, follow these steps:

1. Navigate to the path where you desire to generate the project folder.
2. Run the cookiecutter command followed by the repository URL.
  ```bash
  python -m cookiecutter https://github.com/charlstown/cookie-site.git
  ```
3. Fill out the form in the console and the project will be generated at the end.

**:fireworks::raised_hands: Congrats!! you have your project set and ready to roll.**

</br>

# 3. Usage

## 3.1 Install the requirements

You can install the requirements for the project by running the command
```bash
pip install -r requirements.txt
```

Remember that if you didn't set the pypi as trusted host globally in the previous step, you can add the following flags to the command.
```
pip install --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org -r requirements.txt
```


## 3.2 Test run

After setting up the template, you can do a test run.

Serve the site locally running this command.
```bash
mkdocs serve -w overrides/
```

You may add the flag '-a localhost:8080' to select a custom local port.

## 3.3  Adding the project to a new Github repository

- **Step 1: Create a new repository in github:**

  Create the new repository and make sure you give it the same name of the project folder, in our case my-cool-site.

  > **Warning**
  > Don't add any predefined file from github in the new repository, all the files are included in the local project folder.

- **step 2: Push the local repository:**

  ```bash
  git remote add origin {{LINK TO YOUR EMPTY REPO}}
  git branch -M main
  git push -u origin main
  ```

## 3.3 Starting to code your project

To start coding your project we recommend to understand the project structure.
```
my-cool-site/                   -> Project directory
├── mkdocs.yml                  -> MkDocs configuration file
├── docs/                       -> Pages and site content
│   ├── about/                  -> About section with pages
│   ├── assets/                 -> Global assets for the site
│   │   ├── images              -> Global images for the site
│   │   ├── javascripts         -> Global javascripts for the site
│   │   └── stylesheets         -> Global CSS styles for the site
│   ├── getting-started.md      -> Getting started page
│   └── index.md                -> Home page
├── overrides/                  -> HTML to override material theme
│   ├── home.html               -> HTML for the home page
│   └── main.html               -> HTML for all pages
├── README.md                   -> README file.
├── code_of_conduct.md          -> Code of conduct file
├── contributing.md             -> Contributing file
├── LICENSE                     -> LICENSE file
└── requirements.txt            -> Requirements to run the project
```

### Understand the project structure



</br>

# 4. Troubleshooting

The main branch has been tested and before any push, we make sure everything is working fine.
Feel free to open a new issue if you see the archetype is no working correctly or any additional requirement is needed.

</br>

# 5. Disclaimer

This is an archetype template done in MkDocs using the library cookiecutter. This template is intended to help creating a personal site, a blog, documentation, or a corporate site.

Do not use this template for any commercial nor redistribution purpose. Actually, the use of such tool might be allowed for open-source or private projects.

</br>

# 6. Help Wanted

This repository does provide the required installation instructions to install it by your own.
Feel free to contact me on https://carlosgrande.me/contact-me-carlos-grande/

</br>

# 7. Other links

- [carlosgrande.me](https://carlosgrande.me/)
- [Cookiecutter documentation]( https://cookiecutter.readthedocs.io/)
- [Coockiecutter official repository](https://github.com/cookiecutter/cookiecutter)
- [MkDocs official site](https://www.mkdocs.org/)
- [Material template official site](https://squidfunk.github.io/mkdocs-material/)
