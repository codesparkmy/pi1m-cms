/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                         i *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  'user/create': ['userCreatePolicy','isLoggedIn'],
  'user/login':['loginPolicy'],
 // 'employee/getAll': ['isLoggedIn'],
//  'employee/getOne': ['isLoggedIn'],
  //'employee/create': ['isLoggedIn'],
 // 'employee/update': ['isLoggedIn'],
 // 'visitor/getAll': ['isLoggedIn'],
  // 'visitor/getOne': ['isLoggedIn'],
  // 'visitor/create': ['isLoggedIn'],
  // 'visitor/update': ['isLoggedIn'],
  // 'training/getAll': ['isLoggedIn'],
  // 'training/getOne': ['isLoggedIn'],
  // 'training/create': ['isLoggedIn'],
  // 'training/update': ['isLoggedIn'],

};
