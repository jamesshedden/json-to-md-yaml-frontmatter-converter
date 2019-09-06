const fs = require('fs')
const path = require('path')
const YAML = require('json-to-pretty-yaml');

const args = process.argv.slice(2)
const input_file = args[0]
const output_dir = args[1]
const filename_key = args[2]

const items = JSON.parse(
    fs.readFileSync(path.join(__dirname, input_file))
)

const output_dir_path = path.join(__dirname, output_dir)

if (!fs.existsSync(output_dir_path)) {
    fs.mkdirSync(output_dir_path)
}

items.map(item => {
    fs.writeFileSync(
        path.join(output_dir_path, `${item[filename_key]}.md`),
        `---\n${YAML.stringify(item)}---`
    )
})