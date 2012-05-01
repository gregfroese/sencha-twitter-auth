var rootPanel;
    
//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>


Ext.application({
    name: 'TwitterExample',
    
    controllers: [],
    views: [],
    stores: [],
    models: [],

    requires: [
        'Ext.MessageBox'
    ],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
      
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var button = Ext.create('Ext.Button', {
          text: 'Button',
          handler: function() {
            console.log("click!");
          },
        });

        // Initialize the main view
        rootPanel = Ext.Viewport.add({
          xtype: "container",
          padding: 10,
          items: [{
            xtype: "panel",
            html: "login with twitter example<br /><span id='login'></span>",
          }]
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    },
});

function addLogoutButton() {
  console.log("addLogoutButton");
  rootPanel.add(
      { 
        xtype: "button",
        id: "logoutButton",
        text: "logout of twitter",
        handler: function() {
          twttr.anywhere.signOut();
        },
      }
  );
}

function processLogin(user) {
  addLogoutButton();
};

function processLogout() {
  var items = rootPanel.getItems();
  console.log(items);
  for(i=0; i<items.items.length; i++) {
    id = items.items[i].getId();
    console.log(id);
    if(id=="logoutButton") {
      rootPanel.remove(items.items[i], true);
    }
  }
};

function initializeAuth(T) {
  console.log("initialize auth");
  if(T.isConnected()) {
    addLogoutButton();
  }
}
