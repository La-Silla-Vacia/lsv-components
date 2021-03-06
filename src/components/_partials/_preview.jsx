/* eslint-disable react/react-in-jsx-scope */
import { h, Component } from 'preact';

export default class PreviewTemplate extends Component {
  render(props) {
    return (
      <html lang="es" dir="ltr" prefix="og: http://ogp.me/ns#" className="no-js fonts-loaded">
      <head>
        <meta charSet="utf-8" />
        <meta name="referrer" content="origin" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Roboto+Condensed:300,300i,400,400i,700,700i|Roboto+Slab:100,300,400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
          rel="stylesheet" />
        <link type="text/css" rel="stylesheet" href="//cdn.jsdelivr.net/bootstrap/3.3.5/css/bootstrap.css"
              media="all" />
        <style dangerouslySetInnerHTML={{__html: '@import url("http://lasillavacia.com/modules/system/system.base.css?onqjy0"); @import url("http://lasillavacia.com/modules/contextual/contextual.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/jquery_update/replace/ui/themes/base/minified/jquery.ui.core.min.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/jquery_update/replace/ui/themes/base/minified/jquery.ui.theme.min.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/jquery_update/replace/ui/themes/base/minified/jquery.ui.resizable.min.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/jquery_update/replace/ui/themes/base/minified/jquery.ui.button.min.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/jquery_update/replace/ui/themes/base/minified/jquery.ui.dialog.min.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/media/css/media.css?onqjy0");@import url("http://lasillavacia.com/sites/all/modules/simplenews/simplenews.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/date/date_api/date.css?onqjy0"); @import url("http://lasillavacia.com/modules/field/theme/field.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/logintoboggan/logintoboggan.css?onqjy0"); @import url("http://lasillavacia.com/modules/node/node.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/views/css/views.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/ckeditor/css/ckeditor.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/admin_menu/admin_menu.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/admin_menu/admin_menu_toolbar/admin_menu_toolbar.css?onqjy0"); @import url("http://lasillavacia.com/modules/shortcut/shortcut.css?onqjy0");@import url("http://lasillavacia.com/sites/all/modules/ctools/css/ctools.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/panels/css/panels.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/layouts/despliegue/despliegue.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/webform/css/webform.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/ckeditor/css/ckeditor.editor.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/modules/panels/plugins/layouts/onecol/onecol.css?onqjy0");@import url("http://lasillavacia.com/sites/all/themes/bootstrap/css/3.3.5/overrides.min.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/style.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/color.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/base.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/lsv_custom.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/responsive.css?onqjy0"); @import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/responsive-custom.css?onqjy0");@import url("http://lasillavacia.com/sites/all/themes/lasillavacia/css/css_custom/lsv.css?onqjy0");'}} />
        <link rel="stylesheet" href="/assets/styles/app.css" />
      </head>
      <body>
      <div dangerouslySetInnerHTML={{ __html: props.yield }} />

      <script src="/assets/scripts/app.js" />
      </body>
      </html>
    );
  }
}
