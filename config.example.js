// Adjust to your needs here:
let config = {
    teamgrid_web_url: 'https://web.teamgrid.app/YOUR_TEAMGRID_TEAMALIAS/', // with trailing slash
    teamgrid_apitoken: '', // Team-Settings > Developers
    teamgrid_userid: '', // Team-Settings > User > User Id
    node_path: '/usr/local/bin/node',
    bitbar_plugins_path: '/your/local/path/to/your/bitbar/plugins', // without trailing slash
};


// DO NOT EDIT BELOW THIS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else if (window) {
    window.config = config;
}
