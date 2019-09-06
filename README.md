# JSON to Markdown YAML Frontmatter Converter

This script is designed to convert the contents of each object in a JSON array to a Markdown file containing the contents of the object as YAML frontmatter.

It's designed for an array of objects that each have a unique identifier that can be used as the filename for the Markdown version of that object.

## Usage

```bash
# yarn convert [input_file] [output_dir] [filename_key]

# Example:
yarn convert example.json output id
```

## Example

Using the example from the Usage section above:

### Input

```json
// example.json

[
    { "id": 123, "numbers": [1,2,3] },
    { "id": 456, "numbers": [4,5,6] }
]

```

### Output

```md
<!-- output/123.md -->
---
id: 123
numbers:
  - 1
  - 2
  - 3
---


<!-- output/456.md -->
---
id: 456
numbers:
  - 4
  - 5
  - 6
---

```