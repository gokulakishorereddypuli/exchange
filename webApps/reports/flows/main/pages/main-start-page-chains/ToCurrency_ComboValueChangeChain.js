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

  class ToCurrency_ComboValueChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     */
    async run(context, { value }) {
      const { $page, $flow, $application, $constants, $variables } = context;

      $variables.toCurrency = value;

      if ($variables.fromCurrency !== 0 && $variables.toCurrency !== 0) {
        $variables.fromValue = 1;

        $variables.toValue = $variables.fromValue *($variables.toCurrency/$variables.fromCurrency);
      }
    }
  }

  return ToCurrency_ComboValueChangeChain;
});
