const fs = require('fs');
const path = require('path');

const iconsPath = path.join(__dirname, '../src/icons');

function transform(input) {
  const replacements = {
    svgs: 'Svg',
    circle: 'Circle',
    clipPath: 'ClipPath',
    defs: 'Defs',
    ellipse: 'Ellipse',
    g: 'G',
    image: 'Image',
    line: 'Line',
    linearGradient: 'LinearGradient',
    mask: 'Mask',
    path: 'Path',
    pattern: 'Pattern',
    polygon: 'Polygon',
    polyline: 'Polyline',
    radialGradient: 'RadialGradient',
    rect: 'Rect',
    stop: 'Stop',
    svg: 'Svg',
    symbol: 'Symbol',
    tSpan: 'TSpan',
    text: 'Text',
    textPath: 'TextPath',
    use: 'Use',
  };

  let used = [];

  const transformed = Object.entries(replacements).reduce(
    (result, [key, value]) => {
      const regex = new RegExp(`(<(\/)?)(${key})(>)?`, 'g');

      if (regex.test(result)) {
        if (key !== 'svg') {
          used.push(value);
        }

        return result.replace(regex, `$1${value}$4`);
      }

      return result;
    },
    input
  );

  const subModules = used.map((u) => `  ${u},\n`).join('');

  const imports = `import Svg, {\n${subModules}} from 'svgs';`;

  const lines = transformed.split(/\n/g);

  lines.splice(2, 0, imports);

  return lines.join('\n');
}

function catchError(err) {
  if (err) {
    console.error(err);
  }
}

fs.readdir(iconsPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    const filePath = path.resolve(iconsPath, file);

    const text = fs.readFileSync(filePath, 'utf8', catchError);

    const transformedText = transform(text);

    fs.writeFile(filePath, transformedText, 'utf8', catchError);
  });
});
