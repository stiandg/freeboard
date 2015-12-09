(function () {
    freeboard.loadWidgetPlugin({
 
        "type_name"   : "my_widget_plugin",
        "display_name": "Widget Plugin Example",
        "description" : "Some sort of description <strong>with optional html!</strong>",
        "external_scripts": [
            "http://mydomain.com/myscript1.js", "http://mydomain.com/myscript2.js"
        ],
 
        "fill_size" : false,
        "settings"    : [
            {
                "name"        : "the_text",
                "display_name": "Some Text",
                "type"        : "calculated"
            },
            {
                "name"        : "size",
                "display_name": "Size",
                "type"        : "option",
                "options"     : [
                    {
                        "name" : "Regular",
                        "value": "regular"
                    },
                    {
                        "name" : "Big",
                        "value": "big"
                    }
                ]
            }
        ],
 
        newInstance   : function(settings, newInstanceCallback)
        {
            newInstanceCallback(new myWidgetPlugin(settings));
        }
    });
 
    var myWidgetPlugin = function(settings)
    {
        var self = this;
        var currentSettings = settings;
 
        var myTextElement = $("<span></span>");
 
        self.render = function(containerElement)
        {
            $(containerElement).append(myTextElement);
        }
 
        self.getHeight = function()
        {
            if(currentSettings.size == "big")
            {
                return 2;
            }
            else
            {
                return 1;
            }
        }
 
        self.onSettingsChanged = function(newSettings)
        {
            currentSettings = newSettings;
        }
 
        self.onCalculatedValueChanged = function(settingName, newValue)
        {
            if(settingName == "the_text")
            {
                $(myTextElement).html(newValue);
            }
        }

        self.onDispose = function()
        {
        }
    }
}());
