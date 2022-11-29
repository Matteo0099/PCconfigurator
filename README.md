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
{%- set custom_component_descriptions = {"readme": "Generates this awesome readme file."} -%}
{% for integration in custom_components %}
### [{{integration.name}}]({{integration.documentation}})
{% if integration.domain in custom_component_descriptions %}
_{{custom_component_descriptions[integration.domain]}}_
{% endif -%}
{% endfor -%}
```

## Others

**Example usage for documenting Alexa smart home utterances**
```
{%- set alexa_configuration =
	{
		"domains": ["light", "camera", "vacuum", "fan"],
		"entities": {
			"included": ["climate.downstairs", "input_boolean.guest_mode", "input_boolean.assistant_notifications", "input_boolean.andrea_morning", "cover.garage_door"],
			"excluded": ["light.kitchen_light_1", "light.kitchen_light_2", "light.cabinet_split", "light.cabinet_large", "light.test_sensor_led", "camera.doorbell"]
		}
	}
-%}
{%- macro sentence_case(text) -%}
	{{ text[0]|upper}}{{text[1:] }}
{%- endmacro -%}
{% set data = namespace(domains=[]) %}
{%- for state in states %}
{%- if (state.entity_id in alexa_configuration.entities.included) or (state.entity_id not in alexa_configuration.entities.included and state.domain in alexa_configuration.domains) %}
{%- if state.domain not in data.domains %}
{%- set data.domains = data.domains + [state.domain] %}
{%- endif %}
{%- endif %}
{%- endfor %}
{%- for domain in data.domains %}
###  {{ sentence_case(domain) }}
{%- if domain == 'climate' %}
Control a thermostat temperature, run mode, etc...
Climate Mode | Accepted words
-- | --
AUTO | "auto", "automatic"
COOL | "cool", "cooling"
HEAT | "heat", "heating"
ECO | "eco", "economical"
OFF | "off"
**What you say:**
_"Alexa, set thermostat to 70."_
_"Alexa, set the AC to 70."_
_"Alexa, make it warmer in here."_
_"Alexa, make it cooler in here."_
_"Alexa, set `DEVICE NAME` to `CLIMATE MODE`."_
_"Alexa, turn on the `CLIMATE MODE`."_
_"Alexa, turn off the `DEVICE NAME`."_
{% endif %}
**Device Names:**
{%- for state in states[domain] %}
{%- if (state.entity_id in alexa_configuration.entities.included) or (state.entity_id not in alexa_configuration.entities.included and state.domain in alexa_configuration.domains) %}
{%- if state.entity_id not in alexa_configuration.entities.excluded %}
- {{state.name}}
{%- endif %}
{%- endif %}
{%- endfor %}
{%- endfor %}
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
