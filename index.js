var sass = require('node-sass');

sass.render({
  data: '$my_module_global: "World"; .test { content: hi(); }',
  functions: {
    'hi($name: $my_module_global)': function(name, done) {
      done(sass.types.String('Hello, ' + name.getValue() + '!'));
    }
  }
}, function(error, result) {
  console.log(result ? result.css.toString() : error);
});

