'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var OnsenuiPhonegapGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous OnsenuiPhonegap generator!'));

        var prompts = [{
            type: 'input',
            name: 'appname',
            message: 'What is the name of your app?',
            default: path.basename(process.cwd())
        }, {
            type: 'list',
            name: 'templateName',
            message: 'Please choose a template from below (more info: http://goo.gl/Cm3GRn) :',
            choices: [{
                name: 'Minimum',
                value: 'minimum'
            }, {
                name: 'Sliding Menu',
                value: 'smenu'
            }, {
                name: 'Sliding Menu & Navigator',
                value: 'menunav'
            }, {
                name: 'Tab bar',
                value: 'tab'
            }, {
                name: 'Master-Detail',
                value: 'mdetail'
            }, {
                name: 'Split View',
                value: 'sview'
            }, {
                name: 'Split View & Navigator',
                value: 'sviewnav'
            }],
            default: 'minimum'
        }];

        this.prompt(prompts, function(props) {
            this.appname = props.appname;
            this.templateName = props.templateName;
            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('hooks');
        this.mkdir('merges');
        this.mkdir('platforms');
        this.mkdir('plugins');
        this.mkdir('www');

        this.copy('phonegap/hooks/README.md', 'hooks/README.md');
        this.directory('phonegap/www/res', 'www/res');
        this.copy('phonegap/www/icon.png', 'www/icon.png');
        this.copy('phonegap/www/_config.xml', 'www/config.xml');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');

        if (this.templateName === 'minimum') {
            this.directory('onsenui/minimum/', 'www/');
        } else if (this.templateName === 'smenu') {
            this.directory('onsenui/sliding_menu/', 'www/');
        } else if (this.templateName === 'menunav') {
            this.directory('onsenui/sliding_menu_navigator/', 'www/');
        } else if (this.templateName === 'tab') {
            this.directory('onsenui/tab_bar/', 'www/');
        } else if (this.templateName === 'mdetail') {
            this.directory('onsenui/master_detail/', 'www/');
        } else if (this.templateName === 'sview') {
            this.directory('onsenui/split_view/', 'www/');
        } else if (this.templateName === 'sviewnav') {
            this.directory('onsenui/split_view_navigator/', 'www/');
        }
    },

    projectfiles: function() {
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    }
});

module.exports = OnsenuiPhonegapGenerator;
