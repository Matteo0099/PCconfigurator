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
