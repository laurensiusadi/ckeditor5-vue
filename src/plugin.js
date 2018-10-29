/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import CKEditorComponent from './ckeditor.js';

const CKEditor = {
	/**
	 * Instals the plugin, registering the `<ckeditor>` component.
	 *
	 * @param {Vue} Vue The Vue object.
	 * @param {Object} [config] Plugin configuration.
	 * @param {Object.<String,Function>} [config.editors] The configuration of editor constructors and their names.
	 * @param {String>} [config.componentName] The name of the component used in the template. `'ckeditor'` by default.
	 */
	install( Vue, config ) {
		// https://github.com/gotwarlost/istanbul/issues/665
		config = config || {};

		Vue.component( config.componentName || 'ckeditor', CKEditorComponent );

		Vue.prototype.$_ckeditor_types = config.editors;
	},
	component: CKEditorComponent
};

export default CKEditor;