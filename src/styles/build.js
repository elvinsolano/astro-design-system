const StyleDictionaryPackage = require('style-dictionary');//.extend('./src/styles/config.json');
const _ = require('lodash');
const fs = require('fs');
const ncp = require('ncp').ncp;

function fileHeader(options, commentStyle) {
  var to_ret = '';
  // for backward compatibility we need to have the user explicitly hide them
  var showFileHeader = (options) ? options.showFileHeader : true;
  if (showFileHeader) {
    if (commentStyle === 'short') {
      to_ret += '\n';
      to_ret += '// Do not edit directly\n';
      to_ret += '// Generated on ' + new Date().toUTCString() + '\n';
      to_ret += '\n';
    } else {
      to_ret += '/**\n';
      to_ret += ' * Do not edit directly\n';
      to_ret += ' * Generated on ' + new Date().toUTCString() + '\n';
      to_ret += ' */\n\n';
    }
  }

  return to_ret;
}

function variablesWithPrefix(prefix, properties, commentStyle) {
  return _.map(properties, function(prop) {
      var to_ret_prop = prefix + prop.name + ': ' + (prop.attributes.category==='asset' ? '"'+prop.value+'"' : prop.value) + ';';

      if (prop.comment) {
        if (commentStyle === 'short') {
          to_ret_prop = to_ret_prop.concat(' // ' + prop.comment);
        } else {
          to_ret_prop = to_ret_prop.concat(' /* ' + prop.comment + ' */');
        }
      }

      return to_ret_prop;
    })
    .filter(function(strVal) { return !!strVal })
    .join('\n');
}

function getStyleDictionaryConfig(brand, platform) {
  return {
    "source": [
      `src/styles/properties/brands/${brand}/**/*.json`,
      "src/styles/properties/global/**/*.json",
      // `properties/platforms/${platform}/*.json`
    ],
    "platforms": {
      "css": {
        "transforms": ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/css", "size/px"],
        "buildPath": `src/css/${brand}/`,
        "files": [{
          "destination": "_variables.css",
          "format": "css/host"
        }],
        // "actions": ["copy_assets"]
      },
      "fonts": {
        "transforms": ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem", "color/css", "size/px"],
        "buildPath": `src/css/${brand}/`,
        "files": [{
          "destination": "fonts.css",
          "format": "css/fonts"
        }]
      }
    }
  };
}

console.log('Build started...');

['brand-1'].map(function (brand) {
  ['css','fonts'].map(function (platform) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

    // Sets CSS variables in Host
    StyleDictionary.registerFormat({
      name: 'css/host',
      formatter: function(dictionary) {
        return fileHeader(this.options) +
          ':root {\n' +
          variablesWithPrefix(' --', dictionary.allProperties) +
          '\n}\n';
      }
    });

    const template = _.template( fs.readFileSync('src/styles/templates/font.css.template') );

    StyleDictionary.registerFormat({
      name: 'css/fonts',
      formatter: template
    });

    // Use Pixels instead of Rems
    StyleDictionary.registerTransform({
      name: 'size/px',
      type: 'value',
      matcher: function(prop) {
        // Add any types where we want to use pixels instead of REMs
        return prop.attributes.type === 'container';
      },
      transformer: function(prop) {
        return parseFloat(prop.original.value) + 'px';
      }
    });

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  })
})

console.log('\n==============================================');
console.log('\nBuild completed!');
