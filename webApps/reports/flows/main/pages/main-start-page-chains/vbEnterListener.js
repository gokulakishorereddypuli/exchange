define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class vbEnterListener extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application, $constants, $variables } = context;

      $variables.fromValue = undefined;

      $variables.toValue = undefined;

      $variables.fromCurrency = undefined;

      $variables.toCurrency = undefined;
    }
  }

  return vbEnterListener;
});
