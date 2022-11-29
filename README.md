# Readme 

**Pc-configurator 2022** 

Code
Issues
Pull requests
Actions
Security

    Insights

readme/README.md
@l-j

[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE.md)

[![hacs][hacsbadge]][hacs]
![Project Maintenance][maintenance-shield]
[![BuyMeCoffee][buymecoffeebadge]][buymecoffee]

[![Discord][discord-shield]][discord]

_Use the installation in the top of you index.html page!_
_If you're in other languages, in the top of your style.css or global.css_

## Installation

1. -Download it as zip.

## Warning!

This integration **will** replace your files!:

- README.md

## Configuration options

Key | Type | Required | Description
-- | -- | -- | --
`convert_lovelace` | `boolean` | `False` | Generate a `ui-lovelace.yaml` file (only usefull if you use the UI to edit lovelace and want to share that in a yaml format.)

## Usage

In the root of your configuration directory (folder) you will get a new directory (folder) called "templates" in that directory (folder) there will be a file called "README.j2" this is where you change the template that will be used for generation of the README.md file.

When you are happy with how the template look, run the service `readme.generate` in Home Assistant, this will generate the README.md file, and the ui-lovelace.yaml file if you enabled that.

### custom_components

The information about custom integrations are fetched from the integrations manifest.json file, the folowing keys are available:

- `domain`
- `name`
- `documentation`
- `php backend`
- `version`

**Example usage of the  `custom_components` variable:**

```

***

[readme]: https://github.com/custom-components/readme
[buymecoffee]: https://www.buymeacoffee.com/ludeeus
[buymecoffeebadge]: https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?style=for-the-badge
[commits-shield]: https://img.shields.io/github/commit-activity/y/custom-components/readme.svg?style=for-the-badge
[commits]: https://github.com/custom-components/readme/commits/master
[hacs]: https://github.com/hacs/integration
[hacsbadge]: https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge
[discord]: https://discord.gg/Qa5fW2R
[discord-shield]: https://img.shields.io/discord/330944238910963714.svg?style=for-the-badge
[exampleimg]: example.png
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/
[license-shield]: https://img.shields.io/github/license/custom-components/readme.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Joakim%20Sørensen%20%40ludeeus-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/custom-components/readme.svg?style=for-the-badge
[releases]: https://github.com/custom-components/readme/releases

Footer
© 2022 GitHub, Inc.
Navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

readme/README.md at master · custom-components/readme
