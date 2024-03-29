import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'David Sandoz';
    this.GOOGLE_ANALYTICS_ID = 'UA-157331-5';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages
    let additionalPackages: ExtendPackages[] = [
      // required for dev build
      {
        name: 'angular2-markdown',
        path: 'node_modules/angular2-markdown/bundles/angular2-markdown.umd.min.js'
      },

      // required for prod build
      {
        name: 'angular2-markdown/*',
        path: 'node_modules/angular2-markdown/bundles/angular2-markdown.umd.min.js'
      }

      // tslib and @angular/common/http were added because required by ng-inline-svg
      // {
      //   name: 'tslib',
      //   path: 'node_modules/tslib/tslib.js'
      // },
      //
      // {
      //   name: '@angular/common/http',
      //   path: 'node_modules/@angular/common/bundles/common-http.umd.js',
      // },
      //
      // {
      //   name: 'ng-inline-svg',
      //   path: 'node_modules/ng-inline-svg/lib/index.js'
      // },
      //
      // The imports below help to give access to the files, but it's done correctly so it doesn't work.
      // {
      //   name: 'ng-inline-svg',
      //   path: 'node_modules/ng-inline-svg/lib/inline-svg.directive.js',
      // },
      //
      // {
      //   name: 'ng-inline-svg',
      //   path: 'node_modules/ng-inline-svg/lib/inline-svg.module.js',
      // },
      //
      // {
      //   name: 'ng-inline-svg',
      //   path: 'node_modules/ng-inline-svg/lib/svg-cache.service.js',
      // }
    ];

    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
